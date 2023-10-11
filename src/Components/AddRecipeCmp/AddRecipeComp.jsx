import React, { useState } from "react";
import "./AddReceipeCompStyl.css";
import Dropdown from "../DropDownBox/DropDownComp";

function SubmitRecipeComp() {
  const [ingredients, setIngredients] = useState([{ name: "", quantity: "" }]);
  const [descriptions, setDescriptions] = useState([""]);

  const addIngredientField = () => {
    setIngredients([...ingredients, { name: "", quantity: "" }]);
  };

  const addDescriptionField = () => {
    setDescriptions([...descriptions, ""]);
  };

  const handleIngredientChange = (index, event) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index][event.target.name] = event.target.value;
    setIngredients(updatedIngredients);
  };

  const handleDescriptionChange = (index, event) => {
    const updatedDescriptions = [...descriptions];
    updatedDescriptions[index] = event.target.value;
    setDescriptions(updatedDescriptions);
  };

  const removeIngredientField = (index) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients.splice(index, 1);
    setIngredients(updatedIngredients);
  };

  const removeDescriptionField = (index) => {
    const updatedDescriptions = [...descriptions];
    updatedDescriptions.splice(index, 1);
    setDescriptions(updatedDescriptions);
  };

  return (
    <div>
      <div className="header-container">
        <h2>Submit Recipe</h2>
        <div className="path-container">
          <p>
            You are here : <span>Home -- Submit Recipe</span>
          </p>
        </div>
      </div>

        <div className="input-container">
          <div className="recipe-title-container">
            <label htmlFor="">Recipe Title</label>
            <input
              type="text"
              className="store-recipe-title"
              placeholder="Enter the title"
            />
          </div>

          <div className="recipe-description-container">
            <label htmlFor="">Recipe Description</label>
            <textarea
              className="recipe-description-box"
              id="recipe-description-box"
              type="text"
              name=""
              cols="5"
              maxLength="500"
              placeholder="Type the description here"
            ></textarea>
          </div>

          <div className="choose-category-container">
            <label htmlFor="">Choose Category</label>
            <Dropdown />
          </div>

          <div className="ingredients-box">
            <p>Ingredients</p>
            {ingredients.map((ingredient, index) => (
              <div className="ingredients-container" key={index}>
                <input
                  type="text"
                  placeholder="Name of the ingredient"
                  name="name"
                  value={ingredient.name}
                  onChange={(event) => handleIngredientChange(index, event)}
                />
                <input
                  type="text"
                  placeholder="Quantity(eg.1/2)"
                  name="quantity"
                  value={ingredient.quantity}
                  onChange={(event) => handleIngredientChange(index, event)}
                />
                <button
                  className="remove-btn"
                  onClick={() => removeIngredientField(index)}
                >
                  X
                </button>
              </div>
            ))}
            <button className="button" onClick={addIngredientField}>
              ADD NEW INGREDIENT
            </button>
          </div>

          <div className="description-box">
            <p>Description</p>
            {descriptions.map((description, index) => (
              <div className="description-container" key={index}>
                <input
                  type="text"
                  placeholder="Type the description here"
                  value={description}
                  onChange={(event) => handleDescriptionChange(index, event)}
                />
                <button
                  className="remove-btn"
                  onClick={() => removeDescriptionField(index)}
                >
                  X
                </button>
              </div>
            ))}
            <button className="button" onClick={addDescriptionField}>
              ADD NEW DESCRIPTION
            </button>
          </div>

          <div className="preparation-time-container">
            <p>Preparation Time</p>
            <input type="text" placeholder="(eg.30mins)" />
          </div>

          <div className="servings-container">
            <p>Servings</p>
            <input type="text" placeholder="(eg.4 servings)" />
          </div>

          <div className="calories-container">
            <p>Calories</p>
            <input type="text" placeholder="(eg.634 kcal)" />
          </div>

          <button className="button">Submit</button>
        </div>
      </div>
  );
}

export default SubmitRecipeComp;