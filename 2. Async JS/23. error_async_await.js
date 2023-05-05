function download(url) {
    console.log("Starting to download data from", url);
    return new Promise(function exec(resolve, reject) {
        setTimeout(function down() {
            console.log("Downloading completed");
            const content = "ABCDE";
            reject(content);
        }, 2000);
    });
}

async function steps() {
    // Inside try block we write all that code that can potentially throw an exception 
    try {
        console.log("Starting steps");
        const downloadedData = await download("www.xyz.com");
        return downloadedData
    }
    // catch is used to handle that exception
    catch (error) {
        console.log("We have handled the error", error);
    } finally {
        console.log("Finally will be always executed");
    }


}

steps();

