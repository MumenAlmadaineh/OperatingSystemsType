// // var osEvaluation = "Your evaluation about OS"

// var windows = 10
// var linux = 9
// var macOS = 7

// console.log(windows,linux,macOS)

// var sum = windows + macOS

// console.log(sum, osEvaluation)

// console.log(osEvaluation === windows, linux == windows, macOS == linux, windows === linux)

var nameOfVisitor = prompt("Hello and welcome, please enter your name")

alert("Hello, " + nameOfVisitor + " to evaluation your preferred operating system, please type the name of it on the next window.")

var preferredOs = prompt("Be Careful, " + nameOfVisitor + " in this page you must follow the capitalization - for example, you can type 'windows' or 'linux' or 'macOS'")

//function without paraparameter and without return statement
function getOsName() {

  while (preferredOs != "windows" && preferredOs != "linux" && preferredOs != "macOS") {
    preferredOs = prompt(nameOfVisitor + " we are sorry, something went wrong, please be sure to follow the capitalization type remember like this 'windows' or 'linux' or 'macOS' also make sure that you have not clicked a button cancel")
  }

  if (preferredOs == "windows") {
    document.write("<div>" + "<h3>" + preferredOs + "</h3>" + "<img src='https://i.ytimg.com/vi/Uh9643c2P6k/maxresdefault.jpg' alt='Windows'>" + "</div>")
    alert(nameOfVisitor + " you are chose " + preferredOs + " now in the next window, you can write an evaluation for your preferred operating")
  }
  else if (preferredOs == "linux") {
    document.write("<div>" + "<h3>" + preferredOs + "</h3>" + "<img src='https://htry.hostrycdn.com/blog/wp-content/uploads/2021/01/hostry_linux_additional.jpg' alt='Lunix'>" + "</div>")
    alert(nameOfVisitor + " you are chose " + preferredOs + " now in the next window, you can write an evaluation for your preferred operating")
  }
  else if (preferredOs == "macOS") {
    document.write("<div>" + "<h3>" + preferredOs + "</h3>" + "<img src='https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macos/Big-Sur/macos-big-sur-upgrade-hero.jpg' alt='Mac OS'>" + "</div>")
    alert(nameOfVisitor + " you are chose " + preferredOs + " now in the next window, you can write an evaluation for your preferred operating")
  }
}

getOsName();


var osEvaluation = prompt("That's good now " + nameOfVisitor + " please write an evaluation for " + preferredOs + ", where 1 is the lowest evaluation and 10 is the highest evaluation")

// function with paraparameter and without return statement
function getOsEva(numberOfEva) {

  while (numberOfEva > 10 || numberOfEva < 1) {
    numberOfEva = prompt("Please " + nameOfVisitor + " be sure you are choosing the correct evaluation, please keep in your mind the evaluation is just from 1 to 10")
  }

  document.write("<div>" + "<h3>" + "Evaluation for your operating system is: -" + numberOfEva + "</h3>" + "</div>")
}

getOsEva(osEvaluation);


var numberOfImage = prompt(nameOfVisitor + " you're so close to finishing those questions, the last thing how many images of your preferred OS you want to see? You can see 10 images at maximum, please don't enter more than 10");


getImagenumber (numberOfImage);
// function with paraparameter and return statement
function getImagenumber (number){

  while (number > 10 || number < 1) {
  number = prompt("Please " + nameOfVisitor + " be sure you are choosing the correct evaluation, please keep in your mind the evaluation is just from 1 to 10")

<<<<<<< HEAD
  }

=======
>>>>>>> e01d1b4144350b0432a38c25795b48630c5d4231
while (number > 10 || number < 1) {
  number = prompt("Please " + nameOfVisitor + " be sure you are choosing the correct evaluation, please keep in your mind the evaluation is just from 1 to 10")
}

for (var i = 0; i < number; i++) {

  if (preferredOs == "windows") {
    document.write("<div>" + "<h3>" + "</h3>" + "<img src='https://i.ytimg.com/vi/Uh9643c2P6k/maxresdefault.jpg' alt='Windows'>" + "</div>")
  }
  else if (preferredOs == "linux") {
    document.write("<div>" + "<h3>" + "</h3>" + "<img src='https://htry.hostrycdn.com/blog/wp-content/uploads/2021/01/hostry_linux_additional.jpg' alt='Lunix'>" + "</div>")
  }

  else if (preferredOs == "macOS") {
    document.write("<div>" + "<h3>" + "</h3>" + "<img src='https://support.apple.com/library/content/dam/edam/applecare/images/en_US/macos/Big-Sur/macos-big-sur-upgrade-hero.jpg' alt='Mac OS'>" + "</div>")
  }
}
return number;
}