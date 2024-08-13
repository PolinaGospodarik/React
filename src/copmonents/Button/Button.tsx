import './Button.css';

type TButton = {
    content: string;
    typeButton: string;
    buttonState: boolean;
}

const Button = ({content, typeButton, buttonState}: TButton) => {
    return (
        <>
           <button className = {typeButton} disabled={buttonState} type='button'>{content}</button>
        </>
    );
}

export default Button;