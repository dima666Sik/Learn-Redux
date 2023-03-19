const defaultUserState = {
	usersArray: [],
};

export const userReducer = (state = defaultUserState, action) => {
	switch (action.type) {
		case "Add_User":
			return { ...state, score: state.score + action.payload };
		case "Remove_User":
			return { ...state, score: state.score - action.payload };
		default:
			return state;
	}
};
