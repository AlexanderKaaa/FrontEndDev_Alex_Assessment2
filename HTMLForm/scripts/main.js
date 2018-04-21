$(function(){
   

   $('#btnSubmit').on('click', submit);
   
   $('#resetButton').on('click', resetFunction);




    function submit(){
		
		
		$("#firstName").removeClass("invalid");
		$("#lastName").removeClass("invalid");
		$("#eMail").removeClass("invalid");
		$("#howYouFindUS").removeClass("invalid");
		$("#whyBlender").removeClass("invalid");
		$("#termsAndConditions").removeClass("invalid");


   errorArray=[];
   
  document.getElementById('message').innerHTML="";

  var firstNameValue=document.getElementById('firstName').value;

	var lastNameValue=document.getElementById('lastName').value;

  var emailAddressValue=document.getElementById('eMail').value;
 
	 
var howYouFindUsVal=document.getElementById('howYouFindUS').value;

	
	

    var whyBlenderVal=document.getElementById('whyBlender').value;
 
  
  
  
  var termsAndConditionChecked=document.getElementById('termsAndConditions').checked;
  
  var firstNameFilledOut=(firstNameValue==="") ? false:true ;
   var lastNameFilledOut=(lastNameValue==="") ? false:true ;
  var emailFilledOut=(emailAddressValue==="") ? false:true ;
  var emailValid=(emailAddressValue.indexOf("@")>0) ? true:false ;
  var emailValid2=(emailAddressValue.indexOf(".com")>0) ? true:false ;
  
  
  var howYouFindSelected=(howYouFindUsVal==="") ? false:true ;
  var whyBlenderFilledOut=(whyBlenderVal==="") ? false:true ;
  
  if(!firstNameFilledOut){
     
	$("#firstName").addClass("invalid");
    errorArray.push("First Name must be filled out");
     }
	 
	 
	  if(!lastNameFilledOut){
     
		$("#lastName").addClass("invalid");
    errorArray.push("Last Name must be filled out");
     }
  if(!emailFilledOut){
  
	$("#eMail").addClass("invalid");
    errorArray.push("Email must be filled out");
     }
  
    if(!emailValid || !emailValid2){
 
	 $("#eMail").addClass("invalid");
      errorArray.push("Email must contain '@' and '.com'");
     }
  
   
  
     if(!howYouFindSelected){

	   $("#howYouFindUS").addClass("invalid");
       errorArray.push("A value must be selected in the \'How did you find us\" drop down");
     }
	 
	 
	  if(!whyBlenderFilledOut){
 
	   $("#whyBlender").addClass("invalid");
       errorArray.push("\'Why do you need this blender\' must be filled out");
     }
  
   if(!termsAndConditionChecked){

 document.getElementById('termsAndConditions').classList.add("invalid");
     errorArray.push("The terms and service checkbox must be checked.");
     }
  
       if(firstNameFilledOut &&lastNameFilledOut && emailFilledOut && emailValid && emailValid2 && howYouFindSelected && whyBlenderFilledOut && termsAndConditionChecked ){
        alert("Thank you for submiting the form!");
;
        }
  
  for(var i=0;i<errorArray.length;i++){document.getElementById('message').innerHTML+="<p>"+ errorArray[i] +"</p>";}


  //AJAX Post
  
  $.post('/AddEntry', {FirstName: firstNameValue, lasttName:lastNameValue, Email:emailAddressValue, HowYouFoundUs:howYouFindUsVal, WhyBuyaBlender:whyBlenderVal} , function(response){
        
    });
  
  
    }
	
	
	
	function resetFunction(){
     errorArray=[];

  $("#firstName").removeClass("invalid");
  $("#lastName").removeClass("invalid");
  $("#eMail").removeClass("invalid");
  $("#howYouFindUS").removeClass("invalid");
  $("#whyBlender").removeClass("invalid");
  

  
 

   
   
   document.getElementById('message').innerHTML="";
  
   document.getElementById('firstName').value="";
   document.getElementById('lastName').value="";
 document.getElementById('eMail').value="";
 document.getElementById('howYouFindUS').value="";
  document.getElementById('whyBlender').value="";
 document.getElementById('termsAndConditions').checked=false;
  
}


	
	
	
	
});