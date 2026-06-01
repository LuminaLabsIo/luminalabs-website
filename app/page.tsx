export default function Home() {
  const platforms = [
    {
      icon: "🎨",
      title: "Digital Art Shop",
      problem: "Tired of Etsy's 6.5% fees eating your profits?",
      solution: "Your own art marketplace",
      features: [
        "Upload & sell unlimited artwork",
        "Limited edition controls",
        "Integrated payment processing",
        "Email notifications for buyers",
        "Mailing list automation",
        "No transaction fees - keep 100%"
      ],
      price: "Starting at $2,997"
    },
    {
      icon: "💎",
      title: "Creator Platform",
      problem: "OnlyFans takes 20% of your earnings?",
      solution: "Your own subscription platform",
      features: [
        "Subscription tiers & management",
        "Content scheduling & access control",
        "Direct payment processing",
        "Fan messaging system",
        "Analytics dashboard",
        "Complete revenue ownership"
      ],
      price: "Starting at $5,997"
    },
    {
      icon: "💪",
      title: "Fitness App",
      problem: "Generic fitness apps don't fit your brand?",
      solution: "Custom workout & coaching platform",
      features: [
        "Workout plan builder",
        "Progress tracking",
        "Subscription management",
        "Video hosting & streaming",
        "Client communication",
        "Your branding throughout"
      ],
      price: "Starting at $5,997"
    },
    {
      icon: "📚",
      title: "Course Platform",
      problem: "Teachable or Kajabi taking 10-30% of revenue?",
      solution: "Your own online school",
      features: [
        "Course management system",
        "Student enrollment & tracking",
        "Video & content hosting",
        "Certificates & achievements",
        "Discussion forums",
        "Zero platform fees"
      ],
      price: "Starting at $4,997"
    },
    {
      icon: "🛍️",
      title: "E-commerce Store",
      problem: "Shopify's monthly fees adding up?",
      solution: "Custom online store",
      features: [
        "Product catalog management",
        "Inventory tracking",
        "Payment & shipping integration",
        "Customer accounts",
        "Order management",
        "No monthly platform fees"
      ],
      price: "Starting at $3,997"
    },
    {
      icon: "🤖",
      title: "AI-Powered Platform",
      problem: "Need intelligent automation?",
      solution: "Multi-agent AI system",
      features: [
        "AI customer support agent",
        "Smart content recommendations",
        "Automated moderation",
        "Personalization engine",
        "Sales optimization AI",
        "24/7 autonomous operation"
      ],
      price: "Starting at $9,997"
    }
  ];

  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      {/* Hero Section */}
      <section style={{ paddingTop: '8rem', paddingBottom: '5rem', padding: '8rem 1.5rem 5rem', background: 'linear-gradient(to bottom, #ffffff, #f8fafc)' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1rem',
            backgroundColor: '#dbeafe',
            color: '#1e40af',
            borderRadius: '9999px',
            fontSize: '0.875rem',
            fontWeight: '600',
            marginBottom: '1.5rem'
          }}>
            🤖 AI-Powered Custom Platforms
          </div>
          
          <h1 style={{ 
            fontSize: '3.5rem', 
            fontWeight: '800', 
            color: '#0f172a',
            marginBottom: '1.5rem',
            lineHeight: '1.1'
          }}>
            Own Your Platform.<br/>Keep Your Revenue.
          </h1>
          
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#64748b',
            marginBottom: '2rem',
            maxWidth: '42rem',
            margin: '0 auto 2rem',
            lineHeight: '1.6'
          }}>
            Stop paying 20-30% fees to third-party platforms. We build custom digital 
            platforms with AI agents that work for you 24/7 - no middlemen, no monthly fees.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="#platforms" 
              style={{
                display: 'inline-block',
                padding: '1rem 2rem',
                backgroundColor: '#3b82f6',
                color: 'white',
                fontSize: '1.125rem',
                fontWeight: '600',
                borderRadius: '0.5rem',
                textDecoration: 'none'
              }}
            >
              See What We Build
            </a>
            <a 
              href="mailto:hello@luminalabs.com" 
              style={{
                display: 'inline-block',
                padding: '1rem 2rem',
                backgroundColor: 'white',
                color: '#0f172a',
                fontSize: '1.125rem',
                fontWeight: '600',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                border: '2px solid #e2e8f0'
              }}
            >
              Get a Quote
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section style={{ padding: '4rem 1.5rem', backgroundColor: '#0f172a', color: 'white' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: '700',
            marginBottom: '1.5rem',
            color: 'white'
          }}>
            Stop Losing Money to Platform Fees
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            marginTop: '2rem'
          }}>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#ef4444', marginBottom: '0.5rem' }}>
                20%
              </div>
              <div style={{ color: '#94a3b8' }}>OnlyFans commission</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#ef4444', marginBottom: '0.5rem' }}>
                6.5%
              </div>
              <div style={{ color: '#94a3b8' }}>Etsy transaction fee</div>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', fontWeight: '800', color: '#ef4444', marginBottom: '0.5rem' }}>
                10%+
              </div>
              <div style={{ color: '#94a3b8' }}>Course platform fees</div>
            </div>
          </div>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#cbd5e1',
            marginTop: '2rem'
          }}>
            With your own platform, you keep 100% (minus standard payment processing ~3%)
          </p>
        </div>
      </section>

      {/* Platforms Section */}
      <section id="platforms" style={{ padding: '5rem 1.5rem', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: '700', 
              color: '#0f172a',
              marginBottom: '1rem'
            }}>
              Custom Platforms We Build
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#64748b' }}>
              Tailored to your business, powered by AI
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {platforms.map((platform, index) => (
              <div 
                key={index}
                style={{ 
                  backgroundColor: 'white', 
                  padding: '2rem', 
                  borderRadius: '1rem',
                  border: '2px solid #e2e8f0',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                  {platform.icon}
                </div>
                
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: '700',
                  color: '#0f172a',
                  marginBottom: '0.75rem'
                }}>
                  {platform.title}
                </h3>
                
                <p style={{ 
                  fontSize: '0.875rem', 
                  color: '#ef4444',
                  fontWeight: '600',
                  marginBottom: '0.5rem'
                }}>
                  {platform.problem}
                </p>
                
                <p style={{ 
                  fontSize: '1rem', 
                  color: '#3b82f6',
                  fontWeight: '600',
                  marginBottom: '1rem'
                }}>
                  ✓ {platform.solution}
                </p>
                
                <div style={{ marginBottom: '1.5rem', flex: 1 }}>
                  {platform.features.map((feature, fIndex) => (
                    <div 
                      key={fIndex}
                      style={{ 
                        fontSize: '0.875rem',
                        color: '#64748b',
                        marginBottom: '0.5rem',
                        paddingLeft: '1.5rem',
                        position: 'relative'
                      }}
                    >
                      <span style={{ position: 'absolute', left: 0 }}>✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div style={{
                  padding: '1rem',
                  backgroundColor: '#f1f5f9',
                  borderRadius: '0.5rem',
                  textAlign: 'center'
                }}>
                  <div style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: '700',
                    color: '#0f172a'
                  }}>
                    {platform.price}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>
                    One-time investment
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: '700',
            color: '#0f172a',
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            How It Works
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {[
              { step: "1", title: "Discovery Call", desc: "Tell us about your business and what you need. We'll discuss features, pricing, and timeline." },
              { step: "2", title: "Custom Proposal", desc: "We create a detailed plan with wireframes, feature list, and exact pricing. No surprises." },
              { step: "3", title: "Development", desc: "We build your platform with regular updates. Typical timeline: 4-8 weeks depending on complexity." },
              { step: "4", title: "Launch & Training", desc: "We deploy your platform, train you on the admin system, and provide ongoing support." },
              { step: "5", title: "You Own It", desc: "Complete ownership. No monthly fees. Optional maintenance plans available." }
            ].map((item, index) => (
              <div key={index} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  backgroundColor: '#3b82f6',
                  color: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  flexShrink: 0
                }}>
                  {item.step}
                </div>
                <div>
                  <h3 style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: '600',
                    color: '#0f172a',
                    marginBottom: '0.5rem'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: '#3b82f6' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: '700',
            color: 'white',
            marginBottom: '1.5rem'
          }}>
            Ready to Own Your Platform?
          </h2>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#dbeafe',
            marginBottom: '2rem'
          }}>
            Stop paying monthly fees. Get a custom quote for your business.
          </p>
          <a 
            href="mailto:hello@luminalabs.com"
            style={{
              display: 'inline-block',
              padding: '1rem 2.5rem',
              backgroundColor: 'white',
              color: '#3b82f6',
              fontSize: '1.125rem',
              fontWeight: '600',
              borderRadius: '0.5rem',
              textDecoration: 'none'
            }}
          >
            Get Your Free Consultation
          </a>
          <p style={{ 
            fontSize: '0.875rem', 
            color: '#dbeafe',
            marginTop: '1rem'
          }}>
            Response time: Usually within 24 hours
          </p>
        </div>
      </section>
    </main>
  );
}