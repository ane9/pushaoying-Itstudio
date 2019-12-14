import React from 'react';
import './introduce.css';
const intruduceDetail=['我是一个单页应用', 
'我是一个设计非常美观，实用性非常强的网页', 
'是一个特别帅的人写的网页','嘤嘤嘤']
class Introduce extends React.Component {
    choose=(a)=>{
        return intruduceDetail[a<3?a:3]
    };
    render(){
    return(
        <div id={'content'}>
            {this.choose(this.props.a)}
        </div>
    )
  }
}
export default Introduce;