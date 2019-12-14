
import React from 'react';
import './aboutUs.scss';
class AboutUs extends React.Component{
    render(){
        return(
            <div className='aboutUsContainer'>
            <div className={'aboutUs'}>
                <div className={'up'}>
                            关于我们<span>About us</span>
                        </div>
                <div className={'down'}>
                            耕耘十七载，始终为技术
                        </div>
                <div className={'detail'}>
                    <img></img>
                    <div id={'detailOne'}>
                            	爱特工作室成立于2002年，是一个在中国海洋大学信息科学与工程学院院领导主持下，以计算机技术人才培养，网络开发为特色的技术性团体。
                        </div>
                    <div id={'detailTwo'}>自成立以来，爱特以发现人才，培养人才，输送人才为最终目的，现已拥有UI设计、前端开发、程序设计、Android开发、游戏设计五大类方向，数十人的技术团队。优秀的团队文化与良好的技术氛围使爱特能够脱颖而出，经过多年的发展，现已成为海大网络技术的中坚力量！</div>
                </div>
                <div id={'aboutUsChild'}>
                    <div className={'element'}>
                        <div className={'elementTitle'}>
                            <div id="elementTitleImg1"></div>
                           <div className={'up'}>
                            团队文化
                        </div> 
                           <div className={'down'}>
                            合作也是艺术
                        </div>
                        </div>
                        <p>爱特一直以聚集和培养培养计算机人才为己任，发掘技术潜力，感受合作乐趣，让项目高效执行，让大家一同进步。</p>
                    </div>
                    <div className={'element'}>
                    <div className={'elementTitle'}>
                            <div id="elementTitleImg2"></div>
                           <div className={'up'}> 
                           优秀创意
                        </div> 
                           <div className={'down'}> 
                           灵感建构未来
                        </div>
                        </div>
                        <p>用创意打磨精巧设计，用智慧实现炫酷交互；用热情呈现高效代码，以交流触碰灵感火花；以创造激发全新想象，用双手创造改变未来。</p>
                    </div>
                    <div className={'element'}><div className={'elementTitle'}>
                            <div id="elementTitleImg3"></div>
                           <div className={'up'}>
                             
                            乐在其中
                          
                        </div> 
                           <div className={'down'}>
                            
                           洞察技术玄机
                        
                        </div>
                        </div>
                        <p>汇聚技术力量，解剖程序内核，研究代码本质，巧解应用难题。以逻辑洞察数据，以细节战胜漏洞。</p></div>
                </div>
            </div>
            </div>
        )
    }
}
export default AboutUs;