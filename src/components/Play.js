import React,{ Component } from 'react';
import * as FontAwesome from 'react-icons/lib/fa';

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
              <button onClick={(e) => this.playFun(this.state.url, e)}>
                {this.state.playing?<FontAwesome.FaPause size={20}/>:<FontAwesome.FaPlay size={20}/>}
              </button>
          </div>
      )
    }
}


export default Play;