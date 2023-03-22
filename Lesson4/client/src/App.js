import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addScoreAction, removeScoreAction } from "./redux/store/scoreReducer";
import { addUserAction, removeUserAction } from "./redux/store/userReducer";
import { fetchUsers } from "./redux/asyncActions/users";
function App() {
	const dispatch = useDispatch();
	const score = useSelector((state) => state.score.score);
	const users = useSelector((state) => state.users.users);

	console.log(score);
	console.log(users);

	const incrementScore = (payload) => {
		dispatch(addScoreAction(payload));
	};

	const decrementScore = (payload) => {
		dispatch(removeScoreAction(payload));
	};

	const addUser = (name) => {
		const user = {
			name,
			id: Date.now(),
		};
		dispatch(addUserAction(user));
	};

	const removeUser = (user) => {
		dispatch(removeUserAction(user.id));
	};

	const removeUserForName = (payload) => {
		removeUser(...users.filter((user) => user.name === payload));
	};

	return (
		<div className="App">
			<div className="btnBlockScore">
				<div className="score">{score}</div>
				<button
					className="btn btnScore btnAddScore"
					onClick={() => incrementScore(Number(prompt()))}
				>
					Add score
				</button>
				<button
					className="btn btnScore btnRemoveScore"
					onClick={() => decrementScore(Number(prompt()))}
				>
					Remove score
				</button>
			</div>

			<div className="btnBlockUser">
				<div className="score">Count users: {users.length}</div>
				<button
					className="btn btnUsers btnAddUser"
					onClick={() => addUser(prompt("Enter name:"))}
				>
					Add user
				</button>
				<button
					className="btn btnUsers btnAddUser"
					onClick={() => dispatch(fetchUsers())}
				>
					Get users from DB
				</button>
				<button
					className="btn btnUsers btnRemoveUser"
					onClick={() => removeUserForName(prompt("Enter name:"))}
				>
					Remove user
				</button>
			</div>
			<div className="blockUsers">
				<h2>List Users</h2>
				{users.length ? (
					<div>
						{users.map((users) => (
							<div key={users.id} onClick={() => removeUser(users)}>
								{users.name}
							</div>
						))}
					</div>
				) : (
					<div>Not exists</div>
				)}
			</div>
		</div>
	);
}

export default App;
