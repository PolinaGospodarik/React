import TabsElements from "../TabsElements/TabsElements";
import "./Tabs.css"
import {useContext} from "react";
import {themeContext} from "../../providers/ThemeContext";
import {useDispatch} from "react-redux";
import {changeActiveTab} from "../../slice/blog";

const Tabs = () => {

    const [color, setColor] = useContext(themeContext);

    const dispatch = useDispatch();

    return (
        <ul className={`tabs tabs-${color}`}>
            <TabsElements changeActive={()=>dispatch(changeActiveTab("all"))} buttonState ={false}>All</TabsElements>
            <TabsElements changeActive={()=>dispatch(changeActiveTab("favorites"))} buttonState ={false}>My favorites</TabsElements>
            <TabsElements changeActive={()=>dispatch(changeActiveTab(""))} buttonState ={false}>Popular</TabsElements>
        </ul>
    );
};

export default Tabs;