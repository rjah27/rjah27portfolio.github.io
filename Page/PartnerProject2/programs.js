
function submit() {
    let greeting = document.getElementById("greeting");
    let newGreeting1 = document.getElementById("newGreeting");
    greeting.textContent = newGreeting1.value;


    let text = document.getElementById("text");
    let newText = document.getElementById("newText");
    text.textContent = newText.value;


    let newColor = document.getElementById("newColor").value;
    let list = document.getElementById("options");
    
    document.body.style.backgroundColor = newColor;
    }