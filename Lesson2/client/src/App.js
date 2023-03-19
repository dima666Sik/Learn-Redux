import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
	const dispath = useDispatch();
	const score = useSelector((state) => state.score.score);
	console.log(score);

	const increment = (payload) => {
		dispath({ type: "Add_Score", payload });
	};

	const decrement = (payload) => {
		dispath({ type: "Remove_Score", payload });
	};

	return (
		<div className="App">
			<div className="btnBlock">
				<div className="score">{score}</div>
				<button
					className="btn btnAddScore"
					onClick={() => increment(Number(prompt()))}
				>
					Add score
				</button>
				<button
					className="btn btnRemoveScore"
					onClick={() => decrement(Number(prompt()))}
				>
					Remove score
				</button>
			</div>
		</div>
	);
}

export default App;
