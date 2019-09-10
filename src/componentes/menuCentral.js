import React, { Component } from 'react';
import { Menu } from 'grommet';
import { Dropdown } from 'semantic-ui-react'


import './styles/menuCentral.css';

class MenuCentral extends Component {
  render(){
    const options = [
      { key: 1, text: 'INSTALACIONES', value: 1 },
      { key: 2, text: 'CLUBES', value: 2 },
      { key: 3, text: 'DIRECTORIO', value: 1 },
      { key: 4, text: 'CALENDARIO', value: 2 },
    ]

    return(
      <div className="div-principalMenuCentral">
        <img className="img-menuCentral-header" src="http://arandas.tecmm.edu.mx/imagenes/header-menuCentral.jpg"/>
        <img className="img-menuCentral-nombre" src="http://arandas.tecmm.edu.mx/imagenes/arandas.png"/>

        <div className="menuCentral">

          <a>
            <Dropdown style={{color:"grey"}} text='SOMOS TECMM' options={options} />
          </a>

          <a href="http://controlescolar.tecmm.edu.mx">ADMISIÓN</a>
          <a href="http://tecmm.edu.mx/#/vidaEstudiantil">VIDA ESTUDIANTIL</a>
          <a href="http://vinculacion.tecmm.edu.mx/">VINCULACION</a>
          <a href="http://www.areaacademica.tecmm.edu.mx/">ÁREA ACADÉMICA</a>
          <a href="http://tecmm.edu.mx/#/contacto">CONTACTO</a>
          <a href="http://tecmm.edu.mx/#/igualdad">SGIG</a>
          <a href="http://tecmm.edu.mx/#/quejasYdenuncias">QUEJAS Y DENUNCIAS</a>

        </div>
      </div>
    );
  }
}

export default MenuCentral;
