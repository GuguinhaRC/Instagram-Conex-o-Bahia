const { 
  Client, 
  GatewayIntentBits, 
  EmbedBuilder, 
  REST, 
  Routes 
} = require("discord.js");

const commands = require("./commands");

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once("ready", async () => {
  console.log(`🤖 Bot ligado como ${client.user.tag}`);

  const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

  await rest.put(
    Routes.applicationCommands(client.user.id),
    { body: commands }
  );

  console.log("✅ Comandos registrados com sucesso");
});

client.on("interactionCreate", async interaction => {
  if (!interaction.isChatInputCommand()) return;

  const user = interaction.user;

  // /post
  if (interaction.commandName === "post") {
    const texto = interaction.options.getString("texto");

    const embed = new EmbedBuilder()
      .setAuthor({ name: user.username, iconURL: user.displayAvatarURL() })
      .setDescription(texto)
      .setColor("#00aaff")
      .setTimestamp();

    return interaction.reply({ embeds: [embed] });
  }

  // /postimg
  if (interaction.commandName === "postimg") {
    const legenda = interaction.options.getString("legenda");
    const imagem = interaction.options.getAttachment("imagem");

    const embed = new EmbedBuilder()
      .setAuthor({ name: user.username, iconURL: user.displayAvatarURL() })
      .setDescription(legenda)
      .setImage(imagem.url)
      .setColor("#ff9900")
      .setTimestamp();

    return interaction.reply({ embeds: [embed] });
  }

  // /curtir
  if (interaction.commandName === "curtir") {
    return interaction.reply("❤️ Curtido!");
  }

  // /comentar
  if (interaction.commandName === "comentar") {
    const texto = interaction.options.getString("texto");
    return interaction.reply(`💬 **${user.username}:** ${texto}`);
  }

  // /denunciar
  if (interaction.commandName === "denunciar") {
    const motivo = interaction.options.getString("motivo");
    return interaction.reply(`🚨 Denúncia enviada: **${motivo}**`);
  }
});

client.login(process.env.TOKEN);
