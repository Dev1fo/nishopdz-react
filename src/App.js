import React from "react";
// import logo from './logo.svg';
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import TabsDefault from "./components/TabsDefault";
import FooterPage from "./components/FooterPage";
function App() {
  return (
    <div className="App">
      <h1>HElloooooooooooooooo les amisssssssss</h1>
      <p>Ceci est un site d'achat de circuit de voyage</p>
      <h3>OFFRE EXCEPTIONNELLE A SAISIR </h3>
      <TabsDefault />

      <FooterPage />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
