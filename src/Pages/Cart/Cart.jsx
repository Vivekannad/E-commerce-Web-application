import React, { useContext, useEffect, useState } from 'react';
import { CardContext } from '../../Context/CardContext';
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { cartExport,  increaseCartNumber, cartItemQuantity,decreaseCartNumber, removeFromCart } from '../../Slice Container/cartSlice';
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';

const Cart = () => {
  // const { cardStore, setCartNumber, quantity, setQuantity } = useContext(CardContext);
  const {cartedItems, itemQuantity, cartNumber} = useSelector(cartExport)
  const dispatch = useDispatch()

  const handleQuantityChange = (id) => {
    dispatch(increaseCartNumber())
    dispatch(cartItemQuantity({[id] : (itemQuantity[id] ) + 1  }))
  }
  const decreaseCartNum = (id) => {
    const newQuantity = itemQuantity[id] -1
    dispatch(cartItemQuantity({[id] : newQuantity}))
    if(newQuantity === 0){
      dispatch(removeFromCart(id))
    }
    dispatch(decreaseCartNumber());
  }
  return (
    <>
      <div className="parent flex flex-wrap justify-center mx-5">
        { cartedItems.length > 0  ? cartedItems.map((item) => (
          <div className="card w-80 rounded-md p-2 py-4 my-3 mx-2 border-2 bg-slate-200" key={item.id}>
            <Link to={`/${item.category}/${item.id}`}>
            <div className="image">
              <img src={item.image} alt="" className="rounded-md" />
            </div>
            <div className="parent flex flex-col justify-center w-full items-center">
              <div className="details my-2 flex flex-col justify-center w-full items-center">
                <h3 className="">Company:- <span className="font-medium capitalize">{item.company}</span></h3>
                <h3 className="">Model:- <span className="font-medium capitalize">{item.name}</span></h3>
                <h3 className="text-center text-md">
                  colors are <br />
                  <span className="font-normal text-sm">{item.colors.map((colors) => colors)}</span>
                </h3>
              </div>
              <div className="price">
                <p>Price: <span className="font-light text-sm">{item.price}/rs</span></p>
              </div>
                </div>
                </Link>
                <button className='flex flex-col items-center w-full'>
                  <div onClick={() => handleQuantityChange(item.id)}>
                <MdArrowDropUp />
                  </div>
                {itemQuantity[item.id] }
                <div onClick={() => decreaseCartNum(item.id)}>
                <MdArrowDropDown />
                </div>
                </button>
          </div>
        )) : <h1>Nothing in the cart</h1>}
      </div>
    </>
  );
};

export default Cart;