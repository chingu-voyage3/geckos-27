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

class App extends Component{
	constructor(props){
		super(props);
		this.state={
			signedIn: false,
			visible:false
		}
	}
	signOut(){
		fire.auth().signOut().then(()=>{
			console.log("Signed out.")
		}).catch((err)=>{
			console.log(err);
		})
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
										<Route exact path="/albums" component={Albums} />
										<Route exact path="/radio" component={Radio} />
										<Route exact path="/artists" component={Artists} />
										<Route exact path="/aboutus" component={AboutUs} />
			              				<Route exact path="/g/:albid" component={AlbumSongList}/>
			              				<Route exact path="/a/:artid" component={ArtistSongList}/>
										<Route exact path="/randomplay" component={RandomPlay} />
			            			</div>
								</Switch>
							</div>
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
