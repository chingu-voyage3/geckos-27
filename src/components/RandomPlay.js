import React,{ Component} from 'react';
import Play from './Play'
import '../style.css';
import Download from './Download';
import MusicPlayer from './MusicPlayer';
import ReactDOM from 'react-dom'

const apiLink = 'https://api.jamendo.com/v3.0';
const apiFormat = '?client_id=5adf7db0&format=jsonpretty';


class RandomPlay extends Component{
  constructor(){
    super()
    this.state={
      result:[],
    }
    this.renderMusicPlayer=this.renderMusicPlayer.bind(this)
  }

  componentDidMount(){
    fetch(`${apiLink}/tracks/${apiFormat}`)
    .then((data)=>data.json())
    .then((d)=>this.setState({result:d.results}))
  }

  renderMusicPlayer(index){
    console.log('render called')
    ReactDOM.render(<MusicPlayer src={this.state.result} current={index}/>,document.getElementById('musicPlayer'))
  }

  render(){
    return(
      <div>
    <div className='Grid'>
      {this.state.result.map((song, index)=>(
        <div className="GridItem" key={song.id} >
          <div className="itembox" >
            <h6>{song.name}</h6>
            <img src={song.image} alt={song.shorturl} />
            <button onClick={()=>this.renderMusicPlayer(index)}>play</button>
            <Play url={song.audio} />
            <Download downloadUrl={song.audiodownload} />
          </div>
        </div>
      ))}
      </div>
      <button onClick={()=>this.renderMusicPlayer(0)}>Play All</button>
    </div>
  )
      }
}


export default RandomPlay;
