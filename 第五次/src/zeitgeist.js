import React from 'react';
import Title from './title';
import './zeitgeist.scss';
class Zeitgeist extends React.Component {
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
            <div className={'zeitgeist'}>
                <Title
                  blue={this.state.blue}
                  grey={this.state.grey}
                  orange={this.state.orange}>
                </Title>
                <div className='zeitgeistCencer'>
                    <div className='zeitgeistCencerSmall'>
                        <div className='zeitgeistCencerSmallContain'>
                        <div className='zeitgeistCencerSmallTitle'>重构信息科学与工程学</div>
                        <div className='zeitgeistCencerSmallDetail'>重构信息科学与工程学院网站, 成功上线运行</div>
                        </div>
                    </div>
                </div>
                <div className='zeitgeistBottom'>
                    <div className='triangle'></div>
                    <div className='zeitgeistBottomSmall' id='zeitgeistBottomSmallA'> 2014</div>
                    <div className='zeitgeistBottomSmall' id='zeitgeistBottomSmallB'> 2015</div>
                    <div className='zeitgeistBottomSmall' id='zeitgeistBottomSmallC'> 2016</div>
                    <div className='zeitgeistBottomSmall' id='zeitgeistBottomSmallD'> 2017</div>
                    <div className='zeitgeistBottomSmall' id='zeitgeistBottomSmallE'> 2018</div>
                </div>
            </div>
         );
    }
}
 
export default Zeitgeist;