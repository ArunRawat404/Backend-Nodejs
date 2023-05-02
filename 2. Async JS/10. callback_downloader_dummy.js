// Inversion of control problem

function download(url, cb) {
    console.log("Started downloading from url", url);
    setTimeout(function exec() {
        console.log("Completed downloading");
        const content = "ABCDE";
        cb(content);
    }, 3000);
}

download("www.xyz.com", function processDownload(data) {
    console.log("Downloaded data is", data);
})
