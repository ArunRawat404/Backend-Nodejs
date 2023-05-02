// Downloads content from the given url and passed the downloaded content to the given callback cb

function download(url, cb) {
    console.log("Starting to download data from", url);
    setTimeout(function down() {
        console.log("Downloading completed");
        const content = "ABCDE";  // assume dummy downloaded content
        cb(content);
    }, 3000)
}

// writes the given data into a new file

function writeFile(data, cb) {
    console.log("Started writing a file with", data);
    setTimeout(function write() {
        console.log("Completed writing the data in a file");
        const fileName = "abc.txt";
        cb(fileName);
    }, 2000)
}

// uploads the data from a file to a given url

function upload(url, fileName, cb) {
    console.log("Started Uploading file", fileName, "on url", url);
    setTimeout(function up() {
        console.log("File Uploaded");
        const response = "Success";
        cb(response);
    }, 2000)
}

download("www.xyz.com", function process(content) {
    console.log("Downloaded Data is", content);
    writeFile(content, function processWrite(fileName) {
        console.log("We have downloaded and written the file, now will upload");
        upload("www.upload.com", fileName, function processUpload(response) {
            console.log("We have uploaded the file with response", response)
        });
    });
});