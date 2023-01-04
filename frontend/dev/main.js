import { isDirectory, getMetaData } from "../utils";


const { app, BrowserWindow, ipcMain, dialog, session } = require('electron');
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const axios = require("axios");
const got = (...args) => import("got").then(({ default: got }) => got(...args));
const path = require('path');
const isDev = require('electron-is-dev')
const _ = require('lodash');
const { net } = require("electron");


// This will be the root folder the user selected
//const USER_SELECTED_ROOT = undefined;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

// Grab Files and Save to JSON/DB
ipcMain.handle("upload-audio-files", async (event, args) => {
  // lets give them the dialog to choose a folder
  const dialogButton = await dialog.showOpenDialog({
    properties: ["openDirectory", "createDirectory", "openFile"],
  });

  // user selected cancel button to show selection process
  if (dialogButton.canceled) return;

  // I should be looking for an array. here is my options
  const selectedPath = dialogButton?.filePaths;

  // Save to root as the parent folder
  // Will think of something later

  // Is it a Directory | File?
  if (selectedPath && isDirectory(selectedPath)) {
    const [folderPath] = selectedPath;
    const getAudioData = await getMetaData(folderPath);
    getAudioData.forEach((t) => {
      console.log(t);
    })
    const rawResponse = await fetch('http://localhost:5000/tracks/', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({a: 1, b: 'Textual content'})
    })
  }
  // If files exist? how many?
});
