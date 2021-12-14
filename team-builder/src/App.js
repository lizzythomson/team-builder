import "./App.css";
import React, { useState, useEffect } from "react";
import TeamMember from "./Form";
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
  const [error, setError] = useState(null);

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const submitForm = () => {
    const name = formValues.name.trim();
    const email = formValues.email.trim();
    const role = formValues.role;
    if (!name || !email || !role) {
      setError("***All fields are required***");
      return;
    }
    const newTeamMember = {
      name,
      email,
      role,
    };
    setTeamMembers(teamMembers.concat(newTeamMember));
    setFormValues(initialFormValues);
    setError(null);
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
          error={error}
        ></TeamForm>
      </div>
      <div className="team-member-container">
        {teamMembers.map((member) => {
          return <TeamMember key={member.name} details={member} />;
        })}
      </div>
    </div>
  );
}

export default App;
