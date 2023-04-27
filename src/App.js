import "./App.css";
import { useEffect } from "react";
import HomePage from "./screens/HomePage";
import Sponsor from "./screens/Sponsor";
import Location from "./screens/Location";
import Navb from "./components/Navb";
import Speakers from "./screens/Speakers";
import Footer from "./screens/Footer";
import PropagateLoader from "react-spinners/PropagateLoader";
function App() {
  const load = () => {
    return (
      <div
        style={{
          flex: 1,
          display: "flex",

          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <PropagateLoader
          color="#1a1a1f"
          loading
          size={28}
          speedMultiplier={1}
          cssOverride={{
            marginTop: 250,
          }}
        />
      </div>
    );
  };
  // useEffect(() => {
  setTimeout(load, 5000000);
  // });
  return (
    <div className="App">
      <Navb />
      <HomePage />
      <Sponsor />
      <Speakers />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
