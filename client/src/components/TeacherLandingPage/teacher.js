// Wait for the document to be ready
document.addEventListener("DOMContentLoaded", function() {

    // Get the button element
    const submitButton = document.getElementById("butn");
  
    // Add event listener for button click
    submitButton.addEventListener("click",()=> {
        const container = document.querySelector(".ale");
        container.style.display = "block";
    });
    setTimeout(function() {
        const container = document.querySelector(".container");
        container.style.display = "none";
      }, 3000);
  
})
  