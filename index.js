// Write your solution in this file!
let driver = {};

const updateDriverWithKeyAndValue = (obj, key, value) => {
    return Object.assign({}, obj, {[key]: value});
}

const destructivelyUpdateDriverWithKeyAndValue = (obj, key, value) => {
    obj[key] = value
    return obj
}

const deleteFromDriverByKey = (obj, key) => {
    let newObj = Object.assign({}, obj);
    delete newObj[key];
    return newObj; 
}

const destructivelyDeleteFromDriverByKey = (obj, key) => {
    delete obj[key];
    return obj;
}