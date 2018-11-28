const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const writeStream = fs.createWriteStream('posts.csv');

 // write row(header) to csv
 writeStream.write(`Title,Link,Date \n`);


request('https://www.bellanaija.com/', (error, res, html) => {
    if (!error && res.statusCode == 200) {
        const $ = cheerio.load(html);
        
        $('.home-feature').each((i, el) => {
            const title = $(el).find('h3').text();
            // console.log(title);

            const link = $(el).find('h3 a').attr('href');
            // console.log(link);

            const date = $(el).find('.home-date-wrap span').text();
            //console.log(date);

            //console.log(title, link, date);

            // write row(header) to csv
            writeStream.write(`${title}, ${link}, ${date} \n`);
        });
        console.log('Scraping done...');
    }
});