const app = require('express').Router();
const postSchema = require("../../database/models/news.js");
const client = global.Client;

console.log("[Delicacy]: News Share/View router loaded.");

app.get("/view/:news", global.checkAuth, async (req, res) => {
    let post= req.params.code;
    let koddata = await postSchema.findOne({
        code: post
    })
    if (!koddata) return res.redirect('/news/list?error=true&message=You entered an invalid code.')
    if (!client.guilds.cache.get(config.server.id).members.cache.get(req.user.id)) return res.redirect("/error?code=403&message=To do this, you have to join our discord server.");
    if (koddata.codeCategory == "Site Updates") {
        if (!client.guilds.cache.get(config.server.id).members.cache.get(req.user.id).roles.cache.get(config.server.roles.codeshare.javascript)) return res.redirect("/error?code=403&message=You is not competent to do this.");
    }
    if (koddata.codeCategory == "News") {
        if (!client.guilds.cache.get(config.server.id).members.cache.get(req.user.id).roles.cache.get(config.server.roles.codeshare.html)) return res.redirect("/error?code=403&message=You is not competent to do this.");
    }
    if (koddata.codeCategory == "Discord Updates") {
        if (!client.guilds.cache.get(config.server.id).members.cache.get(req.user.id).roles.cache.get(config.server.roles.codeshare.bdfd)) return res.redirect("/error?code=403&message=You is not competent to do this.");
    }
    res.render("newshare/newsview.ejs", {
        bot: global.Client,
        path: req.path,
        config: global.config,
        user: req.isAuthenticated() ? req.user : null,
        req: req,
        roles:global.config.server.roles,
        channels: global.config.server.channels,
        koddata: koddata
    });
})


module.exports = app;