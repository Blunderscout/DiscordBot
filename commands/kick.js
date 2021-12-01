module.exports = 
{
    name: 'kick',
    description: 'Tag a member and kick them',
    execute(message)
    {
        if (message.members.hasPermission("Kick_Members")) 
        {
            try 
            {
                message.members.mentions.first().kick();
            } 
            catch 
            {
                message.reply('You do not have permisions to kick ' + message.members.mentions.first());
            }
        } else 
        {
            message.reply('You do not have permisions to kick ' + message.members.mentions.first());
        }


    }





}