
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
    navigation : {
        load_page: (sPath) => ipcRenderer.send("app/load_page", sPath),
    },
    tracking  : {
        submit: (sData) => ipcRenderer.send("app/submit_tracking", sData),
    }
}


contextBridge.exposeInMainWorld("app",API);

