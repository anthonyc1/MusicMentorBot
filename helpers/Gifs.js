var gifs = {};

gifs.showScaleGif = function(sender) {
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

gifs.showScalesConversionGif = function(sender) {
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

gifs.showChordGif = function(sender) {
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

gifs.showIntervalGif = function(sender) {
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

gifs.showSadGif = function(sender) {
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

gifs.showFailGif = function(sender) {
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

gifs.showFunnyGif = function(sender) {
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

gifs.showSadStoryGif = function(sender) {
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

exports.data = gifs;