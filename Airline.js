function airlineFunction() {
  var lname = document.getElementById("LastName").value;
  var fname = document.getElementById("FirstName").value;
  var g = document.getElementById("Gender").value;
  var email = document.getElementById("Email").value;
  var o = document.getElementById("Origin").value;
  var d = document.getElementById("Destination").value;
  var depart = document.getElementById("Departure").value;
  var ret = document.getElementById("Return").value;
  var re = /\S+@\S+\.\S+/;
  var check = 0;
  if (lname == "" || fname =="" ||  g =="" || email =="" || o =="" || d =="" || depart =="" || ret ==""){  alert("Please fill all the required information.");
  }
  else{
    check += 1;
    if(!re.test(email)){
      alert("Please enter a valid Email Address");
    }
    else{
      check += 1;
    }
    if (ret < depart){
      alert("Return date must not be later than your Departure date.");
    }
    else{
      check+=1;
    }
  }
  if (check == 3) {
    alert("Booking information has been set.");
  }
}
