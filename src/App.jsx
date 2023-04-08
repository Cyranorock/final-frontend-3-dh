import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import React, { useState, useContext } from 'react'
import { ContextGlobal } from "./Components/utils/global.context";



function App() {
  const {state} = useContext(ContextGlobal);

  return (
      <div className={state.theme ? 'dark':'light'}>
          <Navbar/>
          <Outlet/>
          <Footer/>
      </div>
  );
}

export default App;
