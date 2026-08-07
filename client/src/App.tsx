import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Objectives } from './components/Objectives';
import { EventDetails } from './components/EventDetails';
import { RouteMap } from './components/RouteMap';
import { Register } from './components/Register';
import { Gallery } from './components/Gallery';
import { Partners } from './components/Partners';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-[#0A0A0A] selection:bg-[#FF7A30] selection:text-black font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Objectives />
        <EventDetails />
        <RouteMap />
        <Register />
        <Gallery />
        <Partners />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
