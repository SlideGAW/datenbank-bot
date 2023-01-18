const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.2'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": "",
  "tts": false,
  "components": [
    {
      "type": 1,
      "components": [
        {
          "style": 2,
          "label": `🔍・Suchen`,
          "custom_id": `row_0_button_0`,
          "disabled": false,
          "type": 2
        }
      ]
    }
  ],
  "embeds": [
    {
      "type": "rich",
      "title": `🏠・Hauptmenü`,
      "description": `Hier kannst du mithilfe eines Bots, in einer Datenbank von Creatorn aus den verschiedensten Sozialen Medien suchen und von diesen die Links zu deren Seiten bekommen!\n\nKlicke einfach auf den unteren Knopf oder gebe den Befehl /suchen ein, um mit der Suche zu beginnen!`,
      "color": 0xff8400
    }
  ]
});
