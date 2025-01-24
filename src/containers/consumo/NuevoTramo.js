import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export default function NuevoTramo() {
  return (
    <div className='nuevoTramo'>
        <Container>
            <Row>
                <Col md={11}>
                    <h5>1 CARGA</h5>
                </Col>
                <Col md={1} className='right'>
                    <button className='deleteBtn'></button>
                </Col>
                <Col md={4}>
                    <Row>
                        <Col xs={12}>
                            <label>Litros</label>
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
                        <input type='decimal' className='shortInput'/>
                        </Col>
                    </Row>
                </Col>
                <Col md={4}>
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
        </Container>
    </div>
  )
}
