exports = module.exports;
const request = require('request');

exports.showScaleGif = function(sender, token) {
    let messageData = {
        "attachment":{
      "type":"image",
      "payload":{
        "url":"https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/gifs/scaleskeyboard.gif?raw=true"
         }
        },
    "quick_replies":[
      {
        "content_type":"text",
        "title":"scale conversion",
        "payload":"scale conversion"
      },
      {
        "content_type":"text",
        "title":"chord",
        "payload":"chord"
      },
      {
        "content_type":"text",
        "title":"interval",
        "payload":"interval"
      },
      {
        "content_type":"text",
        "title":"view web app",
        "payload":"view web app"
      },
      {
        "content_type":"text",
        "title":"back",
        "payload":"back"
      }
    ]
    }
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
            recipient: {id:sender},
            message: messageData,
        },  
    })
}

exports.showScalesConversionGif = function(sender, token) {
    let messageData = {
        "attachment":{
      "type":"image",
      "payload":{
        "url":"https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/gifs/musicgaryoldman.gif?raw=true"
         }
        },
    "quick_replies":[
      {
        "content_type":"text",
        "title":"scale",
        "payload":"scale"
      },
      {
        "content_type":"text",
        "title":"chord",
        "payload":"chord"
      },
      {
        "content_type":"text",
        "title":"interval",
        "payload":"interval"
      },
      {
        "content_type":"text",
        "title":"view web app",
        "payload":"view web app"
      },
      {
        "content_type":"text",
        "title":"back",
        "payload":"back"
      }
    ]
    }
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
            recipient: {id:sender},
            message: messageData,
        }, 
    }) 
}

exports.showChordGif = function(sender, token) {
    let messageData = {
        "attachment":{
      "type":"image",
      "payload":{
        "url":"https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/gifs/chordbeatles.gif?raw=true"
         }
        },
    "quick_replies":[
      {
        "content_type":"text",
        "title":"scale",
        "payload":"scale"
      },
      {
        "content_type":"text",
        "title":"scale conversion",
        "payload":"scale conversion"
      },
      {
        "content_type":"text",
        "title":"interval",
        "payload":"interval"
      },
      {
        "content_type":"text",
        "title":"view web app",
        "payload":"view web app"
      },
      {
        "content_type":"text",
        "title":"back",
        "payload":"back"
      }
    ]
    }
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
            recipient: {id:sender},
            message: messageData,
        },
    })
}

exports.showIntervalGif = function(sender, token) {
    let messageData = {
        "attachment":{
      "type":"image",
      "payload":{
        "url":"https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/gifs/pianomonkey.gif?raw=true"
         }
        },
    "quick_replies":[
      {
        "content_type":"text",
        "title":"scale",
        "payload":"scale"
      },
      {
        "content_type":"text",
        "title":"scale conversion",
        "payload":"scale conversion"
      },
      {
        "content_type":"text",
        "title":"chord",
        "payload":"chord"
      },
      {
        "content_type":"text",
        "title":"view web app",
        "payload":"view web app"
      },
      {
        "content_type":"text",
        "title":"back",
        "payload":"back"
      }
    ]
    }
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
            recipient: {id:sender},
            message: messageData,
        }, 
    })
}

exports.showSadGif = function(sender, token) {
    let messageData = { 
        "attachment":{
      "type":"image",
      "payload":{
        "url":"https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/gifs/music-sad.gif?raw=true"
         }
        } 
    }
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
            recipient: {id:sender},
            message: messageData,
        },
        
    }) 
}

exports.showFailGif = function(sender, token) {
    let messageData = {
        "attachment":{
      "type":"image",
      "payload":{
        "url":"https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/gifs/fail.gif?raw=true"
         }
        },
    "quick_replies":[
      {
        "content_type":"text",
        "title":"embarrassing",
        "payload":"embarrassing"
      },
      {
        "content_type":"text",
        "title":"funny",
        "payload":"funny"
      },
      {
        "content_type":"text",
        "title":"sad",
        "payload":"sad"
      },
      {
        "content_type":"text",
        "title":"back",
        "payload":"back"
      }
    ]
    }
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
            recipient: {id:sender},
            message: messageData,
        },
    })
}

exports.showFunnyGif = function(sender, token) {
    let messageData = {
    "attachment":{
      "type":"image",
      "payload":{
        "url":"https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/gifs/funny.gif?raw=true"
         }
        },
    "quick_replies":[
      {
        "content_type":"text",
        "title":"embarrassing",
        "payload":"embarrassing"
      },
      {
        "content_type":"text",
        "title":"funny",
        "payload":"funny"
      },
      {
        "content_type":"text",
        "title":"sad",
        "payload":"sad"
      },
      {
        "content_type":"text",
        "title":"back",
        "payload":"back"
      }
    ]
    }
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
            recipient: {id:sender},
            message: messageData,
        },
    })
}

exports.showSadStoryGif = function(sender, token) {
    let messageData = {
    "attachment":{
      "type":"image",
      "payload":{
        "url":"https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/gifs/lonely.gif?raw=true"
         }
        },
    "quick_replies":[
      {
        "content_type":"text",
        "title":"embarrassing",
        "payload":"embarrassing"
      },
      {
        "content_type":"text",
        "title":"funny",
        "payload":"funny"
      },
      {
        "content_type":"text",
        "title":"sad",
        "payload":"sad"
      },
      {
        "content_type":"text",
        "title":"back",
        "payload":"back"
      }
    ]
    }
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
            recipient: {id:sender},
            message: messageData,
        },
    }) 
}