//export const INCREMENT = 'INCREMENT_SKIP';
export const INCREMENT = 'INCREMENT';
//export function incrementSkip() {
export function increment() {
  return {
    type: INCREMENT
  }
}