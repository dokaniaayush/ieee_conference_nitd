import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Committee from "./screens/Committee";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/committee" Component={Committee} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
