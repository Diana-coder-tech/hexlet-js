export function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}
console.log(last(["one", "two"]));
export default () => console.log("Hello, Hexlet!");


