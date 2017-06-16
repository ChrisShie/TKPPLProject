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
            } else if (hasil === '112311' || hasil === '112312' || hasil === '112321' || hasil === '112331' || hasil === '113311' || hasil === '113331') {
                document.getElementById("rcmd").innerHTML = "You better just stay at home/your workplace and take some candies, any flavored.";
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
                document.getElementById("rcmd").innerHTML = "You can have some spicy snacks at your house/workplace.";
            } else if (hasil === '151121' || hasil === '151221' || hasil === '152122' || hasil === '153121' || hasil === '153131' || hasil === '153231' || hasil === '153321' || hasil === '153331') {
                document.getElementById("rcmd").innerHTML = "You can go to buy spicy snacks at the grocery store near your house/workplace.";
            } else if (hasil === '151122' || hasil === '151222' || hasil === '151332' || hasil === '152123' || hasil === '152222' || hasil === '152322' || hasil === '152332' || hasil === '153122' || hasil === '153222' || hasil === '153232') {
                document.getElementById("rcmd").innerHTML = "You can go to buy spicy potato/cassava chip at the minimart near your house/workplace.";
            } else if (hasil === '151123' || hasil === '151223' || hasil === '152223' || hasil === '152323' || hasil === '153332') {
                document.getElementById("rcmd").innerHTML = "You can go to the nearest restaurant to have snacks with spicy seasonings.";
            } else if (hasil === '151131' || hasil === '151221' || hasil === '151231' || hasil === '151331') {
                document.getElementById("rcmd").innerHTML = "You can go to buy spicy snacks at the grocery store near your house/workplace.";
            } else if (hasil === '151132' || hasil === '151133' || hasil === '151232' || hasil === '151233') {
                document.getElementById("rcmd").innerHTML = "You can go to have snacks with spicy seasonings at a restaurant.";
            } else if (hasil === '151213' || hasil === '151333' || hasil === '152113' || hasil === '152213' || hasil === '152313' || hasil === '153113' || hasil === '153213' || hasil === '153312' || hasil === '153313') {
                document.getElementById("rcmd").innerHTML = "You can ask for spicy snacks delivery,how about french fries or mushrooms?";
            } else if (hasil === '152111' || hasil === '152112' || hasil === '152121' || hasil === '152211' || hasil === '152212' || hasil === '152221' || hasil === '153111' || hasil === '153112' || hasil === '153211' || hasil === '153212' || hasil === '153221') {
                document.getElementById("rcmd").innerHTML = "You can cook home-made fries with sauce topping or just eat spicy snacks you have.";
            } else if (hasil === '152311' || hasil === '152312' || hasil === '152321' || hasil === '152331' || hasil === '153311') {
                document.getElementById("rcmd").innerHTML = "You can cook home-made fries with sauce topping or just eat spicy snacks you have.";
            } else if (hasil === '152333' || hasil === '153233' || hasil === '153322' || hasil === '153323' || hasil === '153333') {
                document.getElementById("rcmd").innerHTML = "You can go to the nearest restaurant/cafe to buy a take away spicy fries.";
            } else if (hasil === '153123' || hasil === '153132' || hasil === '153133' || hasil === '153223') {
                document.getElementById("rcmd").innerHTML = "You can go to have spicy snacks at a cafe/restaurant.";
            } else if (hasil === '211111' || hasil === '211112' || hasil === '211113' || hasil === '211211' || hasil === '211212') {
                document.getElementById("rcmd").innerHTML = "Have some bread, cake or maybe soya milk will be good.";
            } else if (hasil === '211121' || hasil === '211221' || hasil === '212122' || hasil === '213121' || hasil === '213131' || hasil === '213231' || hasil === '213331') {
                document.getElementById("rcmd").innerHTML = "You can go to buy some bread/soya milk from minimart near your house/workplace.";
            } else if (hasil === '211122' || hasil === '211222' || hasil === '211332' || hasil === '212123' || hasil === '212222' || hasil === '212322' || hasil === '212332' || hasil === '213122' || hasil === '213222' || hasil === '213232') {
                document.getElementById("rcmd").innerHTML = "You can go to buy some kaya/chocolate bread , and soya milk from minimart near your house/workplace.";
            } else if (hasil === '211123' || hasil === '211223' || hasil === '212223' || hasil === '212323' || hasil === '213321' || hasil === '213332') {
                document.getElementById("rcmd").innerHTML = "You can go to buy some sweet juice/bread from minimart near your house/workplace.";
            } else if (hasil === '211131' || hasil === '211221' || hasil === '211231' || hasil === '211331') {
                document.getElementById("rcmd").innerHTML = "You better stay at home/your workplace and have some bread, cake or maybe sweet tea.";
            } else if (hasil === '211132' || hasil === '211133' || hasil === '211232' || hasil === '211233') {
                document.getElementById("rcmd").innerHTML = "You can go to eat waffle  with/without drinks at a cafe/restaurant, how about oreo waffle?";
            } else if (hasil === '211213' || hasil === '211333' || hasil === '212113' || hasil === '212213' || hasil === '212313' || hasil === '213113' || hasil === '213213' || hasil === '213312' || hasil === '213313') {
                document.getElementById("rcmd").innerHTML = "You can ask for cake delivery and maybe juice for drinks?";
            } else if (hasil === '212111' || hasil === '212112' || hasil === '212121' || hasil === '212211' || hasil === '212212' || hasil === '212221' || hasil === '213111' || hasil === '213112' || hasil === '213211' || hasil === '213212' || hasil === '213221') {
                document.getElementById("rcmd").innerHTML = "Eat some bread from your house/workplace, chocolate flavored will be good.";
            } else if (hasil === '212311' || hasil === '212312' || hasil === '212321' || hasil === '212331' || hasil === '213331' || hasil === '213311') {
                document.getElementById("rcmd").innerHTML = "You better just stay at home/your workplace and have some bread.";
            } else if (hasil === '212333' || hasil === '213233' || hasil === '213322' || hasil === '213323' || hasil === '213333') {
                document.getElementById("rcmd").innerHTML = "You can go to the nearest cafe/restaurant to buy a take away waffle or cake.";
            } else if (hasil === '213123' || hasil === '213132' || hasil === '213133' || hasil === '213223') {
                document.getElementById("rcmd").innerHTML = "You can go to eat dessert with/without drinks at a cafe/restaurant, how about cheese cake and smoothies?";
            } else if (hasil === '221111' || hasil === '221112' || hasil === '221113' || hasil === '221211' || hasil === '221212') {
                document.getElementById("rcmd").innerHTML = "You can cook some tomato soup or sour vegetable soup (sayur asem) on your own.";
            } else if (hasil === '221121' || hasil === '221221' || hasil === '222122' || hasil === '223121' || hasil === '223131' || hasil === '223231' || hasil === '223331') {
                document.getElementById("rcmd").innerHTML = "You can cook some tomato soup or sour vegetable soup (sayur asem) on your own.";
            } else if (hasil === '221122' || hasil === '221222' || hasil === '221332' || hasil === '222123' || hasil === '222222' || hasil === '222322' || hasil === '222332' || hasil === '223122' || hasil === '223222' || hasil === '223232') {
                document.getElementById("rcmd").innerHTML = "You can go to eat sour vegetable soup/sweet and sour tofu rice at a restaurant nearby.";
            } else if (hasil === '221123' || hasil === '221223' || hasil === '222223' || hasil === '222323' || hasil === '223321' || hasil === '223332') {
                document.getElementById("rcmd").innerHTML = "You can go to eat some sour soup for example tom yum at a restaurant.";
            } else if (hasil === '221131' || hasil === '221221' || hasil === '221231' || hasil === '221331') {
                document.getElementById("rcmd").innerHTML = "You can cook some tomato soup or sour vegetable soup (sayur asem) on your own.";
            } else if (hasil === '221132' || hasil === '221133' || hasil === '221232' || hasil === '221233') {
                document.getElementById("rcmd").innerHTML = "You can go to eat sour vegetable soup at a restaurant and then how about sweet and sour tofu rice?";
            } else if (hasil === '221213' || hasil === '221333' || hasil === '222113' || hasil === '222213' || hasil === '222313' || hasil === '223113' || hasil === '223213' || hasil === '223312' || hasil === '223313') {
                document.getElementById("rcmd").innerHTML = "You can ask for sour vegetable soup/sweet and sour tofu rice delivery?";
            } else if (hasil === '222111' || hasil === '222112' || hasil === '222121' || hasil === '222211' || hasil === '222212' || hasil === '222221' || hasil === '223111' || hasil === '223112' || hasil === '223211' || hasil === '223212' || hasil === '223221') {
                document.getElementById("rcmd").innerHTML = "You can cook spicy instant noodles or maybe spicy and sour fried egg.";
            } else if (hasil === '222311' || hasil === '222312' || hasil === '222321' || hasil === '222331' || hasil === '223311' || hasil === '223331') {
                document.getElementById("rcmd").innerHTML = "You can cook spicy instant noodles or maybe spicy and sour fried egg.";
            } else if (hasil === '222333' || hasil === '223233' || hasil === '223322' || hasil === '223323' || hasil === '223333') {
                document.getElementById("rcmd").innerHTML = "You can go to the nearest cafe/restaurant to buy a take away spicy and sour fish rice/spicy ramen.";
            } else if (hasil === '223123' || hasil === '223132' || hasil === '223133' || hasil === '223223') {
                document.getElementById("rcmd").innerHTML = "You can go to eat spicy and sour chicken rice/spicy ramen with/without drinks at a cafe/restaurant.";
            } else if (hasil === '231111' || hasil === '231112' || hasil === '231113' || hasil === '231211' || hasil === '231212') {
                document.getElementById("rcmd").innerHTML = "You can cook some vegetable soup/stir fry with rice,how about potato and carrot soup?";
            } else if (hasil === '231121' || hasil === '231221' || hasil === '232122' || hasil === '233121' || hasil === '233131' || hasil === '233231' || hasil === '233331') {
                document.getElementById("rcmd").innerHTML = "You can cook some vegetable soup/stir fry with rice,how about potato and carrot soup?";
            } else if (hasil === '231122' || hasil === '231222' || hasil === '231332' || hasil === '232123' || hasil === '232222' || hasil === '232322' || hasil === '232332' || hasil === '233122' || hasil === '233222' || hasil === '233232') {
                document.getElementById("rcmd").innerHTML = "You can go to eat vegetable soup/stir fry with rice at a restaurant nearby.";
            } else if (hasil === '231123' || hasil === '231223' || hasil === '232223' || hasil === '232323' || hasil === '233321' || hasil === '233332') {
                document.getElementById("rcmd").innerHTML = "You can go to eat vegetable soup/stir fry with rice at a restaurant nearby.";
            } else if (hasil === '231131' || hasil === '231221' || hasil === '231231' || hasil === '231331') {
                document.getElementById("rcmd").innerHTML = "You better just stay at home/your workplace and cook vegetable soup,  or maybe stir fry with rice.";
            } else if (hasil === '231132' || hasil === '231133' || hasil === '231232' || hasil === '231233') {
                document.getElementById("rcmd").innerHTML = "You can go to eat vegetable soup for example spinach and corn soup/stir fry with rice at a restaurant.";
            } else if (hasil === '231213' || hasil === '231333' || hasil === '232113' || hasil === '232213' || hasil === '232313' || hasil === '233113' || hasil === '233213' || hasil === '233312' || hasil === '233313') {
                document.getElementById("rcmd").innerHTML = "You can ask for vegetable soup/stir fry with rice delivery or maybe spinach and corn soup ?";
            } else if (hasil === '232111' || hasil === '232112' || hasil === '232121' || hasil === '232211' || hasil === '232212' || hasil === '232221' || hasil === '233111' || hasil === '233112' || hasil === '233211' || hasil === '233212' || hasil === '233221') {
                document.getElementById("rcmd").innerHTML = "You can cook some vegetable soup/stir fry with rice,how about spinach and corn soup?";
            } else if (hasil === '232311' || hasil === '232312' || hasil === '232321' || hasil === '232331' || hasil === '233311' || hasil === '233331') {
                document.getElementById("rcmd").innerHTML = "You can cook some vegetable soup/stir fry with rice,how about spinach and corn soup?";
            } else if (hasil === '232333' || hasil === '233233' || hasil === '233322' || hasil === '233323' || hasil === '233333') {
                document.getElementById("rcmd").innerHTML = "You can go to the nearest restaurant to buy a take away vegetable soup/stir fry with rice.";
            } else if (hasil === '233123' || hasil === '233132' || hasil === '233133' || hasil === '233223') {
                document.getElementById("rcmd").innerHTML = "You can go to eat vegetable soup/stir fry with rice at a cafe/restaurant, how about chicken soup and green tea?";
            } else if (hasil === '241111' || hasil === '241112' || hasil === '241113' || hasil === '241211' || hasil === '241212') {
                document.getElementById("rcmd").innerHTML = "You can cook some fried rice with scrambled eggs.";
            } else if (hasil === '241121' || hasil === '241221' || hasil === '242122' || hasil === '243121' || hasil === '243131' || hasil === '243231' || hasil === '243331') {
                document.getElementById("rcmd").innerHTML = "You can cook some fried rice with scrambled eggs.";
            } else if (hasil === '241122' || hasil === '241222' || hasil === '241332' || hasil === '242123' || hasil === '242222' || hasil === '242322' || hasil === '242332' || hasil === '243122' || hasil === '243222' || hasil === '243232') {
                document.getElementById("rcmd").innerHTML = "You can go to eat butter fried rice or teri fried rice at a restaurant nearby.";
            } else if (hasil === '241123' || hasil === '241223' || hasil === '242223' || hasil === '242323' || hasil === '243321' || hasil === '243332') {
                document.getElementById("rcmd").innerHTML = "You can go to eat teriyaki rice/butter coated tempura at a restaurant nearby.";
            } else if (hasil === '241131' || hasil === '241221' || hasil === '241231' || hasil === '241331') {
                document.getElementById("rcmd").innerHTML = "You can cook some fried rice with scrambled eggs";
            } else if (hasil === '241132' || hasil === '241133' || hasil === '241232' || hasil === '241233') {
                document.getElementById("rcmd").innerHTML = "You can go to eat chicken teriyaki rice/teri fried rice at a restaurant.";
            } else if (hasil === '241213' || hasil === '241333' || hasil === '242113' || hasil === '242213' || hasil === '242313' || hasil === '243113' || hasil === '243213' || hasil === '243312' || hasil === '243313') {
                document.getElementById("rcmd").innerHTML = "You can ask for chicken teriyaki rice/butter fried rice delivery.";
            } else if (hasil === '242111' || hasil === '242112' || hasil === '242121' || hasil === '242211' || hasil === '242212' || hasil === '242221' || hasil === '243111' || hasil === '243112' || hasil === '243211' || hasil === '243212' || hasil === '243221') {
                document.getElementById("rcmd").innerHTML = "You can cook some fried rice with scrambled eggs.";
            } else if (hasil === '242311' || hasil === '242312' || hasil === '242321' || hasil === '242331' || hasil === '243311' || hasil === '243331') {
                document.getElementById("rcmd").innerHTML = "You can cook some fried rice with scrambled eggs/omelet rice.";
            } else if (hasil === '242333' || hasil === '243233' || hasil === '243322' || hasil === '243323' || hasil === '243333') {
                document.getElementById("rcmd").innerHTML = "You can go to the nearest restaurant to buy a take away butter fried rice/chicken teriyaki rice.";
            } else if (hasil === '243123' || hasil === '243132' || hasil === '243133' || hasil === '243223') {
                document.getElementById("rcmd").innerHTML = "You can go to eat fish and chip/chicken steak  at a cafe/restaurant.";
            } else if (hasil === '251111' || hasil === '251112' || hasil === '251113' || hasil === '251211' || hasil === '251212') {
                document.getElementById("rcmd").innerHTML = "You can cook some spicy instant noodles or maybe spicy fried rice.";
            } else if (hasil === '251121' || hasil === '251221' || hasil === '252122' || hasil === '253121' || hasil === '253131' || hasil === '253231' || hasil === '253331') {
                document.getElementById("rcmd").innerHTML = "You can go to buy aceh fried noodles/padang rice from food stalls nearby.";
            } else if (hasil === '251122' || hasil === '251222' || hasil === '251332' || hasil === '252123' || hasil === '252222' || hasil === '252322' || hasil === '252332' || hasil === '253122' || hasil === '253222' || hasil === '253232') {
                document.getElementById("rcmd").innerHTML = "You can go to eat aceh fried noodles/tofu hot plate at a restaurant.";
            } else if (hasil === '251123' || hasil === '251223' || hasil === '252223' || hasil === '252323' || hasil === '253321' || hasil === '253332') {
                document.getElementById("rcmd").innerHTML = "You can go to buy aceh fried noodles/padang rice from food stalls nearby.";
            } else if (hasil === '251131' || hasil === '251221' || hasil === '251231' || hasil === '251331') {
                document.getElementById("rcmd").innerHTML = "You can cook spicy instant noodles or maybe spicy fried rice.";
            } else if (hasil === '251132' || hasil === '251133' || hasil === '251232' || hasil === '251233') {
                document.getElementById("rcmd").innerHTML = "You can go to eat tofu hot plate/aceh fried noodles at a restaurant or spicy tofu soup?";
            } else if (hasil === '251213' || hasil === '251333' || hasil === '252113' || hasil === '252213' || hasil === '252313' || hasil === '253113' || hasil === '253213' || hasil === '253312' || hasil === '253313') {
                document.getElementById("rcmd").innerHTML = "You can ask for tofu hot plate/aceh fried noodles delivery.";
            } else if (hasil === '252111' || hasil === '252112' || hasil === '252121' || hasil === '252211' || hasil === '252212' || hasil === '252221' || hasil === '253111' || hasil === '253112' || hasil === '253211' || hasil === '253212' || hasil === '253221') {
                document.getElementById("rcmd").innerHTML = "You can cook some spicy instant noodles or maybe spicy fried rice.";
            } else if (hasil === '252311' || hasil === '252312' || hasil === '252321' || hasil === '252331' || hasil === '253311' || hasil === '253331') {
                document.getElementById("rcmd").innerHTML = "You can cook some spicy instant noodles or maybe spicy fried rice.";
            } else if (hasil === '252333' || hasil === '253233' || hasil === '253322' || hasil === '253323' || hasil === '253333') {
                document.getElementById("rcmd").innerHTML = "You can go to the nearest restaurant to buy a take away spicy chicken rice/spicy fried noodles.";
            } else if (hasil === '253123' || hasil === '253132' || hasil === '253133' || hasil === '253223') {
                document.getElementById("rcmd").innerHTML = "You can go to eat spicy squid kwetiao hotplate/spicy ramen  at a restaurant, or maybe blackpepper chicken steak ?";
            } else if (hasil === '311111' || hasil === '311112' || hasil === '311113' || hasil === '311211' || hasil === '311212') {
                document.getElementById("rcmd").innerHTML = "You can cook sweet green bean porridge,it's cheap and not difficult to cook.";
            } else if (hasil === '311121' || hasil === '311221' || hasil === '312122' || hasil === '313121' || hasil === '313321' || hasil === '313131' || hasil === '313231' || hasil === '313331') {
                document.getElementById("rcmd").innerHTML = "You can go to buy sweet green bean porridge/kolak from the restaurants nearby.";
            } else if (hasil === '311122' || hasil === '311222' || hasil === '311332' || hasil === '312123' || hasil === '312222' || hasil === '312322' || hasil === '312332' || hasil === '313122' || hasil === '313222' || hasil === '313232') {
                document.getElementById("rcmd").innerHTML = "You can go to have black bean noodles/pansit noodles at a restaurant.";
            } else if (hasil === '311123' || hasil === '311223' || hasil === '312223' || hasil === '312323' || hasil === '313332') {
                document.getElementById("rcmd").innerHTML = "You can go to have black bean noodles/pansit noodles at a restaurant.";
            } else if (hasil === '311131' || hasil === '311221' || hasil === '311231' || hasil === '311331') {
                document.getElementById("rcmd").innerHTML = "You better cook your own green bean porridge/pancake/waffle.";
            } else if (hasil === '311132' || hasil === '311133' || hasil === '311232' || hasil === '311233') {
                document.getElementById("rcmd").innerHTML = "You can go to have black bean noodles/pansit noodles/rice with soy sauce chicken at a restaurant.";
            } else if (hasil === '311213' || hasil === '311333' || hasil === '312113' || hasil === '312213' || hasil === '312313' || hasil === '313113' || hasil === '313213' || hasil === '313312' || hasil === '313313') {
                document.getElementById("rcmd").innerHTML = "You can ask for black bean noodles delivery?";
            } else if (hasil === '312111' || hasil === '312112' || hasil === '312121' || hasil === '312211' || hasil === '312212' || hasil === '312221' || hasil === '313111' || hasil === '313112' || hasil === '313211' || hasil === '313212' || hasil === '313221') {
                document.getElementById("rcmd").innerHTML = "You can cook your own sweet green bean porridge/porridge with carrot and potato.";
            } else if (hasil === '312311' || hasil === '312312' || hasil === '312321' || hasil === '312331' || hasil === '313311') {
                document.getElementById("rcmd").innerHTML = "You can cook your own sweet green bean porridge/porridge with carrot and potato.";
            } else if (hasil === '312333' || hasil === '313233' || hasil === '313322' || hasil === '313323' || hasil === '313333') {
                document.getElementById("rcmd").innerHTML = "You can go to the nearest restaurant to buy a take away black bean noodles/rice with soy sauce chicken.";
            } else if (hasil === '313123' || hasil === '313132' || hasil === '313133' || hasil === '313223') {
                document.getElementById("rcmd").innerHTML = "You can go to have black bean noodles/pansit noodles at a restaurant";
            } else if (hasil === '321111' || hasil === '321112' || hasil === '321113' || hasil === '321211' || hasil === '321212') {
                document.getElementById("rcmd").innerHTML = "It's better not to eat sour food when you are really hungry.";
            } else if (hasil === '321121' || hasil === '321221' || hasil === '322122' || hasil === '323121' || hasil === '323131' || hasil === '323231' || hasil === '323331') {
                document.getElementById("rcmd").innerHTML = "It's better not to eat sour food when you are really hungry.";
            } else if (hasil === '321122' || hasil === '321222' || hasil === '321332' || hasil === '322123' || hasil === '322222' || hasil === '322322' || hasil === '322332' || hasil === '323122' || hasil === '323222' || hasil === '323232') {
                document.getElementById("rcmd").innerHTML = "It's better not to eat sour food when you are really hungry.";
            } else if (hasil === '321123' || hasil === '321223' || hasil === '322223' || hasil === '322323' || hasil === '323321' || hasil === '323332') {
                document.getElementById("rcmd").innerHTML = "It's better not to eat sour food when you are really hungry.";
            } else if (hasil === '321131' || hasil === '321221' || hasil === '321231' || hasil === '321331') {
                document.getElementById("rcmd").innerHTML = "It's better not to eat sour food when you are really hungry.";
            } else if (hasil === '321132' || hasil === '321133' || hasil === '321232' || hasil === '321233') {
                document.getElementById("rcmd").innerHTML = "It's better not to eat sour food when you are really hungry.";
            } else if (hasil === '321213' || hasil === '321333' || hasil === '322113' || hasil === '322213' || hasil === '322313' || hasil === '323113' || hasil === '323213' || hasil === '323312' || hasil === '323313') {
                document.getElementById("rcmd").innerHTML = "It's better not to eat sour food when you are really hungry.";
            } else if (hasil === '322111' || hasil === '322112' || hasil === '322121' || hasil === '322211' || hasil === '322212' || hasil === '322221' || hasil === '323111' || hasil === '323112' || hasil === '323211' || hasil === '323212' || hasil === '323221') {
                document.getElementById("rcmd").innerHTML = "It's better not to eat sour food when you are really hungry.";
            } else if (hasil === '322311' || hasil === '322312' || hasil === '322321' || hasil === '322331' || hasil === '323311') {
                document.getElementById("rcmd").innerHTML = "It's better not to eat sour food when you are really hungry.";
            } else if (hasil === '322333' || hasil === '323233' || hasil === '323322' || hasil === '323323' || hasil === '323333') {
                document.getElementById("rcmd").innerHTML = "It's better not to eat sour food when you are really hungry.";
            } else if (hasil === '323123' || hasil === '323132' || hasil === '323133' || hasil === '323223') {
                document.getElementById("rcmd").innerHTML = "It's better not to eat sour food when you are really hungry.";
            } else if (hasil === '331111' || hasil === '331112' || hasil === '331113' || hasil === '331211' || hasil === '331212') {
                document.getElementById("rcmd").innerHTML = "You can cook porridge with vegetables/vegetable soup with rice.";
            } else if (hasil === '331121' || hasil === '331221' || hasil === '332122' || hasil === '333121' || hasil === '333131' || hasil === '333231' || hasil === '333331') {
                document.getElementById("rcmd").innerHTML = "You can cook porridge with vegetables/vegetable soup with rice.";
            } else if (hasil === '331122' || hasil === '331222' || hasil === '331332' || hasil === '332123' || hasil === '332222' || hasil === '332322' || hasil === '332332' || hasil === '333122' || hasil === '333222' || hasil === '333232') {
                document.getElementById("rcmd").innerHTML = "You can go to have some porridge/vegetable soup+rice at the nearby restaurant.";
            } else if (hasil === '331123' || hasil === '331223' || hasil === '332223' || hasil === '332323' || hasil === '333321' || hasil === '333332') {
                document.getElementById("rcmd").innerHTML = "You can go to have some porridge/vegetable soup+rice/steamed fish at a restaurant.";
            } else if (hasil === '331131' || hasil === '331221' || hasil === '331231' || hasil === '331331') {
                document.getElementById("rcmd").innerHTML = "You can go to buy the ingredients to cook porridge/vegetable soup.";
            } else if (hasil === '331132' || hasil === '331133' || hasil === '331232' || hasil === '331233') {
                document.getElementById("rcmd").innerHTML = "You can go to have steamed dimsum + vegetable salad/soup/porridge/steamed fish at a restaurant";
            } else if (hasil === '331213' || hasil === '331333' || hasil === '332113' || hasil === '332213' || hasil === '332313' || hasil === '333113' || hasil === '333213' || hasil === '333312' || hasil === '333313') {
                document.getElementById("rcmd").innerHTML = "You can ask for porridge/vegetable soup delivery";
            } else if (hasil === '332111' || hasil === '332112' || hasil === '332121' || hasil === '332211' || hasil === '332212' || hasil === '332221' || hasil === '333111' || hasil === '333112' || hasil === '333211' || hasil === '333212' || hasil === '333221') {
                document.getElementById("rcmd").innerHTML = "You can go to buy the ingredients to cook porridge/vegetable soup.";
            } else if (hasil === '332311' || hasil === '332312' || hasil === '332321' || hasil === '332331' || hasil === '333311') {
                document.getElementById("rcmd").innerHTML = "You can go to buy the ingredients to cook porridge/vegetable soup.";
            } else if (hasil === '332333' || hasil === '333233' || hasil === '333322' || hasil === '333323' || hasil === '333333') {
                document.getElementById("rcmd").innerHTML = "You can go to the nearest restaurant to buy a take away porridge/vegetable soup.";
            } else if (hasil === '333123' || hasil === '333132' || hasil === '333133' || hasil === '333223') {
                document.getElementById("rcmd").innerHTML = "You can go to have steamed dimsum + vegetable salad/soup/porridge/steamed fish at a restaurant.";
            } else if (hasil === '341111' || hasil === '341112' || hasil === '341113' || hasil === '341211' || hasil === '341212') {
                document.getElementById("rcmd").innerHTML = "You can make some french fries/butter fried rice on your own.";
            } else if (hasil === '341121' || hasil === '341221' || hasil === '342122' || hasil === '343121' || hasil === '343131' || hasil === '343231' || hasil === '343331') {
                document.getElementById("rcmd").innerHTML = "You can make some french fries/butter fried rice on your own.";
            } else if (hasil === '341122' || hasil === '341222' || hasil === '341332' || hasil === '342123' || hasil === '342222' || hasil === '342322' || hasil === '342332' || hasil === '343122' || hasil === '343222' || hasil === '343232') {
                document.getElementById("rcmd").innerHTML = "You can go to buy butter fried rice/ayam penyet/fried noodles from the restaurant nearby.";
            } else if (hasil === '341123' || hasil === '341223' || hasil === '342223' || hasil === '342323' || hasil === '343321' || hasil === '343332') {
                document.getElementById("rcmd").innerHTML = "You can go to the nearest restaurant to have teri fried rice/ayam penyet/butter coated tempura/etc.";
            } else if (hasil === '341131' || hasil === '341221' || hasil === '341231' || hasil === '341331') {
                document.getElementById("rcmd").innerHTML = "You can make some french fries/fried rice on your own.";
            } else if (hasil === '341132' || hasil === '341133' || hasil === '341232' || hasil === '341233') {
                document.getElementById("rcmd").innerHTML = "You can go to the nearest restaurant to have teri fried rice/ayam penyet/butter coated tempura/etc.";
            } else if (hasil === '341213' || hasil === '341333' || hasil === '342113' || hasil === '342213' || hasil === '342313' || hasil === '343113' || hasil === '343213' || hasil === '343312' || hasil === '343313') {
                document.getElementById("rcmd").innerHTML = "You can ask for french fries/butter fried rice/etc delivery";
            } else if (hasil === '342111' || hasil === '342112' || hasil === '342121' || hasil === '342211' || hasil === '342212' || hasil === '342221' || hasil === '343111' || hasil === '343112' || hasil === '343211' || hasil === '343212' || hasil === '343221') {
                document.getElementById("rcmd").innerHTML = "You can go to the nearest restaurant to have teri fried rice/ayam penyet/butter coated tempura/etc.";
            } else if (hasil === '342311' || hasil === '342312' || hasil === '342321' || hasil === '342331' || hasil === '343311') {
                document.getElementById("rcmd").innerHTML = "You can make some french fries/butter fried rice on your own.";
            } else if (hasil === '342333' || hasil === '343233' || hasil === '343322' || hasil === '343323' || hasil === '343333') {
                document.getElementById("rcmd").innerHTML = "You can go to the nearest restaurant/cafe to buy a take away butter fried rice/other fried stuffs.";
            } else if (hasil === '343123' || hasil === '343132' || hasil === '343133' || hasil === '343223') {
                document.getElementById("rcmd").innerHTML = "You can go to the nearest restaurant to have teri fried rice/ayam penyet/butter coated tempura/etc.";
            } else if (hasil === '351111' || hasil === '351112' || hasil === '351113' || hasil === '351211' || hasil === '351212') {
                document.getElementById("rcmd").innerHTML = "Don't eat spicy foods when you are really hungry. It's bad for health.";
            } else if (hasil === '351121' || hasil === '351221' || hasil === '352122' || hasil === '353121' || hasil === '353131' || hasil === '353231' || hasil === '353321' || hasil === '353331') {
                document.getElementById("rcmd").innerHTML = "Don't eat spicy foods when you are really hungry. It's bad for health.";
            } else if (hasil === '351122' || hasil === '351222' || hasil === '351332' || hasil === '352123' || hasil === '352222' || hasil === '352322' || hasil === '352332' || hasil === '353122' || hasil === '353222' || hasil === '353232') {
                document.getElementById("rcmd").innerHTML = "Don't eat spicy foods when you are really hungry. It's bad for health.";
            } else if (hasil === '351123' || hasil === '351223' || hasil === '352223' || hasil === '352323' || hasil === '353332') {
                document.getElementById("rcmd").innerHTML = "Don't eat spicy foods when you are really hungry. It's bad for health.";
            } else if (hasil === '351131' || hasil === '351221' || hasil === '351231' || hasil === '351331') {
                document.getElementById("rcmd").innerHTML = "Don't eat spicy foods when you are really hungry. It's bad for health.";
            } else if (hasil === '351132' || hasil === '351133' || hasil === '351232' || hasil === '351233') {
                document.getElementById("rcmd").innerHTML = "Don't eat spicy foods when you are really hungry. It's bad for health.";
            } else if (hasil === '351213' || hasil === '351333' || hasil === '352113' || hasil === '352213' || hasil === '352313' || hasil === '353113' || hasil === '353213' || hasil === '353312' || hasil === '353313') {
                document.getElementById("rcmd").innerHTML = "Don't eat spicy foods when you are really hungry. It's bad for health.";
            } else if (hasil === '352111' || hasil === '352112' || hasil === '352121' || hasil === '352211' || hasil === '352212' || hasil === '352221' || hasil === '353111' || hasil === '353112' || hasil === '353211' || hasil === '353212' || hasil === '353221') {
                document.getElementById("rcmd").innerHTML = "Don't eat spicy foods when you are really hungry. It's bad for health.";
            } else if (hasil === '352311' || hasil === '352312' || hasil === '352321' || hasil === '352331' || hasil === '353311') {
                document.getElementById("rcmd").innerHTML = "Don't eat spicy foods when you are really hungry. It's bad for health.";
            } else if (hasil === '352333' || hasil === '353233' || hasil === '353322' || hasil === '353323' || hasil === '353333') {
                document.getElementById("rcmd").innerHTML = "Don't eat spicy foods when you are really hungry. It's bad for health.";
            } else if (hasil === '353123' || hasil === '353132' || hasil === '353133' || hasil === '353223') {
                document.getElementById("rcmd").innerHTML = "Don't eat spicy foods when you are really hungry. It's bad for health.";
            } else {
                document.getElementById("rcmd").innerHTML = "We have no idea what to recommend you, sorry";
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