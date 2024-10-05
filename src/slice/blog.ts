import { createSlice } from  "@reduxjs/toolkit";
import {TPost} from "../types/types";

const blogSlice = createSlice({
    name: 'blog',
    initialState:{
        favorites: [],
        activeTab: "all"
    },
    reducers:{
        addToFavorites: (state:any, {payload}: {payload:any} ) => {
            const postExists = state.favorites.some((post:TPost) => post.id === payload.id);
            if (!postExists) {
                state.favorites.push(payload);
            }
        },
        removeFromFavorites: (state, {payload}: {payload:any} ) => {
            state.favorites = state.favorites.filter((post:TPost) => post.id !== payload);
        },
        changeActiveTab: (state:any, {payload}: {payload:any} ) => {
            state.activeTab = payload
        }
    }

})

const {actions, reducer} = blogSlice;

export const { addToFavorites, removeFromFavorites, changeActiveTab } = actions;
export default reducer;