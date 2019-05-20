var Migrations = artifacts.require("./Hello_mshk_top.sol");
module.exports = function(deployer, network) {
    // deployment steps
    deployer.deploy(Hello_mshk_top);
    /**
     *
     * // Deploy A, then deploy B, passing in A's newly deployed address
      deployer.deploy(A).then(function() {
          return deployer.deploy(B, A.address);
        });
     */
    // Add demo data if we're not deploying to the live network.
    if (network != "live") {
        //deployer.exec("add_demo_data.js");
    }
};