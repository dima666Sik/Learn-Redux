import { createStore } from "redux";

const defaultState = {
	score: 0,
};

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case "Add_Score":
			return { ...state, score: state.score + action.payload };
		case "Remove_Score":
			return { ...state, score: state.score - action.payload };
		default:
			return state;
	}
};

export const store = createStore(reducer);
