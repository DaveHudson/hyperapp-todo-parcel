require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var a=e[n]=new t.Module;r[n][0].call(a.exports,i,a,a.exports)}return e[n].exports}function o(){this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({5:[function(require,module,exports) {
module.exports = {
  "dir": "ltr",
  "lang": "en",
  "name": "HyperApp ToDo",
  "scope": "./",
  "display": "fullscreen",
  "start_url": "./",
  "short_name": "ToDo",
  "theme_color": "white",
  "description": "simple crud todo app",
  "orientation": "portrait",
  "background_color": "white",
  "icons": [{
    "src": "./apple-touch-icon.png",
    "sizes": "180x180",
    "type": "image/png"
  },{
    "src": "./android-chrome-192x192.png",
    "sizes": "192x192",
    "type": "image/png"
  },{
    "src": "./android-chrome-512x512.png",
    "sizes": "512x512",
    "type": "image/png"
  }]
}
;
},{}]},{},[5])