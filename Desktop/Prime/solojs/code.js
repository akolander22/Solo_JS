var stringList = ["March", "April", "May"];

var numList = [13, 78, 34];

var boolList = [false, true, false];


// //step 1
for (var i = 0; i < stringList.length; i++) {
  console.log('Months listed are ' + stringList.join(', ') + '.' );
}
//step 2
console.log(numList[numList.length-1]);


//step 3
console.log(numList.join(''));
//step 4
var sum = 0;
for(var i = 0; i < numList.length; i++) {
  sum += numList[i];
}
console.log(sum);

//step 5
if (boolList[1] === true) {
  console.log(numList[0] + numList[numList.length -1]);
} else {
  console.log(numList[1] * numList[1]);
}
//step 6
for(var i = 0; i < boolList.length; i++){
  if(boolList[i] === true){
    console.log(numList[i])
  }
}
//step 7

var combinedArray = stringList.concat(numList, boolList);

console.log(combinedArray.reverse());
