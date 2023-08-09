import { useState } from 'react'
import './InvestmentForm.css'

const InvestmentForm = props => {
  const intialState = {
    currentSaving: '',
    yearlySaving: '',
    expectedInterest: '',
    investmentDuration: ''
  }
  const [formData, setFormData] = useState(intialState)

  const enteredDataHandler = event => {
    const { name, value } = event.target;
    if (value.trim() !== '') {
    setFormData(prevValue => ({
      ...prevValue,
      [name]: value,
      key: +(Math.random() * 1000).toFixed(0)
    }))
  }
  }

  const onResetHandler = event => {
    setFormData(intialState)
  }

  const calculateHandler = event => {
    event.preventDefault()

      props.sendData(formData)
      setFormData(intialState)
  }

  return (
    <form className='form' onSubmit={calculateHandler}>
      <div className='input-group'>
        <p>
          <label htmlFor='current-savings'>Current Savings ($)</label>
          <input
            type='number'
            id='current-savings'
            name='currentSaving'
            value={formData.currentSaving}
            onChange={enteredDataHandler}
            required
          />
        </p>
        <p>
          <label htmlFor='yearly-contribution'>Yearly Savings ($)</label>
          <input
            type='number'
            id='yearly-contribution'
            name='yearlySaving'
            value={formData.yearlySaving}
            onChange={enteredDataHandler}
            required
          />
        </p>
      </div>
      <div className='input-group'>
        <p>
          <label htmlFor='expected-return'>
            Expected Interest (%, per year)
          </label>
          <input
            type='number'
            id='expected-return'
            name='expectedInterest'
            value={formData.expectedInterest}
            onChange={enteredDataHandler}
            required
          />
        </p>
        <p>
          <label htmlFor='duration'>Investment Duration (years)</label>
          <input
            type='number'
            id='duration'
            name='investmentDuration'
            value={formData.investmentDuration}
            onChange={enteredDataHandler}
            required
          />
        </p>
      </div>
      <p className='actions'>
        <button type='reset' onClick={onResetHandler} className='buttonAlt'>
          Reset
        </button>
        <button type='submit' className='button'>
          Calculate
        </button>
      </p>
    </form>
  )
}

export default InvestmentForm
