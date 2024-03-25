import React from "react";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8787";
axios.defaults.withCredentials = true;
function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
