const createProvider = require('./createProvider');
const Eth = require('ethjs');

const provider = createProvider();
export function connectMetaMask() {
  if (provider) return provider;
}
