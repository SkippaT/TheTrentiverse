import { motion } from 'framer-motion';
import classes from './Dropdown.module.css';

export default function Dropdown({ title, links }) {

    return (

        <motion.div
            className={classes.dropdown}
            initial="hidden"
            whileHover="visible"
        >
            <a href="#about-me-section">{title}</a>
            <motion.div
                className={classes.dropdownContent}
                variants={{
                    hidden: { height: 0 },
                    visible: { height: `${links.length * 38 + 10}px` }
                }}
                transition={{ duration: 0.3 }}
            >
                <ol style={{ listStyleType: "none" }}>
                    {links.map((link, index) => (
                        <motion.li key={index}>
                            <a href={link.link}>{link.name}</a>
                        </motion.li>
                    ))}
                </ol>
            </motion.div>
        </motion.div>
    );
}