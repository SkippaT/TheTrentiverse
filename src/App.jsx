import HeroSection from './components/HeroSection.jsx';
import NavBar from './components/NavBar.jsx';
import Projects from './components/Project/Projects.jsx';
import Marquee from './components/Marquee/Marquee.jsx';
import Section from './components/Section.jsx';
import Experience from './components/Experience.jsx';
import Timeline from './components/Timeline.jsx';

import { TAGS } from './data.js';

function App() {

  const marqueeDuration = 60;

  return (
    <>
      <NavBar />
      <HeroSection />
      <Marquee tags={TAGS} direction={{ from: 0, to: "-100%" }} duration={marqueeDuration} />
      <Marquee tags={TAGS} direction={{ from: "-100%", to: 0 }} duration={marqueeDuration} />
      <div style={{ height: 25 }} />
      <Section sectionName="My Projects">
        <Projects />
      </Section>
      <Section sectionName="Experience">
        <Timeline />
      </Section>
    </>
  )
}

export default App
