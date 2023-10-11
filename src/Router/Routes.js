import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage/Home";
import AddRecipeToMenu from "../Pages/AddFoodReceipes/AddReceipe";

import Receipe from "../Pages/ReceipePage/Receipe";
import Login from "../Pages/Auth/LoginPage/UserLogin";
import Register from "../Pages/Auth/RegisterPage/UserRegistration";



const routes = createBrowserRouter([
    {
        path : "/",
        element : <Login />

    },
    {
        path : "/register",
        element : <Register />

    },
    {
        path : "/home",
        element : <HomePage />
    },
    {
        path :  "/submit-recipe",
        element : <AddRecipeToMenu/>
    },
    {
        path :  "/show-recipe",
        element : <Receipe/>
    }
])

export default routes;