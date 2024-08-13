import React from 'react';
import "./TabsElements.css";

type TTabsElements = {
    children: string;
    buttonState: boolean;
}

const TabsElements = ({children, buttonState}:TTabsElements) => {
    return(
        <>
            <button className="tabs__item" disabled={buttonState} type="button">{children}</button>
        </>
    );
};

export default TabsElements;