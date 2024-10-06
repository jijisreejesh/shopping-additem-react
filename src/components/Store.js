import {createStore} from 'redux'
import AddItems from './AddItems';

const initialState = {
    cart: []
  };

export const addToCart = (item) => ({
    type: 'ADDITEM',
    payload: item
  });
const itemReducer=((state=initialState,action)=>
    {
      console.log(action.payload);
     switch(action.type)
     {
      case 'ADDITEM':
       return {
       ...state,
       cart:[...state.cart,action.payload]
       }
       default:
      return state;
    
     }
    }
)


const store=createStore(itemReducer);
export default store;