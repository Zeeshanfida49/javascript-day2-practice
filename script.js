"use strict";

// TASK 1: Grade Calculator

// Grade boundaries are chosen for this exercise.
function getGrade(marks) {
  if (marks >= 80) {
    return "A+";
  } else if (marks >= 70) {
    return "A";
  } else if (marks >= 60) {
    return "B";
  } else if (marks >= 33) {
    return "C";
  } else {
    return "F";
  }
}

const gradeForm = document.getElementById("grade-form");
const gradeResult = document.getElementById("grade-result");

gradeForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const markInputs = gradeForm.querySelectorAll('[name="marks"]');

  // Store five subject marks in an array.
  const marks = Array.from(markInputs, function (input) {
    return Number(input.value);
  });

  const validMarks = marks.every(function (mark) {
    return Number.isInteger(mark) && mark >= 0 && mark <= 100;
  });

  if (!validMarks) {
    gradeResult.textContent = "Enter whole-number marks from 0 to 100.";
    return;
  }

  let total = 0;

  for (let i = 0; i < marks.length; i++) {
    total += marks[i];
  }

  const maximumMarks = marks.length * 100;
  const percentage = (total / maximumMarks) * 100;
  const grade = getGrade(percentage);

  // Fail if any subject has fewer than 33 marks.
  const failedSubjects = [];

  for (let i = 0; i < marks.length; i++) {
    if (marks[i] < 33) {
      const subjectLabel = markInputs[i].labels[0];
      const subjectName = subjectLabel.textContent.trim();

      failedSubjects.push(subjectName);
    }
  }

  const status = failedSubjects.length > 0 ? "Fail" : "Pass";

  let output =
    `Subject Marks: ${marks.join(", ")}\n` +
    `Total Marks: ${total} / ${maximumMarks}\n` +
    `Percentage: ${percentage.toFixed(2)}%\n` +
    `Overall Percentage Grade: ${grade}\n` +
    `Result: ${status}`;

  if (failedSubjects.length > 0) {
    output += `\nBelow 33 Marks: ${failedSubjects.join(", ")}`;
  }

  gradeResult.textContent = output;

  console.log("TASK 1: Grade Calculator");
  console.log(output);
});


// TASK 2: Number Games

function multiplicationTable(number) {
  const rows = [];

  for (let i = 1; i <= 10; i++) {
    rows.push(`${number} × ${i} = ${number * i}`);
  }

  return rows.join("\n");
}

const tableForm = document.getElementById("table-form");
const tableResult = document.getElementById("table-result");

tableForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const number = Number(document.getElementById("table-number").value);

  if (!Number.isInteger(number) || Math.abs(number) > 1000000) {
    tableResult.textContent =
      "Enter a whole number between -1,000,000 and 1,000,000.";
    return;
  }

  const output = multiplicationTable(number);

  tableResult.textContent = output;

  console.log("Multiplication Table");
  console.log(output);
});

function getEvenNumbers() {
  const evenNumbers = [];

  for (let number = 1; number <= 50; number++) {
    if (number % 2 === 0) {
      evenNumbers.push(number);
    }
  }

  return evenNumbers;
}

function sumNumbers() {
  let total = 0;

  for (let number = 1; number <= 100; number++) {
    total += number;
  }

  return total;
}

function getFizzBuzz() {
  const results = [];

  for (let number = 1; number <= 30; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
      results.push("FizzBuzz");
    } else if (number % 3 === 0) {
      results.push("Fizz");
    } else if (number % 5 === 0) {
      results.push("Buzz");
    } else {
      results.push(String(number));
    }
  }

  return results;
}

const evenNumbers = getEvenNumbers();
const numberSum = sumNumbers();
const fizzBuzzValues = getFizzBuzz();

document.getElementById("even-result").textContent =
  evenNumbers.join(", ");

document.getElementById("sum-result").textContent = numberSum;

const fizzBuzzContainer = document.getElementById("fizzbuzz-result");

for (let i = 0; i < fizzBuzzValues.length; i++) {
  const chip = document.createElement("span");
  const value = fizzBuzzValues[i];

  chip.classList.add("chip");
  chip.textContent = value;

  if (value === "Fizz" || value === "Buzz" || value === "FizzBuzz") {
    chip.classList.add("special");
  }

  fizzBuzzContainer.appendChild(chip);
}

console.log("TASK 2: Number Games");
console.log("Even Numbers:", evenNumbers);
console.log("Sum from 1 to 100:", numberSum);
console.log("FizzBuzz:", fizzBuzzValues);


// BONUS: Palindrome Checker

function normalizeText(text) {
  // Ignore case, spaces, and punctuation.
  return text.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function isPalindrome(text) {
  const cleanedText = normalizeText(text);
  const reversedText = cleanedText.split("").reverse().join("");

  return cleanedText.length > 0 && cleanedText === reversedText;
}

const palindromeForm = document.getElementById("palindrome-form");
const palindromeResult = document.getElementById("palindrome-result");

palindromeForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const text = document.getElementById("palindrome-text").value.trim();

  if (normalizeText(text).length === 0) {
    palindromeResult.textContent =
      "Enter at least one English letter or number.";
    return;
  }

  const result = isPalindrome(text);

  palindromeResult.textContent = result
    ? `"${text}" is a palindrome.`
    : `"${text}" is not a palindrome.`;

  console.log("Palindrome Check:", text, result);
});


// TASK 3: Electricity Bill

function getBillBreakdown(units) {
  // Apply each rate only to the units in that slab.
  const firstSlabUnits = Math.min(units, 100);
  const secondSlabUnits = Math.min(Math.max(units - 100, 0), 100);
  const thirdSlabUnits = Math.max(units - 200, 0);

  const firstSlabCost = firstSlabUnits * 10;
  const secondSlabCost = secondSlabUnits * 15;
  const thirdSlabCost = thirdSlabUnits * 20;

  return {
    firstSlabUnits,
    secondSlabUnits,
    thirdSlabUnits,
    firstSlabCost,
    secondSlabCost,
    thirdSlabCost,
    total: firstSlabCost + secondSlabCost + thirdSlabCost
  };
}

function calculateBill(units) {
  if (!Number.isFinite(units) || units < 0) {
    throw new Error("Units must be a non-negative number.");
  }

  return getBillBreakdown(units).total;
}

function formatMoney(amount) {
  return `Rs. ${amount.toFixed(2)}`;
}

const billForm = document.getElementById("bill-form");
const billResult = document.getElementById("bill-result");

billForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const units = Number(document.getElementById("units").value);

  if (!Number.isInteger(units) || units < 0 || units > 1000000) {
    billResult.textContent =
      "Enter whole-number units between 0 and 1,000,000.";
    return;
  }

  const breakdown = getBillBreakdown(units);
  const total = calculateBill(units);

  const output =
    `Units Consumed: ${units}\n\n` +
    `First Slab: ${breakdown.firstSlabUnits} × Rs. 10 = ` +
    `${formatMoney(breakdown.firstSlabCost)}\n` +
    `Second Slab: ${breakdown.secondSlabUnits} × Rs. 15 = ` +
    `${formatMoney(breakdown.secondSlabCost)}\n` +
    `Third Slab: ${breakdown.thirdSlabUnits} × Rs. 20 = ` +
    `${formatMoney(breakdown.thirdSlabCost)}\n\n` +
    `Total Bill: ${formatMoney(total)}`;

  billResult.textContent = output;

  console.log("TASK 3: Electricity Bill");
  console.log(output);
});


// Display the three test cases required by the assignment.
const testCases = [
  { units: 80, expected: 800 },
  { units: 150, expected: 1750 },
  { units: 350, expected: 5500 }
];

const testTable = document.getElementById("bill-tests");

for (let i = 0; i < testCases.length; i++) {
  const test = testCases[i];
  const calculated = calculateBill(test.units);
  const passed = calculated === test.expected;

  const row = document.createElement("tr");

  const values = [
    test.units,
    formatMoney(test.expected),
    formatMoney(calculated),
    passed ? "Passed" : "Failed"
  ];

  for (let column = 0; column < values.length; column++) {
    const cell = document.createElement("td");
    cell.textContent = values[column];

    if (column === 3 && passed) {
      cell.classList.add("test-pass");
    }

    row.appendChild(cell);
  }

  testTable.appendChild(row);

  console.assert(passed, `Bill test failed for ${test.units} units.`);
  console.log(
    `Bill Test: ${test.units} units → ${formatMoney(calculated)}`
  );
}