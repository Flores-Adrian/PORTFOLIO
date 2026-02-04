import './App.css';
// import .js files from components folder
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Accomplishments } from './components/Accomplishments';
import { AboutMe } from './components/AboutMe';

// MAKE SURE TO HAVE BOOTSTRAP DOWNLAODED
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <AboutMe />
      <Skills />
      <Projects />
      <Accomplishments />
      <Contact />
    </div>
  );
}

export default App;
