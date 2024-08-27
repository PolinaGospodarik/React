import React, {useState} from 'react';
import "./Input.css";
import {TInput} from "../../types/types";

const Input = ({compound,inputType,isActive, title, errorText, isError}:TInput) => {

    const [inputText, setInputText]= useState("");

    return (
        <>
            <div className="wrap-input">
                <label className = "label-input" htmlFor={compound}>{title}</label>
                <input
                    onChange={(event)=> {setInputText(event.target.value)}}
                    className = "input"
                    type={inputType}
                    id={compound}
                    placeholder="Placeholder"
                    value={inputText}
                    disabled={isActive}
                    style={{outline : isError ? "2px solid red" : "none"}}
                />
                {isError ? <div className="error">{errorText}</div> : null}
            </div>
        </>
    );
};

export default Input;