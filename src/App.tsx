import React from 'react';
import './App.css';
import SelectedPage from "./pages/SelectedPage/SelectedPage";
import AllPosts from "./pages/AllPosts/AllPosts";
import ThemeContext from "./providers/ThemeContext";
import SearchPage from "./pages/SearchPage/SearchPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./copmonents/Header/Header";

function App() {
  return (
    <>
        <BrowserRouter>
            <ThemeContext>
                <Header></Header>
                <Routes>
                    <Route path="/" element={<AllPosts/>}></Route>
                    <Route path="/:id" element={<SelectedPage/>}></Route>
                    <Route path="/search" element={<SearchPage/>}></Route>
                </Routes>
            </ThemeContext>
        </BrowserRouter>
    </>
  );
}

export default App;
