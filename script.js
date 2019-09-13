

//1.In your JavaScript code, declare a variable and initialize it as an object.
//2.Add two properties to the object: ‘input’ and ‘output’.
const chatbot = {
    input:['hello', 'how are you?', 'what is your favourite colour?'],
    output:['hi', 'great!', 'i have so many favorites it\'s hard to choose one.']
};
//console.log(chatbot);


function reply() {
    //get the input value ,, and convert it to lowercase
    let question = document.getElementById('input').value.toLowerCase();
    //if there is nothing inside the input then do nothing
    if(question === ''){ return false; }
    appendToOutput(question);
    //check if question founded on the chatbot object
    if(chatbot.input.includes(question)){
        //find the index of the value on an array
        let index = chatbot.input.indexOf(question);
        //then append the same index from output to the textarea
        appendToOutput(chatbot.output[index],1);
    }else{
        //if not found appen this msg to the textarea
        appendToOutput("I don't understand that command. Please enter another.",1);
    }
}

//this function to add a new message to the top of the textarea
function appendToOutput(msg, sender) {
    //who send the msg ? bot or user(you)
    sender = (sender) ? 'Bot':'You';
    //get the old value ot textarea and add to it the new msg
    document.getElementById('output').textContent = sender + ' : ' + msg +'\n'+ document.getElementById('output').textContent;
}


//when the form submited do this >>> ,, i have already changed the type of button to submit , so each click of the button will submit the form
document.getElementById('chatbot-form').addEventListener('submit', function(e) {
    e.preventDefault();
    reply();
    //delete everything on input when you click the button or click enter
    document.getElementById('chatbot-form').reset();
})

