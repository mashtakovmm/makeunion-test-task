import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineShopping, AiOutlineContacts, AiOutlineHome, AiOutlineInfoCircle } from "react-icons/ai";

import "./UserCard.css"
import pfpPlaceholder3 from '../../assets/pfp-placeholder3.jpg';


const UserCard = () => {
    const { id } = useParams();
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${id}`;

        fetch(url)
            .then(response => response.json())
            .then(user => {
                setData(user);
                setIsLoading(false);
                // Change title of the page on load
                document.title = `${user.name}`
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [id]);

    return (
        <>
            <main className='user-card-main '>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <div className='user-card-large'>
                        <img src={pfpPlaceholder3} alt="user profile picture" className='user-pfp show-in-mobile' />
                        <section className='user-card-header'>
                            <img src={pfpPlaceholder3} alt="user profile picture" className='user-pfp hide-in-mobile' />
                            <div>
                                <h2>
                                    {data.name}
                                </h2>
                                <span>
                                    {`@${data.username}`}
                                </span>
                            </div>
                        </section>
                        <section>
                            <div className='section-title'>
                                <AiOutlineInfoCircle />
                                <h2>About me:</h2>
                            </div>
                            <p className='bio-text'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco
                                laboris nisi ut aliquip
                                ex ea commodo consequat.
                            </p>
                        </section>
                        <section>
                            <div className='section-title'>
                                <AiOutlineShopping />
                                <h2>Working at:</h2>
                            </div>
                            <span>{data.company.name}</span>
                        </section>
                        <section className='user-contacts'>
                            <div className='section-title'>
                                <AiOutlineContacts />
                                <h2>Contact me:</h2>
                            </div>
                            <a href="tel:">{data.phone}</a>
                            <a href={`mailto:${data.email}`}>{data.email}</a>
                            <a href={`https://${data.website}`} target='_blank'>{data.website}</a>
                        </section>
                        <section>
                            <div className='section-title'>
                                <AiOutlineHome/>
                                <h2>You can find me at:</h2>
                            </div>
                            <span>{`${data.address.city}, ${data.address.street}, ${data.address.suite}, ${data.address.zipcode}`}</span>
                        </section>
                    </div>
                )}
            </main>
        </>
    );
}

export default UserCard;