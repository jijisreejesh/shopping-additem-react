import React from 'react'
import  "./Home1.css"
import AddItems from './AddItems'
import { useNavigate} from 'react-router-dom'
import { addToCart } from './Store'
import { useDispatch } from 'react-redux'
function Home() {
    const s=[
            {
                
                "id": 1,
                "url": "https://m.media-amazon.com/images/I/61r-TFmj6fL._AC_UL480_FMwebp_QL65_.jpg",
                "title": "accusamus beatae ad facilis cum similique qui sunt",
                "price":300
            },
            {
                
                "id": 2,
               "price":350,
                "url": "https://m.media-amazon.com/images/I/711ebKW3YIL._AC_UL480_FMwebp_QL65_.jpg",
                "title": "reprehenderit est deserunt velit ipsam effffffffffgf",
            },
            {
             
                "id": 3,
                "url": "https://m.media-amazon.com/images/I/61GG2X-sGlL._AC_UL480_FMwebp_QL65_.jpg",
                "title": "officia porro iure quia iusto qui ipsa ut modi rtetert",
               "price":205
               
            },
            {
                
                "id": 4,
                "price":160,
                "url": "https://m.media-amazon.com/images/I/71c-akCMLUL._AC_UL480_FMwebp_QL65_.jpg",
              "title": "culpa odio esse rerum omnis laboriosam voluptate repudi",
            }
        
    ]
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const add=((item)=>{
      dispatch(addToCart(item))
      navigate('/AddItems')
    })

  return (
    <div id="homes">
       { s . map((i)=>(
        <div id="main" key={i.id}>    
       <img src={i.url} alt="image" ></img>
       <p>Title : {i.title}</p>
       <h1>Price:{i.price}</h1>
        <button onClick={()=>add(i)}>Add to cart</button>
     </div>
  ))}

  </div>
  )
}

export default Home