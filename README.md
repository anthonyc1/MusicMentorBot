# Music Mentor Bot

A Facebook Messenger chatbot that interacts with users to help them learn the different scales in music theory. The scales supported in this app so far include major, minor, major pentatonic, and minor pentatonic scales.

## Say hi to Music Mentor!


## How I built it
The program is built entirely in Javascript and Node.js. This application also has package dependencies: body-parser, express, and request.    
The code for the application is hosted on Heroku.    
To allow Heroku to interact with the Facebook application:   
* I set up the webhook by subscribing my Facebook page for my application to the URL of the Heroku server.
* Next, I send a POST request from Terminal to allow the Facebook app to send messages.    
''''
curl -X POST "https://graph.facebook.com/v2.6/me/subscribed_apps?access_token=<PAGE_ACCESS_TOKEN>"
''''
