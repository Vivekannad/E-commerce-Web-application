import React from 'react'
import {Routes} from 'react-router-dom'
import { Route } from 'react-router-dom'
import Default from '../../Pages/Default'
import Home from '../../Pages/Home'
import About from '../../Pages/About'
import Cart from '../../Pages/Cart/Cart'
import Cards from '../Cards'
import Brand from '../Brand/Brand'
import Error from '../Error/Error'
import Signup from '../SignUp/Signup'
import Login from '../Login/Login'
import PrivateRoutes from '../PrivateRouter/PrivateRoutes'
import WishList from '../WishList/WishList'

const Router = () => {
  return (
    <>
        <Routes>
        <Route path='/' element={<Default />} >
          <Route index element={<Home />} />
          <Route element={<PrivateRoutes/>}>
        <Route path='about' element={<About />} />
        <Route path='wishlist' element={<WishList/>} />
          <Route path=':category'>
            <Route index element={<Cards />} />
            <Route path=':id' element={<Brand />} />
          </Route>
        <Route path='cart' element={<Cart />} />
          </Route>
        <Route path='signup' element={<Signup/>} />
        <Route path='login' element={<Login/>} /> 
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
    </>
)
}

export default Router