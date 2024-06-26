import { useEffect, useState } from 'react';

import UserItem from '../../components/UserItem/UserItem';


import "./Task4.css"

const Task4 = () => {

    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Change title of the page on load
        document.title = "Задание 4: Интеграция с бекендом"

        const url = 'https://jsonplaceholder.typicode.com/users';

        fetch(url)
            .then(response => response.json())
            .then(users => {
                setData(users);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <>
            <main className='users-list-container'>
                {isLoading ? (
                    <p>Loading...</p> 
                ) : (
                    <ul className='users-list'>
                        {data?.map(user => (
                            <UserItem
                                key={user.id}
                                name={user.name}
                                login={user.username}
                                email={user.email}
                                tele={user.phone}
                            />
                        ))}
                    </ul>
                )}
            </main>
        </>
    );
}

export default Task4;