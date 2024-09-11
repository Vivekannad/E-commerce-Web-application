import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { fetchProduct, products } from '../Slice Container/StoreItemsSlice';
import { useDispatch, useSelector } from 'react-redux'
import { status } from '../Slice Container/status';
import Loader from './Loader/Loader';
import Button from './Button/Button';
const Cards = () => {
    const { category } = useParams()
    const { storeItems, Status, filteredArray } = useSelector(products)
    const dispatch = useDispatch()
    const [filteredState,setFilteredState] = useState('')

    useEffect(() => {
        dispatch(fetchProduct())
    }, [])

    const variety =  storeItems.filter((value) => {
        return value.category === category || category === 'all'
    })
    // setSortedArray([...variety]);
        const filterChangeHandler = (e) => {
            setFilteredState(e.target.value);    
    }
    if(filteredState === '1'){
        // dispatch(sortByHighToLow(filteredArray))
        variety.sort((a,b) => b.price - a.price)
    } else if(filteredState === '2'){
        variety.sort((a,b) => a.price - b.price)
        // dispatch(sortByLowToHigh(filteredArray))
    }

    // console.log('FILTERED ARRAY', filteredArray)
    return (

        <div className="parent flex flex-wrap justify-around my-3 mx-2">
            <div className='w-full filters'>
                <select name="" id="" className='w-32  border-2 border-black' onChange={filterChangeHandler}>
                    <option value="0">Default</option>
                    <option value="1">Price: high to low</option>
                    <option value="2">Price: low to high</option>
                </select>
            </div>
            {Status === status.integrated ? variety.map((item) => {
                return (
                    <div className="card w-80 rounded-md p-2 py-4 my-3 mx-2 border-2 bg-slate-200" key={item.id}>
                        <Link to={`/${category}/${item.id}`}>
                            <div className="image " >
                                <img src={item.image} alt="" className='rounded-md h-44 w-full' />
                            </div>
                            <div className="parent flex flex-col justify-center w-full items-center">
                                <div className="details my-2 flex flex-col justify-center w-full items-center">
                                    <h3 className=''>Company:- <span className='font-medium capitalize'>{item.company}</span></h3>
                                    <h3 className=''>Model:- <span className='font-medium capitalize'>{item.name}</span></h3>
                                    <h3 className='text-center text-md'>colors are <br /> <span className='font-normal text-sm'> {item.colors.map((colors) => colors)} </span></h3>
                                </div>
                                <div className="price">
                                    <p>Price: <span className='font-light text-sm'>{item.price}/rs</span></p>
                                </div>
                            </div>
                        </Link>
                        <div className="button flex justify-center">
                            <Button item={item} />
                        </div>
                    </div>

                )
            }) :
                <Loader />
            }
            {variety.length === 0 && Status === status.integrated && <h1>Invalid Prodcut</h1>}
        </div>
    )
}

export default Cards

