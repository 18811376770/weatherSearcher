import {FETCH_WEATHER} from "../actions/index";
export default function(state = [], action){
   switch (action.type) {
     case 'FETCH_WEATHER':
    //we can't do thing like state.push(action.payload.data)
    //we just create a new array with new data
      return state.concat([action.payload.data]);
  }
  return state;
}
