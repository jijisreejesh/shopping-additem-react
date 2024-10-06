import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./Additems1.css"

function AddItems() {
const cart=useSelector((state)=>state.cart);
const total=cart.reduce((total,item)=>total+item.price,0);
// console.log(total)
// console.log(cart[0])
  return (
    <div>
           <h1>Cart</h1>
           {cart.map((i)=>(
               <ul id="cart" key={i.id}>    
               <li><img id="cartimg" src={i.url} alt="image" ></img></li>
               <li><p>Title : {i.title}</p></li>
               <li><h3>Price:{i.price}</h3></li>
               </ul>
           ))}
           <h1>Total : {total}</h1>
           
    </div>
  )
}

export default AddItems