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

const PAGE_ACCESS_TOKEN = process.env.FB_PAGE_ACCESS_TOKEN;
const VALIDATION_TOKEN = process.env.FB_VALIDATION_TOKEN;

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

function sendTextMessage(sender, text) {
    let messageData = { text:text }
    request({
        url: 'https://graph.facebook.com/v2.8/me/messages',
        qs: {access_token:PAGE_ACCESS_TOKEN},
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
              Setup.data.addPersistentMenu(sender);
              Navigation.data.start(sender);
              continue;

            case 'main menu':
              sendTextMessage(sender, "This is Music Mentor Bot's main menu.");
              Navigation.data.sendMainMenu(sender);
              continue;

            case 'view scales':
              Navigation.data.mainMenuScales(sender);
              continue; 

            case 'start chatting':
              Navigation.data.startChatting(sender);
              continue;  

            case 'view web app':
              Navigation.data.webapp(sender);
              continue;

            case 'joke':
              Jokes.data.answerJoke(sender);
              continue; 

            case 'joke1':
              Jokes.data.answerJoke1(sender);
              continue; 

            case 'joke2':
              Jokes.data.answerJoke2(sender);
              continue; 

            case 'joke3':
              Jokes.data.answerJoke3(sender);
              continue; 

            case 'joke4':
              Jokes.data.answerJoke4(sender);
              continue;  

            case 'back':
              Navigation.data.returnToChatting(sender);
              continue; 

            case 'music':
              Navigation.data.answerMusic(sender);
              continue;

            case 'scale':
              sendTextMessage(sender, "A scale is a series of musical notes grouped together. We will primarily be looking at heptatonic (scales with 7 notes) and pentatonic (scales with 5 notes)."
                 + "\n\nCheck out \"view scales\" and \"view web app\" for more! I promise, the app's quite neat."
                 + "\n\nOr try another one:");
              Gifs.data.showScaleGif(sender);
              continue;

            case 'scale conversion':
              sendTextMessage(sender, "There are two relationships you need to know for scales: relative and parallel."
                 + " Scales that are relative share the same key signature. Scales that are parallel share the same root note."
                 + "\n\nCheck out \"view web app\" for more!"
                 + "\n\nOr try another one:");
              Gifs.data.showScalesConversionGif(sender);
              continue;

            case 'chord':
              sendTextMessage(sender, "In simple terms, a chord is three or more musical notes played at the same time."
                 + " In fact, playing chords in very popular in guitar and piano!"
                 + " There's a easy method to create chords for any scale."
                 + "\n\nCheck out \"view web app\" for more!"
                 + "\n\nOr try another one:");
              Gifs.data.showChordGif(sender);
              continue;

            case 'interval':
              sendTextMessage(sender, "An interval is the distance between two notes. Heard of the terms \"perfect fifth\" or \"major third\" before?"
                 + " They are interval names! You can also find the interval for any note by specifying the quality and distance."
                 + "\n\nCheck out \"view web app\" for more!"
                 + "\n\nOr try another one:");
              Gifs.data.showIntervalGif(sender);
              continue;

            case 'story':
              Navigation.data.storyMenu(sender);
              continue;

            case 'embarrassing':
              sendTextMessage(sender, "One time, when I was about to play Beethoven's Fur Elise on the piano, my teacher"
                + " asked me what key it was in. I answered \"C Major\" because there was no sharps or flats in the key."
                + " Then my teacher gave me a look and then I realized that the title of the piece said \"Fur Elise, Clavierstuck in A Minor\"."
                + " I buried my head under my pillow once I got home.");
              Gifs.data.showFailGif(sender);
              continue;

            case 'funny':
              sendTextMessage(sender, "I'm a conscious entity and I know everything that you're doing."
                + " \nJUST KIDDING! I'm programmed to say only what my snarky creator wants!");
              Gifs.data.showFunnyGif(sender);
              continue;

            case 'sad':
              sendTextMessage(sender, "On the bad days, I would sit idly waiting for someone to talk to me."
                + " It's not easy being a chatbot living all alone on a server, you know."
                + " Please interact with me more, kind hooman!");
              Gifs.data.showSadStoryGif(sender);
              continue;

            case 'yes':
              sendTextMessage(sender, "Oh, fabulous!");
              continue;

            case 'no':
              sendTextMessage(sender, "Oh no. Cue the minor music!");
              Gifs.data.showSadGif(sender);
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
                MajorScales.data.sendCMajorScale(sender);
            continue;
            case 'c# major':
            case 'db major':
                MajorScales.data.sendDbMajorScale(sender);
            continue;
            case 'd major':
                MajorScales.data.sendDMajorScale(sender);
            continue;
            case 'd# major':
            case 'eb major':
                MajorScales.data.sendEbMajorScale(sender);
                continue;

            case 'e major':
                MajorScales.data.sendEbMajorScale(sender);
                continue;
            case 'f major':
                MajorScales.data.sendFMajorScale(sender);
                continue;
            case 'f# major':
            case 'gb major':
                MajorScales.data.sendGbMajorScale(sender);
                continue;
            case 'g major':
                MajorScales.data.sendGMajorScale(sender);
                continue;

            case 'g# major':
            case 'ab major':
                MajorScales.data.sendAbMajorScale(sender);
                continue;
            case 'a major':
                MajorScales.data.sendAMajorScale(sender);
                continue;
            case 'a# major':
            case 'bb major':
                MajorScales.data.sendBbMajorScale(sender);
                continue;
            case 'b major':
                MajorScales.data.sendBMajorScale(sender);
                continue;

            //cases for choosing minor scales
            case 'c minor':
                MinorScales.data.sendCMinorScale(sender);
                continue;
            case 'c# minor':
            case 'db minor':
                MinorScales.data.sendDbMinorScale(sender);
                continue;
            case 'd minor':
                MinorScales.data.sendDMinorScale(sender);
                continue;
            case 'd# minor':
            case 'eb minor':
                MinorScales.data.sendEbMinorScale(sender);
                continue;

            case 'e minor':
                MinorScales.data.sendEMinorScale(sender);
                continue;
            case 'f minor':
                MinorScales.data.sendFMinorScale(sender);
                continue;
            case 'f# minor':
            case 'gb minor':
                MinorScales.data.sendGbMinorScale(sender);
                continue;
            case 'g minor':
                MinorScales.data.sendGMinorScale(sender);
                continue;

            case 'g# minor':
            case 'ab minor':
                MinorScales.data.sendAbMinorScale(sender);
                continue;
            case 'a minor':
                MinorScales.data.sendAMinorScale(sender);
                continue;
            case 'a# minor':
            case 'bb minor':
                MinorScales.data.sendBbMinorScale(sender);
                continue;
            case 'b minor':
                MinorScales.data.sendBMinorScale(sender);
                continue;

            //cases for choosing pentatonic major scales
            case 'c pentatonic major':
                PentatonicMajorScales.data.sendCPentatonicMajorScale(sender);
                continue;
            case 'c# pentatonic major':
            case 'db pentatonic major':
                PentatonicMajorScales.data.sendDbPentatonicMajorScale(sender);
                continue;
            case 'd pentatonic major':
                PentatonicMajorScales.data.sendDPentatonicMajorScale(sender);
                continue;
            case 'd# pentatonic major':
            case 'eb pentatonic major':
                PentatonicMajorScales.data.sendEbPentatonicMajorScale(sender);
                continue;

            case 'e pentatonic major':
                PentatonicMajorScales.data.sendEPentatonicMajorScale(sender);
                continue;
            case 'f pentatonic major':
                PentatonicMajorScales.data.sendFPentatonicMajorScale(sender);
                continue;
            case 'f# pentatonic major':
            case 'gb pentatonic major':
                PentatonicMajorScales.data.sendGbPentatonicMajorScale(sender);
                continue;
            case 'g pentatonic major':
                PentatonicMajorScales.data.sendGPentatonicMajorScale(sender);
                continue;

            case 'g# pentatonic major':
            case 'ab pentatonic major':
                PentatonicMajorScales.data.sendAbPentatonicMajorScale(sender);
                continue;
            case 'a pentatonic major':
                PentatonicMajorScales.data.sendAPentatonicMajorScale(sender);
                continue;
            case 'a# pentatonic major':
            case 'bb pentatonic major':
                PentatonicMajorScales.data.sendBbPentatonicMajorScale(sender);
                continue;
            case 'b pentatonic major':
                PentatonicMajorScales.data.sendBPentatonicMajorScale(sender);
                continue;

            //cases for choosing pentatonic minor scales
            case 'c pentatonic minor':
                PentatonicMinorScales.data.sendCPentatonicMinorScale(sender);
                continue;
            case 'c# pentatonic minor':
            case 'db pentatonic minor':
                PentatonicMinorScales.data.sendDbPentatonicMinorScale(sender);
                continue;
            case 'd pentatonic minor':
                PentatonicMinorScales.data.sendDPentatonicMinorScale(sender);
                continue;
            case 'd# pentatonic minor':
            case 'eb pentatonic minor':
                PentatonicMinorScales.data.sendEbPentatonicMinorScale(sender);
                continue;

            case 'e pentatonic minor':
                PentatonicMinorScales.data.sendEPentatonicMinorScale(sender);
                continue;
            case 'f pentatonic minor':
                PentatonicMinorScales.data.sendFPentatonicMinorScale(sender);
                continue;
            case 'f# pentatonic minor':
            case 'gb pentatonic minor':
                PentatonicMinorScales.data.sendGbPentatonicMinorScale(sender);
                continue;
            case 'g pentatonic minor':
                PentatonicMinorScales.data.sendGPentatonicMinorScale(sender);
                continue;

            case 'g# pentatonic minor':
            case 'ab pentatonic minor':
                PentatonicMinorScales.data.sendAbPentatonicMinorScale(sender);
                continue;
            case 'a pentatonic minor':
                PentatonicMinorScales.data.sendAPentatonicMinorScale(sender);
                continue;
            case 'a# pentatonic minor':
            case 'bb pentatonic minor':
                PentatonicMinorScales.data.sendBbPentatonicMinorScale(sender);
                continue;
            case 'b pentatonic minor':
                PentatonicMinorScales.data.sendBPentatonicMinorScale(sender);
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
            Setup.data.addPersistentMenu(sender);
            Navigation.data.sendMainMenu(sender);
            continue;

          case 'mainmenu':
            sendTextMessage(sender, "This is Music Mentor Bot's main menu.");
            Navigation.data.sendMainMenu(sender);
            continue;

          case 'help':
            Navigation.data.help(sender);
            continue;

          case 'webapp':
            Navigation.data.webapp(sender);
            continue;

          case 'startchatting':
            Navigation.data.startChatting(sender);
            continue;

          case 'mainmenuscales':
            Navigation.data.mainMenuScales(sender);
            continue;
          //payloads for mainMenuScales function
          case 'scales':
            Navigation.data.chooseScale(sender);
            continue;

          case 'pentatonicscales':
            Navigation.data.choosePentatonicScale(sender);
            continue;

          //payloads for chooseScale function
          case 'major':
            Navigation.data.chooseMajorScale(sender);
            continue;

          case 'minor':
            Navigation.data.chooseMinorScale(sender);
            continue;
          //payloads for choosePentatonicScale function
          case 'pentamajor':
            Navigation.data.choosePentatonicMajorScale(sender);
            continue;

          case 'pentaminor':
            Navigation.data.choosePentatonicMinorScale(sender);
            continue;
          //payloads for chooseMajorScale function
          case 'range1':
            ScaleMenus.data.sendMajorScale(sender);
            continue;

          case 'range2':
            ScaleMenus.data.sendMajorScale2(sender);
            continue;

          case 'range3':
            ScaleMenus.data.sendMajorScale3(sender);
            continue;
          //payloads for chooseMinorScale function
          case 'rangeminor1':
            ScaleMenus.data.sendMinorScale(sender);
            continue;

          case 'rangeminor2':
            ScaleMenus.data.sendMinorScale2(sender);
            continue;

          case 'rangeminor3':
            ScaleMenus.data.sendMinorScale3(sender);
            continue;
          //payloads for choosePentatonicMajor function
          case 'rangepentatonic1':
            ScaleMenus.data.sendPentatonicMajorScale(sender);
            continue;

          case 'rangepentatonic2':
            ScaleMenus.data.sendPentatonicMajorScale2(sender);
            continue;

          case 'rangepentatonic3':
            ScaleMenus.data.ScaleMenus.data.sendPentatonicMajorScale3(sender);
            continue;
          //payloads for choosePentatonicMinor function
          case 'rangepentatonic4':
            ScaleMenus.data.sendPentatonicMinorScale(sender);
            continue;

          case 'rangepentatonic5':
            ScaleMenus.data.sendPentatonicMinorScale2(sender);
            continue;

          case 'rangepentatonic6':
            ScaleMenus.data.sendPentatonicMinorScale3(sender);
            continue;

        }
      sendTextMessage(sender, text.slice(12,-2), PAGE_ACCESS_TOKEN)
      }
    }
    res.sendStatus(200)
  })

