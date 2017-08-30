'use strict'

const 
    bodyParser = require('body-parser'), 
    express = require('express'),
    request = require('request');

var
    CallSendAPI = require('./helpers/CallSendAPI'),
    Gifs = require('./helpers/Gifs'),
    Jokes = require('./helpers/Jokes'),
    MajorScales = require('./helpers/MajorScales'),
    MinorScales = require('./helpers/MinorScales'),
    Navigation = require('./helpers/Navigation'),
    PentatonicMajorScales = require('./helpers/PentatonicMajorScales'),
    PentatonicMinorScales = require('./helpers/PentatonicMinorScales'),
    ScaleMenus = require('./helpers/ScaleMenus'),
    Setup = require('./helpers/Setup');

let app = express();

app.set('port', (process.env.PORT || 5000))
app.use(bodyParser.urlencoded({extended: true}))
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

