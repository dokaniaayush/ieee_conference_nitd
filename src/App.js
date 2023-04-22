import "./App.css";
import HomePage from "./screens/HomePage";
import Sponsor from "./screens/Sponsor";
import Location from "./screens/Location";
import Navb from "./components/Navb";
import Speakers from "./screens/Speakers";
import Footer from "./screens/Footer";
function App() {

  return (
    <div className="App">
      <Navb />
      <HomePage/>
      <Speakers/>
      <Sponsor/>
      <Location/>
      <Footer/>
    </div>
  );
}

export default App;
