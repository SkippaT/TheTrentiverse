import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import classes from './Project.module.css';
import FullProject from './FullProject.jsx';
import ProjectTeaser from './ProjectTeaser.jsx';

export default function Project({ project }) {
    const [isProjectOpen, setIsProjectOpen] = useState(false);



    return (
        <>
            <AnimatePresence>
                {isProjectOpen && <FullProject project={project} onClose={() => {
                    setIsProjectOpen(false);
                }} />}
            </AnimatePresence>


            <motion.div
                className={classes.project}
                layoutId={`expandable-card-${project.id}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{
                    scale: 1.05,
                    transition: { duration: "0.2", type: 'spring', stiffness: 300, damping: 15 }
                }}
                onClick={() => {
                    setIsProjectOpen(true);
                }}
            >
                <ProjectTeaser project={project} />
            </motion.div>


        </>
    );
}