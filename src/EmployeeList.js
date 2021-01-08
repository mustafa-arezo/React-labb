import { useEffect, useState } from "react";
import Employee from "./Employee";

function EmployeeList() {
  const [employess, setEmployess] = useState([
    {
      name: "Mustafa Arezo",
      email: "mustafa_arezoo@hotmail.com",
      phone: "070000021",
      skills: "Java, JavaScript, React",
      avatar: "https://i.imgur.com/t9HFQvX.png",
    },
    {
      name: "Test Test",
      email: "test@hotmail.com",
      phone: "0700123131",
      skills: "Pyton, Sql, Go",
      avatar: "https://i.imgur.com/Q9qFt3m.png",
    },
  ]);

  function handleAddNewEmp() {
    setEmployess((prevState) => {
      return [
        ...prevState,
        {
          name: "Geralt",
          email: "geralt@hotmail.com",
          phone: "1231",
          skills: "None",
          avatar: " https://i.imgur.com/TUhCrsY.png",
        },
      ];
    });
  }
  return (
    <div>
      <h3>EmployeeList</h3>
      <button onClick={handleAddNewEmp}>Add Employee</button>
      {employess.map((employee) => (
        <Employee EmployeeData={employee} />
      ))}
    </div>
  );
}

export default EmployeeList;
