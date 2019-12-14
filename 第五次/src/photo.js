import React from 'react';
import './photo.scss';
class Photo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <div className={'photo'}>
              {/* {
                (() => {
                  try {
                    console.log(this.props.small[0])
                  } catch (error) {
                    console.log(error)
                  }
                })()
              }
              <div>
                {
                  // this.props.small[0]
                }
                </div> */}
                <div className={'photoSmall'} id={this.props.A}>
                    <div className='photoSmallA' >
                      <div className={this.props.sharpL}></div>
                      <div className={this.props.F}></div>
                    <span>{this.props.wordB[5]}</span>
                    </div>
                    <div className={'photoWord'}>
                        {this.props.wordB[0]}
                    </div>
                </div>
                <div className={'photoSmall'} id={this.props.B}>
                    {/* <img id={this.props.photoSmllImg}></img> */}
                    <div className='photoSmallA'>
                    <div className={this.props.B}></div>
                        <span>{this.props.wordB[6]}</span>
                    </div>
                    <div className={'photoWord'} >
                      {this.props.wordB[1]}
                    </div>
                </div>
                <div className={'photoSmall'} id={this.props.C}>
                    {/* <img id={this.props.photoSmllImg}></img> */}
                    <div className={'photoSmallA'}>
                    <div className={this.props.C}></div>
                      <span>{this.props.wordB[7]}</span>
                    </div>
                    <div className={'photoWord'}>
                      {this.props.wordB[2]}
                    </div>
                </div>
                <div className={'photoSmall'} id={this.props.D}>
                    {/* <img id={this.props.photoSmllImg}></img> */}
                    <div className={'photoSmallA'}>
                    <div className={this.props.D}></div>
                      <span>{this.props.wordB[8]}</span>
                    </div>
                    <div className={'photoWord'}>
                      {this.props.wordB[3]}
                    </div>
                </div>
                <div className={'photoSmall'} id={this.props.E}>
                    {/* <img id={this.props.photoSmllImg}></img> */}
                    <div className={'photoSmallA'}>
                    <div className={this.props.sharpR}></div>
                    <div className={this.props.E}></div>
                       <span>{this.props.wordB[9]}</span>
                    </div>
                    <div className={'photoWord'}>
                      {this.props.wordB[4]}
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Photo;