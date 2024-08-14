import React from "react";
import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { countUp, countDown } from "./store";

const Cart = () => {
  let state = useSelector((state) => {return state});
  let dispatch = useDispatch();
  const handleIncrease = (id) => {
    dispatch(countUp(id))
  }
  

  const handledecrease = (id) => {
    dispatch(countDown(id))
  }

  return(
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>제품 이름</th>
            <th>수량</th>
            <th>추가</th>
            <th>제거</th>
          </tr>
        </thead>
        <tbody>
          {state.cartData.map((item, i) => {
            return(
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.count}</td>
                <td><button onClick={() => handleIncrease(item.id)}>+</button></td>
                <td><button onClick={() => handledecrease(item.id)}>-</button></td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;