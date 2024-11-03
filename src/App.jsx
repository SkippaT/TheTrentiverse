import HeroSection from './components/HeroSection.jsx';
import NavBar from './components/NavBar.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import Marquee from './components/Marquee/Marquee.jsx';

import { TAGS } from './data.js';

function App() {

  const tags = [
    "Upper one",
    "Upper two",
    "Upper three",
    "Upper four",
    "Upper five",
    "Upper six",
    "Upper seven",
    "Upper eight",
    "Upper nine",
    "Upper ten",
    "Upper eleven",
    "Upper twelve",
    "Upper thirteen",
    "Upper fourteen",
    "Upper fifteen",
    "Upper sixteen",
    "Upper seventeen",
    "Upper eighteen",
    "Upper nineteen",
    "Upper twenty",
  ]

  const lowerMarquee = [
    "Lower one",
    "Lower two",
    "Lower three",
    "Lower four",
    "Lower five",
    "Lower six",
    "Lower seven",
    "Lower eight",
    "Lower nine",
    "Lower ten",
    "Lower eleven",
    "Lower twelve",
    "Lower thirteen",
    "Lower fourteen",
    "Lower fifteen",
    "Lower sixteen",
    "Lower seventeen",
    "Lower eighteen",
    "Lower nineteen",
    "Lower twenty",
  ]

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
