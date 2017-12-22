import React,{ Component} from 'react';
import Play from './play'
import '../style.css';

const apiLink = 'https://api.jamendo.com/v3.0';
const apiFormat = '?client_id=5adf7db0&format=jsonpretty';


class RandomPlay extends Component{
constructor(){
  super()
  this.state={
    result:[],
  }

}

  

  componentDidMount(){
    fetch(`${apiLink}/tracks/${apiFormat}`)
    .then((data)=>data.json())
    .then((d)=>this.setState({result:d.results}))
  }


  render(){
    return(
    <div className='Grid'>
      {this.state.result.map(song=>(
        <div className="GridItem" key={song.id} >
          <div className="itembox" >
            <h6>{song.name}</h6>
            <img src={song.image} alt={song.shorturl} />
            <Play url='songs.audio' />
          </div>
        </div>
      ))}
    </div>
  )
      }
}


export default RandomPlay;
