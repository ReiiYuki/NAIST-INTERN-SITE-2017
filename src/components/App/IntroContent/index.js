import React from 'react'
import logo from './circle-logo.png'
import bgImg from './bgImg.jpg'
import TriSection from './TriSection'
import LabIntro from './LabIntro'
import Transportation from './Transportation'
import Environment from './Environment'
import SE from './SE'
import UBI from './UBI'
import CARE from './CARE'
import IMD from './IMD'
import MI from './MI'

export default class IntroContent extends React.Component {

	render(){

		const paddingAwayFromFixedNav = {
			paddingTop: '150px',
		}

		const bg = {
			background: 'url(\''+bgImg+'\') no-repeat center center',
		  position: 'fixed',
		  width: '100%',
		  height: '720px',
		  top:0,
		  left:0,
		  zIndex: -1
		}

		const jumbotron = {
			background: 'transparent',
			color: 'white',
			textShadow:'#444 0 0.5px 0.5px',
			height: '500px'
		}

		return (
			<div style={paddingAwayFromFixedNav}>
				<div style={bg}/>
				<div className="jumbotron jumbotron-fluid d-flex align-items-center pagination-centered	text-center" style={jumbotron} >
					<div className="container">
						<div className="row" >
							<div className="col">
								<img className="img-fluid"  src={logo}/>
							</div>
						</div>
						<div className="row">
							<div className="col">
								<h1>NAIST Internship Guideline Site</h1>
							</div>
						</div>
						<div className="row">
							<div className="col">
								<h2>By CPSK KU Student</h2>
							</div>
						</div>
					</div>
				</div>
				<TriSection />
				<LabIntro />
				<SE />
				
				<MI />
				<UBI />
				<CARE />
				<IMD />
				<Transportation />
				<Environment />
			</div>

		)
	}

}
