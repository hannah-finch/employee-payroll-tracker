// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

const employees = []; // Empty array to put employee objects into

// Collect employee data
const collectEmployees = function() {
  // repeats as long as confirm("Add another employee?") = true
  do {
    let firstName = prompt("Enter employee's first name");
    let lastName = prompt("Enter employee's last name");
    let salary = prompt("Enter employee's salary");  //change string to number, a word will default to 0

    if (isNaN(salary) || salary == "") {
      salary = 0;  // words and empty strings become 0
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
    while (confirm("Would you like to add another employee?"));
    return(employees); // return the array
}

// Display the average salary
const displayAverageSalary = function(employees) {
  const salaries = employees.map(employee => employee.salary);  // extracts the salaries out of the employees array
  const sumSalaries = salaries.reduce((total, salary) => total + salary, 0);  // adds the salaries together
  const averageSalary = sumSalaries / salaries.length;  // calculates the average

  console.log(`Average Salary: ${averageSalary}`);
}

// Select a random employee
const getRandomEmployee = function(employees) {
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
