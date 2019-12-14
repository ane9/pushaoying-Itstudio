import React from 'react';
import './a.scss';
import video from './2plxj.mp4';
class Navigation extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:['部门','成员','历史','作品','留言']
        }
    }
        render(){
            return(
                <div>
                <div className={'navigation'}>
                    <div className={'navigationLeft'}>
                        <div className={'navigationLeftImg'}></div>
                        <div className={'navigationLeftWord'}>
                            <p className={'navigationLeftWordOne'}>ITStudio</p>
                            <p className={'navigationLeftWordTwo'}>爱特工作室</p>

                        </div>

                    </div>
                    <ul className={'navigationRight'}>
                        {
                            this.state.list.map((item,index)=>{
                                return<li key={index}>
                                    <a>{item}</a>
                                </li>
                            })
                        }
                    </ul>
                    <div className={'join'}>加入</div>
                </div>
                <div className={'navigationPhoto'}>
                    {/* <video src={video} ></video> */}
                    <div className={'navigationPhotoWord'}>
                        <p id={'p'}><span id={'a'}>Creat(</span>
                        <span id={'b'}>Future</span>
                        <span id={'c'}>);</span></p>
                        <p id={'p'}><span id={'d'}>//以灵感 够未来</span></p>
                    </div>
                </div>
                </div>
                )
            }
        
}
export default Navigation;