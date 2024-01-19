import { useState } from "react";
import "./App.css";

export const employees = [
  {
    name: "John Doe",
    age: 25,
    position: "Software Engineer",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro esse ea quod ducimus, illo earum quam nesciunt odit laboriosam nulla.",
  },
  {
    name: "Jane Smith",
    age: 32,
    position: "Product Manager",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro esse ea quod ducimus, illo earum quam nesciunt odit laboriosam nulla.",
  },
  {
    name: "Mike Johnson",
    age: 27,
    position: "UI/UX Designer",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro esse ea quod ducimus, illo earum quam nesciunt odit laboriosam nulla.",
  },
  {
    name: "Sarah Lee",
    age: 30,
    position: "Marketing Manager",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro esse ea quod ducimus, illo earum quam nesciunt odit laboriosam nulla.",
  },
  {
    name: "Charbel Abou Kheir",
    age: 22,
    position: "Web Developer",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro esse ea quod ducimus, illo earum quam nesciunt odit laboriosam nulla.",
  },
  {
    name: "John Doe",
    age: 25,
    position: "Software Engineer",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro esse ea quod ducimus, illo earum quam nesciunt odit laboriosam nulla.",
  },
  {
    name: "Jane Smith",
    age: 32,
    position: "Product Manager",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro esse ea quod ducimus, illo earum quam nesciunt odit laboriosam nulla.",
  },
  {
    name: "Mike Johnson",
    age: 27,
    position: "UI/UX Designer",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro esse ea quod ducimus, illo earum quam nesciunt odit laboriosam nulla.",
  },
  {
    name: "Sarah Lee",
    age: 30,
    position: "Marketing Manager",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro esse ea quod ducimus, illo earum quam nesciunt odit laboriosam nulla.",
  },
  {
    name: "Charbel Abou Kheir",
    age: 22,
    position: "Web Developer",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro esse ea quod ducimus, illo earum quam nesciunt odit laboriosam nulla.",
  },
];

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <h1>Search</h1>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        type="text"
        placeholder="Search employee by name or position."
      />
      <p>
        <b>
          {
            employees.filter((employee) => {
              if (
                employee.name
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) ||
                employee.position
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              ) {
                return employee;
              }
            }).length
          }{" "}
        </b>
        employees were found.
      </p>
      {employees &&
        employees
          .filter((employee) => {
            if (
              employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              employee.position.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return employee;
            }
          })
          .map((employee, id) => (
            <div className="employee" key={id}>
              <h2>{employee.name}</h2>
              <h3>Age: {employee.age}</h3>
              <h3>Position: {employee.position}</h3>
              <p>{employee.description}</p>
            </div>
          ))}
    </>
  );
}

export default App;
