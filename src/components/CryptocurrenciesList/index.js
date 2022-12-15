import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class CryptocurrenciesList extends Component {
  state = {currencyList: [], isLoading: true}

  componentDidMount() {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formattedData = data.map(each => ({
      id: each.id,
      currencyLogo: each.currency_logo,
      currencyName: each.currency_name,
      euroValue: each.euro_value,
      usdValue: each.usd_value,
    }))
    this.setState({
      currencyList: formattedData,
      isLoading: false,
    })
  }

  render() {
    const {currencyList, isLoading} = this.state
    return (
      <div className="crypto-currency-list-container">
        <h1 className="tracker-heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="crypto-image"
        />
        <div className="crypto-tracker-item-container">
          <div className="item-container-header">
            <h1 className="coin-type-heading">Coin Type</h1>
            <div className="currency-container">
              <h1 className="currency-type">USD</h1>
              <h1 className="currency-type">EURO</h1>
            </div>
          </div>

          {isLoading ? (
            <div className="loader-container">
              <Loader type="Rings" color="#ffffff" height={80} width={80} />
            </div>
          ) : (
            <ul className="crypto-item-container">
              {currencyList.map(each => (
                <CryptocurrencyItem cryptoDetails={each} key={each.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
