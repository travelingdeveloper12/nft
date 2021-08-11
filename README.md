

npm install -g truffle

npm i ganache-cli

ganache-cli --port 7545 --quiet

cd NFT-MARKETPLACE-MAIN

npm install

#Create and Compile Smart Contract
NOTE : CREATE SMART CONTRACTS BEFORE DEPLOYING TO BLOCKCHAIN
truffle compile

#Deploy smart contract to ganache
truffle migrate

#Test smart contract
truffle test

#Start DApp
npm start

#Open metamask browser wallet and connect network to Localhost 7545.
