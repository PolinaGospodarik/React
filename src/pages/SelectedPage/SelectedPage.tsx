import React, {useContext, useEffect, useState} from 'react';
import SelectedPost from "../../copmonents/SelectedPost/SeletedPost";
import Spinner from "../../copmonents/Spinner/Spinner";
import Footer from "../../copmonents/Footer/Footer";
import {themeContext} from "../../providers/ThemeContext";
import {useParams} from "react-router-dom";


const SelectedPage = () => {

    const [post, setPost] = useState(null);
    const [color, setColor] = useContext(themeContext);
    const {id} = useParams();

    useEffect(() => {
        fetch(`https://studapi.teachmeskills.by/blog/posts/${id}/`)
            .then(response => response.json())
            .then(json => setPost(json))
    }, [])

    return (
        <>
            <div className={`background-${color}`}>
                {post === null ? <Spinner></Spinner> : <SelectedPost post ={post}></SelectedPost>}
                <Footer></Footer>
            </div>
        </>
    );
};

export default SelectedPage;