const defaultState = {
	score: 0,
};

export const scoreReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_SCORE:
			return { ...state, score: state.score + action.payload };
		case REMOVE_SCORE:
			return { ...state, score: state.score - action.payload };
		default:
			return state;
	}
};

const ADD_SCORE = "Add_Score";
const REMOVE_SCORE = "Remove_Score";

export const addScoreAction = (payload) => ({ type: ADD_SCORE, payload });
export const removeScoreAction = (payload) => ({ type: REMOVE_SCORE, payload });
