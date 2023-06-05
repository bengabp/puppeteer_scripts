const puppeteer = require("puppeteer");




( async () => {
    const tweetUrl = "https://twitter.com/theMadridZone/status/1664393028126007297";
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto(tweetUrl)


    console.log(await page.title());
    page.on("response",(response) => {
        console.log(response);
    });


})();