/* Testing Loops

Level 1

Task 1

You have been given a job at the Honey Loops factory. You need to start manufacturing Loops, and fast.
Inside the commented section of the function 'declareForHoneyLoop', declare a 'for' loop. The loop should cycle through itself ten times. 
On each pass, the loop should increment the 'loops' variable by 1. After the 'for' loop has finished, the value of the 'loops' 
variable should be 10. */

function declareForHoneyLoop() {
  var loops = 0;

  // Write code below me:
  for (loops = 0; loops < 10; loops++) {
    //console.log(loops);
  }
  // Write code above me ^^^

  return loops;
}

//declareForHoneyLoop()

/* Task 2

You quickly discover there is more than one way to skin a Honey Loop. Inside the commented section of the function 
'declareDoWhileHoneyLoop', declare a 'do...while' loop. The loop should increment the loops by 1 on every pass while the value of 
the 'loops' variable is less than ten. */

function declareDoWhileHoneyLoop() {
  var loops = 0;

  // Write code below me:
  do {
    loops = loops + 1;
  } while (loops < 10);
  //console.log(loops);

  // Write code above me ^^^

  return loops;
}

//declareDoWhileHoneyLoop()

/* Task 3

The monotony inside the Honey Loops factory is oppressive, and you leave each day with the buzzing sound of bees itched on to your brain.
Yet another new process has been implemented, and you willlessly oblige. Inside the commented section of the function 
'declareWhileHoneyLoop', declare a 'while' loop. The loop should increment the loops by 1 until the loops reach the value of 10. */

function declareWhileHoneyLoop() {
  var loops = 0;

  // Write code below me:
  while (loops < 10) {
    loops++;
    //console.log(loops);
  }
  // Write code above me ^^^

  return loops;
}

//declareWhileHoneyLoop()

/* Task 4

The Honey Loops factory is hypnotic, and so is the number seven. Inside the commented section of the function 'declareHoneyLoopLabel', 
declare a loop of your choice. On each pass, the loop should increment the variable 'sevenLoopsAtATime' by seven until it reaches 70. 
The loop should be given the label: 'honeyLoopsComeInSevens'. */

function declareHoneyLoopLabel() {
  var sevenLoopsAtATime = 0;

  // Write code below me:
  honeyLoopsComeInSevens: for (let index = 0; index <= 10; index++) {
    sevenLoopsAtATime = index * 7;
    //console.log(sevenLoopsAtATime);
  }
  // Write code above me ^^^

  return sevenLoopsAtATime;
}

//declareHoneyLoopLabel()

/* Level 2

Task 5

One of your collegues stumbles up to you, their face obscured by lumps of crystalised honey. They pass you a sticky note and your eyes
glaze over. It is time to break out of here. The declareHoneyBreakStatement function takes in a hypnosisArray (array), a 
befuddlementValue (number) and a breakFreeValue (number) as its arguments. Declare a 'for' loop that increments each number in the 
hypnosisArray by the befuddlementValue on each pass. However, it should include a break value to stop the loop if it passes over a 
number which matches the breakFreeValue. For example, for the following variables:

var hypnosisArray = [1, 2, 1, 2, 3, 1, 2,]
var befuddlementValue = 5
var breakFreeValue = 3

The function would return the following array:

var updatedhypnosisArray = [6, 7, 6, 7, 3, 1, 2] 

It's time to break free. */

function declareHoneyBreakStatement(
  hypnosisArray,
  befuddlementValue,
  breakFreeValue
) {
  var updatedHypnosisArray = hypnosisArray;
  console.log(hypnosisArray);
  console.log(befuddlementValue);
  console.log(breakFreeValue);

  // Write code below me:
  for (let index = 0; index < hypnosisArray.length; index++) {
    if (updatedHypnosisArray[index] === breakFreeValue) {
      break;
    }
    updatedHypnosisArray[index] = hypnosisArray[index] + befuddlementValue;
    console.log(updatedHypnosisArray);
  }
  // Write code above me ^^^

  return updatedHypnosisArray;
}

//declareHoneyBreakStatement()

/* Task 6

Disaster! Your attempt to break free failed, and as punishment you have been made to dispense secretHoneySauce and devilishLoopMix.
The Honey Loops factory has a strict policy of using twice as much devilishLoopMix as secretHoneySauce in each box of Honey Loops. 
Ingredients must be dispensed in controlled single measures to avoid wastage. Declare a 'while' loop which systemicatally 
dispenses secretHoneySauce and devilishLoopMix for each box. The loop should finish when 1 unit of secretHoneySauce and 2 units of 
devilishLoopMix has been dispensed for each order. Use a 'continue' statement to insure the right balance of ingredients 
is maintained. Ingredients should not be dispensed more than once on each pass of the 'while' loop, making a 'continue' statement 
essential. Such are your working conditions in the Honey Loop factory, now and for all time. */

function alternateIngredients(numberOfOrders) {
  var secretHoneySauce = 0;
  var devilishLoopMix = 0;

  // Write code below me:

  // Write code above me ^^^

  return [secretHoneySauce, devilishLoopMix];
}

/* Level 3

Task 7

The getKeyNames function takes in an object as its only argument. Use a 'for...in' loop to add each of the key names within the object 
to the 'keyNames' string, so that they form a comma seperated list. For example, the following object:

var object = {lastName: 'Raskolnikof', firstName: 'Rodion'}

would become:

var keyNames = 'lastName, firstName,' */

function getKeyNames(object) {
  var keyNames = "";

  // Write code below me:
  for (let keyNames in object) {
    console.log(`${keyNames}, ${object}`);
  }
  // Write code above me ^^^

  return keyNames;
}

//getKeyNames()

/* Task 8

The generateArrayList function takes in an array as its only argument. Use a 'for...of' loop to add each of the items within the 
array to the 'arrayList' string, so that they form a comma seperated list. For example, the following array:

var array = [apple, pear, peach]

would become:

var arrayList = 'apple, pear, peach,' */

function generateArrayList(array) {
  var arrayList = "";

  // Write code below me:
  for (let element of array) {
  }
  // Write code above me ^^^

  return arrayList;
}

module.exports = {
  declareForHoneyLoop,
  declareDoWhileHoneyLoop,
  declareWhileHoneyLoop,
  declareHoneyLoopLabel,
  declareHoneyBreakStatement,
  //   alternateIngredients,
  //   getKeyNames,
  //   generateArrayList,
};
