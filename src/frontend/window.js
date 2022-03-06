console.log("window.js")
const MINIMIZE_APP = document.getElementById("minimize_app");
const MAXIMIZE_APP = document.getElementById("maximize_app");
const CLOSE_APP = document.getElementById("close_app");

MINIMIZE_APP.addEventListener("click", minimize_app);
MAXIMIZE_APP.addEventListener("click", maximize_app);
CLOSE_APP.addEventListener("click",close_app);

function minimize_app( ){
    console.log("minimize_app");
    window.app.window.minimize();
}

function maximize_app( ){
    console.log("minimize_app");
    window.app.window.maximize();
}

function close_app( ){
    console.log("close_app");
    window.app.window.close();
}