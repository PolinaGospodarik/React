import React, {useContext, useEffect, useState} from 'react';
import "./SearchPage.css"
import Title from "../../copmonents/Title/Title";
import Footer from "../../copmonents/Footer/Footer";
import {TPost} from "../../types/types";
import {themeContext} from "../../providers/ThemeContext";
import PostSearch from "../../copmonents/PostSearch/PostSearch";
import Spinner from "../../copmonents/Spinner/Spinner";
import {Link, useNavigate} from "react-router-dom";


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
            {posts.length === 0 ? <Spinner></Spinner> :
            <div className={`background-${color}`}>
                <div className="search-page__container">
                    <div className="search-page__title">
                        <Title>Search results</Title>
                    </div>
                    {posts.map(item => {
                        return (
                            <Link to={`/${item.id}`} key={item.id} >
                                <PostSearch
                                    id={item.id}
                                    image={item.image}
                                    date={item.date}
                                    title={item.title}
                                />
                            </Link>
                        );
                    })}
                </div>
                <Footer></Footer>
            </div>
            }
        </>
    );
};

export default SearchPage;