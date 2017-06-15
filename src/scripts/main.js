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
                document.getElementById("rcmd").innerHTML = "You better just stay at home/your workplace and take some candies, any flavored.";
            } else if (hasil === '112333' || hasil === '113233' || hasil === '113322' || hasil === '113323' || hasil === '113333') {
                document.getElementById("rcmd").innerHTML = "You can go to the nearest cafe/restaurant to buy a take away coffee or cake.";
            } else if (hasil === '113123' || hasil === '113132' || hasil === '113133' || hasil === '113223') {
                document.getElementById("rcmd").innerHTML = "You can go to eat toast with/without drinks at a cafe/restaurant, how about french toast?";
            } else if (hasil === '113331') {
                document.getElementById("rcmd").innerHTML = "You can go to eat toast with/without drinks at a cafe/restaurant, how about french toast?";
            }
            //Hungry sweet
            else if (hasil === '211111' || hasil === '211112' || hasil === '211113' || hasil === '211211' || hasil === '211212') {
                document.getElementById("rcmd").innerHTML = "Take some bread from your house/workplace, cake or maybe soya milk will be good.";
            } else if (hasil === '211121' || hasil === '211221' || hasil === '212122' || hasil === '213121' || hasil === '213131' || hasil === '213231' || hasil === '213331') {
                document.getElementById("rcmd").innerHTML = "You can go to buy some bread/soya milk from grocery store/minimart near your house/workplace.";
            } else if (hasil === '211122' || hasil === '211222' || hasil === '211332' || hasil === '212123' || hasil === '212222' || hasil === '212322' || hasil === '212332' || hasil === '213122' || hasil === '213222' || hasil === '213232') {
                document.getElementById("rcmd").innerHTML = "You can go to buy some kaya/chocolate bread , how about soya milk from grocery store/minimart near your house/workplace.";
            } else if (hasil === '211123' || hasil === '211223' || hasil === '212223' || hasil === '212323' || hasil === '213321' || hasil === '213332') {
                document.getElementById("rcmd").innerHTML = "You can go to buy some sweet juice/bread from grocery store/minimart near your house/workplace.";
            } else if (hasil === '211131' || hasil === '211221' || hasil === '211231' || hasil === '211331') {
                document.getElementById("rcmd").innerHTML = "You better just stay at home/your workplace and take some bread, cake or maybe sweet tea.";
            } else if (hasil === '211132' || hasil === '211133' || hasil === '211232' || hasil === '211233') {
                document.getElementById("rcmd").innerHTML = "You can go to eat waffle  with/without drinks at a cafe/restaurant, how about oreo waffle?";
            } else if (hasil === '211213' || hasil === '211333' || hasil === '212113' || hasil === '212213' || hasil === '212313' || hasil === '213113' || hasil === '213213' || hasil === '213312' || hasil === '213313') {
                document.getElementById("rcmd").innerHTML = "You can ask for cake delivery and maybe juice for drinks?";
            } else if (hasil === '212111' || hasil === '212112' || hasil === '212121' || hasil === '212211' || hasil === '212212' || hasil === '212221' || hasil === '213111' || hasil === '213112' || hasil === '213211' || hasil === '213212' || hasil === '213221') {
                document.getElementById("rcmd").innerHTML = "Take some bread from your house/workplace, chocolate flavored will be good.";
            } else if (hasil === '212311' || hasil === '212312' || hasil === '212321' || hasil === '212331' || hasil === '213311') {
                document.getElementById("rcmd").innerHTML = "You better just stay at home/your workplace and take some bread.";
            } else if (hasil === '212333' || hasil === '213233' || hasil === '213322' || hasil === '213323' || hasil === '213333') {
                document.getElementById("rcmd").innerHTML = "You can go to the nearest cafe/restaurant to buy a take away waffle or cake.";
            } else if (hasil === '213123' || hasil === '213132' || hasil === '213133' || hasil === '213223') {
                document.getElementById("rcmd").innerHTML = "You can go to eat desert with/without drinks at a cafe/restaurant, how about cheese cake and smoothies?";
            } else if (hasil === '213331') {
                document.getElementById("rcmd").innerHTML = "You can go to eat desert with/without drinks at a cafe/restaurant, how about cheese cake and smoothies?";
            }
            //Hungry sour
            else if (hasil === '221111' || hasil === '221112' || hasil === '221113' || hasil === '221211' || hasil === '221212') {
                document.getElementById("rcmd").innerHTML = "Take some sour soup from your house/workplace, sour vegetable soup will be good.";
            } else if (hasil === '221121' || hasil === '221221' || hasil === '222122' || hasil === '223121' || hasil === '223131' || hasil === '223231' || hasil === '223331') {
                document.getElementById("rcmd").innerHTML = "You can go to buy sour soup/sweet and sour tofu rice from grocery store/minimart near your house/workplace.";
            } else if (hasil === '221122' || hasil === '221222' || hasil === '221332' || hasil === '222123' || hasil === '222222' || hasil === '222322' || hasil === '222332' || hasil === '223122' || hasil === '223222' || hasil === '223232') {
                document.getElementById("rcmd").innerHTML = "You can go to buy sour vegetable soup/sweet and sour tofu rice from grocery store/minimart near your house/workplace.";
            } else if (hasil === '221123' || hasil === '221223' || hasil === '222223' || hasil === '222323' || hasil === '223321' || hasil === '223332') {
                document.getElementById("rcmd").innerHTML = "You can go to buy some sour soup/tom yum soup from grocery store/minimart near your house/workplace.";
            } else if (hasil === '221131' || hasil === '221221' || hasil === '221231' || hasil === '221331') {
                document.getElementById("rcmd").innerHTML = "You better just stay at home/your workplace and take some sour soup,  or maybe sweet and sour tofu rice.";
            } else if (hasil === '221132' || hasil === '221133' || hasil === '221232' || hasil === '221233') {
                document.getElementById("rcmd").innerHTML = "You can go to eat sour vegetable soup at a restaurant, how about sweet and sour tofu rice?";
            } else if (hasil === '221213' || hasil === '221333' || hasil === '222113' || hasil === '222213' || hasil === '222313' || hasil === '223113' || hasil === '223213' || hasil === '223312' || hasil === '223313') {
                document.getElementById("rcmd").innerHTML = "You can ask for sour vegetable soup delivery or maybe sweet and sour tofu rice ?";
            } else if (hasil === '222111' || hasil === '222112' || hasil === '222121' || hasil === '222211' || hasil === '222212' || hasil === '222221' || hasil === '223111' || hasil === '223112' || hasil === '223211' || hasil === '223212' || hasil === '223221') {
                document.getElementById("rcmd").innerHTML = "Take some spicy and sour fish rice from your house/workplace, or maybe spicy and sour fried egg.";
            } else if (hasil === '222311' || hasil === '222312' || hasil === '222321' || hasil === '222331' || hasil === '223311') {
                document.getElementById("rcmd").innerHTML = "You better just stay at home/your workplace and take some spicy and sour fried egg.";
            } else if (hasil === '222333' || hasil === '223233' || hasil === '223322' || hasil === '223323' || hasil === '223333') {
                document.getElementById("rcmd").innerHTML = "You can go to the nearest cafe/restaurant to buy a take awayspicy and sour fish rice or orange juice.";
            } else if (hasil === '223123' || hasil === '223132' || hasil === '223133' || hasil === '223223') {
                document.getElementById("rcmd").innerHTML = "You can go to eat spicy and sour chicken rice with/without drinks at a cafe/restaurant, how about spicy and sour shrimp rice and green apple juice?";
            } else if (hasil === '223331') {
                document.getElementById("rcmd").innerHTML = "You can go to eat spicy and sour chicken rice with/without drinks at a cafe/restaurant, how about spicy and sour fish rice and  mango juice?";
            }

             //Hungry plain
            else if (hasil === '231111' || hasil === '231112' || hasil === '231113' || hasil === '231211' || hasil === '231212') {
                document.getElementById("rcmd").innerHTML = "Take some vegetable soup/stir fry with rice from your house/workplace, potato and carrot soup will be good.";
            } else if (hasil === '231121' || hasil === '231221' || hasil === '232122' || hasil === '233121' || hasil === '233131' || hasil === '233231' || hasil === '233331') {
                document.getElementById("rcmd").innerHTML = "You can go to buy vegetable soup/stir with ricefry from grocery store/minimart near your house/workplace.";
            } else if (hasil === '231122' || hasil === '231222' || hasil === '231332' || hasil === '232123' || hasil === '232222' || hasil === '232322' || hasil === '232332' || hasil === '233122' || hasil === '233222' || hasil === '233232') {
                document.getElementById("rcmd").innerHTML = "You can go to buy vegetable soup/stir fry with rice from grocery store/minimart near your house/workplace.";
            } else if (hasil === '231123' || hasil === '231223' || hasil === '232223' || hasil === '232323' || hasil === '233321' || hasil === '233332') {
                document.getElementById("rcmd").innerHTML = "You can go to buy vegetable soup/stir fry with rice from grocery store/minimart near your house/workplace.";
            } else if (hasil === '231131' || hasil === '231221' || hasil === '231231' || hasil === '231331') {
                document.getElementById("rcmd").innerHTML = "You better just stay at home/your workplace and take vegetable soup,  or maybe stir fry with rice.";
            } else if (hasil === '231132' || hasil === '231133' || hasil === '231232' || hasil === '231233') {
                document.getElementById("rcmd").innerHTML = "You can go to eat vegetable soup/stir fry with rice at a restaurant, how about spinach and corn soup?";
            } else if (hasil === '231213' || hasil === '231333' || hasil === '232113' || hasil === '232213' || hasil === '232313' || hasil === '233113' || hasil === '233213' || hasil === '233312' || hasil === '233313') {
                document.getElementById("rcmd").innerHTML = "You can ask for vegetable soup/stir fry with rice delivery or maybe spinach and corn soup ?";
            } else if (hasil === '232111' || hasil === '232112' || hasil === '232121' || hasil === '232211' || hasil === '232212' || hasil === '232221' || hasil === '233111' || hasil === '233112' || hasil === '233211' || hasil === '233212' || hasil === '233221') {
                document.getElementById("rcmd").innerHTML = "Take some vegetable soup/stir fry with rice from your house/workplace, or maybe chicken soup.";
            } else if (hasil === '232311' || hasil === '232312' || hasil === '232321' || hasil === '232331' || hasil === '233311') {
                document.getElementById("rcmd").innerHTML = "You better just stay at home/your workplace and take some vegetable soup/stir fry with rice.";
            } else if (hasil === '232333' || hasil === '233233' || hasil === '233322' || hasil === '233323' || hasil === '233333') {
                document.getElementById("rcmd").innerHTML = "You can go to the nearest cafe/restaurant to buy a take away vegetable soup/stir fry with rice.";
            } else if (hasil === '233123' || hasil === '233132' || hasil === '233133' || hasil === '233223') {
                document.getElementById("rcmd").innerHTML = "You can go to eat vegetable soup/stir fry with rice at a cafe/restaurant, how about chicken soup and green tea?";
            } else if (hasil === '233331') {
                document.getElementById("rcmd").innerHTML = "You can go to eat vegetable soup/stir fry with rice at a cafe/restaurant, how about chicken soup and green tea?";
            }
            
             //Hungry salty
            else if (hasil === '241111' || hasil === '241112' || hasil === '241113' || hasil === '241211' || hasil === '241212') {
                document.getElementById("rcmd").innerHTML = "Take some fried rice with egg from your house/workplace, vegetable soup will be good.";
            } else if (hasil === '241121' || hasil === '241221' || hasil === '242122' || hasil === '243121' || hasil === '243131' || hasil === '243231' || hasil === '243331') {
                document.getElementById("rcmd").innerHTML = "You can go to buy vegetable soup/stir fry with rice from grocery store/minimart near your house/workplace.";
            } else if (hasil === '241122' || hasil === '241222' || hasil === '241332' || hasil === '242123' || hasil === '242222' || hasil === '242322' || hasil === '242332' || hasil === '243122' || hasil === '243222' || hasil === '243232') {
                document.getElementById("rcmd").innerHTML = "You can go to buy vegetable soup/stir fry with rice from grocery store/minimart near your house/workplace.";
            } else if (hasil === '241123' || hasil === '241223' || hasil === '242223' || hasil === '242323' || hasil === '243321' || hasil === '243332') {
                document.getElementById("rcmd").innerHTML = "You can go to buy teriyaki rice/stir fry with rice from grocery store/minimart near your house/workplace.";
            } else if (hasil === '241131' || hasil === '241221' || hasil === '241231' || hasil === '241331') {
                document.getElementById("rcmd").innerHTML = "You better just stay at home/your workplace and take vegetable soup,  or maybe stir fry with rice.";
            } else if (hasil === '241132' || hasil === '241133' || hasil === '241232' || hasil === '241233') {
                document.getElementById("rcmd").innerHTML = "You can go to eat chicken teriyaki rice/ stir fry with rice at a restaurant, how about spinach and corn soup?";
            } else if (hasil === '241213' || hasil === '241333' || hasil === '242113' || hasil === '242213' || hasil === '242313' || hasil === '243113' || hasil === '243213' || hasil === '243312' || hasil === '243313') {
                document.getElementById("rcmd").innerHTML = "You can ask for vegetable soup/stir fry with rice delivery or maybe spinach and corn soup ?";
            } else if (hasil === '242111' || hasil === '242112' || hasil === '242121' || hasil === '242211' || hasil === '242212' || hasil === '242221' || hasil === '243111' || hasil === '243112' || hasil === '243211' || hasil === '243212' || hasil === '243221') {
                document.getElementById("rcmd").innerHTML = "Take some vegetable soup/stir fry with rice from your house/workplace, or maybe chicken soup.";
            } else if (hasil === '242311' || hasil === '242312' || hasil === '242321' || hasil === '242331' || hasil === '243311') {
                document.getElementById("rcmd").innerHTML = "You better just stay at home/your workplace and take some vegetable soup/chicken teriyaki rice.";
            } else if (hasil === '242333' || hasil === '243233' || hasil === '243322' || hasil === '243323' || hasil === '243333') {
                document.getElementById("rcmd").innerHTML = "You can go to the nearest cafe/restaurant to buy a take away vegetable soup/chicken teriyaki rice.";
            } else if (hasil === '243123' || hasil === '243132' || hasil === '243133' || hasil === '243223') {
                document.getElementById("rcmd").innerHTML = "You can go to eat fish/chicken steak  at a cafe/restaurant, or maybe fish and chip?";
            } else if (hasil === '243331') {
                document.getElementById("rcmd").innerHTML = "You can go to eat fish/chicken steak fry with rice at a cafe/restaurant, or maybe fish and chip?";
            }

             //Spicy salty
            else if (hasil === '251111' || hasil === '251112' || hasil === '251113' || hasil === '251211' || hasil === '251212') {
                document.getElementById("rcmd").innerHTML = "Take some spicy instant noodles from your house/workplace, or maybe spicy fried rice.";
            } else if (hasil === '251121' || hasil === '251221' || hasil === '252122' || hasil === '253121' || hasil === '253131' || hasil === '253231' || hasil === '253331') {
                document.getElementById("rcmd").innerHTML = "You can go to buy aceh fried noodles/padang rice from grocery store/minimart near your house/workplace.";
            } else if (hasil === '251122' || hasil === '251222' || hasil === '251332' || hasil === '252123' || hasil === '252222' || hasil === '252322' || hasil === '252332' || hasil === '253122' || hasil === '253222' || hasil === '253232') {
                document.getElementById("rcmd").innerHTML = "You can go to buy aceh fried noodles/padang rice from grocery store/minimart near your house/workplace.";
            } else if (hasil === '251123' || hasil === '251223' || hasil === '252223' || hasil === '252323' || hasil === '253321' || hasil === '253332') {
                document.getElementById("rcmd").innerHTML = "You can go to buy spicy tofu rice/aceh fried noodles from grocery store/minimart near your house/workplace.";
            } else if (hasil === '251131' || hasil === '251221' || hasil === '251231' || hasil === '251331') {
                document.getElementById("rcmd").innerHTML = "You better just stay at home/your workplace and take spicy instant noodles, or maybe spicy fried rice.";
            } else if (hasil === '251132' || hasil === '251133' || hasil === '251232' || hasil === '251233') {
                document.getElementById("rcmd").innerHTML = "You can go to eat tofu hot plate/aceh fried noodles at a restaurant, how about spicy tofu soup?";
            } else if (hasil === '251213' || hasil === '251333' || hasil === '252113' || hasil === '252213' || hasil === '252313' || hasil === '253113' || hasil === '253213' || hasil === '253312' || hasil === '253313') {
                document.getElementById("rcmd").innerHTML = "You can ask for tofu hot plate/aceh fried noodles  delivery and maybe spicy tofu soup ?";
            } else if (hasil === '252111' || hasil === '252112' || hasil === '252121' || hasil === '252211' || hasil === '252212' || hasil === '252221' || hasil === '253111' || hasil === '253112' || hasil === '253211' || hasil === '253212' || hasil === '253221') {
                document.getElementById("rcmd").innerHTML = "Take some spicy fried rice from your house/workplace, or maybe spicy chicken soup.";
            } else if (hasil === '252311' || hasil === '252312' || hasil === '252321' || hasil === '252331' || hasil === '253311') {
                document.getElementById("rcmd").innerHTML = "You better just stay at home/your workplace and take some spicy fried chicken / spicy fish soup.";
            } else if (hasil === '252333' || hasil === '253233' || hasil === '253322' || hasil === '253323' || hasil === '253333') {
                document.getElementById("rcmd").innerHTML = "You can go to the nearest cafe/restaurant to buy a take away spicy chicken rice/spicy fried noodle.";
            } else if (hasil === '253123' || hasil === '253132' || hasil === '253133' || hasil === '253223') {
                document.getElementById("rcmd").innerHTML = "You can go to eat spicy squid kwetiao hotplate  at a cafe/restaurant, or maybe blackpepper chicken steak ?";
            } else if (hasil === '253331') {
                document.getElementById("rcmd").innerHTML = "You can go to eat spicy squid kwetiao hotplate fry with rice at a cafe/restaurant, or maybe blackpepper chicken steak?";
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