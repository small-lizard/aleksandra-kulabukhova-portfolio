import Contacts from "./sections/Contacts";
import Hero from "./sections/Hero"
import Projects from "./sections/Projects";
import Skills from "./sections/Skills"
import "./animations.css";

function App() {
  return (
    <main className="flex flex-col gap-[80px] md:gap-[100px] xl:gap-[170px]">
      <Hero />
      <Skills />
      <Projects />
      <Contacts />
    </main>
  )
}

export default App;