const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;
exports = module.exports;

exports.sendMainMenu = function(sender) {
    let messageData = {
        "attachment":{
      "type":"template",
      "payload":{
        "template_type":"button",
        "text":"What do you want to do next?",
        "buttons":[
          {
            "type":"postback",
            "title":"View Scales",
            "payload":"mainmenuscales"
          },
          {
            "type":"postback",
            "title":"Start Chatting",
            "payload":"startchatting"
          },
          {
            "type":"postback",
            "title":"View Web App",
            "payload":"webapp"
          },
        ]
      }
    }
    }
    request({
        url: 'https://graph.facebook.com/v2.8/me/messages',
        qs: {access_token:token},
        sender_action:"typing_on",
        method: 'POST',
        json: {
            recipient: {id:sender},
            message: messageData,
        }
    }) 
}
exports.mainMenuScales = function(sender) {
    let messageData = {
        "attachment":{
      "type":"template",
      "payload":{
        "template_type":"button",
        "text":"NAVIGATE through out menu system by choosing a type of scale to view below:"
        + "\n\nOr TYPE the scale name below instead! Example: type \"C# major\" or type \"Ab pentatonic minor\".",
        "buttons":[
          {
            "type":"postback",
            "title":"Major/Minor Scales",
            "payload":"scales"
            
          },
          {
            "type":"postback",
            "title":"Pentatonic Scales",
            "payload":"pentatonicscales"
          }
        ]
      }
    }
    }
    request({
        url: 'https://graph.facebook.com/v2.8/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
            recipient: {id:sender},
            message: messageData,
        }
    }) 
}

exports.chooseScale = function(sender) {
    let messageData = {
        "attachment":{
      "type":"template",
      "payload":{
        "template_type":"button",
        "text":"Pick a scale:",
        "buttons":[
          {
            "type":"postback",
            "title":"Major",
            "payload":"major"
            
          },
          {
            "type":"postback",
            "title":"Natural Minor",
            "payload":"minor"
          }
        ]
      }
    }
    }
    request({
        url: 'https://graph.facebook.com/v2.8/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
            recipient: {id:sender},
            message: messageData,
        }
    }) 
}

exports.choosePentatonicScale = function(sender) {
    let messageData = {
        "attachment":{
      "type":"template",
      "payload":{
        "template_type":"button",
        "text":"Pick a scale:",
        "buttons":[
          {
            "type":"postback",
            "title":"Pentatonic Major",
            "payload":"pentamajor"
            
          },
          {
            "type":"postback",
            "title":"Pentatonic Minor",
            "payload":"pentaminor"
          }
        ]
      }
    }
    }
    request({
        url: 'https://graph.facebook.com/v2.8/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
            recipient: {id:sender},
            message: messageData,
        }
    }) 
}

exports.chooseMajorScale = function(sender) {
    let messageData = {
        "attachment":{
      "type":"template",
      "payload":{
        "template_type":"button",
        "text":"Pick a range:",
        "buttons":[
          {
            "type":"postback",
            "title":"C to Eb",
            "payload":"range1"
            
          },
          {
            "type":"postback",
            "title":"E to G",
            "payload":"range2"
          },
          {
            "type":"postback",
            "title":"Ab to B",
            "payload":"range3"
          }
        ]
      }
    }
    }
    request({
        url: 'https://graph.facebook.com/v2.8/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
            recipient: {id:sender},
            message: messageData,
        }
    }) 
}

exports.chooseMinorScale = function(sender) {
    let messageData = {
        "attachment":{
      "type":"template",
      "payload":{
        "template_type":"button",
        "text":"Pick a range:",
        "buttons":[
          {
            "type":"postback",
            "title":"C to Eb",
            "payload":"rangeminor1"
            
          },
          {
            "type":"postback",
            "title":"E to G",
            "payload":"rangeminor2"
          },
          {
            "type":"postback",
            "title":"Ab to B",
            "payload":"rangeminor3"
          }
        ]
      }
    }
    }
    request({
        url: 'https://graph.facebook.com/v2.8/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
            recipient: {id:sender},
            message: messageData,
        }
    }) 
}

exports.choosePentatonicMajorScale = function(sender) {
    let messageData = {
        "attachment":{
      "type":"template",
      "payload":{
        "template_type":"button",
        "text":"Pick a range:",
        "buttons":[
          {
            "type":"postback",
            "title":"C to Eb",
            "payload":"rangepentatonic1"
            
          },
          {
            "type":"postback",
            "title":"E to G",
            "payload":"rangepentatonic2"
          },
          {
            "type":"postback",
            "title":"Ab to B",
            "payload":"rangepentatonic3"
          }
        ]
      }
    }
    }
    request({
        url: 'https://graph.facebook.com/v2.8/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
            recipient: {id:sender},
            message: messageData,
        }
    }) 
}

exports.choosePentatonicMinorScale = function(sender) {
    let messageData = {
        "attachment":{
      "type":"template",
      "payload":{
        "template_type":"button",
        "text":"Pick a range:",
        "buttons":[
          {
            "type":"postback",
            "title":"C to Eb",
            "payload":"rangepentatonic4"
            
          },
          {
            "type":"postback",
            "title":"E to G",
            "payload":"rangepentatonic5"
          },
          {
            "type":"postback",
            "title":"Ab to B",
            "payload":"rangepentatonic6"
          }
        ]
      }
    }
    }
    request({
        url: 'https://graph.facebook.com/v2.8/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
            recipient: {id:sender},
            message: messageData,
        }
    }) 
}

exports.webapp = function(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "Welcome to Music Mentor",
                    "subtitle": "Visit our companion web app for more interactive learning and fun!",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/MusicMentorIcon.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://musicmentorapp.herokuapp.com/",
                        "title": "View Web App"
                    }],
                }]
            }
        }
    }
    request({
        url: 'https://graph.facebook.com/v2.8/me/messages',
        qs: {access_token:PAGE_ACCESS_TOKEN},
        method: 'POST',
        json: {
          messaging_type: "RESPONSE",
            recipient: {id:sender},
            message: {"text": "stuff"},
        }
    }) 
}

exports.help = function(sender) {
    let messageData = {
    "text":"Hi, there. I'm here to help! Here's what you can do:"
    + " \n\nView music scales using our \"view scales\" menu system OR type any scale name such as \"E major\" to view it."
    + " \n\nChoose the \"start chatting\" to chat with our bot. Maybe you'll get a laugh. Maybe you'll learn something. Try it!"
    + " \n\nCheck out \"view web app\" to see what our companion web application has to offer. I promise it's quite neat!"
    + " \n\nTo start, check out our menu or just say \"hi\" to our bot! Was that helpful? I'd love your feedback! :)",
    "quick_replies":[
      {
        "content_type":"text",
        "title":"yes",
        "payload":"yes"
      },
      {
        "content_type":"text",
        "title":"no",
        "payload":"no"
      }
    ]
    }
    request({
        url: 'https://graph.facebook.com/v2.8/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
            recipient: {id:sender},
            message: messageData,
        }
    }) 
}

exports.start = function(sender) {
    let messageData = {
    "text":"Hi there music lover! Let's get started, shall we? Pick one:",
    // "quick_replies":[
    //   {
    //     "content_type":"text",
    //     "title":"view scales",
    //     "payload":"view scales"
    //   },
    //   {
    //     "content_type":"text",
    //     "title":"start chatting",
    //     "payload":"start chatting"
    //   },
    //   {
    //     "content_type":"text",
    //     "title":"view web app",
    //     "payload":"view web app"
    //   }
    // ]
    }
    request({
        url: 'https://graph.facebook.com/v2.8/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
            recipient: {id:sender},
            message: messageData,
        }
    }) 
}

exports.startChatting = function(sender) {
    let messageData = {
    "text":"Start by saying something! Here are a few things you can talk about for instance.",
    "quick_replies":[
      {
        "content_type":"text",
        "title":"music",
        "payload":"music"
      },
      {
        "content_type":"text",
        "title":"joke",
        "payload":"joke"
      },
      {
        "content_type":"text",
        "title":"story",
        "payload":"story"
      }
    ]
    }
    request({
        url: 'https://graph.facebook.com/v2.8/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
            recipient: {id:sender},
            message: messageData,
        }
    }) 
}

exports.returnToChatting = function(sender) {
    let messageData = {
    "text":"Welcome back! What would you like to talk about next?",
    "quick_replies":[
      {
        "content_type":"text",
        "title":"music",
        "payload":"music"
      },
      {
        "content_type":"text",
        "title":"joke",
        "payload":"joke"
      },
      {
        "content_type":"text",
        "title":"story",
        "payload":"story"
      }
    ]
    }
    request({
        url: 'https://graph.facebook.com/v2.8/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
            recipient: {id:sender},
            message: messageData,
        }
    }) 
}

exports.answerMusic = function(sender) {
    let messageData = {
    "text":"Let me tell you a secret, hooman. I was the teacher's \"bot\" in school. Shhh."
    + " ...Oh, it's teacher's \"pet\"? Is that what the hoomans call it?"
    + "\n\nANYWAYS, what's music you ask? Music is the presence and absence of sound over a span of time. Deep, isn't it?"
    + "\n\nLet's learn more!",
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
        "title":"interval",
        "payload":"interval"
      },
      {
        "content_type":"text",
        "title":"back",
        "payload":"back"
      }

    ]
    }
    request({
        url: 'https://graph.facebook.com/v2.8/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
            recipient: {id:sender},
            message: messageData,
        }
    }) 
}

exports.storyMenu = function(sender) {
    let messageData = {
    "text":"Yes, I love storytime. What kind of story would you like to hear?",
    "quick_replies":[
       {
        "content_type":"text",
        "title":"funny",
        "payload":"funny"
      },
      {
        "content_type":"text",
        "title":"embarrassing",
        "payload":"embarrassing"
      },
      {
        "content_type":"text",
        "title":"sad",
        "payload":"sad"
      }
    ]
    }
    request({
        url: 'https://graph.facebook.com/v2.8/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
            recipient: {id:sender},
            message: messageData,
        }
    }) 
}