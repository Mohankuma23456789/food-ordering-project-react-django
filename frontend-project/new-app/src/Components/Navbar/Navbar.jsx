import { Link } from 'react-router-dom'
import './Navbar.css'
import { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';


export default function Navbar({setshowlogin}) {

  const {getTotalCartItems} = useContext(StoreContext)
  return (
    <>
      <header>
        <a>
          <h2 className="logo-h1">Chef Hot</h2>
        </a>

        <nav>

          <ul className="nav-links">
          
            <li><Link to='/'>Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/service">Service</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><a href="#footer">Contact</a></li>

          </ul>
        </nav>
        <div className="cards">
            
          <span className='signin-icon'  onClick={()=>setshowlogin(true)}><i className='fa-solid fa-user icon'></i></span>

          
          <Link  to="/cart">
            <i className="fa-solid fa-cart-arrow-down cart-icon" ></i><span className="count">{getTotalCartItems()}</span>
          </Link>
        </div>
      </header>
    </>
  );
}
