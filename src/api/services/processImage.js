 const fs = require("fs");
 const path = require("path");
 const isLocal = typeof process.pkg === "undefined";
 const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);

const { Web3Storage, getFilesFromPath } = require('web3.storage');

async function getFiles (path) {
    const storage = new Web3Storage({ token: process.env.WEB3_TOKEN })
    const files = await getFilesFromPath(`${basePath}/src/uploads`)
    const cid = await storage.put(files)
    console.log(`IPFS CID: ${cid}`)
    console.log(`Gateway URL: https://w3s.link/ipfs/${cid}/uploads`)

    //console.log(`read ${files.length} file(s) from ${path}`)
    //return files
  }

module.exports = {getFiles}