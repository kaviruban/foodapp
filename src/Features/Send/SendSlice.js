import { createSlice } from "@reduxjs/toolkit";
import { FoodData } from "../../Data/HomePageData";


export const recipeBookSlice = createSlice({
    name : 'recipe-book',
    initialState : {
        value : FoodData
    },
    reducers :{
        addRecipe : (state , action) => {
            state.value.push(action.payload)
            // console.log("............geajegbeukqbk")
        }

    }
})



export const { addRecipe } = recipeBookSlice.actions

export default recipeBookSlice.reducer

