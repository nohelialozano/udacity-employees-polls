import { RECEIVE_QUESTIONS, ADD_QUESTION } from "../actions/questions";

export default function questions(state = {}, action){
    switch(action.type){
        case RECEIVE_QUESTIONS:
            return {
                ...state, // new state of our users slice of state
                ...action.questions,
            };        
        default:
            return state;
    }
}