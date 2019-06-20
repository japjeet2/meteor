import React from "react";
import UpperHeader from "./components/Navbar/MainHeader";
import Banner from "./components/Banner/Banner";
import Main from "./components/MainPage/Main";

function App() {
  return (
    <div className="App">
      <UpperHeader />
      <Banner />
      <Main />
    </div>
  );
}

export default App;
