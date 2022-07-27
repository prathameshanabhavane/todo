
const Form = ({setinputText, setTodos, todos, inputText}) => {
    const inpuTextHandler = (e) => {
        // console.log(e.target.value);
        setinputText(e.target.value)
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        if(inputText != "") {
            setTodos([
                ...todos, 
                {text: inputText, completed: false, id: Math.random() * 1000}
            ]);
        }
        setinputText("");
    };

    return(
        <>
            <form>
                <input onChange={inpuTextHandler} value={inputText} type="text" className="todo-input" />
                <button onClick={submitTodoHandler} className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
            </form>
        </>
    )
}

export default Form