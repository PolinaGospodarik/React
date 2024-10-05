import "./TabsElements.css";
import {TTabsElements} from "../../types/types";
import {useContext} from "react";
import {themeContext} from "../../providers/ThemeContext";

const TabsElements = ({children, buttonState, changeActive}:TTabsElements) => {

    const [color, setColor] = useContext(themeContext);

    return(
        <>
            <button onClick={changeActive} className={`tabs__item tabs__item-${color}`} disabled={buttonState} type="button">{children}</button>
        </>
    );
};

export default TabsElements;