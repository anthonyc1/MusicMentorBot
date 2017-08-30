var setup = {};

setup.getStarted = function(sender){
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

setup.addPersistentMenu = function(sender){
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

exports.data = setup;

