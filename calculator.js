const input = document.getElementById("sr");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        if (value === "AC") {
            input.value = "";
        } else if (value === "Back") {
            input.value = input.value.slice(0, -1);
        } else if (value === "=") {
            try {
                input.value = eval(input.value);
            } catch {
                input.value = "Error";
            }
        } else {
            input.value += value;
        }
    });
});

document.addEventListener("keydown", (event) => {
    const key = event.key;

    if (!isNaN(key) || "+-*/.%()".includes(key)) {
        // Number or operator key
        input.value += key;
    } else if (key === "Backspace") {
        input.value = input.value.slice(0, -1);
    } else if (key === "Enter" || key === "=") {
        try {
            input.value = eval(input.value);
        } catch {
            input.value = "Error";
        }
    } else if (key === "Escape") {
        input.value = "";
    }
});