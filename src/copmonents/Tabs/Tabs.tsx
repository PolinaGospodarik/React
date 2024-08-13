import React from 'react';
import TabsElements from "../TabsElements/TabsElements";
import "./Tabs.css"

const Tabs = () => {
    return (
        <ul className= "tabs">
            <TabsElements buttonState ={false}>All</TabsElements>
            <TabsElements buttonState ={true}>My favorites</TabsElements>
            <TabsElements buttonState ={false}>Popular</TabsElements>
        </ul>
    );
};

export default Tabs;