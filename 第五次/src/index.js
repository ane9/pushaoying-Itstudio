import React from 'react';
import ReactDOM from 'react-dom';
import './container.css';
import Father from './father';
//import './a.scss';
// class Father extends React.Component{
//     render(){
//       return(
//         <div id={"container"}>
//           <Navigation></Navigation>
//         </div>
        
//       )
//     }
// }
  
  ReactDOM.render(
    <Father />,
    document.getElementById('root')
  );