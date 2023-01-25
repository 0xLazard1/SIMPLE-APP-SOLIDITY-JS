import { ethers, providers } from "ethers";
import React, { useState } from "react";
import './App.css';
import artifacts from "./artifacts/contracts/Lock.sol/Vercel.json";

const VercelAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";

function App() {
  const [Number1, setNumber1] = useState(undefined);
  const [Balance, setBalance] = useState(undefined);
  const [error, setError] = useState(undefined);

  async function setNumber() {
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = await provider.getSigner();
      const contractVercel = new ethers.Contract(VercelAddress, artifacts.abi, signer);
      try {
        await contractVercel.setNumber(Number1);
        setBalance(Number1);
      } catch (err) {
        setError(err.message);
      }
    } else {
      setError("Metamask non détecté. Veuillez installer Metamask pour continuer.")
    }
  }

  return (
    <div className="App">
      <input onChange={e => setNumber1(e.target.value)} placeholder="Choisir le nombre" />
      <p>{Balance}</p>
      {error && <p>{error}</p>}
      <button onClick={setNumber}>Envoyer</button>
    </div>
  );
}

export default App;

