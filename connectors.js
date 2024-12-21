import { WalletConnectConnector } from '@web3-react/walletconnect-connector';

export const walletconnect = new WalletConnectConnector({
  rpc: {
    8453: `https://base-mainnet.infura.io/v3/6487a6329dd040b18b0a3024a16c2b93`, // Base Mainnet
    84531: `https://base-sepolia.infura.io/v3/6487a6329dd040b18b0a3024a16c2b93`, // Base Testnet (Sepolia)
  },
  chainId: 8453, // Default chain ID for Base Mainnet
  qrcode: true, // Enable QR code modal
});
