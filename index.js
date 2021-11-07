
/*
1. Create an array called softwareEngineeringStudents and add 10 students from your class in the array. Then, print the softwareEngineeringStudents to the console using console.log.

/*
* Programming Quiz: Software Engineering Students
*/

/*
* QUIZ REQUIREMENTS
* - Your code should have a variable `softwareEngineeringStudents`
* - The variable `softwareEngineeringStudents` should be an array containing the values of 10 students from your class
* - Your code should print `softwareEngineeringStudents` to the console
*
*/

// your code goes here



const softwareEngineeringStudents = ["Tope","Segun","Peace","Timi","Eno","Bola","Bolu","Ade","Ken","Jack"];
console.log (softwareEngineeringStudents);




/*
2. The space western TV drama Firefly premiered in the United States on September 20, 2002. Although the show only featured fourteen episodes and was canceled during its first season, it continues to remain popular today with a growing fan base. In the show, the captain Mal, played by Nathan Fillion, leads a crew of renegades on the spaceship Serenity.

Create an array called crew to organize the Serenity’s crew and set it equal to the variables below . You don't need to type out the actual strings, just use the provided variables.

let captain = "Mal";
let second = "Zoe";
let pilot = "Wash";
let companion = "Inara";
let mercenary = "Jayne";
let mechanic = "Kaylee";
Then, print the crew array to the console.



/*
* Programming Quiz: Building the Crew
*/
/*
* QUIZ REQUIREMENTS
* - Your code should have a variable `crew`
* - The variable `crew` should be an array containing the Serenity\'s crew
* - Your code should print `crew` to the console as an array. Do not iterate over the elements.
*
*/
let captain = "Mal";
let second = "Zoe";
let pilot = "Wash";
let companion = "Inara";
let mercenary = "Jayne";
let mechanic = "Kaylee";
// your code goes here


const crew = [captain, second, pilot, companion, mercenary, mechanic];
console.log (crew);


/*/
3. Starting with this array of prices, change the prices of the 1st, 3rd, and 7th elements in the array.
const prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];
TIP: The 1st element of any array has an index of 0.
Afterwards, print out the prices array to the console.
/*
* Programming Quiz: The Price is Right
*/
/*
* QUIZ REQUIREMENTS
* - Your code should have a variable `prices`
* - The variable `prices` should be an array having different values for the 1st, 3rd, and 7th elements
* - Your code should print `prices` to the console as an array. Do not iterate over the elements.
*/
const prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];
// your code goes here

const prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];
prices[0] = 3.33
prices[2] = 50.85
prices[6] = 7.77

console.log(prices);

/*
4. James was creating an array with the colors of the rainbow, and he forgot some colors. The standard rainbow colors are usually listed in this order:

const rainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];

but James had this:

const rainbow = ["Red", "Orange", "Blackberry", "Blue"];

Using only the splice() method, insert the missing colors into the array, and remove the color "Blackberry" by following these steps:

Remove "Blackberry"
Add "Yellow" and "Green"
Add "Purple"
/*
* Programming Quiz: Colors of the Rainbow
*
* Use only the splice() method to modify the rainbow variable:
*  - remove "Blackberry"
*  - add "Yellow" and "Green"
*  - add "Purple"
*/

const rainbow = ['Red', 'Orange', 'Blackberry', 'Blue'];

// your code goes here
const rainbow = ['Red', 'Orange', 'Blackberry', 'Blue'];

// your code goes here
rainbow.splice(2,1);

rainbow.splice(2,1, "Yellow", "Green");

rainbow.splice(5,0, "Purple");

console.log(rainbow);


/*
5. In the Harry Potter novels, children attending the Hogwarts School of Witchcraft and Wizardry belong to one of four houses: Gryffindor, Hufflepuff, Ravenclaw, or Slytherin. Each year, the houses assemble a Quidditch team of seven players to compete for the coveted Quidditch Cup.
Consider the following array.

const team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];

Create a function called hasEnoughPlayers() that takes the team array as an argument and returns true or false depending on if the array has at least seven players.
/*
* Programming Quiz: Quidditch Cup
*/
/*
* QUIZ REQUIREMENTS
* - Your code should have a function `hasEnoughPlayers()`
* - Your function `hasEnoughPlayers()` should accept one parameter
* - Your function `hasEnoughPlayers()` should return the expected output - a Boolean value - true or false
* - Return true if the array size is atleast 7, otherwise false.
*/
// your code goes here
const team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
console.log(hasEnoughPlayers(team));










