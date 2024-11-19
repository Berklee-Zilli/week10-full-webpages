// Get references to the button and the number span
const increaseBtn = document.getElementById('increaseBtn');
const numberSpan = document.getElementById('number');

// Initialize the count value
let count = 0;

// Function to increase the number by 1
function increaseNumber() {
    count++;  // Increment the count
    numberSpan.textContent = count;  // Update the number on the page
}

// Add event listener to the button
increaseBtn.addEventListener('click', increaseNumber);
