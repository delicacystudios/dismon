const app = require('express').Router();
const newsSchema = require("../../../database/models/news.js");
const client = global.Client;
const channels = global.config.server.channels,
	  roles = global.config.server.roles;
const Discord = require("discord.js");

console.log("[Delicacy]: Admin/NewsShare/Edit router loaded.");

app.post("/admin/editpost/:post", global.checkAuth, async (req, res) => {
    const rBody = req.body;
    let post = req.params.post;
    await newsSchema.findOneAndUpdate({
        code: post
    }, {
        $set: {
            postName: rBody['postname'],
            postCategory: rBody['category'],
            postDesc: rBody['postdesc'],
            main: rBody['main'],
            commands: rBody['commands'],
        }
    }, function(err, docs) {})
    client.channels.cache.get(global.config.server.channels.postlog).send(new Discord.MessageEmbed()
        .setTitle("Post edited!").setColor("GREEN").setFooter(config.footer)
        .setDescription(`The user named **[${req.user.username}](https://monitoring.delicacysound.repl.co/user/${req.user.id})** edited the post named **${rBody['postname']}**.`)
        .addField("Post Link", `https://monitoring.delicacysound.repl.co/news/${post}`, true)
        .addField("Post Description", rBody['postdesc'], true)
        .addField("Post Category", rBody['category'], true)
    )
    res.redirect('/news/' + post)
});

module.exports = app;