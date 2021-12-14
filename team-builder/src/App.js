import "./App.css";
import React, { useState, useEffect } from "react";
import TeamMember from "./TeamMember";
import TeamForm from "./TeamForm";
import axios from "axios";

const initialFormValues = {
  name: "",
  email: "",
  role: "",
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
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
    };
    setTeamMembers(teamMembers.concat(newTeamMember));
    setFormValues(initialFormValues);
  };

  useEffect(() => {
    axios.get("https://fakeapi.com").then((res) => setTeamMembers(res.data));
  }, []);

  return (
    <div className="App">
      <div className="builder-container">
        <h1>Build Your Team!!!</h1>
        <TeamForm
          values={formValues}
          update={updateForm}
          submit={submitForm}
        ></TeamForm>
      </div>

      {teamMembers.map((member) => {
        return <TeamMember key={member.name} details={member} />;
      })}
    </div>
  );
}

export default App;
