var firstVar;
firstVar = {
    input: "Heyam is Hiwana so cutttte",
    output: "Truee !"
}

function reply() {
    var question = document.getElementById("input").value;
    if (question == firstVar.input) {
        document.getElementById('output').innerHTML = firstVar.output;


    } else {
        document.getElementById('output').innerHTML = "I don't understand that command";

    }
}


document.getElementById("submit").addEventListener('click', reply);