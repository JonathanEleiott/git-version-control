const client = require('./client.cjs');

const syncAndSeed = async() => {
  await client.connect();
  console.log('CONNECTED');
}

syncAndSeed();