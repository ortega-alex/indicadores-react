import React, { Component } from 'react';

import { Button, Progress, Icon, Rate, Tooltip } from 'antd';

class Targeta extends Component {

  constructor(props) {
    super(props);   
  }

  render() {

    const { tecnico } = this.props;

    return (
      <Button
        onClick={() => { this.props.visualizarTicketAbierta(tecnico) }}
        style={{
          alignItems: 'center',
          textAlign: 'center',
          backgroundColor: 'white',
          boxShadow: '0px 1px 4px #909497',
          borderRadius: 10,
          border: 'none',
          borderColor: 'black',
          outline: 'none',
          padding: '5px',
          height: '125px',
          width: '100%',
        }}>

        <div style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ display: 'flex', flex: 1, flexDirection: 'row', width: '30%', height: '100%', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
            <Tooltip title={tecnico.nombre}>
              <img src={tecnico.img} alt="actico" height="100px" />
            </Tooltip>
            <Tooltip title='Estado del tecnico'>
              <Icon type="login" style={{ position: 'absolute', top: 10, left: 10, color: tecnico.estado, fontSize: 15 }} />
            </Tooltip>
          </div>
          <div style={{ width: '60%', height: '100%' }}>
            <div style={{ width: '100%', height: '100%', whiteSpace: 'pre-wrap', textAlign: 'left', fontSize: 10 }}>
              Asignados
              <Progress percent={tecnico.asignados} size="small" format={() => tecnico.asignados} />
            </div>
            <div style={{ width: '100%', height: '100%', whiteSpace: 'pre-wrap', textAlign: 'left', fontSize: 10 }}>
              Resueltos
              <Progress percent={tecnico.resueltos} size="small" status="active" format={() => tecnico.resueltos} strokeColor={'#87d068'} />
            </div>
            <div style={{ width: '100%', height: '100%', whiteSpace: 'pre-wrap', textAlign: 'left', fontSize: 10 }}>
              <Tooltip title='Promedio de calificacion por tickets'>
                Calificacion
                <br />
                <Rate allowHalf defaultValue={tecnico.promedio} disabled style={{ textAlign: 'center' }} />
              </Tooltip>
            </div>
          </div>
        </div>
      </Button>
    )
  } 
}

export default Targeta;