import React from "react"

export default function Overview() {
	return (
		<div className="overview">
			<table>
				<thead>
					<tr>
						<th colSpan="5">Overview</th>
					</tr>
				</thead>
                <tbody>
                    <tr>
                        <th><i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                        </th>
                        <th className="circle-border">€€</th>
                        <th className="circle-border">45 mn</th>
                        <th className="circle-border">0 mn</th>
                        <th className="circle-border">10 mn</th>
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
