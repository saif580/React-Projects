import React from 'react';
import { useState } from 'react';


function App() {
  const [allData,setAllData]=useState([]);
  const intialData={
    username:'',
    age:''
  }

  const [formData,setFormData]=useState(intialData);

  const handleInputChange=event=>{
    const {name,value}=event.target
    setFormData(preValue=>({
      ...preValue,
      [name]:value,
      key:+((Math.random()*100+1).toFixed(0))
    }))
  }

  const submitHandler=event=>{
    event.preventDefault();
    setAllData(preValue=>[...preValue,formData])
    console.log(allData);
    setFormData(intialData)
  }

  return (
    <div className='centered-container'>
      <form onSubmit={submitHandler} className='user-form' >
        <div className='form-group'>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
        </div>
        <button className='submit-button' type="submit">Submit</button>
      </form>
      <div className="form-history">
        <ul>
          {allData.map((entry, index) => (
            <li key={index}>
              Username: {entry.username}, Age: {entry.age}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
