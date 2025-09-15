import React from 'react';

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 prose prose-neutral">
      {/* ... existing code ... top-level container and heading */}
      <h1>Terms of Service</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>

      <h2>Overview</h2>
      <p>
        Welcome to GirlsForBros. By booking or using our services, you agree to these terms.
      </p>

      <h2>Coaching Services</h2>
      <p>
        We offer coaching for personal development and dating. Results vary by individual effort, circumstances, and consistency.
      </p>

      <h2>Bookings, Payments, and Refunds</h2>
      <ul>
        <li>Sessions are confirmed once payment is completed.</li>
        <li>You may reschedule with reasonable notice, subject to availability.</li>
        <li><strong>All fees are non-refundable.</strong></li>
      </ul>

      <h2>Conduct</h2>
      <p>
        We provide a respectful space. We may refuse service for harassment, unsafe behavior, or policy violations.
      </p>

      <h2>Disclaimers</h2>
      <p>
        Coaching provides guidance and education. We make no guarantees of specific outcomes.
      </p>

      <h2>Changes to These Terms</h2>
      <p>
        We may update these terms from time to time. Continued use of our services means you accept the updated terms.
      </p>

      <h2>Contact</h2>
      <p>
        If you have questions about these terms, please contact us.
      </p>
    </main>
  );
}
