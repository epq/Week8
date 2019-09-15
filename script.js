const chatBotObject = {input:"How are you",output:"Great!"}
function reply() {
    let question = document.getElementById("input").value
    if (chatBotObject.input === question) {
        document.getElementById("output").value = chatBotObject.output
    } else {
        document.getElementById("output").value = "I don't understand that command. Please enter another."
    }
    
}

document.getElementById("submit").addEventListener("click", function() {reply()})




console.log(chatBotObject)


