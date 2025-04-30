
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsConditions = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6 text-ai-purple">Terms and Conditions</h1>
        <div className="prose max-w-none">
          <p className="mb-4">Last updated: April 30, 2025</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Agreement to Terms</h2>
          <p>By accessing and using the AIDrive.World platform and services, you agree to be bound by these Terms and Conditions ("Terms"). If you disagree with any part of these Terms, you may not access or use our services.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use of Services</h2>
          <p>Our services are intended for users who are at least 18 years old. By using our services, you represent and warrant that you meet this requirement.</p>
          <p>You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Subscription and Payments</h2>
          <p>Some of our services require a paid subscription. By subscribing to our services, you agree to pay all fees in accordance with the billing terms in effect at the time of your subscription.</p>
          <p>We reserve the right to change our subscription fees at any time, with notice provided to users before changes take effect.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Intellectual Property</h2>
          <p>All content, features, and functionality of our services, including but not limited to text, graphics, logos, and software, are owned by AIDrive.World and are protected by copyright, trademark, and other intellectual property laws.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Contact Us</h2>
          <p>If you have questions or concerns about these Terms, please contact us at:</p>
          <p>Email: aidrive.world@gmail.com</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsConditions;
