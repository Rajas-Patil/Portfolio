import React, { useState } from 'react';

const FeaturedProjects = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const projects = [
    {
      id: 1,
      name: "AI Analytics Pro",
      subtitle: "Data Visualization",
      desc: "Next-gen dashboard powered by machine learning algorithms that predict market trends with 99% accuracy.",
      tech: ["React", "Python", "TF"],
      link: "https://github.com",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
      size: "large"
    },
    {
      id: 2,
      name: "Nebula Cloud",
      subtitle: "Infrastructure",
      desc: "Distributed cloud system capable of handling petabytes of data with zero latency.",
      tech: ["AWS", "Docker"],
      link: "https://github.com",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop",
      size: "medium"
    },
    {
      id: 3,
      name: "Crypto Sentinel",
      subtitle: "Blockchain Security",
      desc: "Fortress-level security wallet for next-gen assets.",
      tech: ["Solidity", "Web3"],
      link: "https://github.com",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2664&auto=format&fit=crop",
      size: "medium"
    },
    {
      id: 4,
      name: "Cyber Vision",
      subtitle: "Computer Vision",
      desc: "Advanced security system that sees what humans miss.",
      tech: ["OpenCV", "PyTorch"],
      link: "https://github.com",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
      size: "wide"
    }
  ];

  return (
    <section className="premium-featured">
      <div className="content-wrapper">
        <header className="section-header">
          <span className="section-tag">PORTFOLIO</span>
          <h2 className="section-title">Featured <span className="italic-accent">Work</span></h2>
          <p className="section-desc">A curated selection of digital excellence. Each project represents a breakthrough in technology and design.</p>
        </header>

        <div className="bento-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-card ${project.size} ${hoveredId === project.id ? 'active' : ''}`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="card-inner">
                <div className="image-container">
                  <img src={project.image} alt={project.name} />
                  <div className="image-overlay"></div>
                </div>

                <div className="card-content">
                  <div className="content-top">
                    <span className="project-subtitle">{project.subtitle}</span>
                    <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                    </a>
                  </div>

                  <div className="content-bottom">
                    <h3 className="project-title">{project.name}</h3>
                    <p className="project-desc">{project.desc}</p>
                    <div className="tech-stack">
                      {project.tech.map((t, i) => (
                        <span key={i} className="tech-pill">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .premium-featured {
            position: relative;
            padding: 120px 24px;
            background-color: var(--bg-color, #f7f7f7); /* Use global var or fallback */
            color: #111;
            font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }

        .content-wrapper {
            position: relative;
            z-index: 1;
            max-width: 1280px;
            margin: 0 auto;
        }

        /* Header */
        .section-header {
            text-align: center;
            margin-bottom: 80px;
            animation: fadeIn 1s ease-out;
        }

        .section-tag {
            font-size: 0.75rem;
            font-weight: 600;
            letter-spacing: 0.2em;
            color: #666;
            text-transform: uppercase;
            display: block;
            margin-bottom: 16px;
        }

        .section-title {
            font-size: 4rem;
            font-weight: 800;
            letter-spacing: -0.03em;
            line-height: 1.1;
            margin: 0 0 24px 0;
            color: #111;
        }

        .italic-accent {
            font-family: 'Playfair Display', serif; /* Matching Hero */
            font-style: italic;
            font-weight: 400;
        }

        .section-desc {
            font-size: 1.125rem;
            color: #555;
            max-width: 500px;
            margin: 0 auto;
            line-height: 1.6;
        }

        /* Bento Grid */
        .bento-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            grid-auto-flow: dense;
        }

        .project-card {
            position: relative;
            border-radius: 20px;
            background: #fff;
            overflow: hidden;
            transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
            cursor: pointer;
            height: 420px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
        }

        .project-card.large {
            grid-column: span 1;
            grid-row: span 2;
            height: 864px; /* 420 * 2 + 24 gap */
        }

        .project-card.wide {
            grid-column: span 2;
        }

        /* Hover States */
        .project-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .card-inner {
            position: relative;
            width: 100%;
            height: 100%;
        }

        /* Image */
        .image-container {
            position: absolute;
            inset: 0;
            z-index: 0;
            overflow: hidden;
        }

        .image-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .project-card:hover .image-container img {
            transform: scale(1.08); /* Subtle zoom */
        }

        .image-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
                to bottom,
                rgba(0,0,0,0) 0%,
                rgba(0,0,0,0.2) 50%,
                rgba(0,0,0,0.8) 100%
            );
            transition: opacity 0.5s ease;
            opacity: 0.8; 
        }

        /* Content */
        .card-content {
            position: relative;
            z-index: 1;
            height: 100%;
            padding: 32px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            color: #fff; /* Text over image needs to be white */
        }

        .content-top {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .project-subtitle {
            font-size: 0.75rem;
            color: #fff;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            background: rgba(0, 0, 0, 0.3);
            padding: 6px 14px;
            border-radius: 100px;
            backdrop-filter: blur(4px);
        }

        .project-link {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            background: #fff;
            color: #000;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
            transform: scale(0.9);
            opacity: 0;
        }

        .project-card:hover .project-link {
            transform: scale(1) rotate(-45deg);
            opacity: 1;
        }
        
        .project-link:hover {
            transform: scale(1.1) rotate(0deg);
        }

        .project-link svg {
            width: 20px;
            height: 20px;
        }

        /* Description & Title */
        .content-bottom {
            transform: translateY(10px);
            transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .project-card:hover .content-bottom {
            transform: translateY(0);
        }

        .project-title {
            font-size: 2rem;
            font-weight: 700;
            color: #fff;
            margin: 0 0 8px 0;
            line-height: 1.1;
        }

        .project-desc {
            font-size: 0.95rem;
            color: rgba(255, 255, 255, 0.9);
            margin: 0 0 20px 0;
            line-height: 1.5;
            opacity: 0;
            max-height: 0;
            overflow: hidden;
            transition: all 0.4s ease;
        }

        .project-card:hover .project-desc {
            opacity: 1;
            max-height: 100px;
        }

        .tech-stack {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .tech-pill {
            font-size: 0.75rem;
            color: #fff;
            background: rgba(255, 255, 255, 0.2);
            padding: 6px 12px;
            border-radius: 6px;
            backdrop-filter: blur(5px);
            font-weight: 500;
        }

        /* Animations */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* Responsive */
        @media (max-width: 1024px) {
            .bento-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            .project-card.large {
                grid-column: span 2;
                grid-row: span 1;
                height: 420px;
            }
            .project-card.wide {
                grid-column: span 2;
            }
        }

        @media (max-width: 640px) {
            .premium-featured { padding: 80px 20px; }
            .bento-grid {
                grid-template-columns: 1fr;
            }
            .project-card.large, .project-card.wide, .project-card {
                grid-column: span 1;
                height: 380px;
            }
            .section-title {
                font-size: 2.5rem;
            }
            .project-desc {
                opacity: 1;
                max-height: none;
            }
            .project-link {
                opacity: 1;
                transform: scale(1);
            }
        }
      `}</style>
    </section>
  );
};

export default FeaturedProjects;
