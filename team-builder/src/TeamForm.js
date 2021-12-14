import React from "react";

export default function TeamForm(props) {
  const { values, update, submit } = props;

  const onChange = (event) => {
    const name = event.target.name;
    const { value } = event.target;
    update(name, value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    submit();
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group inputs">
        <label>
          Name:
          <input
            name="name"
            type="text"
            placeholder={`First & Last Name`}
            value={values.name}
            onChange={onChange}
          ></input>
        </label>
        <label>
          Email:
          <input
            name="email"
            type="email"
            placeholder={`Email`}
            value={values.email}
            onChange={onChange}
          ></input>
        </label>
        <label>
          Role:
          <select value={values.role} name="role" onChange={onChange}>
            <option value="">--- Select Your Role ---</option>
            <option value="Techical Lead">Techical Lead</option>
            <option value="Manager">Manager</option>
            <option value="Backend Engineer">Backend Engineer</option>
            <option value="Frontend Engineer">Frontend Engineer</option>
            <option value="Product Manager">Product Manager</option>
            <option value="UX Designer">UX Designer</option>
          </select>
        </label>
        <div className="submit">
          <button>Submit</button>
        </div>
      </div>
    </form>
  );
}
