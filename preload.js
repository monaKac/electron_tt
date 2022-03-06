
console.log("preload")
const os = require('os');
const { ipcRenderer, contextBridge } = require('electron');
const fs = require('fs');

const API = {
    window : {
        close: () => ipcRenderer.send("app/close"),
        minimize: () => ipcRenderer.send("app/minimize"),
        maximize: () => ipcRenderer.send("app/maximize"),
    },
}


contextBridge.exposeInMainWorld("app",API);

