const app = require('express').Router();
const newsSchema = require("../../../database/models/news.js");
const client = global.Client;
const channels = global.config.server.channels,
	  roles = global.config.server.roles;

console.log("[Delicacy]: Admin/NewsShare/Index router loaded.");

app.get("/admin/news", global.checkAuth, async (req, res) => {
    let koddata = await newsSchema.find();
    res.render("admin/news.ejs", {
    	bot: global.Client,
        path: req.path,
        config: global.config,
        user: req.isAuthenticated() ? req.user : null,
        req: req,
        roles:global.config.server.roles,
        channels: global.config.server.channels,
        koddata: koddata, 
    })
});
app.get("/admin/addpost", global.checkAuth, async (req, res) => {
    res.render("admin/addpost.ejs", {
    	bot: global.Client,
        path: req.path,
        config: global.config,
        user: req.isAuthenticated() ? req.user : null,
        req: req,
        roles:global.config.server.roles,
        channels: global.config.server.channels
    })
});
app.get("/admin/editpost/:post", global.checkAuth, async (req, res) => {
    let post = req.params.code;
    let koddata = await newsSchema.findOne({
        code: kod
    })
    if (!koddata) return res.redirect('/news?error=true&message=You entered an invalid post.')
    res.render("admin/editpost.ejs", {
    	bot: global.Client,
        path: req.path,
        config: global.config,
        user: req.isAuthenticated() ? req.user : null,
        req: req,
        roles:global.config.server.roles,
        channels: global.config.server.channels,
        koddata: koddata, 
    })
});
app.get("/admin/deletepost/:post", global.checkAuth, async (req, res) => {
    await newsSchema.deleteOne({
        code: req.params.code
    })
    return res.redirect('/admin/news?success=true&message=Post deleted.');
});

module.exports = app;