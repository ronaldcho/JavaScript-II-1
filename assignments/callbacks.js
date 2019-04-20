// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];


  //Given this problem: 
/*  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }
  // Potential Solution:
  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    console.log("This is array parameter contain [" + arr + "]" + cb);
    return cb(arr[0]);
  }
  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });
*/

function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}
getLength(items, function(first) {
  console.log(first);
})

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}
last(items, function(first) {
  console.log(first);
})

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb( x + y );
}

sumNums(2, 4, function(first){
  console.log(first);
})


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb( x * y );
}
multiplyNums(3, 9, function(first){
  console.log(first);
})

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
     // console.log(list.indexOf(item));
     // console.log(item);
  
  if (list.indexOf(item) == 1) {
    // console.log(list.indexOf(item));
   return cb(true); 
  } else {
      return cb(false);
  }
}

contains('Bats', items, function(flag) {
  console.log(flag); // should be false
});

contains('Notebook', items, function(flag) {
  console.log(flag); // should be true
});

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  console.log(array);
  let noDuplicate_array = array.filter(function(elem, index, self){
    return index == self.indexOf(elem);
  })
  return cb(noDuplicate_array);
}


removeDuplicates(items, function(dupeFreeArray) { 
  console.log(dupeFreeArray);
});


//  let noDuplicate_array = array.filter(function(elem, index, self){
//    console.log(self.indexOf(elem));
//     return index == self.indexOf(elem);
//  })
//   // console.log(noDuplicate_array);
//   return cb(noDuplicate_array);
// }


removeDuplicates(items, function(dupeFreeArray) { 
  console.log(dupeFreeArray);
});
// function removeDuplicateUsingFilter(arr){
//     let unique_array = arr.filter(function(elem, index, self) {
//       // console.log(`This is the index ${self.indexOf(elem)}`);
//       // console.log(`The loop index is the  ${index}`);
//         return index == self.indexOf(elem);
//     });
//   // console.log(`outside filter  ${unique_array}`);
//     return unique_array
// }
