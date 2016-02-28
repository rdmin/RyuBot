console.log ("Bot is starting");

var Twit = require('twit');
var moment = require('moment');

var config = require('./config');
var T = new Twit(config);
var count = 1;

var params1 = 
    {
    q: 'street',
    count: 10
    };

var params2 = 
    {
    q: 'fighter',
    count: 10
    };
setInterval(ok, 10*1000);
function ok(){
for(var i = 0; i < 2; i++){
    if(i == 0)
        {
        console.log(params1);
        }
    else if (i == 1)
        {s
            console.log(params2);
        }
    } }

function meat(){

T.get('search/tweets', params, gotData);
}

function gotData(err, data, response) {
    for(var i = 1; i < 3; i++){
        console.log(params.params+i);
    }
//    var tweets = data.statuses;
//    for (var i = 0; i < tweets.length; i++) {
//    var name = tweets[i].user.screen_name;
//    var nameID = tweets[i].id_str;
    
    }

