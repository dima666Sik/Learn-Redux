import { createSlice } from "@reduxjs/toolkit";

const sliceScore = createSlice({
	name: "score",
	initialState: {
		score: 0,
	},
	reducers: {
		incrementScore(state, action) {
			console.log(state);
			console.log("stateScore:", state);
			state.score = state.score + action.payload;
		},
		decrementScore(state, action) {
			state.score = state.score - action.payload;
		},
	},
});

export default sliceScore.reducer;
export const { incrementScore, decrementScore } = sliceScore.actions;
