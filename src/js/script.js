export default function findBy(key, prop) {
  return function closures(obj) {
    if (key === 'name') {
      if (obj.name === prop) {
        return true;
      }
    }
    if (key === 'type') {
      if (obj.type === prop) {
        return true;
      }
    }
    if (key === 'description') {
      if (obj.description === prop) {
        return true;
      }
    }
    return false;
  };
}
