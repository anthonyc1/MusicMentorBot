var setup = {};

setup.getStarted = function(sender){
 request({
    url: 'https://graph.facebook.com/v2.8/me/thread_settings',
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
})
}

setup.addPersistentMenu = function(sender){
 request({
    url: 'https://graph.facebook.com/v2.8/me/thread_settings',
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
})
}

exports.data = setup;

