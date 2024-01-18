// eslint-disable-next-line

import { useParams } from "react-router-dom";
import styled from 'styled-components';

let YellowBtn = styled.button`
  background : ${ props => props.bg };
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
  let { id } = useParams();
  let 찾은상품 = props.shoes.find(function(x){
    return x.id==id;
  }
  
  );

  return (
    <div className="container">
      <BlackBox>
      <YellowBtn bg="blue"></YellowBtn>
      <YellowBtn bg="yellow"></YellowBtn>
      <YellowBtn bg="red"></YellowBtn>

      </BlackBox>
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  )
}

export default Detail;



