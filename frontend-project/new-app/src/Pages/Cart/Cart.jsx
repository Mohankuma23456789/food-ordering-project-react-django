import { useContext } from "react";
import "./Cart.css";
import lastOne from '../../assets/last-img-2.jpeg';
import { StoreContext } from "../../Context/StoreContext";
import { food_list } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartitems, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

  const navigate =  useNavigate()
  return (
    <>
      <div className="cart">
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>remove</p>
          </div>
          <br />
          <hr />
          {food_list.map((item) => {
            if (cartitems[item._id] > 0) {
              return (
                <div>
                  <div className="cart-items-title cart-items-item">
                    <img className="card-img" src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>₹{item.price}</p>
                    <p>{cartitems[item._id]}</p>
                    <p>₹{item.price * cartitems[item._id]}</p>
                    <p
                      className="cross"
                      onClick={() => removeFromCart(item._id)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </p>
                  </div>
                  <hr />
                </div>
              );
            }
          })}

          <div className="cart-bottom">
            <div>
              <div className="cart-total">
                <h2>Cart Total</h2>
              </div>
              <div className="cart-total-details">
                <p>SubTotal</p>
                <p>₹{getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>₹{getTotalCartAmount()===0?0:50}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Total</p>
                <p>₹{getTotalCartAmount()===0?0:getTotalCartAmount()+50}</p>
              </div>
              <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
            </div>
          </div>

          <div className="cart-promocode">
            <div>
              <p>Free Delivery on orders Above ₹50 | Get 50% off</p>
              <div className="cart-promocode-input">
                <img src={lastOne} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
