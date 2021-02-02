import { INCREMENT, RESET } from "../actions/counter";
let counter = 0;


export default (state = counter, action) => {
 // console.log("dados do  counter");
  //console.log(action);
  //console.log(state);
  if (action.type === INCREMENT) {
    return state+1;
  }else if(action.type === RESET){
    return 0;
  }
  else {
    return counter
  }
}