const defaultUserState = {
	users: [],
};

export const userReducer = (state = defaultUserState, action) => {
	switch (action.type) {
		case ADD_USER:
			return { ...state, users: [...state.users, action.payload] };
		case ADD_MANY_USERS:
			return { ...state, users: [...state.users, ...action.payload] };
		case REMOVE_USER:
			return {
				...state,
				users: state.users.filter((user) => user.id !== action.payload),
			};
		default:
			return state;
	}
};

const ADD_USER = "Add_User";
const ADD_MANY_USERS = "Add_Many_Users";
const REMOVE_USER = "Remove_User";

export const addUserAction = (payload) => ({ type: ADD_USER, payload });
export const removeUserAction = (payload) => ({ type: REMOVE_USER, payload });
export const addManyUsersAction = (payload) => ({
	type: ADD_MANY_USERS,
	payload,
});
