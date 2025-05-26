// 1. Define the interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Create two students
const student1: Student = {
  firstName: "Musa",
  lastName: "Jackiteh",
  age: 23,
  location: "Monrovia"
};

const student2: Student = {
  firstName: "James",
  lastName: "Wuelleh",
  age: 13,
  location: "Brewerville"
};

// 3. Store them in an array
const studentsList: Student[] = [student1, student2];

// 4. Create a table and render to the page
const table = document.createElement("table");
table.border = "1";

studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  table.appendChild(row);
});

document.body.appendChild(table);

