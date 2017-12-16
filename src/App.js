import React,{Component} from 'react';
import Albums from './components/Albums';
import Sidebar from './components/Sidebar';
class App extends Component{
	render(){
		// Api.GetAlbums;
		return(
		<div>
		<Sidebar/>
			<Albums/>
		</div>
		)
	}
}

export default App;
