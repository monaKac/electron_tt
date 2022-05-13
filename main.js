const path = require('path');
const url = require('url');
const { app, BrowserWindow, ipcMain, nativeTheme } = require('electron');

app.on('ready', _=>{
    console.log('ready');
    
    mainWindow = new BrowserWindow({
        height: 700,
        width: 1000,
        autoHideMenuBar:true,
        frame: false,
        show: false,
        resizable: true,
        maximizable: true,
        webPreferences: {
            //devTools:false, //for productive work
            nodeIntegration: false, //ok, bc no remote code is loaded
            contextIsolation: true,
            preload: path.join(__dirname + "/preload.js"),
        }
    });
    mainWindow.webContents.openDevTools();
    nativeTheme.themeSource = 'system';
    mainWindow.once('ready-to-show', () => {
        mainWindow.show()
    });
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, '/src/frontend/index.html'),
        protocol: 'file:',
        slashes: true
    }));
    mainWindow.on('close', _=>{
        console.log('closed');
        mainWindow = null;
        //app.quit();
    });
});

ipcMain.on("app/close", _=>{
    app.quit();
});

ipcMain.on("app/minimize", _=>{
    mainWindow.minimize();
});

ipcMain.on("app/maximize", _=>{
    if( mainWindow.isMaximized()){
        mainWindow.unmaximize();
    }else{
        mainWindow.maximize();
    }

});

ipcMain.on("app/load_page", _=>{
    console.log("main.js->load_page()")
});

ipcMain.on("app/submit_tracking", _=>{
    console.log("main.js->submit_tracking()");
    
});