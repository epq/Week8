//here we are going to define and declare object and inside the object I define two arrays
const object = {
  input:['Hello','How are you?','What is your favourite colour?'],
  output:['Hi','Great!','I have so many favorites it hard to choose one']
  };
  console.log(object);
//here we define function called reply and this function will let the chatpot to give me the proper anwers based on the input the we give
  function reply(){
    //I defince variable called question and I put inside this variable the value (input from user)
    let question = document.getElementById('input').value;
    //I used if statement to check the input and give the outpot
    if(object.input.includes(question)){
      //here we define variable called i, inside this variable i checked the index of the input based on the location in array
     let i= object.input.indexOf(question);
     //last step is to give the output location based on the input location in the array
     document.getElementById('output').textContent = object.output[i];

    }
    else{
      document.getElementById('output').textContent = "I don't understand that command. Please enter another";

    }
  }
  //finally i used eventlessenors to activate the click button in chatBot
    document.querySelector('button').addEventListener("click", reply);
