import React from 'react'
import img1 from './1.jpg'
import img2 from './2.jpg'
import img3 from './3.jpg'
import img4 from './4.jpg'
import img5 from './5.jpg'
import img6 from './6.jpg'
import img7 from './7.jpg'
import img8 from './8.jpg'
import img9 from './9.jpg'
import img10 from './10.jpg'

export default class Environment extends React.Component {

	render() {
		return (
			<div className="d-flex align-items-center pagination-centered	text-center" id="envi">
				<div className="row">
					<div className="col">
						<img src={img1} className="img-fluid" />
					</div>
					<div className="col">
						<div className="row">
							<div className="col">
								<img src={img2} className="img-fluid" />
							</div>
						</div>
						<div className="row">
							<div className="col">
								<img src={img3} className="img-fluid" />
							</div>
						</div>
						<div className="row">
							<div className="col">
								<img src={img9} className="img-fluid" />
							</div>
						</div>
					</div>
					<div className="col">
						<img src={img6} className="img-fluid" />
					</div>
					<div className="col">
						<div className="row">
							<div className="col">
								<img src={img4} className="img-fluid" />
							</div>
						</div>
						<div className="row">
							<div className="col">
								<img src={img5} className="img-fluid" />
							</div>
						</div>
						<div className="row">
							<div className="col">
								<img src={img10} className="img-fluid" />
							</div>
						</div>
					</div>
					<div className="col">
						<img src={img8} className="img-fluid" />
					</div>
				</div>
			</div>
		)
	}

}
