/**
* @preserve Copyright (c) 2018-2022 NN Solex, www.sublunar.space
* License MIT: http://www.opensource.org/licenses/MIT
*/

//Defines Calendar Objects and Methods
var module_lunarphase = {

  definitions: {
    core: true,
    name: "Phase",
    group: {
      id: "lunar",
      text: "Lunar"
    },
    actions: [
      [0],
      [
        {
          "id": "1",
          "action": "New Moon",
          "tags": "waning dark"
        },
        {
          "id": "9",
          "action": "Waning Moon",
          "tags": "waning"
        }
      ],
      [
        {
          "id": "2",
          "action": "Waxing Crescent Moon",
          "tags": "waxing crescent"
        },
        {
          "id": "10",
          "action": "Waxing Moon",
          "tags": "waxing"
        },
        {
          "id": "11",
          "action": "Crescent Moon",
          "tags": "crescent"
        }
      ],
      [
        {
          "id": "3",
          "action": "First Quarter Moon",
          "tags": "waxing quarter half"
        },
        {
          "id": "10",
          "action": "Waxing Moon",
          "tags": "waxing"
        },
        {
          "id": "13",
          "action": "Half Moon",
          "tags": "half"
        },
        {
          "id": "14",
          "action": "Quarter Moon",
          "tags": "quarter"
        }
      ],
      [
        {
          "id": "4",
          "action": "Waxing Gibbous Moon",
          "tags": "waxing gibbous"
        },
        {
          "id": "10",
          "action": "Waxing Moon",
          "tags": "waxing"
        },
        {
          "id": "12",
          "action": "Gibbous Moon",
          "tags": "gibbous"
        }
      ],
      [
        {
          "id": "5",
          "action": "Full Moon",
          "tags": "waxing full"
        },
        {
          "id": "10",
          "action": "Waxing Moon",
          "tags": "waxing"
        }
      ],
      [
        {
          "id": "6",
          "action": "Waning Gibbous Moon",
          "tags": "waning gibbous"
        },
        {
          "id": "9",
          "action": "Waning Moon",
          "tags": "waning"
        },
        {
          "id": "12",
          "action": "Gibbous Moon",
          "tags": "gibbous"
        }
      ],
      [
        {
          "id": "7",
          "action": "Last Quarter Moon",
          "tags": "waning quarter half"
        },
        {
          "id": "9",
          "action": "Waning Moon",
          "tags": "waning"
        },
        {
          "id": "13",
          "action": "Half Moon",
          "tags": "half"
        },
        {
          "id": "14",
          "action": "Quarter Moon",
          "tags": "quarter"
        }
      ],
      [
        {
          "id": "8",
          "action": "Waning Crescent Moon",
          "tags": "waning crescent"
        },
        {
          "id": "9",
          "action": "Waning Moon",
          "tags": "waning"
        },
        {
          "id": "11",
          "action": "Crescent Moon",
          "tags": "crescent"
        }
      ]
    ]
  },
  property: function(m) {
    return SL.Astro.Nomy.moonPhase(m.lunar);
  },
  calculate: function(definitions, property) {
    return definitions.actions[property];
  }
};

//Defines Calendar Objects and Methods
var module_lunarday = {

  definitions: {
    core: true,
    name: "Day",
    group: {
      id: "lunar",
      text: "Lunar"
    },
    actions: [
      [0],
      [
        {
          "id": "1",
          "action": "Lunar Day 1",
          "tags": ""
        }
      ],
      [
        {
          "id": "2",
          "action": "Lunar Day 2",
          "tags": ""
        }
      ],
      [
        {
          "id": "3",
          "action": "Lunar Day 3",
          "tags": ""
        }
      ],
      [
        {
          "id": "4",
          "action": "Lunar Day 4",
          "tags": ""
        }
      ],
      [
        {
          "id": "5",
          "action": "Lunar Day 5",
          "tags": ""
        }
      ],
      [
        {
          "id": "6",
          "action": "Lunar Day 6",
          "tags": ""
        }
      ],
      [
        {
          "id": "7",
          "action": "Lunar Day 7",
          "tags": ""
        }
      ],
      [
        {
          "id": "8",
          "action": "Lunar Day 8",
          "tags": ""
        }
      ],
      [
        {
          "id": "9",
          "action": "Lunar Day 9",
          "tags": ""
        }
      ],
      [
        {
          "id": "10",
          "action": "Lunar Day 10",
          "tags": ""
        }
      ],
      [
        {
          "id": "11",
          "action": "Lunar Day 11",
          "tags": ""
        }
      ],
      [
        {
          "id": "12",
          "action": "Lunar Day 12",
          "tags": ""
        }
      ],
      [
        {
          "id": "13",
          "action": "Lunar Day 13",
          "tags": ""
        }
      ],
      [
        {
          "id": "14",
          "action": "Lunar Day 14",
          "tags": ""
        }
      ],
      [
        {
          "id": "15",
          "action": "Lunar Day 15",
          "tags": ""
        }
      ],
      [
        {
          "id": "16",
          "action": "Lunar Day 16",
          "tags": ""
        }
      ],
      [
        {
          "id": "17",
          "action": "Lunar Day 17",
          "tags": ""
        }
      ],
      [
        {
          "id": "18",
          "action": "Lunar Day 18",
          "tags": ""
        }
      ],
      [
        {
          "id": "19",
          "action": "Lunar Day 19",
          "tags": ""
        }
      ],
      [
        {
          "id": "20",
          "action": "Lunar Day 20",
          "tags": ""
        }
      ],
      [
        {
          "id": "21",
          "action": "Lunar Day 21",
          "tags": ""
        }
      ],
      [
        {
          "id": "22",
          "action": "Lunar Day 22",
          "tags": ""
        }
      ],
      [
        {
          "id": "23",
          "action": "Lunar Day 23",
          "tags": ""
        }
      ],
      [
        {
          "id": "24",
          "action": "Lunar Day 24",
          "tags": ""
        }
      ],
      [
        {
          "id": "25",
          "action": "Lunar Day 25",
          "tags": ""
        }
      ],
      [
        {
          "id": "26",
          "action": "Lunar Day 26",
          "tags": ""
        }
      ],
      [
        {
          "id": "27",
          "action": "Lunar Day 27",
          "tags": ""
        }
      ],
      [
        {
          "id": "28",
          "action": "Lunar Day 28",
          "tags": ""
        }
      ],
      [
        {
          "id": "29",
          "action": "Lunar Day 29",
          "tags": ""
        }
      ],
      [
        {
          "id": "30",
          "action": "Lunar Day 30",
          "tags": ""
        }
      ]
    ]
  },
  property: function(m) {
    return m.lunar.day;
  },
  calculate: function(definitions, property) {
    return definitions.actions[property];
  }
};
