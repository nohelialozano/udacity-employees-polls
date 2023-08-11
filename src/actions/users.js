export const RECEIVE_USERS = "RECEIVE_USERS"; // Action type

export function receiveUsers(users){ // Action creator
    return{
        type: RECEIVE_USERS,
        users,
    }
}