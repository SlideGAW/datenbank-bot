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
          "placeholder": `Content Creator`,
          "options": [
            {
              "label": `Paluten`,
              "value": `paluten`,
              "default": false
            },
            {
              "label": `GermanLetsPlay`,
              "value": `germanletsplay`,
              "default": false
            },
            {
              "label": `Gronkh`,
              "value": `gronkh`,
              "default": false
            },
            {
              "label": `Pietsmiet`,
              "value": `pietsmiet`,
              "default": false
            },
            {
              "label": `Kurzgesagt`,
              "value": `kurzgesagt`,
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
          "custom_id": `row_2_home`,
          "disabled": false,
          "type": 2
        },
        {
          "style": 2,
          "label": `🔍・Andere Kategorie wählen`,
          "custom_id": `row_2_category`,
          "disabled": false,
          "type": 2
        }
      ]
    }
  ],
  "embeds": [
    {
      "type": "rich",
      "title": `📄・Content Creator`,
      "description": "",
      "color": 0xff8400,
      "fields": [
        {
          "name": "\u200B",
          "value": `Wähle nun mit dem unteren Menü einen Content Creator aus, von dem du den Inhalt haben möchtest oder gebe den Befehl /creator ein.`
        }
      ]
    }
  ]
});
