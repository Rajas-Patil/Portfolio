import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after mount
    setLoaded(true);
  }, []);

  return (
    <section className="hero-section">
      {/* Navbar */}
      <div className={`hero-nav ${loaded ? 'fade-in-down' : ''}`}>
        <div className="brand">Rajas.</div>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Works</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Testimonial</a>
        </div>
        <button className="contact-btn">Contact</button>
      </div>

      {/* Main Content */}
      <div className="hero-content">
        {/* Floating "Hey, there" */}
        <h1 className={`cursive-title ${loaded ? 'fade-in' : ''}`}>Hey, there</h1>

        {/* Central Portrait (Transparent PNG) */}
        <div className={`portrait-container ${loaded ? 'scale-up' : ''}`}>
          <img src="/rajas-profile-transparent.png" alt="Rajas Profile" className="premium-cutout" />
        </div>

        {/* Floating Badge Left */}
        <div className={`avail-badge ${loaded ? 'fade-in-left' : ''}`}>
          <span className="dot"></span>
          Available for new opportunities
        </div>

        {/* Description Right */}
        <p className={`intro-desc ${loaded ? 'fade-in-right' : ''}`}>
          Specialized in Backend Systems,<br />
          AI Integration, Python,<br />
          and Scalable Architecture.
        </p>

        {/* Bottom Big Text */}
        <div className="bottom-text-row">
          <div className={`big-text-left ${loaded ? 'fade-in-up' : ''}`}>
            <div className="i-am">I AM</div>
            <div className="name-text">RAJAS</div>
          </div>
          <div className={`big-text-right ${loaded ? 'fade-in-up-delay' : ''}`}>
            AI<br />DEVELOPER
          </div>
        </div>
      </div>

      <style>{`
        /* Animations */
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeInDown { from { opacity: 0; transform: translateY(-30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeInLeft { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes fadeInRight { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes scaleUp { from { opacity: 0; transform: translateX(-50%) scale(0.9); } to { opacity: 1; transform: translateX(-50%) scale(1); } }

        .fade-in { animation: fadeIn 1.2s ease forwards; opacity: 0; }
        .fade-in-down { animation: fadeInDown 1s ease forwards; opacity: 0; }
        .fade-in-up { animation: fadeInUp 1s ease 0.3s forwards; opacity: 0; }
        .fade-in-up-delay { animation: fadeInUp 1s ease 0.5s forwards; opacity: 0; }
        .fade-in-left { animation: fadeInLeft 1s ease 0.8s forwards; opacity: 0; }
        .fade-in-right { animation: fadeInRight 1s ease 0.8s forwards; opacity: 0; }
        .scale-up { animation: scaleUp 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; opacity: 0; }

        .hero-section {
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(180deg, #fffcf5 0%, #fffbf0 60%, #ffffff 100%);
          position: relative;
          display: flex;
          flex-direction: column;
          font-family: 'Inter', sans-serif;
          overflow: hidden;
        }

        .hero-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 30px 60px;
          z-index: 20;
        }
        
        .brand { 
          font-family: 'Playfair Display', serif; 
          font-style: italic; 
          font-weight: 600; 
          font-size: 32px; 
          letter-spacing: -0.5px;
          color: #111;
        }
        
        .nav-links { 
          display: flex; 
          gap: 48px; 
        }
        .nav-links a {
          font-size: 14px; 
          font-weight: 500; 
          color: #333;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          position: relative;
        }
        .nav-links a:hover::after { width: 100%; }
        .nav-links a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 1px;
          bottom: -4px;
          left: 0;
          background-color: #000;
          transition: width 0.3s ease;
        }

        .contact-btn { 
          background: #111; 
          color: #fff; 
          padding: 14px 36px; 
          border-radius: 50px; 
          font-size: 13px; 
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          transition: transform 0.2s;
        }
        .contact-btn:hover { transform: scale(1.05); }

        .hero-content {
          flex: 1;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 0 60px 40px;
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
        }

        .cursive-title {
          position: absolute;
          top: 10%;
          left: 0;
          width: 100%;
          text-align: center;
          transform: translateY(-50%);
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 140px; /* Smaller */
          font-weight: 400;
          color: #1a1a1a;
          z-index: 1; /* Behind image */
          white-space: nowrap;
          letter-spacing: -6px;
          opacity: 0.9;
        }

        .portrait-container {
          position: absolute;
          bottom: -40px; /* Grounded lower */
          left: 50%;
          transform: translateX(-50%);
          height: 120vh; /* Much Bigger */
          z-index: 2;
          display: flex;
          align-items: flex-end;
          pointer-events: none;
        }
        
        .premium-cutout {
          height: 100%;
          width: auto;
          object-fit: contain;
          filter: drop-shadow(0 0 20px rgba(0,0,0,0.1));
        }

        .avail-badge {
          position: absolute;
          left: 60px;
          top: 35%; /* Moved Up */
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          padding: 16px 32px;
          border-radius: 40px;
          font-size: 14px;
          font-weight: 600;
          color: #111;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          display: flex;
          align-items: center;
          gap: 12px;
          z-index: 3;
          border: 1px solid rgba(255,255,255,0.6);
        }
        .dot { 
           width: 8px; 
           height: 8px; 
           background: #d6f200; 
           border-radius: 50%; 
           box-shadow: 0 0 0 4px rgba(214, 242, 0, 0.2);
        }

        .intro-desc {
          position: absolute;
          right: 60px;
          top: 45%;
          text-align: left;
          font-size: 16px;
          line-height: 1.6;
          font-weight: 500;
          color: #222;
          max-width: 280px;
          z-index: 3;
        }

        .bottom-text-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          position: relative;
          z-index: 5;
          width: 100%;
          padding-bottom: 30px;
        }

        .big-text-left {
           display: flex;
           flex-direction: column;
           line-height: 0.85;
        }

        .i-am {
           font-size: 140px;
           font-weight: 800;
           text-transform: uppercase;
           letter-spacing: -6px;
           color: #000;
        }
        
        .name-text {
           font-size: 140px;
           font-weight: 800;
           text-transform: uppercase;
           letter-spacing: -6px;
           color: #000;
           margin-left: 0; 
        }

        .big-text-right {
          font-size: 52px;
          line-height: 0.95;
          font-weight: 700;
          text-transform: uppercase;
          text-align: left;
          color: #111;
          letter-spacing: -1px;
        }

        /* Responsiveness */
        @media (max-width: 1400px) {
           .cursive-title { font-size: 160px; }
           .i-am, .name-text { font-size: 100px; }
           .big-text-right { font-size: 40px; }
        }

        @media (max-width: 1024px) {
           /* Tablet adjustments */
           .hero-nav { padding: 20px 40px; }
           .nav-links { gap: 24px; }
           .nav-links a { font-size: 12px; }
           
           .cursive-title { font-size: 120px; top: 12%; }
           .i-am, .name-text { font-size: 80px; }
           
           .intro-desc { top: 40%; right: 40px; }
           .avail-badge { top: 30%; left: 40px; }
        }

        @media (max-width: 768px) {
           /* Mobile Landscape / Small Tablet */
           .hero-nav { padding: 20px; }
           .nav-links { display: none; }
           .brand { font-size: 24px; }
           .contact-btn { padding: 8px 20px; font-size: 12px; }

           .hero-content { 
             padding: 0 20px 20px; 
             justify-content: center; /* Center content vertically */
           }
           
           .cursive-title { 
             font-size: 60px; /* Much smaller */
             top: 15%; 
             width: 100%;
             text-align: center;
             transform: translateX(-50%);
             white-space: normal; /* Allow wrap if really needed, but mostly scale down */
           }
           
           .portrait-container { 
             height: 45vh; /* Reduce height to make room */
             bottom: 140px; 
           }
           
           /* Stack floating elements for mobile */
           .avail-badge { 
             top: auto; 
             bottom: auto;
             top: 80px; /* Move to top below nav */
             left: 50%;
             transform: translateX(-50%);
             padding: 8px 16px; 
             font-size: 11px; 
             width: max-content;
             backdrop-filter: blur(5px);
           }
           
           .intro-desc { 
             position: relative;
             top: auto; 
             right: auto; 
             bottom: auto;
             font-size: 12px; 
             max-width: 100%; 
             text-align: center; 
             margin-bottom: 20px;
             order: -1; /* Move above bottom text */
           }
           
           .bottom-text-row { 
             flex-direction: column; 
             align-items: center; 
             gap: 4px; 
             text-align: center;
             padding-bottom: 0;
             position: absolute;
             bottom: 20px;
             left: 0;
           }
           
           .big-text-left { 
             align-items: center; 
             width: 100%;
           }
           
           .big-text-right { 
             text-align: center; 
             font-size: 16px; 
             align-self: center; 
             margin-left: 0; 
             margin-top: 10px;
             letter-spacing: 2px;
           }
           
           .i-am, .name-text { 
             font-size: 42px; 
             letter-spacing: -1px; 
             margin-left: 0;
             line-height: 1;
           }
           
           .i-am { margin-right: 0; display: block; margin-bottom: -5px; }
        }

        @media (max-width: 480px) {
           /* Mobile Portrait */
           .cursive-title { font-size: 56px; top: 12%; }
           .portrait-container { height: 45vh; bottom: 130px; }
           
           .avail-badge { top: 70px; }
           
           .i-am, .name-text { font-size: 36px; }
           .big-text-right { font-size: 14px; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
