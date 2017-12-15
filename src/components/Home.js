import React,{ Component } from 'react';
const apiLink = 'https://api.jamendo.com/v3.0';
const apiFormat = '?client_id=5adf7db0&format=jsonpretty'; 
class Home extends Component{
	state={
		result:''
	}
	getAlbums = () =>{
		fetch(`${apiLink}/albums/${apiFormat}`).then(res => res.json()).then(d => this.setState({result:d.results}));
	}
	render(){
		this.getAlbums();
		return(
			<div>
				{console.log(this.state.result)}
			</div>
			)
		
	}
}

export default Home;