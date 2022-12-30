import getAnHoursData from "../helpers/getAnHoursData";
import { useState } from "react";
import { HourlyWeatherCard } from "./WeatherCard";

const Caurosel = () => {
	const [first, setFirst] = useState(() => getAnHoursData(10));
	const [hourlyData, setHoutlyData] = useState();
	return (
		<div className="grid grid-flow-col gap-8 pl-4 overflow-x-scroll ">
			<HourlyWeatherCard {...first} />
		</div>
	);
};

export default Caurosel;
