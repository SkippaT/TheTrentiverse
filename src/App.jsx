import './App.css'
import { motion, useScroll, useTransform } from 'framer-motion';
import HeroSection from './components/HeroSection.jsx';
import NavBar from './components/NavBar.jsx';

function App() {

  // const targetRef = useRef(null);

  // const { scrollYProgress } = useScroll({
  //   target: targetRef,
  //   offset: ["start center", "end end"]
  // });
  // const { scrollY } = useScroll();

  // const background = useTransform(
  //   scrollYProgress,
  //   [0, 1],
  //   ["#5e9cd9", "#03407e"]
  // );

  return (
    <>
      <NavBar />
      <HeroSection />
    </>
  )
}

export default App
