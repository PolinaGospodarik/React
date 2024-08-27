import React, {useContext, useEffect, useState} from 'react';
import Header from "../../copmonents/Header/Header";
import SelectedPost from "../../copmonents/SelectedPost/SeletedPost";
import Spinner from "../../copmonents/Spinner/Spinner";
import Footer from "../../copmonents/Footer/Footer";
import {themeContext} from "../../providers/ThemeContext";


const SelectedPage = () => {

    const [post, setPost] = useState(null);
    const [color, setColor] = useContext(themeContext);

    useEffect(() => {
        fetch('https://studapi.teachmeskills.by/blog/posts/1/')
            .then(response => response.json())
            .then(json => setPost(json))
    }, [])

    return (
        <>
            <div className={`background-${color}`}>
                <Header></Header>
                {post === null ? <Spinner></Spinner> : <SelectedPost post ={post}></SelectedPost>}
                <Footer></Footer>
            </div>
        </>
    );
};

export default SelectedPage;