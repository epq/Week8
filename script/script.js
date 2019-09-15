// Declare input and output
const ioChatbot = {
   input : "hello",
   output : "hi"
};
console.log(ioChatbot);

// Reply function for getting input element
function reply(){
   const question = document.querySelector("#input");
   if(question.value === "hello"){
       document.querySelector("#output").textContent = "hi";
   } else{
       document.querySelector("#output").textContent = "I don't understand that command. Please enter another.";
   }

   console.log(question.value);
}

if(document.querySelector("#submit")){
document.querySelector("#submit").addEventListener("click", function(){
   reply();
});
}