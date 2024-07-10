import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import groups from "./values.json";

function App() {
	const [count, setCount] = useState(0);
	const mergeFields = {
		something: {
			field_type: 'checkbox'
		}
	}
	// Does not work
	// groups.types.includes(mergeFields[key].field_type)
	// Works
	groups?.types.includes(mergeFields[key].field_type)
	return (
		<div className="App">
			<div>
				<a href="https://reactjs.org" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Rspack + React</h1>
			<div className="card">
				<button onClick={() => setCount(count => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Rspack and React logos to learn more
			</p>
		</div>
	);
}

export default App;
