import "./App.css";
import { useEffect } from "react";
import HomePage from "./screens/HomePage";
import Sponsor from "./screens/Sponsor";
import Location from "./screens/Location";
import Navb from "./components/Navb";
import Speakers from "./screens/Speakers";
import Footer from "./screens/Footer";
import PropagateLoader from "react-spinners/PropagateLoader";
import Committee from "./screens/Committee";
function App() {
  return (
    <div className="App">
      <Committee />
      {/* <Navb />
      <HomePage />
      <Sponsor />
      <Speakers />
      <Location />
      <Footer /> */}
    </div>
  );
}

export default App;
