import { useState } from 'react';
import { motion } from 'framer-motion';

import classes from './Headings.module.css';

export default function Headings({ headings, onSelect }) {
  const [selected, setSelected] = useState(1);



  // Define the positions for the headings
  const positions = [
    { x: -200, y: 0 },
    { x: 0, y: 0 },
    { x: 200, y: 0 },
  ];

  // Define the position and font size for the selected heading
  const selectedStyle = { x: 0, y: 100, fontSize: '4em', color: "#3606ba" };

  return (
    <>
      <div className={classes.headings}>
        {headings.map((heading, index) => {
          const isSelected = index === selected;

          return (
            <motion.h2
              key={index}
              onClick={() => {
                setSelected(index);
                onSelect(heading);
              }}
              initial={isSelected ? selectedStyle : { ...positions[index], fontSize: "1.5rem", color: "#19015b" }}
              animate={isSelected ? selectedStyle : { ...positions[index], fontSize: "1.5rem", color: "#19015b" }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              style={{
                zIndex: isSelected ? 1 : 0,
              }}
            >
              {heading}
            </motion.h2>
          );
        })}
      </div>
    </>
  );
};
