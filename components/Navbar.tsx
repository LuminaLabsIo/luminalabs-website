export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #e2e8f0',
      zIndex: 50
    }}>
      <div style={{
        maxWidth: '80rem',
        margin: '0 auto',
        padding: '1rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{
            width: '2rem',
            height: '2rem',
            backgroundColor: '#3b82f6',
            borderRadius: '0.5rem'
          }}></div>
          <span style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            color: '#0f172a'
          }}>
            Lumina Labs
          </span>
        </div>
        
        {/* Navigation Links */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem'
        }}>
          <a href="/" style={{
            color: '#64748b',
            textDecoration: 'none',
            transition: 'color 0.2s'
          }}>
            Home
          </a>
          <a href="/apps" style={{
            color: '#64748b',
            textDecoration: 'none',
            transition: 'color 0.2s'
          }}>
            Apps
          </a>
          <a href="/privacy" style={{
            color: '#64748b',
            textDecoration: 'none',
            transition: 'color 0.2s'
          }}>
            Privacy
          </a>
          <a 
            href="mailto:hello@luminalabs.com" 
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#3b82f6',
              color: 'white',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              transition: 'background-color 0.2s'
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}