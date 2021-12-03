const app = require('express').Router();
const codesSchema = require("../../database/models/news.js");

console.log("[Delicacy]: News Share/List router loaded.");

app.get("/list/:type", global.checkAuth, async (req, res) => {

    res.render("newshare/news/newslist.ejs", {
        bot: global.Client,
        path: req.path,
        config: global.config,
        user: req.isAuthenticated() ? req.user : null,
        req: req,
        roles:global.config.server.roles,
        channels: global.config.server.channels,
        data: await codesSchema.find()
    });
})


module.exports = app;