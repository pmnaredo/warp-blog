import fs from 'fs';
import { configureWallet, warp } from './configureWarpServer.js';

async function deploy() {
  const wallet = await configureWallet();
  const state = fs.readFileSync('state.json', 'utf-8');
  const contractSource = fs.readFileSync('contract.js', 'utf-8');

  const { contractTxId } = await warp.createContract.deploy({
    wallet,
    initState: state,
    src: contractSource,
  });

  fs.writeFileSync(
    '../transactionid.js',
    `export const transactionId = "${contractTxId}"`
  );
  const contract = warp.contract(contractTxId).connect(wallet);

  await contract.writeInteraction({
    function: 'initialize',
  });

  const { cachedValue } = await contract.readState();

  console.log('contract state: ', cachedValue);
  console.log('contractTxId: ', contractTxId);
}

deploy();
