import { useState } from "react";
import { useEffect } from "react";
import React  from 'react';

import erc20ABI from "../erc20ABI.json"
const ethers = require("ethers")
const WebPage = () => {
  const [lockPeriod, setLockPeriod] = useState("");
  const [status, setStatus] = useState("");
    const [accountAddress, setAccountAddress] = useState("");
    const [showPrompt, setShowPrompt] = useState(false);
    const [amount, setAmount] = useState('');
    const [time, setTime] = useState('');
    const [txs,setTxs]=useState([]);
    const [contractlistened,setContractListened] = useState([]);
    const [error,setError] = useState();
    const [contractinfo,setContractInfo] =useState({
      address:"_",
      tokenNmae:"_",
      tokenSymbol:"_",
      totalSupply:"_",// paste ABI code 
    });
    const [balanceinfo,setBalanceInfo] = useState({
      address:"_",
      balance:"_",
    })
    const handleSubmit= async(e)=>{
      e.preventDefault();
      const data = new FormData(e.target);
      const provider = new ethers.provider.Web3Provider(window.ethers);
      const erc20 = new ethers.contact(data.get("addr"),erc20ABI,provider);
      const tokenName = await erc20.name();
      const tokenSymbol = await erc20.Symbol();
      const tokenSupply = await erc20.totalSupply();

      setContractInfo({
        address: data.get("addr"),tokenName,tokenSymbol,tokenSupply
      })
    }
    const getBalance = async  () => {
      const provider = new ethers.provider.Web3Provider(window.ethers);
      await provider.send("Bank_requestAccount",[]);
      const erc20 = new ethers.contact(contractinfo.address,erc20ABI,provider);
      const signer = await provider.getSigner()
      const signerAddress =await  signer.getAddress();
      const Balance = await erc20.balanceof(signerAddress);

      setBalanceInfo({
        address: signerAddress,
        balance:String(Balance)
      }
      )


    }
    const handleTransfer = async(e) => {
      e.preventDefault();
      const data = new FormData(e.target);
      const provider = new ethers.provider.Web3Provider(window.ethers);
      await provider.send("Account",[]);
      const signer = await provider.getSigner();
      const erc20 = new ethers.contact(contractinfo.address,erc20ABI,signer);
      await erc20.transfer(data.get("recepient"),data.get("amaount"));

    }
    useEffect(() =>{
      const provider = new ethers.provider.Web3Provider(window.ethers);
      const erc20 = new ethers.contact(contractinfo.address,erc20ABI,provider);

      erc20.on("Transfer", (from,to,amount,event)=>{
        console.log({from,to ,amount,event});
        setTxs((currentTxs) => [
          ...currentTxs,
          {
            txHash: event.transactionHash,
            from,
            to,
            amount: String(amount)
          }
        ])
      })

    },[contractinfo.address]); 
    const handleDeposit = async () => {
      try {
        if (!window.ethereum) throw new Error("Install MetaMask");
  
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const erc20 = new ethers.contact(contractinfo.address,erc20ABI,provider);
  
        const tx = await erc20.deposit(lockPeriod, {
          value: ethers.utils.parseEther(amount),
        });
        await tx.wait();
  
        setStatus("Deposit successful!");
      } catch (error) {
        setStatus(error.message);
      }
    };
  
    const handleWithdraw = async () => {
      try {
        if (!window.ethereum) throw new Error("Install MetaMask");
  
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const erc20 = new ethers.contact(contractinfo.address,erc20ABI,provider);
  
        const tx = await erc20.withdraw();
        await tx.wait();
  
        setStatus("Withdrawal successful!");
      } catch (error) {
        setStatus(error.message);
      }
    };
  
    const handleEarlyWithdraw = async () => {
      try {
        if (!window.ethereum) throw new Error("Install MetaMask");
  
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const erc20 = new ethers.contact(contractinfo.address,erc20ABI,provider);
  
        const tx = await erc20.earlyWithdraw();
        await tx.wait();
  
        setStatus("Early withdrawal successful!");
      } catch (error) {
        setStatus(error.message);
      }
    };


    async function getAccount () {
        const accounts = await window.ethereum.request({method: "eth_requestAccounts"})
        const account = accounts[0]
        return account;
    }

    const ConnectMeta = () => {
        if (typeof window !== "undefined") {
            getAccount().then((response) => {
                console.log(response);
                setAccountAddress(response);
            })
        }
    }
    



    
  
    return (
      <div className="shadow-lg flex flex-col items-center gap-4 p-8 bg-gray-300 w-1/2  h-50 min-h-0 hover:min-h-full text-2xl transition duration-700 ease-in-out ...">
        <button className="btn transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ..." 
        onClick={ConnectMeta}
         >{!!accountAddress ? accountAddress : "Connect your wallet"}</button>
        <button className="btn transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ...">Send</button>
        <button className="btn transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ...">Withdraw</button>
        <button className="btn transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ..." 
        
        >Balance</button>
        <button className="btn transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ...">Loan</button>
        <button className="btn transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ...">Mini Statement</button>
        <button className="btn transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ..."
       onClick={ ()=> setShowPrompt(true) }
        >Lock Saving</button>
         {showPrompt && (
          
        <div className="flex flex-col items-center gap-4 p-4 bg-white shadow-lg rounded border">
         <form >
          <input
            type="number"
            placeholder="Enter Amount"
            className="input transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter Time (in months)"
            className="input transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ..."
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <button className="btn transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ..." >Send</button>
          <button className="btn bg-red-500 hover:bg-red-700 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ..." onClick={() => setShowPrompt(false)}>Cancel</button>
          </form>
        </div>
      )}
      </div>

    );
  };

  export default WebPage;
