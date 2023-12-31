import { getInitialData } from "../utils/api";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { SetAuthedUser } from "../actions/authedUser";

//const AUTHED_ID = "tylermcginnis";

export function handleInitialData () { // thunk action creator
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData().then(({users, questions}) => {
            dispatch(receiveUsers(users)); //dispatching action creators
            dispatch(receiveQuestions(questions)); //dispatching action creators
            //dispatch(SetAuthedUser(AUTHED_ID)); //dispatching action creators
            dispatch(hideLoading());
        })
    }
}