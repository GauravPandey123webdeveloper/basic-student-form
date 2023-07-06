import React, { useState } from 'react';
import './student-style.css';

const Student = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitValue = (event) => {
    event.preventDefault();
    setName(event.target.elements.name.value);
    setDob(event.target.elements.dob.value);
    setEmail(event.target.elements.email.value);
    setPassword(event.target.elements.password.value);
  };

  return (
    <div className="student">
      <div className="form">
        <form onSubmit={submitValue}>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" />
          <label htmlFor="dob">DOB:</label>
          <input type="text" name="dob" /><br />
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>DOB</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{name}</td>
              <td>{dob}</td>
              <td>{email}</td>
              <td>{password}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Student;
