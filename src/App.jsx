import HeroSection from './components/HeroSection.jsx';
import NavBar from './components/NavBar.jsx';
import ProjectsSection from './components/Project/ProjectsSection.jsx';
import Marquee from './components/Marquee/Marquee.jsx';

import { TAGS } from './data.js';

function App() {

  const marqueeDuration = 60;

  return (
    <>
      <NavBar />
      <HeroSection />
      <Marquee tags={TAGS} direction={{ from: 0, to: "-100%" }} duration={marqueeDuration} />
      <Marquee tags={TAGS} direction={{ from: "-100%", to: 0 }} duration={marqueeDuration} />
      <ProjectsSection />
    </>
  )
}

export default App
