document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".btn");
    let currentInput = "";
    
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.textContent;
            
            if (value === "=") {
                try {
                    currentInput = eval(currentInput).toString();
                } catch (error) {
                    currentInput = "Error";
                }
            } else if (value === "C") {
                currentInput = "";
            } else if (value === "&#9003;") { // Backspace
                currentInput = currentInput.slice(0, -1);
            } else {
                currentInput += value;
            }
            
            display.textContent = currentInput;
        });
    });
});
