import React from 'react';
import PostCardBig from '../PostCardBig/PostCardBig';
import PostCardMedium from '../PostCardMedium/PostCardMedium';
import PostCardSmall from '../PostCardSmall/PostCardSmall';
import { cards } from '../../data';
import './PostList.css'; // Импортируем стили

const PostList = () => {
    return (
        <div className="grid-container grid-container-dark">
            {cards.map((card, index) => {
                const cardClass = `post-${card.id}`;
                if (index === 0) {
                    return (
                        <div key={card.id} className={`post-big ${cardClass}`}>
                            <PostCardBig
                                id={card.id}
                                image={card.image}
                                date={card.date}
                                title={card.title}
                                description={card.description}
                            />
                        </div>
                    );
                } else if (index > 0 && index <= 4) {
                    return (
                        <div key={card.id} className={`post-medium ${cardClass}`}>
                            <PostCardMedium
                                id={card.id}
                                image={card.image}
                                date={card.date}
                                title={card.title}
                            />
                        </div>
                    );
                } else if (index > 4 && index <= 10) {
                    return (
                        <div key={card.id} className={`post-small ${cardClass}`}>
                            <PostCardSmall
                                id={card.id}
                                image={card.image}
                                date={card.date}
                                title={card.title}
                            />
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
};

export default PostList;
