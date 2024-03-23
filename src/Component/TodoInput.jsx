import React, { useState } from 'react';
import "./TodoInput.css"
function TodoInput({ HandleAdd }) {
  const [formData, setFormData] = useState({
    title: '',
    assignee: '',
    date: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    HandleAdd(formData); // Pass formData directly to HandleAdd
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{width:"40%"}}>
        <input type="text" placeholder="Enter Your Title" value={formData.title} name="title" onChange={handleChange} style={{width:"300px",height:"30px" ,borderRadius:"30px"}} />
        <br />
        <br />
        <input type="text" placeholder="Assignee" value={formData.assignee} name="assignee" onChange={handleChange} style={{width:"300px",height:"30px" ,borderRadius:"30px"}}  />
        <br />
        <br />
        <input type="date" value={formData.date} name="date" onChange={handleChange} style={{width:"300px",height:"30px" ,borderRadius:"30px"}} />
        <br />
        <br />
        <button id='btn' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TodoInput;
