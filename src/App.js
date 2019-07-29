import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import { PropagateLoader } from 'react-spinners';
import { Menu, Icon, Tooltip, message, Button } from 'antd';

import Indicadores from './components/indicador/indicadores.component';
import Tickets from './components/tickets.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
      pathname: '',
      session_id: undefined,
      _usuario: undefined,
      accesos: {},
      modulos: {},
      departamentos: [],
      rol: null,
      soporte: null
    }
  }

  componentWillMount() {
    this.setState({ pathname: '/' });
  }

  render() {

    const { session_id, pathname, cargando, _usuario, accesos, modulos, departamentos, rol, soporte } = this.state;
    return (
      <HashRouter>
        <div style={{ display: "flex", width: "100%", height: "100vh" }} >
          <div style={{ display: "flex", width: "100%", height: "100%" }} >
            <div style={{ width: "20%", height: "100%", background: "white" }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={["pathname"]}
                style={{ height: '100%' }}
              >
                <Menu.Item key="0">
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'row', padding: '10px', textAlign: 'left' }}>
                    <h3>Menú Principal</h3>
                    <div style={{ display: 'flex', flex: 1, justifyContent: 'flex-end' }}>
                      <Tooltip title="Cerrar Sesión">
                        <Button disabled={cargando} type="primary" onClick={() => { this.cerrarSession() }}>
                          <Icon type="logout" />
                        </Button>
                      </Tooltip>
                    </div>
                  </div>
                </Menu.Item>
                <Menu.Item key="/"><Link to="" onClick={() => { this.setState({ pathname: "/" }) }}><Icon type="dashboard" />Indicadores</Link></Menu.Item>
                <Menu.Item key="/tickets"><Link to="tickets" onClick={() => { this.setState({ pathname: "/tickets" }) }}><Icon type="dashboard" />Tickets</Link></Menu.Item>
              </Menu>
            </div>
            <div style={{ display: 'flex', flex: 1, width: "80%", height: "100%" }}>
              <Route path="/" exact render={() =>
                <Indicadores _usuario={_usuario} accesos={accesos} departamentos={departamentos} rol={rol} />
              } />
               <Route path="/tickets" render={() =>
                <Tickets _usuario={_usuario} accesos={accesos} departamentos={departamentos} rol={rol} />
              } />
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }

  async cerrarSession() {
    console.log("cerrar sesion");
  }
}

export default App;