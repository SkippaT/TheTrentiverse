import './App.css'
import { motion, useScroll, useTransform } from 'framer-motion';
import HeroSection from './components/HeroSection.jsx';
import NavBar from './components/NavBar.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import { useRef, useEffect } from 'react';

function App() {

  const targetRef = useRef(null);

  const { scrollYProgress: heroSectionSrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end center", "end start"]
  });

  const background = useTransform(
    heroSectionSrollYProgress,
    [0, 1],
    ["#f3f3f3", "#cccccc"]
  );

  return (
    <>
      <motion.div className="background" style={{ backgroundColor: background }} />
      <NavBar />
      <HeroSection targetRef={targetRef} />
      <ProjectsSection />
    </>
  )
}

export default App
