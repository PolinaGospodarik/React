import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {TPost} from "../types/types";

export const fetchPosts =createAsyncThunk(
    "blog/fetchPosts",
    async function(_, {rejectWithValue}){
        try{
            const response = await fetch ("https://studapi.teachmeskills.by/blog/posts/?limit=11")
            if(!response.ok){
                throw new Error("Технические шоколадки");
            }
            const data = await response.json();
            return data.results;
        }
        catch(error){
            return rejectWithValue((error as Error).message);
        }
    }
)

export const fetchPostById  =createAsyncThunk(
    "blog/fetchPostById",
    async function(id: string, {rejectWithValue}){
        try{
            const response = await fetch (`https://studapi.teachmeskills.by/blog/posts/${id}/`)
            if(!response.ok){
                throw new Error("Пост не найден");
            }
            return await response.json();
        }
        catch(error){
            return rejectWithValue((error as Error).message);
        }
    }
)


const blogSlice = createSlice({
    name: 'blog',
    initialState:{
        postsAll: [],
        selectedPost: null,
        favorites: [],
        activeTab: "all",
        status: null,
        error: null
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
    },
    extraReducers: (builder) =>{
        builder
            .addCase(fetchPosts.pending, (state: any) => {
                state.status = "loading";
                state.error = null;
                console.log(state.status);
            })
            .addCase(fetchPosts.fulfilled, (state: any, {payload}: {payload: any})=>{
                state.status = "resolved";
                state.error = null;
                state.postsAll = payload;
                console.log(state.postsAll);
                // console.log(payload.results);
            })
            .addCase(fetchPosts.rejected, (state: any, {payload}: {payload: any}) => {
                state.status = "rejected";
                state.error = payload;
                console.log(state.error);
            })
            .addCase(fetchPostById.pending, (state: any) => {
                state.status = "loading";
                state.error = null;
                console.log(state.status);
            })
            .addCase(fetchPostById.fulfilled, (state: any, {payload}: {payload: any})=>{
                state.status = "resolved";
                state.error = null;
                state.selectedPost = payload;
                console.log(state.selectedPost);
                // console.log(payload.results);
            })
            .addCase(fetchPostById.rejected, (state: any, {payload}: {payload: any}) => {
                state.status = "rejected";
                state.error = payload;
                console.log(state.error);
            })

        }

    })

const {actions, reducer} = blogSlice;

export const { addToFavorites, removeFromFavorites, changeActiveTab } = actions;
export default reducer;