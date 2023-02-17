import React, { useState } from 'react'

const Todolist = (props) => {
    const [inputValue, setInputValue] = useState("");
    const [allList, setAllList] = useState(props.getTodolist)

    const add = () => {
        props.addTodoHandler(inputValue);
        setInputValue("");
        console.log('props::: ', props.getTodolist);
    }

    const delete_data = (id) => {
        props.deleteTodoHandler(id)
        setAllList(allList.filter((ele, index) => index != id))
    }

    return (
        <>
            <h1>Todo List</h1>
            <section>
                <div className="width-center">
                    <div className="card">
                        <div className="row side-elements">
                            <label>Add Todo</label>
                            <input
                                value={ inputValue }
                                onChange={ (e) => setInputValue(e.target.value) }
                                type="text"
                                placeholder='Enter a todo' />
                            <button onClick={ add }>Add Task</button>
                        </div>
                    </div>
                    {
                        allList.map((ele, index) => {
                            return (
                                <div key={ index } className="card">
                                    <div className="flex-betwin">
                                        <label>{ index + 1 }</label>
                                        <label>{ ele }</label>
                                        <button
                                            onClick={ () => delete_data(index) }
                                            className='warning'>Delete</button>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </section>
        </>
    )
}

export default Todolist
