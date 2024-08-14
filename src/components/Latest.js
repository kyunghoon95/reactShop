import React, {useEffect} from 'react';
import { useNavigate,Link } from "react-router-dom";

const Latest = (props) => {
  
  
  useEffect(() => {
    // localStorage.setItem('watched', JSON.stringify([]));
    let getLocalData = JSON.parse(localStorage.getItem("watched"));
    
    const updatedStoredData = getLocalData?.map((item, i) => (
      <Link to={`/detail/${item.id}`} key={i}>
        <div className='latest_item mgt10 txt-c'>
          <img src={process.env.PUBLIC_URL + `/images/shoes${item.id + 1}.jpg`} alt='' className='product'/>
          <p>{item.title}</p>
        </div>
      </Link>
    ))
    props.setStoredData(updatedStoredData);

  }, [useNavigate()]);

  return(
    <div className='latest'>
      {props.storedData}
    </div>
  );
}

export default Latest