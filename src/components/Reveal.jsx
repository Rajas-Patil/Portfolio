import React, { useEffect, useRef, useState } from 'react';

const Reveal = ({ children, delay = 0, className = "" }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    // Only reset if it leaves the screen going DOWN (off the bottom)
                    // This allows it to replay when you scroll down again.
                    if (entry.boundingClientRect.top > 0) {
                        setIsVisible(false);
                    }
                }
            },
            {
                threshold: 0.15, // Wait until 15% visible
                rootMargin: "0px 0px -50px 0px" // Offset slightly to trigger before bottom
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const delayClass = delay === 100 ? 'reveal-delay-100' : delay === 200 ? 'reveal-delay-200' : '';

    return (
        <div
            ref={ref}
            className={`reveal-hidden ${isVisible ? 'reveal-visible' : ''} ${delayClass} ${className}`}
        >
            {children}
        </div>
    );
};

export default Reveal;
