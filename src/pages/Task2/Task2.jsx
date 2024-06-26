import { useEffect, useState, useRef } from 'react';
import { AiOutlineFileAdd } from "react-icons/ai";

import TodoItem from '../../components/TodoItem/TodoItem';

import "./Task2.css"

const Task2 = () => {
    const [data, setData] = useState([]);
    const todoInputRef = useRef(null);

    useEffect(() => {
        // Change title of the page on load
        document.title = "Задание 2: JavaScript"

        const storedTodos = localStorage.getItem('todos');
        if (storedTodos) {
            setData(JSON.parse(storedTodos));
        } else {
            setData([]);
        }

        const handleStorageChange = () => {
            const updatedStoredTodos = localStorage.getItem('todos');
            if (updatedStoredTodos) {
                setData(JSON.parse(updatedStoredTodos));
            } else {
                setData([]);
            }
        };

        window.addEventListener('storage', handleStorageChange)
        return () => window.removeEventListener('storage', handleStorageChange)
    }, [])

    const onAddNewTask = () => {
        if (todoInputRef.current.value.trim().length == 0) {
            window.alert("Поле не может быть пустым")
            todoInputRef.current.value = ''
            return
        }

        const newTask = {
            taskName: todoInputRef.current.value,
            taskStatus: false,
            id: Date.now()
        }

        setData(prevData => {
            const data = [...prevData, newTask];
            localStorage.setItem('todos', JSON.stringify(data));
            return data;
        })

        todoInputRef.current.value = ''
    }

    return (
        <>
            <header>
                <nav>
                    <ul className='nav-list'>
                        <li>
                            Task 1
                        </li>
                        <li>
                            Task 2
                        </li>
                        <li>
                            Task 3
                        </li>
                    </ul>
                </nav>
            </header>
            <main className='todo-list-container'>
                <div className='input-container'>
                    <input type="text" name="todoInput" id="todo-input" placeholder='Добавить задачу...' ref={todoInputRef}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                onAddNewTask()
                            }
                        }} />
                    <button onClick={onAddNewTask} className='input-button'><AiOutlineFileAdd id='add-icon'/><span className='hide-in-mobile'>Добавить</span></button>
                </div>
                <ul className='tasks-containter'>
                    {
                        data && data.map((task, index) => (
                            <TodoItem
                                key={index}
                                taskName={task.taskName}
                                taskStatus={task.taskStatus}
                                id={task.id}
                            />
                        ))
                    }
                </ul>
            </main>
        </>
    );
}

export default Task2;