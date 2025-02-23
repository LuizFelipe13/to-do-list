import { useRef } from "react";
export function RemoveItem({ onRemove, task, onCheck }) {
    const inputRef = useRef();

    function handleOnCheckTask(event) {
        if(task) {
            onCheck({ ...task, isCompleted: event.target.checked });
        }
    }


    function handleOnRemoveTask(event) {
        event.preventDefault();
        
        onRemove(inputRef.current.value);
        console.log(inputRef.current.value);
    }

    return (
        <div className="remove-item-container">
            <form onSubmit={handleOnRemoveTask}>
                <input type="checkbox" checked={task ? task.isCompleted:false} onChange={handleOnCheckTask}  ref={inputRef} />
                <button type='submit'>Remover</button>
            </form>
        </div>
    )
}