import React from 'react';

const About = () => {
  return (
    <section className="container" style={{ padding: '100px 24px', position: 'relative' }}>

      <div className="about-grid-3">

        {/* Column 1: Text & Arrow */}
        <div className="col-text">
          <h2 className="section-title">About Me</h2>
          <p className="about-desc">
            I'm specialize in turning complex problems into elegant solutions. My approach blends creativity with
            strategic thinking to deliver designs that not only look great but work seamlessly. Ready to start your next project?
          </p>
          <div className="arrow-decoration">
            {/* Simple CSS Curve Arrow */}
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" style={{ opacity: 0.1 }}>
              <path d="M10 90 Q 50 10 90 30" stroke="black" strokeWidth="4" fill="none" markerEnd="url(#arrowhead)" />
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="black" />
                </marker>
              </defs>
            </svg>
          </div>
        </div>

        {/* Column 2: Central Scale Card */}
        <div className="col-center">
          <div className="scale-card">
            <div className="globe-icon">
              🌍
            </div>
            <div className="scale-stat">120%</div>
            <p className="scale-sub">Average increase in client engagement in the first 6 months</p>

            <div className="portrait-large">
              <div className="img-placeholder-lg"></div>
            </div>
          </div>
        </div>

        {/* Column 3: Photo & Bullets */}
        <div className="col-right">
          <div className="top-right-img">
            <div className="img-placeholder-sm">
              <div className="arrow-overlay">↗</div>
            </div>
          </div>

          <div className="info-bullets">
            <div className="bullet-item">
              <div className="plus-icon">✦</div>
              <p>With 4+ years of experience, I specialize in creating intuitive, user-focused designs that solve real-world problems.</p>
            </div>
            <div className="bullet-item">
              <div className="plus-icon">✦</div>
              <p>I thrive on working closely with clients, blending creativity with strategy to bring their vision to life.</p>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .about-grid-3 {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 40px;
          align-items: start;
        }

        .section-title {
          font-size: 48px;
          font-weight: 400;
          margin-bottom: 24px;
          color: #111;
        }

        .about-desc {
          font-size: 16px;
          line-height: 1.6; /* Good readability */
          color: #666;
          margin-bottom: 60px;
          max-width: 90%;
        }
        
        .arrow-decoration {
           padding-left: 40px;
        }

        /* Center Card */
        .scale-card {
          background: #fff;
          border-radius: 12px; /* Smooth corners */
          padding: 32px 24px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.05);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .globe-icon {
          font-size: 32px;
          margin-bottom: 16px;
          background: #f4f4f4;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .scale-stat {
          font-size: 56px;
          font-weight: 400;
          color: #111;
          margin-bottom: 12px;
          line-height: 1;
        }

        .scale-sub {
          font-size: 14px;
          color: #777;
          margin-bottom: 32px;
          max-width: 80%;
        }

        .portrait-large {
          width: 100%;
          aspect-ratio: 1;
          border-radius: 8px;
          overflow: hidden;
          background: #ccc;
        }
        
        .img-placeholder-lg {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #bbb, #999);
        }

        /* Right Column */
        .col-right {
           padding-top: 0;
           display: flex;
           flex-direction: column;
           gap: 60px;
        }

        .top-right-img {
           align-self: flex-end; /* Align to right */
           width: 160px;
           height: 160px;
           border-radius: 12px;
           overflow: hidden;
           margin-bottom: 20px;
        }
        
        .img-placeholder-sm {
           width: 100%;
           height: 100%;
           background: #555;
           position: relative;
           display: flex;
           align-items: center;
           justify-content: center;
        }
        
        .arrow-overlay {
           width: 40px;
           height: 40px;
           background: #fff;
           border-radius: 50%;
           display: flex;
           align-items: center;
           justify-content: center;
           font-size: 18px;
        }

        .bullet-item {
           display: flex;
           gap: 16px;
           margin-bottom: 32px;
        }
        
        .plus-icon {
           width: 32px;
           height: 32px;
           background: #222;
           color: #fff;
           border-radius: 50%;
           display: flex;
           align-items: center;
           justify-content: center;
           font-size: 14px;
           flex-shrink: 0; /* Prevent shrinking */
        }
        
        .bullet-item p {
           font-size: 14px;
           color: #555;
           line-height: 1.6;
           margin-top: 4px;
        }

        @media (max-width: 900px) {
          .about-grid-3 { grid-template-columns: 1fr; }
          .col-center { order: -1; } /* optional reorder */
          .top-right-img { align-self: flex-start; }
        }
      `}</style>
    </section>
  );
};

export default About;
