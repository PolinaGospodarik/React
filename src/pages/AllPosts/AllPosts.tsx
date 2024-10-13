import React, {useContext, useEffect} from 'react';
import "./AllPosts.css"
import Tabs from '../../copmonents/Tabs/Tabs';
import Title from "../../copmonents/Title/Title";
import PostList from "../../copmonents/PostList/PostList";
import Spinner from "../../copmonents/Spinner/Spinner";
import Footer from "../../copmonents/Footer/Footer";
import {themeContext} from "../../providers/ThemeContext";
import {useDispatch, useSelector} from "react-redux";
import FavoritesPost from "../../copmonents/FavoritesPost/FavoritesPost";
import {fetchPosts} from "../../slice/blog";

const AllPosts = () => {

    const [color, setColor] = useContext(themeContext);

    const dispatch = useDispatch()<any>;
    const {postsAll, favorites, activeTab, status, error}= useSelector((state: any) => state.blog)

    const checkActiveTab =()=>{
        if (activeTab === "all"){
            return( status === 'loading'  ? <Spinner /> : error ? <div>{error}</div> : <PostList posts={postsAll}/>)
        }else if (activeTab === "favorites"){
            return(favorites.length === 0 ? <div>Нет любимых</div> : <FavoritesPost posts={favorites}></FavoritesPost>)
        }
    }

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

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