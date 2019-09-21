
// I created a variable to hold my index and initialized it as an object.
var myObject = {
  input: ["hello","how are you?", "what is your favorite color?"],
  output: ["Hi", "Great!", "I have so many favorites it's hard to choose one."]
};

//This is for to check that I assigned the values correctly.
console.log(myObject);


function reply(){
  // I accessed object property.

  var question = document.querySelector("#oranges").value.toLowerCase();
  console.log(question);

  // I wrote a conditional statement to check if the value matches with question(input) and answer(output).
  if(myObject.input.includes(question)){
    let i = myObject.input.indexOf(question);
    let replyUser = myObject.output[i];
    document.querySelector("#output").textContent = replyUser;
  }else{
    //If user enter a different value, it will show "I don't understand that command. Please enter another".
    document.querySelector("#output").textContent = "I don't understand that command. Please enter another";
  }
}
reply
//I attached an event to the button. That way, my js will work.
document.getElementById("submit").addEventListener("click", function() {reply()});
