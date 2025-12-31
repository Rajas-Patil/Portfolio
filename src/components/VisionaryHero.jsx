import React from 'react';
import visionaryMac from '../assets/visionary-mac.png';

const VisionaryHero = () => {
  return (
    <section className="visionary-section">
      <div className="visionary-container">

        {/* The Product/Image */}
        <div className="visionary-image-wrapper">
          <img
            src={visionaryMac}
            alt="The intersection of technology and liberal arts"
            className="visionary-mac"
          />
          <div className="reflection-gradient"></div>
        </div>

        {/* The Quote */}
        <div className="quote-container">
          <p className="jobs-quote">
            "The people who are crazy enough to think they can change the world are the ones who do."
          </p>
          <div className="quote-attribution">
            <span className="separator"></span>
            <span className="author">Steve Jobs</span>
          </div>
        </div>

      </div>

      <style>{`
        .visionary-section {
          background-color: #fafafa;
          padding: 120px 24px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Helvetica Neue", Helvetica, Arial, sans-serif;
        }

        .visionary-container {
          max-width: 900px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 60px;
        }

        /* Image Styling */
        .visionary-image-wrapper {
          position: relative;
          width: 100%;
          max-width: 500px;
          transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .visionary-image-wrapper:hover {
          transform: translateY(-8px);
        }

        .visionary-mac {
          width: 100%;
          height: auto;
          display: block;
          filter: drop-shadow(0 20px 40px rgba(0,0,0,0.15));
        }

        /* Quote Styling */
        .quote-container {
          text-align: center;
          max-width: 600px;
          opacity: 0;
          animation: fadeIn 1s ease-out 0.5s forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .jobs-quote {
          font-size: 28px;
          line-height: 1.4;
          font-weight: 300;
          color: #1d1d1f;
          margin-bottom: 24px;
          letter-spacing: -0.015em;
        }

        .quote-attribution {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
        }

        .separator {
          width: 24px;
          height: 1px;
          background-color: #86868b;
        }

        .author {
          font-size: 14px;
          font-weight: 500;
          color: #86868b;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .visionary-section {
            padding: 80px 24px;
          }
          .visionary-container {
             gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .visionary-section {
            padding: 60px 20px;
          }
          
          .jobs-quote {
            font-size: 22px;
            padding: 0 10px;
          }
          
          .visionary-image-wrapper {
            max-width: 100%;
            padding: 0 20px;
          }
          
          .separator { width: 16px; }
          .author { font-size: 12px; }
        }

        @media (max-width: 480px) {
           .jobs-quote { font-size: 18px; margin-bottom: 16px; }
           .visionary-section { padding: 40px 16px; }
           .visionary-image-wrapper { padding: 0 10px; }
        }
      `}</style>
    </section>
  );
};

export default VisionaryHero;
