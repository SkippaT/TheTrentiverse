import { motion } from 'framer-motion';

import FlipCard from "../UI/FlipCard.jsx";
import classes from './TechnicalSkills.module.css';

export default function TechnicalSkills() {

    return (
        <>
            <div className={classes.technicalSkills}>
                <motion.ul
                    variants={{
                        visible: {
                            transition: { staggerChildren: 0.1 }
                        },
                        hidden: {}
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                >
                    <motion.li
                        variants={{
                            hidden: { opacity: 0, scale: 0.5 },
                            visible: { opacity: 1, scale: 1 }
                        }}
                        transition={{ type: 'spring' }}
                    >
                        <FlipCard title="Java" proficiency="expert" description="Lots of experience with personal projects. Initially learnt at RMIT." />

                    </motion.li>
                    <motion.li
                        variants={{
                            hidden: { opacity: 0, scale: 0.5 },
                            visible: { opacity: 1, scale: 1 }
                        }}
                        transition={{ type: 'spring' }}
                    >
                        <FlipCard title="Java" proficiency="expert" description="Lots of experience with personal projects. Initially learnt at RMIT." />

                    </motion.li>
                    <motion.li
                        variants={{
                            hidden: { opacity: 0, scale: 0.5 },
                            visible: { opacity: 1, scale: 1 }
                        }}
                        transition={{ type: 'spring' }}
                    >
                        <FlipCard title="Java" proficiency="expert" description="Lots of experience with personal projects. Initially learnt at RMIT." />

                    </motion.li>
                    <motion.li
                        variants={{
                            hidden: { opacity: 0, scale: 0.5 },
                            visible: { opacity: 1, scale: 1 }
                        }}
                        transition={{ type: 'spring' }}
                    >
                        <FlipCard title="Java" proficiency="expert" description="Lots of experience with personal projects. Initially learnt at RMIT." />

                    </motion.li>
                    <motion.li
                        variants={{
                            hidden: { opacity: 0, scale: 0.5 },
                            visible: { opacity: 1, scale: 1 }
                        }}
                        transition={{ type: 'spring' }}
                    >
                        <FlipCard title="Java" proficiency="expert" description="Lots of experience with personal projects. Initially learnt at RMIT." />

                    </motion.li>
                </motion.ul>
            </div>
        </>
    );
}