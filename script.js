/* 
function createInstructor(firstName, lastName){
  return {
    firstName: firstName,
    lastName: lastName
  }
} */

function createInstructor(firstName,lastName){
  return{
    firstName,
    lastName
  }
}

createInstructor('Michael','Wiltfong')
/*
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"
*/
let favoriteNumber=42;
const instructor={
  [favoriteNumber]:'That is my favorite!'
}

instructor[42]