import React from 'react'

export default class TriSection extends React.Component {

	render(){

		const whiteBg = {
			backgroundColor:'white',
			marginBottom: '0px'
		}

		return (
			<div className="jumbotron jumbotron-fluid align-items-center pagination-centered	text-center" style={whiteBg}>
				<div className="container">
					<div className="row">
						<div className="col">
							<a href="#lab" className="text-primary">
								<div className="row">
									<div className="col">
										<i className="fa fa-laptop fa-4x" aria-hidden="true"></i>
									</div>
								</div>
								<div className="row">
									<div className="col">
										<h3>Life in Lab</h3>
									</div>
								</div>
								<div className="row">
									<div className="col">
										<p><small>Life in each Laboratory</small></p>
									</div>
								</div>
							</a>
						</div>
						<div className="col">
							<a href="#tran" className="text-warning">
								<div className="row">
									<div className="col">
										<i className="fa fa-train fa-4x" aria-hidden="true"></i>
									</div>
								</div>
								<div className="row">
									<div className="col">
										<h3>Transportation</h3>
									</div>
								</div>
								<div className="row">
									<div className="col">
										<p><small>How to go to NAIST !</small></p>
									</div>
								</div>
							</a>
						</div>
						<div className="col">
							<a href="#envi" className="text-success">
								<div className="row">
									<div className="col">
										<i className="fa fa-pagelines fa-4x" aria-hidden="true"></i>
									</div>
								</div>
								<div className="row">
									<div className="col">
										<h3>Environment</h3>
									</div>
								</div>
								<div className="row">
									<div className="col">
										<p><small>Environment Gallery around NAIST</small></p>
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		)
	}

}
