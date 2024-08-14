import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { update } from "./store";
import { useDispatch } from "react-redux";


const Detail = (props) => {
  const [visible, setVisible] = useState(true);
  const [inputVal, setInputVal] = useState('');
  const [alert, setAlert] = useState(false);
  const [tab, setTab] = useState(0);
  const [buyAlert, setBuyAlert] = useState(false);
  const [selectVal , setSelectVal] = useState(230);
  
  


  const handleSelectVal = (e) => {
    setSelectVal(e.target.value);
  }

  // useEffect(() => {
  //   let getData = localStorage.getItem('watched');
  //   let outData = JSON.parse(getData) || [];
  //   outData.push(selectedShoes);
  //   const setNewData = [...new Set(outData)];
  //   let updatedData = JSON.stringify(setNewData);
  //   localStorage.setItem('watched',updatedData)
  // }, []);
  
  useEffect(() => {  
    let getData = localStorage.getItem('watched');
    let outData = JSON.parse(getData) || [];
    if (!outData.some(item => item.id === selectedShoes.id)) {
      outData.push(selectedShoes);
    } //중복된 id가 없을때만 push함
  
    localStorage.setItem('watched', JSON.stringify(outData));
  }, []);


  

  let dispatch = useDispatch();

  const orderProduct = () => {
    // dispatch(updateSize(selectVal));
    console.log(selectVal)
    dispatch(update(selectedShoes));
    setBuyAlert(true);
  }


  const tabAction = (num) => {
    setTab(num);
  }

  useEffect(() => {
    let buyTimer = setTimeout(() =>{
      setBuyAlert(false)
    },1000);

    return (()=>{
      clearTimeout(buyTimer)
    });
  },[buyAlert])


  useEffect(() => {
    let showTimer = setTimeout(() => {
      setVisible(false);
    }, 2000);
    if (isNaN(inputVal)) {
      setAlert(true);
    } else {
      setAlert(false);
    }
    return (()=>{
      clearTimeout(showTimer)
    });
   
  }, [inputVal]);

  const [fade, setFade] = useState('');
  useEffect(() => {
    let fadeTimer = setTimeout(() => { setFade('fade_end')}, 100);
    return () => {
      clearTimeout(fadeTimer);
      setFade('');
    }
  }, [])

  const checkVal = (e) => {
    const val = e.target.value;
    setInputVal(val);
  }

  let { id } = useParams();
  const selectedShoes = props.shoes.find((x) => x.id === parseInt(id));
 


  if (!selectedShoes) {
    return <div style={{ textAlign: 'center', marginTop: '50px' }}>페이지가 존재하지않습니다</div>
  }

  return (
    <div className={`position_r container fade_start ${fade}`}>
      {visible && <div className="alert alert-warning txt-c">지금사면 할인해줌</div>}
      <div className="row">
        <div className="col-md-6">
          <img src={process.env.PUBLIC_URL + `/images/shoes${selectedShoes.id + 1}.jpg`} width="100%" alt="" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">제품명 : {selectedShoes.title}</h4>
          <p>상품 설명 : {selectedShoes.content}</p>
          <p>가격 : {selectedShoes.price}</p>
          <div>
            <span>사이즈 : </span>
            <select value={selectVal} onChange={handleSelectVal}>
              <option>230</option>
              <option>235</option>
              <option>240</option>
              <option>245</option>
              <option>250</option>
              <option>255</option>
              <option>260</option>
              <option>265</option>
              <option>270</option>
              <option>275</option>
            </select>
          </div>
          <div className="mgt10">
            <input type="text" value={inputVal} onChange={checkVal} />
          </div>
          <button className="btn btn-danger mgt10" onClick={orderProduct}>장바구니에 담기</button>
        </div>
      </div>
      {alert && <div className="alert alert-danger txt-c">문자가 나타났다!!</div>}
      {buyAlert && <div className="mid_alert alert alert-primary txt-c" role="alert">장바구니에 담겼습니다╰(*°▽°*)╯.</div>}
      <Nav className="mgt10" variant="tabs" defaultActiveKey="link1">
        <Nav.Item>
          <Nav.Link onClick={() => tabAction(0)} eventKey="link1">Option 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => tabAction(1)}  eventKey="link2">Option 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => tabAction(2)}  eventKey="link3">Option 3</Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab tab = {tab}/>
    </div>
  );
}

const Tab = ({ tab }) => {

  const [pop, setPop] = useState('');
  useEffect(() => {
    let popTimer = setTimeout(() => { setPop('pop_end')}, 100);
    return () => {
      clearTimeout(popTimer);
      setPop('');
    }
  }, [tab])

  return (
    <div className={`pop_start ${pop}`}>
      {[<div>내용1</div>, <div>내용2</div>, <div>내용3</div>][tab]}
    </div>
  );
};


export default Detail;
