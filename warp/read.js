import { warp, configureWallet } from './configureWarpServer.js';
import { transactionId } from '../transactionid.js';

async function read() {
  let wallet = configureWallet();
  const contract = warp.contract(transactionId).connect(wallet);
  const { cachedValue } = await contract.readState();
  console.log('Contract state: ', JSON.stringify(cachedValue, null, 2));
}

read();
