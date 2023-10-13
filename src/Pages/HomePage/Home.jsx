import React, { useState } from "react";
import Navbar from "../../Components/NavigationBar/NavBar";
import HomeComponent from "../../Components/HomePageCmp/HomeComponent";
import SliderComp from "../../Components/Slider/SliderComp";


function HomePage() {
  const [DataLoad, setDataLoad] = useState([]);
  return (
    <div>
      <Navbar />
      
      <HomeComponent />
    </div>
  );
}

export default HomePage;
