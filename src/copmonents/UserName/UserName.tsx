import './UserName.css';
import {TUserName} from "../../types/types";

const UserName = ({children}: TUserName) => {

    function getInitial(name: string): string {
        let array = name.split(" ");
        return array.reduce((res, item) => {
            return res + item[0]
        }, "")
    }

    return (
        <div className='container-username'>
            <div className='container-username__initial'>{getInitial(children)}</div>
            <div className='container-username__fullname'>{children}</div>
        </div>
    );
};

export default UserName;