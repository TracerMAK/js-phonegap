/*
 * app.shell.js
 * Represents the shell of the application
*/

/*global app */

app.shell = (function() {
    // Module Scope Variables
    
    // Initial layout html
    var config = {
        layout_html: String()
        + "        <div class=\"header-container\">"
        + "            <div class=\"header-top\">"
        + "                <div class=\"fb-login-button\" data-max-rows=\"1\" data-size=\"small\" data-show-faces=\"false\" data-auto-logout-link=\"true\"><\/div>"
        + "                <div class=\"header-logo-container\">"
        + "                    <img class=\"header-logo\" src=\"img\/logo.png\" alt=\"logo\">"
        + "                <\/div>"
        + "            <\/div>"
        + "            <div class=\"header-nav-container\">"
        + "                <ul>"
        + "                    <li id=\"home\"><img src=\"img\/ic_action_home.png\"><\/li>"
        + "                    <li><img src=\"img\/ic_action_logbook.png\"><\/li>"
        + "                    <li><img src=\"img\/ic_action_dumbbell.png\"><\/li>"
        + "                    <li><img src=\"img\/ic_action_trophy.png\"><\/li>"
        + "                    <li><img src=\"img\/ic_action_chart.png\"><\/li>"
        + "                <\/ul>"
        + "            <\/div>"
        + "            <div class=\"header-page-container\">"
        + "                <ul>     "
        + "                    <li class=\"arrow-box\">Home<\/li>"
        + "                    <li class=\"arrow-box\">Daily Tracker<\/li>"
        + "                    <li class=\"arrow-box\">Notes<\/li>"
        + "                <\/ul>"
        + "            <\/div>"
        + "        <\/div>"
        + "        <div class=\"main-content\">"
        + "        <\/div>"
    },
        stateMap = {container: null},   // dynamic data shared across the module
        domMap = {},                    // map for DOM related information
        setDomMap, initModule;          // moudle scoped variables/functions
    
    // Utility methods
    
    // Dom Methods
    setDomMap = function() {
        var container = stateMap.container;
        domMap = {container: container};
    };
    
    // Event Handlers
    
    // Public Methods
    initModule = function(container) {
        stateMap.container = container;
        document.getElementById(container).innerHTML = config.layout_html; // need non jquery equivalent
        setDomMap();
    };
    return {initModule: initModule};
    
}());
             