import './App.css';
// import navbar from components folder
import { NavBar } from './components/NavBar';
// import banner.js from components folder
import { Banner } from './components/Banner';
// import skills section from components folder
import { Skills } from './components/Skills';
// MAKE SURE TO HAVE BOOTSTRAP DOWNLAODED
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;
