import React from 'react';
import Header from "../../copmonents/Header/Header";
import Tabs from '../../copmonents/Tabs/Tabs';
import Title from "../../copmonents/Title/Title";
import PostList from "../../copmonents/PostList/PostList";

import "./AllPosts.css"

const AllPosts = () => {
    return (
        <>
        <div className="all-posts background-light">
            <Header></Header>
            <div className="all-posts-container">
                <div className="all-posts-wrap__title"><Title>Blog</Title></div>
                <div className="all-posts-wrap__tabs"><Tabs></Tabs></div>
                <div className="all-posts-wrap__post-list"> <PostList></PostList></div>
            </div>
        </div>
        </>
    );
};

export default AllPosts;