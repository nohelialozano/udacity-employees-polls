
import { saveQuestionAnswerInfo, saveQuestion } from "../utils/api";
import { saveQuestionAnswerUser, saveQuestionUser } from "./users";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS"; // Action type
export const ADD_QUESTION = "ADD_QUESTION";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";

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

function saveQuestionAnswer ({ authedUser, qid, answer}){ // action creator
    return {
        type: SAVE_QUESTION_ANSWER,
        qid,
        authedUser,
        answer,
    }    
}

export function handleSaveQuestionAnswer(info){ // async action creator
    return (dispatch) => {

        dispatch(showLoading());
        dispatch(saveQuestionAnswer(info));
        dispatch(saveQuestionAnswerUser(info));
        return saveQuestionAnswerInfo(info).then(() => dispatch(hideLoading()));

    };
}

export function handleAddQuestion(optionOneText, optionTwoText, author){
    return (dispatch) => {
        
        dispatch(showLoading());

        return saveQuestion({
            optionOneText,
            optionTwoText,
            author
        })
        .then((question) => { dispatch(addQuestion(question)); dispatch(saveQuestionUser(question)) })
        .then(() => dispatch(hideLoading()));
    };
}