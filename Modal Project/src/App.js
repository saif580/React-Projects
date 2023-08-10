import React from 'react'
import { useState } from 'react'

function App () {
  const [allData, setAllData] = useState([])
  const intialData = {
    username: '',
    age: ''
  }
  const [formData, setFormData] = useState(intialData)
  const [isModal, setIsModal] = useState(false)
  const [inputEmptyMessage, setInputEmptyMessage] = useState('')

  const handleInputChange = event => {
    const { name, value } = event.target
    setFormData(preValue => ({
      ...preValue,
      [name]: value,
      key: +(Math.random() * 100 + 1).toFixed(0)
    }))
  }

  const submitHandler = event => {
    event.preventDefault()
    if (formData.username === '' || formData.age === '') {
      setIsModal(true)
      setInputEmptyMessage('Username And Age Is Empty')
      return
    } else if(formData.age<1){
      setIsModal(true)
      setInputEmptyMessage('Enter Valid Age')
      setFormData(intialData)
      return
    } else if(!isNaN(formData.username)){
      setIsModal(true)
      setInputEmptyMessage('Input A String Value')
      setFormData(intialData)
      return
    }
    console.log(typeof formData.username);
    setAllData(preValue => [...preValue, formData])
    setFormData(intialData)
  }

  const deleteHandler = index => {
    const updatedFormData = [...allData]
    updatedFormData.splice(index, 1)
    setAllData(updatedFormData)
  }

  const closeModalHandler = event => {
    event.preventDefault()
    setIsModal(false)
  }

  return (
    <div className='centered-container'>
      <form onSubmit={submitHandler} className='user-form'>
        <div className='form-group'>
          <label htmlFor='username'>Username:</label>
          <input
            type='text'
            id='username'
            name='username'
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='age'>Age:</label>
          <input
            type='number'
            id='age'
            name='age'
            value={formData.age}
            onChange={handleInputChange}
          />
        </div>
        <button className='submit-button' type='submit'>
          Submit
        </button>
        <div className={`modal ${isModal ? 'open' : ''}`}>
          <div className='modal-content'>
            <h1>Invalid Input</h1>
            {isModal ? <p>{inputEmptyMessage}</p> : ''}
            <button className='submit-button' onClick={closeModalHandler}>
              Close
            </button>
          </div>
        </div>
      </form>
      <div className='form-history'>
        <ul>
          {allData.map((entry, index) => (
            <li key={index} onClick={() => deleteHandler(index)}>
              Username: {entry.username}, Age: {entry.age}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
