import ContactForm from '../../components/ContactForm';

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
            Ready to bring your app idea to life? Let's chat about your project!
          </p>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}