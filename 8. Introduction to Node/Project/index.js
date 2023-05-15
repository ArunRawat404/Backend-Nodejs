const { Telegraf } = require('telegraf');
// package for http calls
const axios = require('axios');

// to import .env environment variables
require('dotenv').config();

// to use environment variable 
const bot = new Telegraf(process.env.Bot_Token);

const binarySearchString = `
const binarySearch = function search(arr, x) {
    let li = 0, hi = arr.length - 1;
    while (li <= hi) {
        let mid = li + Math.floor((hi - li) / 2);
        if (arr[mid] == x) return mid;
        if (arr[mid] > x) {
            hi = mid - 1;
        } else {
            li = mid + 1;
        }
    }

    return undefined;
}
`;

try {
    bot.start((ctx) => ctx.reply("Welcome to Arun's Telegram Bot"));  // /start

    bot.command('binarySearch', (ctx) => ctx.reply(binarySearchString));   // /binarySearch

    // to get data from internet and reply with the data
    bot.command('promise', async (ctx) => {  // /promise
        const response = await axios.get("https://raw.githubusercontent.com/ArunRawat404/Backend-Nodejs/master/2.%20Async%20JS/6.%20promise_creation.js");
        ctx.reply(response.data);
    })

    bot.on('text', (ctx) => ctx.reply("Hi I don't understand humans"));
    bot.on("sticker", (ctx) => ctx.reply("❤️"));


    bot.launch();

} catch {
    console.log("Invalid Command")
}