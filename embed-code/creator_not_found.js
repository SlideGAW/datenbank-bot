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
          "label": `✅・Ja`,
          "custom_id": `row_1_yes`,
          "disabled": false,
          "type": 2
        },
        {
          "style": 2,
          "label": `❌・Nein`,
          "custom_id": `row_1_no`,
          "disabled": false,
          "type": 2
        }
      ]
    }
  ],
  "embeds": [
    {
      "type": "rich",
      "title": `⚠️・Datenbank`,
      "description": "",
      "color": 0xff8400,
      "fields": [
        {
          "name": "\u200B",
          "value": `Dieser Content Creator befindet sich nicht in der Datenbank!\nMöchtest du einen Vorschlag an uns senden, damit dieser hinzugefügt wird?`
        }
      ]
    }
  ]
});