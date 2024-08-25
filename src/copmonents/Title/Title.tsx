import './Title.css';

type TTitle = {
    children: string;
}

const Title = ({children}: TTitle)=> {
    return (
        <>
            <h1 className = "title title-light">{children}</h1>
        </>
    );
}

export default Title;
