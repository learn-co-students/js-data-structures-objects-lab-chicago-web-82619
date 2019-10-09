let driver = {};

function updateDriverWithKeyAndValue(driverObject, key, value) {
  let newDriver = {...driverObject};
  newDriver[key] = value;
  return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driverObject, key, value) {
  driverObject[key] = value;
  return driverObject
}

function deleteFromDriverByKey(driverObject, key) {
  let newDriver = {...driverObject};
  delete newDriver[key];
  return newDriver
}

function destructivelyDeleteFromDriverByKey(driverObject, key) {
  delete driverObject[key];
  return driverObject
}