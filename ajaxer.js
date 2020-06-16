// JavaScript source code
var ajaxer = {
    utilities: {},
    layout: {},
    page: {
        handlers: {},
        startUp: null
    },
    services: {},
    ui: {}
};
ajaxer.moduleOptions = {
    APPNAME: "AjaxerApp",
    extraModuleDependencies: [],
    runners: [],
    page: ajaxer.page //need this object here for later use
}
var AJAXER_AUTH = null;
ajaxer.layout.startUp = function () {
    console.debug("ajaxer.layout.startUp");
  
    {
        console.debug("setting AJAXER_AUTH header to 'AJAXER_AUTH': 'SA-1391-AAA' ");
        $.ajaxSetup({
            headers: {
                'AJAXER_AUTH': 'SA-1391-AAA'
            }
        });
    }
    //this does a null check on ajaxer.page.startUp
    if (ajaxer.page.startUp) {
        console.debug("ajaxer.page.startUp");
        ajaxer.page.startUp();
    }
};
ajaxer.APPNAME = "AjaxerApp"; //legacy
$(document).ready(ajaxer.layout.startUp);