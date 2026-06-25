
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Products from './components/Products.jsx'
import Contact from './components/Contact.jsx'
import Deals from './components/Deals.jsx'
import Victus from './components/Victus.jsx'
import Laptops from './components/Laptops.jsx'
import Addproducts from './components/Addproducts.jsx'
import {Routes,Route} from "react-router-dom"
function App() 
{ function Manager()
{
   const data = go();

   if(data.result === "Laptops")
   {
      return <Laptops />;
   }

   if(data.result === "Phone")
   {
      return <Phones />;
   }

   return <Products />;
}
  return (
    <>
    <Navbar/>
    
     
   <Routes>
  
  <Route path="/products" element={<Products/>}/>
  <Route path="/" element={<Home/>}/>
  <Route path="/Contact" element={<Contact/>}/>
  <Route path="/Congrats" element={<Deals/>}/>
  <Route path="/victuslaptop" element={<Victus/>}/>
  <Route path="/laptops" element={<Laptops/>}/>
    <Route path="/addpr" element={<Addproducts/>}/>
</Routes>


    

    </>
  )
}

export default App

