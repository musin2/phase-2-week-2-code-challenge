import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

function App() {
  const [bots, setBots] = useState(0)

  useEffect(() => {
    fetch("http://localhost:3000/bots")
    .then((response) => response.json())
    .then((bData) => setBots(bData))
    .catch((error) => console.error("Failed to GET BOT data"+error))
  },[])

  if(!bots) return <h1>Loading ...</h1>

  return (
    <>
      <h1>Welcome to Bot Battlr</h1>
      <div>
        <BotCollection bots={bots} />
      </div>
    </>
  );
}

export default App
