
// I created a variable to hold my index and initialized it as an object.
var myObject = {
  input: ["Hello","How are you?", "What is your favorite color?"],
  output: ["Hi", "Great!", "I have so many favorites it's hard to choose one."]
};

//This is for to check that I assigned the values correctly.
console.log(myObject);


function reply(){
  // I accessed object property.

  var question = document.querySelector("#input").value.toLowerCase();

  // I wrote a conditional statement to check if the value matches with question(input) and answer(output).
  if(object.input.includes(question)){
    let i = myObject.input.indexOf(question);
    document.querySelector("#output").textContent = myObject[i];
  }else{
    //If user enter a different value, it will show "I don't understand that command. Please enter another".
    document.querySelector("#output").textContent = "I don't understand that command. Please enter another";
  }
}

//I attached an event to the button. That way, my js will work.
document.getElementById("submit").addEventListener("click", reply);
