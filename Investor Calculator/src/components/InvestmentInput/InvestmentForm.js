import { useState } from 'react'
import './InvestmentForm.css'
import Buttons from './Buttons'
import FormInputs from './FormInputs'

const InvestmentForm = props => {
  const intialState = {
    currentSaving: '',
    yearlySaving: '',
    expectedInterest: '',
    investmentDuration: ''
  }
  const [formData, setFormData] = useState(intialState)

  const calculateHandler = event => {
    event.preventDefault()
    props.sendData(formData)
    setFormData(intialState)
  }

  return (
    <form className='form' onSubmit={calculateHandler}>
      <FormInputs formData={formData} setFormData={setFormData} />
      <Buttons setFormData={setFormData} intialState={intialState} />
    </form>
  )
}

export default InvestmentForm
