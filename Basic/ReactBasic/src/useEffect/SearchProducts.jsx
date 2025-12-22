import './SearchProducts.css'
import {useEffect,useState} from "react";

export default function SearchProducts(){
  const [products,setProducts]=useState([]);
  const [search,setSearch]=useState("");

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
      .then(r=>r.json())
      .then(d=>setProducts(d));
  },[]);

  const filtered=products.filter(product=>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    <input placeholder="Search products..." value={search} onChange={e=>setSearch(e.target.value)}/>
    <div>
      <ul>
        {filtered.map(product=>(
         <li key={product.id}>
          {product.title}
          <img src={product.image} alt="" />
          {product.price}
         </li>
        ))}
      </ul>
    </div>
    </>
  );
}

