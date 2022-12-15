Website Link: https://webcryptotrack.ccbp.tech/

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/cryptocurrency-tracker-output.gif" alt="cryptocurrency-output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/cryptocurrency-sm-success-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/cryptocurrency-lg-success-output.png)

</details>

The app has have the following functionalities

- When the page is opened,
  - Make HTTP GET request to the **cryptocurrenciesApiUrl**
  - **_loader_** should be displayed while fetching the data
  - After fetching the data, the updated list of cryptocurrencies should be displayed

</details>

<details>

<summary>API Requests & Responses</summary>
<br/>

**cryptocurrenciesApiUrl**

#### API: `https://apis.ccbp.in/crypto-currency-converter`

#### Method: `GET`

#### Description:

Returns a response containing the list of cryptocurrencies

#### Response

```json
[
  {
    "currency_name": "Bitcoin",
    "usd_value": "46750.63",
    "euro_value": "39596.07",
    "id": "6e937df9-1345-4c2f-8ace-babff0e5108f",
    "currency_logo": "https://www.cryptocompare.com/media/19633/btc.png"
  },
  ...
]
```

</details>

<details>
<summary>Components Structure</summary>

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/cryptocurrency-component-breakdown-structure.png" alt="cryptocurrency component breakdown structure" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

</details>
