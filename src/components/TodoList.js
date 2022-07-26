
import Todo from './Todo';

const TodoList = ({todos, setTodos, filteredTodos}) => {
    return(
        <>
            <div className="todo-container">
                <ul className="todo-list">
                    {filteredTodos.map(todo => 
                        <Todo key={todo.id} todoText={todo.text} todos={todos} todo={todo} setTodos={setTodos} />  
                    )}
                </ul>
            </div>
        </>
    )
}

export default TodoList