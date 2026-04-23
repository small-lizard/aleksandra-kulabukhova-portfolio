import Contacts from "./pages/Contacts";
import Hero from "./pages/Hero"
import Projects from "./pages/Projects";
import Skills from "./pages/Skills"

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