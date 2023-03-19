import { combineReducers, createStore } from "redux";
import { scoreReducer } from "./scoreReducer";
import { userReducer } from "./userReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
	score: scoreReducer,
	users: userReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
