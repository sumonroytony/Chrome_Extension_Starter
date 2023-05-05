const createProvider = require('./createProvider');

const provider = createProvider();
export function connectMetaMask() {
  if (provider) return provider;
}
