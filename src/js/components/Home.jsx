import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("red")

	return (
		<div className="text-center">
			<div className="cable mx-auto"></div>
			<div className="container mx-auto rounded">
				<div className={color == "red" ? "light red selected" : "light red"} onClick={() => setColor("red")}></div>
				<div className={color == "yellow" ? "light yellow selected" : "light yellow"} onClick={() => setColor("yellow")} ></div>
				<div className={color == "green" ? "light green selected" : "light green"} onClick={() => setColor("green")} ></div>
			</div>
		</div>
	);
};

export default Home;