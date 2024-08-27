import React, {useContext, useEffect, useState} from 'react';
import "./SearchPage.css"
import Header from "../../copmonents/Header/Header";
import Title from "../../copmonents/Title/Title";
import Footer from "../../copmonents/Footer/Footer";
import {TPost} from "../../types/types";
import {themeContext} from "../../providers/ThemeContext";
import PostSearch from "../../copmonents/PostSearch/PostSearch";

const SearchPage = () => {

    const [posts, setPosts] = useState<TPost[]>([]);
    const [color, setColor] = useContext(themeContext);

    useEffect(() => {
        fetch('https://studapi.teachmeskills.by/blog/posts/?limit=11')
            .then(response => response.json())
            .then(json => setPosts(json.results))
    }, [])

    return (
        <>
            <div className={`background-${color}`}>
                <Header></Header>
                <div className="search-page__container">
                    <div className="search-page__title">
                        <Title>Search results</Title>
                    </div>
                    {posts.map(item => {
                        return (
                            <PostSearch
                                id={item.id}
                                image={item.image}
                                date={item.date}
                                title={item.title}
                            />
                        );
                    })}
                </div>
                <Footer></Footer>
            </div>
        </>
    );
};

export default SearchPage;