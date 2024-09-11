import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  cartExport,
  increaseCartNumber,
  cartItemQuantity,
} from "../Slice Container/cartSlice";

const useCartHandler = () => {
  const { cartedItems, itemQuantity } = useSelector(cartExport);
  const dispatch = useDispatch();
  const handleCart = (item) => {
    const existingItem = cartedItems.find((val) => val.id === item.id);
    if (existingItem) return;

    dispatch(addToCart(item));
    dispatch(increaseCartNumber());
    dispatch(cartItemQuantity({ [item.id]: 1 }));
    console.log(itemQuantity);
  };
  return handleCart;
};

export { useCartHandler };
