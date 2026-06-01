export default function Home() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      {/* Hero Section */}
      <section style={{ paddingTop: '8rem', paddingBottom: '5rem', padding: '8rem 1.5rem 5rem' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: '700', 
            color: '#0f172a',
            marginBottom: '1.5rem',
            lineHeight: '1.2'
          }}>
            Building exceptional mobile experiences
          </h1>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#64748b',
            marginBottom: '2rem',
            maxWidth: '42rem',
            margin: '0 auto 2rem'
          }}>
            Lumina Labs crafts innovative iOS applications that combine 
            elegant design with powerful functionality.
          </p>
          <a 
            href="/apps" 
            style={{
              display: 'inline-block',
              padding: '1rem 2rem',
              backgroundColor: '#3b82f6',
              color: 'white',
              fontSize: '1.125rem',
              fontWeight: '500',
              borderRadius: '0.5rem',
              textDecoration: 'none'
            }}
          >
            Explore Our Apps
          </a>
        </div>
      </section>

      {/* What We Do */}
      <section style={{ padding: '5rem 1.5rem', backgroundColor: '#f8fafc' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '2.25rem', 
            fontWeight: '600', 
            color: '#0f172a',
            textAlign: 'center',
            marginBottom: '4rem'
          }}>
            What We Do
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {/* Card 1 */}
            <div style={{ 
              backgroundColor: 'white', 
              padding: '2rem', 
              borderRadius: '0.75rem',
              border: '1px solid #e2e8f0'
            }}>
              <div style={{
                width: '3rem',
                height: '3rem',
                backgroundColor: '#dbeafe',
                borderRadius: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <span style={{ fontSize: '1.5rem' }}>📱</span>
              </div>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600',
                color: '#1e293b',
                marginBottom: '0.75rem'
              }}>
                iOS Development
              </h3>
              <p style={{ fontSize: '1.125rem', color: '#64748b' }}>
                Native iOS apps built with Swift and SwiftUI for optimal performance.
              </p>
            </div>

            {/* Card 2 */}
            <div style={{ 
              backgroundColor: 'white', 
              padding: '2rem', 
              borderRadius: '0.75rem',
              border: '1px solid #e2e8f0'
            }}>
              <div style={{
                width: '3rem',
                height: '3rem',
                backgroundColor: '#ede9fe',
                borderRadius: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <span style={{ fontSize: '1.5rem' }}>🎨</span>
              </div>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600',
                color: '#1e293b',
                marginBottom: '0.75rem'
              }}>
                Design
              </h3>
              <p style={{ fontSize: '1.125rem', color: '#64748b' }}>
                Beautiful, intuitive interfaces that users love to interact with.
              </p>
            </div>

            {/* Card 3 */}
            <div style={{ 
              backgroundColor: 'white', 
              padding: '2rem', 
              borderRadius: '0.75rem',
              border: '1px solid #e2e8f0'
            }}>
              <div style={{
                width: '3rem',
                height: '3rem',
                backgroundColor: '#dbeafe',
                borderRadius: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                <span style={{ fontSize: '1.5rem' }}>⚡</span>
              </div>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '600',
                color: '#1e293b',
                marginBottom: '0.75rem'
              }}>
                Innovation
              </h3>
              <p style={{ fontSize: '1.125rem', color: '#64748b' }}>
                Pushing boundaries with creative solutions to real-world problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: '2.25rem', 
            fontWeight: '600',
            color: '#0f172a',
            marginBottom: '1.5rem'
          }}>
            Ready to work together?
          </h2>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#64748b',
            marginBottom: '2rem'
          }}>
            Get in touch to discuss your next project.
          </p>
          <a 
            href="mailto:hello@luminalabs.com"
            style={{
              display: 'inline-block',
              padding: '1rem 2rem',
              backgroundColor: '#0f172a',
              color: 'white',
              fontSize: '1.125rem',
              fontWeight: '500',
              borderRadius: '0.5rem',
              textDecoration: 'none'
            }}
          >
            hello@luminalabs.com
          </a>
        </div>
      </section>
    </main>
  );
}