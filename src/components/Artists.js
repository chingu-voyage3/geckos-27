import React,{ Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../style.css'; 

const apiLink = 'https://api.jamendo.com/v3.0';
const apiFormat = '?client_id=5adf7db0&format=jsonpretty';

class Artists extends Component{
	state={
		result:[]
	}
	componentDidMount(){
		fetch(`${apiLink}/artists/${apiFormat}`).then(res => res.json()).then(d => this.setState({result:d.results}), console.log(this.state));
	}
	render(){
		return(
			
			<div className="Grid">
				{this.state.result.map(art=>(
					(art.image)&&(
						<div className="GridItem" key={art.id} >
							<div className="itembox">
								<NavLink exact to={`/a/${art.name.toLowerCase().replace(' ','+')}`}><img src={art.image} alt={art.shorturl} /></NavLink>
							</div>
						</div>
					)
					))}
			</div>
			)
		
	}
}
export default Artists;