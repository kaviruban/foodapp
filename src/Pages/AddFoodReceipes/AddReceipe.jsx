import React from "react";
import Navbar from "../../Components/NavigationBar/NavBar";
import "./AddReceipe.css"
import SubmitRecipeComp from "../../Components/AddRecipeCmp/AddRecipeComp";

function AddRecipeToMenu() {
  return (
    <div>
      <Navbar />
      <SubmitRecipeComp />
    </div>
  );
}

export default AddRecipeToMenu;
