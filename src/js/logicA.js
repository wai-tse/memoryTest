export function logicA() {
  var wrong = 0;
  return function(result) {
    if (result) {
      wrong = 0;
    } else {
      wrong = wrong + 1;
    }
    return wrong;
  };
}
