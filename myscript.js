// In your JavaScript code, declare a variable and initialize it as an object.
//Add two properties to the object: ‘input’ and ‘output’.
let tom = {input: 'How are you?', output: 'Great!'};
//console.log() your variable to confirm that you have assigned the values correctly.
console.log(tom);
//Below your variable declaration, create a function called ‘reply’.
//In the ‘reply’ function, declare a variable called ‘question’ and assign to it the valueof the HTML <input> element.


function reply() {
  var question = document.querySelector('#input'); // This is how I access HTML element input.
  /*[0].attribute[0].value;*/
  question.tom[0]; //--How to assign to it the value of HTML <input> element???

  //Use a conditional statement to check if the value you stored in the 'question' variable matches the 'input' defined in the object you first created. ----- I couldn't figure this ???
  if (question == tom[0]) {
  console.log(document.getElementById('output'));
  } else {
    console.log('I do not understand that command. Please enter another.');
  }
 }
reply(); // Do I need to call the funcation?
//Below your 'reply' function, attach a 'click' event listener to the <button> element defined in the HTML file.
var listener = document.querySelector('#submit'); // Accessing HTML.
listener.addEventListener('click'); // assigning to it AN addEventListener.
