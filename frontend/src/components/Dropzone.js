import React, {useState, useEffect} from 'react';
import { scanDirectory } from '../../lib/actions';
import axios from "axios";

// Global Variables
const restUrl = "http://localhost:5000/tracks";
//let headers = { 'Content-Type': "multipart/form-data; charset=utf-8; boundary=" + Math.random().toString().substr(2) };

const Dropzone = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    // fetch directory path
    const uploadFiles = async () => {
        const returnedFiles = await scanDirectory();
        setData(returnedFiles);
        insertTrack();
    };
    // const formatData = (track) => {
    //     const formData = new FormData();
    //     formData.append("location", track?.location);
    //     formData.append("album", track?.album);
    //     formData.append("biterate", track?.biterate);
    //     formData.append("fileType", track?.fileType);
    //     formData.append("plays", track?.plays);
    //     formData.append("title", track?.title);
    //     formData.append("year", track?.year);
    //     formData.append("bpm", track?.bpm);
    //     formData.append("samplerate", track?.samplerate);
    //     formData.append("size", track?.size);
    //     formData.append("initialKey", track?.initialKey);
    //     formData.append("length", track?.length);
    //     // for (let [key, val] of formData.entries()) {
    //     //     console.log(key, val);
    //     // }
    // }
    const insertTrack = async () => {
        const postData = async() => {
            try {
                await axios.post(`${restUrl}`, {...data}, { headers: headers });
            } catch(e) {
                setError(e)
            }
        }
        postData();
    }
    
    return (
        <div className="row">
            <button type="button" className="btn btn-primary audio-files-upload" href="#" onClick={() => uploadFiles()}>Upload Files</button>
            
        </div>
    )
}


export default Dropzone;