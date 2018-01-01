import React,{ Component} from 'react';
import { Icon } from'semantic-ui-react';


class MusicPlayer extends Component{

    constructor(props){
        super(props)
        this.state={
            current:this.props.current,
            playing:false,
            audio:null
        }
    this.toggle=this.toggle.bind(this)
    this.nextSong=this.nextSong.bind(this)
    }

    nextSong(){
        this.setState((prevState)=>({current:prevState.current+1}),()=>{
        var play = this.props.src[this.state.current]
        this.state.audio.pause()
        var audio = new Audio(play.audio)
        audio.play()
        this.setState({audio})})
    }

    toggle(){
        if(!this.state.playing){
        var play = this.props.src[this.state.current]
        var audio = new Audio(play.audio)
        audio.play()
        this.setState({playing:true,audio})
        }
        else {
            this.state.audio.pause()
            this.setState({playing:false,audio:null})
        }
    }


    render(){
        return(
            <div>
                <button onClick={this.toggle}>
                    {this.state.playing?<Icon name = 'pause' />:<Icon name = 'play' />}
                </button>
                <button onClick={this.nextSong}>
                next
                </button>
            </div>
        )
    }
}

export default MusicPlayer 