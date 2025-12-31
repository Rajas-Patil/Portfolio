import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';

const LatestWorks = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    // More mock data to demonstrate the slider effectively
    const works = [
        { id: 1, title: "Halo Digital Agency", category: "Web Design", bg: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)" },
        { id: 2, title: "Squeeze Analytics", category: "Dashboard", bg: "linear-gradient(120deg, #f093fb 0%, #f5576c 100%)" },
        { id: 3, title: "Lumina Interface", category: "Mobile App", bg: "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)" },
        { id: 4, title: "Vortex Brand Identity", category: "Branding", bg: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)" },
        { id: 5, title: "Chronos Watch", category: "E-Commerce", bg: "linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)" },
    ];

    useEffect(() => {
        const updateWidth = () => {
            if (carousel.current) {
                setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
            }
        };

        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    return (
        <section className="latest-works-section">
            <div className="container" style={{ overflow: 'hidden', padding: '100px 0' }}>

                {/* Header */}
                <div className="header-wrapper">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="section-tag"
                    >
                        ● Selected Work
                    </motion.div>

                    <div className="title-row">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="section-title"
                        >
                            Latest Projects
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="drag-label"
                        >
                            <span className="drag-text">Drag to explore</span>
                            <FiArrowRight />
                        </motion.div>
                    </div>
                </div>

                {/* Carousel */}
                <motion.div
                    ref={carousel}
                    className="carousel"
                    whileTap={{ cursor: "grabbing" }}
                >
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        className="inner-carousel"
                    >
                        {works.map((work) => (
                            <motion.div
                                key={work.id}
                                className="card-container"
                                whileHover={{ scale: 0.98 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="card-image" style={{ background: work.bg }}>
                                    <div className="overlay">
                                        <motion.div
                                            className="view-btn"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileHover={{ opacity: 1, scale: 1 }}
                                        >
                                            View Case <FiArrowUpRight />
                                        </motion.div>
                                    </div>
                                </div>
                                <div className="card-info">
                                    <h3 className="card-title">{work.title}</h3>
                                    <span className="card-category">{work.category}</span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Bottom Link */}
                <div className="bottom-area">
                    <a href="#" className="all-projects-link">
                        View All Projects <FiArrowRight />
                    </a>
                </div>
            </div>

            <style>{`
        .latest-works-section {
            position: relative;
            background: #fff; /* or transparent integration */
        }
        
        .header-wrapper {
            padding: 0 24px;
            margin-bottom: 50px;
        }

        .section-tag {
            display: inline-block;
            font-size: 13px;
            font-weight: 600;
            color: #666;
            margin-bottom: 16px;
            background: #f5f5f7;
            padding: 6px 14px 6px 12px;
            border-radius: 30px;
        }

        .title-row {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            margin-bottom: 20px;
        }

        .section-title {
            font-size: 42px;
            font-weight: 500;
            letter-spacing: -1.5px;
            color: #111;
            margin: 0;
            line-height: 1;
        }

        .drag-label {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 14px;
            color: #888;
        }

        /* Carousel Styles */
        .carousel {
            cursor: grab;
            overflow: hidden;
            padding-left: 24px; /* Align first card with container padding */
        }
        
        .inner-carousel {
            display: flex;
            gap: 30px; /* Space between cards */
        }

        .card-container {
            min-width: 400px;
            /* width: 400px; */
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .card-image {
            height: 500px;
            border-radius: 20px;
            position: relative;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0,0,0,0.05);
            transition: box-shadow 0.3s ease;
        }

        .card-image:hover {
            box-shadow: 0 30px 60px rgba(0,0,0,0.12);
        }

        .overlay {
            position: absolute;
            inset: 0;
            background: rgba(0,0,0,0.02);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0; 
            transition: opacity 0.3s ease;
        }
        
        .card-container:hover .overlay {
            opacity: 1;
        }

        .view-btn {
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(10px);
            padding: 12px 24px;
            border-radius: 30px;
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: 500;
            font-size: 15px;
            color: #111;
            box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        .card-info {
            padding: 0 4px;
        }

        .card-title {
            font-size: 20px;
            font-weight: 500;
            color: #1d1d1f;
            margin: 0 0 4px 0;
        }

        .card-category {
            font-size: 14px;
            color: #86868b;
        }

        .bottom-area {
            display: flex;
            justify-content: center;
            margin-top: 60px;
        }

        .all-projects-link {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 15px;
            font-weight: 500;
            color: #111;
            padding-bottom: 2px;
            border-bottom: 1px solid #e5e5e5;
            transition: all 0.2s ease;
        }

        .all-projects-link:hover {
            border-color: #111;
            gap: 12px;
        }

        @media (max-width: 768px) {
            .section-title {
                font-size: 32px;
            }
            .card-container {
                min-width: 280px;
            }
            .card-image {
                height: 350px;
            }
            .title-row {
                flex-direction: column;
                align-items: flex-start;
                gap: 12px;
            }
        }
      `}</style>
        </section>
    );
};

export default LatestWorks;
