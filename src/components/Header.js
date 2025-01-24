import React from 'react';
import '../statics/css/Header.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../statics/img/transparentTruck.png';

export default function Header() {
  return (
    <div className='appHeader'>
        <Container>
            <Row>
                <Col md={3} className='headerLeft'>
                  <Link to='/'>
                    <img src={Logo} alt='' className='headerLogo'></img>
                  </Link>
                </Col>
                <Col className='headerRight'>
                  <Link to='/documentacion' className='navBarLink'>Documentación</Link>
                  <Link to='/consumo' className='navBarLink'>Consumo</Link>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
