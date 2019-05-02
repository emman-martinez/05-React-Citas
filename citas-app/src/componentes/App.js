import React, { Component } from 'react';
import Header from './Header';
import AgregarCita from './AgregarCita';
import Imagen from './Imagen';

class App extends Component {

  state = {
    citas: []
  }

  crearCita = (nuevaCita) => {
    // console.log('Desde app.js');
    //console.log(cita); // Viene de Formulario
    const citas = [...this.state.citas, nuevaCita]; // Copia del state
    console.log(citas);

    this.setState({
      citas: citas,
    })
  }

  render(){
    return(
      <div className="App container">
        {/* ***** Componente: Header ***** */}
        <Header
                titulo={'Administrador de Pacientes de Veterinaria'}
        ></Header>
        {/* ***** Componente: Agregar Cita ***** */}
        <div className="row">
          <div className="col-md-6">
            <AgregarCita
                          crearCita={this.crearCita}
            ></AgregarCita>
          </div>
        </div>
        {/* ***** Componente: Imagen ***** */}
        <div className="row">
          <div className="col-md-4 centro">
            <Imagen></Imagen>
          </div>
          <div className="col-md-4 centro">
            <h1 className='tamaño'>React</h1>
          </div>
          <div className="col-md-4 centro">
            <Imagen></Imagen>
          </div>
        </div>
      </div>
    )
  }
}

/*
function App() {
  return (
    
  );
}
*/

export default App;
