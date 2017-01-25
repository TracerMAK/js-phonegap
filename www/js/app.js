/*
 * app.js
 * Root namespace module
*/

var app = (function() {
    var initialize = function(container) {
        app.shell.initModule(container);
    };
    console.log("app.shell.initModule loaded");
    return {initialize: initialize};
}());
           
window.fbAsyncInit = function () {
    FB.init({
        appId      : '770629679754669',
        xfbml      : true,
        version    : 'v2.8'
    });
    
    console.log("Facebook SDK Initialized.");
};

function login() {
    FB.getLoginStatus(function (response) {
        console.log(response);
        if (response.status === 'connected') {
            console.log('Logged in.');
        }
        else {
            FB.login();
        }
    });
}

function onDeviceReady() {
    console.log("Device Ready...");
    console.log("Initializing Shell");
    (function() {app.initialize('app');}());
}

// Initialize the app after DOM content loaded
// Check if app is running in browser or phone
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM Loaded");
    
    window.isphone = false;
    if(document.URL.indexOf("http://") === -1 && document.URL.indexOf("https://") === -1) {
        window.isphone = true;
    }
    if(window.isphone) {
        // 'deviceready' is a cordova event
        console.log("Waiting for Cordova 'deviceready' event...");
        document.addEventListener("deviceready", onDeviceReady, false);
    }
    else {
        // in browser, no need to listen for cordova events
        console.log("Application running in browser.");
        onDeviceReady();
    }
});     