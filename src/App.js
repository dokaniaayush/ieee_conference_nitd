import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import HomePage from "./screens/HomePage";
import Committee from "./screens/Committee";
import Fees from "./screens/Fees";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/committee" Component={Committee} />
          <Route path="/fees" Component={Fees} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
