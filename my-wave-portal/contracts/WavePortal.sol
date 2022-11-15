// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract WavePortal {
	uint256 totalWaves;
	string[] waveAddresses;

	constructor() {
		console.log("Yo yo, I am a contract and I am smurt.");
	}

	function wave() public {
		totalWaves += 1;
		console.log("%s has waved!", msg.sender);
	}

	function getTotalWaves() public view returns (uint256) {
		console.log("We have %d total waves!", totalWaves);
		return totalWaves;
	}

	function storeAddresses(address) public {
		waveAddresses.push(address);
	}

	function getAddresses() public view returns (string[]) {
		return waveAddresses;
	}
}

