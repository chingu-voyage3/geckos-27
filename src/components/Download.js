import React,{ Component } from 'react';
import * as FontAwesome from 'react-icons/lib/fa';

class Download extends Component{
    render(){
        return(
            <div>
                <a href={this.props.downloadUrl}><FontAwesome.FaDownload size={20}/></a>
            </div>
        )
    }
}

export default Download