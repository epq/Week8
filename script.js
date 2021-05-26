
//properties added to the object: ‘input’ and ‘output’ as an array

var chatbot = {
    input: ["hello", "how are you", "how is your day", "what do you do"],
    output: [ "hi", "greaatt!", "good", "software developer" ]
 };

//print variable
//console.log(chatbot);

//created a function called ‘reply’.
function reply() {
    let question = document.getElementById("input").value.toLowerCase();

//conditional statement
    if (chatbot.input[0] === question) {
        document.getElementById("output").value = chatbot.output[0]
    } else if (chatbot.input[1] === question) {
        document.getElementById("output").value = chatbot.output[1]
    }else if (chatbot.input[2] === question) {
        document.getElementById("output").value = chatbot.output[2]
    }else if (chatbot.input[3] === question) {
        document.getElementById("output").value = chatbot.output[3]
    } else {
        document.getElementById("output").value = "Enter a valid value"
    }
    
}


//attach a 'click' event listener to the <button> element defined in the HTML file.
document.getElementById("submit").addEventListener("click", function() {reply()})