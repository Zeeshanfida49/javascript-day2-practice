# JavaScript Day 2 Practice

An interactive project created by Zeeshan Fida for the Tech SG Studio internship.

This project practices JavaScript logic, functions, loops, arrays, and conditions through a responsive web interface.

## Tasks

### 1. Grade Calculator

- Enter marks for five subjects, each out of 100.
- Calculate total marks and percentage.
- Display the overall percentage grade.
- Display Pass or Fail.
- Fail if any subject has fewer than 33 marks.

Grade boundaries chosen for this exercise:

| Grade | Percentage |
|-------|------------|
| A+ | 80% and above |
| A | 70% to below 80% |
| B | 60% to below 70% |
| C | 33% to below 60% |
| F | Below 33% |

The assignment specifies the grade labels and subject pass threshold, but does not specify percentage boundaries.

The overall percentage grade and subject-based Pass/Fail result are calculated separately.

### 2. Number Games

- Generate a multiplication table from 1 to 10.
- Display even numbers from 1 to 50.
- Calculate the sum of numbers from 1 to 100.
- Display FizzBuzz from 1 to 30.
- Bonus: check whether a word or sentence is a palindrome.

The palindrome checker ignores letter case, spaces, and punctuation, and supports English letters and digits.

### 3. Electricity Bill Calculator

Calculate an electricity bill using progressive practice rates:

| Slab | Rate |
|------|------|
| First 100 units | Rs. 10 per unit |
| Next 100 units | Rs. 15 per unit |
| Units above 200 | Rs. 20 per unit |

Each rate applies only to the units within its slab.

The calculator displays consumed units, slab calculations, and the total bill.

These are practice rates, not real electricity tariffs. Taxes and additional charges are not included.

## Features

- Responsive layout for mobile and desktop
- Separate HTML, CSS, and JavaScript files
- Editable inputs with validation
- Results displayed directly on the page
- Console output for reviewing JavaScript results
- Automatic electricity bill test cases
- Semantic HTML and labeled form inputs
- No frameworks or external dependencies

## Technologies

- HTML5
- CSS3
- JavaScript

## Project Files

- `index.html` — Page structure and forms
- `style.css` — Styling and responsive layouts
- `script.js` — Calculations, functions, and events
- `README.md` — Project documentation

## Run Locally

1. Download or clone this repository.
2. Keep the project files in the same folder.
3. Open `index.html` in a browser.

Alternatively, open the folder in VS Code and launch `index.html` using Live Server.

No package installation or build command is required.

## Example Checks

| Task | Input | Expected Result |
|------|-------|-----------------|
| Grade Calculator | 80, 75, 70, 65, 60 | Total: 350/500, Percentage: 70%, Grade: A, Pass |
| Subject Pass Rule | Any subject below 33 | Fail |
| Sum of Numbers | 1 to 100 | 5050 |
| Palindrome Checker | madam | Palindrome |
| Palindrome Checker | hello | Not a palindrome |
| Electricity Bill | 80 units | Rs. 800 |
| Electricity Bill | 150 units | Rs. 1,750 |
| Electricity Bill | 350 units | Rs. 5,500 |

Open the browser developer tools and select Console to view logged results.

## JavaScript Concepts

- Functions and return values
- Conditional statements
- Loops
- Arrays and objects
- Arithmetic and remainder operators
- String methods
- DOM manipulation
- Form events
- Input validation
- Basic assertions

## Author

**Zeeshan Fida**

Tech SG Studio — Day 2 JavaScript Assignment
