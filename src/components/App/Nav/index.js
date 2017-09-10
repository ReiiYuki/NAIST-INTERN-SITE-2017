import React from 'react'
import logo from './logo.png'

export default class NavBar extends React.Component {

	render(){

		const whiteBg = {
			backgroundColor : 'white'
		}

		return (
			<nav className="navbar navbar-toggleable-md navbar-light fixed-top" style={whiteBg}>
			  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			  <a className="navbar-brand" href="#"><img className="img-fluid" src={logo}/></a>

			  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
			    <ul className="navbar-nav mr-auto mt-2 mt-md-0">
			      <li className="nav-item">
			        <a className="nav-link" href="#lab">Life in Lab <span className="sr-only">(current)</span></a>
			      </li>
			      <li className="nav-item">
			        <a className="nav-link" href="#tran">Transportation</a>
			      </li>
			      <li className="nav-item">
			        <a className="nav-link" href="#envi">Environment</a>
			      </li>
			    </ul>
			  </div>
			</nav>
		)
	}

}
