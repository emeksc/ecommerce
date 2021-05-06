import { CART_ADD_ITEM } from "../constants/cartConstacts";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x //eğer ki önceden olan bir ürünse sepette var olan yerine yeni olanı koyuyoruz
          ),
        };
      }
      else{
        return {...state,cartItems:[...state.cartItems,item]}//burada direkt ekliyoruz
      }

    default:
      return state;
  }
};
