import React from "react";
import UpperHeader from "./components/Navbar/MainHeader";
import Banner from "./components/Banner/Banner";
import Main from "./components/MainPage/Main";
import FooterMain from "./components/Footer/FooterMain";


function App() {
  return (
    <div className="App">
      <UpperHeader />
      <Banner />
      <Main />
      <FooterMain />
    </div>
  );
}

export default App;
