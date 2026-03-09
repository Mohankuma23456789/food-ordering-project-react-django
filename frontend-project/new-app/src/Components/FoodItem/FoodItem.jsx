import { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";



export default function FoodItem({ id, name, price, description, image }) {



    const {cartitems ,addToCart, removeFromCart} = useContext(StoreContext)

  return (
    <>
      <div className="food-item">
        <div className="food-item-img-container">
          <img className="food-item-image" src={image} alt="" />
          {!cartitems[id]
            ? <img className="add" onClick={()=>addToCart(id)} src={assets.add_icon_white}  alt="" />
            : <div className="food-item-counter">
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                <p>{cartitems[id]}</p>
                 <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
            </div>
        }

        </div>
        <div className="food-item-info">
          <div className="food-item-name">
            <h3>{name}</h3>
          </div>
          <p className="food-item-description">{description}</p>
          <div className="flex"> 
            <h4 className="food-item-price">₹{price}</h4>
            <span className="food-item-rating">
              {"\u2605\u2605\u2605\u2605\u2606"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
