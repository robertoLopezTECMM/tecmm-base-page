import React, { Component } from 'react';


import './styles/enlaces.css';

class Enlaces extends Component {

  constructor(props){
    super();
    this.state={

    }
  }

  render() {

     return (
       <div className="div-principalEnlaces">
        <h1>ENLACES</h1>
        <img src="http://tecmm.edu.mx/imagenesCampus/sice.png"/>
        <img style={{marginLeft:"5px", marginRight:"5px"}} src="http://tecmm.edu.mx/imagenesCampus/moodle.png"/>

        <img style={{marginRight:"5px"}}  src="http://tecmm.edu.mx/imagenesCampus/convocatorias.JPG"/>
        <img src="http://tecmm.edu.mx/imagenesCampus/posgrados.JPG"/>

       </div>
     );
   }
 }

export default Enlaces;
