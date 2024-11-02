import { motion } from 'framer-motion';

import memoji from "../assets/memoji.png";
import snowboard from "../assets/snowboard.png";
import classes from './Project.module.css';

export default function Project({
    name,
    subheading,
    description,
    image,
    imageDescription,
    skills
}) {

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
                <h1>{name}</h1>
                <h3>{subheading}</h3>
                <p>{description}</p>
                <div className={classes.skills}>
                    {skills.map((skill) => (
                        <li key={skill}><span className={classes.tag}>{skill}</span></li>
                    ))}
                </div>
            </div>
            <div className={`${classes.right} ${classes.split}`}>
                <img src={image} alt={imageDescription} />
            </div>
        </motion.div>
    );
}