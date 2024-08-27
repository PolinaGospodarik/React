import './Title.css';
import {TTitle} from "../../types/types";
import {useContext} from "react";
import {themeContext} from "../../providers/ThemeContext";

const Title = ({children}: TTitle)=> {

    const [color, setColor] = useContext(themeContext);

    return (
        <>
            <h1 className ={`title title-${color}`}>{children}</h1>
        </>
    );
}

export default Title;
