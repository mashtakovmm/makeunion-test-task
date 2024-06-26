import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

import "./TodoItem.css"

const TodoItem = ({ taskName, taskStatus, id }) => {

    const currentStyle = taskStatus ? 'completed-task' : 'pending-task'

    const onCheckTask = () => {
        taskStatus = !taskStatus
        let data = JSON.parse(localStorage.getItem('todos'))
        data = data.map(task =>
            task.id === id ? { ...task, taskStatus: taskStatus } : task
        );
        console.log(data);
        localStorage.setItem('todos', JSON.stringify(data));
        window.dispatchEvent(new Event('storage'));
    };

    const onDelete = () => {
        let data = JSON.parse(localStorage.getItem('todos'))
        data = data.filter((task) => { return task.id != id })
        localStorage.setItem('todos', JSON.stringify(data))
        window.dispatchEvent(new Event('storage'))
    }

    return (
        <>
            <li className={`task ${currentStyle}`}>
                <div className="complete-icon">
                    <AiOutlineCheck id="check-icon" />
                </div>
                <p onClick={onCheckTask}>{taskName}</p>
                <button onClick={onDelete}>
                    <AiOutlineClose />
                </button>
            </li>
        </>
    )
}

export default TodoItem