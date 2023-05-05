function download(url) {
    console.log("Starting to download data from", url);
    return new Promise(function exec(resolve, reject) {
        setTimeout(function down() {
            console.log("Downloading completed");
            const content = "ABCDE";  // assume dummy downloaded content
            reject(content);
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


let p = download("www.xyz.com");
p
    .then(
        function processDownload(data) {
            console.log("Downloaded Data is", data);
            return writeFile(data);
        },
        function downloadReject(data) {
            console.log("Download Reject", data);
            throw data;
        })
    .then(
        function processWrite(fileName) {
            console.log("Data written in the file with name", fileName);
            return upload("www.upload.com", fileName)
        },
        function writeReject(fileName) {
            console.log("Write Reject", fileName);
            throw fileName;
        })
    .then(
        function processUpload(response) {
            console.log("We have uploaded the file with response", response)
        },
        function uploadReject(response) {
            console.log("Upload Reject", response);
        })