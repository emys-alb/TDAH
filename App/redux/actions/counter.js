//export const INCREMENT = 'INCREMENT_COUNTER';
export const INCREMENT = 'INCREMENT';
export const RESET = 'RESET';
export function increment() {
  return {
    type: INCREMENT
  }
}
export function reset() {
  return {
    type: RESET
  }
}