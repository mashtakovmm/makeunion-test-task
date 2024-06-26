import "./UserItem.css"

const UserItem = ({ name, login, email, tele }) => {

    return (
        <>
            <li className='user-item'>
                <img src="pfp-placeholder2.jpg" alt="user-pfp-placeholder" />
                <div className='column'>
                    <h2 className='user-name'>{name}</h2>
                    <span className='info'>{`@${login}`}</span><span>{email}</span><span>{tele}</span>
                </div>
            </li>
        </>
    )
}

export default UserItem