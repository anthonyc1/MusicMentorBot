'use strict'

const 
    bodyParser = require('body-parser'), 
    express = require('express'),
    request = require('request'),
    fs = require('fs');

const
    CallSendAPI = require('./helpers/CallSendAPI.js'),
    Gifs = require('./helpers/Gifs.js'),
    Jokes = require('./helpers/Jokes.js'),
    MajorScales = require('./helpers/MajorScales.js'),
    MinorScales = require('./helpers/MinorScales.js'),
    Navigation = require('./helpers/Navigation.js'),
    PentatonicMajorScales = require('./helpers/PentatonicMajorScales.js'),
    PentatonicMinorScales = require('./helpers/PentatonicMinorScales.js'),
    ScaleMenus = require('./helpers/ScaleMenus.js'),
    Setup = require('./helpers/Setup.js');

let app = express();

const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;
const VERIFY_TOKEN = process.env.VERIFY_TOKEN;
const token = PAGE_ACCESS_TOKEN;
// let configVars = fs.readFileSync('config_vars.json');
// let obj = JSON.parse(configVars);
// const PAGE_ACCESS_TOKEN = obj.PAGE_ACCESS_TOKEN;
// const VERIFY_TOKEN = obj.VERIFY_TOKEN;

app.set('port', (process.env.PORT || 5000))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.send('This is a chatbot.')
});

app.get('/webhook', function (req, res) {
    if (req.query['hub.verify_token'] === VERIFY_TOKEN) {
        console.log("Validating webhook");
       res.status(200).send(req.query['hub.challenge']);
    } else {
      console.log(req.query['hub.verify_token']);
      console.log(VERIFY_TOKEN);
       res.send('Failed validation, wrong token.');
    //res.sendStatus(403);
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
          messaging_type: "RESPONSE",
            recipient: {id:sender},
            message: messageData,
        } 
    })
}

app.post('/webhook', function (req, res) {
  if (req.body.object === 'page') {
    req.body.entry.forEach(entry => {
      entry.messaging.forEach(event => {
        if (event.message && event.message.text) {
          let sender = event.sender.id
          let text = event.message.text;
          switch (text.toLowerCase()){
            case 'hi':
            case 'hey':
            case 'yo':
              sendTextMessage(sender, "Hii!!");
              Setup.addPersistentMenu(sender, token);
              //Navigation.start(sender, token);
              break;

            case 'main menu':
              sendTextMessage(sender, "This is Music Mentor Bot's main menu.");
              Navigation.sendMainMenu(sender, token);
              break;

            case 'view scales':
              Navigation.mainMenuScales(sender, token);
              break; 

            case 'start chatting':
              Navigation.startChatting(sender, token);
              break;  

            case 'view web app':
              Navigation.webapp(sender, token);
              break;

            case 'joke':
              Jokes.answerJoke(sender, token);
              break; 

            case 'joke1':
              Jokes.answerJoke1(sender, token);
              break; 

            case 'joke2':
              Jokes.answerJoke2(sender, token);
              break; 

            case 'joke3':
              Jokes.answerJoke3(sender, token);
              break; 

            case 'joke4':
              Jokes.answerJoke4(sender, token);
              break;  

            case 'back':
              Navigation.returnToChatting(sender, token);
              break; 

            case 'music':
              Navigation.answerMusic(sender, token);
              break;

            case 'scale':
              sendTextMessage(sender, "A scale is a series of musical notes grouped together. We will primarily be looking at heptatonic (scales with 7 notes) and pentatonic (scales with 5 notes)."
                 + "\n\nCheck out \"view scales\" and \"view web app\" for more! I promise, the app's quite neat."
                 + "\n\nOr try another one:");
              Gifs.showScaleGif(sender, token);
              break;

            case 'scale conversion':
              sendTextMessage(sender, "There are two relationships you need to know for scales: relative and parallel."
                 + " Scales that are relative share the same key signature. Scales that are parallel share the same root note."
                 + "\n\nCheck out \"view web app\" for more!"
                 + "\n\nOr try another one:");
              Gifs.showScalesConversionGif(sender, token);
              break;

            case 'chord':
              sendTextMessage(sender, "In simple terms, a chord is three or more musical notes played at the same time."
                 + " In fact, playing chords in very popular in guitar and piano!"
                 + " There's a easy method to create chords for any scale."
                 + "\n\nCheck out \"view web app\" for more!"
                 + "\n\nOr try another one:");
              Gifs.showChordGif(sender, token);
              break;

            case 'interval':
              sendTextMessage(sender, "An interval is the distance between two notes. Heard of the terms \"perfect fifth\" or \"major third\" before?"
                 + " They are interval names! You can also find the interval for any note by specifying the quality and distance."
                 + "\n\nCheck out \"view web app\" for more!"
                 + "\n\nOr try another one:");
              Gifs.showIntervalGif(sender, token);
              break;

            case 'story':
              Navigation.storyMenu(sender, token);
              break;

            case 'embarrassing':
              sendTextMessage(sender, "One time, when I was about to play Beethoven's Fur Elise on the piano, my teacher"
                + " asked me what key it was in. I answered \"C Major\" because there was no sharps or flats in the key."
                + " Then my teacher gave me a look and then I realized that the title of the piece said \"Fur Elise, Clavierstuck in A Minor\"."
                + " I buried my head under my pillow once I got home.");
              Gifs.showFailGif(sender, token);
              break;

            case 'funny':
              sendTextMessage(sender, "I'm a conscious entity and I know everything that you're doing."
                + " \nJUST KIDDING! I'm programmed to say only what my snarky creator wants!");
              Gifs.showFunnyGif(sender, token);
              break;

            case 'sad':
              sendTextMessage(sender, "On the bad days, I would sit idly waiting for someone to talk to me."
                + " It's not easy being a chatbot living all alone on a server, you know."
                + " Please interact with me more, kind hooman!");
              Gifs.showSadStoryGif(sender, token);
              break;

            case 'yes':
              sendTextMessage(sender, "Oh, fabulous!");
              break;

            case 'no':
              sendTextMessage(sender, "Oh no. Cue the minor music!");
              Gifs.showSadGif(sender, token);
              break;

            case 'hello!':
            case 'hello':
              sendTextMessage(sender, "Why hello hooman! Nice to see you.");
              break;

            case 'bye!':
            case 'bye':
              sendTextMessage(sender, "See you later, music lover!");
              break;

            //cases for choosing major scales
            case 'c major':
                MajorScales.sendCMajorScale(sender, token);
            break;
            case 'c# major':
            case 'db major':
                MajorScales.sendDbMajorScale(sender, token);
            break;
            case 'd major':
                MajorScales.sendDMajorScale(sender, token);
            break;
            case 'd# major':
            case 'eb major':
                MajorScales.sendEbMajorScale(sender, token);
                break;

            case 'e major':
                MajorScales.sendEbMajorScale(sender, token);
                break;
            case 'f major':
                MajorScales.sendFMajorScale(sender, token);
                break;
            case 'f# major':
            case 'gb major':
                MajorScales.sendGbMajorScale(sender, token);
                break;
            case 'g major':
                MajorScales.sendGMajorScale(sender, token);
                break;

            case 'g# major':
            case 'ab major':
                MajorScales.sendAbMajorScale(sender, token);
                break;
            case 'a major':
                MajorScales.sendAMajorScale(sender, token);
                break;
            case 'a# major':
            case 'bb major':
                MajorScales.sendBbMajorScale(sender, token);
                break;
            case 'b major':
                MajorScales.sendBMajorScale(sender, token);
                break;

            //cases for choosing minor scales
            case 'c minor':
                MinorScales.sendCMinorScale(sender, token);
                break;
            case 'c# minor':
            case 'db minor':
                MinorScales.sendDbMinorScale(sender, token);
                break;
            case 'd minor':
                MinorScales.sendDMinorScale(sender, token);
                break;
            case 'd# minor':
            case 'eb minor':
                MinorScales.sendEbMinorScale(sender, token);
                break;

            case 'e minor':
                MinorScales.sendEMinorScale(sender, token);
                break;
            case 'f minor':
                MinorScales.sendFMinorScale(sender, token);
                break;
            case 'f# minor':
            case 'gb minor':
                MinorScales.sendGbMinorScale(sender, token);
                break;
            case 'g minor':
                MinorScales.sendGMinorScale(sender, token);
                break;

            case 'g# minor':
            case 'ab minor':
                MinorScales.sendAbMinorScale(sender, token);
                break;
            case 'a minor':
                MinorScales.sendAMinorScale(sender, token);
                break;
            case 'a# minor':
            case 'bb minor':
                MinorScales.sendBbMinorScale(sender, token);
                break;
            case 'b minor':
                MinorScales.sendBMinorScale(sender, token);
                break;

            //cases for choosing pentatonic major scales
            case 'c pentatonic major':
                PentatonicMajorScales.sendCPentatonicMajorScale(sender, token);
                break;
            case 'c# pentatonic major':
            case 'db pentatonic major':
                PentatonicMajorScales.sendDbPentatonicMajorScale(sender, token);
                break;
            case 'd pentatonic major':
                PentatonicMajorScales.sendDPentatonicMajorScale(sender, token);
                break;
            case 'd# pentatonic major':
            case 'eb pentatonic major':
                PentatonicMajorScales.sendEbPentatonicMajorScale(sender, token);
                break;

            case 'e pentatonic major':
                PentatonicMajorScales.sendEPentatonicMajorScale(sender, token);
                break;
            case 'f pentatonic major':
                PentatonicMajorScales.sendFPentatonicMajorScale(sender, token);
                break;
            case 'f# pentatonic major':
            case 'gb pentatonic major':
                PentatonicMajorScales.sendGbPentatonicMajorScale(sender, token);
                break;
            case 'g pentatonic major':
                PentatonicMajorScales.sendGPentatonicMajorScale(sender, token);
                break;

            case 'g# pentatonic major':
            case 'ab pentatonic major':
                PentatonicMajorScales.sendAbPentatonicMajorScale(sender, token);
                break;
            case 'a pentatonic major':
                PentatonicMajorScales.sendAPentatonicMajorScale(sender, token);
                break;
            case 'a# pentatonic major':
            case 'bb pentatonic major':
                PentatonicMajorScales.sendBbPentatonicMajorScale(sender, token);
                break;
            case 'b pentatonic major':
                PentatonicMajorScales.sendBPentatonicMajorScale(sender, token);
                break;

            //cases for choosing pentatonic minor scales
            case 'c pentatonic minor':
                PentatonicMinorScales.sendCPentatonicMinorScale(sender, token);
                break;
            case 'c# pentatonic minor':
            case 'db pentatonic minor':
                PentatonicMinorScales.sendDbPentatonicMinorScale(sender, token);
                break;
            case 'd pentatonic minor':
                PentatonicMinorScales.sendDPentatonicMinorScale(sender, token);
                break;
            case 'd# pentatonic minor':
            case 'eb pentatonic minor':
                PentatonicMinorScales.sendEbPentatonicMinorScale(sender, token);
                break;

            case 'e pentatonic minor':
                PentatonicMinorScales.sendEPentatonicMinorScale(sender, token);
                break;
            case 'f pentatonic minor':
                PentatonicMinorScales.sendFPentatonicMinorScale(sender, token);
                break;
            case 'f# pentatonic minor':
            case 'gb pentatonic minor':
                PentatonicMinorScales.sendGbPentatonicMinorScale(sender, token);
                break;
            case 'g pentatonic minor':
                PentatonicMinorScales.sendGPentatonicMinorScale(sender, token);
                break;

            case 'g# pentatonic minor':
            case 'ab pentatonic minor':
                PentatonicMinorScales.sendAbPentatonicMinorScale(sender, token);
                break;
            case 'a pentatonic minor':
                PentatonicMinorScales.sendAPentatonicMinorScale(sender, token);
                break;
            case 'a# pentatonic minor':
            case 'bb pentatonic minor':
                PentatonicMinorScales.sendBbPentatonicMinorScale(sender, token);
                break;
            case 'b pentatonic minor':
                PentatonicMinorScales.sendBPentatonicMinorScale(sender, token);
                break;

            case 'help':
                sendTextMessage(sender, "Try this! Type \"C major\" or \"A pentatonic minor\" to view that music scale OR you can navigate through the menu options!");
                break;

            default:
                sendTextMessage(sender, text);
                break;
              
        }
      //sendTextMessage(sender, "I don't know what " + text.slice(11,-1)+ " means. Sorry.")
      }
      // if (event.postback) {
      //   let text = JSON.stringify(event.postback.payload)
      //   switch (text.slice(1,-1).toLowerCase()){
      //     case 'hi':
      //       sendTextMessage(sender, "Hi! Welcome to Music Mentor Bot! Check out our main menu.");
      //       Setup.addPersistentMenu(sender, token);
      //       Navigation.sendMainMenu(sender, token);
      //       break;

      //     case 'mainmenu':
      //       sendTextMessage(sender, "This is Music Mentor Bot's main menu.");
      //       Navigation.sendMainMenu(sender, token);
      //       break;

      //     case 'help':
      //       Navigation.help(sender, token);
      //       break;

      //     case 'webapp':
      //       Navigation.webapp(sender, token);
      //       break;

      //     case 'startchatting':
      //       Navigation.startChatting(sender, token);
      //       break;

      //     case 'mainmenuscales':
      //       Navigation.mainMenuScales(sender, token);
      //       break;
      //     //payloads for mainMenuScales function
      //     case 'scales':
      //       Navigation.chooseScale(sender, token);
      //       break;

      //     case 'pentatonicscales':
      //       Navigation.choosePentatonicScale(sender, token);
      //       break;

      //     //payloads for chooseScale function
      //     case 'major':
      //       Navigation.chooseMajorScale(sender, token);
      //       break;

      //     case 'minor':
      //       Navigation.chooseMinorScale(sender, token);
      //       break;
      //     //payloads for choosePentatonicScale function
      //     case 'pentamajor':
      //       Navigation.choosePentatonicMajorScale(sender, token);
      //       break;

      //     case 'pentaminor':
      //       Navigation.choosePentatonicMinorScale(sender, token);
      //       break;
      //     //payloads for chooseMajorScale function
      //     case 'range1':
      //       ScaleMenus.sendMajorScale(sender, token);
      //       break;

      //     case 'range2':
      //       ScaleMenus.sendMajorScale2(sender, token);
      //       break;

      //     case 'range3':
      //       ScaleMenus.sendMajorScale3(sender, token);
      //       break;
      //     //payloads for chooseMinorScale function
      //     case 'rangeminor1':
      //       ScaleMenus.sendMinorScale(sender, token);
      //       break;

      //     case 'rangeminor2':
      //       ScaleMenus.sendMinorScale2(sender, token);
      //       break;

      //     case 'rangeminor3':
      //       ScaleMenus.sendMinorScale3(sender, token);
      //       break;
      //     //payloads for choosePentatonicMajor function
      //     case 'rangepentatonic1':
      //       ScaleMenus.sendPentatonicMajorScale(sender, token);
      //       break;

      //     case 'rangepentatonic2':
      //       ScaleMenus.sendPentatonicMajorScale2(sender, token);
      //       break;

      //     case 'rangepentatonic3':
      //       ScaleMenus.ScaleMenus.sendPentatonicMajorScale3(sender, token);
      //       break;
      //     //payloads for choosePentatonicMinor function
      //     case 'rangepentatonic4':
      //       ScaleMenus.sendPentatonicMinorScale(sender, token);
      //       break;

      //     case 'rangepentatonic5':
      //       ScaleMenus.sendPentatonicMinorScale2(sender, token);
      //       break;

      //     case 'rangepentatonic6':
      //       ScaleMenus.sendPentatonicMinorScale3(sender, token);
      //       break;
      //   }
      // //sendTextMessage(sender, text.slice(1,-1).toLowerCase())
      // }
    })
    res.status(200).end();
  })
}
})
