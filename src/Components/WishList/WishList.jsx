import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartExport, setWishListData } from '../../Slice Container/cartSlice';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { products } from '../../Slice Container/StoreItemsSlice';

const WishList = () => {
    const { wishList, fillHeart } = useSelector(cartExport);
    const { storeItems } = useSelector(products);
    const dispatch = useDispatch();
    const [wishListItems,setWishListItems] = useState([])
    const heartKeys = JSON.parse(localStorage.getItem('heartFilled'))
    useEffect(() => {
        const keys = Object.keys(fillHeart).filter(key => fillHeart[key]);
        dispatch(setWishListData(keys));
    }, [fillHeart, dispatch]);

    useEffect(() => {
        const wishListItems = storeItems.filter(value => wishList.find(item => item === value.id));
        setWishListItems(wishListItems)
    }
    
    , [wishList, storeItems]);    
    return (
        <div className="parent flex flex-wrap justify-around">
             {wishList.length > 0 ? (
                wishListItems.map(item => (
                    <div className="card w-80 rounded-md p-2 py-4 my-3 mx-2 border-2 bg-slate-200" key={item.id}>
                        <Link to={`/${item.category}/${item.id}`}>
                            <div className="image">
                                <img src={item.image} alt="" className="rounded-md h-44 w-full" />
                            </div>
                            <div className="parent flex flex-col justify-center w-full items-center">
                                <div className="details my-2 flex flex-col justify-center w-full items-center">
                                    <h3>Company:- <span className="font-medium capitalize">{item.company}</span></h3>
                                    <h3>Model:- <span className="font-medium capitalize">{item.name}</span></h3>
                                    <h3 className="text-center text-md">
                                        Colors: <br />
                                        <span className="font-normal text-sm">
                                             {item.colors.map(val => val)}
                                         </span>
                                    </h3>
                                </div>
                                <div className="price">
                                    <p>Price: <span className="font-light text-sm">{item.price}/rs</span></p>
                                </div>
                            </div>
                        </Link>
                        <div className="button flex justify-center">
                            <Button item={item} />
                        </div>
                    </div>
                ))
            ) : (
                <h1>Nothing in the wishlist</h1>
            )}
        </div>
    );
};

export default WishList;