import "./UserItem.css"
import { NavLink } from "react-router-dom"

const UserItem = ({ name, login, email, tele, id }) => {

    return (
        <>
            <NavLink to={`/task4/${id}`}>
                <li className='user-item'>
                    <img src="pfp-placeholder2.jpg" alt="user-pfp-placeholder" className="hide-in-mobile" />
                    <div className='column'>
                        <h2 className='user-name'>{name}</h2>
                        <span className='info'>{`@${login}`}</span><span>{email}</span><span>{tele}</span>
                    </div>
                </li>
            </NavLink>
        </>
    )
}

export default UserItem