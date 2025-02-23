import { TodoItem } from "./TodoItem";
import { useState } from "react";
import { AddItem } from './AddItem';
import { RemoveItem } from "./RemoveItem";
const TASK_LIST = [
    {
        id: 1,
        name: "Tarefa 1",
        isComplete: false,
    },
    {
        id: 2,
        name: "Tarefa 2",
        isComplete: false,
    },
    {
        id: 3,
        name: "Tarefa 3",
        isComplete: false,
    },
    {
        id: 4,
        name: "Tarefa 4",
        isComplete: false,
    },

]
export function TodoList() {

    const [tasks, setTasks] = useState(TASK_LIST);

    function handleOnCheck(task) {
        const updatedTasks = tasks.map((t) => {
            if (task.id === t.id) {
                t.isCompleted = task.isCompleted;
            }
            return t;

        });
        setTasks(updatedTasks);
        console.log(updatedTasks);
    }

    function handleOnAddTask(task) {
        const updatedTasks = tasks.concat({id: tasks.length + 1, name: task, isCompleted: false});
        setTasks(updatedTasks);
        console.log(updatedTasks);
    }

    function handleOnRemoveTask(task) {
        const updatedTasks = tasks.concat({id: tasks.length - 1, name: task, isCompleted: true});
        setTasks(updatedTasks);
        console.log(updatedTasks);
    }

    return (
        <section className="task-list-container">
            <h1>Lista de tarefas</h1>
            <div>
                <p>
                    <strong> Total de tarefas: </strong> {tasks.length}
                </p>
                <p>
                    <strong> Tarefas pendentes: </strong> {tasks.filter(t => t.isCompleted === false).length}
                </p>
                <p>
                    <strong> Tarefas completas: </strong> {tasks.filter(t => t.isCompleted === true).length}
                </p>
            </div>

            <AddItem onAdd={handleOnAddTask}/>
            <RemoveItem onRemove={handleOnRemoveTask} />
            <ul>
                {tasks.map((task) => (

                    <li key={task.id}>
                        <TodoItem task={task} onCheck={handleOnCheck} />
                    </li>
                ))}

            </ul>
            
            
        </section>
    )

}