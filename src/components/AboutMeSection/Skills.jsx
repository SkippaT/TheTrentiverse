import { motion } from 'framer-motion';

import FlipCard from "../UI/FlipCard.jsx";
import ProficiencyBar from '../UI/ProficiencyBar.jsx';
import classes from './Skills.module.css';

export default function Skills({ techOrSoftSkills, skills }) {

    return (
        <>
            <div className={classes.technicalSkills}>
                <motion.ul
                    variants={{
                        visible: {
                            transition: { staggerChildren: 0.1 }
                        },
                        hidden: {},
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >

                    {skills.map((skill) => (
                        <motion.li
                            key={skill.skill}
                            variants={{
                                hidden: { opacity: 0, scale: 0.5, rotateY: 90 },
                                visible: { opacity: 1, scale: 1, rotateY: 0 },
                            }}
                            transition={{ type: 'spring' }}
                        >
                            <FlipCard
                                frontSide={
                                    <div className={classes.skill}>
                                        <h3>{skill.skill}</h3>
                                        {techOrSoftSkills === 'technical' && <ProficiencyBar proficiency={skill.proficiency} />}
                                    </div>
                                }
                                backSide={
                                    <div>
                                        <p>{skill.description}</p>
                                    </div>
                                }
                            />

                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </>
    );
}