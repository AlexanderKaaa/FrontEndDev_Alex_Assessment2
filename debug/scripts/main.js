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
	
        //Grabs value of item with ID of firstname
		var firstName = $('#firstName').val();
		
		
		 //Grabs value of item with ID of lastname
        var lastName = $('#lastName').val();
		

		

        /*invalid should add a red border around the respective input
            It will also show a hidden error message */
       //checks if value is equal to empty string
	   if ($('#firstName').val() === "") {
           //adds class of invalid
		   $('#firstName').addClass('invalid');
			

          //searches for parent of ID with class of input-group. and finds item with class of errors in that item. JQuerry shows the item with default parameters 
			$('#firstName').closest('.input-group').find('.errors').show();
        }
    //checks if value is equal to empty string
        if (lastName === "") {
            $('#lastName').addClass('invalid');
				

           //searches for parent of ID with class of input-group. and finds item with class of errors in that item. JQuerry shows the item with default parameters 
			$('#lastName').closest('.input-group').find('.errors').show();
        }


        /*====================================
            I need to create an object, but it's not working
            so I just commented it out.
            Please fix it
        ======================================*/

		
        var userObject = {
            //firstname and lastname variables are assigned to the object  
			firstName: firstName,
			
            lastName:lastName,
		
           //function combines first and last name object properties with and empty space string
		   fullName: function() {
                return this.firstName + ' ' + this.lastName;
            },
            //Jquerry used to get value of ids of  state fields 
			state: $('#state').val()
        };
		
		//console logs the fullname and object 
		console.log(userObject.fullName());
		//console.log(userObject.state);
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
	//creates and arrayValue variable and sets it to 0
	var arrayValue=0;
	//creates a tempArray value that is equal to inputArray
	var temArray=inputArray;
	//for loop that adds array values for each item in array
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
	//sorts array from smallest to biggest using sort function
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