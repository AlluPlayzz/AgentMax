 exports.run = (client, message, args) => {
   let toSay = args.join(" ")
   if(!toSay) return message.reply("Provide arguments.") 
     message.channel.send(toSay)
   
 }