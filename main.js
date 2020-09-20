'use strict';

const studentsArray = [];
const expelledStudent = [];
const houseNames = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];

const domEvents = () => {
  document.querySelector('#btnShowForm').addEventListener('click', showForm);
  document.querySelector('#sort-form').addEventListener('click', sortStudent);
  document
    .querySelector('#student-cards')
    .addEventListener('click', expelStudent);
};

const renderToDOM = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

//show sort form when "Let's get sorting button is clicked"
const showForm = () => {
  let domString = `
<div class = "container p-4 rounded" style = "background-color: #ffd140;">
  <form id = "studentForm">
    <h4 class = "text-center">Enter first year's name.</h4>
    <div class="form-group row">
      <label for="input-student" class="col-sm-2 col-form-label text-right">Name</label>
      <div class="col-sm-8">
        <input
        type="text"
        class="form-control"
        placeholder="Harry Potter"
        id="input-student"/>
      </div>
      <div class="col-sm-2">
        <button type="button" class="btn btn-dark" id="btn-sort">Sort!</button>
      </div>
    </div>
  </form>
</div>
`;
  renderToDOM('sort-form', domString);
};

// return a random house when called
const houseSelection = () => {
  const randomNum = Math.floor(Math.random() * houseNames.length);
  const house = houseNames[randomNum];
  return house;
};

// sort student into house
const sortStudent = (e) => {
  const target = e.target.id;
  if (target === 'btn-sort') {
    const name = document.getElementById('input-student').value;
    if (name.length === 0) {
      errorMessage();
    } else {
      studentsArray.push({ studentName: name, house: houseSelection() });
      document.querySelector('#studentForm').reset();
      cardBuilder(studentsArray, 'student-cards');
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

// create student card when called
const cardBuilder = (arr, div) => {
  let domString = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr !== expelledStudent) {
      domString += `<div class="card m-4" id="${i}" style="width: 18rem; background-color: ${getHouseColor(
        arr[i].house
      )};">`;
      domString += `<div class="card-body text-center">`;
      domString += `<h5 class="card-title-${i}">${arr[i].studentName}</h5>`;
      domString += `<h6 id = "card-house" class="card-subtitle mb-2 text-muted">${arr[i].house}</h6>`;
      domString += `<button type="button" class="btn btn-danger" id=${i}>Expel</button>`;
      domString += `</div></div>`;
    } else {
      domString += `<div class="card-body text-center">`;
      domString += `<h5 class="card-title-${i}">${arr[i].studentName}</h5>`;
      domString += `<div class = "container"><img src = "./images/Death_Eater.png" alt = "death eater symbol" width = "200px" </div>`;
      domString += `</div></div>`;
    }
  }
  renderToDOM(div, domString);
};

// remove student card when expel button is clicked.
const expelStudent = (e) => {
  const target = e.target.id;
  const targetType = e.target.type;
  if (targetType === 'button') {
    const expelled = studentsArray.splice(target, 1);
    cardBuilder(studentsArray, 'student-cards');

    expelledStudent.push(expelled[0]);
    cardBuilder(expelledStudent, 'expelled-students');
  }
};

// change color of card to house colors
const getHouseColor = (house) => {
  if (house === 'Gryffindor') {
    return 'red';
  } else if (house === 'Slytherin') {
    return 'green';
  } else if (house === 'Hufflepuff') {
    return 'blue';
  } else if (house === 'Ravenclaw') {
    return 'yellow';
  }
};

domEvents();
