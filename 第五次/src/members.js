import React from 'react';
import Title from './title';
import Detail from './detail';
import Photo from './photo';
//mport './members.scss';
class Members extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            blue:'成员介绍',
            grey:'Members',
            orange:'一身才华，每刻迸发',
            wordB:[
                '2014级','2015级','2016级','2017级','2018级','14’','15’','16’','17’','18’',
            ],
            black:[
                '每一届爱特人都身怀绝技，在每一刻都能迸发出奇思妙想。用双手解决一切难题，是极客的通行证。',
                '加入我们，和这些有趣又万能的灵魂在一起，把思考与责任铭记于心，把对技艺的热爱传承下去。'
            ],
            A:'photoSmalla', B:'photoSmallb', C:'photoSmallc', D:'photoSmalld', E:'photoSmalle',
            // wordA:['14’','15’','16’','17’','18’',]
            sharpL:'sharpL',sharpR:'sharpR',
            small:['1','2']
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
                <Photo wordB={this.state.wordB}
                small={this.state.small}
                // wordA={this.state.wordA}
                A={this.state.A}
                B={this.state.B}
                C={this.state.C}
                D={this.state.D}
                E={this.state.E}
                sharpL={this.state.sharpL}
                sharpR={this.state.sharpR}
                ></Photo>
            </div>
         );
    }
}
 
export default Members;