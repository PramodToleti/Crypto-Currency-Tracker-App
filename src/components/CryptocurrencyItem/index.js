import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoDetails} = props
  const {currencyLogo, currencyName, usdValue, euroValue} = cryptoDetails
  return (
    <li className="item-details">
      <div className="logo-container">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="currency-name">{currencyName}</p>
      </div>

      <div className="currency-value-container">
        <p className="crypto-value">{usdValue}</p>
        <p className="crypto-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
