import React,{Component} from 'react';
import Albums from './components/Albums';
import Sidebar from './components/Sidebar';
import Radio from './components/Radio';
import SongList from './components/Songlist';
import Artists from './components/Artists';
import AboutUs from './components/AboutUs';
import Login from './components/Login';
import { Switch,Route } from 'react-router-dom';
import fire from './fire';
class App extends Component{
	constructor(props){
		super(props);
		this.state={
			signedIn: false
		}
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
	
	render(){
		console.log(this.state);
		// Api.GetAlbums;
		return(
			<div>
				{this.state.signedIn?
				<div>
					<Sidebar/>
					<Switch>
						<div className="GridSection">
							<Route exact path="/albums" component={Albums} />
							<Route exact path="/radio" component={Radio} />
							<Route exact path="/artists" component={Artists} />
							<Route exact path="/aboutus" component={AboutUs} />
							<Route exact path="/g/:albid" component={SongList}/>

						</div>
					</Switch>
				</div>:
				<Login/>
			}
			</div>
		);
	}
}

export default App;
