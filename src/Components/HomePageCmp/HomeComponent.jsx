import React from "react";
import { FoodData } from "../../Data/HomePageData";
import "./HomeComp.css";
import { useNavigate } from "react-router-dom";

function ShowIngredient(props) {
  props.map((data, index) => {
    return data;
  });
}

function HomeComponent() {
  const navigate = useNavigate();
  return FoodData.map((data, index) => {
    return (
      <div className="parent-container" key = {index}>
        <div className="individual-food-items">
          <p>{data.receipeName}</p>
          <img src={data.card_img} />
          <p>{data.rating}</p>
          <p>{data.duration}</p>
        </div>
        <div className="view-btn" onClick={() => navigate("/show-recipe")}>
          view
        </div>
      </div>
    );
  });
}

export default HomeComponent;
