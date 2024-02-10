import Puppeteer  from "puppeteer";

const getPage = async () => {
    const browser = await Puppeteer.launch({
        headless: false,
        defaultViewport: null,
    });

    const page = await browser.newPage();

    //go to page
    await page.goto("https://news.ycombinator.com/", {
        waitUntil: "domcontentloaded" ,
    });
    
    //get data
    const pageData = await page.evaluate(() => {
        const item = document.querySelector(".athing .title .titleline a");

        
        return {
            href: item ? item.href : null, // Get the href attribute
            text: item ? item.innerText : null, // Get the inner text
        };
    });

    console.log(pageData);

    await browser.close();
}




getPage();
