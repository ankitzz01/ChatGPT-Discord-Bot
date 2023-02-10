const { SlashCommandBuilder, ChatInputCommandInteraction, PermissionFlagsBits, Client } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("ping")
		.setDescription("Shows client Ping")
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

	/**
	 * @param {Client} client
	 * @param {ChatInputCommandInteraction} interaction 
	 */

	execute(interaction, client) {
		interaction.reply({ content: `Client Ping: ${client.ws.ping}`, ephemeral: true })
	}
}