const poloniex = require('poloniex-exchange-api');
const client = poloniex.getClient({publicKey : , // Your public key
    privateKey: , // Your private key
    

client.createLoanOffer({currency: 'USDC', amount: 500, duration: 43, autoRenew: 0, lendingRate: 0.00300001})
      .then(response => {
          const { status, data } = response;
          console.log(data.orderID);
      })
      .catch(err => console.error(err));
