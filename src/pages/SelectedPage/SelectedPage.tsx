import React, {useEffect, useState} from 'react';
import Header from "../../copmonents/Header/Header";
import SelectedPost from "../../copmonents/SelectedPost/SeletedPost";
import Spinner from "../../copmonents/Spinner/Spinner";
import Footer from "../../copmonents/Footer/Footer";


const SelectedPage = () => {

    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch('https://studapi.teachmeskills.by/blog/posts/1/')
            .then(response => response.json())
            .then(json => setPost(json))
    }, [])

    return (
        <>
            <div className="background-light">
                <Header></Header>
                {post === null ? <Spinner></Spinner> : <SelectedPost post ={post}></SelectedPost>}
                <Footer></Footer>
            </div>
        </>
    );
};

export default SelectedPage;