import "./App.css"
import Bot from "./Bot";

function BotCollection({ bots }) {
  
  return (
    <>
      <table>
        <thead>
          <tr className="dark">
            <th>Avatar</th>
            <th>Name</th>
            <th>Health</th>
            <th>Damage</th>
            <th>Armor</th>
            <th>Bot Class</th>
            <th>Catchphrase</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th>Discharge</th>
            <th>Add to Army</th>
          </tr>
        </thead>
        <tbody>
          {bots.map((bot) => {
            return (
              <Bot
                key={bot.id}
                id={bot.id}
                avatar_url={bot.avatar_url}
                name={bot.name}
                health={bot.health}
                damage={bot.damage}
                armor={bot.armor}
                bot_class={bot.bot_class}
                catchphrase={bot.catchphrase}
                created_at={bot.created_at}
                updated_at={bot.updated_at}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default BotCollection;
