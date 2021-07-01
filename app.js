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


// var nameOfOs = prompt ("If you want to see evaluation for it - for example, you can type 'windows' or 'linux' or 'macOS' in order for the result to appear correct, you must follow the capitalization and you can see the evaluation for your operating system at the bottom of this page")

var preferredOs = prompt("Be Careful, " + nameOfVisitor + " in this page you must follow the capitalization - for example, you can type 'windows' or 'linux' or 'macOS'")

// while {
//   (preferredOs != "windows" || "linux" || "macOS")
//   break;
//     alert("Sorry, something went wrong, please be sure to follow the capitalization also make sure that you have not clicked a button cancel")
// }

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

var osEvaluation = prompt("That's good now " + nameOfVisitor + " please write an evaluation for " + preferredOs + ", where 0 is the lowest evaluation and 10 is the highest evaluation")

while (osEvaluation > 10 || osEvaluation < 0) {
  osEvaluation = prompt("Please" + nameOfVisitor + " be sure you are choosing the correct evaluation, please keep in your mind the evaluation is just from 0 to 10")
}
document.write("<div>" + "<h3>" + "Evaluation for your operating system is: -" + osEvaluation + "</h3>" + "</div>")

  // if (preferredOs = "windows") {
  //   alert(nameOfVisitor + " You are chose " + preferredOs + " OS Now in the next window, please write an evaluation for your preferred operating system, where 0 is the lowest evaluation and 10 is the highest evaluation")
  // }
  // else if (preferredOs = "linux") {
  //   alert(nameOfVisitor + " You are chose " + preferredOs + " OS Now in the next window, please write an evaluation for your preferred operating system, where 0 is the lowest evaluation and 10 is the highest evaluation")
  // }
  // else if (preferredOs = "macOS"){
  //   alert(nameOfVisitor + " You are chose " + preferredOs + " OS Now in the next window, please write an evaluation for your preferred operating system, where 0 is the lowest evaluation and 10 is the highest evaluation")
  // }

// var osEvaluation = prompt ("Please write an evaluation for your preferred operating system, where 0 is the lowest evaluation and 10 is the highest evaluation")


// if(preferredOs == "windows") {
// document.write(windows)
// }
// else if(preferredOs == "linux") {
// document.write(linux)
// }
// else if(preferredOs == "macOS") {
// document.write(macOS)
// }
// else {
//   alert("Sorry, something went wrong, please be sure to follow the capitalization also make sure that you have not clicked a button cancel")
// }
