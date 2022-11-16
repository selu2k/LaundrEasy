import React, { useState, useEffect } from "react";

import "./App.css";

import Layout from "./components/Layout/Layout";
import LandingPage from "./LandingPage/LandingPage";

function App() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [user, setUser] = useState();
  const [sign, setSign] = useState(false);
  if (sign) {
    return <Layout />;
  } else {
    return <LandingPage setSign={setSign}/>;
  }
}

export default App;
