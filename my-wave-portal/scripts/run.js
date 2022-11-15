/*
// get wallet address of contract owner 
// compile contract, generate files to work w/ contract in artifacts/
// Hardhat creates local eth network for this contract 
// wait till contract deployed
// logs address of the deployed contract
// logs address of deployer
// calls functions in contract: get total waves, call wave function, get total waves again
//NB hre = hardhat runtime environment
*/

const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal"); 
    const waveContract = await waveContractFactory.deploy(); 
    await waveContract.deployed(); 

    console.log("Contract deployed to:", waveContract.address);
    console.log("Contract deployed by:", owner.address);
    
    const firstWaveTxn = await waveContract.wave();
    await firstWaveTxn.wait();

    await waveContract.storeAddresses(firstWaveTxn.address);

    const secondWaveTxn = await waveContract.connect(randomPerson).wave();
    await secondWaveTxn.wait();

    await waveContract.storeAddresses(secondWaveTxn.address);

    await waveContract.getTotalWaves();

    console.log("waves from:", waveContract.getAddresses())
};

const runMain = async () => {
    try {
        await main();
        process.exit(0); // exit Node process without error
    } catch (error) {
        console.log(error);
        process.exit(1); // exist Node process while indicating 'Uncaught Fatal Exception' error 
    }

};

runMain();

