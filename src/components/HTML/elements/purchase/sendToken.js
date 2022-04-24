import { ethers } from "ethers";
import erc20abi from "../../../../ERC20abi.json"

export function send_token(
    contract_address,
    send_token_amount,
    to_address
  ) {
    window.ethersProvider = new ethers.providers.InfuraProvider("rinkeby");
    const private_key = "160fd8b093a785f5e492d8b3b6f1e86841e4fc44d2000cc7060c65a9b8f585b6";
    const send_account = "0x9d66d11b8B0A3Be2d76CCb6922dA41c5a32FE880";
    let wallet = new ethers.Wallet(private_key);
    let walletSigner = wallet.connect(window.ethersProvider);
    let gas_limit = "0x100000";
  
    window.ethersProvider.getGasPrice().then((currentGasPrice) => {
      let gas_price = ethers.utils.hexlify(parseInt(currentGasPrice))
      console.log(`gas_price: ${gas_price}`)
  
      if (contract_address) {
        // general token send
        let contract = new ethers.Contract(
          contract_address,
          erc20abi,
          walletSigner
        )
  
        // How many tokens?
        let numberOfTokens = ethers.utils.parseUnits(send_token_amount, 18)
        console.log(`numberOfTokens: ${numberOfTokens}`)
  
        // Send tokens
        contract.transfer(to_address, numberOfTokens).then((transferResult) => {
          console.dir(transferResult)
          alert("sent token")
        })
      } // ether send
      else {
        const tx = {
          from: send_account,
          to: to_address,
          value: ethers.utils.parseEther(send_token_amount),
          nonce: window.ethersProvider.getTransactionCount(
            send_account,
            "latest"
          ),
          gasLimit: ethers.utils.hexlify(gas_limit), // 100000
          gasPrice: gas_price,
        }
        console.dir(tx)
        try {
          walletSigner.sendTransaction(tx).then((transaction) => {
            console.dir(transaction)
            alert("Send finished!")
          })
        } catch (error) {
          alert("failed to send!!")
        }
      }
    })
  }