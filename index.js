'use strict';

// YOU KNOW WHAT TO DO //

/**
 * Identity: this function takes in a value and returns tht value unchanged
 * @param {array, number, boolean, undefined, string} anything: takes in a parameter of any value 
 * @returns {value}: Returns the input value unchanged 
 */

function identity(value) {
    return value;
}

module.exports.identity = identity;


/**
 * typeOf: this funciton takes in a value and returns a string of that values's data type
 * @param {array, number, boolean, undefined, string} anything: takes in a parameter of any value 
 * @returns {string}: returns a string describing the data type of the argument  
 */

 function typeOf(value) {
    if (typeof value === 'string') {
        return 'string';}
    else if (Array.isArray(value)) {
        return 'array'}
    else if (typeof value === 'undefined') {
        return 'undefined'}
    else if (typeof value === 'boolean') {
        return 'boolean'}
    else if (value === null) {
        return 'null'}
    else if (typeof value === 'number') {
        return 'number'}
    else if (typeof value === 'object' && Array.isArray(value) === false) {
            return 'object'}
    else {
        return 'function'
    }
} module.exports.typeOf = typeOf;

/**
 * first: given an input array and number n, this function returns an array of the first n values of the array
 * @param {array}: the array from which we are copying values
 * @param {number}: the number of values we want to copy from the front of the array
 * @returns {array}: returns an array of the first n values of the input array. if the input array is not an array, return an empty array. if the input number is not a number, pushes the first array value into return array
 */

 function first(array, num) {
    var returnArray = [];
    if (!Array.isArray(array) || num < 0 ){
        return [];
    } if (typeof num !== 'number') {
        return array[0];
    } if (num > array.length) {
        return array;
    }
    for (var i = 0; i < num; i++) {
        returnArray.push(array[i])
        
    }
    return returnArray
} module.exports.first = first;

/**
 * last: given an input array and number n, this function returns an array of the last n values of the array
 * @param {array}: the array from which we are copying values
 * @param {number}: the number of values we want to copy from the end of the array
 * @returns {array}: returns an array of the last n values of the input array. if the input array is not an array, return an empty array. if the input number is not a number, pushes the first array value into return array   
 */

 function last(array, num) {
    var returnArray = [];
    if (!Array.isArray(array) || num < 0 ){
        return [];
    } if (typeof num !== 'number') {
        return array[array.length - 1];
    } if (num > array.length) {
        return array;
    }
    for (var i = array.length - num; i < array.length; i++) {
        returnArray.push(array[i])
        
    }
    return returnArray
} module.exports.last = last;

/**
 * indexOf: this function takes in an array and a value and returns the index at which the first instance of the value is found.
 * @param {array}: an array that may contain the value parameter
 * @param {value} anything: takes in any parameter for which we'll search in the array  
 * @return {number}: returns the first index of array at which value is found 
*/
function indexOf(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    } return -1

} module.exports.indexOf = indexOf;

/**
 * contains: this funciton takes in an input array and value and returns true if that value is found in the array, returns false if not
 * @param {array}: an array that may contain the value parameter
 * @param {value} anything: takes in any parameter for which we'll search in the array  
 * @return {boolean}: returns true if value is found in array, else returns false
 */

 function includes(array, value) {
    return (array.includes(value) ? true : false)
}
module.exports.includes = includes;



/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * unique: this funciton takes in an array and returns a new array of the input array withall duplicate values removed
 * @param {array}: any array  
 * @returns {array}: the inpput array with all duplicate values removed  
 */
 function unique(array) {
    var newArr = [];
   for (var i = 0; i < array.length; i++) {
       if (_.indexOf(newArr, array[i]) == -1) {
           newArr.push(array[i])
       }
   } return newArr
}
module.exports.unique = unique;


/**
 * filter: this function takes in an array and a funciton, and returns an array of all elements for which function(element) = true
 * @param {array}: the array that will have its elements passed into the function
 * @param {function}: a function that will be called on all elements of the input array and returns true or false
 * @returns {array}: returns an array of all elements of the input array that, when passed into the input funciton, return true   
 */

 function filter(array, func) {
    var returnArray = [];
    for (var i = 0; i < array.length; i++) {
        if (func(array[i], i, array)) {
            returnArray.push(array[i]);
        }
    } return returnArray;
}
module.exports.filter = filter;


/**
 * reject: this function takes in an array and a funciton, and returns an array of all elements for which function(element) = false
 * @param {array}: the array that will have its elements passed into the function
 * @param {function}:  a function that will be called on all elements of the input array and returns true or false
 * @returns {array}: returns an array of all elements of the input array that, when passed into the input funciton, return false
 */

 function reject(array, func) {
    var returnArray = [];
    for (var i = 0; i < array.length; i++) {
        if (func(array[i], i, array)) {
        } 
        else {
            returnArray.push(array[i])
        }
    } return returnArray;
} module.exports.reject = reject;


/**
 * partition: this funciton takes in an array and a function and returns an array comprising two sub arrays--one of elements for which calling the input function returned true, the other of values for which calling the input function returned false
 * @param {array}: the array of values that will be passed into the input funciton
 * @param {funciton}: a function that will take in elements from the input array and return true or false
 * @returns {array}: an array comprising two sub-arrays of the values from the input array--the first containing the elements that returned true when passed into the funciton, the other containing the elements that caused the input function to resolve to false  
 */
function partition(array, func) {
    var arrayTruthy = [];
    var arrayFalsy = [];
    for (var i = 0; i < array.length; i++) {
        if (func(array[i], i, array)) {
            arrayTruthy.push(array[i])
        } else {
            arrayFalsy.push(array[i]);
        }
    } return [arrayTruthy, arrayFalsy];
} module.exports.partition = partition;

/**
 * map: this funciton takes in a collection and a function and returns a collection of the returns from passing the collection elements into the input function
 * @param {object or array} collection: a collection of values to pass into our input function
 * @param {function}: a function to be called on the elements of the collection
 * @returns {object or array} collection: returns an object or array of the returns from calling the input funciton on elements of the input collection  
 */

 function map(collection, func) {
    var returnArr = [];
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            returnArr.push(func(collection[i], i, collection));
        }
    }
    else {
        for (var key in collection) {
            returnArr.push(func(collection[key], key, collection))
        }

    }
    return returnArr;
} module.exports.map = map;


/**
 * pluck: this function takes in an array of objects and a property, and returns an array comprising the values of the properties in our object array
 * @param {array}: an array of objects
 * @param {string} property: a property for whcich we'll return the value at the objects in our array
 * @returns {array}: returns an array of the values of our proprty input for all objects in our input array 
 */

 function pluck(array, prop) {
    return _.map(array, function(obj) {
         return obj[prop]
    })
} module.exports.pluck = pluck;


/**
 * every: this function takes in a collection and a funcition, passes the elemetns into the function--if all of the funciton calls resolve to true, the function returns true. if any of the funciton calls return false, the funciton returns false
 * @param {array or object} collection: an object or array of elements to pass into our input function
 * @param{function}: funciton to be called on all elements of our colection, returning true or false
 * @returns {boolean}: if all of the input function calls return true, return true, else return false
 */

 function every(collection, func) {
    //if array, func(collection[i], i, collection)
    var result = true;
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            if (!func) {
                if (collection[i]) {}
                else {result = false}
            }
            else if (func(collection[i], i, collection)) { }
            else { result = false }
        }
    } else {
        for (var key in collection) {
            if (!func) {
                if (collection[key]) {}
                else {result = false}
            }
            else if (func(collection[key], key, collection)) { }
            else { result = false }
        }

    }
    return result;
} module.exports.every = every;


/**
 * some: this function takes in a collection and a funcition, passes the elements into the function--if any of the funciton calls resolve to true, the function returns true, optherwise, the funciton returns false  
 * @param {array or object} collection: an object or array of elements to pass into our input function
 * @param{function}: funciton to be called on all elements of our colection, returning true or false
 * @returns {boolean}: if any of the input function calls return true, return true, else return false
 */

 function some(collection, func) {
    //if array, func(collection[i], i, collection)
    var result = false;
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            if (!func) {
                if (!collection[i]) {}
                else {result = true}
            }
            else if (!func(collection[i], i, collection)) { }
            else { result = true }
        }
    } else {
        for (var key in collection) {
            if (!func) {
                if (!collection[key]) {}
                else {result = true}
            }
            else if (!func(collection[key], key, collection)) { }
            else { result = true}
        }

    }
    return result;
} module.exports.some = some;



/**
 * reduce: this funciton takes in an array, function, and a seed value (optional), iterates through the array, calling the funciton on each element,a nd adding the reteurn to an accumulator value, which is retrurned once the function has been called on all elemetns of the array
 * @param {array}: a list of values to pass into the function
 * @param {funciton}: a function to be called on the array elements, the return of which will be added to our accumulator value
 * @param {any value} seed: (optional) a starter value that will be added to the function returns
 * @returns {any value}  returns the sum of the seed + returns from callling the funciton on all array elements
*/

function reduce(array, func, seed) {
    //if no seed provided
    if (seed === undefined) {
        seed = array[0]
        for (let i = 1; i < array.length; i++) {
            seed = func(seed, array[i], i)
        }
    } else {
        for (let i = 0; i < array.length; i++) {
            seed = func(seed, array[i], i)

        }
    } return seed
} module.exports.reduce = reduce;


/**
 * extend: this function takes in any number of objects and copies the properties from the second object on, into the first object, and returns the first object with the new properties
 * @param {object}: this object will have all subsequent inputs' properties copied to it
 * @param {object}: this object will have its properties copied to the first object
 * @param {object}: this object will also have its properties copied to the first object
 * @returns {object}: funtion returns the first input object with porperties from other input objects added  
 */

 function extend(obj1, ...args) {
    for (var i = 0; i < arguments.length; i++) {
       var returnObj = Object.assign(obj1, args[i])
    }
    return returnObj
} module.exports.extend = extend;