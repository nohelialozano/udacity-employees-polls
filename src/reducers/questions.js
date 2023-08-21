import { RECEIVE_QUESTIONS, ADD_QUESTION, SAVE_QUESTION_ANSWER } from "../actions/questions";

export default function questions(state = {}, action){
    switch(action.type){
        case RECEIVE_QUESTIONS:
            return {
                ...state, // new state of our users slice of state
                ...action.questions,
            }; 
        case SAVE_QUESTION_ANSWER: 
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.answer] : {
                        ...state[action.qid][action.answer],
                        votes: state[action.qid][action.answer].votes.concat([action.authedUser])
                      }
                },
            }; 
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question,
            }; 
        default:
            return state;
    }
}