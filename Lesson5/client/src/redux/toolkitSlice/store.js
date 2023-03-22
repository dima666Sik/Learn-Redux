import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sliceScore from "./sliceScore";
import sliceUsers from "./sliceUsers";

const rootReducer = combineReducers({
	score: sliceScore,
	users: sliceUsers,
});

export const store = configureStore({
	reducer: rootReducer,
});
