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
    this.prevSong=this.prevSong.bind(this)
    }

    /*some info regarding the props
        two props: src and current
        src gives the array of songs to be played
        for example in https://api.jamendo.com/v3.0/artists/tracks/?client_id=5adf7db0&format=jsonpretty&name=Both
        results[0].tracks is our src

        the other prop is current which pass on the index of song to be played in src
    */

    componentWillMount(){
        if(this.props.src!==null){
            var play = this.props.src[this.state.current]
            var audio = new Audio(play.audio)
            audio.play()
            this.setState({playing:true,audio})
        }
    }

    //checking props.current change was sufficient. But had a bug in case different albums were played.
    //all events passed current as 0, but offcourse the src was different for each album
    componentWillReceiveProps(nextProps) {
        if (this.props.current !== nextProps.current||this.props.src!==nextProps.src) {
            this.setState({
                current: nextProps.current
            });
        }
    }
    //this.setState is asynchronous
    //have to pass as a callback to make sure that song play after state change has occur
    //this.setState({nextState}, callback)
    nextSong(){
        this.setState((prevState)=>({current:prevState.current+1}),()=>{
            if(this.props.src[this.state.current]!==undefined){ //this condition save from the situation when current become negative or more than index of src
                if(!this.state.playing){
                    var play = this.props.src[this.state.current]
                    var audio = new Audio(play.audio)
                    audio.play()
                    this.setState({audio})
                }
                else{
                    play = this.props.src[this.state.current]
                    this.state.audio.pause()
                    audio = new Audio(play.audio)
                    audio.play()
                    this.setState({audio})
                }
            }
        })
    }

    prevSong(){
        this.setState((prevState)=>({current:prevState.current-1}),()=>{
            if(this.props.src[this.state.current]!==undefined){
                if(!this.state.playing){
                    var play = this.props.src[this.state.current]
                    var audio = new Audio(play.audio)
                    audio.play()
                    this.setState({audio})
                }
                else{
                    play = this.props.src[this.state.current]
                    this.state.audio.pause()
                    audio = new Audio(play.audio)
                    audio.play()
                    this.setState({audio})
                }
            }
        })
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
                <button onClick={this.nextSong}><Icon name='forward' /></button>
                <button onClick={this.prevSong}><Icon name='backward' /></button>
                {this.props.src!==null&&this.props.src[this.state.current]!==undefined?
                <h4>{this.props.src[this.state.current].name}</h4>:<h4>Song name</h4>}
            </div>
        )
    }
}

export default MusicPlayer