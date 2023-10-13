import React, { useState } from "react";
import { FoodData } from "../../Data/HomePageData";
import "./HomeComp.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addRecipe } from "../../Features/Send/SendSlice";
import { useEffect } from "react";

function ShowIngredient(props) {
  props.map((data, index) => {
    return data;
  });
}

function HomeComponent() {
  const [searchQuery, setSearchQuery] = useState("");

  const fd = useSelector((state) => state?.recipe?.value);
  console.log(fd);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      addRecipe({
        id: 0,
        receipeName: "Mexican grilled Corn Recipe",
        recipeDescription:
          "Maecenas in massa eget urna ullamcorper pharetra. Curabitur laoreet scelerisque bibendum. Aenean ullamcorper neque ac tristique semper. Phasellus enim mauris, mollis vulputate blandit in, ornare sed leo.",
        card_img: require("../../Assets/Images/recipeThumb-01.287a77c6.jpg"),
        rating: "3",
        duration: "1 Hr",
        Ingredients: [
          {
            name: "pounds cubed beef stew meat",
            quantity: "1",
          },
          {
            name: "pounds cubed beef stew meat",
            quantity: "1",
          },
          {
            name: "pounds cubed beef stew meat",
            quantity: "1",
          },
        ],
        Directions: [
          "In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done.",

          "In the fat remaining in the pot, cook the onions until softened, about 5 minutes",
          ,
          "In the fat remaining in the pot, cook the onions until softened, about 5 minutes",
          ,
          "In the fat remaining in the pot, cook the onions until softened, about 5 minutes",
          ,
        ],
      })
    );
  }, []);

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
          <div className="view-btn" onClick={() => navigate("/show-recipe")}>
            view
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeComponent;
