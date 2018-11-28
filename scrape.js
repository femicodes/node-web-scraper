const request = require('request');
const cheerio = require('cheerio');

request('https://www.bellanaija.com/', (error, res, html) => {
    if (!error && res.statusCode == 200) {
        const $ = cheerio.load(html);
        const site = $('.home-feature');
        
        //console.log(site.text());
        
        // const output = site.children().text();

         /* const output = site.children().text();
        console.log(output); */

        $('#menu-header').each((i, el) => {
            const item = $(el).text();
            const link = $(el).attr('href');

            console.log(item);
        });
    }
});