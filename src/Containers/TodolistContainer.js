import { connect } from 'react-redux';

import Todolist from '../componets/Todolist';

import { addTodo } from '../Services/Action/action'
import { deleteTodo } from '../Services/Action/action'

const mapStateToProps = state => (
    {
        getTodolist: state.todoListData.todoData
    }
)

const mapDisptchToProps = dispatch => (
    {
        addTodoHandler: data => dispatch(addTodo(data)),
        deleteTodoHandler: id => dispatch(deleteTodo(id))
    }
)

export default connect(mapStateToProps, mapDisptchToProps)(Todolist)