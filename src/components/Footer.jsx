import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <h2 className="footer-title">Ready to start?</h2>
        <p className="footer-desc">
          Let's create something amazing together. Drop me a line<br />
          and let's get the conversation started.
        </p>

        <a href="mailto:rajaspatil05@gmail.com" className="contact-now-btn">
          Contact Now
        </a>

        <div className="social-links">
          <a href="https://github.com/Rajas-Patil" target="_blank" rel="noopener noreferrer" className="social-pill">
            <span className="social-icon github"></span> GitHub
          </a>
          <a href="https://www.linkedin.com/in/rajas-patil710/" target="_blank" rel="noopener noreferrer" className="social-pill">
            <span className="social-icon linkedin"></span> LinkedIn
          </a>
          <a href="https://www.instagram.com/rajas_patil_10/" target="_blank" rel="noopener noreferrer" className="social-pill">
            <span className="social-icon instagram"></span> Instagram
          </a>
          <a href="mailto:rajaspatil05@gmail.com" className="social-pill">
            <span className="social-icon email"></span> Email
          </a>
        </div>
      </div>

      <style>{`
        .footer-section {
          background-color: #fff;
          padding: 100px 20px 60px;
          text-align: center;
          font-family: 'Inter', sans-serif;
          margin-top: 60px;
        }

        .footer-content {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .footer-title {
          font-family: 'Playfair Display', serif;
          font-size: 80px;
          font-style: italic;
          font-weight: 400;
          color: #1a1a1a;
          margin-bottom: 24px;
          letter-spacing: -2px;
        }

        .footer-desc {
          font-size: 18px;
          color: #555;
          line-height: 1.6;
          margin-bottom: 50px;
          font-weight: 400;
        }

        .contact-now-btn {
          background-color: #111;
          color: #fff;
          padding: 18px 48px;
          border-radius: 50px;
          font-size: 18px;
          font-weight: 600;
          text-decoration: none;
          display: inline-block;
          margin-bottom: 80px;
          transition: transform 0.2s, background-color 0.2s;
        }
        .contact-now-btn:hover {
          transform: translateY(-2px);
          background-color: #000;
        }

        .social-links {
          display: flex;
          gap: 30px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .social-pill {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #888;
          font-size: 16px;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.2s;
        }
        .social-pill:hover {
          color: #111;
        }

        .social-icon {
           width: 32px;
           height: 32px;
           background-color: #eee;
           border-radius: 50%;
           display: flex;
           align-items: center;
           justify-content: center;
           transition: background-color 0.2s;
        }
        .social-pill:hover .social-icon {
           background-color: #e0e0e0;
        }

        /* Mock Icons */
        .social-icon::before {
           content: '';
           display: block;
           width: 16px;
           height: 16px;
           background-size: contain;
           background-repeat: no-repeat;
           background-position: center;
           opacity: 0.6;
        }
        
        /* Using simple SVG data URIs for icons */
        .github::before { background-image: url('data:image/svg+xml,<svg viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>'); }
        .linkedin::before { background-image: url('data:image/svg+xml,<svg viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>'); }
        .instagram::before { background-image: url('data:image/svg+xml,<svg viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>'); }
        .email::before { background-image: url('data:image/svg+xml,<svg viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="2" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>'); }

        @media (max-width: 768px) {
           .footer-section { padding: 80px 20px 40px; }
           .footer-title { font-size: 50px; }
           .footer-desc { font-size: 16px; padding: 0 20px; }
           .social-links { gap: 20px; }
           .contact-now-btn { padding: 16px 36px; font-size: 16px; margin-bottom: 60px; }
        }

        @media (max-width: 480px) {
           .footer-title { font-size: 40px; letter-spacing: -1px; }
           .footer-desc { font-size: 15px; margin-bottom: 40px; }
           
           .social-links { flex-direction: column; gap: 16px; width: 100%; align-items: center; }
           .social-pill { width: 100%; justify-content: center; background: #fafafa; padding: 12px; border-radius: 12px; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
