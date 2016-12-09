function greeting(person) {
  document.getElementById('message').innerHTML += "<p>Hola" + person + "</p>";
};

var greetMe =["noodle", "moodle", "voodle", "roodle"];

for (var i = 0; i < greetMe.length; i++) {
   greeting(greetMe[i]);
}
