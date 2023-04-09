import Navdash from './components/Navbar';
import Projects from './components/Projects';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      <Header />
      <Navdash />
      <div className="App-header">
        <h1>App Component</h1>
      </div>
      <div className="projects-container">
        <Projects />
      </div>
    </div>
  );
}

export default App;
