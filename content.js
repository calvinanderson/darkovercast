/* just injects the CSS */
var style = document.createElement('link');
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = chrome.extension.getURL('night.css');
(document.head||document.documentElement).appendChild(style);