import React, { useEffect } from "react";
import "./App.css";
import Loader from "./pages/loader/Loader";
import { useState } from "react";
import Main from "./pages/main/Main";

function App() {
  const [loading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(()=>{
      setIsLoading(false);
    },4000)

  }, [])

  return (
    <>
      {loading ? (
        <Loader></Loader>
      ) : (
        <Main></Main>
      )}
    </>

  );
}

export default App;
