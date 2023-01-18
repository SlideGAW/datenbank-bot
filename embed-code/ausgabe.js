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
          "label": `🏠・Hauptmenü`,
          "custom_id": `row_1_home`,
          "disabled": false,
          "type": 2
        },
        {
          "style": 2,
          "label": `🔍・Anderen Creator wählen`,
          "custom_id": `row_1_creator`,
          "disabled": false,
          "type": 2
        },
        {
          "style": 2,
          "label": `🔍・Andere Kategorie wählen`,
          "custom_id": `row_1_categories`,
          "disabled": false,
          "type": 2
        }
      ]
    }
  ],
  "embeds": [
    {
      "type": "rich",
      "title": `Datenbank`,
      "description": "",
      "color": 0xff8400,
      "fields": [
        {
          "name": "\u200B",
          "value": `📍・Du hast den Creator {creator} in der Kategorie {kategorie} ausgewählt!\n\n🔗・Hier befindet sich der Link: {link}`
        }
      ]
    }
  ]
});