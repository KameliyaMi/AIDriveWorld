
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6 text-ai-purple">Cookie Policy</h1>
        <div className="prose max-w-none">
          <p className="mb-4">Last updated: April 30, 2025</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. What Are Cookies</h2>
          <p>Cookies are small pieces of data stored on your device (computer or mobile device) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Cookies</h2>
          <p>AIDrive.World uses cookies for various purposes, including:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Essential cookies: Required for the operation of our website</li>
            <li>Functionality cookies: Allow us to remember choices you make</li>
            <li>Analytical cookies: Allow us to recognize and count visitors</li>
            <li>Targeting cookies: Record your visit to our website and the pages you have visited</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Managing Cookies</h2>
          <p>Most web browsers allow you to control cookies through their settings. You can typically find these settings in the "options" or "preferences" menu of your browser. However, if you disable certain cookies, you may not be able to use all features of our website.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Contact Us</h2>
          <p>If you have questions or concerns about our Cookie Policy, please contact us at:</p>
          <p>Email: aidrive.world@gmail.com</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
