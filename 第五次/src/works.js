import React from 'react';
import Title from './title';
import Detail from './detail';
import './works.scss';
import one from './下载 (1).jfif';
import two from './下载 (2).jfif';
import three from './下载.jfif';
class Works extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            blue:'作品介绍',
            grey:'Works',
            orange:'一Code一世界，代码有乾坤',
            black:[
                'Coding是我们与世界对话的方式，技术是我们与未来沟通的语言。',
                '用键盘奏起一曲华丽乐章，调度程序去搭建理想的大厦与桥梁。'
            ]
         }
    }
    render() { 
        return ( 
            <div className={'works'}>
                <Title
                  blue={this.state.blue}
                  grey={this.state.grey}
                  orange={this.state.orange}>
                </Title>
                <Detail black={this.state.black}></Detail>
                <div className='worksCenter'>
                <div className='worksCenterLeft'>
                    <img src={two}></img>
                </div>
                <div className='worksCenterC'>
                    <img src={one}></img>
                </div>
                <div className='worksCenterRight'>
                    <img src={three}></img>
                </div>
                </div>
                <div className='worksWord'>中国海洋大学iGEM</div>
                <button>查看更多</button>
            </div>

         );
    }
}
export default Works;