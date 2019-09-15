//In your JavaScript code, declare a variable and initialize it as an object.

const inOut = {
  myInput: "What's your favorite food?",
  myOutput:"Pizza"}


  function reply() {

    const question = document.getElementById('input').value;
    if (question === inOut.myInput) {
      document.getElementById('output').value = inOut.myOutput;
    } else {
      return document.getElementById('output').textContent = `I don't understand that command. Please enter another.`;
    }
}
document.getElementById("submit").addEventListener("click", function() {reply()})
