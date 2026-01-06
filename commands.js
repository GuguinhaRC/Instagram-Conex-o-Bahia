const { SlashCommandBuilder } = require("discord.js");

module.exports = [
  new SlashCommandBuilder()
    .setName("post")
    .setDescription("Criar um post de texto RP")
    .addStringOption(option =>
      option.setName("texto")
        .setDescription("Texto do post")
        .setRequired(true)
    ),

  new SlashCommandBuilder()
    .setName("postimg")
    .setDescription("Criar um post com imagem RP")
    .addStringOption(option =>
      option.setName("legenda")
        .setDescription("Legenda da imagem")
        .setRequired(true)
    )
    .addAttachmentOption(option =>
      option.setName("imagem")
        .setDescription("Imagem do post")
        .setRequired(true)
    ),

  new SlashCommandBuilder()
    .setName("curtir")
    .setDescription("Curtir um post RP"),

  new SlashCommandBuilder()
    .setName("comentar")
    .setDescription("Comentar em um post RP")
    .addStringOption(option =>
      option.setName("texto")
        .setDescription("Comentário")
        .setRequired(true)
    ),

  new SlashCommandBuilder()
    .setName("denunciar")
    .setDescription("Denunciar um post RP")
    .addStringOption(option =>
      option.setName("motivo")
        .setDescription("Motivo da denúncia")
        .setRequired(true)
    )
];
