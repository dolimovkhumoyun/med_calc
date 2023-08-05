import { useState } from "react";

const App = () => {
	const [hemo, setHemo] = useState("")
	const [elektro, setElektro] = useState("");
	const [result, setResult] = useState("");
	const [customErr, setCustomErr] = useState("")

	
	const calculate = (type: string, event: any) => {
		let hemoTmp = hemo;
		let elektroTmp = elektro;
		if(type === "elektro") {
			elektroTmp = event.target.value
			setElektro(event.target.value)
		} else if(type === "hemo"){
			hemoTmp = event.target.value
			setHemo(event.target.value)
		}
		const upper = Number(hemoTmp) * 3;
		const lower = Number(elektroTmp) * 100;
		if(typeof lower === "number" && lower === 0) {
			setCustomErr("Рақамлар нотўғри киритилган! ")
		} else {
			let result = (upper / lower).toFixed(2);
			console.log(result)
			setResult(result);
			setCustomErr("")
		}
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
					inputMode="numeric"
				/>
			</div>
			<div className="mb-6">
				<label
					className="block text-gray-700 text-sm font-bold mb-2"
					htmlFor="eritrotsit"
				>
					Эритроцитлар сони
				</label>
				<input
					className={`shadow appearance-none border ${customErr ? "border-red-500": ""} rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
					id="eritrotsit"
					type="number"
					placeholder="Эритроцитлар сони"
					value={elektro}
					onChange={(e) => calculate("elektro", e)}
					inputMode="numeric"
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
					className={`shadow appearance-none border ${customErr ? "border-red-500": ""} rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
					id="result"
					type="number"
					value={result}	
					readOnly
				/>
			</div>
			{customErr && <p className="text-red-500 text-xs italic">{customErr}</p>}
		</div>
	);
};

export default App;
