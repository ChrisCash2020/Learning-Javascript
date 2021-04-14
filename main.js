/*variables 
are essentially containers that contains a single value for that variable name so what ever condition is after the = is what that variable is displayed as */

var nameOfVariable;

//string
var name = "1";

console.log(name)

//number
var num1 = 1;
var num2 = 1.2; 

console.log(1);

//booLean
var bool1 = true;
var bool2 = false;

console.log(bool1);

//undefined
var hey;

console.log(hey);

//null
var hey2 = null;

console.log(hey2);

//operators
var num3 = 10;
num3 += num1;

console.log(num3);

//string operators
var age = 29;
var info = "My name is Chris, I am " + age + " years old " + 10;

console.log(info);

 //string operators in conjunction with numbrs used to give it space
var num4 = 14 % 3 ;

console.log(num4);

//CONDITONAL STATEMENT IF AND ELSE

var x = 10;
var y = 50;


/*the == sign is used opposed to the regular = as a question.so basically is't not declaring a varible but instead it is asking if that declared variable is equal to something else
the () brackets are for the conditions  and the {} are for the statements *dont't worry about specific staements atm and place the statements below the if conditions to look cleaner 
the === checks for data type (string, number, boolean, etc) and the value (essentially are the characters the same *Im not sure if that really why but I know it does this for Numbers */

if (x == 10)
{
  console.log("if!");
}

/* if(x != 10) this exclamation asks instead if the conditions are not equal to

if (x == 10 || y < 20) this means one of those if conditions needs to be true inorder for the code to run/show 

if (x == 10 && y < 20) this means that both of those if conditions neds to to be true inorder for the code to run/show */

//are like a secondary condition in conjunction with your first conditions (the if() condition) that have seperate or equal statements

// else if (anotherCondition)
// {
//   statement
// }
// else if (yetAnotherCondition)
// {
//   statement
// }

//   //the last else statement 
// else { yetAnotherCondition }
// {
//   statement
// }
  





/*ARRAYS
are containers that can contain more than one value at a time under the same variable name */








// the [] houses the different type of values under the same name, *In this array there is a string, number, and boolean *MUST be seperated by a comma
/* ex:
    var items1 = ["Bottle", 4, true]; */


// you can declare the variable name first then list the values of the array beneath it as long as you include the []
    /* var item;
    item = [4, "hello" true];
    */

    
//to display the whole array:
    /*var item = ["4", 4, 3];
    console.log(item)*/


//to display one value from the array, [0] displays the first value bc arrays are ordered in a 0-1 index 
    /*var item = [4,true, "wow"]
    console.log(item[0])*/


//to add a value to the end of the array
    /*var fruits = ["apples", "oranges", "pears"]
    console.log(fruits);
    fruits.push("mangos");
    console.log(fruits)
    fruits.push("banana")
    console.log(fruits)*/


//to remove an value at the end of an array
    /*var fruits = ["apples", "oranges", "pears"]
    console.log(fruits)
    fruits.pop()
    console.log(fruits)
    fruits.pop()
    console.log(fruits)*/


//to add a value to the begining of an array 
    /*var fruits = ["apples", "oranges", "pears"]
    console.log(fruits)
    fruits.unshift("mangos")
    console.log(fruits)
    fruits.unshift("strawberries")
    console.log(fruits)*/


//to remove a value at the beginning of an array 
    /*var fruits = ["apples", 'oranges', "pears"];
    fruits.shift();
    console.log(fruits);
    fruits.shift();
    console.log(fruits);*/
 

// to add and remove data simultaneously in an array 

    /*var fruits = ["apples", "oranges", "pears"];
    fruits.splice(2, 0, "Lemon", "Kiwi");
    console.log(fruits)/*

/* In a splice method the first parameter/number defines where the element should be 
added and the second defines how many should be taken out, *IF any of the previous 
values remain they will be shifted to a positon after the added element(s) and there 
index number will change.*/
/*when deciding what place to splice be aware that what ever you are going to add is 
going to be placed before that positon For EX: if you put the idex of 2 the splice 
element will show up where index 1 normally is.
Then the what you decided to remove is going to remove the specified amount from the
begining of the added values *IF you didn't add any values it will just start removing
elements starting with the value in index 0 and onwards*/


//to create a new array from a specific position from a previous array

    /*var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"]
    console.log(fruits)
    var citrus = fruits.slice(1);
    console.log(citrus);*/

//creats a new array with different name but similar data that starts at specifc value position
//Make a spice doesn't remove any values fromt he previous array. *Old array is uneffectd


// two arguments in a slice array method 

    /*var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"]
    var citrus = fruits.slice(1, 4)
    console.log(citrus)*/

/* the first parameter in a slice is the starting positon and is included in the values shown in the new array and the second parameter in a slice is the ending position and is 
not included in the new array, just the values before it no exceptions.
So in this variable citrus the output will be  "Orange", "Lemon", "Apple", 
Thats wordy so just know that the first number is the index included in the array up to the second number ie: (1, 4) is 1, 2, 3 *will give you no value if both numbers are equal */



//Properties and Methods





// To Find the Length of a var
    /*var item = "Bottle of water";
    console.log(item.length);*/


//to find the positon of a specific letter or sentences in the var

    /*var item = "Bottle of Water"
    console.log(item.indexOf("of"))*/

/* it finds the position by counting each character including the space up until it 
finds the matching character your searching for *it looks for the closest match*/


// to find the character associated to a specific position number index in the var

    /*var item = "Bottle of Water"
    console.log(item.substring(7))*/

/* finds the position of the closest character match and then outputs that match and all the other elements characters after it 
If you input (7, 9) it sets a container for output *Begins at first number position and ends at the position before the second number 
*will give you no value if both numbers are equal */

//to replace a word or character in the var

  /*var item = "Bottle of Water";
    console.log(item.replace("Water", "Juice"));*/
    
/* the replacement is case sensitive so you need to specify extactly the word or character you want to remove 
Only replaces the first match of the word or character and removes the whole element and replaces it with the given element
ex: replace("o", "Juice"));  this condition outputs BJuicettle of water */


//to make the whole variable transform to all uppercase 
    /*var item = "Bottle of Water";
    console.log(item.toUpperCase());*/


//to join all the values in the array together can also add different elements that will be in the spaces between the values 
    /*var items = ["Bottle", 4, true];
    console.log(items.join(" - ")) */









//Function






