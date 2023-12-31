// import React from "react";
// import Navbar from "../NavigationBar/NavBar";
// import BgImg from "../../Assets/Images/sliderA_01.7f16b740.jpg";
// import "./RecipeComp.css";
// import { useLocation } from "react-router-dom";

// function ReceipeComponent() {
//   const { state } = useLocation();
//   // console.log(state)
//   return (
//     <div className="main-container">
//       <div className="bg-image">
//         <img
//           className="bg-img-recipe-page"
//           src={BgImg}
//           alt="background-image-recipe-page"
//         />
//         <div className="recipe">
//           <p>{state.receipeName}</p>
//           <p>{state.recipeDescription}</p>
//           <p>{state.rating}</p>
//           <img src={state.card_img} alt="" />
//         </div>
//         <div className="ingredients-container">
//           {state.Ingredients.map((ingredient, index) => (
//             <p key={index}>
//               {ingredient.name}: {ingredient.quantity}
//             </p>
//           ))}
//         </div>

//         <div className="directions-container">
//   {state.Directions.map((direction, index) => (
//     <p key={index}>{direction}</p>
//   )}
// </div>

//       </div>
//     </div>
//   );
// }

// export default ReceipeComponent;



import React from "react";
import Navbar from "../NavigationBar/NavBar";
import BgImg from "../../Assets/Images/sliderA_01.7f16b740.jpg";
import "./RecipeComp.css";
import { useLocation } from "react-router-dom";

function ReceipeComponent() {
  const { state } = useLocation();

  return (
    <div className="main-container">
      <div className="bg-image">
        <img
          className="bg-img-recipe-page"
          src={BgImg}
          alt="background-image-recipe-page"
        />
        <div className="recipe">
          <p>{state.receipeName}</p>
          <p>{state.recipeDescription}</p>
          <p>{state.rating}</p>
          <img src={state.card_img} alt="" />
        </div>
        <div className="ingredients-container">
          {state.Ingredients.map((ingredient, index) => (
            <p key={index}>
              {ingredient.name}: {ingredient.quantity}
            </p>
          ))}
        </div>
        <div className="directions-container">
          {state.Directions.map((direction, index) => (
            <p key={index}>{direction}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReceipeComponent;

