// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
    cube = require('bespoke-theme-cube'),
    beach = require('bespoke-theme-beachday'),
    keys = require('bespoke-keys'),
    click = require('bespoke-click'),
    touch = require('bespoke-touch'),
    bullets = require('bespoke-bullets'),
    state = require('bespoke-state'),
    backdrop = require('bespoke-backdrop'),
    scale = require('bespoke-scale'),
    hash = require('bespoke-hash'),
    progress = require('bespoke-progress'),
    forms = require('bespoke-forms');

// Bespoke.js
bespoke.from('article', [
    beach(),
    keys(),
    touch(),
    bullets('h3,li, .bullet'),
    state(),
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

// var ans = [];
// var myAns = "";
// function getRadioValue(radioName, ind) {
//     var radio = document.getElementsByName(radioName);
//     for (var i = 0; i < radio.length; i++) {
//         radio[i].onclick = function() {
//             ans[ind] = this.value;
//             console.log(ans);
//         }
//     }
// }
// myAns=ans.join("");
var ans=[];
var tmp="";
var hasil="";
function getRadioValue(radioName,ind){
    var radio = document.getElementsByName(radioName);
    for (var i = 0; i < radio.length; i++) {
        radio[i].onclick = function() {
            ans[ind] = this.value;
            tmp="";
            for(var j=0;j<ans.length;j++){
                tmp+=ans[j];
            }
            hasil=tmp;
            console.log(hasil);
            if (hasil === '111111' || hasil === '111112' || hasil === '111113' || hasil === '111211' || hasil === '111212'){
                document.getElementById("rcmd").innerHTML="Take some candies from your house/workplace, the chocolate or maybe fruity flavored will be good.";
            }
            else if (hasil === '111121'|| hasil === '111221'|| hasil === '112122'){
                document.getElementById("rcmd").innerHTML="You can go to buy some candies/biscuits from grocery store/minimart near your house/workplace.";
            }
            else if (hasil === '111122' || hasil === '111222' || hasil === '111332'|| hasil === '112123' || hasil === '112222' || hasil === '112322'){
                document.getElementById("rcmd").innerHTML="You can go to buy some bread/soft drinks from grocery store/minimart near your house/workplace.";
            }
            else if (hasil === '111123' || hasil === '111223' || hasil === '112223' || hasil === '112323'){
                document.getElementById("rcmd").innerHTML="You can go to buy some soft drinks/chocolate bars from grocery store/minimart near your house/workplace.";
            }
            else if (hasil === '111131' || hasil === '111221' || hasil === '111231' || hasil === '111331'){
                document.getElementById("rcmd").innerHTML="You better just stay at home/your workplace and take some candies,the chocolate or maybe fruity flavored ones.";
            }
            else if (hasil === '111132' || hasil === '111133' || hasil === '111232' || hasil === '111233'){
                document.getElementById("rcmd").innerHTML="You can go to eat toast with/without drinks at a cafe/restaurant, how about kaya/chocolate toast?";
            }
            else if (hasil === '111213' || hasil === '111333' || hasil === '112113' || hasil === '112213' || hasil === '112313'){
                document.getElementById("rcmd").innerHTML="You can ask for bread or soft drinks delivery.";
            }
            else if (hasil === '112111' || hasil === '112112' || hasil === '112121' || hasil === '112211' || hasil === '112212'|| hasil === '112221'){
                document.getElementById("rcmd").innerHTML="Take some candies from your house/workplace, any flavored will be good.";
            }
            else if (hasil === '112311' || hasil === '112312' || hasil === '112321' || hasil === '112331'){
                document.getElementById("rcmd").innerHTML="You better just stay at home/your workplace and take some candies,any flavored.";
            }
            else if (hasil === '112331'){
                document.getElementById("rcmd").innerHTML="You better just stay at home/your workplace and take some candies,any flavored.";
            }
        }
    }
}
getRadioValue("qa-1", 0);
getRadioValue("qa-2", 1);
getRadioValue("qa-3", 2);
getRadioValue("qa-4", 3);
getRadioValue("qa-5", 4);
getRadioValue("qa-6", 5);

    
