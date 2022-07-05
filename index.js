// Code your solutions in this file
// for(let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);   
// }

// const gifts = ['teddy bear', 'drone', 'doll'];
// function wrapGifts(gifts) {
//     for(let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
        
//     }

//     return gifts;
// }

// wrapGifts(gifts);


const note = [];
const event = [];
function writeCards(note, event) {
    let newArray = []
    for(let i = 0; i < note.length; i++){
       newArray.push(`Thank you, ${note[i]}, for the wonderful surprise gift!`);
    }
return newArray;
    }

// function countDown(integer);
// let countDown = 10;
// while (countDown <= 10) {
//   console.log(countDown--);
  
// }

function countDown(int){
  let i =0;
  while (i<11) {
    console.log(i)
    i++;
  }
  return int;
}