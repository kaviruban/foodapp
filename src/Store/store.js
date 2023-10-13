import {configureStore} from '@reduxjs/toolkit'
import  recipeBookSlice  from '../Features/Send/SendSlice'


export default configureStore({
    reducer : {
        recipe:recipeBookSlice
    },
})