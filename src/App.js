import React,{Component} from 'react';
import Albums from './components/Albums';
import Sidebar from './components/Sidebar';
import Radio from './components/Radio';
import Artists from './components/Artists';
import AboutUs from './components/AboutUs';
import { Switch,Route } from 'react-router-dom';
class App extends Component{
	render(){
		// Api.GetAlbums;
		return(
		<div>
		<Sidebar/>
			<Switch>
				<div className="GridSection">
					<Route exact path="/albums" component={Albums} />
					<Route exact path="/radio" component={Radio} />
					<Route exact path="/artists" component={Artists} />
					<Route exact path="/aboutus" component={AboutUs} />
				</div>
			</Switch>
		</div>
		)
	}
}

export default App;
