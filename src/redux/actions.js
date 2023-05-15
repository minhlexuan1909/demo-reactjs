// actions.js

import {
	FETCH_USERS_REQUEST,
	FETCH_USERS_SUCCESS,
	FETCH_USERS_FAILURE,
} from "./actionTypes";

const fetchUsersRequest = () => {
	return {
		type: FETCH_USERS_REQUEST,
	};
};

const fetchUsersSuccess = (users) => {
	return {
		type: FETCH_USERS_SUCCESS,
		payload: users,
	};
};

const fetchUsersFailure = (error) => {
	return {
		type: FETCH_USERS_FAILURE,
		payload: error,
	};
};

export const fetchUsers = () => {
	return (dispatch, getState) => {
		dispatch(fetchUsersRequest());

		const { users } = getState();

		fetch(`https://jsonplaceholder.typicode.com/users?since=${users.length}`)
			.then((response) => response.json())
			.then((data) => {
				dispatch(fetchUsersSuccess(data));
			})
			.catch((error) => {
				dispatch(fetchUsersFailure(error.message));
			});
	};
};
