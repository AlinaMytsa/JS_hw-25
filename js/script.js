'use strict';

//1 indexOf
// const arrExample = [1, 3, 5, 6];
// const indexOf = (arr,searchElement, fromIndex = 0) => {
// for(let i = fromIndex; i <arr.length; i +=1){
//   if(arr[i] === searchElement) return i;
// }
// return -1
// }
// console.log(indexOf(arrExample,3));

//2 lastIndexOf
// const arrExample = [1, 3, 5, 6];
// const lastIndexOf = (arr, searchValue, fromIndex) => {
//   for (let i = 0; i < arrExample.length; i += 1){
//     if(arr[i] === searchValue) return i;
//   }
//   return -1;
// }
// console.log(lastIndexOf(arrExample,6));

//3 find
// const exampleArr = ['a', 34, 'bc', 7, 4, 22];
// const updateArr = exampleArr.find = (element, index, array) => {
// if (element > 5) {
//   return element;
// }
//
// }
// console.log(updateArr(7))

//4 findIndex
// const exampleArr = [2, 34, 56, 3];
// const newArr = exampleArr.findIndex = () => {
//   for (let i = 0; i < exampleArr.length; i += 1){
//     if (i < 3) return i;
//   }
//   return false;
// }
// console.log(newArr())

//5 includes
// const arr = ['grid', 'lie', 44, 'over'];
// console.log(arr.includes('over'));

//6 every
// const arrExample = [1, 3, 5, 6];
// const every = (arr, callback) => {
//   for (let index = 0; index < arrExample.length; index += 1) {
//     if (!callback(arr[index], index, arr )) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(
//   every(arrExample, (item) => {
//   return item >= 1;
// })
// );

//7 some
// const exampleArr = [40, 6, 4, 2];
// const newArr = exampleArr.some(function(element) {
//   if (element > 22) return true;
// })
// console.log(newArr);
