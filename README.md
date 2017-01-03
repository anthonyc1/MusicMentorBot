# Music Mentor Bot

A Facebook Messenger chatbot that interacts with users to help them learn the different scales in music theory. The scales supported in this app so far include major, minor, major pentatonic, and minor pentatonic scales.

## Say hi to Music Mentor!
Drop by to our Facebook page at https://www.facebook.com/Music-Mentor-237936159963445/    
Feel free to like or follow if you enjoyed chatting with our chatbot!

##Screenshot of Conversation
<img src="">

## How I built it
The program is built entirely in Javascript and Node.js. This application also has package dependencies: body-parser, express, and request. The code for the application is hosted on Heroku.    
To allow Heroku to interact with the Facebook application:   
* set up the webhook of the application using the URL of the Heroku server.
* submit a POST request from Terminal to allow the Facebook app to send messages.    
````
curl -X POST "https://graph.facebook.com/v2.6/me/subscribed_apps?access_token=<PAGE_ACCESS_TOKEN>"
````    
:musical_keyboard: The application profile picture and keyboard visuals in this application was created on Vectr.
