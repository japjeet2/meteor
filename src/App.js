import React from "react";
import "./scss/reset.css";
import UpperHeader from "./components/Navbar/MainHeader";
import UpperBanner from "./components/Banner/UpperBanner";
import "./scss/style.css";

function App() {
  return (
    <div className="App">
      <UpperHeader />
      <UpperBanner />
    </div>
  );
}

export default App;
