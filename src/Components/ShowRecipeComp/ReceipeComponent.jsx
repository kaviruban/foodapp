import React from 'react'
import Navbar from '../NavigationBar/NavBar'
import BgImg from "../../Assets/Images/sliderA_01.7f16b740.jpg"
import './RecipeComp.css'

function ReceipeComponent() {
  return (
   <div>
    <img className = "bg-img-recipe-page"src={BgImg} alt="background-image-recipe-page" />
   </div>
  )
}

export default ReceipeComponent