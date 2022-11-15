/*
// compile contract, generate files to work w/ contract in artifacts/
// Hardhat creates local eth network for this contract 
// wait till contract deployed
// logs address of the deployed contract
//NB hre = hardhat runtime environment
*/

const main = async () => {
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal"); 
    const waveContract = await waveContractFactory.deploy(); 
    await waveContract.deployed(); 
    console.log("Contract deployed to:", waveContract.address); 
};

const runMain = async () => {
    try {
        await main();
        ProcessingInstruction.exit(0); // exit Node process without error
    } catch (error) {
        console.log(error);
        process.exit(1); // exist Node process while indicating 'Uncaught Fatal Exception' error 
    }

};

runMain();

