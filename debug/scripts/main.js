/*
    Read the comments and follow the instructions
    Total Points available -> 80
    Part 1 - 30 points
    Part 2 - 40 points
    Clean Code and Comments - 10 points
    Total Challenge/Bonus points -> 10
*/


/*========================
    Part 1 Fixing Code - 30
====================================*/


/*
    The code below is broken and not doing what it should.  
    
    Do your best to fix it.
    Look for:
    Wrong selectors
    Misspelling
    Variables used at the wrong time
    Wrong operators
    It uses the HTML in /debugging/index.html  
    Points Available: 30points
*/
$(function () {


    //This is supposed to add an event listener but it's causing an error
    //Fix it please.
    //document.getElementById('btnMake').addEventListener('click', build);
    $('#btnMake').on('click', build);

    function build() {
		//debugger;
        var firstName = $('#firstName');
        var firstNameValue = firstName.val('Whoops');


        var lastName = $('#lastName');
        var lastNameValue = lastName.val("");

        /*invalid should add a red border around the respective input
            It will also show a hidden error message */
        if (firstNameValue === '') {
            firstName.addClass('myInvalidClass');

            var parentDiv1 = firstName.closest('.input-group');
            var errorSpan1 = parentDiv1.find('.errors');
            errorSpan1.show();
        }

        if (lastNameValue ==='') {
            lastName.addClass('myInvalidClass');

            var parentDiv2 = lastName.closest('.input-group');
            var errorSpan2= parentDiv2.find('.errors');
            errorSpan2.show();
        }


        /*====================================
            I need to create an object, but it's not working
            so I just commented it out.
            Please fix it
        ======================================*/

		
        var userObject = {
            firstName: "Cat" ,
            lastName:"Kat" ,
            fullName: function() {
                return this.firstName + ' ' + this.lastName;
            },
            state: $('#state').get()
        };
		
		console.log(userObject.fullName());
        console.log(userObject);
		

        


    }





});



/*========================
    Part 2 Writing Functions -  10 points each
====================================*/


/*
    Write a JavaScript function that accepts 
    one input parameter and returns the number 
    of characters in the string.
    //Sample
    var foo = getLength('hello world');
    console.log(foo) // Outputs 11
*/

/*
Write getLength function here

*/
function getLength(input){
	
	return input.length;
}

// Uncomment this to test getLength function
console.log('-------------Get Length----------------'); 
var foo = getLength('hello world');
console.log(foo); // Outputs 11
var foo2 = getLength('lorem lorem asldkf asldfkja sdf');
console.log(foo2); // Outputs 31
console.log('-----------------------------'); 





/*
    Write a JavaScript function that computes the sum
    all of the numbers in an array.
    //Sample
    var foo = sumArray([2,5,6]);
    console.log(foo) // Outputs 13
*/

/*
Write sumArray function here
*/
//debugger;
function sumArray(inputArray){
	var arrayValue=0;
	var temArray=inputArray;
	for (i=0; i<temArray.length; i++)
	{
	arrayValue+=temArray[i];
	//console.log(arrayValue);
		
	}
	
	return arrayValue;
}

// Uncomment this to test sumArray function
console.log('-------------  SUM ARRAY ----------------'); 
foo = sumArray([2, 5, 6]);
console.log(foo); // Outputs 13

foo = sumArray([2, 5, 6, 2, 5, 6]);
console.log(foo); // Outputs 26

console.log('-----------------------------');



/*
    Write a JavaScript function that converts a decimal
    into a percentage.
    //Sample
    var foo = percentage(.23);
    console.log(foo) //Outputs "23%"
    var foo2 = percentage(.5);
    console.log(foo2) //Outputs "50%"
*/

/*
Write percentage function here
*/

function percentage(input){
	var perc=input*100;
	var text=perc+"%";
	return text;
	
}

// Uncomment this to test percentage function
console.log('------------ Percentage-----------------');

foo = percentage(.23);
console.log(foo) //Outputs "23%"

foo2 = percentage(.5);
console.log(foo2) //Outputs "50%"

console.log('-----------------------------');


/*
    Write a JavaScript function that takes a date and adds a 
    number of days to it.
    //Sample
    var d = new Date('1/1/2001');
    var newD = addDays(d, 10);
    console.log(newD);  //outputs Thu Jan 11 2001 00:00:00 GMT-0600 (Central Standard Time)
*/

/*
Write addDays function here

*/

function addDays(startDate, addDays) {
  var result = new Date(startDate);
  result.setDate(result.getDate() + addDays);
  return result;
}

// Uncomment this to test addDays function
var d = new Date('1/1/2001');
var newD = addDays(d, 10);
console.log(newD); //outputs Sun Jun 11 2001 00:00:00 GMT-0500 (Central Daylight Time)
d = new Date('9/10/2001');
newD = addDays(d, 1000);
console.log(newD); //outputs Sun Jun 06 2004 00:00:00 GMT-0500 (Central Daylight Time)








/*
    Challenge - 
    Write a javascript function to take an array of numbers
    and sorts them in ascending order.
    //Sample
    var array1 = [3, 5, 1, 10];
    console.log(sortArray(array1); //outputs [1,3,5,10]
*/

/*
Write sortArray function here
*/
function sortArray(input){
	
	input.sort(function(a, b){return a - b});
	return input; 
}


// Uncomment this to test sortArray function
var array1 = [3, 5, 1, 10];
console.log(sortArray(array1)); //outputs [1,3,5,10]











































































/*
=====================================================================
    Nothing is broken here... here be dragons
    Go away :)
*/
$(function () {
    $('#btnReset').on('click', function () {
        $('#firstName').val('John');
        $('#lastName').val('Doe');
        $('#state').val('OK');
        $('.errors').hide();
        $('.invalid').removeClass('invalid');
    });
});