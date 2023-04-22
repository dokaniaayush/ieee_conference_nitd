import { useRef } from "react";
import "./App.css";
import HomePage from "./screens/HomePage";
import Sponsor from "./screens/Sponsor";
import Location from "./screens/Location";
import Navb from "./components/Navb";
import Speakers from "./screens/Speakers";
function App() {
  const home = useRef(null);
  const speakers = useRef(null);
  const sponsors = useRef(null);
  const location = useRef(null);

  return (
    <div className="App">
      <Navb />
      <HomePage ref={home} />
      <Speakers ref={speakers} />
      <Sponsor ref={sponsors} />
      <Location ref={location} />
    </div>
  );
}

export default App;
