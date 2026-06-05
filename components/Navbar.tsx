'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
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
        <a 
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            textDecoration: 'none'
          }}
        >
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
        </a>
        
        {/* Desktop Navigation */}
        <div style={{
          display: 'none',
          alignItems: 'center',
          gap: '2rem'
        }}
        className="desktop-nav">
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
            href="/contact" 
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: 'block',
            padding: '0.5rem',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            color: '#0f172a'
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            {isMenuOpen ? (
              // X icon when menu is open
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              // Hamburger icon when menu is closed
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div style={{
          backgroundColor: 'white',
          borderTop: '1px solid #e2e8f0',
          padding: '1rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}
        className="mobile-menu">
          <a 
            href="/" 
            onClick={() => setIsMenuOpen(false)}
            style={{
              color: '#0f172a',
              textDecoration: 'none',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              transition: 'background-color 0.2s'
            }}
          >
            Home
          </a>
          <a 
            href="/apps" 
            onClick={() => setIsMenuOpen(false)}
            style={{
              color: '#0f172a',
              textDecoration: 'none',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              transition: 'background-color 0.2s'
            }}
          >
            Apps
          </a>
          <a 
            href="/privacy" 
            onClick={() => setIsMenuOpen(false)}
            style={{
              color: '#0f172a',
              textDecoration: 'none',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              transition: 'background-color 0.2s'
            }}
          >
            Privacy
          </a>
          <a 
            href="/contact" 
            onClick={() => setIsMenuOpen(false)}
            style={{
              padding: '0.75rem',
              backgroundColor: '#3b82f6',
              color: 'white',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              textAlign: 'center',
              fontWeight: '600'
            }}
          >
            Contact Us
          </a>
        </div>
      )}

      {/* CSS for responsive behavior */}
      <style jsx>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}