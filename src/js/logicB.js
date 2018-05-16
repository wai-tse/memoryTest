export function logicB() {
  var pattern = [false, false, true, false, false];
  var counter = 0;
  var state = false;
  return function(result) {
    if (result == pattern[counter]) {
      counter = counter + 1;
    } else {
      counter = 0;
    }
    return counter;
  };
}
