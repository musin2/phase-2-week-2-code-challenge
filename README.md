# Bot Battlr

Welcome to **Bot Battlr**, the ultimate app where you can custom-build your own Bot Army! This React application allows users to browse through a list of robots, view their details, and enlist them into a bot army.

## Features

- **View All Bots**: See profiles of all available bots in the `BotCollection` component.
- **Enlist Bots**: Add a bot to your army by clicking on it. The bot will appear in the `YourBotArmy` component but will remain in the `BotCollection`.
- **Release Bots**: Remove a bot from your army by clicking on it. The bot will disappear from the `YourBotArmy`.
- **Discharge Bots Forever**: Permanently delete a bot from the backend and the `YourBotArmy` by clicking the red "x" button.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (v6 or later)

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/bot-battlr.git
   cd bot-battlr

   ```

2. Install dependencies
   ```bash
    npm install
   ```

3.Start JSON server
   ```bash
   Copy code
   json-server --watch src/data/db.json
   ```
   
4. Start React App
    ```bash
    npm run dev
    ```

