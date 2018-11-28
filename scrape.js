const request = require('request');
const cheerio = require('cheerio');

request('https://femicodes.github.io', (error, res, html) => {
    if (!error && res.statusCode == 200) {
        const $ = cheerio.load(html);
        const site = $('.description');
        
        // console.log(site.text());
        
        // const output = site.children().text();

        const output = site.parent().text();
        console.log(output);
    }
});