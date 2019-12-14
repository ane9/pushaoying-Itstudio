import React from 'react';
import './detail.scss';
class Details extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className={'detail'}>
                <div id={'detailOne'}>{this.props.black[0]}</div>
                <div id={'detailTwo'}>{this.props.black[1]}</div>
            </div> 
         );
    }
}
 
export default Details;