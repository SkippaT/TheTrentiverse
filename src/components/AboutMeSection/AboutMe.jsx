import { motion } from 'framer-motion';
import { useState } from 'react';

import classes from './AboutMe.module.css';
import MyStudies from './MyStudies.jsx';
import Skills from './Skills.jsx';

import { TECHNICAL_SKILLS } from '../../data.js';
import { SOFT_SKILLS } from '../../data.js';

// ********************************************* Option 1 open ********************************************* 
function Tab({ isSelected, onSelect, children }) {

    return (
        <li>
            <motion.h3
                className={isSelected ? classes.selected : undefined}
                onClick={onSelect}
                animate={{
                    fontSize: isSelected ? '48px' : '18px',
                }}
                transition={{ duration: 0.3 }}
            >
                {children}
            </motion.h3>
            {isSelected &&
                <motion.div
                    layoutId="tab-indicator"
                    className={classes.activeTabIndicator}
                />}
        </li>
    );
}
// ********************************************* Option 1 close ********************************************* 


export default function AboutMe() {

    const headings = ["My Studies", "Technical Skills", "Soft Skills"];

    const [selectedHeading, setSelectedHeading] = useState(headings[1]);
    function handleChange(heading) {
        setSelectedHeading(heading);
    }

    function displaySection() {
        if (selectedHeading === "My Studies") {
            return <MyStudies />
        }
        if (selectedHeading === "Technical Skills") {
            return <Skills key='technical' techOrSoftSkills='technical' skills={TECHNICAL_SKILLS} />
        }
        if (selectedHeading === "Soft Skills") {
            return <Skills key='soft' techOrSoftSkills='soft' skills={SOFT_SKILLS} />
        }
    }

    return (
        // ********************************************* Option 1 open ********************************************* 
        <div className={classes.aboutMe}>
            <menu className={classes.tabs}>
                {headings.map((heading, index) => (
                    <Tab
                        isSelected={selectedHeading === heading}
                        key={index}
                        onSelect={() => {
                            handleChange(heading);
                        }}
                    >
                        {heading}
                    </Tab>
                ))}
            </menu>
            {/* ********************************************* Option 1 close *********************************************  */}
            {/* --------------------------------------------- Option 2 open ---------------------------------------------  */}
            {/* <Headings headings={headings} onSelect={handleChange} /> */}
            {/* --------------------------------------------- Option 2 close ---------------------------------------------  */}

            <div style={{
                minHeight: "500px"
            }}>

                {displaySection()}
            </div>
        </div>
    );
}