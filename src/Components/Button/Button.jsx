import React from 'react'
import { useSelector } from 'react-redux'
import { cartExport } from '../../Slice Container/cartSlice'
import { useCartHandler } from '../../Hooks/useCartHandler'

const Button = ({item}) => {
  const handleCart = useCartHandler();
  const {cartedItems} =  useSelector(cartExport)
  return (
    <>
      <button
        className='p-3 py-1 m-2 bg-red-600 text-white border-0 focus:ring-2 ring-slate-700 rounded-lg border-black hover:text-lg transition-all duration-300'
        onClick={() => {handleCart(item) }}>
        {cartedItems.find((storedItems) => storedItems.id === item.id) ? 'Added' : 'Add to cart'}
      </button>
    </>
  )
}

export default Button