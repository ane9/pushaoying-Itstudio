import React from 'react';
import './title.scss'
class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            <div className={'up'}>
                            {this.props.blue}<span>{this.props.grey}</span>
                        </div>
                <div className={'down'}>
                           {this.props.orange}
                        </div>
            </div>
         );
    }
}
 
export default Title;