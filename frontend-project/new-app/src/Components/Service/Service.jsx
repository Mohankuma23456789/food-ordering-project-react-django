import food from '../../assets/food-order-img.png';
import quality from '../../assets/quality-food.png';
import delivery from '../../assets/delivery-man.png';
import './Service.css'

export default function Service(){
    return(
        <>
        
            <div>

                <h1>Our Services</h1>
                <div  className="service">
                    <img src={food} alt="" />
                    <h2>Easy Food</h2>
                    <p>You only need a few steps in ordering food</p>
                </div>

                  <div  className="service">
                    <img src={quality} alt="" />
                    <h2>Fast Delivery</h2>
                    <p>delivery that is always online even faster.</p>
                </div>


                  <div  className="service">
                    <img src={delivery} alt="" />
                    <h2>Quality Food</h2>
                    <p>Not only fast for us in quality is also number onee!</p>
                </div>
                
            </div>
        

        
        
        </>
    )
}