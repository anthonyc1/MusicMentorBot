# Music Mentor Bot

A Facebook Messenger chatbot that interacts with users to help them learn music theory.    
So far, it supports a menu system that shows users the different scales in music. The scales supported in this app so far include major, minor, major pentatonic, and minor pentatonic scales.    
It also include a rudimentary chat system that includes responding to user greetings, sharing tidbits about music, and even telling a music joke!    
This project is still in development.    

## Checklist for Music Mentor Bot

- [x] Persistent Menu
- [x] Get Started Button
- [x] Generic Templates
- [x] Quick Replies
- [ ] Implementation of Wit.ai
- [ ] Web Scraping
- [ ] Incorporation of rich media into chat
- [ ] App submission to Facebook for approval

## Say hi to Music Mentor!
Drop by to our Facebook page <a href="https://www.facebook.com/Music-Mentor-237936159963445/" target="_blank">here</a>.    
Feel free to like or follow our page if you enjoyed chatting with our chatbot!    
(Please note, the app hasn't been submitted for approval by Facebook yet. But if you would like to test out the bot, feel free to send a message to our page saying so!)

##Screenshot of Conversation
<img src="https://github.com/anthonyc1/music-mentor-bot/blob/master/assets/music-mentor-bot-convo.jpg?raw=true" width = 290px height = 500px>

## How I built it
This application is built entirely in Javascript and Node.js, with several package dependencies including body-parser, express, and request. The backend code for the application is deployed on Heroku.    
To allow Heroku to interact with the Facebook application:   
* set up the webhook of the Facebook app using the URL of the Heroku server.
* submit a POST request from Terminal to allow the Facebook app to send messages.    
````
curl -X POST "https://graph.facebook.com/v2.6/me/subscribed_apps?access_token=<PAGE_ACCESS_TOKEN>"
````    
:musical_keyboard: The app's profile picture and all the keyboard visuals in this application were created on Vectr.
