import React from 'react';
import Navigation from './navigation';
import Foot from './foot';
import AboutUs from './aboutUs';
import Departments from './departments';
import Members from './members';
import Zeitgeist from './zeitgeist';
import Works from './works';
import Comments from './comments';
class Father extends React.Component{
    render(){
      return(
        <div id={"container"}>
          <Navigation></Navigation>
          <AboutUs></AboutUs>
          <Departments></Departments>
          <Members></Members>
          <Zeitgeist></Zeitgeist>
          <Works></Works>
          <Comments></Comments>
          <Foot></Foot>
        </div>
        
      )
    }
}
export default Father;