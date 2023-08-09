import './Buttons.css'

const Buttons = props => {
  const onResetHandler = event => {
    props.setFormData(props.intialState)
  }

  return (
    <p className='actions'>
      <button type='reset' onClick={onResetHandler} className='buttonAlt'>
        Reset
      </button>
      <button type='submit' className='button'>
        Calculate
      </button>
    </p>
  )
}
export default Buttons
