import React, { Component } from 'react';
import { Menu } from 'grommet';
import { Dropdown } from 'semantic-ui-react'


import './styles/menuCentral.css';

class MenuCentral extends Component {

  constructor(){
    super();
    this.state={
      width:0
    }
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  openMenu(e){
    this.setState({
      width:"100%"
    })
  }

  closeMenu(e){
    this.setState({
      width:"0px"
    })
  }

  render(){
    const options = [
      { key: 1, text: 'INSTALACIONES', value: "http://arandas.tecmm.edu.mx/imagenes/header-menuCentral.jpg" },
      { key: 2, text: 'CLUBES', value: 2 },
      { key: 3, text: 'DIRECTORIO', value: 1 },
      { key: 4, text: 'CALENDARIO', value: 2 },
    ]

    const styleDrawer = {
      width:this.state.width
    }

    return(
      <div className="div-principalMenuCentral">

        {/*MENU MOVIL*/}
          <div style={styleDrawer} id="mySidenav" class="sidenav">
            <img class="tecmmicon" src="http://tecmm.edu.mx/imagesReact/images/logo-tecmm.png"/>
            <a class="closebtn" onClick={this.closeMenu.bind(this)}>&times;</a>
            <a>
              SOMOS TECMM
              <ul>
                <li>
                  <a>opcion</a>
                </li>

                <li>
                  <a>opcion 2</a>
                </li>

                <li>
                  <a>opcion 3</a>
                </li>
              </ul>
            </a>

            <a href="http://controlescolar.tecmm.edu.mx">ADMISIÓN</a>
            <a href="http://tecmm.edu.mx/#/vidaEstudiantil">VIDA ESTUDIANTIL</a>
            <a href="http://vinculacion.tecmm.edu.mx/">VINCULACION</a>
            <a href="http://www.areaacademica.tecmm.edu.mx/">ÁREA ACADÉMICA</a>
            <a href="http://tecmm.edu.mx/#/contacto">CONTACTO</a>
            <a href="http://tecmm.edu.mx/#/igualdad">SGIG</a>
            <a href="http://tecmm.edu.mx/#/quejasYdenuncias">QUEJAS Y DENUNCIAS</a>
          </div>
          <span className="span-menuMovilButton" onClick={this.openMenu.bind(this)}>&#9776;</span>
        {/*MENU MOVIL*/}

        {/*MENU CENTRAL ESCRITORIO*/}
        <a href="#/">
          <img className="img-menuCentral-header" src="http://arandas.tecmm.edu.mx/imagenes/header-menuCentral.jpg"/>
        </a>
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
