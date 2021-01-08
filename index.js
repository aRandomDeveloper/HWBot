
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const dotenv = require('dotenv');
const { strict } = require('assert');
const fPath = "./"
//one time declare files
const fileFunc = require(fPath + "fileFunc.js");

var botData = JSON.parse(fs.readFileSync("./main.json", "utf-8", function(e){
   console.log("error" + e.toString("utf-8"))
    
    
    
    
}))
console.log(`botdata = ${botData}`)
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
var betaTesting = false;
//--------------------------------------------------------------------------------------------
var PREFIX;
var token;
if(betaTesting === false){
     PREFIX = "ev!";
    token = process.env.TOKEN;
    console.log("alpha login")
} else {
   PREFIX = "beta";
   token = process.env.BETA_TOKEN;
   console.log("beta login")
}


client.on('ready', function(){
   
    console.log("Logged in!")
    client.user.setActivity("Type " + PREFIX + " tutorial to learn how to set up an event!", { type: 'PLAYING' })
    
 
 
});








/* ----------------------END OF ADMIN ---------------------*/

    var message;

   var value;
        
      client.on('message', function (message) {
        
        let serverPath = "../data/server" + message.guild.id + ".json";
          try{
       
        var serverData = JSON.parse(fs.readFileSync(serverPath, "utf-8"))
          var serverPrefix = serverData.PREFIX;
        } catch (e){
           var serverPrefix = PREFIX; 
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
         
          
        console.log(command)
        switch(command) {
            
                case "reset":
                case "initialise":
                case "init":
                    try{
                        
                if(message.member.roles.cache.find(r => r.id === serverData.modrole)){
                    console.log("successful")
                    message.reply("Are you sure you want to reset your server data? Type 'yes' to confirm!")
                    message.channel.awaitMessages(m => m.author.id == message.author.id,
                            {max: 1, time: 15000}).then(function(collected) {
                                    // only accept messages by the user who sent the command
                                    // accept only 1 message, and return the promise after 30000ms = 30s
                                   
                                    // first (and, in this case, only) message of the collection
                                    
                                   if(collected.first().content.match(/yes/gi) ){
                                       var template = {};
                                       template.modrole = message.guild.roles.everyone.id;
                                       fs.writeFile(serverPath, JSON.stringify(template), function(e){
                                           if(e != undefined){
                                               console.log(e)
                                           }
                                       })
                                      
                                   } else {
                                       message.channel.send("Operation Canceled.")
                                   }
                                   message.channel.send("Now set a lockout password! This will help you to access the bot even after you get locked out. \n \n Keep your password somewhere safe. \n Type your password now!")
                                   message.channel.awaitMessages(m => m.author.id == message.author.id,
                                    {max: 1, time: 15000}).then(function(collected) {
                                            // only accept messages by the user who sent the command
                                            // accept only 1 message, and return the promise after 30000ms = 30s
                                           
                                            // first (and, in this case, only) message of the collection
                                            
                                           var lockout = collected.first().content;
                                           serverData.lockout = lockout;
                                           fs.writeFile(serverPath, JSON.stringify(serverData), function(e){
                                               console.log(e)
                                           })
                                           message.channel.send("Done!")
                                                
                                            })  
                                    })
               
                            } else {message.channel.send("Don't access an admin command, you clever little thing you.")}}
                            catch (e){
                                
                                message.reply("Thanks for choosing Eventor as your preferred event hosting bot!\nTo confirm that you want to create a server account, type **confirm**!")
                                message.channel.awaitMessages(m => m.author.id == message.author.id,
                                        {max: 1, time: 15000}).then(function(collected) {
                                                // only accept messages by the user who sent the command
                                                // accept only 1 message, and return the promise after 30000ms = 30s
                                               
                                                // first (and, in this case, only) message of the collection
                                                
                                               if(collected.first().content.match(/confirm/gi) ){
                                                   var template = {};
                                                   template.modrole = message.guild.roles.everyone.id;
                                                   fs.writeFile(serverPath, JSON.stringify(template), function(e){
                                                       if(e != undefined){
                                                           console.log(e)
                                                       }
                                                   })
                                                   
                                               } else {
                                                   message.channel.send("Account Initiation Canceled.")
                                               }
                                               message.channel.send("Now set a lockout password! This will help you to access the bot even after you get locked out. \n \n Keep your password somewhere safe. \n Type your password now!")
                                               message.channel.awaitMessages(m => m.author.id == message.author.id,
                                                {max: 1, time: 15000}).then(function(collected) {
                                                        // only accept messages by the user who sent the command
                                                        // accept only 1 message, and return the promise after 30000ms = 30s
                                                       
                                                        // first (and, in this case, only) message of the collection
                                                        
                                                       var lockout = collected.first().content;
                                                       var newserverData;
                                                       fs.readFile(serverPath, "utf-8", function(e, data){
                                                           console.log(e)
                                                           console.log(data)
                                                           newserverData = JSON.parse(data);
                                                           console.log("executing" + newserverData)
                                                       newserverData.lockout = lockout;
                                                       fs.writeFile(serverPath, JSON.stringify(newserverData), function(e){
                                                           console.log(e)
                                                       })
                                                       message.channel.send("Done!")
                                                       })
                                                       
                                                            
                                                        })  
                                                })
                            }
                  break;
                  case "intro":
                      message.channel.send("Hi, I am Eventor, a tool for hosting serverwide events!")
                      break;
                case "avatar":
                case "profile":
                    if(message.author.id == process.env.OWNERID){
                              message.reply("Send the link to the picture now!")
                            var filter = m => m.content.includes('.') && m.author.id === message.author.id;
                            var collector = message.channel.createMessageCollector(filter, { time: 10000 });
                            
                            collector.on('collect', function(m) {
                                
                                client.user.setAvatar(m.content)
                                console.log(m.content)
                                botData.avatar = m.content;
                                fileFunc.saveData("./main.json", botData)
                            });
                            
                            collector.on('end', collected => {
                                
                                message.channel.send("Done!")
                            });
                            
                        }       
                break;
                case "hwgay":
                    var t1 = 0;
                   
                    message.channel.send("<@781064004122443806> is gay")
                    while(t1 < 5){
                        
                        message.channel.send("<@781064004122443806> is gay")
                    }
                    break;
                case "prefix":
                   
                    if(message.member.roles.cache.find(r => r.id === serverData.modrole)){
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

                        } else {message.channel.send("Good try, get permission next time!")}
                    break;
                    case "help":
                    case "assistance":
                        case "sendhelp":
                        var helpEmbed = new Discord.MessageEmbed()
                        .setColor('#0099ff')
                        
                
                       .setAuthor("Eventor")
                .setDescription("All the commands")
                .setThumbnail(botData.avatar)
                .addFields(
                    { name: 'Help: ', value: "Are you kidding me? Aliases: 'sendhelp', 'assistance'" },
                    { name: 'Reset: ', value: "Resets the server data. " },
                    { name: 'Initialise ', value: "Initialises the bot and sets modrole, allowed role etc."},
                )
                
            
                .setTimestamp()
                
                .setFooter("Eventor", botData.avatar);
                message.channel.send(helpEmbed)
                break;
                case "modrole":
                case "access":
                    if(message.member.roles.cache.find(r => r.id === serverData.modrole)){
                    function init(param) {
                        if(param != 1){
                    message.reply("Ping the modrole or paste the id now!")}
                    else {message.reply("Invalid role. Try again. Type exit to end.")}
                    
                    message.channel.awaitMessages(m => m.author.id == message.author.id,
                            {max: 1, time: 15000}).then(function(collected) {
                                
                                console.log(collected.first().content)
                                if(/Exit|e(?:Xit|x(?:it|I))/.test(collected.first().content)){
                                    message.channel.send("Alright, we'll stop for now")
                                    return false;
                                }
                                    // only accept messages by the user who sent the command
                                    // accept only 1 message, and return the promise after 30000ms = 30s
                                   
                                    // first (and, in this case, only) message of the collection
                                    try{
                                    var data1 = fs.readFileSync(serverPath, function(e){
                                        
                                    })} catch (e){
                                        console.log(e)
                                        message.channel.send("Error encountered. Try running " + PREFIX + " reset.")
                                        return "{}";
                                    }
                                    
                                    var serverData = JSON.parse(data1);
                                    var filtered;
                                    var mention = collected.first().content;
                                    if (mention.startsWith('<@&') && mention.endsWith('>')) {
                                        mention = mention.slice(3, -1);
                                
                                        if (mention.startsWith('!')) {
                                            mention = mention.slice(1);
                                        }
                                
                                        
                                    }
                                    try{
                                    var modrole = message.guild.roles.cache.find(role => role.id === mention).id;}
                                    catch(e){init(1)
                                    return false;
                                            }
                                   switch(modrole){
                                       case undefined: 
                                       init(1);
                                       break;
                                       default:
                                           serverData.modrole = modrole;
                                           fs.writeFile(serverPath, JSON.stringify(serverData), function(e){
                                               console.log(e)
                                           })
                                        message.channel.send("Added as modrole!")
                                                
                                            }
                                        })}
                                init();
                                    } else {message.channel.send("And you thought you could set the modrole! XD \n \n >If this is a mistake, try running " + PREFIX + " lockout.")}
                                    break;
                                    case "tutorial":
                                        switch(commandArgs){
                                            case undefined:
                                        var tutorialEmbed = new Discord.MessageEmbed();
                                        tutorialEmbed.setColor("#0099ff")
                                        tutorialEmbed.setTitle("Welcome!")
                                        tutorialEmbed.setFooter("Created by Korvex#2434")
                                        tutorialEmbed.setDescription("Thank you for choosing Eventor as your preferred event hsoting bot! \n Lets bring you on a tour of the bot's powerful commands and how to use them! \n You'll be done in no time at all.")
                                        tutorialEmbed.addFields(
                                            {name: "First Step:" , value: "Run **" + PREFIX + " initialise** to create your server data file in our servers! \n You can also run this command to reset all your server data.", inline:true},
                                            {name: "Second Step:" , value: "If you want a specific prefix for your bot, run **" + PREFIX + " prefix ** to set it! \n You can use the bot's default prefix at any time, should you forget your prefix.", inline:true },
                                            {name: "Third Step:" , value: "Recommended: Use **" + PREFIX + " modrole** to control who can use this bot. \n This is especially helpful, since the default modrole is set to everyone. \n Change it to prevent unauthorised use of the bot.", inline:true}
                                            )
                                            message.channel.send(tutorialEmbed)
                                        break;
                                        case "1":
                                            break;
                                        }
                                        break;
                                        case "lockout":
                                            message.reply("Enter your lockout password!")
                                            message.channel.awaitMessages(m => m.author.id == message.author.id,
                                                {max: 1, time: 15000}).then(function(collected) {
                                                        // only accept messages by the user who sent the command
                                                        // accept only 1 message, and return the promise after 30000ms = 30s
                                                       
                                                        // first (and, in this case, only) message of the collection
                                                        
                                                       if(collected.first().content.match(serverData.lockout) ){
                                                          serverData.modrole = message.guild.roles.everyone.id;
                                                          fs.writeFile(serverPath, JSON.stringify(serverData), function(e){
                                                              console.log(e)
                                                          })
                                                           message.channel.send("Reset the modrole!")  
                                                       } else {
                                                           message.channel.send("Wrong password. Run this command and try again.")
                                                       }
                            
                                                            
                                                        })
                                            break;
                                            case "reboot":
                                                if(message.author.id = process.env.OWNERID){
                                                    client.user.setActivity("Rebooting...", { type: 'PLAYING' })
                                                    console.log("Booting...")
                                                    message.channel.send("Rebooting...")
                                                    client.destroy;
                                                   
                                                    setTimeout(function(){
                                                        client.login(token)
                                                        message.channel.send("Done!")
                                                         client.user.setActivity("Type " + PREFIX + " tutorial to learn how to set up an event!", { type: 'PLAYING' })
                                                    
                                                    }, 1500)
                                                }
                                                break;
                default: 
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

client.login(token)
