import React from "react"

export default function Overview() {
	return (
		<div className="overview">
			<table>
				<thead>
					<tr>
						<th colSpan="5"><h2>Overview</h2></th>
					</tr>
				</thead>
                <tbody>
                    <tr>
                        <td>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star-half-alt"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                        </td>
                        <td className="circle-border">€€</td>
                        <td className="circle-border">45 mn</td>
                        <td className="circle-border">0 mn</td>
                        <td className="circle-border">10 mn</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th>Difficulty</th>
                        <th>Cost</th>
                        <th>Preparation <br/> time</th>
                        <th>Cooking <br/>Time</th>
                        <th>Resting <br/> Time</th>
                    </tr>
                </tfoot>
			</table>
		</div>
	)
}
