'use client';

import { useState, useEffect } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [turnstileLoaded, setTurnstileLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    script.async = true;
    script.defer = true;
    script.onload = () => setTurnstileLoaded(true);
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    const formData = new FormData(e.currentTarget);
    
    // Wait a bit for Turnstile to be ready
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const turnstileToken = (window as any).turnstile?.getResponse();
    
    if (!turnstileToken) {
      setStatus('Please wait for verification to complete');
      setLoading(false);
      
      // Reset Turnstile if it exists
      if ((window as any).turnstile) {
        (window as any).turnstile.reset();
      }
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
          turnstileToken,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('Message sent successfully! ✅');
        (e.target as HTMLFormElement).reset();
        if ((window as any).turnstile) {
          (window as any).turnstile.reset();
        }
      } else {
        setStatus(data.error || 'Failed to send message ❌');
      }
    } catch (error) {
      setStatus('Network error. Please try again ❌');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          style={{
            width: '100%',
            padding: '12px',
            border: '1px solid #ddd',
            borderRadius: '6px',
            fontSize: '16px',
          }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          style={{
            width: '100%',
            padding: '12px',
            border: '1px solid #ddd',
            borderRadius: '6px',
            fontSize: '16px',
          }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="message" style={{ display: 'block', marginBottom: '8px', fontWeight: '600' }}>
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          style={{
            width: '100%',
            padding: '12px',
            border: '1px solid #ddd',
            borderRadius: '6px',
            fontSize: '16px',
            resize: 'vertical',
          }}
        />
      </div>

      {turnstileLoaded && (
        <div 
          className="cf-turnstile" 
          data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
          data-theme="light"
          style={{ marginBottom: '20px' }}
        />
      )}

      <button
        type="submit"
        disabled={loading}
        style={{
          width: '100%',
          padding: '14px',
          backgroundColor: loading ? '#ccc' : '#2563eb',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          fontSize: '16px',
          fontWeight: '600',
          cursor: loading ? 'not-allowed' : 'pointer',
        }}
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>

      {status && (
        <div
          style={{
            marginTop: '20px',
            padding: '12px',
            borderRadius: '6px',
            backgroundColor: status.includes('✅') ? '#d1fae5' : '#fee2e2',
            color: status.includes('✅') ? '#065f46' : '#991b1b',
            textAlign: 'center',
          }}
        >
          {status}
        </div>
      )}
    </form>
  );
}