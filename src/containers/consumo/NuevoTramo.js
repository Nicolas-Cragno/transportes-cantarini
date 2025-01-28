import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default function NuevoTramo(props) {
    const { nroTramo } = props;
  return (
    <div className='nuevoTramo'>
        <Container>
            <Row>
                <Col md={1} className='centrado'>
                    <h3>{nroTramo}</h3>
                </Col>
                <Col md={11}>
                    <Row>
                        <Col md={4}>
                            <Row>
                                <Col xs={12}>
                                    <label>Fecha</label>
                                </Col>
                                <Col xs={12}>
                                <input type='date' name="date" className='mediumInput'/>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={2}>
                            <Row>
                                <Col xs={12}>
                                    <label>Litros</label>
                                </Col>
                                <Col xs={12}>
                                <input type='decimal' className='shortInput' id='cantidadLitros' defaultValue={'0'}/>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={3}>
                            <Row>
                                <Col xs={12}>
                                    <label>Lugar</label>
                                </Col>
                                <Col xs={12}>
                                <input type='name' name='place' className='specialInput'/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                
            </Row>
        </Container>
    </div>
  )
}
