exports = module.exports;
const request = require('request');

exports.answerJoke = function(sender, token) {
    let messageData = {
    "text":"Oh ho ho. My street name is \"the bot with the jokes\", FYI. Check out a few of them below."
    + " I love to share and make hoomans laugh!",
    "quick_replies":[
      {
        "content_type":"text",
        "title":"joke1",
        "payload":"joke1"
      },
      {
        "content_type":"text",
        "title":"joke2",
        "payload":"joke2"
      },
      {
        "content_type":"text",
        "title":"joke3",
        "payload":"joke3"
      },
      {
        "content_type":"text",
        "title":"joke4",
        "payload":"joke4"
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
          messaging_type: "RESPONSE",
            recipient: {id:sender},
            message: messageData,
        }
    }) 
}

exports.answerJoke1 = function(sender, token) {
    let messageData = {
    "text":"What's Beethoven's favorite fruit?\nBA-NA-NA-NAAAAA!",
    "quick_replies":[
      {
        "content_type":"text",
        "title":"joke2",
        "payload":"joke2"
      },
      {
        "content_type":"text",
        "title":"joke3",
        "payload":"joke3"
      },
      {
        "content_type":"text",
        "title":"joke4",
        "payload":"joke4"
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
          messaging_type: "RESPONSE",
            recipient: {id:sender},
            message: messageData,
        }
    }) 
}

exports.answerJoke2 = function(sender, token) {
    let messageData = {
    "text":"Why was the musician arrested?\nHe was in TREBLE!",
    "quick_replies":[
      {
        "content_type":"text",
        "title":"joke1",
        "payload":"joke1"
      },
      {
        "content_type":"text",
        "title":"joke3",
        "payload":"joke3"
      },
      {
        "content_type":"text",
        "title":"joke4",
        "payload":"joke4"
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
          messaging_type: "RESPONSE",
            recipient: {id:sender},
            message: messageData,
        }
    }) 
}

exports.answerJoke3 = function(sender, token) {
    let messageData = {
    "text":"Why did Mozart kill his chickens?\nBecause they went BACH BACH BACH!",
    "quick_replies":[
      {
        "content_type":"text",
        "title":"joke1",
        "payload":"joke1"
      },
      {
        "content_type":"text",
        "title":"joke2",
        "payload":"joke2"
      },
      {
        "content_type":"text",
        "title":"joke4",
        "payload":"joke4"
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
          messaging_type: "RESPONSE",
            recipient: {id:sender},
            message: messageData,
        }
    }) 
}

exports.answerJoke4 = function(sender, token) {
    let messageData = {
    "text":"Why shouldn't you let your kids watch symphonies on the television?\nBecause there's too much VIOLINS and SAX on TV!",
    "quick_replies":[
      {
        "content_type":"text",
        "title":"joke1",
        "payload":"joke1"
      },
      {
        "content_type":"text",
        "title":"joke2",
        "payload":"joke2"
      },
      {
        "content_type":"text",
        "title":"joke3",
        "payload":"joke3"
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
          messaging_type: "RESPONSE",
            recipient: {id:sender},
            message: messageData,
        }
    }) 
}