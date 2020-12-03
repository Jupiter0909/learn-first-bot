require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE"],
});

const BOT_PREFIX = "!";
const MOD_ROLE_COMMAND = "mod-role";

client.on("ready", () => {
  console.log("Our bot is ready to go");
});

client.on("message", (msg) => {
  if (msg.content === "Ping" || msg.content === "ping") {
    msg.reply("Pong");
  }
});

client.on("messageDelete", (msg) => {
  msg.channel.send("Stop Deleting Messages !");
});

client.on("message", (msg) => {
  if (msg.content === `${BOT_PREFIX}${MOD_ROLE_COMMAND}`) {
    modUser(msg.member);
    msg.delete();
  }
});

function modUser(member) {
  member.roles.add("783659465454256149");
}

client.login(process.env.BOT_TOKEN);
