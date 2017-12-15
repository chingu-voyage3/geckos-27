import React,{ Component } from 'react';
const apiLink = 'https://api.jamendo.com/v3.0';
const apiFormat = '?client_id=5adf7db0&format=jsonpretty'; 
class Albums extends Component{
	state={
		result:[]
	}
	componentDidMount(){
		fetch(`${apiLink}/albums/${apiFormat}`).then(res => res.json()).then(d => this.setState({result:d.results}));
	}
	render(){
		return(
			<div>
				{this.state.result.map(alb=>(
					<div key={alb.id}>
						<h4>{alb.name}</h4>
						<img src={alb.image}></img>
					</div>
					))}
			</div>
			)
		
	}
}

export default Albums;