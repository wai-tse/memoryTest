export function pick(num) {
  var lst = this.slice(); // duplicate a list
  var orgLst = this.slice();
  var rLst = [];
  for (var i = 0; i < num; i++) {
    var pickIndex = Math.floor(lst.length * Math.random());
    rLst.push(lst[pickIndex]);
    lst.splice(pickIndex, 1);
    if (lst.length === 0) lst = orgLst.slice();
  }
  return rLst;
}
