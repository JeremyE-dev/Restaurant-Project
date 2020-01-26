/*
    Name: Jeremy Eudaly
    Date Created: 1/4/2020
    Most recent revision: 1/26/2020
-*/

function getFormData() {
  var nameSubmitted = document.getElementById("InputName").value;
  var emailSubmitted = document.getElementById("InputEmail1").value;
  var phoneSubmitted = document.getElementById("InputPhone").value;


  if (nameSubmitted||emailSubmitted||phoneSubmitted == ""){
    alert("please enter your name, email, and phone number ");
    return false;
  }
  else{
    alert("Thank you for inquiry, we will be in touch with you soon");
    return true;
  }


}
