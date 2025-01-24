import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RegistrarViaje from './RegistrarViaje';

export default function Consumo() {
  const mostrar = (valor) => {
    let opcion1 = document.getElementById("firstOption");
    let opcion2 = document.getElementById("secondOption");
    let opcion3 = document.getElementById("thirdOption");

    switch(valor){
      case 1:
        opcion1.style.display = "block";
        opcion2.style.display = "none";
        opcion3.style.display = "none";
      break;
      case 2:
        opcion1.style.display = "none";
        opcion2.style.display = "block";
        opcion3.style.display = "none";
      break;
      case 3:
        opcion1.style.display = "none";
        opcion2.style.display = "none";
        opcion3.style.display = "block";
      break;
      default:
        opcion1.style.display = "none";
        opcion2.style.display = "none";
        opcion3.style.display = "none";
    }
  }
  return (
    <Container>
      <Row>
        <Col md={3} className='leftCol'>
          <ListGroup as="ul">
            <Link to={'/consumo'} className='listLink' onClick={() => {mostrar(1)}}>CARGAR TRAMO</Link>
            <Link to={'/consumo'} className='listLink' onClick={() => {mostrar(2)}}>VER VIAJES</Link>
            <Link to={'/consumo'} className='listLink' onClick={() => {mostrar(3)}}>COMPARATIVAS</Link>
          </ListGroup>
        </Col>
        <Col md={9} id='firstOption' className='option firstOption'><RegistrarViaje></RegistrarViaje></Col>
        <Col md={9} id='secondOption' className='option secondOption'>OPCION 2</Col>
        <Col md={9} id='thirdOption' className='option thirdOption'>OPCION 3</Col>
      </Row>
    </Container>
  )
}
