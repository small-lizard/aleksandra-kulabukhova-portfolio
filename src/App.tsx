import Contacts from "./sections/Contacts";
import Hero from "./sections/Hero"
import Projects from "./sections/Projects";
import Skills from "./sections/Skills"

function App() {

  return (
    <div className="flex flex-col gap-[170px]">
      <Hero />
      <Skills />
      <Projects />
      <Contacts />
    </div>
  )
}

export default App;