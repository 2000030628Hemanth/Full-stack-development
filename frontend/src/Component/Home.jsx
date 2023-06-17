import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Product from './Product';
export default function Home() {

    let [ data, setData] = useState("Hi")
    

    const fetchData = async () => {
            try{
            const response = await axios.get('https://fakestoreapi.com/products');
            setData(response.data);
         } catch (error) {
            console.log(error)
         }
      };
      
    useEffect(()=>{
        setData("hello");
    })

  return (
    <div>
        {
            data.map((ele,index)=>{
                return <Product title={ele.title} price={ele.price} />
            })
        }
    </div>
  )
}

