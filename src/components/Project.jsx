import { motion } from 'framer-motion';

import memoji from "../assets/memoji.png";
import snowboard from "../assets/snowboard.png";
import classes from './Project.module.css';

export default function Project() {

    return (
        <motion.div
            className={classes.project}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{
                scale: 1.05,
                transition: { duration: "0.2", type: 'spring', stiffness: 300, damping: 15 }
            }}
        >
            <div className={`${classes.descriptionSplit} ${classes.split}`}>
                <h1>Project Name</h1>
                <h3>Project Subheading</h3>
                <p>
                    Project description. This can and should hopefully be quite long. I want it to be long so
                    that the widths in the project container is reasonable.
                </p>
                <div className={classes.skills}>
                    <span className={classes.tag}>React</span>
                    <span className={classes.tag}>JavaScript</span>
                    <span className={classes.tag}>Python</span>
                </div>
            </div>
            <div className={`${classes.right} ${classes.split}`}>
                <img src={snowboard} alt="Emoji image of Me" />
            </div>
        </motion.div>
    );
}