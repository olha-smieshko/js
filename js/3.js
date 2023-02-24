// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   // Change code below this line
//   name,
//   price,
//   image,
//   tags,
//   // Change code above this line
// };
// console.log (product);
// console.log (product.name);
// console.log (product.price);
// console.log (product.image);
// console.log (product.tags);
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
// while (propCount < object.length) {
//   propCount +=1;
// }
//   // Change code above this line
//   return propCount;
// }
// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
// function time (min) {
  // min <= 15 ? (return "перша"): min <= 30 ? return "друга" : min <= 45 ? return "третя" : return "четверта";
//   if (min <= 15) {
//     return "перша";
//   }
//   else if (min <= 30){
//     return "друга";
//   }
//   else if (min <= 45) {
//     return "третя";
//   }
//   return "четверта";
// }
// console.log (time (15));
// console.log (time (25));
// console.log (time (40));
// console.log (time (46));
// function arrReverseDel (arr, del) {
//   const newArr = [];
//   for (const item of arr) {
//     if (item === del){
//       continue;
//     };
//     newArr.unshift(item);
//   };
//   return newArr;
// }
// function arrReverseDel (arr, del) {
//   const newArr = arr.reverse();
//   for (let i = 0; i < newArr.length; i+=1) {
// if (newArr[i].includes(del)){
//       newArr.splice(newArr.indexOf(del), 1)
// }
//   }
//   return newArr
// }
// function arrReverseDel (arr, del) {
//   const newArr = [];
//   for (const item of arr) {
//     if (item !== del) {
//       newArr.unshift(item);
//     };
//   };
//   return newArr;
// }
// console.log (arrReverseDel (['BEST', 'the', 'foo', 'is',  'JS' ], 'foo'))
// function includes(array, value) {
//   // Change code below this line  
// for (const item of array) {
//   if (item === value){
//    return true;
//   } 
  
//  }
//   return false;
// }
 
//   // Change code above this line
// console.log (includes([1, 2, 3, 4, 5], 3));
// console.log (includes([1, 2, 3, 4, 5], 17));
// console.log (includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
// console.log (includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));
// console.log (includes(["apple", "plum", "pear", "orange"], "plum"));
// console.log (includes(["apple", "plum", "pear", "orange"], "kiwi"));

// function num (num1, num2) {

//   if (!(num1 % 2) && !(num2 % 2)) {
//     return num1 * num2;
    
//   }
//   else if  (!(num1 % 2) && num2 % 2) {
//     return num2;
//   }
//  else  if  (num1 % 2 && !(num2 % 2)) {
//   return num1;
// }
//   return num1 + num2;
// }
// console.log (num (2, 4));
// console.log (num (1, 4));
// console.log (num (2, 1));
// console.log (num (3, 7));
// console.log (num (0, 0));
// console.log (num (-2, 4));
// console.log (num (1, -4));
// console.log (num (2, -1));
// console.log (num (-3, 7));

const bookShelf = {
  books: ["The last kingdom", "Haze", "The guardian of dreams"],
  updateBook(oldName, newName) {
    const newBooks = this.books.slice();
    // Change code below this line
    if (newBooks.includes(oldName)) {
      newBooks.splice(newBooks.indexOf(oldName), 1, newName);
     
    }
  return newBooks;
    // Change code above this line
  },
   
};
console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
console.log(bookShelf.updateBook("The last kingdom", "Dune"));