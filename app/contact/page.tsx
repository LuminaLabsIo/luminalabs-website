import type { Metadata } from "next";
import ContactForm from '../../components/ContactForm';

export const metadata: Metadata = {
  title: "Contact Us | Lumina Labs - Get Your Free Consultation",
  description: "Ready to build your custom platform or iOS app? Contact Lumina Labs for a free consultation. We respond within 24 hours. Start your project today.",
  keywords: "contact Lumina Labs, free consultation, custom app quote, platform development inquiry",
  openGraph: {
    title: "Contact Lumina Labs - Free Consultation",
    description: "Get a custom quote for your platform or iOS app. Free consultation, 24-hour response time.",
    url: "https://lumina-labs.org/contact",
    siteName: "Lumina Labs",
    locale: "en_US",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      paddingTop: '80px',
      paddingBottom: '4rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1.5rem'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h1 style={{
            fontSize: '48px',
            fontWeight: '700',
            marginBottom: '1rem',
            color: '#1f2937'
          }}>
            Contact Us
          </h1>
          <p style={{
            fontSize: '20px',
            color: '#64748b',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Ready to bring your app idea to life? Let's talk about your project!
          </p>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}