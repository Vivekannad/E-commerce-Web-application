import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { cartExport } from '../Slice Container/cartSlice';
import { isUserLogged } from '../Slice Container/AuthSlice';

const Header = () => {
    const {cartNumber} = useSelector(cartExport);
    const dispatch = useDispatch()
    const {userLogged} = useSelector(state => state.authReducer)
    const navigate = useNavigate()
    const logoutChangeHandler = () => {
        navigate('/login')
        dispatch(isUserLogged())

    }
  return (
    <>
        <header className='bg-transparent border-b-4 border-slate-300'>
            <nav className='mx-5 flex justify-around items-center'>
                <div className="logo">
                    <img src='https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png' alt="" className=' h-12 object-cover'/>
                </div>
                <ul className='flex'>
                <li className='mx-4 hover:text-gray-500  text-lg '><NavLink to={'/'} className={({isActive}) => isActive ? 'text-orange-600' : 'text-black'}>Home</NavLink></li>
                <li className='mx-4 hover:text-gray-500  text-lg '><NavLink to={'/about'} className={({isActive}) => isActive ? 'text-orange-600' : 'text-black' }>About</NavLink></li>
                {!userLogged &&
                <>
                <li className='mx-4 hover:text-gray-500  text-lg '><NavLink to={'/signup'} className={({isActive}) => isActive ? 'text-orange-600' : 'text-black' }>Sign Up</NavLink></li>
                <li className='mx-4 hover:text-gray-500  text-lg '><NavLink to={'/login'} className={({isActive}) => isActive ? 'text-orange-600' : 'text-black' }>Login</NavLink></li>
               </> }
                </ul>
                <div className='flex items-center'>
                <Link className="cart flex justify-end items-center mx-3" to={'/Cart'}>
                    <FaShoppingCart size={40} color='rgb(255,40,40)'/>
                    <div className="tooltip w-4 h-3 relative bottom-1 right-4 flex justify-center items-center"><p className='text-xs font-medium text-white'>{cartNumber}</p></div>
                </Link>
                <Link to={'/wishlist'}>
                    <div className="wishList">
                    <p>WishList</p>
                    </div>
                    </Link>
                {userLogged ? 
                <button className='p-3 py-1 m-2 bg-red-600 text-white border-0 focus:ring-2 ring-slate-700 rounded-lg border-black hover:text-lg transition-all duration-300' onClick={logoutChangeHandler}>Log out</button>
                : <div></div>}
                </div>
            </nav>
        </header>
    </>
  )
}

export default Header