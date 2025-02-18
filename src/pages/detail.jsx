import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(props) {

    let {id} = useParams();
    let 찾은상품 = props.shoes.find(function(x) {
      return x.id == id
    });
    let [discount, setdiscount] = useState(true);
    let [numAlert, setNumAlert] = useState(false);

    useEffect(()=> {
      let a = setTimeout(()=>{setdiscount(false)}, 2000);

      return ()=> {
        clearTimeout(a);
      }
    })


    return (
        <div className="container">

          {discount == true ? <Discount/> : null}
          
          <div className="row">
            <div className="col-md-6">
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6">
              {numAlert == false ? null : <div style={{backgroundColor: 'yellow'}}>숫자 입력하세요</div>}
              <input onChange={(e)=>{isNaN(e.target.value) ==  true ? setNumAlert(true) : setNumAlert(false);
              }}></input>
              <h4 className="pt-5">{찾은상품.title}</h4>
              <p>{찾은상품.content}</p>
              <p>{찾은상품.price}</p>
              <button className="btn btn-danger">주문하기</button> 
            </div>
          </div>
        </div> 
    )

    
  }

  function Discount () {
    return (
      <div className="alert alret-warning">
        2초 이내 구매시 할인
      </div>
    )
  }

  export default Detail;