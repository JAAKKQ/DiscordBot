## Wut is this?
Source of a cool bot that I managed to made with [discord.js](https://github.com/discordjs/discord.js). 
This bot's status cycles trough the price of Bitcoin, Ethereum, Dogecoin and Stellar.

## Commands
This bot uses application commands!
Users can check what is the current price of defined coin with commnad:
```
/price coin:
```
Users can check there USD balance with command:
```
/bal
```
Users can Buy and Sell over 1000 coins with commands:
```
/buy amount: coin:
```
```
/sell amount: coin:
```

Users can also send USD to other users with command:
```
/pay amount: user:
```

Users can even "mine" USD by answering simple math questions with command:
```
/mine
```

To answer the given question just define the `[answer]` value
```
/mine answer:
```

## Installation

1.  Download the latest [release](https://github.com/JAAKKQ/DiscordBot/releases)
2.  Extract it with WinRAR, 7zip, WinZip...
3.  Run `npm install`
4.  Go to the [Discord Developer Portal](https://discord.com/developers/applications) and grab your bot token
5.  Run the index.js: `node index.js` 
6.  The setup wizard will then ask: "Config file not found. Would you like to setup a new config or recover old data?" 
7.  Type `s` and hit <kbd>enter</kbd>
8.  Paste your token and hit <kbd>enter</kbd>
9.  Then paste your bot's id and hit <kbd>enter</kbd>
10.  The bot should start if there were no errors

```diff
- You should never write your bot's token or id directly to the config.json file, always use the wizard to change them!
```
To start the token wizard just run `node index.js` and when asks "Set new token?" type `y` and hit <kbd>enter</kbd>.
