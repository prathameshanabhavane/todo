

const Todo = ({todoText, todos, setTodos, todo, todoEditing, setTodoEditing, setEditingText, editingText, }) => {

    const deletehandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    };

    const inputTextUpdateHandler = (e) => {
        setEditingText(e.target.value)
    }

    const UpdateHandler = (e) => {
        // console.log(todo.id)
        setTodoEditing(todo.id)
        setEditingText(todoText)
    }

    const submitUpdateHandler = () => {
        console.log(todo.id )
        setTodos(todos.map(item => {
            if( item.id === todo.id ) {
                return {
                    ...item, text: editingText
                } 
            }
            return item;
        }))
        setTodoEditing(null)
        setEditingText('')
    }

    return(
        <>
            <div className="todo">
                <li className={`todo-item ${todo.completed ? "completed" : "" }`}>
                    {todoEditing === todo.id ? (<input type="text" value={editingText} onChange={inputTextUpdateHandler} />) : (<span>{todoText}</span>)  }
                </li>
                {todoEditing === todo.id && <button className="save-btn" onClick={submitUpdateHandler} title="Save"><i className="fas fa-save"></i></button>}
                {todoEditing != todo.id && <button onClick={UpdateHandler} title="Edit" className="edit-btn"><i className="fas fa-edit"></i></button> }
                <button onClick={deletehandler} title="Delete" className="trash-btn"><i className="fas fa-trash"></i></button>
            </div>
        </>
    )
}

export default Todo