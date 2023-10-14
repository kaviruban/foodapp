import React, { useState } from "react";
import { FoodData } from "../../Data/HomePageData";
import "./HomeComp.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addRecipe } from "../../Features/Send/SendSlice";


function ShowIngredient(props) {
  props.map((data, index) => {
    return data;
  });
}

function HomeComponent() {
  const [searchQuery, setSearchQuery] = useState("");

  const fd = useSelector((state) => state?.recipe?.value);
  // console.log(fd);
    

  const navigate = useNavigate();
  const filteredRecipes = fd?.filter((recipe) =>
    recipe.receipeName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for recipes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {filteredRecipes?.map((data, index) => (
        <div className="parent-container" key={index}>
          <div className="individual-food-items">
            <p>{data.receipeName}</p>
            <img src={data.card_img} alt={data.receipeName} />
            <p>{data.rating}</p>
            <p>{data.duration}</p>
          </div>
          <div className="view-btn" onClick={() => navigate("/show-recipe", {state:data})}>
            view
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeComponent;
