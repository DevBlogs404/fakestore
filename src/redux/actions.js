import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from './constant';

// this is an action, action is a plain function used to get data from React and pass it to reducers
// useDispatch() hook from react-redux, is used to call a action
export const addToCart = (data)=>{               
    // console.log("addToCart action called", data);
return {
    type : ADD_TO_CART,
     data                     
}
};

export const removeFromCart = (data)=>{               
    // console.log(" removeFromCart action called", data);
return {
    type : REMOVE_FROM_CART,
     data                     
}
};

export const emptyCart = ()=>{               
    // console.log(" emptyCart action called");
return {
    type : EMPTY_CART                   
}
};

