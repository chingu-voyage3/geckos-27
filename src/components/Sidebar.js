import React,{ Component } from 'react';
import '../style.css';
import * as FontAwesome from 'react-icons/lib/fa';
class Sidebar extends Component{
	render(){
		return(
			<div className="Side">
				<button className="spotIcon">
					<FontAwesome.FaSpotify
					size={50}/>
				</button>
				
				<h2>Findify</h2>
				<div className="menuSection">
					<form className="searchSection">
					  <label>
					    <input className="searchInput" type="text" name="name" placeholder="Search"/>
					  </label>
					  <button className="searchSubmit">
							<FontAwesome.FaSearch
							size={25}/>
					  </button>
					</form>
				</div>
				<div className="menuSection">
					<div className="sideMenu">
						<a href="#" className="menuElements">Browse</a>
						<a href="#" className="menuElements">Radio</a>
					</div>
				</div>
				<div className="menuSection">
					<div className="sideMenu">
						<a href="#" className="menuElements">Albums</a>
						<a href="#" className="menuElements">Artists</a>
					</div>
				</div>
				<div className="menuSection">
					<div className="sideMenu">
						<a href="#" className="menuElements">About Us</a>
						<a href="#" className="menuElements">Github</a>
					</div>
				</div>
				
			</div>
			
			)
	}
}

export default Sidebar;