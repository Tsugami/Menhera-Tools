const express = require("express");
const router = express.Router()
const { api_TOKEN } = require("../config.json")
const make_request = require("../util/sendMessage")
const { MessageEmbed } = require("discord.js")

router.post('/ready', (req, res) => {

    const token = req.headers.token

    if (!token || token !== api_TOKEN) return res.status(403).send({ message: "Only the Menhera Client can acess that!" })

    const embed = new MessageEmbed()
        .setTitle("Menhera is ON")
        .setDescription("Menhera voltou de férias, e já está online respondendo comandos!")
        .setColor("#1cf313")
        .setTimestamp()

    make_request.status(embed)
    res.sendStatus(200)
})

router.post('/down', (req, res) => {

    const token = req.headers.token

    if (!token || token !== api_TOKEN) return res.status(403).send({ message: "Only the Menhera Client can acess that!" })

    const embed = new MessageEmbed()
        .setTitle("DOWN!")
        .setDescription("ESSA NÃO!!!\nMenhera foi de base!")
        .setColor("#fd0000")
        .setTimestamp()

    make_request.status(embed)
    res.sendStatus(200)
})

router.post('/shard/ready', (req, res) => {

    const token = req.headers.token

    if (!token || token !== api_TOKEN) return res.status(403).send({ message: "Only the Menhera Client can acess that!" })


    const shard = req.body.shard

    const embed = new MessageEmbed()
        .setTitle("Shard On!")
        .setDescription(`O shard **${shard}** já está na batalha contra os Deuses`)
        .setColor("#df96e6")
        .setTimestamp()

    make_request.status(embed)
    res.sendStatus(200)
})

router.post('/shard/disconnect', (req, res) => {

    const token = req.headers.token

    if (!token || token !== api_TOKEN) return res.status(403).send({ message: "Only the Menhera Client can acess that!" })


    const shard = req.body.shard

    const embed = new MessageEmbed()
        .setTitle("Quando você voltar, eu vou estar lá")
        .setDescription(`O shard **${shard}** foi de base`)
        .setColor("#91a8a8")
        .setTimestamp()

    make_request.status(embed)
    res.sendStatus(200)
})

router.post('/shard/reconnecting', (req, res) => {

    const token = req.headers.token

    if (!token || token !== api_TOKEN) return res.status(403).send({ message: "Only the Menhera Client can acess that!" })


    const shard = req.body.shard

    const embed = new MessageEmbed()
        .setTitle("Achou que eu tava brincando?")
        .setDescription(`O shard **${shard}** ta se recuperando dos danos, e voltando à batalha`)
        .setColor("#91a8a8")
        .setTimestamp()

    make_request.status(embed)
    res.sendStatus(200)
})

module.exports = router;