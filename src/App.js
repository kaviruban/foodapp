import { RouterProvider } from "react-router-dom";
import routes from "./Router/Routes";
import "./index.css";
// import AddRecipeToMenu from "./Pages/AddFoodReceipes/AddReceipe";

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
