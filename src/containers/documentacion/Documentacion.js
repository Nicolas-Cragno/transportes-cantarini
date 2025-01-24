import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Documentacion() {
  return (
    <Container>
          <Row>
            <Col md={3} className='leftCol'>
              <ListGroup as="ul">
                <Link to={'/documentacion'} className='listLink'>PUERTO TERMINAL</Link>
              </ListGroup>
            </Col>
          </Row>
        </Container>
  )
}
