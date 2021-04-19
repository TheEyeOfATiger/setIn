"use strict";

function setIn(initialObj, path1, path2, path3, value) {
  if (arguments.length < 5) return initialObj;
  return setDeep(initialObj, [path1, path2, path3], value);
}

function setDeep(obj, paths, value) {
  let currentPointer = obj;
  const lastKey = paths[paths.length - 1]; //get last key (path3)
  while (paths.length - 1) {
    const key = paths.shift(); //get current key
    if (!(key in currentPointer)) currentPointer[key] = {}; //create key level if key does not exists
    currentPointer = currentPointer[key]; //advance pointer
  }
  currentPointer[lastKey] = value; //set value for path3
  return obj;
}

module.exports = setIn;
