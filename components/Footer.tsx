export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#0f172a',
      color: 'white',
      padding: '3rem 1.5rem',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: '80rem',
        margin: '0 auto'
      }}>
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          
          {/* Company Info */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1rem'
            }}>
              <div style={{
                width: '2rem',
                height: '2rem',
                backgroundColor: '#3b82f6',
                borderRadius: '0.5rem'
              }}></div>
              <span style={{
                fontSize: '1.25rem',
                fontWeight: '600'
              }}>
                Lumina Labs
              </span>
            </div>
            <p style={{
              color: '#94a3b8',
              fontSize: '0.875rem',
              lineHeight: '1.5'
            }}>
              Building exceptional mobile experiences for iOS.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{
              fontSize: '1rem',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>
              Quick Links
            </h3>
            <nav style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}>
              <a 
                href="/" 
                style={{
                  color: '#94a3b8',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  transition: 'color 0.2s'
                }}
              >
                Home
              </a>
              <a 
                href="/apps" 
                style={{
                  color: '#94a3b8',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  transition: 'color 0.2s'
                }}
              >
                Our Apps
              </a>
              <a 
                href="/privacy" 
                style={{
                  color: '#94a3b8',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  transition: 'color 0.2s'
                }}
              >
                Privacy Policy
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{
              fontSize: '1rem',
              fontWeight: '600',
              marginBottom: '1rem'
            }}>
              Contact
            </h3>
            <a 
              href="mailto:hello@luminalabs.com"
              style={{
                color: '#94a3b8',
                textDecoration: 'none',
                fontSize: '0.875rem',
                display: 'block',
                marginBottom: '1rem'
              }}
            >
              hello@luminalabs.com
            </a>
            
            {/* Social Links */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              marginTop: '1rem'
            }}>
              {/* GitHub */}
              <a 
                href="https://github.com/LuminaLabsIo"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#94a3b8',
                  textDecoration: 'none',
                  fontSize: '1.25rem'
                }}
                aria-label="GitHub"
              >
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Copyright */}
        <div style={{
          borderTop: '1px solid #334155',
          paddingTop: '2rem',
          textAlign: 'center'
        }}>
          <p style={{
            color: '#64748b',
            fontSize: '0.875rem',
            margin: 0
          }}>
            © 2024 Lumina Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}