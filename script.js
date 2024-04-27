/*  Where I'm at:
collectEmployees function : IT WORKS!! Except that if they leave the salary box empty, it says Nan and I want it to say 0. A word will say 0, and a string becomes a number.
displayAverageSalary function: not started
displayRandomEmployee function: not started

-------------------------------------------------------------------------------------------------------------*/

// Made an empty string to store employee objects
const employees = [];

// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // repeats as long as confirm("Add another employee?") = true
  do {
    let firstName = prompt('Enter first name');
    let lastName = prompt('Enter last name');
    let salary = prompt('Enter salary');

    // if a word is entered, default to 0, then turn "num" to num
    if (isNaN(salary)) {
      salary = 0;
      } else {      
        salary = parseInt(salary);
      }

    // make a new employee object where properties : variables
    let employee = {
      firstName : firstName,
      lastName : lastName,
      salary : salary,
      }

      // add employee to employees array
      employees.push(employee);
  }
    while (confirm("Add another"));
    // return the array
    return(employees);
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
