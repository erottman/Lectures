function greeting(name, question) {
  document.getElementById('message').innerHTML += "<p>Good Morning, " +
  name +"." + question + "</p>";
}

greeting("Erica", "How Old are You")

var userName = "Mike";
var userQuestion = "What are you doing tonight?";
greeting(userName, userQuestion);
