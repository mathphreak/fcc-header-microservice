'use strict';

function HeaderParser () {
    
    this.parseHeader = function (req, res) {
        var ip = req.ip;
        var lang = req.headers["accept-language"].split(",")[0];
        var sw = /\((.*?)\)/.exec(req.headers["user-agent"])[1];
        
        res.json({ipaddress: ip, language: lang, software: sw});
    };

}

module.exports = HeaderParser;