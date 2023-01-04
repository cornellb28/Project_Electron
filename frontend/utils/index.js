import fse from 'fs-extra';
import path from 'path';
import { glob } from 'glob';
import nodeID3 from "node-id3";
import _ from "lodash";
import sharp from 'sharp';


// I need to grab the imageBuffer and convert to an actually image. I can save it to the in house folder
// so I can gab when needed. Lets try it

const imageDirectory = path.join(__dirname, "../../assets/uploads");

const convertImageToPng = async (id, dir, buffer) => {
    const confirmDir = fse.ensureDir(dir);
    await sharp(buffer).resize(320, 240).toFile(`${dir}/${id}.png`)
};

// Using Glob to fetch the files from the Directory
const fetchFilesData = async (data) => {
    const scanSelectedFiles = (data) => {
        return new Promise((resolve, reject) => {
            glob(`${data}/**/*.{m4a,mp3}`, (err, files) => {
                resolve(files);
            });
        });
    };
    const result = await scanSelectedFiles(data);
    return result;
};

// Checks if the path is a Directory
export const isDirectory = (fileNames) => {
    let check = false;
    for (let file of fileNames) {
        let checkStatus = fse.lstatSync(file).isDirectory() === false ? false : true;
        if (checkStatus === false) return;
        check = checkStatus;
    }
    return check;
};


const getFileSize = (path) => {
    const stats = fse.statSync(path).size;
    return `${stats}`;
};

// Lets get the meta-tags with Nodeid-3
const scanAudioData = async (path) => {
    const options = {
        noRaw: true // don't generate raw object (default: false)
    }
    const nodeScanFile = await nodeID3.read(path, options);
    // if (_.isEmpty(nodeScanFile) || "title" in nodeScanFile) {
    //     let file = fse.readFileSync(path);
    //     await nodeID3.update(defaultTags, file, function(err, buffer) {
    //         if(err) return err;
    //         const obj = Buffer.from(buffer, "base64").toString('ascii');
    //         console.log(JSON.parse(obj))
    //     })
    // }
    return nodeScanFile;
};



// grabbing the files, converting, and moving to the server
export const getMetaData = async (dir) => {

    let newTags = [];

    // grab all the files if you selected a folder
    const fetchFiles = await fetchFilesData(dir); // array of filenames


    for (let fileName of fetchFiles) {
        // Getting the fileSize
        //const size = getFileSize(fileName);
        //const filesSizeInBytes = humanFileSize(stats);

        // Scan for metadata
        const audioTags = await scanAudioData(fileName);
        
        const { image, comment } = audioTags;

        // if (typeof image === "undefined" || typeof image === "string") continue;
        // if (typeof comment === "undefined") continue;

        // const { text } = comment;
        // const { imageBuffer } = image;

        // convert Buffer to base64
        // const base64 = imageBuffer.toString("base64");
        // const imageData = `data:image/png;base64,${base64}`;
        const data = {
            title: audioTags.title,
            size: audioTags.size,
            bpm: audioTags.bpm,
            album: audioTags.album,
            location: fileName,
            initialKey: audioTags.initialKey,
            plays: "0",
            biterate: audioTags.biterate,
            samplerate: audioTags.samplerate,
            year: audioTags.year,
            length: audioTags.length,
            fileType: audioTags?.fileType
        };

        //convertImageToPng(data.id, imageDirectory, imageBuffer);
        newTags.push(data);
    }
    return newTags;
};