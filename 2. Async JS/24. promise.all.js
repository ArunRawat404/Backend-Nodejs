function download(url, time) {
    console.log("Starting to download data from", url);
    return new Promise(function exec(resolve, reject) {
        setTimeout(function down() {
            console.log("Downloading completed");
            const content = "ABCDE";
            if (time > 3000) {
                reject(content)
            } else
                resolve(content);
        }, time);
    });
}

const p1 = download("www.xyz1.com", 2000);
const p2 = download("www.xyz1.com", 4000);
const p3 = download("www.xyz1.com", 1000);
Promise.all([p1, p2, p3]).then(function fulfillmentHandler(values) {
    console.log(values);
})