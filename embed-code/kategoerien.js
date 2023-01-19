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
          "custom_id": `row_0_select_0`,
          "placeholder": `Kategorien ・Deutsch・🇩🇪`,
          "options": [
            {
              "label": `YouTube`,
              "value": `youtube-german`,
              "default": false
            },
            {
              "label": `Twitch`,
              "value": `twitch-german`,
              "default": false
            },
            {
              "label": `Twitter`,
              "value": `twitter-german`,
              "default": false
            }
          ],
          "min_values": 1,
          "max_values": 1,
          "type": 3
        }
      ]
    },
    {
      "type": 1,
      "components": [
        {
          "custom_id": `row_2_select_0`,
          "placeholder": `Kategorien ・International・🌐`,
          "options": [
            {
              "label": `YouTube`,
              "value": `youtube-international`,
              "default": false
            },
            {
              "label": `Twitch`,
              "value": `twitch-international`,
              "default": false
            },
            {
              "label": `Twitter`,
              "value": `twitter-international`,
              "default": false
            }
          ],
          "min_values": 1,
          "max_values": 1,
          "type": 3
        }
      ]
    },
    {
      "type": 1,
      "components": [
        {
          "style": 2,
          "label": `🏠・Hauptmenü`,
          "custom_id": `row_3_home`,
          "disabled": false,
          "type": 2
        }
      ]
    }
  ],
  "embeds": [
    {
      "type": "rich",
      "title": `📁・Kategorien`,
      "description": "",
      "color": 0xff8400,
      "fields": [
        {
          "name": "\u200B",
          "value": `Wähle mit dem unteren Menü eine Kategorie aus, in der du suchen möchtest oder gebe den Befehl /kategorie ein.`
        }
      ]
    }
  ]
});
