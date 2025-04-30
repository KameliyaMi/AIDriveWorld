
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6 text-ai-purple">Privacy Policy</h1>
        <div className="prose max-w-none">
          <p className="mb-4">Last updated: April 30, 2025</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p>Welcome to AIDrive.World ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.</p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
          <p>We collect personal information that you voluntarily provide to us when you register, express interest in obtaining information about us or our products, or otherwise contact us. This information may include:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Name and contact information</li>
            <li>Billing and payment details</li>
            <li>User account information</li>
            <li>Usage data and preferences</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
          <p>We use your personal information for various business purposes, including:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Providing and maintaining our services</li>
            <li>Processing your payments</li>
            <li>Communicating with you about updates or changes</li>
            <li>Improving our services and user experience</li>
            <li>Marketing and promotional purposes (with your consent)</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Contact Us</h2>
          <p>If you have questions or concerns about this Privacy Policy, please contact us at:</p>
          <p>Email: aidrive.world@gmail.com</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
