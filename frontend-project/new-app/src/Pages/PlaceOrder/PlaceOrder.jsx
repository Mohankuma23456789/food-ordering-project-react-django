import { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../Context/StoreContext";
import axios from 'axios';

export default function PlaceOrder() {
  
  const { getTotalCartAmount, clearCart } = useContext(StoreContext);

  const placeOrderAction = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);  
    const subtotal = getTotalCartAmount();
    const deliveryFee = subtotal === 0 ? 0 : 50; 
    const total = subtotal + deliveryFee;  

    let orderData = {
      first_name: formData.get("firstName"), 
      last_name: formData.get("lastName"),
      email: formData.get("email"),
      street: formData.get("street"),
      city: formData.get("city"),
      state: formData.get("state"),
      zipcode: formData.get("zipcode"),
      country: formData.get("country"),
      phone: formData.get("phone"),
      subtotal: subtotal,
      delivery_fee: deliveryFee,
      total: total,
    };

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/placeorder/', orderData);
      
      if (response.status === 201 || response.status === 200) {
        alert("Order: " + (response.data.message || "Order placed successfully!"));
        
        
        event.target.reset(); 

    
        clearCart(); 
        
      }
    } catch (error) {
      console.error('Order error:', error);
      alert("Something went wrong!");
    }
  };

  return (
    <form onSubmit={placeOrderAction} className="place-order">

      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input name="firstName" type="text" placeholder="First name" required />
          <input name="lastName" type="text" placeholder="Last name" required />
        </div>
        <input name="email" type="email" placeholder="Email address" required />
        <input name="street" type="text" placeholder="Street" required />
        <div className="multi-fields">
          <input name="city" type="text" placeholder="City" required />
          <input name="state" type="text" placeholder="State" required />
        </div>
        <div className="multi-fields">
          <input name="zipcode" type="text" placeholder="Zip code" required />
          <input name="country" type="text" placeholder="Country" required />
        </div>
        <input name="phone" type="text" placeholder="Phone" required />
      </div>

      
      <div className="place-order-right">
        <div className="cart-bottom-change">
          <div>
            <h2>Cart Total</h2>
            <div className="cart-total-details-change">
              <p>SubTotal</p>
              <p className="cart-fee">₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details-change">
              <p>Delivery Fee</p>
              <p className="cart-fee">₹{getTotalCartAmount() === 0 ? 0 : 50}</p>
            </div>
            <hr />
            <div className="cart-total-details-change">
              <p>Total</p>
              <p className="cart-fee">₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 50}</p>
            </div>
            
            <button type="submit">PROCEED TO PAYMENT</button>
          </div>
        </div>
      </div>
    </form>
  );
}