const q = selector => {
  let el;
  let returnObject;
  const obj = {
    getEl(selector) {
      if (el) return el;
      return document.querySelectorAll(selector);
    },
    addClass(className) {
      el.forEach(e => {
        e.classList.add(className);
      });
      return this;
    },
    removeClass(className) {
      el.classList.remove(className);
      return this;
    }
  };
  el = obj.getEl(selector);
  returnObject = {
    obj
  };
  el.forEach((e, index) => {
    returnObject[index] = e;
  });
  return returnObject;
};

export default q;
