import React, { useState } from "react";

function Bot({
  id,
  avatar_url,
  name,
  health,
  damage,
  armor,
  bot_class,
  catchphrase,
  created_at,
  updated_at,
  addToArmy,
}) {
  //Delete a bot from the Database (db.json)
  function dischargeBot(event) {
    console.log(id);
  }
  //Bot is Added to Army via a callback function from BotCollection

  return (
    <tr>
      <td>
        <img src={avatar_url} alt={name} width={90} height={90} />
      </td>
      <td>{name}</td>
      <td>{health}</td>
      <td>{damage}</td>
      <td>{armor}</td>
      <td>{bot_class}</td>
      <td>{catchphrase}</td>
      <td>{created_at}</td>
      <td>{updated_at}</td>
      <td>
        <button
          style={{ color: "white", backgroundColor: "blue" }}
          value={id}
          onClick={addToArmy}
        >
          Add
        </button>
      </td>
      <td>
        <button
          style={{ color: "white", backgroundColor: "red" }}
          value={id}
          onClick={dischargeBot}
        >
          X
        </button>
      </td>
    </tr>
  );
}
export default Bot;