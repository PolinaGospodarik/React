import React from 'react';
import './App.css';
import SelectedPage from "./pages/SelectedPage/SelectedPage";
import AllPosts from "./pages/AllPosts/AllPosts";
import ThemeContext from "./providers/ThemeContext";
import SearchPage from "./pages/SearchPage/SearchPage";

function App() {
  return (
    <>
        <ThemeContext>
            <AllPosts></AllPosts>
            <SelectedPage></SelectedPage>
            <SearchPage></SearchPage>
        </ThemeContext>
    </>
  );
}

export default App;
