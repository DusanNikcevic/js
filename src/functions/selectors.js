let q = function(selector, context) {
  return new q.init(selector, context);
};

let prevObject;
let initial = true;
q.obj = q.prototype = {
  getEl(selector) {
    if (initial) {
      return document.querySelectorAll(selector);
    } else {
      var pureList = [];
      const list = Object.values(prevObject)
        .map(e => {
          if (e.nodeName) {
            return e.querySelectorAll(selector).length > 0
              ? e.querySelectorAll(selector)
              : undefined;
          }
        })
        .filter(e => e)
        .forEach(el => el.forEach(n => pureList.push(n)));
      createObject(pureList);
    }
  }
};

function createObject(array) {
  array.map((e, index) => q.push(e));
  console.log(q);
}

let init = (q.init = function(selector, context, root) {
  if (!selector) {
    return this;
  }
  var elements = q.obj.getEl(selector);
  elements.forEach((e, index) => {
    this[index] = e;
  });
  initial = false;
  prevObject = this;
  this.selector = selector;
  this.prevObject = this;
  console.log(this);

  return this;
});
init.prototype = q.obj;

export default q;
