import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style.css';
const apiLink = 'https://api.jamendo.com/v3.0';
const apiFormat = '?client_id=5adf7db0&format=jsonpretty';
class Songlist extends Component{
	state={
		results:[]
	}
	render(){
		console.log(this.props.match.params.albid," the id")
		return(
			<div className="Grid">
				<h3>The song list</h3>
			</div>
			);
	}
}
export default Songlist;