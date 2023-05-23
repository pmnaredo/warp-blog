import { WarpFactory } from 'warp-contracts';
import { transactionId } from './transactionid.js';
import wallet from 'testwallet';

const environment = process.env.NEXT_PUBLIC_WARPENV || 'testnet';
let warp;
let contract;

async function getContract() {
  if (environment === 'testnet') {
    warp = WarpFactory.forTestnet();
    contract = warp.contract(transactionId).connect(wallet);
  } else if (environment === 'mainnet') {
    warp = WarpFactory.forMainnet();
    contract = warp.contract(transactionId).connect();
  } else {
    throw new Error('Environment configured improperly...');
  }

  return contract;
}

export { getContract };
