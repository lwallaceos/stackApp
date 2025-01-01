function submitData() {
    var userInput = document.getElementById("userInput").value;
    var responseElement = document.getElementById("response");

    if (userInput.trim() === "") {
      responseElement.textContent = "Please enter a valid tech stack!";
      responseElement.style.color = "red";
    } else {
      responseElement.textContent = "You entered: " + userInput;
      responseElement.style.color = "green";
    }

    
}