import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { products } from '../../Slice Container/StoreItemsSlice';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { cartExport, setWishListData, setFillHeart } from '../../Slice Container/cartSlice';

const Brand = () => {
    const { id } = useParams()
    const {storeItems} = useSelector(products)
    const {wishList, fillHeart} = useSelector(cartExport)
    const dispatch = useDispatch()
    const [heartfill, setHeartFill] = useState(false)
    const mountedRef = useRef(false)
    const brand = storeItems.find((value) => value.id === id)

    useEffect(() => {
        mountedRef.current = true;
        return() =>{
            mountedRef.current = false
        }
    },[])
    const existingData = JSON.parse(localStorage.getItem('heartFilled'))
    // const existingDataKeys = Object.keys(existingData).filter(value =>  existingData[value])
    
      const iconChangeHandler = () => {
          setHeartFill(!heartfill);
        if (mountedRef.current) {
            const object = {
             [brand.id]: !fillHeart[brand.id]
            }
            const wishListData = fillHeart[brand.id] ? brand : [];
            console.log('[wishListData]',wishListData)
          dispatch(setFillHeart( object)); // Toggle the heart state in Redux

          //get existingData form localStorage
          const heartFilledData = existingData ? (existingData) : []
          localStorage.setItem('heartFilled',JSON.stringify({...heartFilledData,...object}))
        }
      }
    return (
        <>
            <div className='parent flex justify-around items-center m-10'>
                <div className="image">
                    <img src={brand.image} alt="image" className='rounded-md ' />
                </div>
                <div className="details text-wrap mx-5 flex flex-col ">
                    <p>{brand.description}</p>
                    <p className=''>Category:-&nbsp;<span className='font-bold capitalize'>{brand.category}</span></p>
                    <p>Company:-&nbsp;<span className='font-bold capitalize'>{brand.company}</span></p>
                    <p>Model:-&nbsp;<span className='font-bold capitalize'>{brand.name}</span></p>
                    <p className='text-right'>Price:- {brand.price}</p>
                    <div className="button-group flex items-center">
                    <div className="wish-icon" onClick={iconChangeHandler}>
                    {!fillHeart[brand.id]   ? 
                    <FaRegHeart size={30} className='cursor-pointer'/>
                    : <FaHeart size={30} className='cursor-pointer' />
                        }
                    </div>
                    <div className="button">
                        <Button item={brand}/>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Brand