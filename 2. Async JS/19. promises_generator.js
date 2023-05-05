function download(url) {
    console.log("Starting to download data from", url);
    return new Promise(function exec(resolve, reject) {
        setTimeout(function down() {
            console.log("Downloading completed");
            const content = "ABCDE";  // assume dummy downloaded content
            resolve(content);
        }, 2000);
    });
}

function writeFile(data) {
    console.log("Started writing a file with", data);
    return new Promise(function exec(resolve, reject) {
        setTimeout(function write() {
            console.log("Completed writing the data in a file");
            const fileName = "abc.txt";
            resolve(fileName);
        }, 3000);
    });
}

function upload(url, fileName) {
    console.log("Started Uploading file", fileName, "on url", url);
    return new Promise(function exec(resolve, reject) {
        setTimeout(function upload() {
            console.log("File Uploaded");
            const response = "Success";
            resolve(response);
        }, 2000);
    });
}

function doAfterReceiving(value) {
    let future = iter.next(value)
    console.log("Future is", future);
    if (future.done) return;
    future.value.then(doAfterReceiving);
}

function* steps() {
    const downloadedData = yield download("www.xyz.com");
    console.log("Data Downloaded is", downloadedData);
    const fileWritten = yield writeFile(downloadedData);
    console.log("File written is", fileWritten);
    const uploadResponse = yield upload("www.upload.com", fileWritten);
    console.log("Upload response is", uploadResponse);
    return uploadResponse
}

const iter = steps();
const future = iter.next();

for (let i = 0; i < 100000; i++) {
}

// future.value is a promise
future.value.then(doAfterReceiving);