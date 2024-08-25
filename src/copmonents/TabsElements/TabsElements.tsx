import React from 'react';
import "./TabsElements.css";

type TTabsElements = {
    children: string;
    buttonState: boolean;
}

const TabsElements = ({children, buttonState}:TTabsElements) => {
    return(
        <>
            <button className="tabs__item tabs__item-light" disabled={buttonState} type="button">{children}</button>
        </>
    );
};

export default TabsElements;