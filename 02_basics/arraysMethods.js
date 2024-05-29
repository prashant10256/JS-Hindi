const arr1 = [10, 20, 30, 40, 50, 60];

const arr2 = [100, 200, 300, 400, 500];

const ar1 = [[1,3], [5,6],[9,0]]

const newArr = ar1.flat() // The flat() method creates a new array with sub-array elements concatenated to a specified depth.

// console.log(newArr);

// const newArray = arr1.concat(arr2)

// console.log(arr1.toSpliced(0,3)); // toSpliced() method as a safe way to splice an array without altering the original array.

/* The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array,
 keeping the original array unchanged, while the old method altered the original array.*/

//  console.log(arr1.slice(2)); // The slice() method slices out a piece of an array into a new array:

 console.log(arr1);
//  console.log(arr1.at(3)); //The at() method returns an indexed element from an array. The at() method returns the same as [].
// console.log(arr1.join("-")); // The join() method also joins all array elements into a string.It behaves just like toString(), but in addition you can specify the separator:
console.log(arr2);