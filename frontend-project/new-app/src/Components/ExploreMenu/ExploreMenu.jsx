import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
import FoodDisplay from '../../FoodDisplay/FoodDisplay'


export default  function ExploreMenu({category,setcategory}){    
    return(

        <>
        <div className="explore-menu" >
            <h1>Explore Our Menu</h1>
            <p className='explore-menu-text'>Choose from a divorce menu featuring a delectable array of dishes. 
         Our satisfy your cravings and elevate your dining experiance, one delicious meal at a time </p>

         <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(

                    <div onClick={()=>setcategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p className='img-name'>{item.menu_name}</p>
                    </div>
                )
            })}
         </div>
         
        </div>       
        <hr />
         <br />   <br />
        <FoodDisplay  category={category}/>
        </>
    )
}