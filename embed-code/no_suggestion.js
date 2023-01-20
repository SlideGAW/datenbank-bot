const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.2'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": "",
  "tts": false,
  "embeds": [
    {
      "type": "rich",
      "title": `⚠️・Datenbank`,
      "description": "",
      "color": 0xff8400,
      "fields": [
        {
          "name": "\u200B",
          "value": `Du kannst entweder mit dem Hauptmenü weitersuchen oder du verwendest den Befehl \n/datenbank {kategorie} {deutsch, international} {creator}`
        }
      ]
    }
  ]
});