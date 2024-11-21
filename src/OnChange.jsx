import React, {useState} from "react"

function MyComponent() {

  const [name, setName] = useState('Guest');
  const [quantity, setQuantity] = useState(1);
  const [comment, setCommet] = useState('');
  const [payment, setPayment] = useState();
  const [shipping, setShipping] = useState();

  const handlNameChange = (event) => {
    
    setName(event.target.value);
  }
  const handlQuantityChange = (event) => {
    
    setQuantity(event.target.value);
  }
  const handleCommentChange = (event) => {
    setCommet(event.target.value);
  }
  const handlePaymentChange = (event) => {
    setPayment(event.target.value);
  }
  const handleShippingChange = (event) => {
    setShipping(event.target.value);
  }
  
  return (<div>
    <input value={name} onChange={handlNameChange}></input>
    <p>Name:{name}</p>
    
    <input value={quantity} onChange={handlQuantityChange} type="number"></input>
    <p>Quantity: {quantity}</p>

    <textarea value={comment} onChange={handleCommentChange} placeholder="Enter your comment"></textarea> 
    <p>Comment: {comment}</p>

    <select value={name} onChange={handlePaymentChange}>
      <option value=''>Select an option</option>
      <option value='Visa'>Visa</option>
      <option value='Debit'>Debit</option>
      <option value='Gift-card'>Gift Card</option>
    </select>
    <p>Payment: {payment}</p>
    
    <label>
      <input type="radio" value='Pick up' checked={shipping === "Pick Up"}
        onChange={handleShippingChange}
      />
      Pick me
    </label>
    <br/>
    <label>
      <input type="radio" value='Delivery' checked={shipping === "Delivery"}
        onChange={handleShippingChange}
      />
      Delivery
    </label>
    <p>Shipping: {shipping }</p>
    

  </div>)
}
export default MyComponent