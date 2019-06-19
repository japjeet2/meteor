import React from "react";
import UpperHeader from "./components/Navbar/MainHeader";
import UpperBanner from "./components/Banner/UpperBanner";
import Main from "./components/MainPage/Main";

function App() {
  return (
    <div className="App">
      <UpperHeader />
      <UpperBanner />
      <Main />
    </div>
  );
}

export default App;
