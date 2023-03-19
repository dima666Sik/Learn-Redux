const defaultState = {
	score: 0,
};

export const scoreReducer = (state = defaultState, action) => {
	switch (action.type) {
		case "Add_Score":
			return { ...state, score: state.score + action.payload };
		case "Remove_Score":
			return { ...state, score: state.score - action.payload };
		default:
			return state;
	}
};
