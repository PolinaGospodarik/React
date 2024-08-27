import TabsElements from "../TabsElements/TabsElements";
import "./Tabs.css"
import {useContext} from "react";
import {themeContext} from "../../providers/ThemeContext";

const Tabs = () => {

    const [color, setColor] = useContext(themeContext);

    return (
        <ul className={`tabs tabs-${color}`}>
            <TabsElements buttonState ={false}>All</TabsElements>
            <TabsElements buttonState ={false}>My favorites</TabsElements>
            <TabsElements buttonState ={false}>Popular</TabsElements>
        </ul>
    );
};

export default Tabs;