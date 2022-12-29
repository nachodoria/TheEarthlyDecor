import React from "react";
import "./App.css";
import Loader from "./pages/loader/Loader";
import { useState } from "react";
import Main from "./pages/main/Main";

function App() {
  const [loading, setIsLoading] = useState(true)

  

  return (
    <Main></Main>
  );
}

export default App;
