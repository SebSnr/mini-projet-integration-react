import React, {useState} from "react"

export default function Ingredients() {
	const [servingsNb, setServingsNb] = useState(4)
	const handleValue = () => {
		setServingsNb(document.getElementById("servings-input").value)
		console.log(servingsNb)
	}

	return (
		<div className="ingredients">
			<table>
				<thead>
					<tr>
						<th colSpan="5">
							<h3>Ingredients</h3>
						</th>
					</tr>
					<tr>
						<th colSpan="5" className="servings">
							<span>Servings:</span>
							<button
								onClick={() => {
									document.getElementById("servings-input").stepDown()
									handleValue()
								}}
							>
								—
							</button>
							<input type="number" id="servings-input" defaultValue="4" min="1" max="10"></input>
							<button
								onClick={() => {
									document.getElementById("servings-input").stepUp()
									handleValue()
								}}
							>
								+
							</button>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th className="title">#</th>
						<th className="title">Name</th>
						<th className="title">Quantity</th>
						<th className="title">Metric</th>
					</tr>
					<tr className="shady">
						<th className="shady ">1</th>
						<td className="shady ">Tomato</td>
						<td className="shady ">{Math.round(servingsNb)}</td>
						<td className="shady ">Piece</td>
					</tr>
					<tr>
						<th>2</th>
						<td>Chocolate</td>
						<td>{Math.round(servingsNb * 75)}</td>
						<td>Gram</td>
					</tr>
					<tr className="shady">
						<th>3</th>
						<td>Flour</td>
						<td>{Math.round(servingsNb * 32.5)}</td>
						<td>Gram</td>
					</tr>
					<tr>
						<th>4</th>
						<td>Milk</td>
						<td>{Math.round(servingsNb * 6.25)}</td>
						<td>Cl</td>
					</tr>
				</tbody>
			</table>
			List of the recipe ingredients
		</div>
	)
}
