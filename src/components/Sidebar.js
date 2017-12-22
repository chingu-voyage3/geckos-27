import React,{ Component } from 'react';
import '../style.css';
import * as FontAwesome from 'react-icons/lib/fa';
import { Link } from 'react-router-dom';
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
						<Link to='/' className="menuElements">Browse</Link>
						<Link to='/radio' className="menuElements">Radio</Link>
					</div>
				</div>
				<div className="menuSection">
					<div className="sideMenu">
						<Link to='/albums' className="menuElements">Albums</Link>
						<Link to='/artists' className="menuElements">Artists</Link>
						<Link to='/randomplay' className="menuElements">Most Famous</Link>
					</div>
				</div>
				<div className="menuSection">
					<div className="sideMenu">
						<Link to='/aboutus' className="menuElements">About Us</Link>
						<a href="#" className="menuElements">Github</a>
					</div>
				</div>

			</div>

			)
	}
}

export default Sidebar;
