/**
* @preserve Copyright (c) 2018-2022 NN Solex, www.sublunar.space
* License MIT: http://www.opensource.org/licenses/MIT
*/

//Defines Calendar Objects and Methods
var module_pgm_lsign = {

  definitions: {
    name: "Lunar Sign",
    group: {
      id: "pgm",
      text: "PGM",
      info: "true"
    },
    actions: [
      [
        {
          "id": "1",
          "action": "fire divination or love charm (VII.284ff)",
          "tags": "divination love"
        },
        {
          "id": "21",
          "action": "Oracle statue of Hermes (V.370ff)",
          "tags": "divination animation"
        }
      ],
      [
        {
          "id": "2",
          "action": "Incantation to a lamp (VII.284ff)",
          "tags": "divination"
        },
        {
          "id": "22",
          "action": "Ring for success, favour and victory (animation) (XII.270ff)",
          "tags": "animation success"
        }
      ],
      [
        {
          "id": "3",
          "action": "Spell for winning favour (VII.284ff)",
          "tags": "luck"
        },
        {
          "id": "13",
          "action": "Perform spells of binding (III.275ff)",
          "tags": "binding harm"
        }
      ],
      [
        {
          "id": "4",
          "action": "Making Phylacteries (VII.284ff)",
          "tags": "protection"
        },
        {
          "id": "14",
          "action": "Perform spells of reconciliation, air divination (III.275ff)",
          "tags": "divination friendship reconciliation"
        }
      ],
      [
        {
          "id": "5",
          "action": "Rings or binding spells (VII.284ff)",
          "tags": "binding harm protection"
        },
        {
          "id": "15",
          "action": "Making an amulet against gout (xiv.1003ff)",
          "tags": "healing"
        },
        {
          "id": "21",
          "action": "Oracle statue of Hermes (V.370ff)",
          "tags": "divination animation"
        }
      ],
      [
        {
          "id": "6",
          "action": "Everything is rendered obtainable (VII.284ff)",
          "tags": "anything"
        },
        {
          "id": "16",
          "action": "Anything is obtainable, bowl divination, as you wish (III.275ff)",
          "tags": "anything divination"
        },
        {
          "id": "21",
          "action": "Oracle statue of Hermes (V.370ff)",
          "tags": "divination animation"
        },
        {
          "id": "22",
          "action": "Ring for success, favour and victory (animation) (XII.270ff)",
          "tags": "animation success"
        }
      ],
      [
        {
          "id": "7",
          "action": "Necromancy (VII.284ff)",
          "tags": "necromancy"
        },
        {
          "id": "17",
          "action": "Perform invocation... spell of release... necromancy (III.275ff)",
          "tags": "invocation necromancy release"
        }
      ],
      [
        {
          "id": "8",
          "action": "Anything inflicting evil (VII.284ff)",
          "tags": "harm war"
        },
        {
          "id": "22",
          "action": "Ring for success, favour and victory (animation) (XII.270ff)",
          "tags": "animation success"
        },
        {
          "id": "23",
          "action": "send a star ... down (xiv.1180f)",
          "tags": ""
        }
      ],
      [
        {
          "id": "9",
          "action": "Invocations and incantations to the Sun and the Moon (VII.284ff)",
          "tags": "prayer invocation"
        },
        {
          "id": "18",
          "action": "Conduct business (III.275ff)",
          "tags": "business"
        },
        {
          "id": "21",
          "action": "Oracle statue of Hermes (V.370ff)",
          "tags": "divination animation"
        }
      ],
      [
        {
          "id": "10",
          "action": "Say whatever you wish for best results (VII.284ff)",
          "tags": "anything"
        },
        {
          "id": "19",
          "action": "Do what is appropriate (III.275ff)",
          "tags": "anything"
        }
      ],
      [
        {
          "id": "11",
          "action": "For a love charm (VII.284ff)",
          "tags": "love"
        },
        {
          "id": "22",
          "action": "Ring for success, favour and victory (animation) (XII.270ff)",
          "tags": "animation success"
        }
      ],
      [
        {
          "id": "12",
          "action": "For foreknowledge (VII.284ff)",
          "tags": "divination"
        },
        {
          "id": "20",
          "action": "OIÔ rite... or love charm (III.275ff)",
          "tags": "love"
        }
      ]
    ]
  },
  property: function(m) {
    return SL.Astro.Logy.getZodiac(m.ephemeris.moon.deg).sign;
  },
  calculate: function(definitions, property) {
    return definitions.actions[property-1];
  }
};

//Defines Calendar Objects and Methods
var module_pgm_civildate = {

  definitions: {
    name: "Egyptian Civil Date + Unlucky Days",
    description: "Calculation of the date according to the old 365 days Egyptian Civil Calendar. It was reformed to a 365.25 day calendar by Ptolemy III. and banned by Augustus but continuously used in secret by mages and astrologers until the 6th century. The unlucky days of PGM VII.272ff. are applied to this date.",
    group: {
      id: "pgm",
      text: "PGM",
      info: "true"
    },
    actions: [
        [
          {
            "id": 1,
            "action": "1 Thoth / Akhet I",
            "tags": "1 thoth akhet1",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 2,
            "action": "2 Thoth / Akhet I",
            "tags": "2 thoth akhet1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 3,
            "action": "3 Thoth / Akhet I",
            "tags": "3 thoth akhet1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 4,
            "action": "4 Thoth / Akhet I",
            "tags": "4 thoth akhet1",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 5,
            "action": "5 Thoth / Akhet I",
            "tags": "5 thoth akhet1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 6,
            "action": "6 Thoth / Akhet I",
            "tags": "6 thoth akhet1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 7,
            "action": "7 Thoth / Akhet I",
            "tags": "7 thoth akhet1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 8,
            "action": "8 Thoth / Akhet I",
            "tags": "8 thoth akhet1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 9,
            "action": "9 Thoth / Akhet I",
            "tags": "9 thoth akhet1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 10,
            "action": "10 Thoth / Akhet I",
            "tags": "10 thoth akhet1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 11,
            "action": "11 Thoth / Akhet I",
            "tags": "11 thoth akhet1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 12,
            "action": "12 Thoth / Akhet I",
            "tags": "12 thoth akhet1",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 13,
            "action": "13 Thoth / Akhet I",
            "tags": "13 thoth akhet1",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 14,
            "action": "14 Thoth / Akhet I",
            "tags": "14 thoth akhet1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 15,
            "action": "15 Thoth / Akhet I",
            "tags": "15 thoth akhet1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 16,
            "action": "16 Thoth / Akhet I",
            "tags": "16 thoth akhet1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 17,
            "action": "17 Thoth / Akhet I",
            "tags": "17 thoth akhet1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 18,
            "action": "18 Thoth / Akhet I",
            "tags": "18 thoth akhet1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 19,
            "action": "19 Thoth / Akhet I",
            "tags": "19 thoth akhet1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 20,
            "action": "20 Thoth / Akhet I",
            "tags": "20 thoth akhet1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 21,
            "action": "21 Thoth / Akhet I",
            "tags": "21 thoth akhet1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 22,
            "action": "22 Thoth / Akhet I",
            "tags": "22 thoth akhet1",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 23,
            "action": "23 Thoth / Akhet I",
            "tags": "23 thoth akhet1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 24,
            "action": "24 Thoth / Akhet I",
            "tags": "24 thoth akhet1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 25,
            "action": "25 Thoth / Akhet I",
            "tags": "25 thoth akhet1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 26,
            "action": "26 Thoth / Akhet I",
            "tags": "26 thoth akhet1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 27,
            "action": "27 Thoth / Akhet I",
            "tags": "27 thoth akhet1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 28,
            "action": "28 Thoth / Akhet I",
            "tags": "28 thoth akhet1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 29,
            "action": "29 Thoth / Akhet I",
            "tags": "29 thoth akhet1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 30,
            "action": "30 Thoth / Akhet I",
            "tags": "30 thoth akhet1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 31,
            "action": "1 Phaophi / Akhet II",
            "tags": "1 phaophi akhet2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 32,
            "action": "2 Phaophi / Akhet II",
            "tags": "2 phaophi akhet2",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 33,
            "action": "3 Phaophi / Akhet II",
            "tags": "3 phaophi akhet2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 34,
            "action": "4 Phaophi / Akhet II",
            "tags": "4 phaophi akhet2",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 35,
            "action": "5 Phaophi / Akhet II",
            "tags": "5 phaophi akhet2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 36,
            "action": "6 Phaophi / Akhet II",
            "tags": "6 phaophi akhet2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 37,
            "action": "7 Phaophi / Akhet II",
            "tags": "7 phaophi akhet2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 38,
            "action": "8 Phaophi / Akhet II",
            "tags": "8 phaophi akhet2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 39,
            "action": "9 Phaophi / Akhet II",
            "tags": "9 phaophi akhet2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 40,
            "action": "10 Phaophi / Akhet II",
            "tags": "10 phaophi akhet2",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 41,
            "action": "11 Phaophi / Akhet II",
            "tags": "11 phaophi akhet2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 42,
            "action": "12 Phaophi / Akhet II",
            "tags": "12 phaophi akhet2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 43,
            "action": "13 Phaophi / Akhet II",
            "tags": "13 phaophi akhet2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 44,
            "action": "14 Phaophi / Akhet II",
            "tags": "14 phaophi akhet2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 45,
            "action": "15 Phaophi / Akhet II",
            "tags": "15 phaophi akhet2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 46,
            "action": "16 Phaophi / Akhet II",
            "tags": "16 phaophi akhet2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 47,
            "action": "17 Phaophi / Akhet II",
            "tags": "17 phaophi akhet2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 48,
            "action": "18 Phaophi / Akhet II",
            "tags": "18 phaophi akhet2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 49,
            "action": "19 Phaophi / Akhet II",
            "tags": "19 phaophi akhet2",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 50,
            "action": "20 Phaophi / Akhet II",
            "tags": "20 phaophi akhet2",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 51,
            "action": "21 Phaophi / Akhet II",
            "tags": "21 phaophi akhet2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 52,
            "action": "22 Phaophi / Akhet II",
            "tags": "22 phaophi akhet2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 53,
            "action": "23 Phaophi / Akhet II",
            "tags": "23 phaophi akhet2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 54,
            "action": "24 Phaophi / Akhet II",
            "tags": "24 phaophi akhet2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 55,
            "action": "25 Phaophi / Akhet II",
            "tags": "25 phaophi akhet2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 56,
            "action": "26 Phaophi / Akhet II",
            "tags": "26 phaophi akhet2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 57,
            "action": "27 Phaophi / Akhet II",
            "tags": "27 phaophi akhet2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 58,
            "action": "28 Phaophi / Akhet II",
            "tags": "28 phaophi akhet2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 59,
            "action": "29 Phaophi / Akhet II",
            "tags": "29 phaophi akhet2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 60,
            "action": "30 Phaophi / Akhet II",
            "tags": "30 phaophi akhet2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 61,
            "action": "1 Hathyr / Akhet III",
            "tags": "1 hathyr akhet3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 62,
            "action": "2 Hathyr / Akhet III",
            "tags": "2 hathyr akhet3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 63,
            "action": "3 Hathyr / Akhet III",
            "tags": "3 hathyr akhet3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 64,
            "action": "4 Hathyr / Akhet III",
            "tags": "4 hathyr akhet3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 65,
            "action": "5 Hathyr / Akhet III",
            "tags": "5 hathyr akhet3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 66,
            "action": "6 Hathyr / Akhet III",
            "tags": "6 hathyr akhet3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 67,
            "action": "7 Hathyr / Akhet III",
            "tags": "7 hathyr akhet3",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 68,
            "action": "8 Hathyr / Akhet III",
            "tags": "8 hathyr akhet3",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 69,
            "action": "9 Hathyr / Akhet III",
            "tags": "9 hathyr akhet3",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 70,
            "action": "10 Hathyr / Akhet III",
            "tags": "10 hathyr akhet3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 71,
            "action": "11 Hathyr / Akhet III",
            "tags": "11 hathyr akhet3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 72,
            "action": "12 Hathyr / Akhet III",
            "tags": "12 hathyr akhet3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 73,
            "action": "13 Hathyr / Akhet III",
            "tags": "13 hathyr akhet3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 74,
            "action": "14 Hathyr / Akhet III",
            "tags": "14 hathyr akhet3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 75,
            "action": "15 Hathyr / Akhet III",
            "tags": "15 hathyr akhet3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 76,
            "action": "16 Hathyr / Akhet III",
            "tags": "16 hathyr akhet3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 77,
            "action": "17 Hathyr / Akhet III",
            "tags": "17 hathyr akhet3",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 78,
            "action": "18 Hathyr / Akhet III",
            "tags": "18 hathyr akhet3",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 79,
            "action": "19 Hathyr / Akhet III",
            "tags": "19 hathyr akhet3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 80,
            "action": "20 Hathyr / Akhet III",
            "tags": "20 hathyr akhet3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 81,
            "action": "21 Hathyr / Akhet III",
            "tags": "21 hathyr akhet3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 82,
            "action": "22 Hathyr / Akhet III",
            "tags": "22 hathyr akhet3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 83,
            "action": "23 Hathyr / Akhet III",
            "tags": "23 hathyr akhet3",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 84,
            "action": "24 Hathyr / Akhet III",
            "tags": "24 hathyr akhet3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 85,
            "action": "25 Hathyr / Akhet III",
            "tags": "25 hathyr akhet3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 86,
            "action": "26 Hathyr / Akhet III",
            "tags": "26 hathyr akhet3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 87,
            "action": "27 Hathyr / Akhet III",
            "tags": "27 hathyr akhet3",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 88,
            "action": "28 Hathyr / Akhet III",
            "tags": "28 hathyr akhet3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 89,
            "action": "29 Hathyr / Akhet III",
            "tags": "29 hathyr akhet3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 90,
            "action": "30 Hathyr / Akhet III",
            "tags": "30 hathyr akhet3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 91,
            "action": "1 Choiak / Akhet IV",
            "tags": "1 choiak akhet4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 92,
            "action": "2 Choiak / Akhet IV",
            "tags": "2 choiak akhet4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 93,
            "action": "3 Choiak / Akhet IV",
            "tags": "3 choiak akhet4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 94,
            "action": "4 Choiak / Akhet IV",
            "tags": "4 choiak akhet4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 95,
            "action": "5 Choiak / Akhet IV",
            "tags": "5 choiak akhet4",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 96,
            "action": "6 Choiak / Akhet IV",
            "tags": "6 choiak akhet4",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 97,
            "action": "7 Choiak / Akhet IV",
            "tags": "7 choiak akhet4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 98,
            "action": "8 Choiak / Akhet IV",
            "tags": "8 choiak akhet4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 99,
            "action": "9 Choiak / Akhet IV",
            "tags": "9 choiak akhet4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 100,
            "action": "10 Choiak / Akhet IV",
            "tags": "10 choiak akhet4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 101,
            "action": "11 Choiak / Akhet IV",
            "tags": "11 choiak akhet4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 102,
            "action": "12 Choiak / Akhet IV",
            "tags": "12 choiak akhet4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 103,
            "action": "13 Choiak / Akhet IV",
            "tags": "13 choiak akhet4",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 104,
            "action": "14 Choiak / Akhet IV",
            "tags": "14 choiak akhet4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 105,
            "action": "15 Choiak / Akhet IV",
            "tags": "15 choiak akhet4",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 106,
            "action": "16 Choiak / Akhet IV",
            "tags": "16 choiak akhet4",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 107,
            "action": "17 Choiak / Akhet IV",
            "tags": "17 choiak akhet4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 108,
            "action": "18 Choiak / Akhet IV",
            "tags": "18 choiak akhet4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 109,
            "action": "19 Choiak / Akhet IV",
            "tags": "19 choiak akhet4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 110,
            "action": "20 Choiak / Akhet IV",
            "tags": "20 choiak akhet4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 111,
            "action": "21 Choiak / Akhet IV",
            "tags": "21 choiak akhet4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 112,
            "action": "22 Choiak / Akhet IV",
            "tags": "22 choiak akhet4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 113,
            "action": "23 Choiak / Akhet IV",
            "tags": "23 choiak akhet4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 114,
            "action": "24 Choiak / Akhet IV",
            "tags": "24 choiak akhet4",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 115,
            "action": "25 Choiak / Akhet IV",
            "tags": "25 choiak akhet4",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 116,
            "action": "26 Choiak / Akhet IV",
            "tags": "26 choiak akhet4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 117,
            "action": "27 Choiak / Akhet IV",
            "tags": "27 choiak akhet4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 118,
            "action": "28 Choiak / Akhet IV",
            "tags": "28 choiak akhet4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 119,
            "action": "29 Choiak / Akhet IV",
            "tags": "29 choiak akhet4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 120,
            "action": "30 Choiak / Akhet IV",
            "tags": "30 choiak akhet4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 121,
            "action": "1 Tybi / Peret I",
            "tags": "1 tybi peret1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 122,
            "action": "2 Tybi / Peret I",
            "tags": "2 tybi peret1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 123,
            "action": "3 Tybi / Peret I",
            "tags": "3 tybi peret1",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 124,
            "action": "4 Tybi / Peret I",
            "tags": "4 tybi peret1",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 125,
            "action": "5 Tybi / Peret I",
            "tags": "5 tybi peret1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 126,
            "action": "6 Tybi / Peret I",
            "tags": "6 tybi peret1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 127,
            "action": "7 Tybi / Peret I",
            "tags": "7 tybi peret1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 128,
            "action": "8 Tybi / Peret I",
            "tags": "8 tybi peret1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 129,
            "action": "9 Tybi / Peret I",
            "tags": "9 tybi peret1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 130,
            "action": "10 Tybi / Peret I",
            "tags": "10 tybi peret1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 131,
            "action": "11 Tybi / Peret I",
            "tags": "11 tybi peret1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 132,
            "action": "12 Tybi / Peret I",
            "tags": "12 tybi peret1",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 133,
            "action": "13 Tybi / Peret I",
            "tags": "13 tybi peret1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 134,
            "action": "14 Tybi / Peret I",
            "tags": "14 tybi peret1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 135,
            "action": "15 Tybi / Peret I",
            "tags": "15 tybi peret1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 136,
            "action": "16 Tybi / Peret I",
            "tags": "16 tybi peret1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 137,
            "action": "17 Tybi / Peret I",
            "tags": "17 tybi peret1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 138,
            "action": "18 Tybi / Peret I",
            "tags": "18 tybi peret1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 139,
            "action": "19 Tybi / Peret I",
            "tags": "19 tybi peret1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 140,
            "action": "20 Tybi / Peret I",
            "tags": "20 tybi peret1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 141,
            "action": "21 Tybi / Peret I",
            "tags": "21 tybi peret1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 142,
            "action": "22 Tybi / Peret I",
            "tags": "22 tybi peret1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 143,
            "action": "23 Tybi / Peret I",
            "tags": "23 tybi peret1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 144,
            "action": "24 Tybi / Peret I",
            "tags": "24 tybi peret1",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 145,
            "action": "25 Tybi / Peret I",
            "tags": "25 tybi peret1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 146,
            "action": "26 Tybi / Peret I",
            "tags": "26 tybi peret1",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 147,
            "action": "27 Tybi / Peret I",
            "tags": "27 tybi peret1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 148,
            "action": "28 Tybi / Peret I",
            "tags": "28 tybi peret1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 149,
            "action": "29 Tybi / Peret I",
            "tags": "29 tybi peret1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 150,
            "action": "30 Tybi / Peret I",
            "tags": "30 tybi peret1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 151,
            "action": "1 Mechir / Peret II",
            "tags": "1 mechir peret2",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 152,
            "action": "2 Mechir / Peret II",
            "tags": "2 mechir peret2",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 153,
            "action": "3 Mechir / Peret II",
            "tags": "3 mechir peret2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 154,
            "action": "4 Mechir / Peret II",
            "tags": "4 mechir peret2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 155,
            "action": "5 Mechir / Peret II",
            "tags": "5 mechir peret2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 156,
            "action": "6 Mechir / Peret II",
            "tags": "6 mechir peret2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 157,
            "action": "7 Mechir / Peret II",
            "tags": "7 mechir peret2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 158,
            "action": "8 Mechir / Peret II",
            "tags": "8 mechir peret2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 159,
            "action": "9 Mechir / Peret II",
            "tags": "9 mechir peret2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 160,
            "action": "10 Mechir / Peret II",
            "tags": "10 mechir peret2",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 161,
            "action": "11 Mechir / Peret II",
            "tags": "11 mechir peret2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 162,
            "action": "12 Mechir / Peret II",
            "tags": "12 mechir peret2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 163,
            "action": "13 Mechir / Peret II",
            "tags": "13 mechir peret2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 164,
            "action": "14 Mechir / Peret II",
            "tags": "14 mechir peret2",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 165,
            "action": "15 Mechir / Peret II",
            "tags": "15 mechir peret2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 166,
            "action": "16 Mechir / Peret II",
            "tags": "16 mechir peret2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 167,
            "action": "17 Mechir / Peret II",
            "tags": "17 mechir peret2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 168,
            "action": "18 Mechir / Peret II",
            "tags": "18 mechir peret2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 169,
            "action": "19 Mechir / Peret II",
            "tags": "19 mechir peret2",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 170,
            "action": "20 Mechir / Peret II",
            "tags": "20 mechir peret2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 171,
            "action": "21 Mechir / Peret II",
            "tags": "21 mechir peret2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 172,
            "action": "22 Mechir / Peret II",
            "tags": "22 mechir peret2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 173,
            "action": "23 Mechir / Peret II",
            "tags": "23 mechir peret2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 174,
            "action": "24 Mechir / Peret II",
            "tags": "24 mechir peret2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 175,
            "action": "25 Mechir / Peret II",
            "tags": "25 mechir peret2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 176,
            "action": "26 Mechir / Peret II",
            "tags": "26 mechir peret2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 177,
            "action": "27 Mechir / Peret II",
            "tags": "27 mechir peret2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 178,
            "action": "28 Mechir / Peret II",
            "tags": "28 mechir peret2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 179,
            "action": "29 Mechir / Peret II",
            "tags": "29 mechir peret2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 180,
            "action": "30 Mechir / Peret II",
            "tags": "30 mechir peret2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 181,
            "action": "1 Phamenoth / Peret III",
            "tags": "1 phamenoth peret3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 182,
            "action": "2 Phamenoth / Peret III",
            "tags": "2 phamenoth peret3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 183,
            "action": "3 Phamenoth / Peret III",
            "tags": "3 phamenoth peret3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 184,
            "action": "4 Phamenoth / Peret III",
            "tags": "4 phamenoth peret3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 185,
            "action": "5 Phamenoth / Peret III",
            "tags": "5 phamenoth peret3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 186,
            "action": "6 Phamenoth / Peret III",
            "tags": "6 phamenoth peret3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 187,
            "action": "7 Phamenoth / Peret III",
            "tags": "7 phamenoth peret3",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 188,
            "action": "8 Phamenoth / Peret III",
            "tags": "8 phamenoth peret3",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 189,
            "action": "9 Phamenoth / Peret III",
            "tags": "9 phamenoth peret3",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 190,
            "action": "10 Phamenoth / Peret III",
            "tags": "10 phamenoth peret3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 191,
            "action": "11 Phamenoth / Peret III",
            "tags": "11 phamenoth peret3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 192,
            "action": "12 Phamenoth / Peret III",
            "tags": "12 phamenoth peret3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 193,
            "action": "13 Phamenoth / Peret III",
            "tags": "13 phamenoth peret3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 194,
            "action": "14 Phamenoth / Peret III",
            "tags": "14 phamenoth peret3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 195,
            "action": "15 Phamenoth / Peret III",
            "tags": "15 phamenoth peret3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 196,
            "action": "16 Phamenoth / Peret III",
            "tags": "16 phamenoth peret3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 197,
            "action": "17 Phamenoth / Peret III",
            "tags": "17 phamenoth peret3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 198,
            "action": "18 Phamenoth / Peret III",
            "tags": "18 phamenoth peret3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 199,
            "action": "19 Phamenoth / Peret III",
            "tags": "19 phamenoth peret3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 200,
            "action": "20 Phamenoth / Peret III",
            "tags": "20 phamenoth peret3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 201,
            "action": "21 Phamenoth / Peret III",
            "tags": "21 phamenoth peret3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 202,
            "action": "22 Phamenoth / Peret III",
            "tags": "22 phamenoth peret3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 203,
            "action": "23 Phamenoth / Peret III",
            "tags": "23 phamenoth peret3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 204,
            "action": "24 Phamenoth / Peret III",
            "tags": "24 phamenoth peret3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 205,
            "action": "25 Phamenoth / Peret III",
            "tags": "25 phamenoth peret3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 206,
            "action": "26 Phamenoth / Peret III",
            "tags": "26 phamenoth peret3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 207,
            "action": "27 Phamenoth / Peret III",
            "tags": "27 phamenoth peret3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 208,
            "action": "28 Phamenoth / Peret III",
            "tags": "28 phamenoth peret3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 209,
            "action": "29 Phamenoth / Peret III",
            "tags": "29 phamenoth peret3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 210,
            "action": "30 Phamenoth / Peret III",
            "tags": "30 phamenoth peret3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 211,
            "action": "1 Pharmuthi / Peret IV",
            "tags": "1 pharmuthi peret4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 212,
            "action": "2 Pharmuthi / Peret IV",
            "tags": "2 pharmuthi peret4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 213,
            "action": "3 Pharmuthi / Peret IV",
            "tags": "3 pharmuthi peret4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 214,
            "action": "4 Pharmuthi / Peret IV",
            "tags": "4 pharmuthi peret4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 215,
            "action": "5 Pharmuthi / Peret IV",
            "tags": "5 pharmuthi peret4",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 216,
            "action": "6 Pharmuthi / Peret IV",
            "tags": "6 pharmuthi peret4",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 217,
            "action": "7 Pharmuthi / Peret IV",
            "tags": "7 pharmuthi peret4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 218,
            "action": "8 Pharmuthi / Peret IV",
            "tags": "8 pharmuthi peret4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 219,
            "action": "9 Pharmuthi / Peret IV",
            "tags": "9 pharmuthi peret4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 220,
            "action": "10 Pharmuthi / Peret IV",
            "tags": "10 pharmuthi peret4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 221,
            "action": "11 Pharmuthi / Peret IV",
            "tags": "11 pharmuthi peret4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 222,
            "action": "12 Pharmuthi / Peret IV",
            "tags": "12 pharmuthi peret4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 223,
            "action": "13 Pharmuthi / Peret IV",
            "tags": "13 pharmuthi peret4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 224,
            "action": "14 Pharmuthi / Peret IV",
            "tags": "14 pharmuthi peret4",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 225,
            "action": "15 Pharmuthi / Peret IV",
            "tags": "15 pharmuthi peret4",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 226,
            "action": "16 Pharmuthi / Peret IV",
            "tags": "16 pharmuthi peret4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 227,
            "action": "17 Pharmuthi / Peret IV",
            "tags": "17 pharmuthi peret4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 228,
            "action": "18 Pharmuthi / Peret IV",
            "tags": "18 pharmuthi peret4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 229,
            "action": "19 Pharmuthi / Peret IV",
            "tags": "19 pharmuthi peret4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 230,
            "action": "20 Pharmuthi / Peret IV",
            "tags": "20 pharmuthi peret4",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 231,
            "action": "21 Pharmuthi / Peret IV",
            "tags": "21 pharmuthi peret4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 232,
            "action": "22 Pharmuthi / Peret IV",
            "tags": "22 pharmuthi peret4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 233,
            "action": "23 Pharmuthi / Peret IV",
            "tags": "23 pharmuthi peret4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 234,
            "action": "24 Pharmuthi / Peret IV",
            "tags": "24 pharmuthi peret4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 235,
            "action": "25 Pharmuthi / Peret IV",
            "tags": "25 pharmuthi peret4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 236,
            "action": "26 Pharmuthi / Peret IV",
            "tags": "26 pharmuthi peret4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 237,
            "action": "27 Pharmuthi / Peret IV",
            "tags": "27 pharmuthi peret4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 238,
            "action": "28 Pharmuthi / Peret IV",
            "tags": "28 pharmuthi peret4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 239,
            "action": "29 Pharmuthi / Peret IV",
            "tags": "29 pharmuthi peret4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 240,
            "action": "30 Pharmuthi / Peret IV",
            "tags": "30 pharmuthi peret4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 241,
            "action": "1 Pachons / Shemu I",
            "tags": "1 pachons shemu1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 242,
            "action": "2 Pachons / Shemu I",
            "tags": "2 pachons shemu1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 243,
            "action": "3 Pachons / Shemu I",
            "tags": "3 pachons shemu1",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 244,
            "action": "4 Pachons / Shemu I",
            "tags": "4 pachons shemu1",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 245,
            "action": "5 Pachons / Shemu I",
            "tags": "5 pachons shemu1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 246,
            "action": "6 Pachons / Shemu I",
            "tags": "6 pachons shemu1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 247,
            "action": "7 Pachons / Shemu I",
            "tags": "7 pachons shemu1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 248,
            "action": "8 Pachons / Shemu I",
            "tags": "8 pachons shemu1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 249,
            "action": "9 Pachons / Shemu I",
            "tags": "9 pachons shemu1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 250,
            "action": "10 Pachons / Shemu I",
            "tags": "10 pachons shemu1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 251,
            "action": "11 Pachons / Shemu I",
            "tags": "11 pachons shemu1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 252,
            "action": "12 Pachons / Shemu I",
            "tags": "12 pachons shemu1",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 253,
            "action": "13 Pachons / Shemu I",
            "tags": "13 pachons shemu1",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 254,
            "action": "14 Pachons / Shemu I",
            "tags": "14 pachons shemu1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 255,
            "action": "15 Pachons / Shemu I",
            "tags": "15 pachons shemu1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 256,
            "action": "16 Pachons / Shemu I",
            "tags": "16 pachons shemu1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 257,
            "action": "17 Pachons / Shemu I",
            "tags": "17 pachons shemu1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 258,
            "action": "18 Pachons / Shemu I",
            "tags": "18 pachons shemu1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 259,
            "action": "19 Pachons / Shemu I",
            "tags": "19 pachons shemu1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 260,
            "action": "20 Pachons / Shemu I",
            "tags": "20 pachons shemu1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 261,
            "action": "21 Pachons / Shemu I",
            "tags": "21 pachons shemu1",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 262,
            "action": "22 Pachons / Shemu I",
            "tags": "22 pachons shemu1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 263,
            "action": "23 Pachons / Shemu I",
            "tags": "23 pachons shemu1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 264,
            "action": "24 Pachons / Shemu I",
            "tags": "24 pachons shemu1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 265,
            "action": "25 Pachons / Shemu I",
            "tags": "25 pachons shemu1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 266,
            "action": "26 Pachons / Shemu I",
            "tags": "26 pachons shemu1",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 267,
            "action": "27 Pachons / Shemu I",
            "tags": "27 pachons shemu1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 268,
            "action": "28 Pachons / Shemu I",
            "tags": "28 pachons shemu1",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 269,
            "action": "29 Pachons / Shemu I",
            "tags": "29 pachons shemu1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 270,
            "action": "30 Pachons / Shemu I",
            "tags": "30 pachons shemu1",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 271,
            "action": "1 Payni / Shemu II",
            "tags": "1 payni shemu2",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 272,
            "action": "2 Payni / Shemu II",
            "tags": "2 payni shemu2",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 273,
            "action": "3 Payni / Shemu II",
            "tags": "3 payni shemu2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 274,
            "action": "4 Payni / Shemu II",
            "tags": "4 payni shemu2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 275,
            "action": "5 Payni / Shemu II",
            "tags": "5 payni shemu2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 276,
            "action": "6 Payni / Shemu II",
            "tags": "6 payni shemu2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 277,
            "action": "7 Payni / Shemu II",
            "tags": "7 payni shemu2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 278,
            "action": "8 Payni / Shemu II",
            "tags": "8 payni shemu2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 279,
            "action": "9 Payni / Shemu II",
            "tags": "9 payni shemu2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 280,
            "action": "10 Payni / Shemu II",
            "tags": "10 payni shemu2",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 281,
            "action": "11 Payni / Shemu II",
            "tags": "11 payni shemu2",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 282,
            "action": "12 Payni / Shemu II",
            "tags": "12 payni shemu2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 283,
            "action": "13 Payni / Shemu II",
            "tags": "13 payni shemu2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 284,
            "action": "14 Payni / Shemu II",
            "tags": "14 payni shemu2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 285,
            "action": "15 Payni / Shemu II",
            "tags": "15 payni shemu2",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 286,
            "action": "16 Payni / Shemu II",
            "tags": "16 payni shemu2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 287,
            "action": "17 Payni / Shemu II",
            "tags": "17 payni shemu2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 288,
            "action": "18 Payni / Shemu II",
            "tags": "18 payni shemu2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 289,
            "action": "19 Payni / Shemu II",
            "tags": "19 payni shemu2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 290,
            "action": "20 Payni / Shemu II",
            "tags": "20 payni shemu2",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 291,
            "action": "21 Payni / Shemu II",
            "tags": "21 payni shemu2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 292,
            "action": "22 Payni / Shemu II",
            "tags": "22 payni shemu2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 293,
            "action": "23 Payni / Shemu II",
            "tags": "23 payni shemu2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 294,
            "action": "24 Payni / Shemu II",
            "tags": "24 payni shemu2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 295,
            "action": "25 Payni / Shemu II",
            "tags": "25 payni shemu2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 296,
            "action": "26 Payni / Shemu II",
            "tags": "26 payni shemu2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 297,
            "action": "27 Payni / Shemu II",
            "tags": "27 payni shemu2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 298,
            "action": "28 Payni / Shemu II",
            "tags": "28 payni shemu2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 299,
            "action": "29 Payni / Shemu II",
            "tags": "29 payni shemu2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 300,
            "action": "30 Payni / Shemu II",
            "tags": "30 payni shemu2",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 301,
            "action": "1 Epiphi / Shemu III",
            "tags": "1 epiphi shemu3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 302,
            "action": "2 Epiphi / Shemu III",
            "tags": "2 epiphi shemu3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 303,
            "action": "3 Epiphi / Shemu III",
            "tags": "3 epiphi shemu3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 304,
            "action": "4 Epiphi / Shemu III",
            "tags": "4 epiphi shemu3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 305,
            "action": "5 Epiphi / Shemu III",
            "tags": "5 epiphi shemu3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 306,
            "action": "6 Epiphi / Shemu III",
            "tags": "6 epiphi shemu3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 307,
            "action": "7 Epiphi / Shemu III",
            "tags": "7 epiphi shemu3",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 308,
            "action": "8 Epiphi / Shemu III",
            "tags": "8 epiphi shemu3",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 309,
            "action": "9 Epiphi / Shemu III",
            "tags": "9 epiphi shemu3",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 310,
            "action": "10 Epiphi / Shemu III",
            "tags": "10 epiphi shemu3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 311,
            "action": "11 Epiphi / Shemu III",
            "tags": "11 epiphi shemu3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 312,
            "action": "12 Epiphi / Shemu III",
            "tags": "12 epiphi shemu3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 313,
            "action": "13 Epiphi / Shemu III",
            "tags": "13 epiphi shemu3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 314,
            "action": "14 Epiphi / Shemu III",
            "tags": "14 epiphi shemu3",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 315,
            "action": "15 Epiphi / Shemu III",
            "tags": "15 epiphi shemu3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 316,
            "action": "16 Epiphi / Shemu III",
            "tags": "16 epiphi shemu3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 317,
            "action": "17 Epiphi / Shemu III",
            "tags": "17 epiphi shemu3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 318,
            "action": "18 Epiphi / Shemu III",
            "tags": "18 epiphi shemu3",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 319,
            "action": "19 Epiphi / Shemu III",
            "tags": "19 epiphi shemu3",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 320,
            "action": "20 Epiphi / Shemu III",
            "tags": "20 epiphi shemu3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 321,
            "action": "21 Epiphi / Shemu III",
            "tags": "21 epiphi shemu3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 322,
            "action": "22 Epiphi / Shemu III",
            "tags": "22 epiphi shemu3",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 323,
            "action": "23 Epiphi / Shemu III",
            "tags": "23 epiphi shemu3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 324,
            "action": "24 Epiphi / Shemu III",
            "tags": "24 epiphi shemu3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 325,
            "action": "25 Epiphi / Shemu III",
            "tags": "25 epiphi shemu3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 326,
            "action": "26 Epiphi / Shemu III",
            "tags": "26 epiphi shemu3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 327,
            "action": "27 Epiphi / Shemu III",
            "tags": "27 epiphi shemu3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 328,
            "action": "28 Epiphi / Shemu III",
            "tags": "28 epiphi shemu3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 329,
            "action": "29 Epiphi / Shemu III",
            "tags": "29 epiphi shemu3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 330,
            "action": "30 Epiphi / Shemu III",
            "tags": "30 epiphi shemu3",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 331,
            "action": "1 Mesore / Shemu IV",
            "tags": "1 mesore shemu4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 332,
            "action": "2 Mesore / Shemu IV",
            "tags": "2 mesore shemu4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 333,
            "action": "3 Mesore / Shemu IV",
            "tags": "3 mesore shemu4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 334,
            "action": "4 Mesore / Shemu IV",
            "tags": "4 mesore shemu4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 335,
            "action": "5 Mesore / Shemu IV",
            "tags": "5 mesore shemu4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 336,
            "action": "6 Mesore / Shemu IV",
            "tags": "6 mesore shemu4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 337,
            "action": "7 Mesore / Shemu IV",
            "tags": "7 mesore shemu4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 338,
            "action": "8 Mesore / Shemu IV",
            "tags": "8 mesore shemu4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 339,
            "action": "9 Mesore / Shemu IV",
            "tags": "9 mesore shemu4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 340,
            "action": "10 Mesore / Shemu IV",
            "tags": "10 mesore shemu4",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 341,
            "action": "11 Mesore / Shemu IV",
            "tags": "11 mesore shemu4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 342,
            "action": "12 Mesore / Shemu IV",
            "tags": "12 mesore shemu4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 343,
            "action": "13 Mesore / Shemu IV",
            "tags": "13 mesore shemu4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 344,
            "action": "14 Mesore / Shemu IV",
            "tags": "14 mesore shemu4",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 345,
            "action": "15 Mesore / Shemu IV",
            "tags": "15 mesore shemu4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 346,
            "action": "16 Mesore / Shemu IV",
            "tags": "16 mesore shemu4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 347,
            "action": "17 Mesore / Shemu IV",
            "tags": "17 mesore shemu4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 348,
            "action": "18 Mesore / Shemu IV",
            "tags": "18 mesore shemu4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 349,
            "action": "19 Mesore / Shemu IV",
            "tags": "19 mesore shemu4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 350,
            "action": "20 Mesore / Shemu IV",
            "tags": "20 mesore shemu4",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 351,
            "action": "21 Mesore / Shemu IV",
            "tags": "21 mesore shemu4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 352,
            "action": "22 Mesore / Shemu IV",
            "tags": "22 mesore shemu4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 353,
            "action": "23 Mesore / Shemu IV",
            "tags": "23 mesore shemu4",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 354,
            "action": "24 Mesore / Shemu IV",
            "tags": "24 mesore shemu4",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 355,
            "action": "25 Mesore / Shemu IV",
            "tags": "25 mesore shemu4",
            "hide": "filter"
          },
          {
            "id": 399,
            "action": "unsuitable for magic operations (VII.272ff)",
            "tags": "unsuitable"
          }
        ],
        [
          {
            "id": 356,
            "action": "26 Mesore / Shemu IV",
            "tags": "26 mesore shemu4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 357,
            "action": "27 Mesore / Shemu IV",
            "tags": "27 mesore shemu4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 358,
            "action": "28 Mesore / Shemu IV",
            "tags": "28 mesore shemu4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 359,
            "action": "29 Mesore / Shemu IV",
            "tags": "29 mesore shemu4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 360,
            "action": "30 Mesore / Shemu IV",
            "tags": "30 mesore shemu4",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 361,
            "action": "1 Epag / Heriu-renpet",
            "tags": "1 epag heriurenpet epag",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 362,
            "action": "2 Epag / Heriu-renpet",
            "tags": "2 epag heriurenpet epag",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 363,
            "action": "3 Epag / Heriu-renpet",
            "tags": "3 epag heriurenpet epag",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 364,
            "action": "4 Epag / Heriu-renpet",
            "tags": "4 epag heriurenpet epag",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ],
        [
          {
            "id": 365,
            "action": "5 Epag / Heriu-renpet",
            "tags": "5 epag heriurenpet epag",
            "hide": "filter"
          },
          {
            "id": 400,
            "action": "suitable for magic operations (VII.272ff)",
            "tags": "suitable"
          }
        ]
    ]
  },
  property: function(m) {
    return m.planetary.day.start;
  },
  calculate: function(definitions, property) {
    var ed = egyptianDate(property).day.ofyear;
    return definitions.actions[ed];
  }
};

function egyptianDate(ts) {
    var months = ["void", "Thoth", "Phaophi", "Hathyr", "Choiak", "Tybi", "Mechir", "Phamenoth", "Pharmuthi", "Pachons", "Payni", "Epiphi", "Mesore", "Epag"];
    var seasons = ["void", "Akhet I", "Akhet II", "Akhet III", "Akhet IV", "Peret I", "Peret II", "Peret III", "Peret IV", "Shemu I", "Shemu II", "Shemu III", "Shemu IV", "Heriu-renpet"]
    var jul = (ts / 86400) + 2440587.5;
    var jd = Math.floor((ts / 86400)) + 2440587.5;
    var hourFraction = jul - jd;
    var nabonassar = 1448637;
    var days = jd - nabonassar;
    var year = Math.floor((days - 0.4) / 365 );
    var remainingDays  = days - Math.floor(year * 365.0 );
    var dayOfYear = Math.floor(remainingDays);
    var month  = Math.floor((remainingDays - 0.5) / 30);
    var dayFrac  = remainingDays - month * 30.0;
    var day = Math.floor(dayFrac);
    var hours = Math.floor(hourFraction * 24.0);
    var minutes = Math.floor(((hourFraction * 24.0) - Math.floor((hourFraction * 24.0))) * 60);
    var seconds = Math.round((((hourFraction * 24.0) - Math.floor((hourFraction * 24.0))) * 60 - Math.floor(((hourFraction * 24.0) - Math.floor((hourFraction * 24.0))) * 60)) * 60);
    day++;
    month++;
    year++;
    return {
        day        : {
                no : day,
            ofyear : dayOfYear
        },
        nabonassar : year,
        ptolemaic  : {
            string : day+" "+months[month],
            month  : {
                no : month,
              name : months[month]
            },
        },
        pharaonic  : {
            string : day+" "+seasons[month],
            season : {
                no : Math.floor( month / 3 ),
             month : ((month - 1) % 4) + 1
            },
        },
        time       : hours+":"+minutes+":"+seconds
    }
}
