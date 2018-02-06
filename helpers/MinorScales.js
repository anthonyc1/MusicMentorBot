exports = module.exports;
const request = require('request');

exports.sendCMinorScale = function(sender, token) {
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

exports.sendDbMinorScale = function(sender, token) {
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

exports.sendDMinorScale = function(sender, token) {
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

exports.sendEbMinorScale = function(sender, token) {
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

exports.sendEMinorScale = function(sender, token) {
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

exports.sendFMinorScale = function(sender, token) {
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

exports.sendGbMinorScale = function(sender, token) {
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

exports.sendGMinorScale = function(sender, token) {
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

exports.sendAbMinorScale = function(sender, token) {
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

exports.sendAMinorScale = function(sender, token) {
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

exports.sendBbMinorScale = function(sender, token) {
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

exports.sendBMinorScale = function(sender, token) {
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