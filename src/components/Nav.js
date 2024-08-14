import React from "react";
import { Navbar, Container, Nav  } from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useQuery } from 'react-query';
const Navigation = () =>{
  

  let result = useQuery('작명', () => {
    return axios.get('https://codingapple1.github.io/userdata.json').then((res) => {
      return res.data
    })
  })

  



  return(
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>Shop</Navbar.Brand>
        <Nav className="me-auto">
          <Link to={'/'} className="mgr16">Home</Link>  
          <Link to={'/product'} className="mgr16">Product</Link>  
          <Link to={'/cart'}>Cart</Link>  
        </Nav>
        <Nav className="ms-auto" style={{color: '#fff'}}>
          {result.isLoading && '로딩중'}
          {result.error && 'error!!'}
          {result.data && result.data.name}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation