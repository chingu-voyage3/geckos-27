import React,{Component} from 'react';
import HomePage from './components/Home';
import Api from './api';
class App extends Component{
	state={
		results:''
	}
	render(){
		Api.getAlbums();
		return(
		<div>
			<HomePage/>
			set url
		</div>
		)
	}
}

export default App;
