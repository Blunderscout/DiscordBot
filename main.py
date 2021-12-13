import discord
import os

class MyClient(discord.Client):
    channel = None

    async def on_ready(self):
        print('Logged on as {0}!'.format(self.user))

    async def on_message(self, message):
        print('Message from {0.author}: {0.content}'.format(message))
        if message.content.startswith("!"):
            command = message.content[1:]
            print(command)
            if command.startswith("ping"):
                await self.ping(message.author, message.channel)
    
    async def on_member_join(self, member):
        print(f'Member {member.name} joined guild: {member.guild}')
        general_channel = None
        for channel in member.guild.channels:
            if channel.name == "general":
                general_channel = channel
                break

        if general_channel:
            await general_channel.send(f"Welcome {member.name}!")

    
    async def ping(self, user, channel):
        await channel.send(f"Pong @ {user}")

intents = discord.Intents.default()
intents.members = True
client = MyClient(intents=intents)
client.run(os.environ.get("DISCORD_TOKEN"))