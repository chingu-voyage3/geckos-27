import React,{ Component } from 'react';
import '../style.css';
const apiLink = 'https://api.jamendo.com/v3.0';
const apiFormat = '?client_id=5adf7db0&format=jsonpretty';
class Radio extends Component{
	state={
		result:[]
	}
	componentDidMount(){
		fetch(`${apiLink}/radios/${apiFormat}`).then(res => res.json()).then(d => this.setState({result:d.results}));
	}
	render(){
		return(
			<div className="Grid">
				{this.state.result.map(alb=>(
					<div className="GridItem" key={alb.id} >
						<div className="itembox">
							<img src={alb.image} alt={alb.name}></img>
						</div>
					</div>
					))}
			</div>
			)
		
	}
}
export default Radio;