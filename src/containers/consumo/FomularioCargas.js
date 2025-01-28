    import React from 'react';
    import { Container, Row, Col } from 'react-bootstrap';
    
    export default function FomularioCargas() {
      return (
        <div className='formularioCargas'>
            <Container>
                        <Row>
                            <Col md={1} className='centrado'>
                                <h3>1</h3>
                            </Col>
                            <Col md={11}>
                                <Row>
                                    <Col md={3}>
                                        <input type='date' name="date" className='mediumInput'/>
                                    </Col>
                                    <Col md={2}>
                                        <input type='decimal' className='shortInput' id='cantidadLitros' placeholder='litros'/>
                                    </Col>
                                    <Col md={7}>
                                        <input type='name' name='place' className='mediumInput' placeholder='cod postal'/>
                                        <label className='descriptLabel'>Caleta Olivia</label>
                                    </Col>
                                </Row>
                            </Col>
                            
                        </Row>
                    </Container>

        </div>
      )
    }
    