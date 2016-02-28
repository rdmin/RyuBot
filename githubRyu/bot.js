console.log ("Bot is starting");

var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

var params = {
    q: '#sfv ? why',
    count: 5,
   
}

setInterval(meat, 1000*20)

function meat(){
T.get('search/tweets', params, gotData);
}

function gotData(err, data, response) {
    var tweets = data.statuses;
    for (var i = 0; i < tweets.length; i++) {
    var name = tweets[i].user.screen_name;
    var nameID = tweets[i].id_str;
    if((tweets[i].text !== undefined) && (tweets[i].retweeted_status == undefined))
        {
            
            var newtweet = ' @' + name + ' The answer lies in the heart of battle.';
            tweetIt(newtweet, name, nameID);
        }
    
    
    }
    
//    var stream = T.stream('user');
//
//    var text = eventMsg.text;
//    var from = eventMsg.user.screen_name;
//    
  
}


function tweetIt(txt, name, nameID) {
    
T.post('statuses/update', {in_reply_to_status_id: nameID, status: txt}, tweeted); 
    

    
    function tweeted(err, data, response){
        
        if (err) {
           
        }
        else {
            console.log("Posted to "+name+"! It worked!");
        }
    }
}