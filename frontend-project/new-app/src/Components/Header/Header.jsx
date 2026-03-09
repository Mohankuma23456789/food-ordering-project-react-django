import { useNavigate } from 'react-router-dom'
import './Header.css'

export default function Header (){
    const navigate = useNavigate()
    return(
        <>
        <div>
        <div className="header">
            <div className="header-contents">
                <h2>Order your favourite food here</h2>
                <p>Choose from a divorce menu featuring a delectable array of dishes crafted with the finest ingredients and culinery expertise.
                     Our satisfy your cravings and elevate your dining experiance, one delicious meal at a time </p>
                     <button onClick={()=>navigate('/menu')}>View menu</button>
            </div>
        </div>
        </div>
       
        </>
    )
}