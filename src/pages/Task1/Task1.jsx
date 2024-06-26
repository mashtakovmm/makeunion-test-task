import { useEffect } from 'react';
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";


import "./Task1.css"

const Task1 = () => {

    // Change title of the page on load
    useEffect(() => {
        document.title = "Задание 1: HTML и CSS"
    }, [])

    return (
        <>
            <main className='user-card-container decrease-in-mobile'>
                <div className='user-card'>
                    <section className='user-card-section user-card-header'>
                        <img src="pfp-placeholder.jpg" alt="user profile picture" className='user-pfp' />
                        <h2>Шубина Эмилия Александровна</h2>
                    </section>
                    <section className='user-card-section user-card-bio'>
                        <h3>Обо мне:</h3>
                        <p className='user-bio-text'>Я - волшебник с большим интересом к магии и мистике. Люблю погружаться в мир книг, исследуя различные жанры от фэнтези до
                            научной фантастики. Моя домашняя компания - это несколько кошек, которые всегда готовы поддержать меня в моих приключениях.</p>
                    </section>
                    <section className='user-card-section user-card-bio'>
                        <h3>Контактная информация:</h3>
                        <div className='user-card-icon-row'>
                            <AiOutlinePhone id="icon" />
                            <a href='tel:' id='contacts'>1-770-736-8031</a>
                        </div>
                        <div className='user-card-icon-row'>
                            <AiOutlineMail id="icon" />
                            <a href='mailto:emilias.shubinova@wizardlyuniverse.com' id='contacts'>emilias.shubinova@wizardlyuniverse.com</a>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}

export default Task1;