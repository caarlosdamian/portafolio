import "./App.scss";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";

function App() {
  return (
    <div className="app">
      <div className="sections">
        <div className="intro">
          <Intro />
        </div>
        <div className="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
