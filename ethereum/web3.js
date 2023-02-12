import Web3 from 'web3';

let web3;

if (typeof window !=='undefined' && typeof window.web3 !=='undefined') {
	// We are in browser and metamask is running.
	web3 = new Web3(window.web3.currentProvider);
} else {
	// We are in server  OR the user is not running metamask
	const provider = new Web3.providers.HttpProvider(
		'https://goerli.infura.io/v3/0dd87f5073834bcbb07a79e230df6695'
	);
	web3 = new Web3(provider);
}

export default web3;
