const Command = require("../../structures/command")
module.exports = class NotifyCommand extends Command {
    constructor(client) {
        super(client, {
            name: "notify",
            category: "util",
            cooldown: 5,
            OnlyDevs: false
        })
    }
    async run(message, args) {

        if(message.guild.id !== "717061688460967988") return message.channel.send("Comando disponível somente no servidor de suporte da Menhera")

        const role = await this.client.guilds.cache.get('717061688460967988').roles.cache.get('755593580285788280')
       
        if(message.member.roles.cache.has(role.id)) {
            message.channel.send("Como desejar! Você não será mais notificado das atualizações da Menhera!")
            message.member.roles.remove(role, "Comando Notify")
        } else {
            message.channel.send("Feitoria! Você será notificado das atualizações da Menhera")
            message.member.roles.add(role, "Comando Notify")
        }
    }
}