import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Lumina Labs - Your Data Protection",
  description: "Lumina Labs privacy policy. Learn how we collect, use, and protect your data. GDPR compliant. App Store approved privacy practices.",
  keywords: "privacy policy, data protection, GDPR, App Store privacy, user data security",
  openGraph: {
    title: "Privacy Policy | Lumina Labs",
    description: "Our commitment to protecting your privacy and data security.",
    url: "https://lumina-labs.org/privacy",
    siteName: "Lumina Labs",
    locale: "en_US",
    type: "website",
  },
};

export default function PrivacyPolicy() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <section style={{ paddingTop: '8rem', paddingBottom: '5rem', padding: '8rem 1.5rem 5rem' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: '700', 
            color: '#0f172a',
            marginBottom: '2rem'
          }}>
            Privacy Policy
          </h1>
          
          <div style={{ color: '#64748b', marginBottom: '2rem' }}>
            <p style={{ marginBottom: '1rem' }}>
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div style={{ fontSize: '1.125rem', lineHeight: '1.75', color: '#475569' }}>
            <h2 style={{ 
              fontSize: '1.875rem', 
              fontWeight: '600',
              color: '#1e293b',
              marginTop: '2rem',
              marginBottom: '1rem'
            }}>
              Information We Collect
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Lumina Labs is committed to protecting your privacy. This policy 
              outlines how we collect, use, and safeguard your information when 
              you use our mobile applications.
            </p>

            <h2 style={{ 
              fontSize: '1.875rem', 
              fontWeight: '600',
              color: '#1e293b',
              marginTop: '2rem',
              marginBottom: '1rem'
            }}>
              How We Use Your Data
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              We only collect data necessary to provide and improve our services. 
              Your data is used to personalize your experience, improve app functionality, 
              and provide customer support when needed.
            </p>

            <h2 style={{ 
              fontSize: '1.875rem', 
              fontWeight: '600',
              color: '#1e293b',
              marginTop: '2rem',
              marginBottom: '1rem'
            }}>
              Data Security
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              We implement industry-standard security measures to protect your personal 
              information. Your data is encrypted both in transit and at rest.
            </p>

            <h2 style={{ 
              fontSize: '1.875rem', 
              fontWeight: '600',
              color: '#1e293b',
              marginTop: '2rem',
              marginBottom: '1rem'
            }}>
              Third-Party Services
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              We do not sell or share your personal information with third parties 
              for marketing purposes. We may use trusted third-party services for 
              analytics and app functionality, which are also bound by strict privacy standards.
            </p>

            <h2 style={{ 
              fontSize: '1.875rem', 
              fontWeight: '600',
              color: '#1e293b',
              marginTop: '2rem',
              marginBottom: '1rem'
            }}>
              Your Rights
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              You have the right to access, modify, or delete your personal data at any time. 
              You can also opt out of data collection features within each app's settings.
            </p>

            <h2 style={{ 
              fontSize: '1.875rem', 
              fontWeight: '600',
              color: '#1e293b',
              marginTop: '2rem',
              marginBottom: '1rem'
            }}>
              Contact Us
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              For privacy-related inquiries or to exercise your data rights, 
              please contact us at{' '}
              <a 
                href="mailto:hello@luminalabs.com" 
                style={{ color: '#3b82f6', textDecoration: 'none' }}
              >
                petra@lumina-labs.org
              </a>
            </p>

            <h2 style={{ 
              fontSize: '1.875rem', 
              fontWeight: '600',
              color: '#1e293b',
              marginTop: '2rem',
              marginBottom: '1rem'
            }}>
              Changes to This Policy
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              We may update this privacy policy from time to time. We will notify 
              users of any material changes through our apps or via email.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}