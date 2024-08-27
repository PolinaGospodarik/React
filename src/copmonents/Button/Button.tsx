import './Button.css';
import {TButton} from "../../types/types";

const Button = ({content, typeButton, buttonState}: TButton) => {
    return (
        <>
           <button className = {typeButton} disabled={buttonState} type='button'>{content}</button>
        </>
    );
}

export default Button;