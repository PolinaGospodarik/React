import React from 'react';
import Header from "../../copmonents/Header/Header";
import SeletedPost from "../../copmonents/SeletedPost/SeletedPost";
import { cards } from '../../data';

const SelectedPage = () => {
    return (
        <>
            <div className="background-light">
                <Header></Header>
                <SeletedPost
                    id={cards[0].id}
                    image={cards[0].image}
                    title={cards[0].title}
                    description={cards[0].description}
                    lesson_num={cards[0].lesson_num}
                ></SeletedPost>
            </div>
        </>
    );
};

export default SelectedPage;