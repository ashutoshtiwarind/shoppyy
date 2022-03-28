import axios from 'axios';
import React from 'react';
import {useEffect, useState}from 'react'
import "./product.css"

const Product = () => {
    const [data, setData] = useState([]);
    const [LtH, setLth] = useState([]);
    const [HtL,setHtL] = useState([]);
    
    useEffect(() => {
      const getData =async ()=>{
          let res = await axios.get("https://movie-fake-server.herokuapp.com/products")
         // console.log(res);
          setData(res.data)
      }
      getData();
      },[LtH,HtL])

        
      
        const SortLToH = ()=>{
            let temp = data.sort((a, b)=> {
                return a.price-b.price;
            })
            setLth(temp)
          
        }
          const SortHToL = ()=>{
            let temp = data.sort((a, b)=> {
                return b.price-a.price;
            })
            setHtL(temp)
          }
      

    return (
     <div>
         <button onClick={()=>{
             SortLToH()}}>lowToHigh</button>
         <button onClick={SortHToL}>HighToLow</button>
         <div className='mainDiv'>
         {data.map((items)=>{
             return(
                 
                 <div key={items.id}>
                 <img src={items.image} alt="" />
                 <p> Brand {items.brand}</p>
                 <p>{items.title}</p>
                 <p>price : {items.price}</p>
                 </div>
                 
             )
         })}
         </div>
     </div>
    );
}

export default Product;
