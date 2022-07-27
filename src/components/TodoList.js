
import Todo from './Todo';

const TodoList = ({todos, setTodos, todoEditing, setTodoEditing, setEditingText, editingText}) => {
    return(
        <>
            <div className="todo-container">
                <ul className="todo-list">
                    {todos.map(todo => 
                        <Todo 
                            key={todo.id} 
                            todoText={todo.text} 
                            todos={todos} 
                            todo={todo} 
                            setTodos={setTodos}
                            todoEditing={todoEditing}
                            setTodoEditing={setTodoEditing}
                            setEditingText={setEditingText}
                            editingText={editingText} 
                        />  
                    )}
                </ul>
            </div>
        </>
    )
}

export default TodoList