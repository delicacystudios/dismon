const app = require('express').Router();
const newsSchema = require("../../../database/models/news.js");
const client = global.Client;
const channels = global.config.server.channels,
	  roles = global.config.server.roles;
const Discord = require("discord.js");

console.log("[Delicacy]: Admin/newsShare/Add router loaded.");

app.post("/admin/addpost", global.checkAuth, async (req, res) => {
    const rBody = req.body;
    let post = makeid(36);
    await new newsSchema({
        post: post,
        postName: rBody['postname'],
        postCategory: rBody['category'],
        postDesc: rBody['postdesc'],
    }).save()
    if (rBody['main']) {
        await newsSchema.updateOne({
            code: post
        }, {
            $set: {
                main: req.body.main
            }
        });
    }
    if (rBody['commands']) {
        await newsSchema.updateOne({
            code: post
        }, {
            $set: {
                commands: req.body.commands
            }
        });
    }
    client.channels.cache.get(global.config.server.channels.codelog).send(new Discord.MessageEmbed()
        .setTitle("New post added!").setColor("GREEN").setFooter(config.footer)
        .setDescription(`The user named **[${req.user.username}](https://monitoring.delicacysound.repl.co/user/${req.user.id})** added the post named **${rBody['postname']}** to the system.`)
        .addField("Post Link", `https://monitoring.delicacysound.repl.co/news/${post}`, true)
        .addField("Post Description", rBody['postdesc'], true)
        .addField("Post Category", rBody['category'], true)
    )
    res.redirect('/news/' + post)
});
function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

module.exports = app;