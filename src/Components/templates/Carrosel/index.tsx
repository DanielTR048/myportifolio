import React, { useState, useEffect, useRef  } from 'react';
import { Project } from "../project";
import './carousel.css';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';

interface Props {
    projects: Project[];
}

const Carousel: React.FC<Props> = (props: Props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const { projects } = props;
    const intervalRef = useRef<number | null>(null);
    const controls = useAnimation();


    useEffect(() => {
        if (!isHovering) {
            intervalRef.current = setInterval(() => {
                setCurrentIndex((currentIndex + 1) % projects.length);
            }, 5500);
        }
        return () => {
            if (intervalRef.current !== null) {
                clearInterval(intervalRef.current);
            }
        }
    }, [currentIndex, projects, isHovering]);


    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % projects.length);

    };

    const handlePrev = () => {
        setCurrentIndex((currentIndex + projects.length - 1) % projects.length);
    };

    return (
        <div className="carousel-container"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}>
            <button className="carousel-prev-button" onClick={handlePrev}> <i className="fas fa-arrow-left"></i> </button>
            <AnimatePresence>
    {projects.map((project, i) => (
        <motion.div
            key={project.id}
            className="carousel-card"
            initial={i === currentIndex ? "initial" : "exit"}
            animate={i === currentIndex ? { x: 0, opacity: 1.4, transition: { duration: 1 } } : undefined}
            exit="exit"
            variants={{
                initial: { x: 0, opacity: 1 },
                next: { x: "0%", opacity: 1, transition: { duration: 1 } },
                prev: { x: "100%", opacity: 0 },
                exit: { x: "-65%", opacity: 0 },
            }}
        >
            <div className="carousel-card-content">
                <div className="carousel-image-text-container">
                    <img className="carousel-card-image" src={project.image} alt={project.name} />
                    <div className="carousel-card-text"> {project.name}</div>
                </div>
            </div>
        </motion.div>
    ))}
        </AnimatePresence>
            <button className="carousel-next-button" onClick={handleNext}> <i className="fas fa-arrow-right"></i> </button>
        </div>
    );
};

export default Carousel;
