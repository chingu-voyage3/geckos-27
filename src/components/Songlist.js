import React, { Component } from 'react';
import '../style.css';
import Play from'./Play'

const apiLink = 'https://api.jamendo.com/v3.0';
const apiFormat = '?client_id=5adf7db0&format=jsonpretty';

class Songlist extends Component{
	state={
		result:[]
	}
	componentDidMount(){
		fetch(`${apiLink}/artists/tracks/${apiFormat}&album_id=${this.props.match.params.albid}`).then(res => res.json()).then(d => {this.setState({result:d.results[0].tracks}),console.log(this.state)});
	}
	render(){
		return(
			<div className="Grid">
				{this.state.result.map(alb=>(
							<div className="playItem" key={alb.id}>
								<div className="itembox">
									<img src={alb.image} alt={alb.name} />
									<div>{alb.name}</div>
									<Play url={alb.audio} />
								</div>
							</div>
						))}
			</div>
			);
	}
}
export default Songlist;