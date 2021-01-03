const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const dotenv = require('dotenv');
const JSONIFIER = require("jsonfile");
const fPath = "./"
//one time declare files
const fileFunc = require(fPath + "fileFunc.js")



   /* var uniquei657575 = 0;
    while(uniquei657575 < requiredF.length){
        var name = requiredF[uniquei657575];
        console.log(requiredF[uniquei657575])
        console.log("const " + requiredF[uniquei657575] + " = " + "require(fPath + requiredF[" + uniquei657575 + "]);")
        eval("const " + requiredF[uniquei657575] + " = " + "require(fPath + requiredF[" + uniquei657575 + "])")
        console.log()
        
        uniquei657575++;
    }
*/



dotenv.config();
//--------------------------------ONE TIME TOGGLE FOR BETA------------------------------------
var betaTesting = true;
//--------------------------------------------------------------------------------------------
var PREFIX;
var token;
if(betaTesting === false){
     PREFIX = "TEIF";
    token = process.env.TOKEN;
    console.log("alpha login")
} else {
   PREFIX = "hw2";
   token = process.env.BETA_TOKEN;
   console.log("beta login")
}


client.on('ready', function(){
   
    console.log("Logged in!")
    client.user.setActivity("Want to feel pain? Type " + PREFIX, { type: 'PLAYING' })
    
 
 
});








/* ----------------------END OF ADMIN ---------------------*/

    var message;

   var value;
         
      client.on('message', function (message) {
        let serverPath = "./data/server" + message.guild.id + ".json";
          try{
       
        let serverData = JSON.parse(fs.readFileSync(serverPath, "utf-8"))
          
          serverPrefix = serverData.PREFIX;
        } catch (e){
            
        }
    
          
        
         
          
                       /* other bot command */
                       var msg = message.content.toLowerCase();  
    if (msg.startsWith(PREFIX) || msg.startsWith(serverPrefix)) {
     
         var allParams = msg.split(" ");
            var command = allParams[1];
    
       // var commandArgs = msg.substr(msg.indexOf(" "), msg.lastIndexOf(" ")).trim();
       // var commandVals = msg.substr(msg.lastIndexOf(" ")).trim();
          var commandArgs = allParams[2];
         var taggedUser = message.mentions.users.first();
          
       
          var sender= message.author.id;
          exports.taggedUser = taggedUser;
          exports.sender = sender;
          //command specific values
         var transferring = false;
          
        console.log(command)
        switch(command) {
            case "init":
               fs.writeFile(serverPath, JSON.stringify({}), function(e){
                  
                   
               })
               message.channel.send("Done!")
                  break;
                  case "intro":
                      message.channel.send("Hi, I am The Earth Is Flat Bot, another tool for increasing the powers of a totalitarian regime!")
                      break;
                case "avatar":
                case "profile":
                              message.reply("Send the link to the picture now!")
                            var filter = m => m.content.includes('.') && m.author.id === message.author.id;
                            var collector = message.channel.createMessageCollector(filter, { time: 10000 });
                            
                            collector.on('collect', function(m) {
                                console.log(`Collected ${m.content}`);
                                client.user.setAvatar(m.content)
                            });
                            
                            collector.on('end', collected => {
                                console.log(`Collected ${collected.size} items`);
                                message.channel.send("Done!")
                            });
                            
                             
                break;
                case "hwgay":
                    var t1 = 0;
                   
                    message.channel.send("<@781064004122443806> is gay")
                    while(t1 < 5){
                        
                        message.channel.send("<@781064004122443806> is gay")
                    }
                    break;
                case "prefix":
                   

            // First argument is a filter function - which is made of conditions
            // m is a 'Message' object
            message.reply("Type the prefix you want now!")
            message.channel.awaitMessages(m => m.author.id == message.author.id,
                    {max: 1, time: 15000}).then(function(collected) {
                            // only accept messages by the user who sent the command
                            // accept only 1 message, and return the promise after 30000ms = 30s
                           
                            // first (and, in this case, only) message of the collection
                            var data1 = fs.readFileSync(serverPath, "utf-8")
                            
                            var serverData = JSON.parse(data1);
                            serverData.PREFIX = collected.first().content.toLowerCase();
                           
                            fs.writeFile(serverPath, JSON.stringify(serverData), function (err) {
                                if (err) {console.log(err); message.channel.send("Error saving your prefix.")} else {message.channel.send("Done!")}
                              })

                                   
                            })

                    
                    break;
                default: message.reply("Stop calling me for no reason you idiot")
                          }


                
            
        }
    }
    )

  /* ---------------------------------------------------function lists -------------------------------------------------------------------------
*/

function mentionUser(mention){
    var returner = "<@" + mention + ">";
    return returner;
}
    /*------------------------END OF FUNCTION LISTS---------------------------------*/
 
//const Firebase = require("/__/firebase/8.0.0/firebase-app.js");

//const FirebaseAnalytics = require("/__/firebase/8.0.0/firebase-analytics.js");


//const FirebaseInit = require("/__/firebase/init.js");
// Log our bot in using the token from https://discord.com/developers/applications

client.login(process.env.TOKEN)
