export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS"; // Action type
export const ADD_QUESTION = "ADD_QUESTION";

function addQuestion(question) {
    return{
        type: ADD_QUESTION,
        question,
    }
}

export function receiveQuestions(questions) { // Action Creator
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}