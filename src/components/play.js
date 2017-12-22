import React,{ Component } from 'react';

class Play extends Component(){
    constructor(props){
        super(props)
        this.state={
          playingUrl:'',
          audio:null,
          playing:false
        }
        this.play=this.play.bind(this);
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
              if(this.state.playingUrl===url){
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


  render(){
    return(
        
        <div>
            {console.log(this.props.url)}
            <button onClick={this.play(this.props.url)}>Play</button>
        </div>
    )
      }
}

Play.defaultProps = {
  url: null
};
export default Play;