# Testing Loops

Navigate to main.js to write your answers to the following tasks.

## Level 1

### Task 1

-for statement

Inside the commented section of the function 'declareForLoop', declare a 'for' loop. The loop should cycle through itself ten times. On each pass, the loop should increment the 'counter' variable by 1. After the 'for' loop has finished, the value of the 'counter' variable should be 10.

```

function declareForLoop() {
var counter = 0

    // Write code below me:

    // Write code above me ^^^

    return counter

}

```

### Task 2

-do...while statement

Inside the commented section of the function 'declareDoWhileLoop', declare a 'do...while' loop. The loop should increment the counter by 1 on every pass while the value of the 'counter' variable is less than ten.

```

function declareDoWhileLoop() {
var counter = 0

    // Write code below me:

    // Write code above me ^^^

    return counter

}

```

### Task 3

-while statement

Inside the commented section of the function 'declareWhileLoop', declare a 'while' loop. The loop should increment the counter by 1 until the counter reaches the value of 10.

```

function declareWhileLoop() {
var counter = 0

    // Write code below me:

    // Write code above me ^^^

    return counter

}

```

### Task 4

-labeled statement

Inside the commented section of the function 'declareLoopLabel', declare a loop of your choice. On each pass, the loop should increment the variable 'sevenTimesTable' by seven until it reaches 70. The loop should be given the label: 'myFirstSevenTimesTableLoop'.

```

function declareLoopLabel() {
var sevenTimesTable = 0

    // Write code below me:

    // Write code above me ^^^

    return sevenTimesTable

}

```

## Level 2

### Task 5

-break statement

The writeBreakStatement function takes in a numbersArray (array), an incrementValue (number) and a breakValue (number) as its arguments. Declare a 'for' loop that increments each number in the array by the incrementValue on each pass. However, it sould include a break value to stop the loop if it passes over a number which matches the breakValue. For example, for the following variables:

```

var numbersArray = [1, 2, 1, 2, 3, 1, 2,]
var incrementValue = 5
var breakValue = 3

```

The function would return the following array:

```

var updatedNumbersArray = [6, 7, 6, 7, 3, 1, 2]

```

```

function incrementNumbersUntilBreak(numbersArray, incrementValue, breakValue) {

    var updatedNumbersArray = numbersArray

    // Write code below me:

    // Write code above me ^^^

    return updatedNumbersArray

}

```

### Task 6

-continue statement

You run a restaurant that has a strict policy of using twice as much sour sauce as sweet sauce on its food orders. Sauce must be dispensed in controlled single measures to avoid wastage. Declare a 'while' loop which systemicatally dispenses sweet and sour sauce for each order. The loop should finish when 1 unit of sweetSauce and 2 units of sourSauce have been dispensed for each order that has been placed. Use a 'continue' statement to insure the right balance of sauces is maintained. Sauce should not be dispensed more than once on each pass of the 'while' loop, making a 'continue' statement essential.

```

function alternateSauces(numberOfOrders) {
var sweetSauce = 0
var sourSauce = 0

    // Write code below me:

    // Write code above me ^^^

    return {sweetSauce, sourSauce}

}

```

## Level 3

### Task 7

-for...in statement

The getKeyNames function takes in an object as its only argument. Use a 'for...in' loop to add each of the key names within the object to the 'keyNames' string, so that they form a comma seperated list. For example, the following object:

```

var object = {lastName: Raskolnikof, firstName: Rodion}

```

would become:

```

var keyNames = 'lastName, firstName'

```

```

function getKeyNames(object) {
var keyNames = ''

    // Write code below me:

    // Write code above me ^^^

    return keyNames

}

```

### Task 8

-for...of statement

The generateArrayList function takes in an array as its only argument. Use a 'for...of' loop to add each of the items within the array to the 'arrayList' string, so that they form a comma seperated list. For example, the following array:

```

var array = [apple, pear, peach]

```

would become:

```

var arrayList = 'apple, pear, peach'

```

```

function generateArrayList(array) {
var arrayList = ''

    // Write code below me:

    // Write code above me ^^^

    return arrayList

}

```
