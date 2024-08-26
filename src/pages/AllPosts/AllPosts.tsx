import React, {useEffect, useState} from 'react';
import Header from "../../copmonents/Header/Header";
import Tabs from '../../copmonents/Tabs/Tabs';
import Title from "../../copmonents/Title/Title";
import PostList from "../../copmonents/PostList/PostList";

import "./AllPosts.css"
import Spinner from "../../copmonents/Spinner/Spinner";
import Footer from "../../copmonents/Footer/Footer";

const AllPosts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://studapi.teachmeskills.by/blog/posts/?limit=11')
            .then(response => response.json())
            .then(json => setPosts(json.results))
    }, [])

    return (
        <>
        <div className="all-posts background-light">
            <Header></Header>
            <div className="all-posts-container">
                <div className="all-posts-wrap__title"><Title>Blog</Title></div>
                <div className="all-posts-wrap__tabs"><Tabs></Tabs></div>
                <div className="all-posts-wrap__post-list">{posts.length === 0 ? <Spinner></Spinner> : <PostList posts={posts}></PostList>}</div>
            </div>
            <Footer></Footer>
        </div>
        </>
    );
};

export default AllPosts;