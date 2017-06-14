// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
    cube = require('bespoke-theme-cube'),
    keys = require('bespoke-keys'),
    touch = require('bespoke-touch'),
    bullets = require('bespoke-bullets'),
    backdrop = require('bespoke-backdrop'),
    scale = require('bespoke-scale'),
    hash = require('bespoke-hash'),
    progress = require('bespoke-progress'),
    forms = require('bespoke-forms');

// Bespoke.js
bespoke.from('article', [
    cube(),
    keys(),
    touch(),
    bullets('li, .bullet'),
    backdrop(),
    scale(),
    hash(),
    progress(),
    forms()
]);

// Prism syntax highlighting
// This is actually loaded from "bower_components" thanks to
// debowerify: https://github.com/eugeneware/debowerify
require('prism');

var ans = [];

function getRadioValue(theRadioName) {
    var radio = document.getElementsByName(theRadioName);
    console.log(radio);
    for (var i = 0; i < radio.length; i++) {
        radio[i].onclick = function() {
            if (radio[i].checked) {
                return radio[i].value;
            }
        }
    }
}
ans[0] = getRadioValue("qa-1");
console.log(ans);