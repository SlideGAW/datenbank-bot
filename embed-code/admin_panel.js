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
          "label": `Alle Nachrichten löschen`,
          "custom_id": `row_0_search`,
          "disabled": false,
          "type": 2
        },
        {
          "style": 2,
          "label": `Setup Nachricht`,
          "custom_id": `row_1_button_2`,
          "disabled": false,
          "type": 2
        },
        {
          "style": 2,
          "label": `Kategorie hinzufügen`,
          "custom_id": `row_1_button_7`,
          "disabled": false,
          "type": 2
        }
      ]
    },
    {
      "type": 1,
      "components": [
        {
          "style": 2,
          "label": `Creator hinzufügen`,
          "custom_id": `row_2_button_1`,
          "disabled": false,
          "type": 2
        },
        {
          "style": 2,
          "label": `Link ersetzen`,
          "custom_id": `row_2_button_2`,
          "disabled": false,
          "type": 2
        },
        {
          "style": 2,
          "label": `Service an`,
          "custom_id": `row_2_button_4`,
          "disabled": false,
          "type": 2
        },
        {
          "style": 2,
          "label": `Service aus`,
          "custom_id": `row_2_button_5`,
          "disabled": false,
          "type": 2
        }
      ]
    }
  ],
  "embeds": [
    {
      "type": "rich",
      "title": `⚙️・Admin Panel`,
      "description": "",
      "color": 0xff8400,
      "fields": [
        {
          "name": "\u200B",
          "value": `Hier kannst du alle Einstellungen des Datenbank Bots ändern!\nKlicke einfach auf einen der unteren Knöpfe oder gebe die jeweiligen Befehle ein!\n`
        }
      ]
    }
  ]
});