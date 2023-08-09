import './FormInputs.css';

const FormInputs = props => {
  const enteredDataHandler = event => {
    const { name, value } = event.target
    props.setFormData(prevValue => ({
      ...prevValue,
      [name]: value,
      key: +(Math.random() * 1000).toFixed(0)
    }))
  }

  return (
    <div>
      <div className='input-group'>
        <p>
          <label htmlFor='current-savings'>Current Savings ($)</label>
          <input
            type='number'
            id='current-savings'
            name='currentSaving'
            value={props.formData.currentSaving}
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
            value={props.formData.yearlySaving}
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
            value={props.formData.expectedInterest}
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
            value={props.formData.investmentDuration}
            onChange={enteredDataHandler}
            required
          />
        </p>
      </div>
    </div>
  )
}

export default FormInputs
