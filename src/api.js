import React from 'react';

const api = 'https://api.jamendo.com/v3.0';
const apiFormat = '?client_id=5adf7db0&format=jsonpretty';

class Api extends React.Component{
	const getAlbums = () =>{
		fetch(`${api}/albums/${apiFormat}`).then(res => res.json()).then(d => console.log(d.results));
	}

}

export default Api;