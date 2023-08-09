//75ba19df-f16a-478b-b34a-d01055698868
const axios = require('axios');

const headers = {
  'accept': 'application/json',
  'x-api-key': 'QN_187afcf920f142d7bb3a2ae627cf5574'
};

const data = {
  name: 'NFT Transfer',
  expression: 'KHR4X2xvZ3NfdG9waWMxID1+ICc5NzRlNzA3OTMxQzY2OUM1Njc2MGU1RTgzNjQ2N2I0QUU2MTE2ZGU5JykgJiYgDQogKHR4X2xvZ3NfYWRkcmVzcyA9PSAnMHhkOTE0NUNDRTUyRDM4NmYyNTQ5MTdlNDgxZUI0NGU5OTQzRjM5MTM4JykgJiYgDQogKHR4X2xvZ3NfdG9waWMwID09ICcweGRkZjI1MmFkMWJlMmM4OWI2OWMyYjA2OGZjMzc4ZGFhOTUyYmE3ZjE2M2M0YTExNjI4ZjU1YTRkZjUyM2IzZWYnKQ==',
  network: 'ethereum-sepolia',
  destinationIds: ['422e2f62-009a-43ad-a0f5-465f35e7a252']
};

axios.post('https://api.quicknode.com/quickalerts/rest/v1/notifications', data, { headers })
  .then(response => console.log(response.data))
  .catch(error => console.log('error', error));

// (tx_logs_topic1 =~ '974e707931C669C56760e5E836467b4AE6116de9') && 
// (tx_logs_address == '0xd9145CCE52D386f254917e481eB44e9943F39138') && 
// (tx_logs_topic0 == '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef')