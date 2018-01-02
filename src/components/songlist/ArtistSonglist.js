import React, { Component } from 'react';
import '../../style.css';
import Play from'../Play';
import Download from '../Download';

const apiLink = 'https://api.jamendo.com/v3.0';
const apiFormat = '?client_id=5adf7db0&format=jsonpretty';

class ArtistSonglist extends Component{
	state={
		result:[]
	}
	componentDidMount(){
		fetch(`${apiLink}/artists/tracks/${apiFormat}&name=${this.props.match.params.artid}`).then(res => res.json()).then(d => {this.setState({result:d.results[0].tracks})});
	}
	render(){
		return(
			<div className="Grid">
				{this.state.result.map((art, index)=>(
							<div className="GridItem" key={art.id}>
								<div className="itembox">
									<img src={art.image} alt={art.name} onClick={()=>this.props.changeReq(index,this.state.result)} />
									<div>{art.name}</div>
									<Play url={art.audio} />
									<Download downloadUrl={art.audiodownload} />
								</div>
							</div>
						))}
			</div>
			);
	}
}
export default ArtistSonglist;