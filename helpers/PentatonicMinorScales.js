exports = module.exports;
const request = require('request');

exports.sendCPentatonicMinorScale = function(sender, token) {
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
        url: 'https://graph.facebook.com/v2.8/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
          messaging_type: "RESPONSE",
            recipient: {id:sender},
            message: messageData,
        }
    }) 
}

exports.sendDbPentatonicMinorScale = function(sender, token) {
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
        url: 'https://graph.facebook.com/v2.8/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
          messaging_type: "RESPONSE",
            recipient: {id:sender},
            message: messageData,
        }
    }) 
}

exports.sendDPentatonicMinorScale = function(sender, token) {
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
        url: 'https://graph.facebook.com/v2.8/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
          messaging_type: "RESPONSE",
            recipient: {id:sender},
            message: messageData,
        }
    }) 
}

exports.sendEbPentatonicMinorScale = function(sender, token) {
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
        url: 'https://graph.facebook.com/v2.8/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
          messaging_type: "RESPONSE",
            recipient: {id:sender},
            message: messageData,
        }
    })
}

exports.sendEPentatonicMinorScale = function(sender, token) {
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
        url: 'https://graph.facebook.com/v2.8/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
          messaging_type: "RESPONSE",
            recipient: {id:sender},
            message: messageData,
        }
    }) 
}

exports.sendFPentatonicMinorScale = function(sender, token) {
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
        url: 'https://graph.facebook.com/v2.8/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
          messaging_type: "RESPONSE",
            recipient: {id:sender},
            message: messageData,
        }
    }) 
}

exports.sendGbPentatonicMinorScale = function(sender, token) {
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
        url: 'https://graph.facebook.com/v2.8/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
          messaging_type: "RESPONSE",
            recipient: {id:sender},
            message: messageData,
        }
    }) 
}

exports.sendGPentatonicMinorScale = function(sender, token) {
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
        url: 'https://graph.facebook.com/v2.8/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
          messaging_type: "RESPONSE",
            recipient: {id:sender},
            message: messageData,
        }
    }) 
}

exports.sendAbPentatonicMinorScale = function(sender, token) {
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
        url: 'https://graph.facebook.com/v2.8/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
          messaging_type: "RESPONSE",
            recipient: {id:sender},
            message: messageData,
        }
    }) 
}

exports.sendAPentatonicMinorScale = function(sender, token) {
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
        url: 'https://graph.facebook.com/v2.8/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
          messaging_type: "RESPONSE",
            recipient: {id:sender},
            message: messageData,
        }
    }) 
}

exports.sendBbPentatonicMinorScale = function(sender, token) {
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
        url: 'https://graph.facebook.com/v2.8/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
          messaging_type: "RESPONSE",
            recipient: {id:sender},
            message: messageData,
        }
    }) 
}

exports.sendBPentatonicMinorScale = function(sender, token) {
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
        url: 'https://graph.facebook.com/v2.8/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
          messaging_type: "RESPONSE",
            recipient: {id:sender},
            message: messageData,
        }
    }) 
}