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

// the return value of async function will always be a promise
async function steps() {
    console.log("Starting steps");
    const downloadedData = await download("www.xyz.com");
    console.log("Data Downloaded is", downloadedData);
    const fileWritten = await writeFile(downloadedData);
    console.log("File written is", fileWritten);
    const uploadResponse = await upload("www.upload.com", fileWritten);
    console.log("Upload response is", uploadResponse);
    return uploadResponse
}

steps().then((value) => console.log("We have completed steps with", value));
console.log("Outside");

for (let i = 0; i < 100000; i++) {
}

setTimeout(function f() {
    console.log("Timer Done");
}, 3000)

console.log("For loop done");

