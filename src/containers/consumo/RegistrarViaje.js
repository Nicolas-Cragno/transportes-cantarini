import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import NuevoTramo from './NuevoTramo';
import FormularioCargas from './FomularioCargas';

export default function RegistrarViaje() {
    /*
    const calcularConsumo = () => {
    let viaje = document.getElementById("inputViaje").value;
    let fecha = document.getElementById("inputFecha").value;
    let chofer = document.getElementById("inputChofer").value;
    let interno = document.getElementById("inputInterno").value;
    
        console.log("viaje " + viaje + "fecha " + fecha + "manejado por " + chofer + " (" + interno + ").");
    } 
    */
  return (
    <div className='registrarViaje'>
        <form>
            <Container className='newForm'>
                <Row className='newFormTop'>
                    <Row>
                        <Col md={2}>
                            <label className='shortLabel'>N° VIAJE</label>
                            <input type="text" name="" className='shortInput' id='inputViaje'/>   
                        </Col>
                        <Col md={3}>
                            <label className='shortLabel'>FECHA</label>
                            <input type='date' name="date" className='mediumInput' id='inputFecha'/>
                        </Col>
                        <Col md={5}>
                            <label className='shortLabel'>CHOFER</label>
                            <input type='name' name='name' className='longInput' id='inputChofer'></input>
                        </Col>
                        <Col md={2}>
                            <label className='shortLabel'>INTERNO</label>
                            <input type='number' className='shortInput' id='inputInterno'></input>
                        </Col>
                        <hr/>
                    </Row>
                    {/* 
                    <Col md={2}>
                        <label className='shortLabel'>PATENTE</label>
                        <input type='name' className='shortInput'></input>
                    </Col>
                    <Col md={5}>
                        <label className='longLabel'>SATELITAL</label>
                        <label className='descripLabel'>MICHELIN</label>
                    </Col>
                    <hr/>
                    */}
                </Row>
                <Row className='newFormUnder'>
                    <Col md={3} className=''>
                        <h1 className='whiteText'>CONSUMO DE COMBUSTIBLE</h1>
                        <hr/>
                        <h4>TOTAL</h4>
                        <Row className='combustibleTotales'>
                            <Col md={7}>
                                <h3>2968,68</h3>
                            </Col>
                            <Col md={5}>
                                <label>lts</label>
                            </Col>
                        </Row>
                        <Row className='kmTotales'>
                            <Col md={7}>
                                <h3>2990,56</h3>
                            </Col>
                            <Col md={5}>
                                <label>kms</label>
                            </Col>
                            <hr/>
                        </Row>
                        <Row className='promedioTotal right'>
                            <Col md={5}>
                                <h3>35,6</h3>
                            </Col>
                            <Col md={7}>
                                <label>c/100</label>
                            </Col>
                            {/*
                            <button className='plusBtn' onClick={calcularConsumo}>+ CALCULAR</button>
                            */}
                        </Row>
                        
                    </Col>
                    <Col md={9}>
                            <NuevoTramo></NuevoTramo><br/>
                            <FormularioCargas></FormularioCargas>
                    </Col>
                </Row>
            </Container>
        </form>
    </div>
  )
}
