import React, {useState} from 'react';
import "./Textarea.css";
import {TTextarea} from "../../types/types";

const Textarea = ({compound, placeholderText}: TTextarea) => {

    const [textareaText, setTextareaText] = useState("");

    return (
        <>
            <div className="wrap-textarea">
                <label htmlFor={compound} className="label-textarea">Text</label>
                <textarea
                    onChange={(event) => setTextareaText(event.target.value)}
                    value={textareaText}
                    className="textarea"
                    id={compound}
                    placeholder={placeholderText}>
                </textarea>
            </div>
        </>
    );
};

export default Textarea;