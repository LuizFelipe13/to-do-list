export function TodoItem({ task }) {
    return (
        <div className="task-item">
            <input type="checkbox" /> {task.name}
          
        </div>
    )
}