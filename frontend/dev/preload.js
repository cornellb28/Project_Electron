import { ipcRenderer, contextBridge } from "electron";



const trackApi = {
    uploadAudioFiles: async () => {
        const fetchFiles = await ipcRenderer.invoke("upload-audio-files");
        return fetchFiles;
    }
}

contextBridge.exposeInMainWorld("api", trackApi);