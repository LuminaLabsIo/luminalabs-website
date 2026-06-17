import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom iOS App Development | Lumina Labs - Native Mobile Apps",
  description: "Professional iOS app development starting at $7,997. Fitness apps, meditation apps, social platforms, e-commerce apps, and more. Native Swift development with App Store deployment.",
  keywords: "iOS app development, custom iPhone app, native iOS app, fitness app development, meditation app, Swift development, App Store deployment",
  openGraph: {
    title: "Custom iOS App Development | Lumina Labs",
    description: "Native iOS apps built with Swift. Fitness, meditation, social, e-commerce, and custom business apps. Starting at $7,997.",
    url: "https://lumina-labs.org/apps",
    siteName: "Lumina Labs",
    images: [
      {
        url: "https://lumina-labs.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lumina Labs iOS App Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom iOS App Development",
    description: "Native iPhone apps starting at $7,997. Professional development, App Store ready.",
    images: ["https://lumina-labs.org/og-image.jpg"],
  },
};

export default function Apps() {
  const iosApps = [
    {
      icon: "💪",
      title: "Fitness & Workout App",
      description: "Complete training platform with Apple Watch integration",
      features: [
        "Custom workout builder & plans",
        "Apple Watch connectivity & tracking",
        "Heart rate & calorie monitoring",
        "Progress photos & measurements",
        "Subscription tiers (monthly/yearly)",
        "Video exercise library",
        "Push notifications for workouts",
        "HealthKit integration"
      ],
      price: "Starting at $8,997",
      color: "#ef4444"
    },
    {
      icon: "🧘",
      title: "Meditation & Mindfulness App",
      description: "Wellness platform with guided sessions and tracking",
      features: [
        "Guided meditation library",
        "Sleep stories & sounds",
        "Breathing exercises",
        "Daily reminders & streaks",
        "Apple Watch meditation timer",
        "Mood tracking & journaling",
        "Subscription management",
        "Offline downloads"
      ],
      price: "Starting at $7,997",
      color: "#8b5cf6"
    },
    {
      icon: "📚",
      title: "Learning & Course App",
      description: "Educational platform with video lessons and progress tracking",
      features: [
        "Video course player",
        "Downloadable resources",
        "Quiz & assessment system",
        "Progress tracking & certificates",
        "Note-taking functionality",
        "Push notifications for new content",
        "In-app purchases for courses",
        "Student dashboard"
      ],
      price: "Starting at $9,997",
      color: "#3b82f6"
    },
    {
      icon: "🎵",
      title: "Music & Audio App",
      description: "Streaming platform for artists, podcasters, or audio content",
      features: [
        "Audio streaming & downloads",
        "Playlist creation",
        "Background playback",
        "CarPlay integration",
        "Subscription access tiers",
        "Offline listening",
        "Artist/creator profiles",
        "Analytics dashboard"
      ],
      price: "Starting at $10,997",
      color: "#ec4899"
    },
    {
      icon: "📸",
      title: "Photography & Portfolio App",
      description: "Showcase and sell your photography with client galleries",
      features: [
        "Password-protected galleries",
        "High-resolution image viewing",
        "Print ordering integration",
        "Client favorites & selection",
        "Watermark options",
        "Direct messaging",
        "In-app purchases",
        "Cloud storage integration"
      ],
      price: "Starting at $7,997",
      color: "#f59e0b"
    },
    {
      icon: "🍽️",
      title: "Recipe & Cooking App",
      description: "Digital cookbook with meal planning and grocery lists",
      features: [
        "Recipe database with search",
        "Step-by-step cooking mode",
        "Timer integration",
        "Shopping list generator",
        "Meal planning calendar",
        "Dietary filters & preferences",
        "Video recipe tutorials",
        "Subscription for premium recipes"
      ],
      price: "Starting at $8,997",
      color: "#10b981"
    },
    {
      icon: "💼",
      title: "Business & Productivity App",
      description: "Custom CRM, project management, or business tools",
      features: [
        "Custom data management",
        "Client/project tracking",
        "Calendar & scheduling",
        "Document storage",
        "Push notifications",
        "Team collaboration features",
        "Offline functionality",
        "Export & reporting tools"
      ],
      price: "Starting at $11,997",
      color: "#6366f1"
    },
    {
      icon: "🎮",
      title: "Gaming & Entertainment App",
      description: "Mobile game or interactive entertainment platform",
      features: [
        "Game mechanics & levels",
        "Leaderboards & achievements",
        "In-app purchases",
        "Social features & multiplayer",
        "Push notifications",
        "Ad integration (optional)",
        "Analytics & user tracking",
        "Regular content updates"
      ],
      price: "Starting at $12,997",
      color: "#a855f7"
    },
    {
      icon: "🏠",
      title: "Home & Lifestyle App",
      description: "Smart home control, home services, or lifestyle management",
      features: [
        "IoT device integration",
        "Scheduling & automation",
        "User profiles & preferences",
        "Push notifications & alerts",
        "Data visualization",
        "Voice control (Siri)",
        "Widget support",
        "Apple Home integration"
      ],
      price: "Starting at $9,997",
      color: "#14b8a6"
    },
    {
      icon: "🛍️",
      title: "E-commerce & Shopping App",
      description: "Mobile storefront with Apple Pay and inventory management",
      features: [
        "Product catalog & search",
        "Apple Pay integration",
        "Shopping cart & checkout",
        "Order tracking",
        "Push notifications for sales",
        "Wishlist & favorites",
        "Customer accounts",
        "Inventory management"
      ],
      price: "Starting at $10,997",
      color: "#f97316"
    },
    {
      icon: "🚗",
      title: "Transportation & Delivery App",
      description: "Ride-sharing, delivery, or logistics platform",
      features: [
        "Real-time GPS tracking",
        "Route optimization",
        "In-app payments",
        "Driver & customer matching",
        "Rating & review system",
        "Push notifications",
        "Trip history",
        "Admin dashboard"
      ],
      price: "Starting at $14,997",
      color: "#0ea5e9"
    },
    {
      icon: "🏥",
      title: "Health & Wellness App",
      description: "Health tracking, telemedicine, or wellness management",
      features: [
        "HealthKit integration",
        "Symptom & medication tracking",
        "Appointment scheduling",
        "Secure messaging (HIPAA compliant)",
        "Health data visualization",
        "Apple Watch support",
        "Reminders & notifications",
        "Data export for doctors"
      ],
      price: "Starting at $12,997",
      color: "#dc2626"
    }
  ];

  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      {/* Hero Section */}
      <section style={{ paddingTop: '8rem', paddingBottom: '3rem', padding: '8rem 1.5rem 3rem', background: 'linear-gradient(to bottom, #ffffff, #f8fafc)' }}>
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
            📱 Native iOS Development
          </div>
          
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: '800', 
            color: '#0f172a',
            marginBottom: '1.5rem',
            lineHeight: '1.1'
          }}>
            We Build iOS Apps Too!
          </h1>
          
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#64748b',
            marginBottom: '2rem',
            lineHeight: '1.6'
          }}>
            Need a mobile app for the App Store? We develop native iOS applications 
            with Swift and SwiftUI - complete with Apple Watch integration, HealthKit, 
            push notifications, and subscription management.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            maxWidth: '48rem',
            margin: '2rem auto 0',
            textAlign: 'left'
          }}>
            <div style={{ padding: '1rem', backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>⌚</div>
              <div style={{ fontWeight: '600', color: '#0f172a', marginBottom: '0.25rem' }}>Apple Watch</div>
              <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Full watchOS integration</div>
            </div>
            <div style={{ padding: '1rem', backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>💳</div>
              <div style={{ fontWeight: '600', color: '#0f172a', marginBottom: '0.25rem' }}>Apple Pay</div>
              <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Seamless payments</div>
            </div>
            <div style={{ padding: '1rem', backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🔔</div>
              <div style={{ fontWeight: '600', color: '#0f172a', marginBottom: '0.25rem' }}>Push Notifications</div>
              <div style={{ fontSize: '0.875rem', color: '#64748b' }}>Engage your users</div>
            </div>
            <div style={{ padding: '1rem', backgroundColor: 'white', borderRadius: '0.5rem', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>💰</div>
              <div style={{ fontWeight: '600', color: '#0f172a', marginBottom: '0.25rem' }}>Subscriptions</div>
              <div style={{ fontSize: '0.875rem', color: '#64748b' }}>In-app purchases & recurring revenue</div>
            </div>
          </div>
        </div>
      </section>

      {/* iOS Apps Grid */}
      <section style={{ padding: '3rem 1.5rem 5rem', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: '700', 
              color: '#0f172a',
              marginBottom: '1rem'
            }}>
              iOS Apps We Build
            </h2>
            <p style={{ fontSize: '1.125rem', color: '#64748b' }}>
              From concept to App Store - we handle everything
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem'
          }}>
            {iosApps.map((app, index) => (
              <div 
                key={index}
                style={{ 
                  backgroundColor: 'white', 
                  padding: '1.75rem', 
                  borderRadius: '1rem',
                  border: '2px solid #e2e8f0',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s, box-shadow 0.2s'
                }}
              >
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.75rem',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    width: '3.5rem',
                    height: '3.5rem',
                    backgroundColor: app.color,
                    borderRadius: '0.875rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.75rem'
                  }}>
                    {app.icon}
                  </div>
                  <div>
                    <h3 style={{ 
                      fontSize: '1.25rem', 
                      fontWeight: '700',
                      color: '#0f172a',
                      marginBottom: '0.125rem'
                    }}>
                      {app.title}
                    </h3>
                  </div>
                </div>
                
                <p style={{ 
                  fontSize: '0.9375rem', 
                  color: '#64748b',
                  marginBottom: '1rem',
                  lineHeight: '1.5'
                }}>
                  {app.description}
                </p>
                
                <div style={{ 
                  marginBottom: '1.25rem', 
                  flex: 1,
                  borderTop: '1px solid #f1f5f9',
                  paddingTop: '1rem'
                }}>
                  <div style={{ 
                    fontSize: '0.8125rem',
                    fontWeight: '600',
                    color: '#64748b',
                    marginBottom: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Key Features
                  </div>
                  {app.features.map((feature, fIndex) => (
                    <div 
                      key={fIndex}
                      style={{ 
                        fontSize: '0.875rem',
                        color: '#64748b',
                        marginBottom: '0.5rem',
                        paddingLeft: '1.25rem',
                        position: 'relative'
                      }}
                    >
                      <span style={{ 
                        position: 'absolute', 
                        left: 0,
                        color: app.color,
                        fontWeight: '700'
                      }}>✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <div style={{
                  padding: '1rem',
                  backgroundColor: '#f8fafc',
                  borderRadius: '0.5rem',
                  textAlign: 'center',
                  borderLeft: `4px solid ${app.color}`
                }}>
                  <div style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: '700',
                    color: '#0f172a'
                  }}>
                    {app.price}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>
                    Complete development + App Store submission
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why iOS Section */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: '700',
            color: '#0f172a',
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            Why Build an iOS App?
          </h2>
          
          <div style={{ display: 'grid', gap: '2rem' }}>
            {[
              { 
                icon: "💰", 
                title: "Higher Revenue", 
                desc: "iOS users spend 2-3x more on apps and in-app purchases compared to Android users."
              },
              { 
                icon: "🎯", 
                title: "Premium Audience", 
                desc: "Reach affluent users who value quality apps and are willing to pay for subscriptions."
              },
              { 
                icon: "🔒", 
                title: "Security & Trust", 
                desc: "Apple's strict App Store review process builds user trust and protects your brand."
              },
              { 
                icon: "⚡", 
                title: "Better Performance", 
                desc: "Native Swift apps run faster, smoother, and provide a superior user experience."
              }
            ].map((item, index) => (
              <div key={index} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  backgroundColor: '#dbeafe',
                  borderRadius: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  flexShrink: 0
                }}>
                  {item.icon}
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
      <section style={{ padding: '5rem 1.5rem', backgroundColor: '#0f172a' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: '700',
            color: 'white',
            marginBottom: '1.5rem'
          }}>
            Ready to Build Your iOS App?
          </h2>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#cbd5e1',
            marginBottom: '2rem'
          }}>
            Let's discuss your app idea and create a custom development plan.
          </p>
          <a 
            href="mailto:hello@luminalabs.com"
            style={{
              display: 'inline-block',
              padding: '1rem 2.5rem',
              backgroundColor: '#3b82f6',
              color: 'white',
              fontSize: '1.125rem',
              fontWeight: '600',
              borderRadius: '0.5rem',
              textDecoration: 'none'
            }}
          >
            Schedule a Consultation
          </a>
          <p style={{ 
            fontSize: '0.875rem', 
            color: '#94a3b8',
            marginTop: '1rem'
          }}>
            Free 30-minute discovery call • No obligation
          </p>
        </div>
      </section>
    </main>
  );
}