import { INCREMENT } from "../actions/counter";
let counter = 0;

export default (state = counter, action) => {
  if (action.type === INCREMENT) {
    return state+1;
  }
  else {
    return counter
  }
}