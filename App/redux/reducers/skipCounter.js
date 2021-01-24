import { INCREMENT } from "../actions/skipCounter";
let skipCounter = 0;

export default (state = skipCounter, action) => {

  if (action.type === INCREMENT) {
   // console.log("dados do skip counter");
    //console.log(action);
    //console.log(state);
    return state+1;
  }
  else {
    return skipCounter
  }
}