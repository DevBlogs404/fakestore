// when page is refreshed, redux data is cleaned/removed
//a reducer must have some initial value
// a reducer must resturn some value
// to avoid if-else-if ladder, switch statement are used in reducers
import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constant";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [action.data, ...data];

    case REMOVE_FROM_CART:
      let newData = data.filter((item) => item.id !== action.data);
      return [...newData];

    case EMPTY_CART:
      data = [];
      return [...data];

    default:
      return data;
  }
};
