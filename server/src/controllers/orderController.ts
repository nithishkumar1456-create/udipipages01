import { Request, Response } from 'express';
import { CATEGORIES } from '../config/categories.js';
import { razorpayInstance, getRazorpayKeyId } from '../config/razorpay.js';
import { RegistrationService } from '../services/registrationService.js';

export const createOrderController = async (req: Request, res: Response) => {
  try {
    const { fullName, email, phone, age, categoryId, tshirtSize, emergencyContact } = req.body;

    if (!fullName || !email || !phone || !age || !categoryId || !tshirtSize || !emergencyContact) {
      return res.status(400).json({ error: 'Missing required registration fields' });
    }

    const category = CATEGORIES[categoryId];
    if (!category) {
      return res.status(400).json({ error: `Invalid category: ${categoryId}` });
    }

    // Handle Free Category (3K Fun Run)
    if (category.isFree || category.priceINR === 0) {
      const freeRegistration = await RegistrationService.createRegistration({
        fullName,
        email,
        phone,
        age: Number(age),
        categoryId,
        categoryName: category.name,
        tshirtSize,
        emergencyContact,
        amountINR: 0,
        isFree: true
      });

      return res.status(200).json({
        success: true,
        isFree: true,
        registrationNumber: freeRegistration.registrationNumber,
        message: 'Free registration successful!'
      });
    }

    // Handle Paid Category (5K, 10K, 15K) via Razorpay Orders API
    const amountInPaise = Math.round(category.priceINR * 100); // Razorpay accepts amounts in paise
    const receiptId = `rcpt_${Date.now().toString().slice(-8)}`;

    const razorpayOrder = await razorpayInstance.orders.create({
      amount: amountInPaise,
      currency: 'INR',
      receipt: receiptId,
      notes: {
        category_id: categoryId,
        runner_name: fullName,
        runner_email: email
      }
    });

    // Save pending registration in database
    const pendingRegistration = await RegistrationService.createRegistration({
      fullName,
      email,
      phone,
      age: Number(age),
      categoryId,
      categoryName: category.name,
      tshirtSize,
      emergencyContact,
      amountINR: category.priceINR,
      isFree: false,
      razorpayOrderId: razorpayOrder.id
    });

    return res.status(200).json({
      success: true,
      isFree: false,
      orderId: razorpayOrder.id,
      amount: razorpayOrder.amount,
      currency: razorpayOrder.currency,
      keyId: getRazorpayKeyId(),
      registrationId: pendingRegistration.id,
      registrationNumber: pendingRegistration.registrationNumber
    });
  } catch (error: any) {
    console.error('[OrderController] Error creating order:', error);
    return res.status(500).json({
      error: 'Failed to create registration order',
      details: error.message || 'Internal server error'
    });
  }
};
