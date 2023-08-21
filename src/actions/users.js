export const RECEIVE_USERS = "RECEIVE_USERS"; // Action type
export const SAVE_QUESTION_ANSWER_USER = "SAVE_QUESTION_ANSWER_USER";
export const SAVE_QUESTION_USER = "SAVE_QUESTION_USER";

export function receiveUsers(users){ // Action creator
    return{
        type: RECEIVE_USERS,
        users,
    }
}

export function saveQuestionAnswerUser ({ authedUser, qid, answer}){ // action creator
    return {
        type: SAVE_QUESTION_ANSWER_USER,
        qid,
        authedUser,
        answer,
    }    
}

export function saveQuestionUser (question){ // action creator
    return {
        type: SAVE_QUESTION_USER,
        question,
    }    
}