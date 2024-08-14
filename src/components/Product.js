import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {

  // const test = (itemId) => {
  //   let getData = localStorage.getItem('watched');
  //   let outData = JSON.parse(getData) || [];
  //   outData.push(itemId);
  //   const setNewData = [...new Set(outData)];
  //   let updatedData = JSON.stringify(setNewData);
  //   localStorage.setItem('watched',updatedData)
  // }

  return(
    <div className="container text-center">
      <div className="row">
        {props.shoes.map((item, i) => {
          return(
            <div className="col-md-4" key={i}>
              <Link to={`/detail/${item.id}`}>
                <img src={process.env.PUBLIC_URL + `/images/shoes${item.id + 1}.jpg`} alt='' className='product'/>
                <p>{item.title}</p>
                <p>{item.content}</p>
                <p>{item.price}</p>
              </Link>              
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Product;
