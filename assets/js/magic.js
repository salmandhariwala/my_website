 function myFunction() {

     document.getElementById("submitbutton").value = "submitting form ...";
     document.getElementById("submitbutton").disabled = true;

     var name = document.getElementById("formname").value;
     var email = document.getElementById("formemail").value;
     var msg = document.getElementById("formmsg").value;

     var formData = new FormData();

     formData.append("name", name);
     formData.append("email", email);
     formData.append("message", msg);

     var xhttp = new XMLHttpRequest();

     xhttp.onreadystatechange = function () {

         if (xhttp.readyState == 4 && xhttp.status == 200) {

             document.getElementById("formname").value = "";
             document.getElementById("formemail").value = "";
             var msg = document.getElementById("formmsg").value = "";

             document.getElementById("submitbutton").value = "Send Message";
             document.getElementById("submitbutton").disabled = false;

             $("#myModal").modal();

         }

     };

     xhttp.open("POST", "mail.php", true);
     xhttp.send(formData);

 }