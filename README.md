# Sorting-Hat
 
This project simulates the Hogwarts Sorting Hat ceremony. The user will input their name and be placed into their destined house.
    
## Motivation

This project required an understanding of event listeners, callback functions, and Bootstrap.

## Build Status

Reached MVP.
Completed a few bonus features
- section for expelled students
- display appropriate house colors on student cards

## Screenshots

![Alt text](/images/sorting-hat-screenshot.png "Sorting Hat Website")

## Tech/Framwork
Javascript ES6

## Features

- takes user input
- randomly assigns student into a Hogwarts' House
- allows the user to expel students.
- expelled students become Death Eaters!

## Code Example 
```
// return a random house when called
const houseSelection = () => {
  const randomNum = Math.floor(Math.random() * houseNames.length);
  const house = houseNames[randomNum];
  return house;
};

// sort student into house
const sortStudent = e => {
  const target = e.target.id;
  if (target === 'btn-sort') {
    const name = document.getElementById('input-student').value;
    if (name.length === 0) {
      errorMessage();
    } else {
      studentsArray.push({ studentName: name, house: houseSelection() });
      document.querySelector('#studentForm').reset();
      cardBuilder();
    }
  }
};

// show error message when input is empty
const errorMessage = () => {
  let errorString = '';
  errorString += `<div class="alert alert-danger alert-dismissible fade show mt-3" role="alert">`;
  errorString += `Please enter your name in the form.`;
  errorString += `<button type="button" class="close" data-dismiss="alert" aria-label="Close">`;
  errorString += `<span aria-hidden="true">&times;</span>`;
  errorString += `</button>`;
  errorString += `</div>`;
  renderToDOM('error-message', errorString);
};
```

## Deployed Site

