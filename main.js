'use strict';

const studentsArray = [];
const houseNames = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];

const domEvents = () => {
  document.querySelector('#btnShowForm').addEventListener('click', showForm);
};

const renderToDOM = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

//show sort form when "Let's get sorting button is clicked"
const showForm = () => {
  let domString = `<div class = "container text-center mb-3">
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
                          id="input-student"/>
                              <button type="button" class="btn btn-info" id="btn-sort">Sort!</button>
                      </div>
                      </div>
                   </form>
                   </div>`;
  renderToDOM('sort-form', domString);
};

domEvents();
