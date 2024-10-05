import React, {useContext, useEffect, useState} from 'react';
import "./AllPosts.css"
import Tabs from '../../copmonents/Tabs/Tabs';
import Title from "../../copmonents/Title/Title";
import PostList from "../../copmonents/PostList/PostList";
import Spinner from "../../copmonents/Spinner/Spinner";
import Footer from "../../copmonents/Footer/Footer";
import {themeContext} from "../../providers/ThemeContext";
import {useSelector} from "react-redux";
import FavoritesPost from "../../copmonents/FavoritesPost/FavoritesPost";

const AllPosts = () => {

    const [posts, setPosts] = useState([]);
    const [color, setColor] = useContext(themeContext);

    const data = useSelector((state: any) => state.blog)

    const checkActiveTab =()=>{
        if (data.activeTab === "all"){
            return(posts.length === 0 ? <Spinner></Spinner> : <PostList posts={posts}></PostList>)
        }else if (data.activeTab === "favorites"){
            return(data.favorites.length === 0 ? <div>Нет любимых</div> : <FavoritesPost posts={data.favorites}></FavoritesPost>)
        }
    }

    useEffect(() => {
        fetch('https://studapi.teachmeskills.by/blog/posts/?limit=11')
            .then(response => response.json())
            .then(json => setPosts(json.results))
    }, [])

    return (
        <>
        <div className={`all-posts-wrapper background-${color}`}>
            <div className="all-posts-container">
                <div className="all-posts-wrap__title"><Title>Blog</Title></div>
                <div className="all-posts-wrap__tabs"><Tabs></Tabs></div>
                <div className="all-posts-wrap__post-list">
                    {checkActiveTab()}
                </div>
            </div>
            <Footer></Footer>
        </div>
        </>
    );
};

export default AllPosts;