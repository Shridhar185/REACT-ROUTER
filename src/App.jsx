// import React from 'react'
// import { Routes, Route } from 'react-router-dom'
// import { Link } from 'react-router-dom'
// import Home from './Pages/Home'
// import Contact from './Pages/Contact'
// import About from './Pages/About'

// const App = () => {
//   return (
//     <div>
//       {/* This causes a full page reload and breaks the single-page app (SPA) behavior. */}
//       {/* <a href="/about">About</a>   */}

//       {/* Instead, use the <Link> component from react-router-dom for internal navigation. */}
//       <Link to="/">Home</Link>              <br/>
//       <Link to="/contact">Contact</Link>    <br/>
//       <Link to="/about">About</Link>        <br/>

//       {/* Define the routes that map URLs to specific components */}
//       {/* When the path is '/contact', render the Contact component */}
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//         <Route path='/contact' element={<Contact/>}/>
//         <Route path='/about' element={<About/>}/>
//       </Routes>
//     </div>
//   )
// }

// export default App


                                                                                               


 




// import React from 'react'
// import Navbar from './Components/Navbar'
// import { Route, Routes } from 'react-router-dom'
// import Home from './Pages/Home'
// import Product from './Pages/Product'
// import About from './Pages/About' 
// import Contact from './Pages/Contact'

// const App = () => {
//   return (
//     <div>
//       <Navbar/> {/* It is outside <Routes>, so it will be present on all pages */}
//       <div className='container'>
//         <Routes>
//           <Route path = '/' element= {<Home/>}/>
//           <Route path = '/products' element= {<Product/>}/>
//           <Route path = '/about' element= {<About/>}/>
//           <Route path = '/contact' element= {<Contact/>}/>
//         </Routes>
//       </div>
//     </div>
//   )
// }










// path="*"   ->  It matches any path that doesn't exist in your routes.


// import React from 'react'
// import Navbar from './Components/Navbar'
// import { Route, Routes } from 'react-router-dom'

// import Home from './Pages/Home'
// import Product from './Pages/Product'
// import About from './Pages/About'
// import Contact from './Pages/Contact'
// import Login from './Pages/Login'
// import Register from './Pages/Register'
// import NotFound from './Pages/NotFound'

// const App = () => {
//   return (
//     <div>
//       <Navbar /> {/* Visible on all pages */}
      
//       <div className='container'>
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/products' element={<Product />} />
//           <Route path='/about' element={<About />} />
          
//           {/* Contact with nested routes */}
//           <Route path='/contact' element={<Contact />}>
//             <Route path='login' element={<Login />} />
//             <Route path='register' element={<Register />} />
//           </Route>
//           <Route path ='*' element={<NotFound/>}/>
//         </Routes>
//       </div>
//     </div>
//   )
// }

// export default App














// Dynamic Routing ________________________________________________________________
// The part :productId is dynamic — it changes based on the URL.

import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import Product from './Pages/Product'
import ProductDetail from './Pages/ProductDetail'
import About from './Pages/About'
import Contact from './Pages/Contact'
import NotFound from './Pages/NotFound'


const App = () => {
  return (
    <div>
      <Navbar /> 
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />

          {/* Products route with nested dynamic route */}
          <Route path='/products' element={<Product />}>
            <Route path=':productId' element={<ProductDetail />} />
          </Route>

          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />}/>  
          <Route path ='*' element={<NotFound/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
















