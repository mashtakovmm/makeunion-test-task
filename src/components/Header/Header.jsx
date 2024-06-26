import "./Header.css"
import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <header>
            <nav>
                <ul className='nav-list'>
                    <li>
                        <NavLink to={"/task1" }>Task 1</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/task2"}>Task 2</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/task3"}>Task 3</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/task4"}>Task 4</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;