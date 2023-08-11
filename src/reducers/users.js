import { RECEIVE_USERS } from "../actions/users";

export default function users(state = {}, action){
    switch(action.type){
        case RECEIVE_USERS:
            return {
                ...state, // new state of our users slice of state
                ...action.users,
            }
        default:
            return state;
    }
}