let counter = 0;
const counterDisplay = document.getElementById("counter");

document.getElementById("increase").addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;
});

document.getElementById("decrease").addEventListener("click", () => {
    counter--;
    counterDisplay.textContent = counter;
});

document.getElementById("reset").addEventListener("click", () => {
    counter = 0;
    counterDisplay.textContent = counter;
});