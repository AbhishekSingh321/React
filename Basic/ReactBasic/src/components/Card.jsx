import './Card.css'
export default function Card({title,price,image}){
  return(
    <div className="card">
      <h1>{title}</h1>
      <img src={image} alt="" />
      <p>₹{price}</p>
    </div>
  )
}