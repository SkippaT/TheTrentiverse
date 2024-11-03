import { motion } from 'framer-motion';

import classes from './marquee.module.css';

export default function HalfMarquee({ tags, direction, duration }) {

    return (
        <motion.div
            className={classes.halfMarquee}
            initial={{ x: direction.from }}
            animate={{ x: direction.to }}
            transition={{ duration: duration, repeat: Infinity, ease: 'linear' }}
        >
            {tags.map((tag, index) => (
                <span key={index} className={classes.tag}>{tag}</span>
            ))}
        </motion.div>
    );
}