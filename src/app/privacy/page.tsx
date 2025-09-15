import React from 'react';

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 prose prose-neutral">
      {/* ... existing code ... top-level container and heading */}
      <h1>Privacy Policy</h1>
      <p>Last updated: {new Date().toLocaleDateString()}</p>

      <p>
        We respect your privacy. This page explains what information we collect, how we use it, and your choices.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We may collect your name, email address, and any details you share with us when booking sessions or contacting us.
      </p>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>To provide coaching services and support</li>
        <li>To communicate updates, confirmations, and reminders</li>
        <li>To improve our services and website</li>
      </ul>

      <h2>Sharing Your Information</h2>
      <p>
        We do not sell your personal information. We only share it with trusted providers when needed to deliver our services (e.g., scheduling, payments), always under appropriate safeguards.
      </p>

      <h2>Data Retention</h2>
      <p>
        We keep your information only as long as necessary to provide our services and meet legal obligations.
      </p>

      <h2>Your Rights</h2>
      <p>
        Depending on your location, you may have rights to access, correct, or delete your data. Contact us to make a request.
      </p>

      <h2>Payments and Refunds</h2>
      <p>
        All fees are non-refundable. If you need to reschedule, please reach out as early as possible and we will do our best to accommodate you.
      </p>

      <h2>Contact</h2>
      <p>
        If you have questions about this policy, please contact us.
      </p>
    </main>
  );
}
