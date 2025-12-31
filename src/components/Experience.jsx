import React, { useState } from 'react';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const jobs = [
    { title: "Senior Backend Engineer", company: "TechFlow Systems", loc: "Remote, USA", date: "Feb 2023 - Present", status: "Current" },
    { title: "AI Research Lead", company: "DataMind Inc", loc: "San Francisco, CA", date: "Jan 2021 - Feb 2023", status: "Previous" },
    { title: "Software Developer", company: "Innovate Ltd", loc: "London, UK", date: "Nov 2018 - Dec 2020", status: "Previous" }
  ];

  return (
    <section className="container" style={{ paddingBottom: '80px' }}>
      <div className="card experience-card">
        <h2 className="title-left">Explore My Development Journey</h2>

        <div className="experience-layout">
          {/* List Column */}
          <div className="job-list">
            {jobs.map((job, idx) => (
              <div
                key={idx}
                className={`job-item ${activeTab === idx ? 'active' : ''}`}
                onClick={() => setActiveTab(idx)}
              >
                <h4>{job.company}</h4>
                <p>{job.loc}</p>
                <span>{job.date}</span>
              </div>
            ))}
          </div>

          {/* Details Column */}
          <div className="job-details">
            <div className="detail-header">
              <div>
                <h3>{jobs[activeTab].title}</h3>
                <p>{jobs[activeTab].company}</p>
              </div>
              <span className="status-pill">{jobs[activeTab].status}</span>
            </div>

            <p className="job-desc">
              Led the migration of legacy monoliths to microservices architecture, improving system uptime by 99.9%.
              Collaborated with cross-functional teams to integrate AI models into production pipelines.
            </p>

            <div className="mini-thumbnails">
              <div className="mini-thumb"></div>
              <div className="mini-thumb"></div>
              <div className="mini-thumb"></div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .experience-card {
          padding: 60px;
          background: #fff;
        }
        
        .title-left {
          font-size: 24px;
          margin-bottom: 40px;
          font-weight: 500;
        }

        .experience-layout {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 60px;
        }

        .job-item {
          padding: 20px 0;
          border-bottom: 1px solid var(--border-color);
          cursor: pointer;
          transition: all 0.2s;
          opacity: 0.6;
        }
        
        .job-item.active {
          opacity: 1;
          border-bottom: 1px solid #111;
        }

        .job-item h4 {
          font-size: 16px; 
          margin-bottom: 4px;
        }
        .job-item p { font-size: 13px; color: #555; }
        .job-item span { font-size: 12px; color: #999; }

        .detail-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 24px;
        }

        .detail-header h3 { font-size: 20px; margin-bottom: 4px; }
        .detail-header p { color: #666; font-size: 14px; }

        .status-pill {
          background: #f0f0f0;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
          color: #333;
        }

        .job-desc {
          font-size: 15px;
          line-height: 1.7;
          color: #444;
          margin-bottom: 40px;
        }

        .mini-thumbnails {
          display: flex;
          gap: 16px;
        }
        .mini-thumb {
          width: 60px;
          height: 60px;
          background: #eee;
          border-radius: 8px;
        }

        @media (max-width: 900px) {
           .experience-card { padding: 40px; }
        }

        @media (max-width: 768px) {
          .experience-layout { 
            grid-template-columns: 1fr; 
            gap: 40px;
          }
          
          .experience-card { padding: 30px 20px; }
          .title-left { font-size: 20px; margin-bottom: 30px; }
          
          /* Make job list scrollable horizontally if too crowded, or just stacked */
          .job-item { padding: 15px 0; }
        }
        
        @media (max-width: 480px) {
           .detail-header { flex-direction: column; align-items: flex-start; gap: 10px; }
           .status-pill { align-self: flex-start; }
           .job-desc { font-size: 14px; }
           
           .mini-thumb { width: 50px; height: 50px; }
        }
      `}</style>
    </section>
  );
};

export default Experience;
