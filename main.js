'use strict';

const studentsArray = [];
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
  let domString = `<div class = "container-fluid text-center mb-3">
                    <h4>Enter first year's name. </h4>
                        </div>
                    <div class = "name-input">                  
                     <form id="studentForm" class = "form-inline">
                      <div class="form-group row">
                      <label for="input-student" class="col-sm-2 col-form-label">Name:</label>
                      <div class="col-sm-10">
                          <input
                          type="student"
                          class="form-control"
                          placeholder="Harry Potter"
                          id="input-student"/>
                              <button type="button" class="btn btn-info" id="btn-sort">Sort!</button>
                      </div>
                      </div>
                   </form>
                   </div>`;
  renderToDOM('sort-form', domString);
};

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

// create student card when called
const cardBuilder = () => {
  let domString = '';
  for (let i = 0; i < studentsArray.length; i++) {
    domString += `<div class="card m-4" id="${i}" style="width: 18rem;">`;
    domString += `<div class="card-body text-center">`;
    domString += `<h5 class="card-title-${i}">${studentsArray[i].studentName}</h5>`;
    domString += `<h6 id = "card-house" class="card-subtitle mb-2 text-muted">${studentsArray[i].house}</h6>`;
    domString += `<button type="button" class="btn btn-danger" id=${i}>Expel</button>`;
    domString += `</div></div>`;
  }
  renderToDOM('student-cards', domString);
};

// remove student card when expel button is clicked.
const expelStudent = e => {
  const target = e.target.id;
  const targetType = e.target.type;
  if (targetType === 'button') {
    studentsArray.splice(target, 1);
    cardBuilder();
  }
};

// change color of card to house colors
const houseColors = () => {
  var currentCard = document.getElementById(`card-house-${i}`);
  for (let i = 0; i < studentsArray.length; i++) {
    if (currentCard === 'Gryffindor') {
      document.querySelector(`#${i}`).style.backgroundColor = 'red';
    } else {
      document.querySelector(`#${i}`).style.backgroundColor = 'green';
    }
  }
};

domEvents();
