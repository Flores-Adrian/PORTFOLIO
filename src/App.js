import './App.css';
// import navbar from components folder
import { NavBar } from './components/NavBar';
// import banner.js from components folder
import { Banner } from './components/Banner';
// import skills section from components folder
import { Skills } from './components/Skills';
// import project section from components
import { Projects } from './components/Projects';
// MAKE SURE TO HAVE BOOTSTRAP DOWNLAODED
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
