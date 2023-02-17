import { ADD_TODO } from '../Constants'
import { DELETE_TODO } from '../Constants'

const initalState = {
    todoData: [],
}

export default function todoListData(state = initalState, action) {

    switch (action.type) {
        case ADD_TODO:
            state.todoData.push(action.data)
            return state;
            break;

        case DELETE_TODO:
            const h1 = state.todoData.filter((ele, index) => index != action.id);
            state.todoData = h1;
            return state;
            break;

        default:
            return state
    }
}