import React from 'react';
import Title from './title';
import './comments.scss';
import one from './captcha.png'
class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            blue:'历史介绍',
            grey:'Zeitgeist',
            orange:'玩转技术世界',
         }
    }
    render() { 
        return ( 
            <div className={'comments'}>
                <Title
                  blue={this.state.blue}
                  grey={this.state.grey}
                  orange={this.state.orange}>
                </Title>
                <div className='commentsCenter'>
                    <div className='commentsCenterLeft'>
                       <div className='commentsCenterLeftS'>
                           <div className='commentsCenterLeftSS'>abc</div>
                           <div className='commentsCenterLeftSB'>2019-08-30 14:50:40</div>
                       </div>
                       <div className='commentsCenterLeftS'>
                           <div className='commentsCenterLeftSS'>abc</div>
                           <div className='commentsCenterLeftSB'>2019-08-30 14:50:40</div>
                       </div>
                       <div className='commentsCenterLeftS'>
                           <div className='commentsCenterLeftSS'>abc</div>
                           <div className='commentsCenterLeftSB'>2019-08-30 14:50:40</div>
                       </div>
                    </div>
                    <div className='commentsCenterC'>
                        <div className='commentsCenterCSmall'></div>
                    </div>
                    <div className='commentsCenterRight'>
                        <span>0/80</span>
                        <textarea className="commentsCenterRightOne" placeholder='写点什么...'></textarea>
                        <div className="commentsCenterRightTwo">
                            <img src={one}></img>
                            <input placeholder='验证码' ></input>
                            <button >发送</button>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Comments;