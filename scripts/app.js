// Input and Output content declared
const chatbotIO = {
    input : "HOW ARE YOU?",
    output : "GREAT"
};
// show chatbot input and output element in console
console.log(chatbotIO);

// comparison of two values(user input and our input) and call push content function
function reply(){
    const questionValue = document.querySelector("#input").value;
    if(questionValue.toUpperCase() === chatbotIO.input){
        pushContent(questionValue, chatbotIO.output);
    } else{
        const undefinedContent = "I don't understand that command. Please enter another command.";
        pushContent(questionValue, undefinedContent) 
    }

}
// Push and storage every content for user and chatbot.
function pushContent(questionValue, chatbotValue){
    const selectedOutput =  document.querySelector("#output");
    const storageOutput = [];
    storageOutput.push(`You: ${questionValue}`,`Chatbot: ${chatbotValue}`);
    for(let  i = 0; i < storageOutput.length; i++ ){
        selectedOutput.textContent += `${storageOutput[i]}\n`;
    }
}

// run reply function after click submit method
document.querySelector("#submit").addEventListener("click", function(){
    reply();
})