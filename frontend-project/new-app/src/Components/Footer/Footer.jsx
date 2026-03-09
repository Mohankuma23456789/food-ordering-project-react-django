import { useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'
import './Footer.css'

export default function Footer (){

    const navigate = useNavigate()
    return(
        <>
        <div className="footer" id='footer'>

            <div className='footer-content'>
                <div className="footer-content-left">
                    
                    <span >Chef Hub</span>

                    <p>Your ultimate destination for culinery excellence Discover 
                        expert tips, step by step guides, and a world taste. At
                         Chef Hub,  belive everyone has a story to tell through food. whats yours? 
                    </p>

                         <div className="footer-social-icons">
                            <img src={assets.facebook_icon} alt="" />
                             <img src={assets.twitter_icon} alt="" />
                              <img src={assets.linkedin_icon} alt="" />
                         </div>
                </div>

                <div className="footer-content-center">

                    <h2>COMPANY</h2>

                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                        
                    </ul>

                </div>

                <div className="footer-content-right">
                    <h2>CONTACT</h2>

                    <ul>
                        <li>+1-212-456-7890</li>
                        <li>contact@Chef Hub.com</li>
                    </ul>
                    <button onClick={()=>navigate('/')}>Home</button>
                </div>
            </div>

            <hr />
            <p className="footer-copyright">
                &copy; 2026 @Chef Hub.com | All Rights Reserved
            </p>
        </div>
        </>
    )
}