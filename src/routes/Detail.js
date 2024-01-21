// eslint-disable-next-line

import { useParams } from "react-router-dom";
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import { useState, useEffect } from 'react';
import '../App.css';



let YellowBtn = styled.button`
  background : ${props => props.bg};
  color : black;
  padding : 10px;
  width: 100px;
  border: none;
`

let BlackBox = styled.div`
  background:black;
  padding: 20px;
`

function Detail(props) {
  useEffect(() => {
    let a = setTimeout(()=>{ setAlert(false) }, 2000)

    return ()=>{
      clearTimeout(a); //타이머제거
      <input onChange={(e)=>{ 입력값변경(e.target.value)} }></input>

    }
  }, [])


  let { id } = useParams();
  let 찾은상품 = props.shoes.find(function (x) {

    return x.id == id;
  });

  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);
  let [탭, 탭변경] = useState(0);
  let [입력값, 입력값변경] = useState(0);
  let num = parseInt(id) + 1;
  return (
    <div className="container">
      
      {
        alert == true ? <div className="alert alert-warning">
        2초이내 구매시 할인
      </div> : null
      }
     
      <div className="row">
        <div className="col-md-6">
          <img src={'https://codingapple1.github.io/shop/shoes'+ num +'.jpg'} width='100%'></img>
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
      {
        isNaN(입력값) ? <div style={{ border : '2px solid red'}}>그러지마세요</div> : null
      }
      <input onChange={(e)=>{ 입력값변경(e.target.value)} }></input>
      
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={() => { 탭변경(0) }}>버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={() => { 탭변경(1) }}>버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2" onClick={() => { 탭변경(2) }}>버튼2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent 탭={탭} />

    </div>
  )
}

function TabContent(props) {

  let [fade, setFade] = useState('')

  useEffect(()=>{
    setTimeout(()=>{ setFade('end')}, 100)
    return () => {
      setFade('')
    }
  }, [props.탭])

  if (props.탭 == 0) {
    return <div className={"start " + fade }>내용0</div>
  }
  else if (props.탭 == 1) {
    return <div className={`start ${fade}`}>내용1</div>
  }
  else {
    return <div className={"start " + fade}>내용2</div>
  }
}



export default Detail;



