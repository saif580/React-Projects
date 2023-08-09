import Header from './components/Header/Header'
import InvestmentForm from './components/InvestmentInput/InvestmentForm'
import InvestmentDetails from './components/InvestmentDetails/InvestmentDetails'
import { useState } from 'react'

function App () {
  const [yearlyData, setYearlyData] = useState([])
  const receivedDataHandler = data => {
    setYearlyData(prevValue => {
      let totalInterest=0;
      let currentSavings = +data.currentSaving 
      const yearlyContribution = +data.yearlySaving 
      const expectedReturn = +data.expectedInterest
      const duration = +data.investmentDuration
      for (let i = 0; i < duration; i++) {
        const yearlyInterest = (currentSavings * expectedReturn) / 100
        totalInterest += totalInterest + yearlyInterest
        currentSavings += yearlyInterest + yearlyContribution
        yearlyData.push({
          year: i + 1,
          yearlyInterest: yearlyInterest.toFixed(2),
          totalInterest: totalInterest.toFixed(2),
          savingsEndOfYear: currentSavings.toFixed(2),
          yearlyContribution: yearlyContribution.toFixed(2)
        })
      }
      const updatedYearlyData = [...prevValue, data]
      return updatedYearlyData
    })
  }

  return (
    <div>
      <Header />
      <InvestmentForm sendData={receivedDataHandler} />
      {yearlyData === '' ? 'No data found':
      <InvestmentDetails yearlyData={yearlyData} />}
    </div>
  )
}

export default App
