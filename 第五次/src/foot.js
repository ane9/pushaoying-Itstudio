import React from 'react';
import './foot.scss';
import one from "./abc2.png"
class Foot extends React.Component{
    render(){
        return(
            <div className={'foot'}>
            <div id={'footSmall'}>
                <img src={one}></img>
                <div id={'footL'}>
                    ITStudio<span>  · Contribute the Future</span>
                </div>
                <div id={'footR'}>
                    <ul>
                    <li>鲁ICP备XXXXXXXXX号 山</li>
                    <li>山东省青岛市</li>
                    <li>中国海洋大学</li>
                    <li id={'footli4'}>信息科学与工程学院北</li>
                    <li>© 2019 ITStudio All Right Reserved.</li>
                    </ul>
                </div>
            </div>

            </div>
        )
    }
}
export default Foot;