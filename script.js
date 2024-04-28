/*  Where I'm at:
All functions are functioning!

Potential improvements:
- If someone enters not a number in the salary, it will default to 0. Also, "5" will become 5. But if the prompt is left blank, it will become NaN. I have tried saying if salary == undefined or null or NaN, salary = 0, but it still shows Nan.

- The '(employeesArray)' parameter for the displayAverageSalary and getRandomEmployee functions was pre-written in the starter code, but is not being used. Try renaming my employees array to match their employeesArray array and see if the code breaks.

- I don't like that 'const employees = [];' is outside the collectEmployees function, but it needs to be accessible to the other functions and I haven't found a better way yet.

-------------------------------------------------------------------------------------------------------------*/

// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

const employees = []; // Empty array to put employee objects into

// Collect employee data
const collectEmployees = function() {
  // repeats as long as confirm("Add another employee?") = true
  do {
    let firstName = prompt('Enter first name');
    let lastName = prompt('Enter last name');
    let salary = prompt('Enter salary');  //change string to number, a word will default to 0

    if (isNaN(salary)) {
      salary = 0;  // words become 0
    } else {
      salary = parseInt(salary);  // change string to number
    }

    // make a new employee object where properties : variables
    let employee = {
      firstName : firstName,
      lastName : lastName,
      salary : salary,
      }

      employees.push(employee); // add employee to employees array

  }
    while (confirm("Add another"));
    return(employees); // return the array

}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  const salaries = employees.map(employee => employee.salary);  // extracts the salaries out of the employees array
  const sumSalaries = salaries.reduce((total, salary) => total + salary, 0);  // adds the salaries together
  const averageSalary = sumSalaries / salaries.length;  // calculates the average

  console.log(`Average Salary: ${averageSalary}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  const random = employees [ Math.floor (Math.random() * employees.length)];  // get random employee
  console.log(`Congrats ${random.firstName} ${random.lastName}, you're the winner!`);
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
