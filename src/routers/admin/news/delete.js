const app = require('express').Router();
const newsSchema = require("../../../database/models/news.js");
const Discord = require('discord.js');
const client = global.Client;
const channels = global.config.server.channels,
	  roles = global.config.server.roles;

console.log("[Delicacy]: Admin/newsShare/Delete router loaded.");

app.post("/admin/deletepost/:code", global.checkAuth, async (req, res) => {
    const rBody = req.body;
    let post = req.params.code;
    let postDataFind = await newsSchema.findOne({ code: post });
    if(!postDataFind) return res.redirect('/admin/news');
    client.channels.cache.get(channels.codelog).send(new Discord.MessageEmbed()
        .setTitle("Post deleted!").setColor("GREEN").setFooter(`Powered By DelicacySound`)
        .setDescription(`The user named **[${req.user.username}](https://monitoring.delicacysound.repl.co/user/${req.user.id})** deleted the post named **${postDataFind.postName}**.`)
        .addField("Post Category", postDataFind.postCategory, true)
    )
    await newsSchema.deleteOne({
        code: post
    })
    res.redirect('/codes')
});

module.exports = app;
