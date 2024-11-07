import { Fragment, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { AnimatePresence, motion } from 'framer-motion';

import classes from "./Timeline.module.css";

import { EXPERIENCE } from "../../data.js";
import Experience from './Experience.jsx';

export default function Timeline() {

    const [isExperienceOpen, setIsExperienceOpen] = useState(false);
    const [experience, setExperience] = useState();

    return (

        <>

            <AnimatePresence>
                {isExperienceOpen && 
                <Experience experience={experience} onClose={() => setIsExperienceOpen(false)} />
                }
            </AnimatePresence>

            <VerticalTimeline className={classes.timeline} lineColor='#FFF'>
                {EXPERIENCE.map((experienceItem) => (
                    <Fragment key={experienceItem.id}>
                        <VerticalTimelineElement
                            contentStyle={{
                                background: "#f5f5f5",
                                boxShadow: "5px 5px 10px #00000080",
                                borderRadius: 10,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center"
                            }}
                            contentArrowStyle={{
                                borderRight: "0.4rem solid #19015b",
                            }}
                            date={experienceItem.date}
                            icon={
                                <span
                                    className="material-icons"
                                    style={{
                                        fontSize: "48px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        width: "100%",
                                        height: "100%",
                                        color: "#3606ba"
                                    }}
                                >{experienceItem.icon}</span>
                            }
                            iconStyle={{
                                background: "#f3f3f3",
                            }}
                        >
                            <h2>{experienceItem.role}</h2>
                            <p>{experienceItem.company}</p>
                            <p>{experienceItem.description}</p>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 500 }}
                                onClick={() => {
                                    setExperience(experienceItem);
                                    setIsExperienceOpen(true);
                                }}
                            >
                                Learn More</motion.button>
                        </VerticalTimelineElement>
                    </Fragment>
                ))}
            </VerticalTimeline>
        </>
    );
}