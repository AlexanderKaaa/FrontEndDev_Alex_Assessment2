$(function(){
   

   $('#btnSubmit').on('click', submit);
   
   $('#resetButton').on('click', resetFunction);




    function submit(){
		//debugger;
		
		$("#firstName").removeClass("invalid");
		$("#lastName").removeClass("invalid");
		$("#eMail").removeClass("invalid");
		$("#howYouFindUS").removeClass("invalid");
		$("#whyBlender").removeClass("invalid");
		$("#termsAndConditions").removeClass("invalid");
		//$("#termsAndConditions").classList.remove("invalid");
		
		//document.getElementById('eMail').classList.remove("invalid");
  //document.getElementById('eMail').classList.remove("invalid");
  //document.getElementById('password').classList.remove("invalid");
  //document.getElementById('timeZone').classList.remove("invalid");
      //document.getElementById('termsAndConditions').classList.remove("invalid");

   errorArray=[];
   //$("#message").html("");
  document.getElementById('message').innerHTML="";
  //alert("Hello");
  var firstNameValue=document.getElementById('firstName').value;
    //var firstNameValue=$("firstName").val();
	//console.log(firstNameValue);
	var lastNameValue=document.getElementById('lastName').value;
	//var lastNameValue=$("lastName").val();
	//console.log(lastNameValue);
  var emailAddressValue=document.getElementById('eMail').value;
 // var emailAddressValue=$("eMail").val();
	//console.log(emailAddressValue);
	 
var howYouFindUsVal=document.getElementById('howYouFindUS').value;
 //var howYouFindUsVal=$("howYouFindUS").val();
	//console.log(howYouFindUsVal);
	
	
  //var timeZoneValue=document.getElementById('timeZone').value;
    var whyBlenderVal=document.getElementById('whyBlender').value;
  //var whyBlenderVal=$("whyBlender").val();
	//console.log(whyBlenderVal);
  
  
  
  var termsAndConditionChecked=document.getElementById('termsAndConditions').checked;
  
  var firstNameFilledOut=(firstNameValue==="") ? false:true ;
   var lastNameFilledOut=(lastNameValue==="") ? false:true ;
  var emailFilledOut=(emailAddressValue==="") ? false:true ;
  var emailValid=(emailAddressValue.indexOf("@")>0) ? true:false ;
  var emailValid2=(emailAddressValue.indexOf(".com")>0) ? true:false ;
  
  //var passwordFilledOut=(passwordValue==="" || passwordValue.length <=3) ? false:true ;
  var howYouFindSelected=(howYouFindUsVal==="") ? false:true ;
  var whyBlenderFilledOut=(whyBlenderVal==="") ? false:true ;
  
  if(!firstNameFilledOut){
     //alert("No User Name");
    //document.getElementById('Name').classList.add("invalid");
	$("#firstName").addClass("invalid");
    errorArray.push("First Name must be filled out");
     }
	 
	 
	  if(!lastNameFilledOut){
     //alert("No User Name");
    //document.getElementById('Name').classList.add("invalid");
		$("#lastName").addClass("invalid");
    errorArray.push("Last Name must be filled out");
     }
  if(!emailFilledOut){
     //alert("No email");
    //document.getElementById('eMail').classList.add("invalid");
	$("#eMail").addClass("invalid");
    errorArray.push("Email must be filled out");
     }
  
    if(!emailValid || !emailValid2){
     //alert("email not valid");
     // document.getElementById('eMail').classList.add("invalid");
	 $("#eMail").addClass("invalid");
      errorArray.push("Email must contain '@' and '.com'");
     }
  
   
  
     if(!howYouFindSelected){
     //alert("Time zone Not selected");
       //document.getElementById('timeZone').classList.add("invalid");
	   $("#howYouFindUS").addClass("invalid");
       errorArray.push("A value must be selected in the \'How did you find us\" drop down");
     }
	 
	 
	  if(!whyBlenderFilledOut){
     //alert("Time zone Not selected");
       //document.getElementById('timeZone').classList.add("invalid");
	   $("#whyBlender").addClass("invalid");
       errorArray.push("\'Why do you need this blender\' must be filled out");
     }
  
   if(!termsAndConditionChecked){
    // alert("Need to Accept Terms and Conditions");
 document.getElementById('termsAndConditions').classList.add("invalid");
     errorArray.push("The terms and service checkbox must be checked.");
     }
  
       if(firstNameFilledOut &&lastNameFilledOut && emailFilledOut && emailValid && emailValid2 && howYouFindSelected && whyBlenderFilledOut && termsAndConditionChecked ){
        alert("Thank you for submiting the form!");
;
        }
  
  for(var i=0;i<errorArray.length;i++){document.getElementById('message').innerHTML+="<p>"+ errorArray[i] +"</p>";}
  //for(var i=0;i<errorArray.length;i++){$("#message").html()+="<p>"+ errorArray[i] +"</p>";}

  //AJAX Post
  
  $.post('/AddEntry', {FirstName: firstNameValue, lasttName:lastNameValue, Email:emailAddressValue, HowYouFoundUs:howYouFindUsVal, WhyBuyaBlender:whyBlenderVal} , function(response){
        
    });
  
  
    }
	
	
	
	function resetFunction(){
     errorArray=[];
  
  /*document.getElementById('Name').classList.remove("invalid");  
  document.getElementById('eMail').classList.remove("invalid");
  document.getElementById('password').classList.remove("invalid");
  document.getElementById('timeZone').classList.remove("invalid");
  document.getElementById('termsAndConditions').classList.remove("invalid");*/
  $("#firstName").removeClass("invalid");
  $("#lastName").removeClass("invalid");
  $("#eMail").removeClass("invalid");
  $("#howYouFindUS").removeClass("invalid");
  $("#whyBlender").removeClass("invalid");
  
 // alert("World");
  
 
 /*
  var firstNameValue=$("firstName").val("");
	console.log(firstNameValue);
	
	var lastNameValue=$("lastName").val()="";
	console.log(lastNameValue);
  //var emailAddressValue=document.getElementById('eMail').value;
  var emailAddressValue=$("eMail").val='';
	console.log(emailAddressValue);
	
 var howYouFindUsVal=$("howYouFindUS").val()="";
	console.log(howYouFindUsVal);
	
	
  //var timeZoneValue=document.getElementById('timeZone').value;
  
  var whyBlenderVal=$("whyBlender").val()="";
	console.log(whyBlenderVal);
  
   document.getElementById('termsAndConditions').checked=false;
   */
   
   
   document.getElementById('message').innerHTML="";
  
   document.getElementById('firstName').value="";
   document.getElementById('lastName').value="";
 document.getElementById('eMail').value="";
 document.getElementById('howYouFindUS').value="";
  document.getElementById('whyBlender').value="";
 document.getElementById('termsAndConditions').checked=false;
  
}


	
	
	
	
});