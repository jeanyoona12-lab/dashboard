const TodoList = ({ todos, onDel, onToggle }) => {
    return (
        <ul id="todo-list">
            {todos.map((list) => (
                <li key={list.id} className="todo-item">
                    <span
                        className={`todo-text ${list.done ? "done" : ""}`}
                        onClick={() => onToggle(list.id)}
                    >
                        {list.todo}
                    </span>

                    <button
                        className="todo-btn"
                        onClick={(e) => {
                            e.stopPropagation();
                            onDel(list.id);
                        }}
                    >
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
