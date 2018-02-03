var pentatonicMinorScales = {};

pentatonicMinorScales.sendCPentatonicMinorScale = function(sender) {
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

pentatonicMinorScales.sendDbPentatonicMinorScale = function(sender) {
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

pentatonicMinorScales.sendDPentatonicMinorScale = function(sender) {
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

pentatonicMinorScales.sendEbPentatonicMinorScale = function(sender) {
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

pentatonicMinorScales.sendEPentatonicMinorScale = function(sender) {
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

pentatonicMinorScales.sendFPentatonicMinorScale = function(sender) {
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

pentatonicMinorScales.sendGbPentatonicMinorScale = function(sender) {
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

pentatonicMinorScales.sendGPentatonicMinorScale = function(sender) {
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

pentatonicMinorScales.sendAbPentatonicMinorScale = function(sender) {
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

pentatonicMinorScales.sendAPentatonicMinorScale = function(sender) {
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

pentatonicMinorScales.sendBbPentatonicMinorScale = function(sender) {
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

pentatonicMinorScales.sendBPentatonicMinorScale = function(sender) {
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

exports.data = pentatonicMinorScales;