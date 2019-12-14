import React from 'react';
import Title from './title';
import Detail from './detail';
import Photo from './photo';
import './departments.scss';
class Departments extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            blue:'部门介绍',
            grey:'Departments',
            orange:'五大门派，总有你热爱',
            wordB:[
                '程序开发','前端开发','UI设计','APP开发','游戏开发'
            ],
            black:[
                '爱特工作室现在拥有五个部门，分别为：UI设计，前端开发，程序开发，APP开发和游戏开发。',
                '多样的部门满足丰富的兴趣。在这里，不论年龄，不论性别，只要你有一颗学技术的心，爱特工作室总能给予你惊喜！'
            ],
            A:'photoSmallA', B:'photoSmallB', C:'photoSmallC', D:'photoSmallD', E:'photoSmallE',F:'photoSmallF',
            // photoSmall:[
            //     '"photoSmallA"','"photoSmallB"','"photoSmallC"','"photoSmallD"','"photoSmallE"'
            // ]
         }
    }
    render() { 
        return ( 
            <div className={'departments'}>
                <Title
                  blue={this.state.blue}
                  grey={this.state.grey}
                  orange={this.state.orange}>
                </Title>
                <Detail black={this.state.black}></Detail>
                <Photo 
                   wordB={this.state.wordB}
                   A={this.state.A}
                   B={this.state.B}
                   C={this.state.C}
                   D={this.state.D}
                   E={this.state.E}
                   E={this.state.E}
                   F={this.state.F}
                ></Photo>
            </div>
         );
    }
}
 
export default Departments;