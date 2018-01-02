import React,{Component} from 'react';
import Albums from './components/Albums';
import Radio from './components/Radio';
import AlbumSongList from './components/songlist/AlbumSonglist';
import ArtistSongList from './components/songlist/ArtistSonglist';
import Artists from './components/Artists';
import AboutUs from './components/AboutUs';
import RandomPlay from './components/RandomPlay'
import Login from './components/Login';
import * as FontAwesome from 'react-icons/lib/fa';
import { Link } from 'react-router-dom';
import { Switch,Route } from 'react-router-dom';
import { Sidebar, Segment, Button, Menu } from 'semantic-ui-react'
import fire from './fire';
import MusicPlayer from './components/MusicPlayer';

class App extends Component{
	constructor(props){
		super(props);
		this.state={
			signedIn: false,
			visible:false,
			src:null,
			current:0,
			albumId:null,
			artistId:null
		}

		this.changeReq=this.changeReq.bind(this)
		this.changeAlbumId=this.changeAlbumId.bind(this)
		this.changeArtistId=this.changeArtistId.bind(this)
	}
	signOut(){
		fire.auth().signOut().then(()=>{
			console.log("Signed out.")
		}).catch((err)=>{
			console.log(err);
		})
	}
	changeAlbumId(albumId){
		this.setState({albumId:albumId})
	}

	changeArtistId(artistId){
		this.setState({artistId:artistId})
	}
	
	changeReq(index,url){
		this.setState({current:index,src:url})
	}


	componentWillMount(){
		fire.auth().onAuthStateChanged((user)=>{
			if(user){
				// console.log(user);
				this.setState({signedIn:true});
			}
			else{
				this.setState({signedIn:false});
				console.log("User Not signedIn");
			}
		});
	}
	toggle = ()=>this.setState({visible:!this.state.visible})
	render(){
		console.log(this.state);
		// Api.GetAlbums;
		return(
			<div>
				{this.state.signedIn?
				<div >
			        <button className="spotIcon" onClick={this.toggle}>
						<FontAwesome.FaSpotify
							size={50}/>
					</button>
			        <Sidebar.Pushable as={Segment}>
			          <Sidebar as={Menu} animation='overlay' width='thin' visible={this.state.visible} icon='labeled' vertical inverted>
			          	<Menu.Item>
			          		<h2>Findify</h2>
			          	</Menu.Item>
			          	<Menu.Item>
				          	<form className="searchSection">
							  <label>
							    <input className="searchInput" type="text" name="name" placeholder="Search"/>
							  </label>
							  <button className="searchSubmit">
									<FontAwesome.FaSearch
										size={15}/>
							  </button>
							</form>
						</Menu.Item>		
			            <Menu.Item name='home'>
			              <Link to='/' className="menuElements" onClick={this.toggle}>Browse</Link>
			            </Menu.Item>
			            <Menu.Item>
			            	<Link to='/radio' className="menuElements" onClick={this.toggle}>Radio</Link>
			            </Menu.Item>
			            <Menu.Item>
			            	<Link to='/albums' className="menuElements" onClick={this.toggle}>Albums</Link>
			            </Menu.Item>
			            <Menu.Item>
			            	<Link to='/artists' className="menuElements" onClick={this.toggle}>Artists</Link>
			            </Menu.Item>
			            <Menu.Item>
			            	<Link to='/randomplay' className="menuElements" onClick={this.toggle}>Most Famous</Link>
			            </Menu.Item>
			            <Menu.Item>
			            	<Link to='/aboutus' className="menuElements" onClick={this.toggle}>About Us</Link>
			            </Menu.Item>
			            <Menu.Item>
			            	<a href="#" className="menuElements" onClick={this.toggle}>Github</a>
			            </Menu.Item>
			            <Menu.Item>
			            	<Button onClick={this.signOut.bind(this)}>LogOut</Button>
			            </Menu.Item>
			          </Sidebar>
			          <Sidebar.Pusher className="sem">
			            <Segment basic>
			                <div className="GridSection">
							<Sidebar/>
								<Switch>
									<div >
										{/*<--to pass custom props inside Route we need to return the component and use render inplace of component>
										//<https://github.com/ReactTraining/react-router/issues/4105  for reference>*/}
										<Route exact path="/albums" render={props => <Albums albumId={this.state.albumId} changeReq={this.changeReq} changeAlbumId={this.changeAlbumId} {...props}/>} />
										<Route exact path="/radio" component={Radio} />
										<Route exact path="/artists" render={props => <Artists artistId={this.state.artistId} changeReq={this.changeReq} changeArtistId={this.changeArtistId} {...props}/>} />
										<Route exact path="/aboutus" component={AboutUs} />
			              				<Route exact path="/g/:albid" render={props => <AlbumSongList changeReq={this.changeReq} {...props}/>} />
			              				<Route exact path="/a/:artid" render={props => <ArtistSongList changeReq={this.changeReq} {...props}/>} />
										<Route path="/randomplay" render={props => <RandomPlay changeReq={this.changeReq} {...props} />} />	
			            			</div>
								</Switch>
							</div>
							<MusicPlayer current={this.state.current} src={this.state.src}/>
			            </Segment>
			          </Sidebar.Pusher>
			        </Sidebar.Pushable>
					
			      </div>
				:
				<Login/>
			}
			</div>
		);
	}
}

export default App;
