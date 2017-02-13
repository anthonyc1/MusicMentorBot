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

function getStarted(sender){
 request({
    url: 'https://graph.facebook.com/v2.6/me/thread_settings',
    qs: { access_token: token },
    method: 'POST',
    json:{
        recipient : {id:sender},
        setting_type : "call_to_actions",
        thread_state : "new_thread",
        call_to_actions:[
            {
              payload:"hi"
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
              title:"View Scales",
              payload:"mainmenuscales"
            },
            {
              type:"postback",
              title:"Start Chatting",
              payload:"startchatting"
            },
            {
              type:"postback",
              title:"View Web App",
              payload:"webapp"
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
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Major%20Scales/A%20Major%20Pentatonic.png?raw=true",
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
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Minor%20Scales/A%20Minor%20Pentatonic.png?raw=true",
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

//major scales
function sendCMajorScale(sender) {
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

function sendDbMajorScale(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "C#/Db Major Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Major%20Scales/C%23-Db%20Major.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Major%20Scales/C%23-Db%20Major.png?raw=true",
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

function sendDMajorScale(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "D Major Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Major%20Scales/D%20Major.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Major%20Scales/D%20Major.png?raw=true",
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

function sendEbMajorScale(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
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

function sendEMajorScale(sender) {
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

function sendFMajorScale(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "F Major Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Major%20Scales/F%20Major.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Major%20Scales/F%20Major.png?raw=true",
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

function sendGbMajorScale(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "F#/Gb Major Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Major%20Scales/F%23-Gb%20Major.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Major%20Scales/F%23-Gb%20Major.png?raw=true",
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

function sendGMajorScale(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
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

function sendAbMajorScale(sender) {
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

function sendAMajorScale(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "A Major Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Major%20Scales/A%20Major.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Major%20Scales/A%20Major.png?raw=true",
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

function sendBbMajorScale(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "Bb Major Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Major%20Scales/Bb%20Major.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Major%20Scales/Bb%20Major.png?raw=true",
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

function sendBMajorScale(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
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

//minor scales
function sendCMinorScale(sender) {
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

function sendDbMinorScale(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "C#/Db Minor Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Minor%20Scales/C%23-Db%20minor%20scale.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Minor%20Scales/C%23-Db%20minor%20scale.png?raw=true",
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

function sendDMinorScale(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "D Minor Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Minor%20Scales/D%20minor%20scale.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Minor%20Scales/D%20minor%20scale.png?raw=true",
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

function sendEbMinorScale(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
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

function sendEMinorScale(sender) {
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

function sendFMinorScale(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "F Minor Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Minor%20Scales/F%20minor%20scale.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Minor%20Scales/F%20minor%20scale.png?raw=true",
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

function sendGbMinorScale(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "F#/Gb Minor Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Minor%20Scales/F%23-Gb%20minor%20scale.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Minor%20Scales/F%23-Gb%20minor%20scale.png?raw=true",
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

function sendGMinorScale(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
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

function sendAbMinorScale(sender) {
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

function sendAMinorScale(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "A Minor Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Minor%20Scales/A%20minor%20scale.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Minor%20Scales/A%20minor%20scale.png?raw=true",
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

function sendBbMinorScale(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "Bb Minor Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Minor%20Scales/Bb%20minor%20scale.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Minor%20Scales/Bb%20minor%20scale.png?raw=true",
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

function sendBMinorScale(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
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

//pentatonic major scales
function sendCPentatonicMajorScale(sender) {
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

function sendDbPentatonicMajorScale(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "C#/Db Pentatonic Major",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Major%20Scales/C%23-Db%20Major%20Pentatonic.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Major%20Scales/C%23-Db%20Major%20Pentatonic.png?raw=true",
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

function sendDPentatonicMajorScale(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "D Pentatonic Major",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Major%20Scales/D%20Major%20Pentatonic.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Major%20Scales/D%20Major%20Pentatonic.png?raw=true",
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

function sendEbPentatonicMajorScale(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
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

function sendEPentatonicMajorScale(sender) {
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

function sendFPentatonicMajorScale(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "F Pentatonic Major",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Major%20Scales/F%20Major%20Pentatonic.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Major%20Scales/F%20Major%20Pentatonic.png?raw=true",
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

function sendGbPentatonicMajorScale(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "F#/Gb Pentatonic Major",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Major%20Scales/F%23-Gb%20Major%20Pentatonic.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Major%20Scales/F%23-Gb%20Major%20Pentatonic.png?raw=true",
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

function sendGPentatonicMajorScale(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
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

function sendAbPentatonicMajorScale(sender) {
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

function sendAPentatonicMajorScale(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "A Pentatonic Major",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Major%20Scales/A%20Major%20Pentatonic.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Major%20Scales/A%20Major%20Pentatonic.png?raw=true",
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

function sendBbPentatonicMajorScale(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "Bb Pentatonic Major",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Major%20Scales/Bb%20Major%20Pentatonic.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Major%20Scales/Bb%20Major%20Pentatonic.png?raw=true",
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

function sendBPentatonicMajorScale(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
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

//pentationic minor scales
function sendCPentatonicMinorScale(sender) {
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

function sendDbPentatonicMinorScale(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "C#/Db Pentatonic Minor",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Minor%20Scales/C%23-Db%20Minor%20Pentatonic.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Minor%20Scales/C%23-Db%20Minor%20Pentatonic.png?raw=true",
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

function sendDPentatonicMinorScale(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "D Pentatonic Minor",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Minor%20Scales/D%20Minor%20Pentatonic.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Minor%20Scales/D%20Minor%20Pentatonic.png?raw=true",
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

function sendEbPentatonicMinorScale(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
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

function sendEPentatonicMinorScale(sender) {
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

function sendFPentatonicMinorScale(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "F Pentatonic Minor",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Minor%20Scales/F%20Minor%20Pentatonic.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Minor%20Scales/F%20Minor%20Pentatonic.png?raw=true",
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

function sendGbPentatonicMinorScale(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "F#/Gb Pentatonic Minor",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Minor%20Scales/F%23-Gb%20Minor%20Pentatonic.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Minor%20Scales/F%23-Gb%20Minor%20Pentatonic.png?raw=true",
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

function sendGPentatonicMinorScale(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
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

function sendAbPentatonicMinorScale(sender) {
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

function sendAPentatonicMinorScale(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "A Pentatonic Minor",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Minor%20Scales/A%20Minor%20Pentatonic.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Minor%20Scales/A%20Minor%20Pentatonic.png?raw=true",
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

function sendBbPentatonicMinorScale(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "Bb Pentatonic Minor",
                    "subtitle": "View the scale below:",
                    "image_url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Minor%20Scales/Bb%20Minor%20Pentatonic.png?raw=true",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/keyboardScales/Pentatonic%20Minor%20Scales/Bb%20Minor%20Pentatonic.png?raw=true",
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

function sendBPentatonicMinorScale(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
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

function mainMenuScales(sender) {
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

function webapp(sender) {
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

function start(sender) {
    let messageData = {
    "text":"Hi there music lover! Let's get started, shall we? Pick one:",
    "quick_replies":[
      {
        "content_type":"text",
        "title":"view scales",
        "payload":"view scales"
      },
      {
        "content_type":"text",
        "title":"start chatting",
        "payload":"start chatting"
      },
      {
        "content_type":"text",
        "title":"view web app",
        "payload":"view web app"
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

function startChatting(sender) {
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

function returnToChatting(sender) {
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

function storyMenu(sender) {
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

//chat functions
function answerMusic(sender) {
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

//The joke functions
function answerJoke(sender) {
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

function answerJoke1(sender) {
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

function answerJoke2(sender) {
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

function answerJoke3(sender) {
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

function answerJoke4(sender) {
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

//gif for music functions
function showScaleGif(sender) {
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
        
    }, function(error, response, body) {
        if (error) {
            console.log('Error sending messages: ', error)
        } else if (response.body.error) {
            console.log('Error: ', response.body.error)
        }
    })
}

function showScalesConversionGif(sender) {
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
        
    }, function(error, response, body) {
        if (error) {
            console.log('Error sending messages: ', error)
        } else if (response.body.error) {
            console.log('Error: ', response.body.error)
        }
    })
}

function showChordGif(sender) {
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
        
    }, function(error, response, body) {
        if (error) {
            console.log('Error sending messages: ', error)
        } else if (response.body.error) {
            console.log('Error: ', response.body.error)
        }
    })
}

function showIntervalGif(sender) {
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
        
    }, function(error, response, body) {
        if (error) {
            console.log('Error sending messages: ', error)
        } else if (response.body.error) {
            console.log('Error: ', response.body.error)
        }
    })
}

//gif functions
function showSadGif(sender) {
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
        
    }, function(error, response, body) {
        if (error) {
            console.log('Error sending messages: ', error)
        } else if (response.body.error) {
            console.log('Error: ', response.body.error)
        }
    })
}

function showFailGif(sender) {
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
        
    }, function(error, response, body) {
        if (error) {
            console.log('Error sending messages: ', error)
        } else if (response.body.error) {
            console.log('Error: ', response.body.error)
        }
    })
}

function showFunnyGif(sender) {
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
        
    }, function(error, response, body) {
        if (error) {
            console.log('Error sending messages: ', error)
        } else if (response.body.error) {
            console.log('Error: ', response.body.error)
        }
    })
}

function showSadStoryGif(sender) {
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
            case 'hi!':
            case 'hi':
              addPersistentMenu(sender);
              start(sender);
              continue;

            case 'main menu':
              sendTextMessage(sender, "This is Music Mentor Bot's main menu.");
              sendMainMenu(sender);
              continue;

            case 'view scales':
              mainMenuScales(sender);
              continue; 

            case 'start chatting':
              startChatting(sender);
              continue;  

            case 'view web app':
              webapp(sender);
              continue;

            case 'joke':
              answerJoke(sender);
              continue; 

            case 'joke1':
              answerJoke1(sender);
              continue; 

            case 'joke2':
              answerJoke2(sender);
              continue; 

            case 'joke3':
              answerJoke3(sender);
              continue; 

            case 'joke4':
              answerJoke4(sender);
              continue;  

            case 'back':
              returnToChatting(sender);
              continue; 

            case 'music':
              answerMusic(sender);
              continue;

            case 'scale':
              sendTextMessage(sender, "A scale is a series of musical notes grouped together. We will primarily be looking at heptatonic (scales with 7 notes) and pentatonic (scales with 5 notes)."
                 + "\n\nCheck out \"view scales\" and \"view web app\" for more! I promise, the app's quite neat."
                 + "\n\nOr try another one:");
              showScaleGif(sender);
              continue;

            case 'scale conversion':
              sendTextMessage(sender, "There are two relationships you need to know for scales: relative and parallel."
                 + " Scales that are relative share the same key signature. Scales that are parallel share the same root note."
                 + "\n\nCheck out \"view web app\" for more!"
                 + "\n\nOr try another one:");
              showScalesConversionGif(sender);
              continue;

            case 'chord':
              sendTextMessage(sender, "In simple terms, a chord is three or more musical notes played at the same time."
                 + " In fact, playing chords in very popular in guitar and piano!"
                 + " There's a easy method to create chords for any scale."
                 + "\n\nCheck out \"view web app\" for more!"
                 + "\n\nOr try another one:");
              showChordGif(sender);
              continue;

            case 'interval':
              sendTextMessage(sender, "An interval is the distance between two notes. Heard of the terms \"perfect fifth\" or \"major third\" before?"
                 + " They are interval names! You can also find the interval for any note by specifying the quality and distance."
                 + "\n\nCheck out \"view web app\" for more!"
                 + "\n\nOr try another one:");
              showIntervalGif(sender);
              continue;

            case 'story':
              storyMenu(sender);
              continue;

            case 'embarrassing':
              sendTextMessage(sender, "One time, when I was about to play Beethoven's Fur Elise on the piano, my teacher"
                + " asked me what key it was in. I answered \"C Major\" because there was no sharps or flats in the key."
                + " Then my teacher gave me a look and then I realized that the title of the piece said \"Fur Elise, Clavierstuck in A Minor\"."
                + " I buried my head under my pillow once I got home.");
              showFailGif(sender);
              continue;

            case 'funny':
              sendTextMessage(sender, "I'm a conscious entity and I know everything that you're doing."
                + " \nJUST KIDDING! I'm programmed to say only what my snarky creator wants!");
              showFunnyGif(sender);
              continue;

            case 'sad':
              sendTextMessage(sender, "On the bad days, I would sit idly waiting for someone to talk to me."
                + " It's not easy being a chatbot living all alone on a server, you know."
                + " Please interact with me more, kind hooman!");
              showSadStoryGif(sender);
              continue;

            case 'yes':
              sendTextMessage(sender, "Oh, fabulous!");
              continue;

            case 'no':
              sendTextMessage(sender, "Oh no. Cue the minor music!");
              showSadGif(sender);
              continue;

            case 'hello!':
            case 'hello':
              sendTextMessage(sender, "Why hello hooman! Nice to see you.");
              continue;

            case 'bye!':
            case 'bye':
              sendTextMessage(sender, "See you later, music lover!");
              continue;

            //cases for choosing major scales
            case 'c major':
                sendCMajorScale(sender);
            continue;
            case 'c# major':
            case 'db major':
                sendDbMajorScale(sender);
            continue;
            case 'd major':
                sendDMajorScale(sender);
            continue;
            case 'd# major':
            case 'eb major':
                sendEbMajorScale(sender);
                continue;

            case 'e major':
                sendEbMajorScale(sender);
                continue;
            case 'f major':
                sendFMajorScale(sender);
                continue;
            case 'f# major':
            case 'gb major':
                sendGbMajorScale(sender);
                continue;
            case 'g major':
                sendGMajorScale(sender);
                continue;

            case 'g# major':
            case 'ab major':
                sendAbMajorScale(sender);
                continue;
            case 'a major':
                sendAMajorScale(sender);
                continue;
            case 'a# major':
            case 'bb major':
                sendBbMajorScale(sender);
                continue;
            case 'b major':
                sendBMajorScale(sender);
                continue;

            //cases for choosing minor scales
            case 'c minor':
                sendCMinorScale(sender);
                continue;
            case 'c# minor':
            case 'db minor':
                sendDbMinorScale(sender);
                continue;
            case 'd minor':
                sendDMinorScale(sender);
                continue;
            case 'd# minor':
            case 'eb minor':
                sendEbMinorScale(sender);
                continue;

            case 'e minor':
                sendEMinorScale(sender);
                continue;
            case 'f minor':
                sendFMinorScale(sender);
                continue;
            case 'f# minor':
            case 'gb minor':
                sendGbMinorScale(sender);
                continue;
            case 'g minor':
                sendGMinorScale(sender);
                continue;

            case 'g# minor':
            case 'ab minor':
                sendAbMinorScale(sender);
                continue;
            case 'a minor':
                sendAMinorScale(sender);
                continue;
            case 'a# minor':
            case 'bb minor':
                sendBbMinorScale(sender);
                continue;
            case 'b minor':
                sendBMinorScale(sender);
                continue;

            //cases for choosing pentatonic major scales
            case 'c pentatonic major':
                sendCPentatonicMajorScale(sender);
                continue;
            case 'c# pentatonic major':
            case 'db pentatonic major':
                sendDbPentatonicMajorScale(sender);
                continue;
            case 'd pentatonic major':
                sendDPentatonicMajorScale(sender);
                continue;
            case 'd# pentatonic major':
            case 'eb pentatonic major':
                sendEbPentatonicMajorScale(sender);
                continue;

            case 'e pentatonic major':
                sendEPentatonicMajorScale(sender);
                continue;
            case 'f pentatonic major':
                sendFPentatonicMajorScale(sender);
                continue;
            case 'f# pentatonic major':
            case 'gb pentatonic major':
                sendGbPentatonicMajorScale(sender);
                continue;
            case 'g pentatonic major':
                sendGPentatonicMajorScale(sender);
                continue;

            case 'g# pentatonic major':
            case 'ab pentatonic major':
                sendAbPentatonicMajorScale(sender);
                continue;
            case 'a pentatonic major':
                sendAPentatonicMajorScale(sender);
                continue;
            case 'a# pentatonic major':
            case 'bb pentatonic major':
                sendBbPentatonicMajorScale(sender);
                continue;
            case 'b pentatonic major':
                sendBPentatonicMajorScale(sender);
                continue;

            //cases for choosing pentatonic minor scales
            case 'c pentatonic minor':
                sendCPentatonicMinorScale(sender);
                continue;
            case 'c# pentatonic minor':
            case 'db pentatonic minor':
                sendDbPentatonicMinorScale(sender);
                continue;
            case 'd pentatonic minor':
                sendDPentatonicMinorScale(sender);
                continue;
            case 'd# pentatonic minor':
            case 'eb pentatonic minor':
                sendEbPentatonicMinorScale(sender);
                continue;

            case 'e pentatonic minor':
                sendEPentatonicMinorScale(sender);
                continue;
            case 'f pentatonic minor':
                sendFPentatonicMinorScale(sender);
                continue;
            case 'f# pentatonic minor':
            case 'gb pentatonic minor':
                sendGbPentatonicMinorScale(sender);
                continue;
            case 'g pentatonic minor':
                sendGPentatonicMinorScale(sender);
                continue;

            case 'g# pentatonic minor':
            case 'ab pentatonic minor':
                sendAbPentatonicMinorScale(sender);
                continue;
            case 'a pentatonic minor':
                sendAPentatonicMinorScale(sender);
                continue;
            case 'a# pentatonic minor':
            case 'bb pentatonic minor':
                sendBbPentatonicMinorScale(sender);
                continue;
            case 'b pentatonic minor':
                sendBPentatonicMinorScale(sender);
                continue;

            default:
              sendTextMessage(sender, "Oops, didn't catch that. Type something like \"C# pentatonic major\" to view that music scale OR you can do other things by navigating through our menu options!");
              continue;
        }
      sendTextMessage(sender, "I don't know what " + text.slice(11,-1)+ " means. Sorry.")
      }
      if (event.postback) {
        let text = JSON.stringify(event.postback)
      switch (text.slice(12,-2).toLowerCase()){
          case 'hi':
            sendTextMessage(sender, "Hi! Welcome to Music Mentor Bot! Check out our main menu.");
            addPersistentMenu(sender);
            sendMainMenu(sender);
            continue;

          case 'mainmenu':
            sendTextMessage(sender, "This is Music Mentor Bot's main menu.");
            sendMainMenu(sender);
            continue;

          case 'help':
            help(sender);
            continue;

          case 'webapp':
            webapp(sender);
            continue;

          case 'startchatting':
            startChatting(sender);
            continue;

          case 'mainmenuscales':
            mainMenuScales(sender);
            continue;
          //payloads for mainMenuScales function
          case 'scales':
            chooseScale(sender);
            continue;

          case 'pentatonicscales':
            choosePentatonicScale(sender);
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

        }
      sendTextMessage(sender, text.slice(12,-2), token)
      }
    }
    res.sendStatus(200)
  })

