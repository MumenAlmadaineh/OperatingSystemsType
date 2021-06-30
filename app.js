var osEvaluation = "Your evaluation about OS"

var windows = 10
var linux = 9
var macOS = 7

console.log(windows,linux,macOS)

var sum = windows + macOS

console.log(sum, osEvaluation)

console.log(osEvaluation === windows, linux == windows, macOS == linux, windows === linux)

var nameOfVisitor = prompt ("Hello and welcome, please enter your name")

alert(nameOfVisitor + " please type the name of your operating system you are using on your computer.")

var nameOfOs = prompt ("If you want to see evaluation for it - for example, you can type 'windows' or 'linux' or 'macOS' in order for the result to appear correct, you must follow the capitalization and you can see the evaluation for your operating system at the bottom of this page")

if(nameOfOs == "windows") {
document.write(windows)
}
else if(nameOfOs == "linux") {
document.write(linux)
}
else if(nameOfOs == "macOS") {
document.write(macOS)
}
else {
  alert("Sorry, something went wrong, please be sure to follow the capitalization also make sure that you have not clicked a button cancel")
}