import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

function App() {
  const [bots, setBots] = useState([]);
  const [inArmy, setInArmy] = useState([]);
  const [page, setPage] = useState("Bots");

  //GET bots data from database
  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((response) => response.json())
      .then((bData) => setBots(bData))
      .catch((error) => console.error("Failed to GET BOT data" + error));
  }, []);
  //Display message while data is being fetched
  if (!bots) return <h1>Loading ...</h1>;

  function handleChangeView() {
    page === "Bots" ? setPage("Army") : setPage("Bots");
  }
  return (
    <>
      <h1>Welcome to Bot Battlr</h1>
      <button
        style={{ color: "white", backgroundColor: "blue" }}
        onClick={handleChangeView}
      >
        {page === "Bots" ? "View Bot Army" : "View Bot Collection"}
      </button>
      <div>
        {page === "Bots" ? (
          <BotCollection bots={bots} inArmy={inArmy} setInArmy={setInArmy} />
        ) : (
          <YourBotArmy inArmy={inArmy} />
        )}
      </div>
    </>
  );
}

export default App;
