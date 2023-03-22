import { createSlice } from "@reduxjs/toolkit";

const sliceUsers = createSlice({
	name: "users",
	initialState: {
		users: [],
	},
	reducers: {
		addUser(state, action) {
			const user = {
				id: Date.now(),
				name: action.payload,
			};
			return { ...state, users: [...state.users, user] };
		},
		removeUser(state, action) {
			return {
				...state,
				users: state.users.filter((user) => user.id !== action.payload.id),
			};
		},
		removeUserForName(state, action) {
			return {
				...state,
				users: state.users.filter((user) => user.name !== action.payload),
			};
		},

		addManyUsers(state, action) {
			return { ...state, users: [...state.users, ...action.payload] };
		},
	},
});

export default sliceUsers.reducer;
export const { addUser, removeUser, removeUserForName, addManyUsers } =
	sliceUsers.actions;
