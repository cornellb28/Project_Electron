import axios from 'axios';

// Main Scanner
export async function scanDirectory() {
    const getData = await window.api.uploadAudioFiles();
    return getData;
  }





  // https://stackoverflow.com/questions/59770737/how-to-upload-array-of-images-with-axios