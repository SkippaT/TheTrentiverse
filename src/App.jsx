import HeroSection from './components/HeroSection.jsx';
import NavBar from './components/NavBar.jsx';
import Projects from './components/ProjectsSection/Projects.jsx';
import Marquee from './components/Marquee/Marquee.jsx';
import Section from './components/Section.jsx';
import Timeline from './components/ExperienceSection/Timeline.jsx';

import { TAGS } from './data.js';
import AboutMe from './components/AboutMeSection/AboutMe.jsx';

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
      <Section sectionName="About Me">
        <AboutMe />
      </Section>
    </>
  )
}

export default App
