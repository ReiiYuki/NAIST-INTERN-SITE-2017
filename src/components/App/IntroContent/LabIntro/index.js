import React from 'react'
import labImg from './lab.jpg'

export default class LabIntro extends React.Component {

	render(){
		const bgWhite = {
			backgroundColor:'white'
		}
		const padding = {
			padding : '1%',
			margin: '1%'
		}
		return 	(
			<div className="bg-primary  text-white" id="lab">
				<div className="row">
					<div className="col-12 col-lg-6">
						<img src={labImg} className="img-fluid"/>
					</div>
					<div className="col-12 col-lg-6" >
						<div style={padding}>
							<div className="row">
								<div className="col">
									<h1>Graduate School of Information Science</h1>
								</div>
							</div>
							<div className="row">
								<div className="col">
									<h3>Laboratory List</h3>
								</div>
							</div>
							<div className="row">
								<div className="col">
									<a href="#lab-se" className="text-white">
										<h5><i className="fa fa-star" aria-hidden="true"></i> Software Engineering (SE)</h5>
									</a>
								</div>
							</div>
							<div className="row">
								<div className="col">
									<a href="#lab-sd" className="text-white">
										<h5><i className="fa fa-star" aria-hidden="true"></i> Software Design and Analysis (SD)</h5>
									</a>
								</div>
							</div>
							<div className="row">
								<div className="col">
									<a href="#lab-mi" className="text-white">
										<h5><i className="fa fa-star" aria-hidden="true"></i> Mathematical Informatics (MI)</h5>
									</a>
								</div>
							</div>
							<div className="row">
								<div className="col">
									<a href="#lab-ubi" className="text-white">
										<h5><i className="fa fa-star" aria-hidden="true"></i> Ubiquitous Computing (UBI)</h5>
									</a>
								</div>
							</div>
							<div className="row">
								<div className="col">
									<a href="#lab-care" className="text-white">
										<h5><i className="fa fa-star" aria-hidden="true"></i> Cybernetics and Reality Engineering (CARE)  </h5>
									</a>
								</div>
							</div>
							<div className="row">
								<div className="col">
									<a href="#lab-imd" className="text-white">
										<h5><i className="fa fa-star" aria-hidden="true"></i> Interactive Media Design (IMD)</h5>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}

}
