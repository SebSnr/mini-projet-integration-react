import './styles/index.scss'
// librairies
import React from "react";
// components
import Banner from "./components/Banner";
import Presentation from './components/Presentation';
import Overview from './components/Overview';
import Ingredients from './components/Ingredients';

function App() {
  return (
    <div className="app">
        <Banner />
        <Presentation />
        <Overview />
        <Ingredients />
    
    </div>
  );
}

export default App;
