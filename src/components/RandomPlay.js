import React,{Component} from 'react';
import '../style.css';
const apiLink = 'https://api.jamendo.com/v3.0';
const apiFormat = '?client_id=5adf7db0&format=jsonpretty';


class RandomPlay extends Component{
constructor(props){
  super(props)
  this.state={
    result:[],
    playingUrl:'',
    audio:null,
    playing:false
  }

}

  play(url){
      let audio= new Audio(url);
      if(!this.state.playing){
        audio.play()
        this.setState({
          playing:true,
          playingUrl:url,
          audio
        })
      }
      else{
        if(this.state.playingUrl==url){
          this.state.audio.pause();
          this.setState({
            playing:false,
            audio:null,
            playingUrl:''
          })
        }
        else{
          this.state.audio.pause();
          audio.play()
          this.setState({
            playing:true,
            audio:audio,
            playingUrl:url
          })
        }
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
        <div className="GridItem" onClick={(event)=>this.play(song.audio)} key={song.id} >
          <div className="itembox" >
            <h6>{song.name}</h6>
            <img src={song.image} alt={song.shorturl}></img>
          </div>
        </div>
      ))}
    </div>
  )
      }
}


export default RandomPlay;
