// CJS module

// We want to read a file. But we don’t want to read the whole file at one go. We can read the file in the form of a stream i.e. chunk by chunk you can start reading the file and then write it.

// When we are actually reading the file using a readable stream we can actually pipe the stream of data to an output stream using a writable stream. We can actually pipe the content that means whatever flow of content is coming from the read pipeline we are just piping it out to the write pipeline.

const fs = require('fs');
const TransformStream = require('stream').Transform;

const readStream = fs.createReadStream(__dirname + '/run.txt');
const fileWriteStream = fs.createWriteStream(__dirname + '/write.txt')

//  to modify/process the chunk of data using TransformStream Object
const transformStream = new TransformStream({
    transform(chunk, encoding, cb) {
        this.push(chunk.toString().toUpperCase());
        setTimeout(cb, 1000);
    }
});

const writeStream = process.stdout;
const outputStream = readStream.pipe(transformStream);

outputStream.pipe(writeStream);
outputStream.pipe(fileWriteStream);
