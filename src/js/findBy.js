export default function findBy(key, prop) {
  return function closures(obj) {
    return obj[key] === prop;
  };
}
