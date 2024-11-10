import { motion } from 'framer-motion';
import { useState } from 'react';

import Section from '../Section.jsx';
import Button from '../UI/Button.jsx';
import classes from './AboutMe.module.css';
import MyStudies from './MyStudies.jsx';
import Headings from './Headings.jsx';
import TechnicalSkills from './TechnicalSkills.jsx';

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

    // ********************************************* Option 1 open ********************************************* 
    // ********************************************* Option 1 close ********************************************* 
    const headings = ["My Studies", "Technical Skills", "Soft Skills"];

    const [selectedHeading, setSelectedHeading] = useState(headings[1]);
    function handleChange(heading) {
        setSelectedHeading(heading);
    }
    // --------------------------------------------- Option 2 open --------------------------------------------- 
    // --------------------------------------------- Option 2 close --------------------------------------------- 

    function displaySection() {
        if (selectedHeading === "My Studies") {
            return <MyStudies />
        }
        if (selectedHeading === "Technical Skills") {
            return <TechnicalSkills />
        }
        if (selectedHeading === "Soft Skills") {
            return <p>these be me soft skills</p>
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

            {displaySection()}
        </div>
    );
}