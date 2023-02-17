import { ADD_TODO } from '../Constants'
import { DELETE_TODO } from '../Constants'

export const addTodo = (data) => {
    return {
        type: ADD_TODO,
        data: data
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        id: id
    }
}