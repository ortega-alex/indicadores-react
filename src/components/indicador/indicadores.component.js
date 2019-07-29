import React, { Component } from 'react';

import { Grid } from 'semantic-ui-react';
import Rodal from 'rodal';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';

import Trageta from './targeta.component';

var moment = require('moment');
require("moment/min/locales.min");
moment.locale('es');

class Indicadores extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal_detallede_tickets: false,
            tecnicos: [
                {
                    id: 1,
                    nombre: 'Magdalena Gonzalez',
                    img: require('../../media/img.jpg'),
                    asignados: 5,
                    resueltos: 10,
                    promedio: 4.5,
                    estado: 'red'
                },
                {
                    id: 2,
                    nombre: 'Raul ramires',
                    img: require('../../media/img2.jpg'),
                    asignados: 1,
                    resueltos: 15,
                    promedio: 4.0,
                    estado: 'red'
                },
                {
                    id: 3,
                    nombre: 'Carlos Alvisures',
                    img: require('../../media/img3.jpg'),
                    asignados: 0,
                    resueltos: 225,
                    promedio: 2.0,
                    estado: 'blue'
                }
            ],
            tecnico: {},
            detalle: [],
            detalles:
            {
                1: [
                    {
                        fecha_ini: moment().format("DD-MM-YYYY HH:mm"),
                        fecha_fin: moment().format("DD-MM-YYYY HH:mm"),
                        ticket: '20190405-12521',
                        estado: 'Asignado',
                        usuario: 'Pedro',
                        departamento: 'Bac',
                        calificacion: 5
                    },
                    {
                        fecha_ini: moment().format("DD-MM-YYYY HH:mm"),
                        fecha_fin: moment().format("DD-MM-YYYY HH:mm"),
                        ticket: '20190405-12521',
                        estado: 'Asignado',
                        usuario: 'Maria',
                        departamento: 'Promerica',
                        calificacion: 4.5
                    },
                    {
                        fecha_ini: moment().format("DD-MM-YYYY HH:mm"),
                        fecha_fin: moment().format("DD-MM-YYYY HH:mm"),
                        ticket: '20190405-12521',
                        estado: 'Asignado',
                        usuario: 'Carlos florez',
                        departamento: 'Bac',
                        calificacion: 5
                    }
                ],
                2: [
                    {
                        fecha_ini: moment().format("DD-MM-YYYY HH:mm"),
                        fecha_fin: moment().format("DD-MM-YYYY HH:mm"),
                        ticket: '20190405-12521',
                        estado: 'Asignado',
                        usuario: 'Pedro',
                        departamento: 'Bac',
                        calificacion: 5
                    }
                ],
                3: [
                    {
                        fecha_ini: moment().format("DD-MM-YYYY HH:mm"),
                        fecha_fin: moment().format("DD-MM-YYYY HH:mm"),
                        ticket: '20190405-12521',
                        estado: 'Asignado',
                        usuario: 'Pedro',
                        departamento: 'Bac',
                        calificacion: 5
                    }
                ]
            }


        }
    }

    render() {

        const { tecnicos } = this.state;

        return (
            <div>
                {this.modalDetalledeTickets()}
                <Grid className="grid" container columns={3} padded stackable>
                    {tecnicos.map((res, i) => {
                        return (
                            <Grid.Column key={i} >
                                <Trageta tecnico={res} visualizarTicketAbierta={this.visualizarTicketAbierta.bind(this)} />
                            </Grid.Column>
                        )
                    })}
                </Grid>
            </div>
        )
    }

    visualizarTicketAbierta(tecnico) {
        this.setState({ tecnico, detalle: this.state.detalles[tecnico.id], modal_detallede_tickets: true })
    }

    modalDetalledeTickets() {

        const { tecnico, detalle } = this.state;

        return (
            <Rodal
                animation={'zoom'}
                visible={this.state.modal_detallede_tickets}
                onClose={() => { this.setState({ modal_detallede_tickets: !this.state.modal_detallede_tickets }) }}
                closeMaskOnClick
                showCloseButton={true}
                customStyles={{ borderRadius: 10, height: '75%', width: '75%' }}
            >
                {(this.state.modal_detallede_tickets) &&
                    <div style={{ display: 'flex', flex: 1, flexDirection: 'column', height: '100%', width: '100%' }}>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <h2 style={{ display: 'flex', flex: 1, justifyContent: 'center', }}>
                                Tecnico: {tecnico.nombre}
                            </h2>
                        </div>
                        <div
                            className="ag-theme-balham"
                            style={{
                                height: '90%',
                                width: '100%',
                            }}
                        >
                            <AgGridReact
                                floatingFilter={true}
                                enableSorting={true}
                                animateRows={true}
                                enableColResize={true}
                                rowSelection='single'
                                onGridReady={(params) => { params.api.sizeColumnsToFit(); }}
                                rowData={detalle}>
                                <AgGridColumn headerName="Fecha Inicio" field={"fecha_ini"} />
                                <AgGridColumn headerName="Fecha Fin" field={"fecha_fin"} />
                                <AgGridColumn headerName="Ticket" field={"ticket"} />
                                <AgGridColumn headerName="Estado" field="estado" />
                                <AgGridColumn headerName="Usuario" field="usuario" />
                                <AgGridColumn headerName="Departamento" field={"departamento"} />
                                <AgGridColumn headerName="Calificacion" field={"calificacion"} />
                            </AgGridReact>
                        </div>
                    </div>
                }
            </Rodal>
        )
    }

}

export default Indicadores;
