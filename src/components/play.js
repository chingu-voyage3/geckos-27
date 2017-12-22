import React,{ Component } from 'react';

class Play extends Component{
    constructor(props){
        super(props)
        this.state={
          playing:false,
          url:this.props.url,
          audio:null
        }
        
   }
   
    playFun(url){
      if(!this.state.playing){
            let audio= new Audio(url);
              audio.play()
              this.setState({playing:true,audio})
            }
            else{
              this.state.audio.pause()
              this.setState({playing:false,audio:null})
            }
          }

        


  render(){
    return(
        <div>
            <button onClick={(e) => this.playFun(this.state.url, e)}>Play</button>
        </div>
    )
      }
    }


export default Play;