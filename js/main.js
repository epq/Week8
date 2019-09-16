let inOut = {
  input: 'Hi',
  output: 'Hello ! '
};

function replay() {
  let question = document.getElementById("input").value;
  let txtArea = document.getElementById("output");

  if (question === inOut.input) {
    txtArea.innerHTML=inOut.output;
  } else {
    txtArea.innerHTML=" I do not understand that command";

  }
}
document.getElementById("submit").addEventListener('click',replay);