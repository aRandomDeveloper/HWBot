const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const dotenv = require('dotenv');

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
if(betaTesting === true){
     PREFIX = "hw2";
    token = process.env.BETA_TOKEN;
} else {
   PREFIX = "hw";
    token = process.env.TOKEN;
}


client.on('ready', function(){
   
    console.log("Logged in!")
    client.user.setActivity(PREFIX + ' help to suffer', { type: 'PLAYING' })
    
 
 
});








/* ----------------------END OF ADMIN ---------------------*/

    var message;

   var value;
         
      client.on('message', function (message) {
        
          
    var msg = message.content.toLowerCase();
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
          let path = "data/dataForIdUser"+ sender + ".txt";
          
        
          /* ---------------------------------traansferred money-----------------------------------*/
          
                       /* other bot command */
            
    if (msg.startsWith(PREFIX)) {
        console.log(command)
        switch(command) {
            case "init":
                var serverPath = "server" + message.guild.id;
                try {
                    if (!fs.existsSync()) {
                      fs.mkdirSync(folderName)
                      fs.rmdir(folderName, { recursive: true })
                    }
                  } catch (err) {
                    console.log("Folder does not exist")
                    fs.mkdirSync(folderName)
                  }
                  case "intro":
                      message.channel.send("Hi, i am HWBot, another tool for increasing the powers of a totalitarian regime!")
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
                            
                             
                
                          }


                
            
        }
    }
    )

  /* ---------------------------------------------------function lists -------------------------------------------------------------------------
  -------------------------------------------------fs functions ------------------------------------------------------------
*/


   
  

      /* end of fs functions */
          
          
          
 
function gay(path){if(fileFunc.getInfo(path, "donator") == 1){
                             return "Awesome, you're a donator! Thanks for supporting us!"
                             } else {
                                 return "*insert sarcastic reply because my creator hasnt added one*"
                             }}

    /*------------------------END OF FUNCTION LISTS---------------------------------*/
 
//const Firebase = require("/__/firebase/8.0.0/firebase-app.js");

//const FirebaseAnalytics = require("/__/firebase/8.0.0/firebase-analytics.js");


//const FirebaseInit = require("/__/firebase/init.js");
// Log our bot in using the token from https://discord.com/developers/applications

client.login(process.env.TOKEN)
