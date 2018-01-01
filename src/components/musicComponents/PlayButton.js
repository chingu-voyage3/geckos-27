import React,{ Component} from 'react';
import { Icon } from'semantic-ui-react';

class PlayButton extends Component{
    
    render(){
        return(
            <div>
                <button onClick={this.props.toggle}>
                {this.props.playing?<Icon name = 'pause' />:<Icon name = 'play' />}
                </button>
            </div>
        )
    }
}

export default PlayButton