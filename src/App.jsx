import { useState } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap';
import './App.css';

import data from './data';
import Detail from './pages/detail';


function App() {

  let [shoes, setshoes] = useState(data);
  let navigate =  useNavigate();


  return (
    <div className='App'>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail">Details</Nav.Link>
            <Nav.Link onClick={()=> { navigate('/detail') }}>navDetail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Routes>
        <Route path='/' element={ <Mainpage shoes={shoes} setshoes={setshoes}></Mainpage> }/>
        <Route path='/detail/:id' element={ <Detail shoes={shoes} /> } />
        

        <Route path='*' element={ <div>없는 페이지 입니다</div> } />

        <Route path='/event' element={<Event/>}>
          <Route path='one' element={<div>첫 주문시 닭가슴살 추가 증정</div>}></Route>
          <Route path='two' element={<div>두개 구매시 닭가슴살 하나 추가 증정</div>}></Route>
        </Route>

      </Routes>

      
    </div>
  )
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Product(props) {
  let navigate =  useNavigate();

  return (
    
      <div>
          <img src={'https://codingapple1.github.io/shop/shoes'+ (props.i+1) +'.jpg'} width="50%"/>
          <h4 onClick={()=> { navigate(`/detail/${props.i}`) }}>{props.상품.title}</h4>
          <p>{props.상품.price}</p>
      </div>
  )
}

function Mainpage(props) {
  return (
    <>
      <div className='main-bg'></div>
      <div className='button-bg'>
        <button type="button" class="btn btn-outline-secondary" onClick={()=> {
          let copy = [...props.shoes];
          copy.sort((a,b) => a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1);
          props.setshoes(copy);
        }}>가나다순 정렬</button>
      </div>

        <Container className='productClass'>
          
          { props.shoes.map(function(a, i) {
          return (<Product 상품={props.shoes[i]} i={i} key={i}></Product>)
          })}
          
        </Container>
    </>
  )
}






export default App
