// =========================
// Part 1: Variables & Conditionals
// =========================
document.getElementById('checkNumberBtn').addEventListener('click', () => {
  const userNumber = Number(document.getElementById('userNumber').value);
  
  if (userNumber > 0) {
    document.getElementById('numberResult').textContent = "The number is positive.";
  } else if (userNumber < 0) {
    document.getElementById('numberResult').textContent = "The number is negative.";
  } else if (userNumber === 0) {
    document.getElementById('numberResult').textContent = "The number is zero.";
  } else {
    document.getElementById('numberResult').textContent = "Please enter a valid number.";
  }
});

// =========================
// Part 2: Functions
// =========================

// Function 1: Sum of two numbers
function sum(a, b) {
  return a + b;
}

// Function 2: Square a number
function square(num) {
  return num * num;
}

// Button interactions
document.getElementById('sumBtn').addEventListener('click', () => {
  const result = sum(5, 10);
  document.getElementById('sumResult').textContent = `Sum: ${result}`;
});

document.getElementById('squareBtn').addEventListener('click', () => {
  const result = square(6);
  document.getElementById('squareResult').textContent = `Square: ${result}`;
});

// =========================
// Part 3: Loops
// =========================
const loopOutput = document.getElementById('loopOutput');

// For loop
for (let i = 1; i <= 5; i++) {
  const li = document.createElement('li');
  li.textContent = `For loop iteration ${i}`;
  loopOutput.appendChild(li);
}

// While loop
let j = 1;
while (j <= 3) {
  const li = document.createElement('li');
  li.textContent = `While loop iteration ${j}`;
  loopOutput.appendChild(li);
  j++;
}

// =========================
// Part 4: DOM Manipulation
// =========================
const toggleText = document.getElementById('toggleText');
document.getElementById('toggleBtn').addEventListener('click', () => {
  toggleText.classList.toggle('highlight');
});

// Change text dynamically
document.getElementById('changeTextBtn').addEventListener('click', () => {
  toggleText.textContent = "Text has been changed!";
});

// Add new list item
const domList = document.getElementById('domList');
document.getElementById('addItemBtn').addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = `New item added at ${new Date().toLocaleTimeString()}`;
  domList.appendChild(li);
});
