import React,{ Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../style.css';
import Download from './Download';

const apiLink = 'https://api.jamendo.com/v3.0';
const apiFormat = '?client_id=5adf7db0&format=jsonpretty';

class Albums extends Component{
	constructor(){
		super()
		this.state={
			result:[],
			src:[]
		}
	}
	componentDidMount(){
		fetch(`${apiLink}/albums/${apiFormat}`).then(res => res.json()).then(d => this.setState({result:d.results}));
	}
	componentWillReceiveProps(nextProp){
		if(this.props.albumId!==nextProp.albumId){
			fetch(`${apiLink}/artists/tracks/${apiFormat}&album_id=${nextProp.albumId}`).then(res => res.json()).then(d => {this.setState({src:d.results[0].tracks})}).then(()=>{this.props.changeReq(0,this.state.src)});
		}
	}
	render(){
		return(

			
				<div className="Grid">
					{this.state.result.map(alb=>(
							<div className="GridItem" key={alb.id}>
								<div className="itembox">
									<NavLink exact to={`/g/${alb.id}`}><img src={alb.image} alt={alb.shorturl} /></NavLink>
									<div><h4>{alb.name}</h4></div>
									<button onClick={()=>this.props.changeAlbumId(alb.id)}> play </button>
									<div><Download downloadUrl={alb.zip} /></div>
								</div>
							</div>
						))}
				</div>
		
			)

	}
}


export default Albums;

