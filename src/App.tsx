import { useState } from "react";

const App = () => {
	const [hemo, setHemo] = useState(0)
	const [elektro, setElektro] = useState(0);
	const [result, setResult] = useState(0);

	
	const calculate = (type: string, event: any) => {
		if(type === "elektro") {
			setElektro(event.target.value)
		} else if(type === "hemo"){
			setHemo(event.target.value)
		}
		let result = (hemo * 3) / (elektro * 100);
		console.log(result)
		setResult(result);
	}

	return (
		<div className="bg-white  px-8 pt-6 pb-8 mb-4">
			<div className="mb-4">
				<label
					className="block text-gray-700 text-sm font-bold mb-2"
					htmlFor="username"
				>
					Гемоглобин
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="hemoglobin"
					type="number"
					placeholder="Гемоглобин"
					value={hemo}
					onChange={(e) => calculate("hemo", e)}
				/>
			</div>
			<div className="mb-6">
				<label
					className="block text-gray-700 text-sm font-bold mb-2"
					htmlFor="password"
				>
					Эритроцитлар сони
				</label>
				<input
					className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
					id="eritrotsit"
					type="number"
					placeholder="10"
					value={elektro}
					onChange={(e) => calculate("elektro", e)}
				/>
			</div>
			<div className="mb-6">
				<label
					className="block text-gray-700 text-sm font-bold mb-2"
					htmlFor="password"
				>
					Натижа
				</label>
				<input
					className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
					id="result"
					type="number"
					value={result}	
				/>
			</div>
		</div>
	);
};

export default App;
