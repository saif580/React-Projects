import './InvestmentDetails.css'

const InvestmentDetails = props => {
  return (
    <table className='result'>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>YEAR NUMBER</td>
          <td>TOTAL SAVINGS END OF YEAR</td>
          <td>INTEREST GAINED IN YEAR</td>
          <td>TOTAL INTEREST GAINED</td>
          <td>TOTAL INVESTED CAPITAL</td>
        </tr>
        {props.yearlyData.map((data, index) => {
          return (
          <tr key={index}>
            <td>{data.year}</td>
            <td>{data.savingsEndOfYear}</td>
            <td>{data.yearlyInterest}</td>
            <td>{data.totalInterest}</td>
            <td>{data.yearlyContribution}</td>
          </tr>);
        })}

      </tbody>
    </table>
  )
}

export default InvestmentDetails
