import React, { useEffect } from "react";
import "./App.css";
import Loader from "./pages/loader/Loader";
import { useState } from "react";
import Main from "./pages/main/Main";

function App() {
  const [loading, setIsLoading] = useState(true)

  const handleLoading = () => {
    setIsLoading(false);
    }

 useEffect(()=>{
    window.addEventListener("load",handleLoading);
    return () => window.removeEventListener("load",handleLoading);
},[])

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
