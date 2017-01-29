'use strict'

const 
    bodyParser = require('body-parser'), 
    express = require('express'),
    request = require('request');

const app = express();

app.set('port', (process.env.PORT || 5000))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.send('This is a chatbot.')
});

app.get('/webhook/', function (req, res) {
    if (req.query['hub.verify_token'] === VALIDATION_TOKEN) {
        console.log("Validating webhook");
        res.status(200).send(req.query['hub.challenge']);
    } else {
    res.send('Failed validation, wrong token.');
    res.sendStatus(403);
  }
});

app.listen(app.get('port'), function() {
    console.log('Running on port', app.get('port'));
});

const token = process.env.FB_PAGE_ACCESS_TOKEN;
const VALIDATION_TOKEN = process.env.FB_VALIDATION_TOKEN;

function sendTextMessage(sender, text) {
    let messageData = { text:text }
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: {access_token:token},
        sender_action:"typing_on",
        method: 'POST',
        json: {
            recipient: {id:sender},
            message: messageData,
        },
        
    }, function(error, response, body) {
        if (error) {
            console.log('Error sending messages: ', error)
        } else if (response.body.error) {
            console.log('Error: ', response.body.error)
        }
    })
}

function addPersistentMenu(sender){
 request({
    url: 'https://graph.facebook.com/v2.6/me/thread_settings',
    qs: { access_token: token },
    method: 'POST',
    json:{
        recipient : {id:sender},
        setting_type : "call_to_actions",
        thread_state : "existing_thread",
        call_to_actions:[
            {
              type:"postback",
              title:"View Major/Minor Scales",
              payload:"scales"
            },
            {
              type:"postback",
              title:"View Pentatonic Scales",
              payload:"pentatonicscales"
            },
            {
              type:"postback",
              title:"Help",
              payload:"help"
            }
          ]
    }

}, function(error, response, body) {
    console.log(response)
    if (error) {
        console.log('Error sending messages: ', error)
    } else if (response.body.error) {
        console.log('Error: ', response.body.error)
    }
})

}

function sendMajorScale(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "C Major Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Major%20Scales/C%20Major.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Major%20Scales/C%20Major.png?raw=true",
                        "title": "On Keyboard"
                    }],
                }, {
                    "title": "C#/Db Major Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Major%20Scales/C%23-Db%20Major.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Major%20Scales/C%23-Db%20Major.png?raw=true",
                        "title": "On Keyboard"
                    }],
                },{
                    "title": "D Major Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Major%20Scales/D%20Major.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Major%20Scales/D%20Major.png?raw=true",
                        "title": "On Keyboard"
                    }],
                },{
                    "title": "Eb Major Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Major%20Scales/Eb%20Major.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Major%20Scales/Eb%20Major.png?raw=true",
                        "title": "On Keyboard"
                    }],
                }]
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
        }
    }, function(error, response, body) {
        if (error) {
            console.log('Error sending messages: ', error)
        } else if (response.body.error) {
            console.log('Error: ', response.body.error)
        }
    })
}

function sendMajorScale2(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "E Major Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Major%20Scales/E%20Major.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Major%20Scales/E%20Major.png?raw=true",
                        "title": "On Keyboard"
                    }],
                }, {
                    "title": "F Major Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Major%20Scales/F%20Major.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Major%20Scales/F%20Major.png?raw=true",
                        "title": "On Keyboard"
                    }],
                },{
                    "title": "F#/Gb Major Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Major%20Scales/F%23-Gb%20Major.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Major%20Scales/F%23-Gb%20Major.png?raw=true",
                        "title": "On Keyboard"
                    }],
                },{
                    "title": "G Major Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Major%20Scales/G%20Major.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Major%20Scales/G%20Major.png?raw=true",
                        "title": "On Keyboard"
                    }],
                }]
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
        }
    }, function(error, response, body) {
        if (error) {
            console.log('Error sending messages: ', error)
        } else if (response.body.error) {
            console.log('Error: ', response.body.error)
        }
    })
}

function sendMajorScale3(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "Ab Major Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Major%20Scales/Ab%20Major.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Major%20Scales/Ab%20Major.png?raw=true",
                        "title": "On Keyboard"
                    }],
                }, {
                    "title": "A Major Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Major%20Scales/A%20Major.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Major%20Scales/A%20Major.png?raw=true",
                        "title": "On Keyboard"
                    }],
                },{
                    "title": "Bb Major Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Major%20Scales/Bb%20Major.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Major%20Scales/Bb%20Major.png?raw=true",
                        "title": "On Keyboard"
                    }],
                },{
                    "title": "B Major Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Major%20Scales/B%20Major.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Major%20Scales/B%20Major.png?raw=true",
                        "title": "On Keyboard"
                    }],
                }]
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
        }
    }, function(error, response, body) {
        if (error) {
            console.log('Error sending messages: ', error)
        } else if (response.body.error) {
            console.log('Error: ', response.body.error)
        }
    })
}

function sendMinorScale(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "C Minor Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Minor%20Scales/C%20minor%20scale.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Minor%20Scales/C%20minor%20scale.png?raw=true",
                        "title": "On Keyboard"
                    }],
                }, {
                    "title": "C#/Db Minor Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Minor%20Scales/C%23-Db%20minor%20scale.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Minor%20Scales/C%23-Db%20minor%20scale.png?raw=true",
                        "title": "On Keyboard"
                    }],
                },{
                    "title": "D Minor Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Minor%20Scales/D%20minor%20scale.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Minor%20Scales/D%20minor%20scale.png?raw=true",
                        "title": "On Keyboard"
                    }],
                },{
                    "title": "Eb Minor Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Minor%20Scales/Eb%20minor%20scale.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Minor%20Scales/Eb%20minor%20scale.png?raw=true",
                        "title": "On Keyboard"
                    }],
                }]
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
        }
    }, function(error, response, body) {
        if (error) {
            console.log('Error sending messages: ', error)
        } else if (response.body.error) {
            console.log('Error: ', response.body.error)
        }
    })
}

function sendMinorScale2(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "E Minor Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Minor%20Scales/E%20minor%20scale.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Minor%20Scales/E%20minor%20scale.png?raw=true",
                        "title": "On Keyboard"
                    }],
                }, {
                    "title": "F Minor Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Minor%20Scales/F%20minor%20scale.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Minor%20Scales/F%20minor%20scale.png?raw=true",
                        "title": "On Keyboard"
                    }],
                },{
                    "title": "F#/Gb Minor Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Minor%20Scales/F%23-Gb%20minor%20scale.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Minor%20Scales/F%23-Gb%20minor%20scale.png?raw=true",
                        "title": "On Keyboard"
                    }],
                },{
                    "title": "G Minor Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Minor%20Scales/G%20minor%20scale.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Minor%20Scales/G%20minor%20scale.png?raw=true",
                        "title": "On Keyboard"
                    }],
                }]
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
        }
    }, function(error, response, body) {
        if (error) {
            console.log('Error sending messages: ', error)
        } else if (response.body.error) {
            console.log('Error: ', response.body.error)
        }
    })
}

function sendMinorScale3(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "Ab Minor Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Minor%20Scales/Ab%20minor%20scale.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Minor%20Scales/Ab%20minor%20scale.png?raw=true",
                        "title": "On Keyboard"
                    }],
                }, {
                    "title": "A Minor Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Minor%20Scales/A%20minor%20scale.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Minor%20Scales/A%20minor%20scale.png?raw=true",
                        "title": "On Keyboard"
                    }],
                },{
                    "title": "Bb Minor Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Minor%20Scales/Bb%20minor%20scale.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Minor%20Scales/Bb%20minor%20scale.png?raw=true",
                        "title": "On Keyboard"
                    }],
                },{
                    "title": "B Minor Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Minor%20Scales/B%20minor%20scale.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Minor%20Scales/B%20minor%20scale.png?raw=true",
                        "title": "On Keyboard"
                    }],
                }]
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
        }
    }, function(error, response, body) {
        if (error) {
            console.log('Error sending messages: ', error)
        } else if (response.body.error) {
            console.log('Error: ', response.body.error)
        }
    })
}

function sendPentatonicMajorScale(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "C Pentatonic Major",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Major%20Scales/C%20Major%20Pentatonic.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Major%20Scales/C%20Major%20Pentatonic.png?raw=true",
                        "title": "On Keyboard"
                    }],
                }, {
                    "title": "C#/Db Pentatonic Major",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Major%20Scales/C%23-Db%20Major%20Pentatonic.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Major%20Scales/C%23-Db%20Major%20Pentatonic.png?raw=true",
                        "title": "On Keyboard"
                    }],
                },{
                    "title": "D Pentatonic Major",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Major%20Scales/D%20Major%20Pentatonic.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Major%20Scales/D%20Major%20Pentatonic.png?raw=true",
                        "title": "On Keyboard"
                    }],
                },{
                    "title": "Eb Pentatonic Major",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Major%20Scales/Eb%20Major%20Pentatonic.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Major%20Scales/Eb%20Major%20Pentatonic.png?raw=true",
                        "title": "On Keyboard"
                    }],
                }]
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
        }
    }, function(error, response, body) {
        if (error) {
            console.log('Error sending messages: ', error)
        } else if (response.body.error) {
            console.log('Error: ', response.body.error)
        }
    })
}

function sendPentatonicMajorScale2(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "E Pentatonic Major",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Major%20Scales/E%20Major%20Pentatonic.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Major%20Scales/E%20Major%20Pentatonic.png?raw=true",
                        "title": "On Keyboard"
                    }],
                }, {
                    "title": "F Pentatonic Major",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Major%20Scales/F%20Major%20Pentatonic.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Major%20Scales/F%20Major%20Pentatonic.png?raw=true",
                        "title": "On Keyboard"
                    }],
                },{
                    "title": "F#/Gb Pentatonic Major",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Major%20Scales/F%23-Gb%20Major%20Pentatonic.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Major%20Scales/F%23-Gb%20Major%20Pentatonic.png?raw=true",
                        "title": "On Keyboard"
                    }],
                },{
                    "title": "G Pentatonic Major",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Major%20Scales/G%20Major%20Pentatonic.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Major%20Scales/G%20Major%20Pentatonic.png?raw=true",
                        "title": "On Keyboard"
                    }],
                }]
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
        }
    }, function(error, response, body) {
        if (error) {
            console.log('Error sending messages: ', error)
        } else if (response.body.error) {
            console.log('Error: ', response.body.error)
        }
    })
}

function sendPentatonicMajorScale3(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "Ab Pentatonic Major",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Major%20Scales/Ab%20Major%20Pentatonic.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Major%20Scales/Ab%20Major%20Pentatonic.png?raw=true",
                        "title": "On Keyboard"
                    }],
                }, {
                    "title": "A Pentatonic Major",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Major%20Scales/A%20Major%20Pentatonic.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "hhttps://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Major%20Scales/A%20Major%20Pentatonic.png?raw=true",
                        "title": "On Keyboard"
                    }],
                },{
                    "title": "Bb Pentatonic Major",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Major%20Scales/Bb%20Major%20Pentatonic.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Major%20Scales/Bb%20Major%20Pentatonic.png?raw=true",
                        "title": "On Keyboard"
                    }],
                },{
                    "title": "B Pentatonic Major",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Major%20Scales/B%20Major%20Pentatonic.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Major%20Scales/B%20Major%20Pentatonic.png?raw=true",
                        "title": "On Keyboard"
                    }],
                }]
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
        }
    }, function(error, response, body) {
        if (error) {
            console.log('Error sending messages: ', error)
        } else if (response.body.error) {
            console.log('Error: ', response.body.error)
        }
    })
}

function sendPentatonicMinorScale(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "C Pentatonic Minor",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Minor%20Scales/C%20Minor%20Pentatonic.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Minor%20Scales/C%20Minor%20Pentatonic.png?raw=true",
                        "title": "On Keyboard"
                    }],
                }, {
                    "title": "C#/Db Pentatonic Minor",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Minor%20Scales/C%23-Db%20Minor%20Pentatonic.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Minor%20Scales/C%23-Db%20Minor%20Pentatonic.png?raw=true",
                        "title": "On Keyboard"
                    }],
                },{
                    "title": "D Pentatonic Minor",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Minor%20Scales/D%20Minor%20Pentatonic.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Minor%20Scales/D%20Minor%20Pentatonic.png?raw=true",
                        "title": "On Keyboard"
                    }],
                },{
                    "title": "Eb Pentatonic Minor",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Minor%20Scales/Eb%20Minor%20Pentatonic.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Minor%20Scales/Eb%20Minor%20Pentatonic.png?raw=true",
                        "title": "On Keyboard"
                    }],
                }]
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
        }
    }, function(error, response, body) {
        if (error) {
            console.log('Error sending messages: ', error)
        } else if (response.body.error) {
            console.log('Error: ', response.body.error)
        }
    })
}

function sendPentatonicMinorScale2(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "E Pentatonic Minor",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Minor%20Scales/E%20Minor%20Pentatonic.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Minor%20Scales/E%20Minor%20Pentatonic.png?raw=true",
                        "title": "On Keyboard"
                    }],
                }, {
                    "title": "F Pentatonic Minor",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Minor%20Scales/F%20Minor%20Pentatonic.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Minor%20Scales/F%20Minor%20Pentatonic.png?raw=true",
                        "title": "On Keyboard"
                    }],
                },{
                    "title": "F#/Gb Pentatonic Minor",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Minor%20Scales/F%23-Gb%20Minor%20Pentatonic.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Minor%20Scales/F%23-Gb%20Minor%20Pentatonic.png?raw=true",
                        "title": "On Keyboard"
                    }],
                },{
                    "title": "G Pentatonic Minor",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Minor%20Scales/G%20Minor%20Pentatonic.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Minor%20Scales/G%20Minor%20Pentatonic.png?raw=true",
                        "title": "On Keyboard"
                    }],
                }]
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
        }
    }, function(error, response, body) {
        if (error) {
            console.log('Error sending messages: ', error)
        } else if (response.body.error) {
            console.log('Error: ', response.body.error)
        }
    })
}

function sendPentatonicMinorScale3(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "Ab Pentatonic Minor",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Minor%20Scales/Ab%20Minor%20Pentatonic.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Minor%20Scales/Ab%20Minor%20Pentatonic.png?raw=true",
                        "title": "On Keyboard"
                    }],
                }, {
                    "title": "A Pentatonic Minor",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Minor%20Scales/A%20Minor%20Pentatonic.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "hhttps://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Minor%20Scales/A%20Minor%20Pentatonic.png?raw=true",
                        "title": "On Keyboard"
                    }],
                },{
                    "title": "Bb Pentatonic Minor",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Minor%20Scales/Bb%20Minor%20Pentatonic.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Minor%20Scales/Bb%20Minor%20Pentatonic.png?raw=true",
                        "title": "On Keyboard"
                    }],
                },{
                    "title": "B Pentatonic Minor",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Minor%20Scales/B%20Minor%20Pentatonic.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Minor%20Scales/B%20Minor%20Pentatonic.png?raw=true",
                        "title": "On Keyboard"
                    }],
                }]
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
        }
    }, function(error, response, body) {
        if (error) {
            console.log('Error sending messages: ', error)
        } else if (response.body.error) {
            console.log('Error: ', response.body.error)
        }
    })
}

function sendMainMenu(sender) {
    let messageData = {
        "attachment":{
      "type":"template",
      "payload":{
        "template_type":"button",
        "text":"What do you want to do next?",
        "buttons":[
          {
            "type":"postback",
            "title":"View Major/Minor Scales",
            "payload":"scales"
            
          },
          {
            "type":"postback",
            "title":"View Pentatonic Scales",
            "payload":"pentatonicscales"
          },
          {
            "type":"postback",
            "title":"Start Chatting",
            "payload":"Start by saying something!"
          },
        ]
      }
    }
    }
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: {access_token:token},
        sender_action:"typing_on",
        method: 'POST',
        json: {
            recipient: {id:sender},
            message: messageData,
        }
    }, function(error, response, body) {
        if (error) {
            console.log('Error sending messages: ', error)
        } else if (response.body.error) {
            console.log('Error: ', response.body.error)
        }
    })
}

function chooseScale(sender) {
    let messageData = {
        "attachment":{
      "type":"template",
      "payload":{
        "template_type":"button",
        "text":"Pick a scale:",
        "buttons":[
          {
            "type":"postback",
            "title":"Major Scales",
            "payload":"major"
            
          },
          {
            "type":"postback",
            "title":"Natural Minor Scales",
            "payload":"minor"
          }
        ]
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
        }
    }, function(error, response, body) {
        if (error) {
            console.log('Error sending messages: ', error)
        } else if (response.body.error) {
            console.log('Error: ', response.body.error)
        }
    })
}

function choosePentatonicScale(sender) {
    let messageData = {
        "attachment":{
      "type":"template",
      "payload":{
        "template_type":"button",
        "text":"Pick a scale:",
        "buttons":[
          {
            "type":"postback",
            "title":"Pentatonic Major Scales",
            "payload":"pentamajor"
            
          },
          {
            "type":"postback",
            "title":"Pentatonic Minor Scales",
            "payload":"pentaminor"
          }
        ]
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
        }
    }, function(error, response, body) {
        if (error) {
            console.log('Error sending messages: ', error)
        } else if (response.body.error) {
            console.log('Error: ', response.body.error)
        }
    })
}

function chooseMajorScale(sender) {
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
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
            recipient: {id:sender},
            message: messageData,
        }
    }, function(error, response, body) {
        if (error) {
            console.log('Error sending messages: ', error)
        } else if (response.body.error) {
            console.log('Error: ', response.body.error)
        }
    })
}

function chooseMinorScale(sender) {
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
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
            recipient: {id:sender},
            message: messageData,
        }
    }, function(error, response, body) {
        if (error) {
            console.log('Error sending messages: ', error)
        } else if (response.body.error) {
            console.log('Error: ', response.body.error)
        }
    })
}

function choosePentatonicMajorScale(sender) {
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
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
            recipient: {id:sender},
            message: messageData,
        }
    }, function(error, response, body) {
        if (error) {
            console.log('Error sending messages: ', error)
        } else if (response.body.error) {
            console.log('Error: ', response.body.error)
        }
    })
}

function choosePentatonicMinorScale(sender) {
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
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
            recipient: {id:sender},
            message: messageData,
        }
    }, function(error, response, body) {
        if (error) {
            console.log('Error sending messages: ', error)
        } else if (response.body.error) {
            console.log('Error: ', response.body.error)
        }
    })
}

function help(sender) {
    let messageData = {
    "text":"I'm here to help! Here's a quick summary of what you can do: \
    1) Search our menu to view different music scales. Refer to our main menu!, 2) Chat with the bot! \
    Maybe you'll learn something! To start, choose of the options below.",
    "quick_replies":[
      {
        "content_type":"text",
        "title":"music",
        "payload":"music"
      },
      {
        "content_type":"text",
        "title":"scale",
        "payload":"scale"
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
        }
    }, function(error, response, body) {
        if (error) {
            console.log('Error sending messages: ', error)
        } else if (response.body.error) {
            console.log('Error: ', response.body.error)
        }
    })
}

app.post('/webhook/', function (req, res) {
    let messaging_events = req.body.entry[0].messaging
    for (let i = 0; i < messaging_events.length; i++) {
      let event = req.body.entry[0].messaging[i]
      let sender = event.sender.id
      if (event.message && event.message.text) {
        let text = event.message.text
        switch (text.toLowerCase()){
            case 'hi':
              sendTextMessage(sender, "Hi! Welcome to Music Mentor Bot! Check out our main menu.");
              addPersistentMenu(sender);
              sendMainMenu(sender);
              continue;

            case 'help':
              sendTextMessage(sender, "Hi, I'll be glad to help. This bot serves to help you learn musical scales. Check the menu below!");
              sendMainMenu(sender);
              continue;

            case 'music':
              sendTextMessage(sender, "Music is the presence and absence of sound over a span of time. Yeah, it gets pretty deep.");
              continue;

            case 'scale':
              sendTextMessage(sender, "Okay, a scale is a series of musical notes grouped together in an octave.");
              continue;

            default:
              sendTextMessage(sender, "I don't know what that means. Sorry.");
              continue;
        }
      sendTextMessage(sender, "Text received, echo: " + text.substring(0, 200))
      }
      if (event.postback) {
        let text = JSON.stringify(event.postback)
      switch (text.slice(12,-2).toLowerCase()){
          //payloads for sendMainMenu function
          case 'scales':
            chooseScale(sender);
            continue;

          case 'pentatonicscales':
            choosePentatonicScale(sender);
            continue;

          case 'intervals':
            sendMajorScale(sender);
            continue;
          //payloads for chooseScale function
          case 'major':
            chooseMajorScale(sender);
            continue;

          case 'minor':
            chooseMinorScale(sender);
            continue;
          //payloads for choosePentatonicScale function
          case 'pentamajor':
            choosePentatonicMajorScale(sender);
            continue;

          case 'pentaminor':
            choosePentatonicMinorScale(sender);
            continue;
          //payloads for chooseMajorScale function
          case 'range1':
            sendMajorScale(sender);
            continue;

          case 'range2':
            sendMajorScale2(sender);
            continue;

          case 'range3':
            sendMajorScale3(sender);
            continue;
          //payloads for chooseMinorScale function
          case 'rangeminor1':
            sendMinorScale(sender);
            continue;

          case 'rangeminor2':
            sendMinorScale2(sender);
            continue;

          case 'rangeminor3':
            sendMinorScale3(sender);
            continue;
          //payloads for choosePentatonicMajor function
          case 'rangepentatonic1':
            sendPentatonicMajorScale(sender);
            continue;

          case 'rangepentatonic2':
            sendPentatonicMajorScale2(sender);
            continue;

          case 'rangepentatonic3':
            sendPentatonicMajorScale3(sender);
            continue;
          //payloads for choosePentatonicMinor function
          case 'rangepentatonic4':
            sendPentatonicMinorScale(sender);
            continue;

          case 'rangepentatonic5':
            sendPentatonicMinorScale2(sender);
            continue;

          case 'rangepentatonic6':
            sendPentatonicMinorScale3(sender);
            continue;
          case 'help':
            help(sender);
            continue;
        }
      sendTextMessage(sender, text.slice(12,-2), token)
      }
    }
    res.sendStatus(200)
  })

