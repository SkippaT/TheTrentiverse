import HeroSection from './components/HeroSection.jsx';
import NavBar from './components/NavBar.jsx';
import Projects from './components/Project/Projects.jsx';
import Marquee from './components/Marquee/Marquee.jsx';
import Section from './components/Section.jsx';
import Experience from './components/Experience.jsx';

import { TAGS } from './data.js';

function App() {

  const marqueeDuration = 60;

  return (
    <>
      <NavBar />
      <HeroSection />
      <Marquee tags={TAGS} direction={{ from: 0, to: "-100%" }} duration={marqueeDuration} />
      <Marquee tags={TAGS} direction={{ from: "-100%", to: 0 }} duration={marqueeDuration} />
      <Section sectionName="My Projects">
        <Projects />
      </Section>
      <Section sectionName="Experience">
        <Experience />
      </Section>
    </>
  )
}

export default App
