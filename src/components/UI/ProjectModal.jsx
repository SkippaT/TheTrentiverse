import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

import classes from './Modal.module.css';
import { useEffect } from 'react';

export default function ProjectModal({ children, onClose, projectId }) {

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        // Add event listener for keydown
        document.addEventListener('keydown', handleKeyDown);

        // Cleanup event listener on component unmount
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [onClose]);

    return createPortal(
        <motion.div
            className={classes.backdrop}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.dialog
                className={`${classes.modal} ${classes.project}`}
                open
                layoutId={`expandable-card-${projectId}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                {children}
            </motion.dialog>
        </motion.div >,
        document.getElementById("modal")
    );
}