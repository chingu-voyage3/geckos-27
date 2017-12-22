import React,{ Component } from 'react';
import { Switch,NavLink,Route } from 'react-router-dom';
import '../style.css'; 
const apiLink = 'https://api.jamendo.com/v3.0';
const apiFormat = '?client_id=5adf7db0&format=jsonpretty';

class Albums extends Component{
	state={
		result:[],
		link:''
	}
	componentDidMount(){
		fetch(`${apiLink}/albums/${apiFormat}`).then(res => res.json()).then(d => this.setState({result:d.results}));
	}
	render(){
		return(
			<Switch>
				<div className="Grid">
					{this.state.result.map(alb=>(
							<div className="GridItem" key={alb.id}>
								<div className="itembox">
									<NavLink exact to={`/g/${alb.id}`}><img src={alb.image} alt={alb.shorturl}></img></NavLink>
								</div>
							</div>
						))}
				</div>

			</Switch>
			)
		
	}
}
export default Albums;