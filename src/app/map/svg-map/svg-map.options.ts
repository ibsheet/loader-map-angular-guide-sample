const createMapOptions = {
  "el": "mapDiv",
  "options": {
    "map": {
      "scale": 1.2,
      "shadow": false,
      "select": {
        "style": {
          "backgroundColor": "#13ACE2"
        },
        "tooltipFixed": true
      },
      "hover": {
        "style": {
          "backgroundColor": "#13ACE2"
        }
      },
      "tooltip": {
        "style": {
          "border": {
            "color": "#AAA"
          }
        }
      },
      "dataLabel": {
        "enable": false
      }
    },
    "style": {
      "backgroundColor": "#fff"
    }
  }
}

export { createMapOptions };