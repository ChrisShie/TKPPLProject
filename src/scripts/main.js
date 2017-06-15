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
var ans = [];
var tmp = "";
var hasil = "";

function getRadioValue(radioName, ind) {
    var radio = document.getElementsByName(radioName);
    for (var i = 0; i < radio.length; i++) {
        radio[i].onclick = function() {
            ans[ind] = this.value;
            tmp = "";
            for (var j = 0; j < ans.length; j++) {
                tmp += ans[j];
            }
            hasil = tmp;
            console.log(hasil);
            if (hasil === '111111' || hasil === '111112' || hasil === '111113' || hasil === '111211' || hasil === '111212') {
                document.getElementById("rcmd").innerHTML = "Take some candies from your house/workplace, the chocolate or maybe fruity flavored will be good.";
            } else if (hasil === '111121' || hasil === '111221' || hasil === '112122' || hasil === '113121' || hasil === '113131' || hasil === '113231' || hasil === '113331') {
                document.getElementById("rcmd").innerHTML = "You can go to buy some candies/biscuits from grocery store/minimart near your house/workplace.";
            } else if (hasil === '111122' || hasil === '111222' || hasil === '111332' || hasil === '112123' || hasil === '112222' || hasil === '112322' || hasil === '112332' || hasil === '113122' || hasil === '113222' || hasil === '113232') {
                document.getElementById("rcmd").innerHTML = "You can go to buy some bread/soft drinks from grocery store/minimart near your house/workplace.";
            } else if (hasil === '111123' || hasil === '111223' || hasil === '112223' || hasil === '112323' || hasil === '113321' || hasil === '113332') {
                document.getElementById("rcmd").innerHTML = "You can go to buy some soft drinks/chocolate bars from grocery store/minimart near your house/workplace.";
            } else if (hasil === '111131' || hasil === '111221' || hasil === '111231' || hasil === '111331') {
                document.getElementById("rcmd").innerHTML = "You better just stay at home/your workplace and take some candies,the chocolate or maybe fruity flavored ones.";
            } else if (hasil === '111132' || hasil === '111133' || hasil === '111232' || hasil === '111233') {
                document.getElementById("rcmd").innerHTML = "You can go to eat toast with/without drinks at a cafe/restaurant, how about kaya/chocolate toast?";
            } else if (hasil === '111213' || hasil === '111333' || hasil === '112113' || hasil === '112213' || hasil === '112313' || hasil === '113113' || hasil === '113213' || hasil === '113312' || hasil === '113313') {
                document.getElementById("rcmd").innerHTML = "You can ask for bread delivery and maybe coffee for drinks?";
            } else if (hasil === '112111' || hasil === '112112' || hasil === '112121' || hasil === '112211' || hasil === '112212' || hasil === '112221' || hasil === '113111' || hasil === '113112' || hasil === '113211' || hasil === '113212' || hasil === '113221') {
                document.getElementById("rcmd").innerHTML = "Take some candies from your house/workplace, any flavored will be good.";
            } else if (hasil === '112311' || hasil === '112312' || hasil === '112321' || hasil === '112331' || hasil === '113311') {
                document.getElementById("rcmd").innerHTML = "You better just stay at home/your workplace and take some candies,any flavored.";
            } else if (hasil === '112333' || hasil === '113233' || hasil === '113322' || hasil === '113323' || hasil === '113333') {
                document.getElementById("rcmd").innerHTML = "You can go to the nearest cafe/restaurant to buy a take away coffee or cake.";
            } else if (hasil === '113123' || hasil === '113132' || hasil === '113133' || hasil === '113223') {
                document.getElementById("rcmd").innerHTML = "You can go to eat toast with/without drinks at a cafe/restaurant, how about french toast?";
            } else if (hasil === '121111' || hasil === '121112' || hasil === '121113' || hasil === '121211' || hasil === '121212') {
                document.getElementById("rcmd").innerHTML = "Eat some semboy/candied fruits such as candied mango from your house/workplace.";
            } else if (hasil === '121121' || hasil === '121221' || hasil === '122122' || hasil === '123121' || hasil === '123131' || hasil === '123231' || hasil === '123331') {
                document.getElementById("rcmd").innerHTML = "You can go to buy some semboy/candied fruits from minimart/stall near your house/workplace.";
            } else if (hasil === '121122' || hasil === '121222' || hasil === '121332' || hasil === '122123' || hasil === '122222' || hasil === '122322' || hasil === '122332' || hasil === '123122' || hasil === '123222' || hasil === '123232') {
                document.getElementById("rcmd").innerHTML = "You can go to buy candied fruits/lemon tea from the stall near your house/workplace.";
            } else if (hasil === '121123' || hasil === '121223' || hasil === '122223' || hasil === '122323' || hasil === '123321' || hasil === '123332') {
                document.getElementById("rcmd").innerHTML = "You can go to buy yogurt from minimart near your house/workplace.";
            } else if (hasil === '121131' || hasil === '121221' || hasil === '121231' || hasil === '121331') {
                document.getElementById("rcmd").innerHTML = "You better eat semboy/sour fruits you have at home/workplace.";
            } else if (hasil === '121132' || hasil === '121133' || hasil === '121232' || hasil === '121233') {
                document.getElementById("rcmd").innerHTML = "You can go to have dessert like lemon cake or drinks like lemon tea at a cafe/restaurant.";
            } else if (hasil === '121213' || hasil === '121333' || hasil === '122113' || hasil === '122213' || hasil === '122313' || hasil === '123113' || hasil === '123213' || hasil === '123312' || hasil === '123313') {
                document.getElementById("rcmd").innerHTML = "You can ask for lemon tea/fruit flavored yogurt/lemon cake delivery";
            } else if (hasil === '122111' || hasil === '122112' || hasil === '122121' || hasil === '122211' || hasil === '122212' || hasil === '122221' || hasil === '123111' || hasil === '123112' || hasil === '123211' || hasil === '123212' || hasil === '123221') {
                document.getElementById("rcmd").innerHTML = "Eat some semboy/candied fruits/sour candies from your house/workplace.";
            } else if (hasil === '122311' || hasil === '122312' || hasil === '122321' || hasil === '122331' || hasil === '123311') {
                document.getElementById("rcmd").innerHTML = "You better stay at home/your workplace and have some semboy/sour fruits.";
            } else if (hasil === '122333' || hasil === '123233' || hasil === '123322' || hasil === '123323' || hasil === '123333') {
                document.getElementById("rcmd").innerHTML = "You can go to the nearest cafe to buy a take away lemon tea/fruit flavored yogurt.";
            } else if (hasil === '123123' || hasil === '123132' || hasil === '123133' || hasil === '123223') {
                document.getElementById("rcmd").innerHTML = "You can go to have lemon pie or just lemon tea at a cafe/restaurant.";
            } else if (hasil === '131111' || hasil === '131112' || hasil === '131113' || hasil === '131211' || hasil === '131212') {
                document.getElementById("rcmd").innerHTML = "You can cook instant porridge/oat at your house/workplace.";
            } else if (hasil === '131121' || hasil === '131221' || hasil === '132122' || hasil === '133121' || hasil === '133131' || hasil === '133231' || hasil === '133331') {
                document.getElementById("rcmd").innerHTML = "You can go to buy ingredients to cook porridge/vegetable soup.";
            } else if (hasil === '131122' || hasil === '131222' || hasil === '131332' || hasil === '132123' || hasil === '132222' || hasil === '132322' || hasil === '132332' || hasil === '133122' || hasil === '133222' || hasil === '133232') {
                document.getElementById("rcmd").innerHTML = "You can go to have some porridge/vegetable soup from restaurant near your house/workplace.";
            } else if (hasil === '131123' || hasil === '131223' || hasil === '132223' || hasil === '132323' || hasil === '133321' || hasil === '133332') {
                document.getElementById("rcmd").innerHTML = "You can go to the nearest restaurant to have porridge/vegetable soup/salad.";
            } else if (hasil === '131131' || hasil === '131221' || hasil === '131231' || hasil === '131331') {
                document.getElementById("rcmd").innerHTML = "You can go to buy the ingredients to cook porridge/vegetable soup or just buy the instant one.";
            } else if (hasil === '131132' || hasil === '131133' || hasil === '131232' || hasil === '131233') {
                document.getElementById("rcmd").innerHTML = "You can go to have dimsum like dumpling or vegetable salad/soup at a restaurant";
            } else if (hasil === '131213' || hasil === '131333' || hasil === '132113' || hasil === '132213' || hasil === '132313' || hasil === '133113' || hasil === '133213' || hasil === '133312' || hasil === '133313') {
                document.getElementById("rcmd").innerHTML = "You can ask for porridge/vegetable soup delivery";
            } else if (hasil === '132111' || hasil === '132112' || hasil === '132121' || hasil === '132211' || hasil === '132212' || hasil === '132221' || hasil === '133111' || hasil === '133112' || hasil === '133211' || hasil === '133212' || hasil === '133221') {
                document.getElementById("rcmd").innerHTML = "Cook porridge/oat at your house";
            } else if (hasil === '132311' || hasil === '132312' || hasil === '132321' || hasil === '132331' || hasil === '133311') {
                document.getElementById("rcmd").innerHTML = "Just stay at home/your workplace and eat instant porridge/oat.";
            } else if (hasil === '132333' || hasil === '133233' || hasil === '133322' || hasil === '133323' || hasil === '133333') {
                document.getElementById("rcmd").innerHTML = "You can go to the nearest restaurant to buy a take away porridge/vegetable soup.";
            } else if (hasil === '133123' || hasil === '133132' || hasil === '133133' || hasil === '133223') {
                document.getElementById("rcmd").innerHTML = "You can go to have vegetable soup/salad/dumpling/porridge at a cafe/restaurant.";
            } else if (hasil === '141111' || hasil === '141112' || hasil === '141113' || hasil === '141211' || hasil === '141212') {
                document.getElementById("rcmd").innerHTML = "You can have some snacks at your house/workplace.";
            } else if (hasil === '141121' || hasil === '141221' || hasil === '142122' || hasil === '143121' || hasil === '143131' || hasil === '143231' || hasil === '143331') {
                document.getElementById("rcmd").innerHTML = "You can go to buy snacks at the grocery store/minimart near your house/workplace.";
            } else if (hasil === '141122' || hasil === '141222' || hasil === '141332' || hasil === '142123' || hasil === '142222' || hasil === '142322' || hasil === '142332' || hasil === '143122' || hasil === '143222' || hasil === '143232') {
                document.getElementById("rcmd").innerHTML = "You can go to buy potato/cassava chip at the grocery store/minimart near your house/workplace.";
            } else if (hasil === '141123' || hasil === '141223' || hasil === '142223' || hasil === '142323' || hasil === '143321' || hasil === '143332') {
                document.getElementById("rcmd").innerHTML = "You can go to the nearest restaurant to have frenchfries/fried cassava/other snacks.";
            } else if (hasil === '141131' || hasil === '141221' || hasil === '141231' || hasil === '141331') {
                document.getElementById("rcmd").innerHTML = "You can go to buy snacks at the grocery store near your house/workplace.";
            } else if (hasil === '141132' || hasil === '141133' || hasil === '141232' || hasil === '141233') {
                document.getElementById("rcmd").innerHTML = "You can go to have some fried snacks at a restaurant";
            } else if (hasil === '141213' || hasil === '141333' || hasil === '142113' || hasil === '142213' || hasil === '142313' || hasil === '143113' || hasil === '143213' || hasil === '143312' || hasil === '143313') {
                document.getElementById("rcmd").innerHTML = "You can ask for french fries delivery";
            } else if (hasil === '142111' || hasil === '142112' || hasil === '142121' || hasil === '142211' || hasil === '142212' || hasil === '142221' || hasil === '143111' || hasil === '143112' || hasil === '143211' || hasil === '143212' || hasil === '143221') {
                document.getElementById("rcmd").innerHTML = "You can cook french fries yourself or just eat snacks you have";
            } else if (hasil === '142311' || hasil === '142312' || hasil === '142321' || hasil === '142331' || hasil === '143311') {
                document.getElementById("rcmd").innerHTML = "You can cook home-made fries or just eat snacks you have.";
            } else if (hasil === '142333' || hasil === '143233' || hasil === '143322' || hasil === '143323' || hasil === '143333') {
                document.getElementById("rcmd").innerHTML = "You can go to the nearest restaurant/cafe to buy a take away fries.";
            } else if (hasil === '143123' || hasil === '143132' || hasil === '143133' || hasil === '143223') {
                document.getElementById("rcmd").innerHTML = "You can go to have fried snacks at a cafe/restaurant.";
            } else if (hasil === '151111' || hasil === '151112' || hasil === '151113' || hasil === '151211' || hasil === '151212') {
                document.getElementById("rcmd").innerHTML = "You can have some snacks at your house/workplace.";
            } else if (hasil === '151121' || hasil === '151221' || hasil === '152122' || hasil === '153121' || hasil === '153131' || hasil === '153231' || hasil === '153331') {
                document.getElementById("rcmd").innerHTML = "You can go to buy snacks at the grocery store/minimart near your house/workplace.";
            } else if (hasil === '151122' || hasil === '151222' || hasil === '151332' || hasil === '152123' || hasil === '152222' || hasil === '152322' || hasil === '152332' || hasil === '153122' || hasil === '153222' || hasil === '153232') {
                document.getElementById("rcmd").innerHTML = "You can go to buy potato/cassava chip at the grocery store/minimart near your house/workplace.";
            } else if (hasil === '151123' || hasil === '151223' || hasil === '152223' || hasil === '152323' || hasil === '153321' || hasil === '153332') {
                document.getElementById("rcmd").innerHTML = "You can go to the nearest restaurant to have frenchfries/fried cassava/other snacks.";
            } else if (hasil === '151131' || hasil === '151221' || hasil === '151231' || hasil === '151331') {
                document.getElementById("rcmd").innerHTML = "You can go to buy snacks at the grocery store near your house/workplace.";
            } else if (hasil === '151132' || hasil === '151133' || hasil === '151232' || hasil === '151233') {
                document.getElementById("rcmd").innerHTML = "You can go to have some fried snacks at a restaurant";
            } else if (hasil === '151213' || hasil === '151333' || hasil === '152113' || hasil === '152213' || hasil === '152313' || hasil === '153113' || hasil === '153213' || hasil === '153312' || hasil === '153313') {
                document.getElementById("rcmd").innerHTML = "You can ask for french fries delivery";
            } else if (hasil === '152111' || hasil === '152112' || hasil === '152121' || hasil === '152211' || hasil === '152212' || hasil === '152221' || hasil === '153111' || hasil === '153112' || hasil === '153211' || hasil === '153212' || hasil === '153221') {
                document.getElementById("rcmd").innerHTML = "You can cook french fries yourself or just eat snacks you have";
            } else if (hasil === '152311' || hasil === '152312' || hasil === '152321' || hasil === '152331' || hasil === '153311') {
                document.getElementById("rcmd").innerHTML = "You can cook home-made fries or just eat snacks you have.";
            } else if (hasil === '152333' || hasil === '153233' || hasil === '153322' || hasil === '153323' || hasil === '153333') {
                document.getElementById("rcmd").innerHTML = "You can go to the nearest restaurant/cafe to buy a take away fries.";
            } else if (hasil === '153123' || hasil === '153132' || hasil === '153133' || hasil === '153223') {
                document.getElementById("rcmd").innerHTML = "You can go to have fried snacks at a cafe/restaurant.";
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