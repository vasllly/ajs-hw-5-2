export default function findBy(key, prop) {
  return function closures(obj) {
    if (obj[key] === prop) {
      return true;
    }
    return false;
  };
}
