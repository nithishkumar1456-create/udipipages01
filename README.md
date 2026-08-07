# Udupipages Beach Run 2026 — Master Full-Stack Application

Production-ready marketing and registration full-stack web application for **Udupipages Beach Run 2026** held on **6th December 2026** in Udupi, India (Padukere Ground ➔ Kaup Beach).

---

## 🏗️ Repository Architecture

This repository is structured into two main applications:
- **`/client`**: Vite + React 18 + TypeScript + Tailwind CSS + GSAP (ScrollTrigger) + Framer Motion.
- **`/server`**: Node.js + Express + TypeScript + Razorpay Orders API/Checkout/Webhooks + Supabase PostgreSQL.

---

## ⚡ Quick Start (Local Setup)

### 1. Install Server & Client Dependencies

```bash
# Install Server Dependencies
cd server
npm install

# Install Client Dependencies
cd ../client
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` files to `.env` in both folders:

```bash
# Server Environment Setup
cp server/.env.example server/.env

# Client Environment Setup
cp client/.env.example client/.env
```

#### Server Environment Variables (`/server/.env`):
```env
PORT=5000
CLIENT_URL=http://localhost:5173

# Razorpay Credentials (Test Mode)
RAZORPAY_KEY_ID=rzp_test_YourTestKeyIdHere
RAZORPAY_KEY_SECRET=YourRazorpayTestSecretHere
RAZORPAY_WEBHOOK_SECRET=YourRazorpayWebhookSecretHere

# Supabase PostgreSQL Database (Port 6543 Pooler for IPv6 / Render compatibility)
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-supabase-anon-key-here
```

#### Client Environment Variables (`/client/.env`):
```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_RAZORPAY_KEY_ID=rzp_test_YourTestKeyIdHere
```

---

### 3. Run Development Servers

Run backend and frontend in separate terminal windows:

```bash
# Terminal 1: Start Express API Server (Port 5000)
cd server
npm run dev

# Terminal 2: Start Vite React App (Port 5173)
cd client
npm run dev
```

Visit **`http://localhost:5173`** in your browser.

---

## 💳 Razorpay Test vs. Live Mode Setup

1. **Test Mode (Development):**
   - Use test keys generated in your [Razorpay Dashboard](https://dashboard.razorpay.com/) beginning with `rzp_test_...`.
   - Free categories (3K Fun Run) bypass Razorpay completely.
   - Paid categories (5K, 10K, 15K) trigger Razorpay Checkout popup using test card / UPI details.
2. **Live Mode (Production):**
   - Update `RAZORPAY_KEY_ID` to `rzp_live_...` and set `RAZORPAY_KEY_SECRET` in `/server/.env`.
   - Update `VITE_RAZORPAY_KEY_ID` in `/client/.env`.
   - Configure category prices in `/server/src/config/categories.ts`.

---

## 🗄️ Supabase PostgreSQL Schema

To set up the `registrations` table in Supabase, run the following SQL query in the Supabase SQL Editor:

```sql
CREATE TABLE public.registrations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    registration_number VARCHAR(50) UNIQUE NOT NULL,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    age INTEGER NOT NULL,
    category_id TEXT NOT NULL,
    category_name TEXT NOT NULL,
    tshirt_size VARCHAR(10) NOT NULL,
    emergency_contact TEXT NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'PENDING',
    amount_paid INTEGER NOT NULL DEFAULT 0,
    razorpay_order_id TEXT,
    razorpay_payment_id TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

> ⚠️ **Deployment Note:** If deploying backend to Render, connect using Supabase transaction pooler on **port 6543** to prevent IPv6 network resolution quirks.

---

## 🎬 Hero Video Asset Reminder

- The hero section uses `/client/public/videos/hero.mp4` with poster fallback.
- Ensure all baked-in text overlay frames are stripped from the raw MP4 video prior to production deployment (all event copy is rendered kinetically via HTML/CSS).

---

## 🚀 Deploying to GitHub Pages

### Method 1: Automatic Deployment via GitHub Actions (Recommended)

1. **Enable GitHub Actions Pages Source:**
   - Push your code to GitHub.
   - Go to your repository on GitHub -> **Settings** -> **Pages**.
   - Under **Build and deployment** -> **Source**, select **GitHub Actions**.

2. **Configure Environment Secrets (Optional but Recommended):**
   - Go to **Settings** -> **Secrets and variables** -> **Actions**.
   - Add the following Repository secrets:
     - `VITE_API_BASE_URL`: Production URL of your Node/Express backend (e.g. `https://your-app.onrender.com/api`).
     - `VITE_RAZORPAY_KEY_ID`: Your Razorpay key ID (`rzp_live_...` or `rzp_test_...`).

3. **Deploy:**
   - Every push to `main` or `master` will trigger `.github/workflows/deploy.yml`.
   - You can also manually trigger a deployment under the **Actions** tab by selecting **Deploy Frontend to GitHub Pages** -> **Run workflow**.

---

### Method 2: Manual CLI Deployment

You can also deploy manually from your terminal:

```bash
# Option A: From root directory
npm run deploy

# Option B: From client directory
cd client
npm run deploy
```

> 📌 **Note:** GitHub Pages hosts the static React frontend (`client`). Your Express backend (`server`) must be hosted separately (e.g., on Render or Vercel).

