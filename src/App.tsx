import { useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

function App() {
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const homeRef = useRef<HTMLDivElement | null>(null);
  return (
    <div className="flex flex-col w-full justify-start">
      <Navbar homeRef={homeRef} projectsRef={projectsRef} />
      <Hero ref={homeRef} />
      <Projects ref={projectsRef} />
    </div>
  );
}

export default App;
