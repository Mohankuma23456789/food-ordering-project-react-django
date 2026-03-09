// import Navbar from "./Components/Navbar/Navbar";
// import {Routes, Route} from "react-router-dom";
// import Home from "./Pages/Home/Home";
// import Cart from "./Pages/Cart/Cart";
// import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
// import Footer from "./Components/Footer/Footer";
// import { useState } from "react";
// import LoginPage from "./Components/LoginPage/LoginPage";
// import ExploreMenu from "./Components/ExploreMenu/ExploreMenu";
// import AppDownload from "./Components/AppDownload/AppDownload";
// import Service from "./Components/Service/Service";


// export default function App(){

//     const [category, setcategory] = useState('All')

//     const [showlogin, setshowlogin] = useState(false)
//     return(
//         <>
//         {showlogin ?<LoginPage setshowlogin={setshowlogin} />:<></>}
        
//         <div>
//         <Navbar setshowlogin ={setshowlogin} />
//         <Routes>

//             <Route path="/" element={<Home />} />
//             <Route path="/menu" element={<ExploreMenu category={category} setcategory={setcategory} />} />
//             <Route path="/cart" element={< Cart/>} />
//             <Route path="/order" element={<PlaceOrder />} />
//             <Route path="/about" element={<AppDownload />} />
//             <Route path="/service" element={<Service  />} />
        
           
//         </Routes>
        
//         </div>
//         <Footer />
      
        
        
//         </>
//     )
// }






import Navbar from "./Components/Navbar/Navbar";
import {Routes, Route} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";
import LoginPage from "./Components/LoginPage/LoginPage";
import ExploreMenu from "./Components/ExploreMenu/ExploreMenu";
import Service from "./Components/Service/Service";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import About from "./Components/About/About";

export default function App(){

  const [category, setcategory] = useState('All')
  const [showlogin, setshowlogin] = useState(false)

  return(
    <>
    <ScrollToTop />
      {showlogin && <LoginPage key={showlogin} setshowlogin={setshowlogin} />}

      <div>
        <Navbar setshowlogin={setshowlogin} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<ExploreMenu category={category} setcategory={setcategory} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
        </Routes>

      </div>

      <Footer />
    </>
  )
}