import './styles/index.scss'
// librairies
import React from "react";
// components
import Banner from "./components/Banner";
import Presentation from './components/Presentation';
import Overview from './components/Overview';

function App() {
  return (
    <div className="app">
        <Banner />
        <Presentation />
        <Overview />
    
    </div>
  );
}

export default App;
