// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = { ...driver };

  newDriver[key] = value;

  return newDriver;
};

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;

  return driver;
};
//
// function nondestructivelyUpdateObject(obj, key, value) {
//   return Object.assign({}, obj, { [key]: value });
// }


function deleteFromDriverByKey(driver, key) {
  const newDriver = Object.assign({}, driver, key)
  delete newDriver[key];

  return newDriver;
};

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  
  return driver;
};
