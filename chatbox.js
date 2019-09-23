//In your JavaScript code, declare a variable and initialize it as an object.

const inOut = [{
  myInput: "What's your favorite food?",
  myOutput:["Pizza", "My favorite food is Pizza", "I don't have one"]},
  {
  myInput:"How are you",
  myOutput:["Fine","I'm doing Great", "Great"]},
  {
    myInput: "What's your favorite color",
    myOutput:["Pink","Pink is my favorite color", "I like pink"]}
]



   const question = document.getElementById('input').value.toUpperCase();
    const randomNumber = (Math.floor(Math.random() * 3)+0;
    const filterType = [];


    const returnIf = inOut.filter(item =>item.myInput == question);
    const returnRandom= item => {
     item[0].myOutput[randomNumber];
};
  const short = item => {
  item[0].myOutput.reduce((l, s) => (l.length < s.length ? l : s));
};
  const long= item => {
  item[0].myOutput.reduce((l, s) => (l.length > s.length ? l : s));
};

function answer() {
   if (question === 1) {
     document.getElementById('output').value = short(returnIf);
   } if else (question === 2) {
     document.getElementById('output').value = long(returnIf);
   } if else {
     document.getElementById('output').value = returnRandom(returnIf);

   } default {
    document.getElementById('output').value =
     "I don't understand that command."
   }
};

document.getElementById('submit').addEventListener('click', function() {
 let option = 0;
 if (document.getElementById('longest').checked) {
   option = 2;
 } else if (document.getElementById('shortest').checked) {
   option = 1;
 }
 reply()
});




    //if (question === inOut.myInput) {



    //  document.getElementById('output').value = inOut.myOutput;
  //  } else {
    //  return document.getElementById('output').textContent = `I don't understand that command. Please enter another.`;
  //  }
//document.getElementById("submit").addEventListener("click", function() {reply()})
