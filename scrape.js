const puppeteer = require('puppeteer');
const fs = require('fs');

// Get the URL from the environment variable or default to Amazon
const scrapeUrl = process.env.SCRAPE_URL || 'https://aws.amazon.com';

async function scrapeData(url) {
    let browser;
    try {
        browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
        const page = await browser.newPage();
        await page.goto(url, { waitUntil: 'load', timeout: 0 });

        const data = await page.evaluate(() => {
            const title = document.querySelector('title') ? document.querySelector('title').innerText : 'No title found';
            const heading = document.querySelector('h1') ? document.querySelector('h1').innerText : 'No heading found';
            return { title, heading };
        });

        // Clean up special characters or unnecessary formatting
        const cleanedData = {
            title: data.title.replace(/\u2013/g, '-'), 
            heading: data.heading.replace(/\u2013/g, '-')
        };

        // Save cleaned data to a JSON file with indentation
        fs.writeFileSync('scraped_data.json', JSON.stringify(cleanedData, null, 2));
        console.log('Scraping successful. Data saved to scraped_data.json.');
    } catch (error) {
        console.error('Error during scraping:', error);
    } finally {
        if (browser) await browser.close();
    }
}

scrapeData(scrapeUrl);
