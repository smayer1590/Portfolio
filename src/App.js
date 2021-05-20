import "./App.css";
import street from "./images/street.jpg";
import Code from "./code";
import Projects from "./projects";
import Footer from "./footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <strong className="App-logo">Sanae Mayer</strong>

        <img className="App-image" src={street} alt="coolImage" />
      </header>

      <div>
        <hr className="App-line" />
        <Code />
      </div>

      <div>
        <hr className="App-line" />
        <Projects />
      </div>

      <div>
        <hr className="App-line" />
        <Footer />
      </div>
    </div>
  );
}

export default App;
