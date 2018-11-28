const request = require('request');
const cheerio = require('cheerio');

request('https://femicodes.github.io/', (error, res, html) => {
    if (!error && res.statusCode == 200) {
        const $ = cheerio.load(html);
    }
});