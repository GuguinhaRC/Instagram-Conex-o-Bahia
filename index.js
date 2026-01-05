const { Client, GatewayIntentBits, EmbedBuilder } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

const TOKEN = process.env.TOKEN;

client.once("ready", () => {
  console.log(`🤖 Bot ligado como ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith("/post ")) {
    const texto = message.content.replace("/post ", "");

    const embed = new EmbedBuilder()
      .setAuthor({
        name: message.author.username,
        iconURL: message.author.displayAvatarURL()
      })
      .setDescription(texto)
      .setColor(0x2ecc71)
      .setFooter({ text: "Conexão Bahia RP" })
      .setTimestamp();

    message.channel.send({ embeds: [embed] });
    message.delete();
  }
});

client.login(TOKEN);
