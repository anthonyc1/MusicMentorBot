'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()

app.set('port', (process.env.PORT || 5000))

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.send('Hello world, I am a chat bot')
})

app.get('/webhook/', function (req, res) {
    if (req.query['hub.verify_token'] === VALIDATION_TOKEN) {
        console.log("Validating webhook");
        res.status(200).send(req.query['hub.challenge']);
    } else {
    res.send('Error, wrong token');
    res.sendStatus(403);
  }
})

app.listen(app.get('port'), function() {
    console.log('running on port', app.get('port'));
})

const token = process.env.FB_PAGE_ACCESS_TOKEN
const VALIDATION_TOKEN = process.env.FB_VALIDATION_TOKEN

function sendTextMessage(sender, text) {
    let messageData = { text:text }
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
            recipient: {id:sender},
            message: messageData,
        },
        "sender_action":"typing_on"
    }, function(error, response, body) {
        if (error) {
            console.log('Error sending messages: ', error)
        } else if (response.body.error) {
            console.log('Error: ', response.body.error)
        }
    })
}

//send a test message back as two cards
//note: max of four cards, and three buttons per card!!!!

//check this!!
function sendMajorScale(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "C Major Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Keyboard"
                    }, {
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Sheet Music",
                    }],
                }, {
                    "title": "C#/Db Major Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Keyboard"
                    }, {
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Sheet Music",
                    }],
                },{
                    "title": "D Major Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Keyboard"
                    }, {
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Sheet Music",
                    }],
                },{
                    "title": "Eb Major Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Keyboard"
                    }, {
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Sheet Music",
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
                    "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Keyboard"
                    }, {
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Sheet Music",
                    }],
                }, {
                    "title": "F Major Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Keyboard"
                    }, {
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Sheet Music",
                    }],
                },{
                    "title": "F#/Gb Major Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Keyboard"
                    }, {
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Sheet Music",
                    }],
                },{
                    "title": "G Major Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Keyboard"
                    }, {
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Sheet Music",
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
                    "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Keyboard"
                    }, {
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Sheet Music",
                    }],
                }, {
                    "title": "A Major Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Keyboard"
                    }, {
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Sheet Music",
                    }],
                },{
                    "title": "Bb Major Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Keyboard"
                    }, {
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Sheet Music",
                    }],
                },{
                    "title": "B Major Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Keyboard"
                    }, {
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Sheet Music",
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

//minor scale functions
function sendMinorScale(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "C Minor Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Keyboard"
                    }, {
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Sheet Music",
                    }],
                }, {
                    "title": "C#/Db Minor Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Keyboard"
                    }, {
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Sheet Music",
                    }],
                },{
                    "title": "D Minor Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Keyboard"
                    }, {
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Sheet Music",
                    }],
                },{
                    "title": "Eb Minor Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Keyboard"
                    }, {
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Sheet Music",
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
                    "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Keyboard"
                    }, {
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Sheet Music",
                    }],
                }, {
                    "title": "F Minor Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Keyboard"
                    }, {
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Sheet Music",
                    }],
                },{
                    "title": "F#/Gb Minor Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Keyboard"
                    }, {
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Sheet Music",
                    }],
                },{
                    "title": "G Minor Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Keyboard"
                    }, {
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Sheet Music",
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
                    "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Keyboard"
                    }, {
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Sheet Music",
                    }],
                }, {
                    "title": "A Minor Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Keyboard"
                    }, {
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Sheet Music",
                    }],
                },{
                    "title": "Bb Minor Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Keyboard"
                    }, {
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Sheet Music",
                    }],
                },{
                    "title": "B Minor Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Keyboard"
                    }, {
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Sheet Music",
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

//major pentatonic scale functions
function sendMajorPentatonicScale(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "C Pentatonic Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Keyboard"
                    }, {
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Sheet Music",
                    }],
                }, {
                    "title": "C#/Db Pentatonic Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Keyboard"
                    }, {
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Sheet Music",
                    }],
                },{
                    "title": "D Pentatonic Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Keyboard"
                    }, {
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Sheet Music",
                    }],
                },{
                    "title": "Eb Pentatonic Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Keyboard"
                    }, {
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Sheet Music",
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

function sendMajorPentatonicScale2(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "E Pentatonic Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Keyboard"
                    }, {
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Sheet Music",
                    }],
                }, {
                    "title": "F Pentatonic Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Keyboard"
                    }, {
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Sheet Music",
                    }],
                },{
                    "title": "F#/Gb Pentatonic Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Keyboard"
                    }, {
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Sheet Music",
                    }],
                },{
                    "title": "G Pentatonic Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Keyboard"
                    }, {
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Sheet Music",
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

function sendMajorPentatonicScale3(sender) {
    let messageData = {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "Ab Pentatonic Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Keyboard"
                    }, {
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Sheet Music",
                    }],
                }, {
                    "title": "A Pentatonic Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Keyboard"
                    }, {
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Sheet Music",
                    }],
                },{
                    "title": "Bb Pentatonic Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Keyboard"
                    }, {
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Sheet Music",
                    }],
                },{
                    "title": "B Pentatonic Scale",
                    "subtitle": "View the scale below:",
                    "image_url": "http://messengerdemo.parseapp.com/img/rift.png",
                    "buttons": [{
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Keyboard"
                    }, {
                        "type": "web_url",
                        "url": "https://github.com/anthonyc1/MyFiles/blob/master/C%20Major.png?raw=true",
                        "title": "On Sheet Music",
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

//this works!
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
            "title":"Find Intervals",
            "payload":"intervals"
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
            "title":"C,C#/Db,D,Eb",
            "payload":"range1"
            
          },
          {
            "type":"postback",
            "title":"E,F,F#/Gb,G",
            "payload":"range2"
          },
          {
            "type":"postback",
            "title":"Ab,A,Bb,B",
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
            "title":"C,C#/Db,D,Eb",
            "payload":"rangeminor1"
            
          },
          {
            "type":"postback",
            "title":"E,F,F#/Gb,G",
            "payload":"rangeminor2"
          },
          {
            "type":"postback",
            "title":"Ab,A,Bb,B",
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

function chooseMajorPentatonicScale(sender) {
    let messageData = {
        "attachment":{
      "type":"template",
      "payload":{
        "template_type":"button",
        "text":"Pick a range:",
        "buttons":[
          {
            "type":"postback",
            "title":"C,C#/Db,D,Eb",
            "payload":"rangepentatonic1"
            
          },
          {
            "type":"postback",
            "title":"E,F,F#/Gb,G",
            "payload":"rangepentatonic2"
          },
          {
            "type":"postback",
            "title":"Ab,A,Bb,B",
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

function chooseMinorPentatonicScale(sender) {
    let messageData = {
        "attachment":{
      "type":"template",
      "payload":{
        "template_type":"button",
        "text":"Pick a range:",
        "buttons":[
          {
            "type":"postback",
            "title":"C,C#/Db,D,Eb",
            "payload":"rangepentatonic4"
            
          },
          {
            "type":"postback",
            "title":"E,F,F#/Gb,G",
            "payload":"rangepentatonic5"
          },
          {
            "type":"postback",
            "title":"Ab,A,Bb,B",
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

//fixed but don't use yet.
function selectScale(sender) {
    let messageData = {
    "text":"Pick a color:",
    "quick_replies":[
      {
        "content_type":"text",
        "title":"Major Scale",
        "payload":"major",
      },
      {
        "content_type":"text",
        "title":"Minor Scale",
        "payload":"minor",
      },{
        "content_type":"text",
        "title":"Pentatonic Scale",
        "payload":"pentatonic",
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


//webhook API to process messages, look for special messages
//to trigger the cards, and send postback message
app.post('/webhook/', function (req, res) {
    let messaging_events = req.body.entry[0].messaging
    for (let i = 0; i < messaging_events.length; i++) {
      let event = req.body.entry[0].messaging[i]
      let sender = event.sender.id
      if (event.message && event.message.text) {
        let text = event.message.text
        if (text.toLowerCase() === "hi"){
          sendTextMessage(sender, "Hi there!");
          sendTextMessage(sender, "Welcome to Music Mentor Bot!");
          sendTextMessage(sender, "Check out our main menu.");
          sendMainMenu(sender);
          continue;
        }
        if (text.toLowerCase() === "hey"){
          sendTextMessage(sender, "Heyy there big shot!");
          sendTextMessage(sender, "Welcome to Music Mentor Bot!");
          sendTextMessage(sender, "Check out our main menu.");
          sendMainMenu(sender);
          continue;
        }
        if (text.toLowerCase() === "major2"){
          sendTextMessage(sender, "Major!");
          sendMainMenu(sender);
          continue;
        }
        else {
          sendTextMessage(sender, "Welcome to Music Mentor Bot!");
          sendTextMessage(sender, "Check out our main menu.");
          sendMainMenu(sender);
          continue
        }
      sendTextMessage(sender, "Text received, echo: " + text.substring(0, 200))
      }
      if (event.postback) {
        let text = JSON.stringify(event.postback)
      switch (text.slice(12,-2).toLowerCase()){
          //options for sendMainMenu function
          case 'scales':
            chooseScale(sender);
            continue;

          case 'pentatonicscales':
            choosePentatonicScale(sender);
            continue;

          case 'intervals':
            sendMajorScale(sender);
            continue;
          //options for chooseScale function
          case 'major':
            chooseMajorScale(sender);
            continue;

          case 'minor':
            chooseMinorScale(sender);
            continue;
          //options for choosePentatonicScale function
          case 'pentamajor':
            choosePentatonicMajorScale(sender);
            continue;

          case 'pentaminor':
            choosePentatonicMinorScale(sender);
            continue;
          //options for chooseMajorScale function
          case 'range1':
            sendMajorScale(sender);
            continue;

          case 'range2':
            sendMajorScale2(sender);
            continue;

          case 'range3':
            sendMajorScale3(sender);
            continue;
          //options for chooseMinorScale function
          case 'rangeminor1':
            sendMinorScale(sender);
            continue;

          case 'rangeminor2':
            sendMinorScale2(sender);
            continue;

          case 'rangeminor3':
            sendMinorScale3(sender);
            continue;
          //options for chooseMajorPentatonic function
          case 'rangepentatonic1':
            sendMajorPentatonicScale(sender);
            continue;

          case 'rangepentatonic2':
            sendMajorPentatonicScale2(sender);
            continue;

          case 'rangepentatonic3':
            sendMajorPentatonicScale3(sender);
            continue;
          //options for chooseMinorPentatonic function
          case 'rangepentatonic1':
            sendMinorPentatonicScale(sender);
            continue;

          case 'rangepentatonic2':
            sendMinorPentatonicScale2(sender);
            continue;

          case 'rangepentatonic3':
            sendMinorPentatonicScale3(sender);
            continue;
        }
      sendTextMessage(sender, "Postback received: "+text.substring(0, 200), token)
      }
    }
    res.sendStatus(200)
  })

