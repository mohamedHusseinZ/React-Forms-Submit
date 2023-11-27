import React, { useState } from "react";
import "./Form.css";
function Form() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [submittedData, setSubmittedData] = useState([]);
    const [errors, setErrors] = useState([]);
  
    function handleFirstNameChange(event) {
      setFirstName(event.target.value);
    }
  
    function handleLastNameChange(event) {
      setLastName(event.target.value);
    }
  
    function handleSubmit(event) {
      event.preventDefault();
  
      // Validation: Check if first name is provided
      if (firstName.trim() === "") {
        setErrors(["First name is required!"]);
        return;
      }
  
      const formData = { firstName: firstName, lastName: lastName };
      const dataArray = [...submittedData, formData];
      setSubmittedData(dataArray);
      setFirstName("");
      setLastName("");
      setErrors([]);
    }
  
    const listOfSubmissions = submittedData.map((data, index) => (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    ));
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              First Name:
              <input type="text" onChange={handleFirstNameChange} value={firstName} />
            </label>
          </div>
          <div>
            <label>
              Last Name:
              <input type="text" onChange={handleLastNameChange} value={lastName} />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
        {/* Conditionally render error messages */}
        {errors.length > 0 &&
          errors.map((error, index) => (
            <p key={index} style={{ color: "red" }}>
              {error}
            </p>
          ))}
        <h3>Submissions</h3>
        {listOfSubmissions}
      </div>
    );
  }
  
  export default Form;