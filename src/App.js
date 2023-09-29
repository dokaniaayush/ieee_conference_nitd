import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import HomePage from "./screens/HomePage";
import Committee from "./screens/Committee";
import Fees from "./screens/Fees";
import Tracks from "./screens/Tracks";
import Registration from "./screens/Registration";
import SubmitPaper from "./screens/SubmitPaper";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/committee" Component={Committee} />
          <Route path="/fees" Component={Fees} />
          <Route path="/tracks" Component={Tracks} />
          <Route path="/registration" Component={Registration}/>
          <Route path="/submit" Component={SubmitPaper}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
