export default function canIterate(value) {
  return !((!(value) || !(value[Symbol.iterator])));
}
