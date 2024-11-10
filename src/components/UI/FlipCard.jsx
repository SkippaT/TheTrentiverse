import { useState } from 'react';
import { motion } from 'framer-motion';

import classes from './FlipCard.module.css';

export default function FlipCard() {

    const [isFlipped, setIsFlipped] = useState();

    const transition = {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.4
    }

    return (
        <motion.div
            className={classes.card}
            onHoverStart={() => setIsFlipped(true)}
            onHoverEnd={() => setIsFlipped(false)}
        >
            <motion.div
                className={classes.innerCard}
                variants={{
                    notFlipped: { rotateY: 0, transition: transition },
                    flipped: { rotateY: 180, transition: transition }
                }}
                animate={isFlipped ? "flipped" : "notFlipped"}
            >
                <div className={classes.cardFront}>
                    <p>Front Side</p>
                </div>
                <div className={classes.cardBack}>
                    <p>Back Side</p>
                </div>
            </motion.div>
        </motion.div>
    );
}