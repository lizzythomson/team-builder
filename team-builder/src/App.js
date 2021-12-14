import "./App.css";
import React, { useState } from "react";
import TeamForm from "./TeamForm";

const initialFormValues = {
  teamMemberName: "",
  teamMemberEmail: "",
  teamMemberRole: "",
};

function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const submitForm = (event) => {
    event.preventDefault();
    const newTeamMember = {
      teamMemberName: formValues.name.trim(),
      teamMemberEmail: formValues.email.trim(),
      teamMemberRole: formValues.role.trim(),
    };
    setTeamMembers(teamMembers.concat(newTeamMember));
    setFormValues(initialFormValues);
  };

  return (
    <div className="App">
      <h1>Build Your Team!!!</h1>
      <TeamForm
        values={formValues}
        update={updateForm}
        submit={submitForm}
      ></TeamForm>
    </div>
  );
}

export default App;
