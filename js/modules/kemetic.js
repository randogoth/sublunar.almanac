/**
* @preserve Copyright (c) 2018-2022 NN Solex, www.sublunar.space
* License MIT: http://www.opensource.org/licenses/MIT
*/

// module_kemet_civildate_pharaonic
// module_kemet_civildate_alexandrian
// module_kemet_chronokrators_pharaonic
// module_kemet_chronokrators_alexandrian
// module_kemet_festivals_pharaonic
// module_kemet_festivals_alexandrian
// module_kemet_cc_pharaonic
// module_kemet_cc_alexandrian
// module_kemet_unlucky_pharaonic
// module_kemet_unlucky_alexandrian
// module_kemet_lsign

//Defines Calendar Objects and Methods
var module_kemet_lsign = {

  definitions: {
    name: "Lunar Sign (PGM)",
    group: {
      id: "kemet",
      text: "Kemet",
      info: "true"
    },
    actions: [
      [0],
      [
        {
          "id": "1",
          "action": "fire divination or love charm (PGM VII.284ff)",
          "tags": "divination love"
        },
        {
          "id": "21",
          "action": "Oracle statue of Hermes (PGM V.370ff)",
          "tags": "divination animation"
        }
      ],
      [
        {
          "id": "2",
          "action": "Incantation to a lamp (PGM VII.284ff)",
          "tags": "divination"
        },
        {
          "id": "22",
          "action": "Ring for success, favour and victory (animation) (PGM XII.270ff)",
          "tags": "animation success"
        }
      ],
      [
        {
          "id": "3",
          "action": "Spell for winning favour (PGM VII.284ff)",
          "tags": "luck"
        },
        {
          "id": "13",
          "action": "Perform spells of binding (PGM III.275ff)",
          "tags": "binding harm"
        }
      ],
      [
        {
          "id": "4",
          "action": "Making Phylacteries (PGM VII.284ff)",
          "tags": "protection"
        },
        {
          "id": "14",
          "action": "Perform spells of reconciliation, air divination (PGM III.275ff)",
          "tags": "divination friendship reconciliation"
        }
      ],
      [
        {
          "id": "5",
          "action": "Rings or binding spells (PGM VII.284ff)",
          "tags": "binding harm protection"
        },
        {
          "id": "15",
          "action": "Making an amulet against gout (PDM xiv.1003ff)",
          "tags": "healing"
        },
        {
          "id": "21",
          "action": "Oracle statue of Hermes (PGM V.370ff)",
          "tags": "divination animation"
        }
      ],
      [
        {
          "id": "6",
          "action": "Everything is rendered obtainable (PGM VII.284ff)",
          "tags": "anything"
        },
        {
          "id": "16",
          "action": "Anything is obtainable, bowl divination, as you wish (PGM III.275ff)",
          "tags": "anything divination"
        },
        {
          "id": "21",
          "action": "Oracle statue of Hermes (PGM V.370ff)",
          "tags": "divination animation"
        },
        {
          "id": "22",
          "action": "Ring for success, favour and victory (animation) (PGM XII.270ff)",
          "tags": "animation success"
        }
      ],
      [
        {
          "id": "7",
          "action": "Necromancy (PGM VII.284ff)",
          "tags": "necromancy"
        },
        {
          "id": "17",
          "action": "Perform invocation... spell of release... necromancy (PGM III.275ff)",
          "tags": "invocation necromancy release"
        }
      ],
      [
        {
          "id": "8",
          "action": "Anything inflicting evil (PGM VII.284ff)",
          "tags": "harm war"
        },
        {
          "id": "22",
          "action": "Ring for success, favour and victory (animation) (PGM XII.270ff)",
          "tags": "animation success"
        },
        {
          "id": "23",
          "action": "send a star ... down (PDM xiv.1180f)",
          "tags": ""
        }
      ],
      [
        {
          "id": "9",
          "action": "Invocations and incantations to the Sun and the Moon (PGM VII.284ff)",
          "tags": "prayer invocation"
        },
        {
          "id": "18",
          "action": "Conduct business (PGM III.275ff)",
          "tags": "business"
        },
        {
          "id": "21",
          "action": "Oracle statue of Hermes (PGM V.370ff)",
          "tags": "divination animation"
        }
      ],
      [
        {
          "id": "10",
          "action": "Say whatever you wish for best results (PGM VII.284ff)",
          "tags": "anything"
        },
        {
          "id": "19",
          "action": "Do what is appropriate (PGM III.275ff)",
          "tags": "anything"
        }
      ],
      [
        {
          "id": "11",
          "action": "For a love charm (PGM VII.284ff)",
          "tags": "love"
        },
        {
          "id": "22",
          "action": "Ring for success, favour and victory (animation) (PGM XII.270ff)",
          "tags": "animation success"
        }
      ],
      [
        {
          "id": "12",
          "action": "For foreknowledge (PGM VII.284ff)",
          "tags": "divination"
        },
        {
          "id": "20",
          "action": "OIÔ rite... or love charm (PGM III.275ff)",
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
var module_kemet_civildate_pharaonic = {

  definitions: {
    name: "Civil Date (Pharaonic)",
    description: "Calculation of the date according to the old 365 days Egyptian Civil Calendar. It was banned by Augustus in 25BC but continuously used in secret by mages and astrologers until the 6th century.",
    group: {
      id: "kemet",
      text: "Kemet",
      info: "true"
    },
    actions: [
      [0],
      [
          {
              "id": 1,
              "action": "1 (Thoth) I Akhet",
              "tags": "1 thoth akhet1"
          }
      ],
      [
          {
              "id": 2,
              "action": "2 (Thoth) I Akhet",
              "tags": "2 thoth akhet1"
          }
      ],
      [
          {
              "id": 3,
              "action": "3 (Thoth) I Akhet",
              "tags": "3 thoth akhet1"
          }
      ],
      [
          {
              "id": 4,
              "action": "4 (Thoth) I Akhet",
              "tags": "4 thoth akhet1"
          }
      ],
      [
          {
              "id": 5,
              "action": "5 (Thoth) I Akhet",
              "tags": "5 thoth akhet1"
          }
      ],
      [
          {
              "id": 6,
              "action": "6 (Thoth) I Akhet",
              "tags": "6 thoth akhet1"
          }
      ],
      [
          {
              "id": 7,
              "action": "7 (Thoth) I Akhet",
              "tags": "7 thoth akhet1"
          }
      ],
      [
          {
              "id": 8,
              "action": "8 (Thoth) I Akhet",
              "tags": "8 thoth akhet1"
          }
      ],
      [
          {
              "id": 9,
              "action": "9 (Thoth) I Akhet",
              "tags": "9 thoth akhet1"
          }
      ],
      [
          {
              "id": 10,
              "action": "10 (Thoth) I Akhet",
              "tags": "10 thoth akhet1"
          }
      ],
      [
          {
              "id": 11,
              "action": "11 (Thoth) I Akhet",
              "tags": "11 thoth akhet1"
          }
      ],
      [
          {
              "id": 12,
              "action": "12 (Thoth) I Akhet",
              "tags": "12 thoth akhet1"
          }
      ],
      [
          {
              "id": 13,
              "action": "13 (Thoth) I Akhet",
              "tags": "13 thoth akhet1"
          }
      ],
      [
          {
              "id": 14,
              "action": "14 (Thoth) I Akhet",
              "tags": "14 thoth akhet1"
          }
      ],
      [
          {
              "id": 15,
              "action": "15 (Thoth) I Akhet",
              "tags": "15 thoth akhet1"
          }
      ],
      [
          {
              "id": 16,
              "action": "16 (Thoth) I Akhet",
              "tags": "16 thoth akhet1"
          }
      ],
      [
          {
              "id": 17,
              "action": "17 (Thoth) I Akhet",
              "tags": "17 thoth akhet1"
          }
      ],
      [
          {
              "id": 18,
              "action": "18 (Thoth) I Akhet",
              "tags": "18 thoth akhet1"
          }
      ],
      [
          {
              "id": 19,
              "action": "19 (Thoth) I Akhet",
              "tags": "19 thoth akhet1"
          }
      ],
      [
          {
              "id": 20,
              "action": "20 (Thoth) I Akhet",
              "tags": "20 thoth akhet1"
          }
      ],
      [
          {
              "id": 21,
              "action": "21 (Thoth) I Akhet",
              "tags": "21 thoth akhet1"
          }
      ],
      [
          {
              "id": 22,
              "action": "22 (Thoth) I Akhet",
              "tags": "22 thoth akhet1"
          }
      ],
      [
          {
              "id": 23,
              "action": "23 (Thoth) I Akhet",
              "tags": "23 thoth akhet1"
          }
      ],
      [
          {
              "id": 24,
              "action": "24 (Thoth) I Akhet",
              "tags": "24 thoth akhet1"
          }
      ],
      [
          {
              "id": 25,
              "action": "25 (Thoth) I Akhet",
              "tags": "25 thoth akhet1"
          }
      ],
      [
          {
              "id": 26,
              "action": "26 (Thoth) I Akhet",
              "tags": "26 thoth akhet1"
          }
      ],
      [
          {
              "id": 27,
              "action": "27 (Thoth) I Akhet",
              "tags": "27 thoth akhet1"
          }
      ],
      [
          {
              "id": 28,
              "action": "28 (Thoth) I Akhet",
              "tags": "28 thoth akhet1"
          }
      ],
      [
          {
              "id": 29,
              "action": "29 (Thoth) I Akhet",
              "tags": "29 thoth akhet1"
          }
      ],
      [
          {
              "id": 30,
              "action": "30 (Thoth) I Akhet",
              "tags": "30 thoth akhet1"
          }
      ],
      [
          {
              "id": 31,
              "action": "1 (Phaophi) II Akhet",
              "tags": "1 phaophi akhet2"
          }
      ],
      [
          {
              "id": 32,
              "action": "2 (Phaophi) II Akhet",
              "tags": "2 phaophi akhet2"
          }
      ],
      [
          {
              "id": 33,
              "action": "3 (Phaophi) II Akhet",
              "tags": "3 phaophi akhet2"
          }
      ],
      [
          {
              "id": 34,
              "action": "4 (Phaophi) II Akhet",
              "tags": "4 phaophi akhet2"
          }
      ],
      [
          {
              "id": 35,
              "action": "5 (Phaophi) II Akhet",
              "tags": "5 phaophi akhet2"
          }
      ],
      [
          {
              "id": 36,
              "action": "6 (Phaophi) II Akhet",
              "tags": "6 phaophi akhet2"
          }
      ],
      [
          {
              "id": 37,
              "action": "7 (Phaophi) II Akhet",
              "tags": "7 phaophi akhet2"
          }
      ],
      [
          {
              "id": 38,
              "action": "8 (Phaophi) II Akhet",
              "tags": "8 phaophi akhet2"
          }
      ],
      [
          {
              "id": 39,
              "action": "9 (Phaophi) II Akhet",
              "tags": "9 phaophi akhet2"
          }
      ],
      [
          {
              "id": 40,
              "action": "10 (Phaophi) II Akhet",
              "tags": "10 phaophi akhet2"
          }
      ],
      [
          {
              "id": 41,
              "action": "11 (Phaophi) II Akhet",
              "tags": "11 phaophi akhet2"
          }
      ],
      [
          {
              "id": 42,
              "action": "12 (Phaophi) II Akhet",
              "tags": "12 phaophi akhet2"
          }
      ],
      [
          {
              "id": 43,
              "action": "13 (Phaophi) II Akhet",
              "tags": "13 phaophi akhet2"
          }
      ],
      [
          {
              "id": 44,
              "action": "14 (Phaophi) II Akhet",
              "tags": "14 phaophi akhet2"
          }
      ],
      [
          {
              "id": 45,
              "action": "15 (Phaophi) II Akhet",
              "tags": "15 phaophi akhet2"
          }
      ],
      [
          {
              "id": 46,
              "action": "16 (Phaophi) II Akhet",
              "tags": "16 phaophi akhet2"
          }
      ],
      [
          {
              "id": 47,
              "action": "17 (Phaophi) II Akhet",
              "tags": "17 phaophi akhet2"
          }
      ],
      [
          {
              "id": 48,
              "action": "18 (Phaophi) II Akhet",
              "tags": "18 phaophi akhet2"
          }
      ],
      [
          {
              "id": 49,
              "action": "19 (Phaophi) II Akhet",
              "tags": "19 phaophi akhet2"
          }
      ],
      [
          {
              "id": 50,
              "action": "20 (Phaophi) II Akhet",
              "tags": "20 phaophi akhet2"
          }
      ],
      [
          {
              "id": 51,
              "action": "21 (Phaophi) II Akhet",
              "tags": "21 phaophi akhet2"
          }
      ],
      [
          {
              "id": 52,
              "action": "22 (Phaophi) II Akhet",
              "tags": "22 phaophi akhet2"
          }
      ],
      [
          {
              "id": 53,
              "action": "23 (Phaophi) II Akhet",
              "tags": "23 phaophi akhet2"
          }
      ],
      [
          {
              "id": 54,
              "action": "24 (Phaophi) II Akhet",
              "tags": "24 phaophi akhet2"
          }
      ],
      [
          {
              "id": 55,
              "action": "25 (Phaophi) II Akhet",
              "tags": "25 phaophi akhet2"
          }
      ],
      [
          {
              "id": 56,
              "action": "26 (Phaophi) II Akhet",
              "tags": "26 phaophi akhet2"
          }
      ],
      [
          {
              "id": 57,
              "action": "27 (Phaophi) II Akhet",
              "tags": "27 phaophi akhet2"
          }
      ],
      [
          {
              "id": 58,
              "action": "28 (Phaophi) II Akhet",
              "tags": "28 phaophi akhet2"
          }
      ],
      [
          {
              "id": 59,
              "action": "29 (Phaophi) II Akhet",
              "tags": "29 phaophi akhet2"
          }
      ],
      [
          {
              "id": 60,
              "action": "30 (Phaophi) II Akhet",
              "tags": "30 phaophi akhet2"
          }
      ],
      [
          {
              "id": 61,
              "action": "1 (Hathyr) III Akhet",
              "tags": "1 hathyr akhet3"
          }
      ],
      [
          {
              "id": 62,
              "action": "2 (Hathyr) III Akhet",
              "tags": "2 hathyr akhet3"
          }
      ],
      [
          {
              "id": 63,
              "action": "3 (Hathyr) III Akhet",
              "tags": "3 hathyr akhet3"
          }
      ],
      [
          {
              "id": 64,
              "action": "4 (Hathyr) III Akhet",
              "tags": "4 hathyr akhet3"
          }
      ],
      [
          {
              "id": 65,
              "action": "5 (Hathyr) III Akhet",
              "tags": "5 hathyr akhet3"
          }
      ],
      [
          {
              "id": 66,
              "action": "6 (Hathyr) III Akhet",
              "tags": "6 hathyr akhet3"
          }
      ],
      [
          {
              "id": 67,
              "action": "7 (Hathyr) III Akhet",
              "tags": "7 hathyr akhet3"
          }
      ],
      [
          {
              "id": 68,
              "action": "8 (Hathyr) III Akhet",
              "tags": "8 hathyr akhet3"
          }
      ],
      [
          {
              "id": 69,
              "action": "9 (Hathyr) III Akhet",
              "tags": "9 hathyr akhet3"
          }
      ],
      [
          {
              "id": 70,
              "action": "10 (Hathyr) III Akhet",
              "tags": "10 hathyr akhet3"
          }
      ],
      [
          {
              "id": 71,
              "action": "11 (Hathyr) III Akhet",
              "tags": "11 hathyr akhet3"
          }
      ],
      [
          {
              "id": 72,
              "action": "12 (Hathyr) III Akhet",
              "tags": "12 hathyr akhet3"
          }
      ],
      [
          {
              "id": 73,
              "action": "13 (Hathyr) III Akhet",
              "tags": "13 hathyr akhet3"
          }
      ],
      [
          {
              "id": 74,
              "action": "14 (Hathyr) III Akhet",
              "tags": "14 hathyr akhet3"
          }
      ],
      [
          {
              "id": 75,
              "action": "15 (Hathyr) III Akhet",
              "tags": "15 hathyr akhet3"
          }
      ],
      [
          {
              "id": 76,
              "action": "16 (Hathyr) III Akhet",
              "tags": "16 hathyr akhet3"
          }
      ],
      [
          {
              "id": 77,
              "action": "17 (Hathyr) III Akhet",
              "tags": "17 hathyr akhet3"
          }
      ],
      [
          {
              "id": 78,
              "action": "18 (Hathyr) III Akhet",
              "tags": "18 hathyr akhet3"
          }
      ],
      [
          {
              "id": 79,
              "action": "19 (Hathyr) III Akhet",
              "tags": "19 hathyr akhet3"
          }
      ],
      [
          {
              "id": 80,
              "action": "20 (Hathyr) III Akhet",
              "tags": "20 hathyr akhet3"
          }
      ],
      [
          {
              "id": 81,
              "action": "21 (Hathyr) III Akhet",
              "tags": "21 hathyr akhet3"
          }
      ],
      [
          {
              "id": 82,
              "action": "22 (Hathyr) III Akhet",
              "tags": "22 hathyr akhet3"
          }
      ],
      [
          {
              "id": 83,
              "action": "23 (Hathyr) III Akhet",
              "tags": "23 hathyr akhet3"
          }
      ],
      [
          {
              "id": 84,
              "action": "24 (Hathyr) III Akhet",
              "tags": "24 hathyr akhet3"
          }
      ],
      [
          {
              "id": 85,
              "action": "25 (Hathyr) III Akhet",
              "tags": "25 hathyr akhet3"
          }
      ],
      [
          {
              "id": 86,
              "action": "26 (Hathyr) III Akhet",
              "tags": "26 hathyr akhet3"
          }
      ],
      [
          {
              "id": 87,
              "action": "27 (Hathyr) III Akhet",
              "tags": "27 hathyr akhet3"
          }
      ],
      [
          {
              "id": 88,
              "action": "28 (Hathyr) III Akhet",
              "tags": "28 hathyr akhet3"
          }
      ],
      [
          {
              "id": 89,
              "action": "29 (Hathyr) III Akhet",
              "tags": "29 hathyr akhet3"
          }
      ],
      [
          {
              "id": 90,
              "action": "30 (Hathyr) III Akhet",
              "tags": "30 hathyr akhet3"
          }
      ],
      [
          {
              "id": 91,
              "action": "1 (Choiak) IV Akhet",
              "tags": "1 choiak akhet4"
          }
      ],
      [
          {
              "id": 92,
              "action": "2 (Choiak) IV Akhet",
              "tags": "2 choiak akhet4"
          }
      ],
      [
          {
              "id": 93,
              "action": "3 (Choiak) IV Akhet",
              "tags": "3 choiak akhet4"
          }
      ],
      [
          {
              "id": 94,
              "action": "4 (Choiak) IV Akhet",
              "tags": "4 choiak akhet4"
          }
      ],
      [
          {
              "id": 95,
              "action": "5 (Choiak) IV Akhet",
              "tags": "5 choiak akhet4"
          }
      ],
      [
          {
              "id": 96,
              "action": "6 (Choiak) IV Akhet",
              "tags": "6 choiak akhet4"
          }
      ],
      [
          {
              "id": 97,
              "action": "7 (Choiak) IV Akhet",
              "tags": "7 choiak akhet4"
          }
      ],
      [
          {
              "id": 98,
              "action": "8 (Choiak) IV Akhet",
              "tags": "8 choiak akhet4"
          }
      ],
      [
          {
              "id": 99,
              "action": "9 (Choiak) IV Akhet",
              "tags": "9 choiak akhet4"
          }
      ],
      [
          {
              "id": 100,
              "action": "10 (Choiak) IV Akhet",
              "tags": "10 choiak akhet4"
          }
      ],
      [
          {
              "id": 101,
              "action": "11 (Choiak) IV Akhet",
              "tags": "11 choiak akhet4"
          }
      ],
      [
          {
              "id": 102,
              "action": "12 (Choiak) IV Akhet",
              "tags": "12 choiak akhet4"
          }
      ],
      [
          {
              "id": 103,
              "action": "13 (Choiak) IV Akhet",
              "tags": "13 choiak akhet4"
          }
      ],
      [
          {
              "id": 104,
              "action": "14 (Choiak) IV Akhet",
              "tags": "14 choiak akhet4"
          }
      ],
      [
          {
              "id": 105,
              "action": "15 (Choiak) IV Akhet",
              "tags": "15 choiak akhet4"
          }
      ],
      [
          {
              "id": 106,
              "action": "16 (Choiak) IV Akhet",
              "tags": "16 choiak akhet4"
          }
      ],
      [
          {
              "id": 107,
              "action": "17 (Choiak) IV Akhet",
              "tags": "17 choiak akhet4"
          }
      ],
      [
          {
              "id": 108,
              "action": "18 (Choiak) IV Akhet",
              "tags": "18 choiak akhet4"
          }
      ],
      [
          {
              "id": 109,
              "action": "19 (Choiak) IV Akhet",
              "tags": "19 choiak akhet4"
          }
      ],
      [
          {
              "id": 110,
              "action": "20 (Choiak) IV Akhet",
              "tags": "20 choiak akhet4"
          }
      ],
      [
          {
              "id": 111,
              "action": "21 (Choiak) IV Akhet",
              "tags": "21 choiak akhet4"
          }
      ],
      [
          {
              "id": 112,
              "action": "22 (Choiak) IV Akhet",
              "tags": "22 choiak akhet4"
          }
      ],
      [
          {
              "id": 113,
              "action": "23 (Choiak) IV Akhet",
              "tags": "23 choiak akhet4"
          }
      ],
      [
          {
              "id": 114,
              "action": "24 (Choiak) IV Akhet",
              "tags": "24 choiak akhet4"
          }
      ],
      [
          {
              "id": 115,
              "action": "25 (Choiak) IV Akhet",
              "tags": "25 choiak akhet4"
          }
      ],
      [
          {
              "id": 116,
              "action": "26 (Choiak) IV Akhet",
              "tags": "26 choiak akhet4"
          }
      ],
      [
          {
              "id": 117,
              "action": "27 (Choiak) IV Akhet",
              "tags": "27 choiak akhet4"
          }
      ],
      [
          {
              "id": 118,
              "action": "28 (Choiak) IV Akhet",
              "tags": "28 choiak akhet4"
          }
      ],
      [
          {
              "id": 119,
              "action": "29 (Choiak) IV Akhet",
              "tags": "29 choiak akhet4"
          }
      ],
      [
          {
              "id": 120,
              "action": "30 (Choiak) IV Akhet",
              "tags": "30 choiak akhet4"
          }
      ],
      [
          {
              "id": 121,
              "action": "1 (Tybi) I Peret",
              "tags": "1 tybi peret1"
          }
      ],
      [
          {
              "id": 122,
              "action": "2 (Tybi) I Peret",
              "tags": "2 tybi peret1"
          }
      ],
      [
          {
              "id": 123,
              "action": "3 (Tybi) I Peret",
              "tags": "3 tybi peret1"
          }
      ],
      [
          {
              "id": 124,
              "action": "4 (Tybi) I Peret",
              "tags": "4 tybi peret1"
          }
      ],
      [
          {
              "id": 125,
              "action": "5 (Tybi) I Peret",
              "tags": "5 tybi peret1"
          }
      ],
      [
          {
              "id": 126,
              "action": "6 (Tybi) I Peret",
              "tags": "6 tybi peret1"
          }
      ],
      [
          {
              "id": 127,
              "action": "7 (Tybi) I Peret",
              "tags": "7 tybi peret1"
          }
      ],
      [
          {
              "id": 128,
              "action": "8 (Tybi) I Peret",
              "tags": "8 tybi peret1"
          }
      ],
      [
          {
              "id": 129,
              "action": "9 (Tybi) I Peret",
              "tags": "9 tybi peret1"
          }
      ],
      [
          {
              "id": 130,
              "action": "10 (Tybi) I Peret",
              "tags": "10 tybi peret1"
          }
      ],
      [
          {
              "id": 131,
              "action": "11 (Tybi) I Peret",
              "tags": "11 tybi peret1"
          }
      ],
      [
          {
              "id": 132,
              "action": "12 (Tybi) I Peret",
              "tags": "12 tybi peret1"
          }
      ],
      [
          {
              "id": 133,
              "action": "13 (Tybi) I Peret",
              "tags": "13 tybi peret1"
          }
      ],
      [
          {
              "id": 134,
              "action": "14 (Tybi) I Peret",
              "tags": "14 tybi peret1"
          }
      ],
      [
          {
              "id": 135,
              "action": "15 (Tybi) I Peret",
              "tags": "15 tybi peret1"
          }
      ],
      [
          {
              "id": 136,
              "action": "16 (Tybi) I Peret",
              "tags": "16 tybi peret1"
          }
      ],
      [
          {
              "id": 137,
              "action": "17 (Tybi) I Peret",
              "tags": "17 tybi peret1"
          }
      ],
      [
          {
              "id": 138,
              "action": "18 (Tybi) I Peret",
              "tags": "18 tybi peret1"
          }
      ],
      [
          {
              "id": 139,
              "action": "19 (Tybi) I Peret",
              "tags": "19 tybi peret1"
          }
      ],
      [
          {
              "id": 140,
              "action": "20 (Tybi) I Peret",
              "tags": "20 tybi peret1"
          }
      ],
      [
          {
              "id": 141,
              "action": "21 (Tybi) I Peret",
              "tags": "21 tybi peret1"
          }
      ],
      [
          {
              "id": 142,
              "action": "22 (Tybi) I Peret",
              "tags": "22 tybi peret1"
          }
      ],
      [
          {
              "id": 143,
              "action": "23 (Tybi) I Peret",
              "tags": "23 tybi peret1"
          }
      ],
      [
          {
              "id": 144,
              "action": "24 (Tybi) I Peret",
              "tags": "24 tybi peret1"
          }
      ],
      [
          {
              "id": 145,
              "action": "25 (Tybi) I Peret",
              "tags": "25 tybi peret1"
          }
      ],
      [
          {
              "id": 146,
              "action": "26 (Tybi) I Peret",
              "tags": "26 tybi peret1"
          }
      ],
      [
          {
              "id": 147,
              "action": "27 (Tybi) I Peret",
              "tags": "27 tybi peret1"
          }
      ],
      [
          {
              "id": 148,
              "action": "28 (Tybi) I Peret",
              "tags": "28 tybi peret1"
          }
      ],
      [
          {
              "id": 149,
              "action": "29 (Tybi) I Peret",
              "tags": "29 tybi peret1"
          }
      ],
      [
          {
              "id": 150,
              "action": "30 (Tybi) I Peret",
              "tags": "30 tybi peret1"
          }
      ],
      [
          {
              "id": 151,
              "action": "1 (Mechir) II Peret",
              "tags": "1 mechir peret2"
          }
      ],
      [
          {
              "id": 152,
              "action": "2 (Mechir) II Peret",
              "tags": "2 mechir peret2"
          }
      ],
      [
          {
              "id": 153,
              "action": "3 (Mechir) II Peret",
              "tags": "3 mechir peret2"
          }
      ],
      [
          {
              "id": 154,
              "action": "4 (Mechir) II Peret",
              "tags": "4 mechir peret2"
          }
      ],
      [
          {
              "id": 155,
              "action": "5 (Mechir) II Peret",
              "tags": "5 mechir peret2"
          }
      ],
      [
          {
              "id": 156,
              "action": "6 (Mechir) II Peret",
              "tags": "6 mechir peret2"
          }
      ],
      [
          {
              "id": 157,
              "action": "7 (Mechir) II Peret",
              "tags": "7 mechir peret2"
          }
      ],
      [
          {
              "id": 158,
              "action": "8 (Mechir) II Peret",
              "tags": "8 mechir peret2"
          }
      ],
      [
          {
              "id": 159,
              "action": "9 (Mechir) II Peret",
              "tags": "9 mechir peret2"
          }
      ],
      [
          {
              "id": 160,
              "action": "10 (Mechir) II Peret",
              "tags": "10 mechir peret2"
          }
      ],
      [
          {
              "id": 161,
              "action": "11 (Mechir) II Peret",
              "tags": "11 mechir peret2"
          }
      ],
      [
          {
              "id": 162,
              "action": "12 (Mechir) II Peret",
              "tags": "12 mechir peret2"
          }
      ],
      [
          {
              "id": 163,
              "action": "13 (Mechir) II Peret",
              "tags": "13 mechir peret2"
          }
      ],
      [
          {
              "id": 164,
              "action": "14 (Mechir) II Peret",
              "tags": "14 mechir peret2"
          }
      ],
      [
          {
              "id": 165,
              "action": "15 (Mechir) II Peret",
              "tags": "15 mechir peret2"
          }
      ],
      [
          {
              "id": 166,
              "action": "16 (Mechir) II Peret",
              "tags": "16 mechir peret2"
          }
      ],
      [
          {
              "id": 167,
              "action": "17 (Mechir) II Peret",
              "tags": "17 mechir peret2"
          }
      ],
      [
          {
              "id": 168,
              "action": "18 (Mechir) II Peret",
              "tags": "18 mechir peret2"
          }
      ],
      [
          {
              "id": 169,
              "action": "19 (Mechir) II Peret",
              "tags": "19 mechir peret2"
          }
      ],
      [
          {
              "id": 170,
              "action": "20 (Mechir) II Peret",
              "tags": "20 mechir peret2"
          }
      ],
      [
          {
              "id": 171,
              "action": "21 (Mechir) II Peret",
              "tags": "21 mechir peret2"
          }
      ],
      [
          {
              "id": 172,
              "action": "22 (Mechir) II Peret",
              "tags": "22 mechir peret2"
          }
      ],
      [
          {
              "id": 173,
              "action": "23 (Mechir) II Peret",
              "tags": "23 mechir peret2"
          }
      ],
      [
          {
              "id": 174,
              "action": "24 (Mechir) II Peret",
              "tags": "24 mechir peret2"
          }
      ],
      [
          {
              "id": 175,
              "action": "25 (Mechir) II Peret",
              "tags": "25 mechir peret2"
          }
      ],
      [
          {
              "id": 176,
              "action": "26 (Mechir) II Peret",
              "tags": "26 mechir peret2"
          }
      ],
      [
          {
              "id": 177,
              "action": "27 (Mechir) II Peret",
              "tags": "27 mechir peret2"
          }
      ],
      [
          {
              "id": 178,
              "action": "28 (Mechir) II Peret",
              "tags": "28 mechir peret2"
          }
      ],
      [
          {
              "id": 179,
              "action": "29 (Mechir) II Peret",
              "tags": "29 mechir peret2"
          }
      ],
      [
          {
              "id": 180,
              "action": "30 (Mechir) II Peret",
              "tags": "30 mechir peret2"
          }
      ],
      [
          {
              "id": 181,
              "action": "1 (Phamenoth) III Peret",
              "tags": "1 phamenoth peret3"
          }
      ],
      [
          {
              "id": 182,
              "action": "2 (Phamenoth) III Peret",
              "tags": "2 phamenoth peret3"
          }
      ],
      [
          {
              "id": 183,
              "action": "3 (Phamenoth) III Peret",
              "tags": "3 phamenoth peret3"
          }
      ],
      [
          {
              "id": 184,
              "action": "4 (Phamenoth) III Peret",
              "tags": "4 phamenoth peret3"
          }
      ],
      [
          {
              "id": 185,
              "action": "5 (Phamenoth) III Peret",
              "tags": "5 phamenoth peret3"
          }
      ],
      [
          {
              "id": 186,
              "action": "6 (Phamenoth) III Peret",
              "tags": "6 phamenoth peret3"
          }
      ],
      [
          {
              "id": 187,
              "action": "7 (Phamenoth) III Peret",
              "tags": "7 phamenoth peret3"
          }
      ],
      [
          {
              "id": 188,
              "action": "8 (Phamenoth) III Peret",
              "tags": "8 phamenoth peret3"
          }
      ],
      [
          {
              "id": 189,
              "action": "9 (Phamenoth) III Peret",
              "tags": "9 phamenoth peret3"
          }
      ],
      [
          {
              "id": 190,
              "action": "10 (Phamenoth) III Peret",
              "tags": "10 phamenoth peret3"
          }
      ],
      [
          {
              "id": 191,
              "action": "11 (Phamenoth) III Peret",
              "tags": "11 phamenoth peret3"
          }
      ],
      [
          {
              "id": 192,
              "action": "12 (Phamenoth) III Peret",
              "tags": "12 phamenoth peret3"
          }
      ],
      [
          {
              "id": 193,
              "action": "13 (Phamenoth) III Peret",
              "tags": "13 phamenoth peret3"
          }
      ],
      [
          {
              "id": 194,
              "action": "14 (Phamenoth) III Peret",
              "tags": "14 phamenoth peret3"
          }
      ],
      [
          {
              "id": 195,
              "action": "15 (Phamenoth) III Peret",
              "tags": "15 phamenoth peret3"
          }
      ],
      [
          {
              "id": 196,
              "action": "16 (Phamenoth) III Peret",
              "tags": "16 phamenoth peret3"
          }
      ],
      [
          {
              "id": 197,
              "action": "17 (Phamenoth) III Peret",
              "tags": "17 phamenoth peret3"
          }
      ],
      [
          {
              "id": 198,
              "action": "18 (Phamenoth) III Peret",
              "tags": "18 phamenoth peret3"
          }
      ],
      [
          {
              "id": 199,
              "action": "19 (Phamenoth) III Peret",
              "tags": "19 phamenoth peret3"
          }
      ],
      [
          {
              "id": 200,
              "action": "20 (Phamenoth) III Peret",
              "tags": "20 phamenoth peret3"
          }
      ],
      [
          {
              "id": 201,
              "action": "21 (Phamenoth) III Peret",
              "tags": "21 phamenoth peret3"
          }
      ],
      [
          {
              "id": 202,
              "action": "22 (Phamenoth) III Peret",
              "tags": "22 phamenoth peret3"
          }
      ],
      [
          {
              "id": 203,
              "action": "23 (Phamenoth) III Peret",
              "tags": "23 phamenoth peret3"
          }
      ],
      [
          {
              "id": 204,
              "action": "24 (Phamenoth) III Peret",
              "tags": "24 phamenoth peret3"
          }
      ],
      [
          {
              "id": 205,
              "action": "25 (Phamenoth) III Peret",
              "tags": "25 phamenoth peret3"
          }
      ],
      [
          {
              "id": 206,
              "action": "26 (Phamenoth) III Peret",
              "tags": "26 phamenoth peret3"
          }
      ],
      [
          {
              "id": 207,
              "action": "27 (Phamenoth) III Peret",
              "tags": "27 phamenoth peret3"
          }
      ],
      [
          {
              "id": 208,
              "action": "28 (Phamenoth) III Peret",
              "tags": "28 phamenoth peret3"
          }
      ],
      [
          {
              "id": 209,
              "action": "29 (Phamenoth) III Peret",
              "tags": "29 phamenoth peret3"
          }
      ],
      [
          {
              "id": 210,
              "action": "30 (Phamenoth) III Peret",
              "tags": "30 phamenoth peret3"
          }
      ],
      [
          {
              "id": 211,
              "action": "1 (Pharmuthi) IV Peret",
              "tags": "1 pharmuthi peret4"
          }
      ],
      [
          {
              "id": 212,
              "action": "2 (Pharmuthi) IV Peret",
              "tags": "2 pharmuthi peret4"
          }
      ],
      [
          {
              "id": 213,
              "action": "3 (Pharmuthi) IV Peret",
              "tags": "3 pharmuthi peret4"
          }
      ],
      [
          {
              "id": 214,
              "action": "4 (Pharmuthi) IV Peret",
              "tags": "4 pharmuthi peret4"
          }
      ],
      [
          {
              "id": 215,
              "action": "5 (Pharmuthi) IV Peret",
              "tags": "5 pharmuthi peret4"
          }
      ],
      [
          {
              "id": 216,
              "action": "6 (Pharmuthi) IV Peret",
              "tags": "6 pharmuthi peret4"
          }
      ],
      [
          {
              "id": 217,
              "action": "7 (Pharmuthi) IV Peret",
              "tags": "7 pharmuthi peret4"
          }
      ],
      [
          {
              "id": 218,
              "action": "8 (Pharmuthi) IV Peret",
              "tags": "8 pharmuthi peret4"
          }
      ],
      [
          {
              "id": 219,
              "action": "9 (Pharmuthi) IV Peret",
              "tags": "9 pharmuthi peret4"
          }
      ],
      [
          {
              "id": 220,
              "action": "10 (Pharmuthi) IV Peret",
              "tags": "10 pharmuthi peret4"
          }
      ],
      [
          {
              "id": 221,
              "action": "11 (Pharmuthi) IV Peret",
              "tags": "11 pharmuthi peret4"
          }
      ],
      [
          {
              "id": 222,
              "action": "12 (Pharmuthi) IV Peret",
              "tags": "12 pharmuthi peret4"
          }
      ],
      [
          {
              "id": 223,
              "action": "13 (Pharmuthi) IV Peret",
              "tags": "13 pharmuthi peret4"
          }
      ],
      [
          {
              "id": 224,
              "action": "14 (Pharmuthi) IV Peret",
              "tags": "14 pharmuthi peret4"
          }
      ],
      [
          {
              "id": 225,
              "action": "15 (Pharmuthi) IV Peret",
              "tags": "15 pharmuthi peret4"
          }
      ],
      [
          {
              "id": 226,
              "action": "16 (Pharmuthi) IV Peret",
              "tags": "16 pharmuthi peret4"
          }
      ],
      [
          {
              "id": 227,
              "action": "17 (Pharmuthi) IV Peret",
              "tags": "17 pharmuthi peret4"
          }
      ],
      [
          {
              "id": 228,
              "action": "18 (Pharmuthi) IV Peret",
              "tags": "18 pharmuthi peret4"
          }
      ],
      [
          {
              "id": 229,
              "action": "19 (Pharmuthi) IV Peret",
              "tags": "19 pharmuthi peret4"
          }
      ],
      [
          {
              "id": 230,
              "action": "20 (Pharmuthi) IV Peret",
              "tags": "20 pharmuthi peret4"
          }
      ],
      [
          {
              "id": 231,
              "action": "21 (Pharmuthi) IV Peret",
              "tags": "21 pharmuthi peret4"
          }
      ],
      [
          {
              "id": 232,
              "action": "22 (Pharmuthi) IV Peret",
              "tags": "22 pharmuthi peret4"
          }
      ],
      [
          {
              "id": 233,
              "action": "23 (Pharmuthi) IV Peret",
              "tags": "23 pharmuthi peret4"
          }
      ],
      [
          {
              "id": 234,
              "action": "24 (Pharmuthi) IV Peret",
              "tags": "24 pharmuthi peret4"
          }
      ],
      [
          {
              "id": 235,
              "action": "25 (Pharmuthi) IV Peret",
              "tags": "25 pharmuthi peret4"
          }
      ],
      [
          {
              "id": 236,
              "action": "26 (Pharmuthi) IV Peret",
              "tags": "26 pharmuthi peret4"
          }
      ],
      [
          {
              "id": 237,
              "action": "27 (Pharmuthi) IV Peret",
              "tags": "27 pharmuthi peret4"
          }
      ],
      [
          {
              "id": 238,
              "action": "28 (Pharmuthi) IV Peret",
              "tags": "28 pharmuthi peret4"
          }
      ],
      [
          {
              "id": 239,
              "action": "29 (Pharmuthi) IV Peret",
              "tags": "29 pharmuthi peret4"
          }
      ],
      [
          {
              "id": 240,
              "action": "30 (Pharmuthi) IV Peret",
              "tags": "30 pharmuthi peret4"
          }
      ],
      [
          {
              "id": 241,
              "action": "1 (Pachons) I Shemu",
              "tags": "1 pachons shemu1"
          }
      ],
      [
          {
              "id": 242,
              "action": "2 (Pachons) I Shemu",
              "tags": "2 pachons shemu1"
          }
      ],
      [
          {
              "id": 243,
              "action": "3 (Pachons) I Shemu",
              "tags": "3 pachons shemu1"
          }
      ],
      [
          {
              "id": 244,
              "action": "4 (Pachons) I Shemu",
              "tags": "4 pachons shemu1"
          }
      ],
      [
          {
              "id": 245,
              "action": "5 (Pachons) I Shemu",
              "tags": "5 pachons shemu1"
          }
      ],
      [
          {
              "id": 246,
              "action": "6 (Pachons) I Shemu",
              "tags": "6 pachons shemu1"
          }
      ],
      [
          {
              "id": 247,
              "action": "7 (Pachons) I Shemu",
              "tags": "7 pachons shemu1"
          }
      ],
      [
          {
              "id": 248,
              "action": "8 (Pachons) I Shemu",
              "tags": "8 pachons shemu1"
          }
      ],
      [
          {
              "id": 249,
              "action": "9 (Pachons) I Shemu",
              "tags": "9 pachons shemu1"
          }
      ],
      [
          {
              "id": 250,
              "action": "10 (Pachons) I Shemu",
              "tags": "10 pachons shemu1"
          }
      ],
      [
          {
              "id": 251,
              "action": "11 (Pachons) I Shemu",
              "tags": "11 pachons shemu1"
          }
      ],
      [
          {
              "id": 252,
              "action": "12 (Pachons) I Shemu",
              "tags": "12 pachons shemu1"
          }
      ],
      [
          {
              "id": 253,
              "action": "13 (Pachons) I Shemu",
              "tags": "13 pachons shemu1"
          }
      ],
      [
          {
              "id": 254,
              "action": "14 (Pachons) I Shemu",
              "tags": "14 pachons shemu1"
          }
      ],
      [
          {
              "id": 255,
              "action": "15 (Pachons) I Shemu",
              "tags": "15 pachons shemu1"
          }
      ],
      [
          {
              "id": 256,
              "action": "16 (Pachons) I Shemu",
              "tags": "16 pachons shemu1"
          }
      ],
      [
          {
              "id": 257,
              "action": "17 (Pachons) I Shemu",
              "tags": "17 pachons shemu1"
          }
      ],
      [
          {
              "id": 258,
              "action": "18 (Pachons) I Shemu",
              "tags": "18 pachons shemu1"
          }
      ],
      [
          {
              "id": 259,
              "action": "19 (Pachons) I Shemu",
              "tags": "19 pachons shemu1"
          }
      ],
      [
          {
              "id": 260,
              "action": "20 (Pachons) I Shemu",
              "tags": "20 pachons shemu1"
          }
      ],
      [
          {
              "id": 261,
              "action": "21 (Pachons) I Shemu",
              "tags": "21 pachons shemu1"
          }
      ],
      [
          {
              "id": 262,
              "action": "22 (Pachons) I Shemu",
              "tags": "22 pachons shemu1"
          }
      ],
      [
          {
              "id": 263,
              "action": "23 (Pachons) I Shemu",
              "tags": "23 pachons shemu1"
          }
      ],
      [
          {
              "id": 264,
              "action": "24 (Pachons) I Shemu",
              "tags": "24 pachons shemu1"
          }
      ],
      [
          {
              "id": 265,
              "action": "25 (Pachons) I Shemu",
              "tags": "25 pachons shemu1"
          }
      ],
      [
          {
              "id": 266,
              "action": "26 (Pachons) I Shemu",
              "tags": "26 pachons shemu1"
          }
      ],
      [
          {
              "id": 267,
              "action": "27 (Pachons) I Shemu",
              "tags": "27 pachons shemu1"
          }
      ],
      [
          {
              "id": 268,
              "action": "28 (Pachons) I Shemu",
              "tags": "28 pachons shemu1"
          }
      ],
      [
          {
              "id": 269,
              "action": "29 (Pachons) I Shemu",
              "tags": "29 pachons shemu1"
          }
      ],
      [
          {
              "id": 270,
              "action": "30 (Pachons) I Shemu",
              "tags": "30 pachons shemu1"
          }
      ],
      [
          {
              "id": 271,
              "action": "1 (Payni) II Shemu",
              "tags": "1 payni shemu2"
          }
      ],
      [
          {
              "id": 272,
              "action": "2 (Payni) II Shemu",
              "tags": "2 payni shemu2"
          }
      ],
      [
          {
              "id": 273,
              "action": "3 (Payni) II Shemu",
              "tags": "3 payni shemu2"
          }
      ],
      [
          {
              "id": 274,
              "action": "4 (Payni) II Shemu",
              "tags": "4 payni shemu2"
          }
      ],
      [
          {
              "id": 275,
              "action": "5 (Payni) II Shemu",
              "tags": "5 payni shemu2"
          }
      ],
      [
          {
              "id": 276,
              "action": "6 (Payni) II Shemu",
              "tags": "6 payni shemu2"
          }
      ],
      [
          {
              "id": 277,
              "action": "7 (Payni) II Shemu",
              "tags": "7 payni shemu2"
          }
      ],
      [
          {
              "id": 278,
              "action": "8 (Payni) II Shemu",
              "tags": "8 payni shemu2"
          }
      ],
      [
          {
              "id": 279,
              "action": "9 (Payni) II Shemu",
              "tags": "9 payni shemu2"
          }
      ],
      [
          {
              "id": 280,
              "action": "10 (Payni) II Shemu",
              "tags": "10 payni shemu2"
          }
      ],
      [
          {
              "id": 281,
              "action": "11 (Payni) II Shemu",
              "tags": "11 payni shemu2"
          }
      ],
      [
          {
              "id": 282,
              "action": "12 (Payni) II Shemu",
              "tags": "12 payni shemu2"
          }
      ],
      [
          {
              "id": 283,
              "action": "13 (Payni) II Shemu",
              "tags": "13 payni shemu2"
          }
      ],
      [
          {
              "id": 284,
              "action": "14 (Payni) II Shemu",
              "tags": "14 payni shemu2"
          }
      ],
      [
          {
              "id": 285,
              "action": "15 (Payni) II Shemu",
              "tags": "15 payni shemu2"
          }
      ],
      [
          {
              "id": 286,
              "action": "16 (Payni) II Shemu",
              "tags": "16 payni shemu2"
          }
      ],
      [
          {
              "id": 287,
              "action": "17 (Payni) II Shemu",
              "tags": "17 payni shemu2"
          }
      ],
      [
          {
              "id": 288,
              "action": "18 (Payni) II Shemu",
              "tags": "18 payni shemu2"
          }
      ],
      [
          {
              "id": 289,
              "action": "19 (Payni) II Shemu",
              "tags": "19 payni shemu2"
          }
      ],
      [
          {
              "id": 290,
              "action": "20 (Payni) II Shemu",
              "tags": "20 payni shemu2"
          }
      ],
      [
          {
              "id": 291,
              "action": "21 (Payni) II Shemu",
              "tags": "21 payni shemu2"
          }
      ],
      [
          {
              "id": 292,
              "action": "22 (Payni) II Shemu",
              "tags": "22 payni shemu2"
          }
      ],
      [
          {
              "id": 293,
              "action": "23 (Payni) II Shemu",
              "tags": "23 payni shemu2"
          }
      ],
      [
          {
              "id": 294,
              "action": "24 (Payni) II Shemu",
              "tags": "24 payni shemu2"
          }
      ],
      [
          {
              "id": 295,
              "action": "25 (Payni) II Shemu",
              "tags": "25 payni shemu2"
          }
      ],
      [
          {
              "id": 296,
              "action": "26 (Payni) II Shemu",
              "tags": "26 payni shemu2"
          }
      ],
      [
          {
              "id": 297,
              "action": "27 (Payni) II Shemu",
              "tags": "27 payni shemu2"
          }
      ],
      [
          {
              "id": 298,
              "action": "28 (Payni) II Shemu",
              "tags": "28 payni shemu2"
          }
      ],
      [
          {
              "id": 299,
              "action": "29 (Payni) II Shemu",
              "tags": "29 payni shemu2"
          }
      ],
      [
          {
              "id": 300,
              "action": "30 (Payni) II Shemu",
              "tags": "30 payni shemu2"
          }
      ],
      [
          {
              "id": 301,
              "action": "1 (Epiphi) III Shemu",
              "tags": "1 epiphi shemu3"
          }
      ],
      [
          {
              "id": 302,
              "action": "2 (Epiphi) III Shemu",
              "tags": "2 epiphi shemu3"
          }
      ],
      [
          {
              "id": 303,
              "action": "3 (Epiphi) III Shemu",
              "tags": "3 epiphi shemu3"
          }
      ],
      [
          {
              "id": 304,
              "action": "4 (Epiphi) III Shemu",
              "tags": "4 epiphi shemu3"
          }
      ],
      [
          {
              "id": 305,
              "action": "5 (Epiphi) III Shemu",
              "tags": "5 epiphi shemu3"
          }
      ],
      [
          {
              "id": 306,
              "action": "6 (Epiphi) III Shemu",
              "tags": "6 epiphi shemu3"
          }
      ],
      [
          {
              "id": 307,
              "action": "7 (Epiphi) III Shemu",
              "tags": "7 epiphi shemu3"
          }
      ],
      [
          {
              "id": 308,
              "action": "8 (Epiphi) III Shemu",
              "tags": "8 epiphi shemu3"
          }
      ],
      [
          {
              "id": 309,
              "action": "9 (Epiphi) III Shemu",
              "tags": "9 epiphi shemu3"
          }
      ],
      [
          {
              "id": 310,
              "action": "10 (Epiphi) III Shemu",
              "tags": "10 epiphi shemu3"
          }
      ],
      [
          {
              "id": 311,
              "action": "11 (Epiphi) III Shemu",
              "tags": "11 epiphi shemu3"
          }
      ],
      [
          {
              "id": 312,
              "action": "12 (Epiphi) III Shemu",
              "tags": "12 epiphi shemu3"
          }
      ],
      [
          {
              "id": 313,
              "action": "13 (Epiphi) III Shemu",
              "tags": "13 epiphi shemu3"
          }
      ],
      [
          {
              "id": 314,
              "action": "14 (Epiphi) III Shemu",
              "tags": "14 epiphi shemu3"
          }
      ],
      [
          {
              "id": 315,
              "action": "15 (Epiphi) III Shemu",
              "tags": "15 epiphi shemu3"
          }
      ],
      [
          {
              "id": 316,
              "action": "16 (Epiphi) III Shemu",
              "tags": "16 epiphi shemu3"
          }
      ],
      [
          {
              "id": 317,
              "action": "17 (Epiphi) III Shemu",
              "tags": "17 epiphi shemu3"
          }
      ],
      [
          {
              "id": 318,
              "action": "18 (Epiphi) III Shemu",
              "tags": "18 epiphi shemu3"
          }
      ],
      [
          {
              "id": 319,
              "action": "19 (Epiphi) III Shemu",
              "tags": "19 epiphi shemu3"
          }
      ],
      [
          {
              "id": 320,
              "action": "20 (Epiphi) III Shemu",
              "tags": "20 epiphi shemu3"
          }
      ],
      [
          {
              "id": 321,
              "action": "21 (Epiphi) III Shemu",
              "tags": "21 epiphi shemu3"
          }
      ],
      [
          {
              "id": 322,
              "action": "22 (Epiphi) III Shemu",
              "tags": "22 epiphi shemu3"
          }
      ],
      [
          {
              "id": 323,
              "action": "23 (Epiphi) III Shemu",
              "tags": "23 epiphi shemu3"
          }
      ],
      [
          {
              "id": 324,
              "action": "24 (Epiphi) III Shemu",
              "tags": "24 epiphi shemu3"
          }
      ],
      [
          {
              "id": 325,
              "action": "25 (Epiphi) III Shemu",
              "tags": "25 epiphi shemu3"
          }
      ],
      [
          {
              "id": 326,
              "action": "26 (Epiphi) III Shemu",
              "tags": "26 epiphi shemu3"
          }
      ],
      [
          {
              "id": 327,
              "action": "27 (Epiphi) III Shemu",
              "tags": "27 epiphi shemu3"
          }
      ],
      [
          {
              "id": 328,
              "action": "28 (Epiphi) III Shemu",
              "tags": "28 epiphi shemu3"
          }
      ],
      [
          {
              "id": 329,
              "action": "29 (Epiphi) III Shemu",
              "tags": "29 epiphi shemu3"
          }
      ],
      [
          {
              "id": 330,
              "action": "30 (Epiphi) III Shemu",
              "tags": "30 epiphi shemu3"
          }
      ],
      [
          {
              "id": 331,
              "action": "1 (Mesore) IV Shemu",
              "tags": "1 mesore shemu4"
          }
      ],
      [
          {
              "id": 332,
              "action": "2 (Mesore) IV Shemu",
              "tags": "2 mesore shemu4"
          }
      ],
      [
          {
              "id": 333,
              "action": "3 (Mesore) IV Shemu",
              "tags": "3 mesore shemu4"
          }
      ],
      [
          {
              "id": 334,
              "action": "4 (Mesore) IV Shemu",
              "tags": "4 mesore shemu4"
          }
      ],
      [
          {
              "id": 335,
              "action": "5 (Mesore) IV Shemu",
              "tags": "5 mesore shemu4"
          }
      ],
      [
          {
              "id": 336,
              "action": "6 (Mesore) IV Shemu",
              "tags": "6 mesore shemu4"
          }
      ],
      [
          {
              "id": 337,
              "action": "7 (Mesore) IV Shemu",
              "tags": "7 mesore shemu4"
          }
      ],
      [
          {
              "id": 338,
              "action": "8 (Mesore) IV Shemu",
              "tags": "8 mesore shemu4"
          }
      ],
      [
          {
              "id": 339,
              "action": "9 (Mesore) IV Shemu",
              "tags": "9 mesore shemu4"
          }
      ],
      [
          {
              "id": 340,
              "action": "10 (Mesore) IV Shemu",
              "tags": "10 mesore shemu4"
          }
      ],
      [
          {
              "id": 341,
              "action": "11 (Mesore) IV Shemu",
              "tags": "11 mesore shemu4"
          }
      ],
      [
          {
              "id": 342,
              "action": "12 (Mesore) IV Shemu",
              "tags": "12 mesore shemu4"
          }
      ],
      [
          {
              "id": 343,
              "action": "13 (Mesore) IV Shemu",
              "tags": "13 mesore shemu4"
          }
      ],
      [
          {
              "id": 344,
              "action": "14 (Mesore) IV Shemu",
              "tags": "14 mesore shemu4"
          }
      ],
      [
          {
              "id": 345,
              "action": "15 (Mesore) IV Shemu",
              "tags": "15 mesore shemu4"
          }
      ],
      [
          {
              "id": 346,
              "action": "16 (Mesore) IV Shemu",
              "tags": "16 mesore shemu4"
          }
      ],
      [
          {
              "id": 347,
              "action": "17 (Mesore) IV Shemu",
              "tags": "17 mesore shemu4"
          }
      ],
      [
          {
              "id": 348,
              "action": "18 (Mesore) IV Shemu",
              "tags": "18 mesore shemu4"
          }
      ],
      [
          {
              "id": 349,
              "action": "19 (Mesore) IV Shemu",
              "tags": "19 mesore shemu4"
          }
      ],
      [
          {
              "id": 350,
              "action": "20 (Mesore) IV Shemu",
              "tags": "20 mesore shemu4"
          }
      ],
      [
          {
              "id": 351,
              "action": "21 (Mesore) IV Shemu",
              "tags": "21 mesore shemu4"
          }
      ],
      [
          {
              "id": 352,
              "action": "22 (Mesore) IV Shemu",
              "tags": "22 mesore shemu4"
          }
      ],
      [
          {
              "id": 353,
              "action": "23 (Mesore) IV Shemu",
              "tags": "23 mesore shemu4"
          }
      ],
      [
          {
              "id": 354,
              "action": "24 (Mesore) IV Shemu",
              "tags": "24 mesore shemu4"
          }
      ],
      [
          {
              "id": 355,
              "action": "25 (Mesore) IV Shemu",
              "tags": "25 mesore shemu4"
          }
      ],
      [
          {
              "id": 356,
              "action": "26 (Mesore) IV Shemu",
              "tags": "26 mesore shemu4"
          }
      ],
      [
          {
              "id": 357,
              "action": "27 (Mesore) IV Shemu",
              "tags": "27 mesore shemu4"
          }
      ],
      [
          {
              "id": 358,
              "action": "28 (Mesore) IV Shemu",
              "tags": "28 mesore shemu4"
          }
      ],
      [
          {
              "id": 359,
              "action": "29 (Mesore) IV Shemu",
              "tags": "29 mesore shemu4"
          }
      ],
      [
          {
              "id": 360,
              "action": "30 (Mesore) IV Shemu",
              "tags": "30 mesore shemu4"
          }
      ],
      [
          {
              "id": 361,
              "action": "1 (Epag) Heriu-renpet",
              "tags": "1 epag heriurenpet epag"
          }
      ],
      [
          {
              "id": 362,
              "action": "2 (Epag) Heriu-renpet",
              "tags": "2 epag heriurenpet epag"
          }
      ],
      [
          {
              "id": 363,
              "action": "3 (Epag) Heriu-renpet",
              "tags": "3 epag heriurenpet epag"
          }
      ],
      [
          {
              "id": 364,
              "action": "4 (Epag) Heriu-renpet",
              "tags": "4 epag heriurenpet epag"
          }
      ],
      [
          {
              "id": 365,
              "action": "5 (Epag) Heriu-renpet",
              "tags": "5 epag heriurenpet epag"
          }
      ]
      ,
      [
          {
              "id": 366,
              "action": "6 (Epag) Heriu-renpet",
              "tags": "6 epag heriurenpet epag"
          }
      ]
  ]
  },
  property: function(m) {
    return m.planetary.day.start;
  },
  calculate: function(definitions, property) {
    var ed = egyptianDate(property).day.ofyear + 1;
    return definitions.actions[ed];
  }
};

//Defines Calendar Objects and Methods
var module_kemet_civildate_alexandrian = {

  definitions: {
    name: "Civil Date (Alexandrian)",
    description: "Calculation of the date according to the reformed 365.25 day Alexandrian Civil calendar by Ptolemy III. in 238 BC and enforced by the Roman Emperor Augustus in 25 BC. It is also called Coptic Calendar.",
    group: {
      id: "kemet",
      text: "Kemet",
      info: "true"
    },
    actions: module_kemet_civildate_pharaonic.definitions.actions
  },
  property: function(m) {
    return m.planetary.day.start;
  },
  calculate: function(definitions, property) {
    var date = new Date(property * 1000);
    var cd = new Intl.DateTimeFormat('en', { calendar:'coptic', dateStyle:"short"})
    var cdl = cd.format(date).split(",")[0].split("/");
    var doy = ((parseInt(cdl[0]) - 1) * 30) + parseInt(cdl[1]);
    return definitions.actions[doy];
  }
};

var module_kemet_chronokrators_pharaonic = {
  definitions: {
    name: "Chronokrators (Pharaonic)",
    description: "Daily time-lord or guardian neter or neteru to whom each day of the year is assigned according to the Pharaonic Civil Calendar. (from 'The Ancient Egyptian Daybook' by Tamara L. Siuda)",
    group: {
      id: "kemet",
      text: "Kemet",
      info: "true"
    },
    actions: [
      [0],
      [
          {
              "id": 501,
              "action": "Horus (LGG5, 231, Dendera)",
              "tags": "horus"
          },
          {
              "id": 502,
              "action": "Sekhmet, Lady of Power (LGG4, 147, Dendera and Dendera Mammisi)",
              "tags": "power lady sekhmet"
          },
          {
              "id": 503,
              "action": "Horakhty (LGG5, 239, Dendera)",
              "tags": "horakhty"
          },
          {
              "id": 504,
              "action": "Hathor Greatest-in-Heaven (LGG2, 583, Dendera and Dendera Mammisi)",
              "tags": "greatest-in-heaven hathor"
          },
          {
              "id": 505,
              "action": "Ra (LGG4, 612; Louvre N3557)",
              "tags": "ra"
          },
          {
              "id": 506,
              "action": "Hathor, Lady of Shesmet (20th UE nome) (LGG4, 144, Edfu)",
              "tags": "lady hathor shesmet"
          }
      ],
      [
          {
              "id": 525,
              "action": "Shu (LGG7, 35 and Leitz TW 29, Dendera and Dendera Mammisi)",
              "tags": "shu"
          },
          {
              "id": 526,
              "action": "Hathor Lady of Terror, the Southern Female Horus (LGG4, 130, Dendera and Dendera Mammisi)",
              "tags": "horus southern hathor terror lady female"
          },
          {
              "id": 527,
              "action": "Osiris Lord-of-Wine-Throughout-the-Inundation (LA6, 1188)",
              "tags": "osiris lord-of-wine-throughout-the-inundation"
          },
          {
              "id": 528,
              "action": "Wadjet Lady of Shas-hotep (11th UE nome) (LGG4, 140, Edfu)",
              "tags": "shas-hotep lady wadjet"
          }
      ],
      [
          {
              "id": 539,
              "action": "Atum, Lord of Dendera (variant Osiris, Lord of Dendera) (LGG3, 172, Dendera and Dendera Mammisi)",
              "tags": "atum dendera lord"
          },
          {
              "id": 540,
              "action": "Sekhmet (LGG6, 557; Leitz TW 430)",
              "tags": "sekhmet"
          },
          {
              "id": 541,
              "action": "Hathor, Mistress of the Hill of the Qerhet-Snake (LGG4, 7, Edfu)",
              "tags": "mistress hathor hill qerhet-snake"
          }
      ],
      [
          {
              "id": 549,
              "action": "Hathor (LGG5, 76)",
              "tags": "hathor"
          },
          {
              "id": 550,
              "action": "Horus (LGG5, 231, Dendera)",
              "tags": "horus"
          },
          {
              "id": 551,
              "action": "Sokar (variants Horus or Golden-Horus) (LGG 6, 664, Dendera)",
              "tags": "sokar"
          },
          {
              "id": 552,
              "action": "Hathor, Lady of the Khetdes Tree (LGG4, 121, Edfu)",
              "tags": "lady hathor khetdes tree"
          }
      ],
      [
          {
              "id": 560,
              "action": "Horus (LGG5, 231; Leitz TW 431)",
              "tags": "horus"
          },
          {
              "id": 561,
              "action": "Ptah, Lord of Heaven (LGG3, 169, Dendera and Dendera Mammisi)",
              "tags": "lord ptah heaven"
          },
          {
              "id": 562,
              "action": "Sekhmet, Who Is Loved by Her Lord (LGG3, 348, Dendera and Dendera Mammisi)",
              "tags": "lord sekhmet loved"
          },
          {
              "id": 563,
              "action": "Wadjet, Lady of Letopolis (LGG4, 118, Edfu)",
              "tags": "lady wadjet letopolis"
          }
      ],
      [
          {
              "id": 570,
              "action": "Isis, Who Dresses Horus (LGG6, 715, Dendera and Dendera Mammisi)",
              "tags": "horus dresses isis"
          },
          {
              "id": 571,
              "action": "Sekhmet the Great (variant Iunmutef) (LGG1, 97, Dendera and Dendera Mammisi; LGG6, 557)",
              "tags": "sekhmet great"
          }
      ],
      [
          {
              "id": 577,
              "action": "Hathor, Lady of Offerings (LGG5, 83)",
              "tags": "lady hathor"
          },
          {
              "id": 578,
              "action": "Horus (LGG5, 231, Dendera)",
              "tags": "horus"
          },
          {
              "id": 579,
              "action": "Serqet (LGG6, 438, Dendera and Dendera Mammisi)",
              "tags": "serqet"
          },
          {
              "id": 580,
              "action": "Isis the Great (variants Hathor, Lady of Offerings and Horus-Lord-of-the-Sea) (LGG1, 70, Dendera)",
              "tags": "isis great"
          }
      ],
      [
          {
              "id": 586,
              "action": "Sekhmet, Lady of Shenut (9th UE nome)",
              "tags": "lady sekhmet shenut"
          },
          {
              "id": 587,
              "action": "Ra-Horakhty (LGG4, 630, Dendera and Dendera Mammisi; variant Nemty in Dendera, LGG4, 232)",
              "tags": "ra-horakhty"
          },
          {
              "id": 588,
              "action": "Feast of 'Anty (LGG4, 630, Dendera; LGG4, 232, written \"Nemty\" and listed as Chronokrat; CC2; Leitz TW 433)",
              "tags": "-anty"
          }
      ],
      [
          {
              "id": 592,
              "action": "Nut (LGG3, 535, Dendera and Dendera Mammisi; variant Tefnut LGG7, 406, Dendera; variant Ra LGG4, 612, Dendera)",
              "tags": "nut"
          },
          {
              "id": 593,
              "action": "Whose Head Is Her Pillar (epithet of the Eye of Ra) (LGG7, 383, Dendera and Dendera Mammisi)",
              "tags": "head whose pillar"
          }
      ],
      [
          {
              "id": 601,
              "action": "Min-Amun Who Is in the Opet Temple (LGG3, 291, Dendera)",
              "tags": "temple min-amun opet"
          },
          {
              "id": 602,
              "action": "Tefnut (LGG7, 406; Leitz TW 434)",
              "tags": "tefnut"
          },
          {
              "id": 603,
              "action": "The Female Atum, Lady of the Akhet-season (LGG7, 422, Dendera and Dendera Mammisi)",
              "tags": "atum lady akhet-season female"
          },
          {
              "id": 604,
              "action": "Isis, Lady of Emergence (LGG4, 57, Edfu)",
              "tags": "emergence lady isis"
          },
          {
              "id": 605,
              "action": "Isis, Lady of Netjeruwy (5th UE nome) (LGG4, 84, Edfu)",
              "tags": "netjeruwy lady isis"
          },
          {
              "id": 606,
              "action": "Amun (variant Min-Amun Who Is in the Opet Temple) (LGG1, 306; El-Sayed Neith I, 125 and 126)",
              "tags": "amun"
          }
      ],
      [
          {
              "id": 615,
              "action": "Isis Who Grasps the Ankh (LGG5, 723, Dendera and Dendera Mammisi)",
              "tags": "isis ankh grasps"
          },
          {
              "id": 616,
              "action": "Neith (LGG3, 511, Dendera and Dendera Mammisi)",
              "tags": "neith"
          }
      ],
      [
          {
              "id": 623,
              "action": "She Who Unites with Her Ba (epithet of the Eye of Ra) (LGG6, 21, Dendera and Dendera Mammisi)",
              "tags": "with unites ba she"
          },
          {
              "id": 624,
              "action": "Horus Khentykhety (LGG5, 849; Leitz TW 436; CC and CC2)",
              "tags": "horus khentykhety"
          }
      ],
      [
          {
              "id": 631,
              "action": "Hathor, the Female Sovereign (LGG5, 410, Dendera and Dendera Mammisi)",
              "tags": "hathor sovereign female"
          },
          {
              "id": 632,
              "action": "Hathor, Lady of the Per-Nu Chapel (i.e., the Upper Egyptian royal sanctuary) (LGG4, 55, Edfu and Dendera)",
              "tags": "lady hathor per-nu chapel"
          },
          {
              "id": 633,
              "action": "Osiris, Lord of Life (LGG2, 530, Dendera and Dendera Mammisi)",
              "tags": "lord life osiris"
          }
      ],
      [
          {
              "id": 640,
              "action": "Hathor, She of Beautiful Eldership/Age (LGG4, 227, Dendera and Dendera Mammisi)",
              "tags": "beautiful eldership she hathor age"
          },
          {
              "id": 641,
              "action": "Amun-Ra Great of Magic (LGG 2, 454, Dendera and Dendera Mammisi; variant Weret-hekau, the Eye Goddess \"Great of Magic,\" LGG2, 493, Dendera and Dendera Mammisi)",
              "tags": "magic great amun-ra"
          }
      ],
      [
          {
              "id": 648,
              "action": "Khons (the Khons-bull) (LGG5, 761; Leitz TW 438; Altenmüller 1975, 166)",
              "tags": "khons"
          },
          {
              "id": 649,
              "action": "Montu (LGG3, 319, Dendera and Dendera Mammisi)",
              "tags": "montu"
          }
      ],
      [
          {
              "id": 658,
              "action": "The Perfect Horus (LGG5, 264, Dendera Mammisi)",
              "tags": "perfect horus"
          },
          {
              "id": 659,
              "action": "Sepa (LGG6, 358; Leitz TW 439; may be mistranslated Sebaka in CC2)",
              "tags": "sepa"
          },
          {
              "id": 660,
              "action": "Hathor, Lady of the Horizon (LGG4, 5, Dendera and Dendera Mammisi)",
              "tags": "lady hathor horizon"
          },
          {
              "id": 661,
              "action": "Isis, Lady of the Thrones (LGG4, 123, Dendera and Dendera Mammisi)",
              "tags": "lady isis thrones"
          },
          {
              "id": 662,
              "action": "Hathor, Lady of the Firestarter (i.e., flint stone) (LGG4, 93, Dendera)",
              "tags": "firestarter lady hathor"
          },
          {
              "id": 663,
              "action": "Nebtu, Lady of the Temple of Neith (LGG4, 102, Edfu)",
              "tags": "temple lady neith nebtu"
          },
          {
              "id": 664,
              "action": "Feast of Sebaka (CC2; see above note on Sepa in Chronokrater list)",
              "tags": "sebaka"
          }
      ],
      [
          {
              "id": 666,
              "action": "The Perfect Horus (LGG5, 264, Dendera)",
              "tags": "perfect horus"
          },
          {
              "id": 667,
              "action": "Tefnut, Who Gives Birth to Her Father (LGG3, 415, Dendera)",
              "tags": "father birth gives tefnut"
          },
          {
              "id": 668,
              "action": "Tefnut (LGG7, 406, Dendera and Dendera Mammisi)",
              "tags": "tefnut"
          },
          {
              "id": 669,
              "action": "Sepa-Osiris (LGG6, 269, Dendera Mammisi)",
              "tags": "sepa-osiris"
          },
          {
              "id": 670,
              "action": "Hathor, Lady of the Lake (LGG4, 139, Edfu)",
              "tags": "lake lady hathor"
          }
      ],
      [
          {
              "id": 674,
              "action": "Hathor, Lady of the Walls (LGG4, 129, Edfu)",
              "tags": "lady hathor walls"
          },
          {
              "id": 675,
              "action": "Hathor, Who Created Atum (LGG1, 436, Dendera and Dendera Mammisi)",
              "tags": "created atum hathor"
          },
          {
              "id": 676,
              "action": "Wadjet (LGG2, 270, Dendera and Dendera Mammisi)",
              "tags": "wadjet"
          },
          {
              "id": 677,
              "action": "Osiris, Foremost of Westerners (LGG2, 530; Leitz TW 439, Dendera Mammisi)",
              "tags": "foremost osiris westerners"
          }
      ],
      [
          {
              "id": 690,
              "action": "The Seeker (epithet of the Eye of Ra) (LGG4, 356 Dendera and Edfu; variant Flame of the Foreign Lands, LGG7, 608, Dendera and Dendera Mammisi)",
              "tags": "seeker"
          },
          {
              "id": 691,
              "action": "Thoth (LGG7, 641 and Leitz TW 439, Dendera Mammisi; Leitz (2002) 153, Edfu)",
              "tags": "thoth edfu"
          },
          {
              "id": 692,
              "action": "Nephthys (LGG4, 96, Dendera Mammisi)",
              "tags": "nephthys"
          },
          {
              "id": 693,
              "action": "Hathor, Lady of Esna (LGG4, 128, Edfu)",
              "tags": "lady hathor esna"
          },
          {
              "id": 694,
              "action": "Isis (LGG1, 62, Dendera)",
              "tags": "isis"
          }
      ],
      [
          {
              "id": 704,
              "action": "Thoth (LGG7, 640 and Leitz (2002) 153, Edfu)",
              "tags": "thoth edfu"
          },
          {
              "id": 705,
              "action": "Sekhmet (LGG6, 557, Dendera and Dendera Mammisi; variation Osiris-Foremost-of-Westerners, LGG2, 530)",
              "tags": "sekhmet"
          },
          {
              "id": 706,
              "action": "Hathor, Lady of Kenken (unknown location) (LGG4, 150, Edfu)",
              "tags": "lady hathor kenken"
          },
          {
              "id": 707,
              "action": "The Great Eye (goddess) (LGG2, 478, Dendera and Dendera Mammisi)",
              "tags": "great eye"
          }
      ],
      [
          {
              "id": 715,
              "action": "Osiris (LGG2, 530; Leitz TW 440)",
              "tags": "osiris"
          },
          {
              "id": 716,
              "action": "Ra-Horakhty (LGG5, 630, Dendera; variant Horus Khentykhety LGG5, 279, Dendera and Dendera Mammisi)",
              "tags": "ra-horakhty"
          },
          {
              "id": 717,
              "action": "Hathor (LGG5, 76)",
              "tags": "hathor"
          },
          {
              "id": 718,
              "action": "Wadjet, Lady of the Fields (variant Lady of Buto) (LGG4, 132, Dendera)",
              "tags": "fields lady wadjet"
          }
      ],
      [
          {
              "id": 724,
              "action": "Mistress of the Embalming Hall (epithet of the Eye of Ra) (LGG4, 42, Dendera and Dendera Mammisi)",
              "tags": "mistress hall embalming"
          },
          {
              "id": 725,
              "action": "Hathor, Lady of Shetut (variant spelling Shadi) (LGG4, 145, Edfu)",
              "tags": "shetut lady hathor"
          },
          {
              "id": 726,
              "action": "She Who is in Her Moment (epithet of the Eye of Ra) (LGG1, 295, Dendera and Edfu)",
              "tags": "moment she"
          },
          {
              "id": 727,
              "action": "Wepwawet, Lord of the Mountain (LGG2, 343; Leitz TW 440)",
              "tags": "lord wepwawet mountain"
          },
          {
              "id": 728,
              "action": "Osiris, Great of Magic (LGG2, 454, Dendera Mammisi; variation Isis, Great of Magic, LGG2, 493, Dendera Mammisi)",
              "tags": "magic great osiris"
          }
      ],
      [
          {
              "id": 738,
              "action": "Anubis (LGG1, 394, Edfu)",
              "tags": "anubis"
          },
          {
              "id": 739,
              "action": "Sekhmet (variation Bast) (LGG6, 557, Dendera and Dendera Mammisi)",
              "tags": "sekhmet"
          },
          {
              "id": 740,
              "action": "Rait, Lady of the Sacred Boat (LGG4, 38, Dendera, Dendera Mammisi, and Edfu)",
              "tags": "sacred lady boat rait"
          },
          {
              "id": 741,
              "action": "Nekhbet, Lady of Upper Egypt (LGG4, 156, Edfu and Dendera)",
              "tags": "nekhbet lady upper egypt"
          },
          {
              "id": 742,
              "action": "Osiris, Lord of the Sacred Land (LGG2, 530, Dendera Mammisi)",
              "tags": "lord sacred land osiris"
          },
          {
              "id": 743,
              "action": "Bast, Lady of Ankhtawy (variant Sekhmet) (LGG2, 740, Dendera)",
              "tags": "ankhtawy lady bast"
          }
      ],
      [
          {
              "id": 746,
              "action": "Nut the Great (LGG3, 535 and 539, Dendera and Dendera Mammisi)",
              "tags": "great nut"
          },
          {
              "id": 747,
              "action": "Shezmu, Powerful of Heart (LGG7, 120, Dendera Mammisi)",
              "tags": "shezmu powerful heart"
          },
          {
              "id": 748,
              "action": "Shezemtet, Lady of Mesheru (LGG7, 124, Dendera, Dendera Mammisi, and Edfu)",
              "tags": "shezemtet lady mesheru"
          },
          {
              "id": 749,
              "action": "Osiris, Lord of the Sacred Land (LGG2, 530; Leitz TW 440, Edfu; Leitz (2002) 153, Edfu)",
              "tags": "lord osiris edfu sacred land"
          }
      ],
      [
          {
              "id": 753,
              "action": "Horus (LGG5, 231, Edfu)",
              "tags": "horus"
          },
          {
              "id": 754,
              "action": "Tefnut, Consort of the Gods (LGG7, 406, Dendera and Dendera Mammisi)",
              "tags": "consort tefnut"
          },
          {
              "id": 755,
              "action": "The Eldest (epithet of Ra) (LGG6, 347; Leitz TW 440)",
              "tags": "eldest"
          },
          {
              "id": 756,
              "action": "Isis, Who Makes Herself Sweet (LGG6, 409, Dendera Mammisi)",
              "tags": "herself sweet isis makes"
          },
          {
              "id": 757,
              "action": "Lady of Rage (epithet of the Eye of Ra) (LGG4, 83; variant She Whose Understanding Is Great, Lady of the Akhet Season, LGG2, 462, Dendera and Dendera Mammisi)",
              "tags": "lady rage"
          },
          {
              "id": 758,
              "action": "Renenutet, Lady of the Perfect Food Offerings (LGG4, 149, Edfu)",
              "tags": "food lady renenutet perfect"
          }
      ],
      [
          {
              "id": 762,
              "action": "Heka (LGG5, 443; Leitz TW 440, Dendera Mammisi)",
              "tags": "heka"
          },
          {
              "id": 763,
              "action": "Great Mut, Mistress of the House of Ptah (LGG3, 251, Dendera Mammisi)",
              "tags": "mistress mut great ptah"
          },
          {
              "id": 764,
              "action": "The High One (epithet of Osiris) (LGG7, 160, Dendera Mammisi)",
              "tags": "high one"
          },
          {
              "id": 765,
              "action": "Isis the Uniter (LGG6, 18, Dendera Mammisi; variant Sekhmet the Vigorous, LGG1, 19, Dendera Mammisi and Dendera)",
              "tags": "isis uniter"
          },
          {
              "id": 766,
              "action": "Hathor, Lady of the Libation Basin (Nebet Minet; note there is a city in the 10th UE nome by this name) (LGG4, 62, Dendera and Edfu)",
              "tags": "basin lady hathor libation"
          }
      ],
      [
          {
              "id": 772,
              "action": "Nekhbet the Secret One, Lady of Heaven (LGG7, 140, Dendera and Dendera Mammisi; variant Nekhbet, LGG4, 301, Dendera Mammisi)",
              "tags": "secret nekhbet one lady heaven"
          },
          {
              "id": 773,
              "action": "Khnum (LGG6, 26, Dendera Mammisi)",
              "tags": "khnum"
          },
          {
              "id": 774,
              "action": "Hathor, Mistress of Ra's Isheru-lake (LGG4, 23, Dendera Mammisi)",
              "tags": "mistress hathor isheru-lake ra"
          },
          {
              "id": 775,
              "action": "Mistress of the Jubilation of the Two Lands (epithet of the Eye of Ra) (LGG4, 94, Dendera Mammisi and Edfu)",
              "tags": "mistress jubilation lands two"
          },
          {
              "id": 776,
              "action": "Hathor, Lady of Foreign Lands (LGG4, 115, Dendera)",
              "tags": "lady hathor lands foreign"
          }
      ],
      [
          {
              "id": 780,
              "action": "Khonsu (LGG5, 762, Dendera Mammisi)",
              "tags": "khonsu"
          },
          {
              "id": 781,
              "action": "Khonsu-of-Thebes (LGG5, 764, Dendera and Dendera Mammisi)",
              "tags": "khonsu-of-thebes"
          },
          {
              "id": 782,
              "action": "Khonsu-in-Thebes-Neferhotep (LGG5, 765, Dendera)",
              "tags": "khonsu-in-thebes-neferhotep"
          },
          {
              "id": 783,
              "action": "Khendet (\"Weaver,\" maidservant of Neith) (LGG5, 944; Leitz TW 440)",
              "tags": "khendet"
          },
          {
              "id": 784,
              "action": "Hathor, Beloved of the Two Lords (LGG3, 348, Dendera and Dendera Mammisi)",
              "tags": "beloved lords hathor two"
          },
          {
              "id": 785,
              "action": "Hathor, Lady of the Festival (LGG4, 104, Edfu)",
              "tags": "lady hathor"
          }
      ],
      [
          {
              "id": 794,
              "action": "Khnum, Lord of Tell Tebilla (LGG6, 26, Dendera Mammisi)",
              "tags": "lord tebilla khnum tell"
          },
          {
              "id": 795,
              "action": "Isis, Lady of the Temples (LGG4, 104, Dendera and Dendera Mammisi)",
              "tags": "lady isis temples"
          },
          {
              "id": 796,
              "action": "Hathor, Lady of the Field of Ra (LGG4, 132, Edfu)",
              "tags": "lady hathor field ra"
          },
          {
              "id": 797,
              "action": "Ra-Horakhty (LGG4, 630, Dendera and Dendera Mammisi)",
              "tags": "ra-horakhty"
          }
      ],
      [
          {
              "id": 801,
              "action": "Sokar (LGG6, 664, Dendera and Dendera Mammisi)",
              "tags": "sokar"
          },
          {
              "id": 802,
              "action": "Hathor, Lady of the Followers/Retinue (LGG4, 143, Edfu)",
              "tags": "followers lady hathor retinue"
          },
          {
              "id": 803,
              "action": "Osiris (LGG2, 530, Dendera Mammisi)",
              "tags": "osiris"
          },
          {
              "id": 804,
              "action": "Osiris the Great (LGG2, 542; Leitz TW 441)",
              "tags": "great osiris"
          }
      ],
      [
          {
              "id": 812,
              "action": "Wadjet (LGG2, 270; Leitz TW 441)",
              "tags": "wadjet"
          },
          {
              "id": 813,
              "action": "Mut (LGG3, 251, Dendera and Dendera Mammisi)",
              "tags": "mut"
          },
          {
              "id": 814,
              "action": "Nehmet-Awai, Lady of Hermopolis Magna (LGG4, 119, Edfu)",
              "tags": "lady hermopolis magna nehmet-awai"
          },
          {
              "id": 815,
              "action": "Amun-Ra (epithets Lord of the Thrones of the Two Lands and Lord of Southern Behdet, LGG1, 321, Dendera and Dendera Mammisi)",
              "tags": "amun-ra"
          }
      ],
      [
          {
              "id": 821,
              "action": "Montu (LGG3, 319, Dendera and Dendera Mammisi)",
              "tags": "montu"
          },
          {
              "id": 822,
              "action": "Thoth (LGG7, 641, Edfu; Leitz TW 442)",
              "tags": "thoth"
          },
          {
              "id": 823,
              "action": "Hathor, Lady of the Mansion of the Cow (LGG4, 901, Edfu)",
              "tags": "lady hathor cow mansion"
          }
      ],
      [
          {
              "id": 831,
              "action": "Khonsu (LGG5, 762, Dendera Mammisi)",
              "tags": "khonsu"
          },
          {
              "id": 832,
              "action": "Lady of the Embalming House (variant Lady of the Annals of Ra's Power; variants attribute these epithets to four goddesses: Hathor, Nephthys, Heqat, and Isis in different locations; LGG4, 56, Dendera and Dendera Mammisi)",
              "tags": "lady embalming"
          },
          {
              "id": 833,
              "action": "Hathor, Lady of Neham (NW Delta location) (LGG4, 81)",
              "tags": "lady hathor neham"
          },
          {
              "id": 834,
              "action": "Powerful-Heart, Horus Lord of the Lake (LGG2, 12, Dendera and Dendera Mammisi)",
              "tags": "lord horus powerful-heart lake"
          },
          {
              "id": 835,
              "action": "Ra, Great of Magic (LGG2, 454; Leitz TW 442; CC2)",
              "tags": "magic great ra"
          }
      ],
      [
          {
              "id": 844,
              "action": "She in Whom Power Is Found (\"Gem[et]baues,\" epithet of Hathor and/or Bast and also the name of today's holiday) (LGG7, 310, Esna)",
              "tags": "power holiday name whom epithet or bast baues today found she and also hathor"
          },
          {
              "id": 845,
              "action": "Nebtu (LGG4, 34, Dendera, Dendera Mammisi, and Esna)",
              "tags": "nebtu"
          },
          {
              "id": 846,
              "action": "Isis and Nephthys (as a pair, LGG4, 96, Dendera and Dendera Mammisi)",
              "tags": "isis nephthys"
          },
          {
              "id": 847,
              "action": "Hathor, Lady of Khenmes (unknown location) (LGG4, 122, Edfu)",
              "tags": "lady hathor khenmes"
          },
          {
              "id": 848,
              "action": "Isis, Mother of God (LGG1, 62, Dendera)",
              "tags": "mother isis"
          }
      ],
      [
          {
              "id": 853,
              "action": "Isis-Hathor, Lady of the Gods, She Who Is Above the Wall (LGG5, 441, Dendera Mammisi)",
              "tags": "isis-hathor wall she above lady"
          },
          {
              "id": 854,
              "action": "Khonsu (LGG5, 762, Dendera Mammisi)",
              "tags": "khonsu"
          },
          {
              "id": 855,
              "action": "Hathor, Lady of Behbeit-el-Hagar (LGG4, 85, Edfu)",
              "tags": "lady hathor behbeit-el-hagar"
          },
          {
              "id": 856,
              "action": "Hathor, Lady of Dendera (LGG4, 85)",
              "tags": "lady hathor dendera"
          },
          {
              "id": 857,
              "action": "Nekhbet (LGG4, 301, Dendera and Dendera Mammisi)",
              "tags": "nekhbet"
          }
      ],
      [
          {
              "id": 862,
              "action": "Hathor, Lady of the Farmland (LGG4, 27)",
              "tags": "lady hathor farmland"
          },
          {
              "id": 863,
              "action": "Serqet (LGG6, 438, Dendera and Dendera Mammisi)",
              "tags": "serqet"
          },
          {
              "id": 864,
              "action": "She Who Is in the Hearts (epithet of the Eye of Ra) (LGG1, 290, Dendera and Dendera Mammisi)",
              "tags": "hearts she"
          }
      ],
      [
          {
              "id": 870,
              "action": "Shezemtet, Lady of Ankhtawy (LGG7, 124)",
              "tags": "ankhtawy shezemtet lady"
          },
          {
              "id": 871,
              "action": "The Red Crown, Eye of Horus (Chronokratin and holiday both) (LGG7, 574; Leitz TW 306; LGG1, 432)",
              "tags": "crown horus red eye"
          },
          {
              "id": 872,
              "action": "Hathor, Lady of the Hill-of-the-Wadi (LGG4, 6, Edfu)",
              "tags": "lady hathor hill-of-the-wadi"
          },
          {
              "id": 873,
              "action": "Hathor, Lady of Cows (LGG4, 21, Dendera; variant Lady of Aphroditopolis, LGG4, 160, Dendera Mammisi)",
              "tags": "lady hathor cows"
          },
          {
              "id": 874,
              "action": "Sekhmet, Lady of Khefa (unknown place) (LGG4, 118, Edfu)",
              "tags": "lady sekhmet khefa"
          },
          {
              "id": 875,
              "action": "Horus, Pillar ( ukh ) of Cusae (LGG2, 527, Dendera Mammisi)",
              "tags": "cusae pillar horus"
          }
      ],
      [
          {
              "id": 881,
              "action": "Tefnut (LGG7, 406, Dendera and Dendera Mammisi; variant Wadjet, Lady of the Two Lands, LGG2, 270)",
              "tags": "tefnut"
          },
          {
              "id": 882,
              "action": "Hathor, Lady of the Obsidian Knife (LGG4, 167, Edfu)",
              "tags": "lady hathor knife obsidian"
          },
          {
              "id": 883,
              "action": "Sekhmet, Lady of the Borders of the Places (LGG4, 171, Dendera and Dendera Mammisi)",
              "tags": "borders lady sekhmet places"
          },
          {
              "id": 884,
              "action": "\"Weeper in the Necropolis\" (decan spirit) (CC2; Leitz TW 442, Edfu; LGG4, 670, Dendera Mammisi)",
              "tags": "necropolis weeper"
          }
      ],
      [
          {
              "id": 887,
              "action": "Hathor, the Menat of Horus (LGG3, 299, Dendera and Dendera Mammisi)",
              "tags": "hathor horus menat"
          },
          {
              "id": 888,
              "action": "Neith (LGG3, 511, Dendera)",
              "tags": "neith"
          },
          {
              "id": 889,
              "action": "Tefnut, Daughter of Ra (variant Neith, LGG7, 406, Dendera and Dendera Mammisi)",
              "tags": "daughter ra tefnut"
          },
          {
              "id": 890,
              "action": "Hathor, Lady of the Mansion of Mehyt (8th UE nome) (LGG4, 101, Edfu)",
              "tags": "lady hathor mehyt mansion"
          }
      ],
      [
          {
              "id": 895,
              "action": "Menhyt (LGG3, 306, Edfu)",
              "tags": "menhyt"
          },
          {
              "id": 896,
              "action": "Horus, Lord of Stomping (variant Horus Lord of Heaven, LGG3, 662, Dendera and Dendera Mammisi)",
              "tags": "lord stomping horus"
          },
          {
              "id": 897,
              "action": "Atum (LGG7, 412, Edfu)",
              "tags": "atum"
          },
          {
              "id": 898,
              "action": "Nekhbet, Who Tightens the Bow(strings) (LGG7, 539, Dendera and Dendera Mammisi)",
              "tags": "nekhbet bow tightens"
          },
          {
              "id": 899,
              "action": "Isis, Lady of Heaven (LGG4, 49, Dendera)",
              "tags": "lady heaven isis"
          }
      ],
      [
          {
              "id": 902,
              "action": "Montu (LGG3, 319, Dendera and Dendera Mammisi)Tefnut (alternate line reads Montu, LGG7, 406, Dendera)",
              "tags": "montu tefnut"
          },
          {
              "id": 903,
              "action": "Sekhmet, Lady of the Mehen-Snake (LGG4, 66, Dendera and Dendera Mammisi)",
              "tags": "lady sekhmet mehen-snake"
          },
          {
              "id": 904,
              "action": "Sekhmet, Lady of the City of Her Lake (LGG4, 70, Edfu)",
              "tags": "lake lady sekhmet city"
          }
      ],
      [
          {
              "id": 907,
              "action": "Hathor, Who Glorifies the Two Lords (LGG6, 157, Dendera Mammisi; variant Hathor, Who Is Effective for the Two Lords, LGG1, 32, Dendera)",
              "tags": "glorifies hathor two lords"
          },
          {
              "id": 908,
              "action": "Ra-Horakhty (LGG4, 630, Dendera and Dendera Mammisi)",
              "tags": "ra-horakhty"
          },
          {
              "id": 909,
              "action": "\"If She Comes, She Is Great\" (epithet of Mut, LGG1, 152, Edfu)",
              "tags": "if comes great she"
          }
      ],
      [
          {
              "id": 912,
              "action": "Imsety, Son of Ra ( sic ) (LGG1, 368, Dendera Mammisi)",
              "tags": "ra imsety son"
          },
          {
              "id": 913,
              "action": "Hathor, Lady of the House (LGG4, 53, Edfu)",
              "tags": "lady hathor"
          },
          {
              "id": 914,
              "action": "Hathor, Lady of the Twin Mountains (LGG4, 169, Dendera and Dendera Mammisi)",
              "tags": "mountains lady hathor twin"
          },
          {
              "id": 915,
              "action": "Isis the Great, Mother of God (LGG2, 478, Dendera and Dendera Mammisi)",
              "tags": "mother isis great"
          }
      ],
      [
          {
              "id": 919,
              "action": "Harsaphes (LGG5, 381, Dendera and Dendera Mammisi)",
              "tags": "harsaphes"
          },
          {
              "id": 920,
              "action": "Mut, Who Pervades the Two Lands (LGG5, 760, Dendera and Dendera Mammisi)",
              "tags": "pervades two mut lands"
          },
          {
              "id": 921,
              "action": "Bast, Lady of Khabas (city near Memphis) (LGG4, 115, Edfu)",
              "tags": "khabas lady bast"
          }
      ],
      [
          {
              "id": 926,
              "action": "Ha'a \"The Jubilating One\" (form of Osiris) (LGG5, 33, Dendera)",
              "tags": "ha-a one jubilating"
          },
          {
              "id": 927,
              "action": "Hathor, the Female Sovereign (LGG5, 536, Dendera and Dendera Mammisi)",
              "tags": "hathor sovereign female"
          },
          {
              "id": 928,
              "action": "Hathor, Lady of Bakhu (the eastern mountain) (LGG4, 45, Dendera and Dendera Mammisi)",
              "tags": "lady hathor bakhu"
          },
          {
              "id": 929,
              "action": "Hathor, Lady of Kharu (Syria?) (LGG4, 115, Edfu)",
              "tags": "kharu lady hathor"
          },
          {
              "id": 930,
              "action": "Isis (LGG1, 62; Leitz TW 443)",
              "tags": "isis"
          }
      ],
      [
          {
              "id": 936,
              "action": "Tefnut (LGG7, 406, Dendera)",
              "tags": "tefnut"
          },
          {
              "id": 937,
              "action": "Hathor, Lady of the Beautiful Hill (LGG4, 6, Dendera and Dendera Mammisi)",
              "tags": "hill lady hathor beautiful"
          },
          {
              "id": 938,
              "action": "Onuris (LGG1, 378, Dendera Mammisi)",
              "tags": "onuris"
          },
          {
              "id": 939,
              "action": "The Red One, Eye of Horus (the Red Crown) (LGG1, 432; Leitz TW 442)",
              "tags": "one horus red eye"
          },
          {
              "id": 940,
              "action": "Anat (LGG2, 174, Dendera and Dendera Mammisi)",
              "tags": "anat"
          }
      ],
      [
          {
              "id": 945,
              "action": "Thoth, Lord of Hermopolis Magna (LGG3, 716, Dendera; variant Thoth, Opener of Ma'at, LGG7, 641, Dendera and Dendera Mammisi)",
              "tags": "lord thoth hermopolis magna"
          },
          {
              "id": 946,
              "action": "Hathor, Who Permits Horus to Stand/Fight (LGG4, 33, Dendera Mammisi and Kom Ombo; LGG2, 195, Dendera)",
              "tags": "horus stand fight hathor permits"
          }
      ],
      [
          {
              "id": 952,
              "action": "Lady of Awakening (epithet of the Eye of Ra) (LGG4, 89, Dendera Mammisi and Kom Ombo)",
              "tags": "lady awakening"
          },
          {
              "id": 953,
              "action": "Hathor, Lady of the Tjenenet-Shrine (LGG4, 165, Edfu)",
              "tags": "lady hathor tjenenet-shrine"
          },
          {
              "id": 954,
              "action": "Isis the Watchful (LGG4, 719, Dendera)",
              "tags": "watchful isis"
          },
          {
              "id": 955,
              "action": "Amun-Ra (variant Amun-Ra, Lord of the Thrones of the Two Lands) (LGG1, 321, Dendera and Dendera Mammisi)",
              "tags": "amun-ra"
          }
      ],
      [
          {
              "id": 960,
              "action": "Nebtu (LGG4, 34, Dendera; variant Lady of the City, LGG4, 70)",
              "tags": "nebtu"
          },
          {
              "id": 961,
              "action": "Hathor, Lady of the Walls (LGG4, 124, Edfu and Kom Ombo)",
              "tags": "lady hathor walls"
          },
          {
              "id": 962,
              "action": "Banebdjedet (LGG2, 683, Dendera and Dendera Mammisi)",
              "tags": "banebdjedet"
          }
      ],
      [
          {
              "id": 967,
              "action": "Harsiese (LGG5, 231 and 283, Dendera)",
              "tags": "harsiese"
          },
          {
              "id": 968,
              "action": "Harsiese and Set (together) (LGG5, 231; LGG6, 692; Leitz TW 443; Edfu)",
              "tags": "set harsiese"
          },
          {
              "id": 969,
              "action": "Horus the Great (LGG5, 246, Dendera)",
              "tags": "horus great"
          },
          {
              "id": 970,
              "action": "Horus of Behdet (LGG5, 254, Dendera)",
              "tags": "behdet horus"
          },
          {
              "id": 971,
              "action": "Hathor, Lady of the A'aru Tree (LGG4, 32, Dendera, Dendera Mammisi, and Kom Ombo)",
              "tags": "lady hathor a-aru tree"
          },
          {
              "id": 972,
              "action": "Sekhmet, Lady of Sahret (unknown location) (LGG4, 131, Edfu and Kom Ombo)",
              "tags": "lady sekhmet sahret"
          }
      ],
      [
          {
              "id": 975,
              "action": "Atum (LGG7, 412, Dendera and Dendera Mammisi)",
              "tags": "atum"
          },
          {
              "id": 976,
              "action": "Lady of the Flood (epithet of the Eye of Ra) (LGG4, 5, Dendera, Dendera Mammisi, and Kom Ombo)",
              "tags": "flood lady"
          },
          {
              "id": 977,
              "action": "Mut, Lady of What She Loves (alternate reading: Lady of Her Canals) (LGG4, 64, Edfu)",
              "tags": "loves she what lady mut"
          },
          {
              "id": 978,
              "action": "Neith, Lady of the Thrones (LGG4, 123, Edfu and Kom Ombo)",
              "tags": "neith lady thrones"
          }
      ],
      [
          {
              "id": 981,
              "action": "Iah (LGG1, 146, Dendera and Dendera Mammisi; LGG5, 492, Dendera Mammisi)",
              "tags": "iah"
          },
          {
              "id": 982,
              "action": "Hathor, Lady of Dendera (LGG4, 11, Dendera and Kom Ombo)",
              "tags": "lady hathor dendera"
          },
          {
              "id": 983,
              "action": "Sekhmet, Whose Heart Is Greater Than Her Father's (LGG2, 483, Dendera, Dendera Mammisi, and Kom Ombo)",
              "tags": "whose than sekhmet greater heart father"
          }
      ],
      [
          {
              "id": 986,
              "action": "Amun(-Ra) the Ruler (LGG5, 492, Dendera Mammisi)",
              "tags": "amun ruler"
          },
          {
              "id": 987,
              "action": "Mut, Lady of Heaven (LGG3, 251, Dendera Mammisi)",
              "tags": "lady heaven mut"
          },
          {
              "id": 988,
              "action": "Serqet, Mistress of Silence (LGG6, 438, Dendera Mammisi and Kom Ombo; variant Hathor, Mistress of Silence LGG4, 137, Dendera and Edfu)",
              "tags": "mistress serqet silence"
          },
          {
              "id": 989,
              "action": "Hathor, Lady of the Great Sycamore (LGG4, 79, Edfu and Kom Ombo)",
              "tags": "lady hathor great sycamore"
          }
      ],
      [
          {
              "id": 991,
              "action": "Horus, Lord of Stomping in Rosetjau (variant Horus, Lord of Stomping in Heaven) (LGG3, 663, Dendera and Dendera Mammisi)",
              "tags": "lord stomping rosetjau horus"
          },
          {
              "id": 992,
              "action": "Hathor, Lady of the Great Sycamore (LGG4, 79, Edfu and Kom Ombo)",
              "tags": "lady hathor great sycamore"
          },
          {
              "id": 993,
              "action": "She Who Is in the Great Lake (epithet of the Eye of Ra) (LGG1, 295, Dendera, Dendera Mammisi, Edfu, and Kom Ombo)",
              "tags": "lake great she"
          }
      ],
      [
          {
              "id": 995,
              "action": "Isis, Foremost of the Divine Tent (LGG5, 929 and LGG1, 62, Dendera, Dendera Mammisi, and Kom Ombo)",
              "tags": "foremost isis divine tent"
          },
          {
              "id": 996,
              "action": "Ptah, Lord of Ankhtawy (LGG3, 169, Dendera Mammisi)",
              "tags": "lord ptah ankhtawy"
          },
          {
              "id": 997,
              "action": "Hathor, Lady of Bia (\"miraculous,\" a name for Egypt) (LGG4, 46, Edfu and Kom Ombo)",
              "tags": "lady hathor bia"
          },
          {
              "id": 998,
              "action": "Hathor, Lady of Stomping in Rosetjau (variant Hathor, Lady of Stomping in Heaven; counterpart to yesterday's Chronokrat) (LGG4, 76, Dendera)",
              "tags": "lady hathor rosetjau stomping"
          },
          {
              "id": 999,
              "action": "Great Isis, Mother of God (LGG2, 478, Dendera and Dendera Mammisi)",
              "tags": "mother isis great"
          }
      ],
      [
          {
              "id": 1002,
              "action": "Tayet (LGG7, 360, Dendera, Dendera Mammisi, Edfu, and Kom Ombo)",
              "tags": "tayet"
          },
          {
              "id": 1003,
              "action": "Hathor, Lady of Saturation (floodwater) (LGG4, 124, Edfu and Kom Ombo)",
              "tags": "lady hathor saturation"
          },
          {
              "id": 1004,
              "action": "Iah (LGG1, 147, Dendera)",
              "tags": "iah"
          },
          {
              "id": 1005,
              "action": "Ptah, Who Is in the Temple (LGG1, 274, Dendera and Dendera Mammisi)",
              "tags": "temple ptah"
          }
      ],
      [
          {
              "id": 1009,
              "action": "Hathor, the Staring One (variant Sekhmet the Devourer) (LGG7, 301, Dendera Mammisi and Kom Ombo; LGG2, 411, Dendera)",
              "tags": "one hathor staring"
          },
          {
              "id": 1010,
              "action": "Isis, Lady of Lamentation (LGG4, 93, Edfu and Kom Ombo)",
              "tags": "lady isis lamentation"
          },
          {
              "id": 1011,
              "action": "Amunet the Cow (LGG1, 537, Dendera and Dendera Mammisi)",
              "tags": "amunet cow"
          },
          {
              "id": 1012,
              "action": "[Horus], Lord of Athribis (Leitz (2002) 151, Edfu)",
              "tags": "lord athribis edfu"
          }
      ],
      [
          {
              "id": 1015,
              "action": "Khonsu-in-Thebes (LGG5, 764, Dendera and Dendera Mammisi)",
              "tags": "khonsu-in-thebes"
          },
          {
              "id": 1016,
              "action": "Khonsu-in-Thebes-Neferhotep (LGG5, 765, Dendera)",
              "tags": "khonsu-in-thebes-neferhotep"
          },
          {
              "id": 1017,
              "action": "Hathor, Ornamented (or Causing Ornamentation) from the Beginning (LGG6, 56, Dendera, Dendera Mammisi, and Kom Ombo; variant Ma'at, Ornamented from the Beginning, LGG6, 596, Dendera)",
              "tags": "beginning hathor ornamented"
          },
          {
              "id": 1018,
              "action": "Hathor, Lady of the Eldest Ones (LGG4, 128, Edfu and Kom Ombo)",
              "tags": "lady hathor eldest ones"
          }
      ],
      [
          {
              "id": 1023,
              "action": "Hathor, Lady of the Incense-Grains (LGG4, 122, Edfu and Kom Ombo)",
              "tags": "lady hathor incense-grains"
          },
          {
              "id": 1024,
              "action": "Ra-Horakhty (LGG4, 630, Dendera and Dendera Mammisi)",
              "tags": "ra-horakhty"
          }
      ],
      [
          {
              "id": 1026,
              "action": "Sokar (LGG6, 664, Dendera and Dendera Mammisi)",
              "tags": "sokar"
          },
          {
              "id": 1027,
              "action": "Hathor (variant epithets: Lady of the Hill of the Shield, LGG4, 6, Dendera; Lady of the Hill of Creation, LGG4, 7, Dendera and Dendera Mammisi; Lady of the Mansion of the Flood/Great of Flood, LGG4, 102, Edfu and Kom Ombo)",
              "tags": "hathor"
          }
      ],
      [
          {
              "id": 1034,
              "action": "Sekhmet (LGG6, 557, Dendera; variant Bast LGG2, 740)",
              "tags": "sekhmet"
          },
          {
              "id": 1035,
              "action": "Hathor, Lady of the Primordial Time (LGG4, 51, Dendera, Dendera Mammisi, and Kom Ombo)",
              "tags": "lady hathor primordial time"
          },
          {
              "id": 1036,
              "action": "Osiris (LGG2, 530, Dendera Mammisi)",
              "tags": "osiris"
          }
      ],
      [
          {
              "id": 1041,
              "action": "Neith, Who Protects the Land (LGG6, 139, Dendera; LGG4, 124, Kom Ombo)",
              "tags": "neith land protects"
          },
          {
              "id": 1042,
              "action": "Nebtu (LGG4, 34, Edfu and Kom Ombo)",
              "tags": "nebtu"
          },
          {
              "id": 1043,
              "action": "Onuris (LGG1, 378, Dendera and Dendera Mammisi)",
              "tags": "onuris"
          }
      ],
      [
          {
              "id": 1047,
              "action": "Dedun (Nubian god) (LGG7, 579, Dendera Mammisi)",
              "tags": "dedun"
          },
          {
              "id": 1048,
              "action": "Sekhmet (LGG6, 557, Dendera)",
              "tags": "sekhmet"
          },
          {
              "id": 1049,
              "action": "Wenut, Lady of Hermopolis (LGG4, 41, Edfu and Kom Ombo)",
              "tags": "lady hermopolis wenut"
          },
          {
              "id": 1050,
              "action": "Mut-Nebtu, Lady of the Annals of the Power of Ra (variant Lady of the Embalming House) (LGG4, 152, Dendera)",
              "tags": "power annals mut-nebtu lady ra"
          }
      ],
      [
          {
              "id": 1053,
              "action": "Horus Who Is Over the Year (LGG5, 371, Dendera Mammisi)",
              "tags": "over horus year"
          },
          {
              "id": 1054,
              "action": "Tefnut (LGG7, 406, Dendera)",
              "tags": "tefnut"
          },
          {
              "id": 1055,
              "action": "Hathor, Lady of Khu (unknown city) (LGG4, 117, Edfu and Kom Ombo)",
              "tags": "lady hathor khu"
          },
          {
              "id": 1056,
              "action": "She Who Judges for Her Father (epithet of the Eye of Ra) (LGG2, 359, Dendera, Dendera Mammisi, and Kom Ombo)",
              "tags": "father judges she"
          }
      ],
      [
          {
              "id": 1058,
              "action": "Nut, the White Cow (LGG5, 738, Dendera, Dendera Mammisi, and Kom Ombo)",
              "tags": "cow white nut"
          },
          {
              "id": 1059,
              "action": "Hathor, Lady of Fear (LGG4, 77, Edfu and Kom Ombo)",
              "tags": "lady hathor fear"
          },
          {
              "id": 1060,
              "action": "Hathor, Lady of Offerings (LGG4, 111, Dendera)",
              "tags": "lady hathor"
          },
          {
              "id": 1061,
              "action": "Isis, She Who Completes Her Forms (LGG2, 180, Dendera)",
              "tags": "forms isis she completes"
          },
          {
              "id": 1062,
              "action": "Ra's Sacred Barque (LGG2, 278, Dendera Mammisi)",
              "tags": "barque sacred ra"
          }
      ],
      [
          {
              "id": 1064,
              "action": "Neith (LGG3, 611, Dendera)",
              "tags": "neith"
          },
          {
              "id": 1065,
              "action": "Isis, Lady of Coptos (LGG4, 85)",
              "tags": "lady isis coptos"
          },
          {
              "id": 1066,
              "action": "Neith, Opener of the Ways (Neith-Wepwawet) (LGG2, 359, Dendera, Dendera Mammisi, and Kom Ombo)",
              "tags": "neith ways opener"
          },
          {
              "id": 1067,
              "action": "Osiris (LGG2, 530, Dendera Mammisi)",
              "tags": "osiris"
          }
      ],
      [
          {
              "id": 1071,
              "action": "Nut (LGG3, 535, Dendera)",
              "tags": "nut"
          },
          {
              "id": 1072,
              "action": "Tefnut, Lady of the Angry Glance (LGG4, 1, Dendera Mammisi and Kom Ombo; variant Lady of the Primordial Time, LGG4, 51, Dendera)",
              "tags": "glance lady angry tefnut"
          },
          {
              "id": 1073,
              "action": "Lady of the River (epithet of the Eye of Ra) (LGG4, 24, Edfu and Kom Ombo)",
              "tags": "river lady"
          }
      ],
      [
          {
              "id": 1076,
              "action": "Neith, Mistress of the Primeval Hill (LGG4, 6, Edfu and Kom Ombo)",
              "tags": "neith mistress hill primeval"
          },
          {
              "id": 1077,
              "action": "Ra-Horakhty (LGG4, 630, Dendera and Dendera Mammisi)",
              "tags": "ra-horakhty"
          },
          {
              "id": 1078,
              "action": "Wadjet (LGG2, 270, Dendera) (variant Powerful One, epithet of Hathor, LGG2, 579, Dendera Mammisi and Kom Ombo)",
              "tags": "wadjet"
          }
      ],
      [
          {
              "id": 1081,
              "action": "Hathor, Mistress of Forms (LGG4, 19, Dendera Mammisi; variant Hathor, Great of Form, LGG1, 534, Dendera)",
              "tags": "forms mistress hathor"
          },
          {
              "id": 1082,
              "action": "Hathor, Lady of Sunbeams (LGG4 32, Edfu and Kom Ombo)",
              "tags": "lady hathor sunbeams"
          },
          {
              "id": 1083,
              "action": "Osiris (LGG2, 530, Dendera)",
              "tags": "osiris"
          }
      ],
      [
          {
              "id": 1085,
              "action": "Harsaphes (LGG5, 381, Dendera and Dendera Mammisi)",
              "tags": "harsaphes"
          },
          {
              "id": 1086,
              "action": "Foremost in Her Protection (epithet of the Eye of Ra) (LGG5, 910, Dendera; variant Foremost of Her Ka, LGG5, 931, Dendera Mammisi)",
              "tags": "foremost protection"
          },
          {
              "id": 1087,
              "action": "Hathor, Lady of the Complete Ones (LGG4, 32, Edfu)",
              "tags": "complete lady hathor ones"
          }
      ],
      [
          {
              "id": 1090,
              "action": "Horus, Lord of Stomping (LGG3, 662, Dendera and Dendera Mammisi)",
              "tags": "lord stomping horus"
          },
          {
              "id": 1091,
              "action": "Seshat-Seven-Horned, Lady of the Walls (LGG4, 23, Edfu)",
              "tags": "walls lady seshat-seven-horned"
          },
          {
              "id": 1092,
              "action": "Hathor, Lady of Cereals (LGG4, 37, Dendera and Dendera Mammisi)",
              "tags": "lady hathor cereals"
          }
      ],
      [
          {
              "id": 1094,
              "action": "Shu (LGG7, 35, Dendera and Dendera Mammisi)",
              "tags": "shu"
          },
          {
              "id": 1095,
              "action": "Seshat-Seven-Horned, Lady of the Walls (LGG4, 23, Edfu) (note: two days in a row)",
              "tags": "walls lady seshat-seven-horned"
          },
          {
              "id": 1096,
              "action": "Isis, the Great Lady (LGG4, 42, Dendera)",
              "tags": "lady isis great"
          }
      ],
      [
          {
              "id": 1099,
              "action": "Hathor the Embracer (LGG6, 571, Dendera)",
              "tags": "hathor embracer"
          },
          {
              "id": 1100,
              "action": "Hathor, Lady of Offerings (LGG4, 110, Edfu)",
              "tags": "lady hathor"
          },
          {
              "id": 1101,
              "action": "Astarte (LGG2, 174, Dendera; variant Anat, LGG2, 212, Dendera)",
              "tags": "astarte"
          },
          {
              "id": 1102,
              "action": "Babai (form of Set) (LGG2, 737, Dendera Mammisi)",
              "tags": "babai"
          }
      ],
      [
          {
              "id": 1105,
              "action": "Neith (LGG3, 511, Dendera)",
              "tags": "neith"
          },
          {
              "id": 1106,
              "action": "Thoth, Lord of Hermopolis (LGG7, 641, Dendera Mammisi; Leitz 2002, 151, Edfu)",
              "tags": "lord thoth hermopolis"
          },
          {
              "id": 1107,
              "action": "Nekhbet, Lady of the Wereret-Crown (LGG4, 42, Edfu)",
              "tags": "nekhbet lady wereret-crown"
          },
          {
              "id": 1108,
              "action": "Isis, Lady of Growth (LGG4, 90, Dendera)",
              "tags": "lady isis growth"
          }
      ],
      [
          {
              "id": 1110,
              "action": "Horus (LGG5, 231, Dendera)",
              "tags": "horus"
          },
          {
              "id": 1111,
              "action": "Horus of Behdet (LGG5, 254, Dendera)",
              "tags": "behdet horus"
          },
          {
              "id": 1112,
              "action": "Khonsu (LGG5, 762, Dendera Mammisi)",
              "tags": "khonsu"
          },
          {
              "id": 1113,
              "action": "Mut the Great, Lady of Tell-el-Balamun (LGG4, 128, Dendera; variant Isis in one location)",
              "tags": "lady mut tell-el-balamun great"
          },
          {
              "id": 1114,
              "action": "Isis, Lady of the Snake Dens (LGG4, 164, Edfu)",
              "tags": "lady dens isis snake"
          },
          {
              "id": 1115,
              "action": "Isis (variant Hathor the Great, Lady United with Behdet) (LGG1, 62, Dendera)",
              "tags": "isis"
          }
      ],
      [
          {
              "id": 1117,
              "action": "Thoth, Lord of Hermopolis Magna (LGG3, 716, Dendera and Dendera Mammisi)",
              "tags": "lord thoth hermopolis magna"
          },
          {
              "id": 1118,
              "action": "Hathor, Lady of Order (LGG4, 132, Edfu)",
              "tags": "lady hathor order"
          },
          {
              "id": 1119,
              "action": "Hathor, Lady of the Ka of Horus (LGG4, 148, Dendera)",
              "tags": "lady hathor horus ka"
          }
      ],
      [
          {
              "id": 1121,
              "action": "Sekhmet, She Who Grasps (LGG3, 371, Dendera)",
              "tags": "sekhmet she grasps"
          },
          {
              "id": 1122,
              "action": "The Jubilating Protectress (epithet of the Eye of Ra) (LGG3, 455, Dendera)",
              "tags": "protectress jubilating"
          },
          {
              "id": 1123,
              "action": "Hathor, Lady of the Lake of Khab (unknown location) (LGG4, 139, Edfu)",
              "tags": "lake lady hathor khab"
          }
      ],
      [
          {
              "id": 1127,
              "action": "Sekhmet, Lady of the Tent (LGG4, 131, Edfu; variant Sekhmet, Lady of the Divine Booth, LGG4, 132, Dendera)",
              "tags": "lady sekhmet tent"
          },
          {
              "id": 1128,
              "action": "Khonsu (LGG5, 762, Dendera)",
              "tags": "khonsu"
          }
      ],
      [
          {
              "id": 1130,
              "action": "Sekhmet, Lady of Heaven, Mistress of Ankhtawy (LGG6, 557, Dendera)",
              "tags": "ankhtawy mistress sekhmet lady heaven"
          },
          {
              "id": 1131,
              "action": "Isis-Hathor of the Heden-plants, Lady of the Forefront (Shore?) of Buto (LGG4, 44, Edfu)",
              "tags": "forefront isis-hathor heden-plants buto lady"
          },
          {
              "id": 1132,
              "action": "Hathor, Lady of the House of Women (LGG4, 56, Dendera)",
              "tags": "lady hathor women"
          }
      ],
      [
          {
              "id": 1135,
              "action": "Neith (LGG3, 511, Dendera)",
              "tags": "neith"
          },
          {
              "id": 1136,
              "action": "Hathor, Lady of Sharing/Dividing Up (LGG4, 58, Dendera)",
              "tags": "hathor sharing up lady dividing"
          }
      ],
      [
          {
              "id": 1139,
              "action": "Shezemtet (LGG7, 124, Dendera)",
              "tags": "shezemtet"
          },
          {
              "id": 1140,
              "action": "Hathor, Lady of the Swallow (bird) (LGG4, 63, Edfu)",
              "tags": "swallow lady hathor"
          },
          {
              "id": 1141,
              "action": "Osiris (LGG2, 530 and Leitz (2002) 153, Edfu)",
              "tags": "edfu osiris"
          }
      ],
      [
          {
              "id": 1145,
              "action": "Hathor, Lady of Thousands (LGG4, 114, Edfu)",
              "tags": "lady hathor thousands"
          },
          {
              "id": 1146,
              "action": "Wadjet, Mistress of the Two Lands (variant Mehyt) (LGG2, 270)",
              "tags": "mistress two wadjet lands"
          }
      ],
      [
          {
              "id": 1150,
              "action": "Hathor, Lady of the Horizon (LGG4, 5, Edfu)",
              "tags": "lady hathor horizon"
          },
          {
              "id": 1151,
              "action": "The Great Unifier (epithet of the Eye of Ra) (LGG1, 136, Dendera)",
              "tags": "great unifier"
          },
          {
              "id": 1152,
              "action": "Osiris (LGG2, 530, Dendera)",
              "tags": "osiris"
          }
      ],
      [
          {
              "id": 1157,
              "action": "Hathor, Lady of Offerings (LGG5, 83, Dendera)",
              "tags": "lady hathor"
          },
          {
              "id": 1158,
              "action": "Hathor, Lady of Uniting-with-the-Horizon (LGG5, 76 and LGG4, 8, Edfu)",
              "tags": "lady hathor uniting-with-the-horizon"
          },
          {
              "id": 1159,
              "action": "Mut of the Palace (LGG2, 183, Dendera)",
              "tags": "mut palace"
          }
      ],
      [
          {
              "id": 1165,
              "action": "Atum (LGG7, 412, Dendera)",
              "tags": "atum"
          },
          {
              "id": 1166,
              "action": "Hathor, Lady of Khab (unknown location) (LGG4, 121, Edfu)",
              "tags": "lady hathor khab"
          },
          {
              "id": 1167,
              "action": "Hathor, Lady of Divine Might (LGG4, 133, Dendera)",
              "tags": "lady hathor might divine"
          }
      ],
      [
          {
              "id": 1172,
              "action": "Isis, the Protector (LGG5, 666, Dendera)",
              "tags": "protector isis"
          },
          {
              "id": 1173,
              "action": "Isis, Lady of Offerings (LGG4, 26, Edfu)",
              "tags": "lady isis"
          },
          {
              "id": 1174,
              "action": "Onuris (LGG1, 378, Dendera)",
              "tags": "onuris"
          }
      ],
      [
          {
              "id": 1178,
              "action": "Sekhmet (LGG6, 557, Dendera)",
              "tags": "sekhmet"
          },
          {
              "id": 1179,
              "action": "Hathor, Lady of the Throne (LGG4, 123, Dendera)",
              "tags": "throne lady hathor"
          },
          {
              "id": 1180,
              "action": "Isis-Hathor, Lady of Ta-teb (unknown location) (LGG4, 157, Edfu)",
              "tags": "lady ta-teb isis-hathor"
          }
      ],
      [
          {
              "id": 1184,
              "action": "Hathor (LGG5, 76, Dendera)",
              "tags": "hathor"
          },
          {
              "id": 1185,
              "action": "Hathor, Lady of Sothis (LGG4, 127, Edfu)",
              "tags": "lady hathor sothis"
          }
      ],
      [
          {
              "id": 1192,
              "action": "Hathor, the Female Sovereign (LGG5, 536, Dendera)",
              "tags": "hathor sovereign female"
          },
          {
              "id": 1193,
              "action": "Sothis (LGG6, 292)",
              "tags": "sothis"
          },
          {
              "id": 1194,
              "action": "Bast (LGG2, 440, Dendera)",
              "tags": "bast"
          }
      ],
      [
          {
              "id": 1200,
              "action": "Hathor, Lady of Women (LGG4, 166, Dendera)",
              "tags": "lady hathor women"
          },
          {
              "id": 1201,
              "action": "Hathor, Lady of Offerings (LGG4, 111, Dendera)",
              "tags": "lady hathor"
          },
          {
              "id": 1202,
              "action": "Isis-Hathor, Lady of Bakchias (LGG4, 152, Edfu)",
              "tags": "bakchias lady isis-hathor"
          }
      ],
      [
          {
              "id": 1212,
              "action": "Hathor (LGG5, 76, Dendera; Leitz TW 147, Dendera)",
              "tags": "hathor"
          },
          {
              "id": 1213,
              "action": "Neith, Lady of the Neith-Nome (LGG4, 69, Edfu)",
              "tags": "neith lady neith-nome"
          },
          {
              "id": 1214,
              "action": "Amun (LGG1, 306; variant Amun-Ra Lord of the Thrones of the Two Lands in Schott, ZAS 98 (1970), 21-50, Edfu)",
              "tags": "edfu amun"
          },
          {
              "id": 1215,
              "action": "Amun-Ra (LGG1, 321, Dendera; variant Amun)",
              "tags": "amun-ra"
          }
      ],
      [
          {
              "id": 1227,
              "action": "Khonsu (LGG5, 762, Dendera)",
              "tags": "khonsu"
          },
          {
              "id": 1228,
              "action": "Khonsu-in-Thebes (LGG5, 764, Dendera; Aswan Isis temple block 248: see Bresciani, Assuan , 176)",
              "tags": "khonsu-in-thebes"
          },
          {
              "id": 1229,
              "action": "Mut, Lady of Isheru (LGG4, 22, Edfu)",
              "tags": "lady isheru mut"
          },
          {
              "id": 1230,
              "action": "Sekhmet, Lady of the Way (LGG4, 36, Dendera)",
              "tags": "lady sekhmet way"
          }
      ],
      [
          {
              "id": 1234,
              "action": "Neith (LGG3, 511, Dendera; Aswan, see Bresciani, Assuan 176)",
              "tags": "neith"
          },
          {
              "id": 1235,
              "action": "Hathor, Lady of the Sycamore(-quarter) (near Memphis; LGG4, 80, Edfu)",
              "tags": "lady hathor sycamore"
          },
          {
              "id": 1236,
              "action": "Sekhmet, Who Separates the Two Enjoyers/Pleasured Ones (LGG2, 360; reference to Nut and Geb)",
              "tags": "separates ones enjoyers pleasured two sekhmet"
          }
      ],
      [
          {
              "id": 1238,
              "action": "Nut, Who Gives Birth to the Gods (LGG3, 535, Dendera)",
              "tags": "birth gives nut"
          },
          {
              "id": 1239,
              "action": "Hathor, Lady of Embracing (LGG4, 19, Edfu)",
              "tags": "lady hathor embracing"
          },
          {
              "id": 1240,
              "action": "Hathor, Lady of the Elevated Farmlands (LGG4, 47, Dendera)",
              "tags": "elevated lady hathor farmlands"
          }
      ],
      [
          {
              "id": 1245,
              "action": "Tefnut, Consort of the Gods (LGG7, 406, Dendera)",
              "tags": "consort tefnut"
          },
          {
              "id": 1246,
              "action": "Hathor, Lady of the Vulva (LGG4, 25)",
              "tags": "lady hathor vulva"
          }
      ],
      [
          {
              "id": 1252,
              "action": "Isis-Hathor, the Female Horus (LGG5, 297, Dendera)",
              "tags": "horus female isis-hathor"
          },
          {
              "id": 1253,
              "action": "Sekhmet, Lady of the Knees (LGG4, 62, Edfu)",
              "tags": "knees lady sekhmet"
          },
          {
              "id": 1254,
              "action": "Hathor, Great One of Heliopolis (LGG2, 282, Dendera)",
              "tags": "one hathor heliopolis great"
          }
      ],
      [
          {
              "id": 1260,
              "action": "She Who Flies Off (Horus-Sepat, a female Horus) (LGG6, 273, Dendera)",
              "tags": "flies off she"
          },
          {
              "id": 1261,
              "action": "Isis, Mistress of the Island of Crocodilopolis (LGG4, 10, Edfu)",
              "tags": "mistress isis island crocodilopolis"
          },
          {
              "id": 1262,
              "action": "Banebdjedet (LGG2, 683, Dendera; variant Baenra \"soul of Ra,\" LA2, 688)",
              "tags": "banebdjedet"
          }
      ],
      [
          {
              "id": 1267,
              "action": "Horus, Lord of Stomping (LGG3, 662, Dendera; variant Horus Lord of Heaven)",
              "tags": "lord stomping horus"
          },
          {
              "id": 1268,
              "action": "Hathor, the Companion (LGG6, 346, Dendera)",
              "tags": "companion hathor"
          },
          {
              "id": 1269,
              "action": "Hathor, Lady of the Uga-Waterway (LGG4, 43, Edfu)",
              "tags": "lady hathor uga-waterway"
          },
          {
              "id": 1270,
              "action": "Isis, Lady of Heaven (LGG4, 49, Dendera)",
              "tags": "lady heaven isis"
          }
      ],
      [
          {
              "id": 1274,
              "action": "Mut, Lady of Heaven (LGG3, 251, Dendera)",
              "tags": "lady heaven mut"
          },
          {
              "id": 1275,
              "action": "Hathor, Lady of Thousands (LGG4, 114)",
              "tags": "lady hathor thousands"
          }
      ],
      [
          {
              "id": 1279,
              "action": "Sekhmet, Daughter of Osiris ( sic ) (LGG6, 103, Dendera)",
              "tags": "osiris sekhmet daughter"
          },
          {
              "id": 1280,
              "action": "Wenut, Lady of Hermopolis (LGG4, 41, Edfu)",
              "tags": "lady hermopolis wenut"
          },
          {
              "id": 1281,
              "action": "Bast (LGG2, 740, Dendera)",
              "tags": "bast"
          }
      ],
      [
          {
              "id": 1284,
              "action": "Neith, Lady of Sais (LGG4, 124, Edfu)",
              "tags": "neith lady sais"
          },
          {
              "id": 1285,
              "action": "Isis (LGG1, 62, Dendera)",
              "tags": "isis"
          }
      ],
      [
          {
              "id": 1290,
              "action": "Great Thoth, Lord of Hermopolis Magna (LGG7, 614; LGG3, 716; Dendera)",
              "tags": "lord magna great hermopolis thoth"
          },
          {
              "id": 1291,
              "action": "The Manifestations ( Iru ) of Bast (LGG1, 534, Dendera)",
              "tags": "manifestations bast"
          },
          {
              "id": 1292,
              "action": "Neith, She Who Is Great (LGG2, 10, Edfu)",
              "tags": "neith great she"
          }
      ],
      [
          {
              "id": 1296,
              "action": "Harsaphes (LGG5, 381, Dendera)",
              "tags": "harsaphes"
          },
          {
              "id": 1297,
              "action": "Bast, Who Hurries through the Land (LGG5, 633, Dendera)",
              "tags": "through hurries land bast"
          },
          {
              "id": 1298,
              "action": "Hathor, Lady of the Two Flagpoles (LGG4, 128, Edfu)",
              "tags": "lady hathor two flagpoles"
          },
          {
              "id": 1299,
              "action": "Sekhmet, Lady of the Tent (LGG4, 131, Edfu)",
              "tags": "lady sekhmet tent"
          }
      ],
      [
          {
              "id": 1303,
              "action": "Horus (LGG5, 231, Dendera)",
              "tags": "horus"
          },
          {
              "id": 1304,
              "action": "Wadjet, Lady of the Sacred Land (LGG4, 155, Edfu)",
              "tags": "lady wadjet sacred land"
          },
          {
              "id": 1305,
              "action": "Her-Effectiveness-Is-Within (epithet of the Eye of Ra) (LGG1, 35, Dendera)",
              "tags": "her-effectiveness-is-within"
          }
      ],
      [
          {
              "id": 1309,
              "action": "Hathor, Lady of the Mountain (LGG4, 168, Edfu)",
              "tags": "lady hathor mountain"
          },
          {
              "id": 1310,
              "action": "Sekhmet, Sweet-of-Life (LGG4, 602, Dendera)",
              "tags": "sweet-of-life sekhmet"
          },
          {
              "id": 1311,
              "action": "Iah (LGG1, 147, Dendera)",
              "tags": "iah"
          }
      ],
      [
          {
              "id": 1318,
              "action": "Ha'a \"The Jubilating One\" (form of Osiris) (LGG5, 33, Dendera)",
              "tags": "ha-a one jubilating"
          },
          {
              "id": 1319,
              "action": "Sekhmet, Lady of the Two Acacia Trees (LGG4, 144, Edfu)",
              "tags": "acacia trees two sekhmet lady"
          },
          {
              "id": 1320,
              "action": "Sekhmet of Perfect Accuracy (LGG4, 229, Dendera)",
              "tags": "perfect sekhmet accuracy"
          }
      ],
      [
          {
              "id": 1324,
              "action": "Hathor, Mistress of the Horizon (LGG4, 5, Dendera)",
              "tags": "mistress hathor horizon"
          },
          {
              "id": 1325,
              "action": "Hathor, Lady of the Western Desert (LGG4, 115, Edfu)",
              "tags": "western lady hathor desert"
          },
          {
              "id": 1326,
              "action": "Onuris (LGG1, 378, Dendera; variant Onuris-Shu, Son of Ra, LGG1, 380, Dendera)",
              "tags": "onuris"
          }
      ],
      [
          {
              "id": 1329,
              "action": "Ptah, Beautiful of Face (LGG3, 169, Dendera)",
              "tags": "ptah beautiful face"
          },
          {
              "id": 1330,
              "action": "Hathor, the Foremost (LGG7, 53, Dendera)",
              "tags": "hathor foremost"
          },
          {
              "id": 1331,
              "action": "Tayet (LGG7, 360, Dendera)",
              "tags": "tayet"
          },
          {
              "id": 1332,
              "action": "Hathor, Lady of the Eastern Desert (LGG4, 115, Edfu)",
              "tags": "lady hathor desert eastern"
          }
      ],
      [
          {
              "id": 1339,
              "action": "Sokar, Lord of Hen (unknown location) (LGG6, 664, Dendera and Edfu)",
              "tags": "lord sokar hen"
          },
          {
              "id": 1340,
              "action": "Hathor, Lady of Ornaments (LGG4, 122, Dendera)",
              "tags": "lady hathor ornaments"
          }
      ],
      [
          {
              "id": 1345,
              "action": "Khonsu (LGG5, 762, Dendera)",
              "tags": "khonsu"
          },
          {
              "id": 1346,
              "action": "Hathor, Mistress of the Pillar (LGG4, 13, Edfu)",
              "tags": "mistress hathor pillar"
          },
          {
              "id": 1347,
              "action": "Hathor of the Perfect Face (LGG4, 230, Dendera)",
              "tags": "perfect hathor face"
          }
      ],
      [
          {
              "id": 1354,
              "action": "Neith (LGG3, 511, Dendera)",
              "tags": "neith"
          },
          {
              "id": 1355,
              "action": "Lady of Tell Tebilla (epithet of the Eye of Ra) (LGG4, 103, Edfu)",
              "tags": "lady tebilla tell"
          }
      ],
      [
          {
              "id": 1359,
              "action": "Atum (LGG7, 412, Dendera)",
              "tags": "atum"
          },
          {
              "id": 1360,
              "action": "Hathor, Lady of the Eastern Mountain (LGG4, 45, Dendera and Kom Ombo)",
              "tags": "lady hathor mountain eastern"
          },
          {
              "id": 1361,
              "action": "Hatmehyt, Lady of Mendes (LGG4, 173, Dendera)",
              "tags": "lady hatmehyt mendes"
          }
      ],
      [
          {
              "id": 1370,
              "action": "Horakhty (LGG5, 239, Dendera)",
              "tags": "horakhty"
          },
          {
              "id": 1371,
              "action": "Harsiese (LGG5, 283, Dendera)",
              "tags": "harsiese"
          },
          {
              "id": 1372,
              "action": "Isis, Protector of the Workplace (LGG6, 122, Dendera)",
              "tags": "protector isis workplace"
          },
          {
              "id": 1373,
              "action": "Hathor, Lady of Storms (LGG4, 121, Edfu)",
              "tags": "lady hathor storms"
          }
      ],
      [
          {
              "id": 1378,
              "action": "Nut, Lady of Heaven (LGG3, 535, Dendera)",
              "tags": "lady heaven nut"
          },
          {
              "id": 1379,
              "action": "Hathor-Tefnut, Lady of Praise (LGG4, 126, Dendera)",
              "tags": "lady hathor-tefnut praise"
          }
      ],
      [
          {
              "id": 1385,
              "action": "Sekhmet the Great, Beloved of Ptah (LGG6, 561, Dendera; variant Nephthys LGG4, 96)",
              "tags": "beloved ptah sekhmet great"
          },
          {
              "id": 1386,
              "action": "Hathor, Lady of Injury ( Soqar , pun on Sokar) (LGG4, 137, Edfu)",
              "tags": "lady hathor injury"
          },
          {
              "id": 1387,
              "action": "Who Unites the Heavens (epithet of the Eye of Ra) (LGG1, 136, Dendera)",
              "tags": "unites who heavens"
          }
      ],
      [
          {
              "id": 1395,
              "action": "Hathor, Lady of Terror (LGG4, 130, Dendera and Kom Ombo; variant Hathor, Lady of Wrath, Kom Ombo)",
              "tags": "lady hathor terror"
          },
          {
              "id": 1396,
              "action": "Hathor, Lady of Wrath (LGG4, 169, Edfu and Kom Ombo)",
              "tags": "lady hathor wrath"
          },
          {
              "id": 1397,
              "action": "Neith-Onuris (LGG3, 511, Dendera; also written Anheret (lit., 'female Onuris'), a form of Neith, LGG1, 378, Dendera)",
              "tags": "neith dendera lgg neith-onuris form"
          }
      ],
      [
          {
              "id": 1408,
              "action": "Tefnut, Daughter of Ra (LGG7, 406, Dendera)",
              "tags": "daughter ra tefnut"
          },
          {
              "id": 1409,
              "action": "Neith, Lady of Sais (LGG4, 124, Edfu and Kom Ombo)",
              "tags": "neith lady sais"
          },
          {
              "id": 1410,
              "action": "Who Gives the Desert (epithet of the Eye of Ra) (LGG4, 788, Dendera and Kom Ombo)",
              "tags": "gives who desert"
          }
      ],
      [
          {
              "id": 1416,
              "action": "Hathor, the Great Menat (necklace) (LGG3, 299, Dendera and Kom Ombo)",
              "tags": "hathor great menat"
          },
          {
              "id": 1417,
              "action": "Nephthys, Sister of God (LGG4, 96, Dendera)",
              "tags": "sister nephthys"
          },
          {
              "id": 1418,
              "action": "Hathor, Lady of the Hesau-plants (LGG4, 121, Edfu and Kom Ombo)",
              "tags": "hesau-plants lady hathor"
          }
      ],
      [
          {
              "id": 1423,
              "action": "Geb (LGG7, 304, Dendera)",
              "tags": "geb"
          },
          {
              "id": 1424,
              "action": "Sopdu, Lord of the East (form of Horus) (LGG6, 290, Dendera; variant Horus, Lord of the East)",
              "tags": "lord sopdu east"
          },
          {
              "id": 1425,
              "action": "Lady of Working (epithet of the Eye of Ra) (LGG4, 149, Kom Ombo)",
              "tags": "lady working"
          },
          {
              "id": 1426,
              "action": "Hathor, Lady of Doing Evil (i.e., to evildoers) (LGG4, 164, Edfu)",
              "tags": "evil lady hathor doing"
          }
      ],
      [
          {
              "id": 1433,
              "action": "Sopdu-Iah (LGG6, 290, Dendera; variants Sopdu, Iah, and Sopdu-Iah)",
              "tags": "sopdu-iah"
          },
          {
              "id": 1434,
              "action": "Khonsu (LGG5, 762, Dendera)",
              "tags": "khonsu"
          },
          {
              "id": 1435,
              "action": "Hathor, Lady of Joy (LGG4, 20, Edfu)",
              "tags": "lady hathor joy"
          },
          {
              "id": 1436,
              "action": "She Who Is in the Inundation (form of the Eye of Ra; goddess of the Akhet season) (LGG1, 284, Dendera and Kom Ombo)",
              "tags": "inundation she"
          }
      ],
      [
          {
              "id": 1447,
              "action": "Osiris (LGG2, 530, Dendera)",
              "tags": "osiris"
          }
      ],
      [
          {
              "id": 1457,
              "action": "Horus of the Duat (LGG5, 295; Leitz (2002) 146, Edfu)",
              "tags": "edfu horus duat"
          },
          {
              "id": 1458,
              "action": "Montu (LGG3, 319, Dendera)",
              "tags": "montu"
          },
          {
              "id": 1459,
              "action": "Nekhbet, the Mysterious One (LGG7, 140, Dendera)",
              "tags": "nekhbet one mysterious"
          },
          {
              "id": 1460,
              "action": "Wadjet, Lady of Protection (LGG4, 117, Edfu)",
              "tags": "lady wadjet protection"
          },
          {
              "id": 1461,
              "action": "Isis, the Unique Goddess (LGG2, 286, Dendera, Kom Ombo, and Edfu)",
              "tags": "unique isis goddess"
          }
      ],
      [
          {
              "id": 1468,
              "action": "Sopdu, Lord of the East (form of Horus) (LGG6, 290, Dendera)",
              "tags": "lord sopdu east"
          },
          {
              "id": 1469,
              "action": "Sekhmet, Mistress of Is-hat (unknown location) (LGG4, 21, Edfu)",
              "tags": "mistress sekhmet is-hat"
          },
          {
              "id": 1470,
              "action": "She-to-Whom-Her-Face-Belongs (epithet of the Eye of Ra) (LGG1, 151, Edfu; variant \"She-to-Whom-Things-Belong\")",
              "tags": "she-to-whom-her-face-belongs"
          },
          {
              "id": 1471,
              "action": "Thoth-Isdes (Thoth as a falcon) (LGG1, 560; Edfu, List 3)",
              "tags": "thoth-isdes"
          }
      ],
      [
          {
              "id": 1479,
              "action": "Harsiese (LGG5, 283, Edfu)",
              "tags": "harsiese"
          },
          {
              "id": 1480,
              "action": "Harsaphes (LGG5, 381, Dendera)",
              "tags": "harsaphes"
          },
          {
              "id": 1481,
              "action": "Hathor, Lady of the Glance/Look (LGG4, 152)",
              "tags": "glance lady hathor look"
          },
          {
              "id": 1482,
              "action": "Sekhmet, Gold of Her Mother (LGG4, 183, Dendera, Kom Ombo, and Edfu)",
              "tags": "mother sekhmet gold"
          }
      ],
      [
          {
              "id": 1487,
              "action": "Horus of the Duat (LGG5, 295; Leitz 2002, 146, Edfu)",
              "tags": "horus duat"
          },
          {
              "id": 1488,
              "action": "Hathor, Lady of Sweetness (LGG4, 47, Dendera)",
              "tags": "lady hathor sweetness"
          },
          {
              "id": 1489,
              "action": "Hathor, Lady of Behbeit-el-Hagar (LGG 4, 85, Edfu and Kom Ombo)",
              "tags": "lady hathor behbeit-el-hagar"
          },
          {
              "id": 1490,
              "action": "The White Crown (LGG2, 507, Dendera)",
              "tags": "crown white"
          },
          {
              "id": 1491,
              "action": "Hathor, Sweet of Voice (LGG2, 806, Kom Ombo and Edfu; variant Hathor, Lady of Sweetness)",
              "tags": "sweet voice hathor"
          }
      ],
      [
          {
              "id": 1495,
              "action": "Neith (LGG3, 511)",
              "tags": "neith"
          },
          {
              "id": 1496,
              "action": "Isis, Lady of Peret-season (LGG4, 57, Edfu and Kom Ombo; wordplay variant Isis, Lady of Emergence)",
              "tags": "lady isis peret-season"
          },
          {
              "id": 1497,
              "action": "Wepwawet, Lord of the Mountain (LGG2, 343, Edfu)",
              "tags": "lord wepwawet mountain"
          }
      ],
      [
          {
              "id": 1504,
              "action": "Shezemtet (LGG7, 124, Dendera)",
              "tags": "shezemtet"
          },
          {
              "id": 1505,
              "action": "Sobek, Lord of Heaven (LGG6, 259, Edfu; Leitz 2002, 140, Edfu)",
              "tags": "sobek heaven lord"
          },
          {
              "id": 1506,
              "action": "Hathor, Lady of Byblos (LGG4, 150, Edfu)",
              "tags": "lady hathor byblos"
          },
          {
              "id": 1507,
              "action": "Isis the Great (LGG2, 52, Edfu and Kom Ombo)",
              "tags": "isis great"
          }
      ],
      [
          {
              "id": 1510,
              "action": "Isis, Guide of the Gods (LGG5, 950, Dendera, Edfu, and Kom Ombo)",
              "tags": "isis guide"
          },
          {
              "id": 1511,
              "action": "Mut-Isis (LGG3, 251, Dendera; LGG 1, 62, Dendera; variation Mut)",
              "tags": "mut-isis"
          },
          {
              "id": 1512,
              "action": "Sobek, Lord of the Caverns (LGG6, 259; Leitz 2002, 140, Edfu)",
              "tags": "sobek caverns lord"
          },
          {
              "id": 1513,
              "action": "Hathor, Lady of Weavers (LGG4, 120, Edfu and Kom Ombo)",
              "tags": "weavers lady hathor"
          },
          {
              "id": 1514,
              "action": "Bast (LGG2, 740, Edfu and Kom Ombo)",
              "tags": "bast"
          }
      ],
      [
          {
              "id": 1516,
              "action": "Sobek, Lord of […] (LGG6, 259; Leitz 2002, 140, Edfu)",
              "tags": "sobek lord"
          },
          {
              "id": 1517,
              "action": "Isis, Lady of Chemmis (LGG4, 3, Dendera, Kom Ombo, and Edfu)",
              "tags": "lady chemmis isis"
          },
          {
              "id": 1518,
              "action": "Bast, Lady of the Chest/Box (LGG4, 92, Edfu and Kom Ombo; variant Menhyt, Lady of the Chest/Box)",
              "tags": "lady chest bast box"
          },
          {
              "id": 1519,
              "action": "Ra-Horakhty (LGG4, 630, Dendera)",
              "tags": "ra-horakhty"
          }
      ],
      [
          {
              "id": 1523,
              "action": "Horus, Lord of Heaven (LGG3, 624, Dendera)",
              "tags": "lord horus heaven"
          },
          {
              "id": 1524,
              "action": "Sobek, Lord of the Inundation (LGG6, 259; Leitz 2002, 140, Edfu)",
              "tags": "sobek inundation lord"
          },
          {
              "id": 1525,
              "action": "Isis, Lady of Heaven (LGG4, 49, Dendera)",
              "tags": "lady heaven isis"
          },
          {
              "id": 1526,
              "action": "Hathor, Lady of the Water's Edge (lit., lips of the shore) (LGG4, 128, Edfu and Kom Ombo)",
              "tags": "lady hathor edge water"
          },
          {
              "id": 1527,
              "action": "\"She Who Generates Her (Own) Perfection\" (epithet of the Eye of Ra) (LGG2, 606, Dendera, Edfu, and Kom Ombo)",
              "tags": "generates perfection she"
          }
      ],
      [
          {
              "id": 1530,
              "action": "Horus (LGG5, 231; variant Horus, Lord of Cool Water, Leitz 2002, 150, Edfu)",
              "tags": "horus"
          },
          {
              "id": 1531,
              "action": "Mehyt-Wadjet (LGG3, 371, Dendera; LGG2, 270, Dendera)",
              "tags": "mehyt-wadjet"
          },
          {
              "id": 1532,
              "action": "Hathor, Lady of Foundations (LGG4, 152)",
              "tags": "lady hathor foundations"
          },
          {
              "id": 1533,
              "action": "She Whose Power Exists (epithet of the Eye of Ra) (LGG2, 375, Dendera, Edfu, and Kom Ombo)",
              "tags": "power whose she exists"
          }
      ],
      [
          {
              "id": 1535,
              "action": "Hathor of Dendera (LGG5, 76, Dendera)",
              "tags": "hathor dendera"
          },
          {
              "id": 1536,
              "action": "Ka-of-the-Great-One (epithet of the Eye of Ra) (LGG7, 236, Dendera, Kom Ombo, and Edfu)",
              "tags": "ka-of-the-great-one"
          },
          {
              "id": 1537,
              "action": "Lady of Writing among the Primordial Ones (epithet of the Eye of Ra) (LGG4, 8, Edfu and Kom Ombo)",
              "tags": "ones among lady writing primordial"
          },
          {
              "id": 1538,
              "action": "Hathor, Lady of the Sycamore(-quarter) (near Memphis) (LGG4, 80, Dendera)",
              "tags": "lady hathor sycamore"
          }
      ],
      [
          {
              "id": 1541,
              "action": "Osiris, Who Loves His Mother (LGG3, 338, Edfu)",
              "tags": "mother loves osiris"
          },
          {
              "id": 1542,
              "action": "Shu, Lord of Ma'at (LGG3, 639, Dendera)",
              "tags": "lord ma-at shu"
          },
          {
              "id": 1543,
              "action": "Mut, Lady of Roaring (LGG4, 92, Edfu and Kom Ombo)",
              "tags": "lady mut roaring"
          },
          {
              "id": 1544,
              "action": "Hathor, Lady at the Height of Her (Magical) Power (LGG4, 161, Dendera, Edfu, and Kom Ombo)",
              "tags": "height lady hathor power"
          },
          {
              "id": 1545,
              "action": "Wadjet (LGG2, 270, Dendera)",
              "tags": "wadjet"
          },
          {
              "id": 1546,
              "action": "Ptah of Abydos, Great in His Reverence (LGG2, 427, Edfu)",
              "tags": "ptah great abydos reverence"
          },
          {
              "id": 1547,
              "action": "Tefnut (?) (LGG7, 406, Dendera; one instance says I Peret 13, the rest say I Peret 14)",
              "tags": "tefnut"
          }
      ],
      [
          {
              "id": 1550,
              "action": "Neith (LGG3, 511, Dendera)",
              "tags": "neith"
          },
          {
              "id": 1551,
              "action": "Tefnut (LGG7, 406, Dendera; one instance says I Peret 13 instead)",
              "tags": "tefnut"
          },
          {
              "id": 1552,
              "action": "Hathor, Lady of the Eastern Mountain (LGG4, 45, Edfu)",
              "tags": "lady hathor mountain eastern"
          },
          {
              "id": 1553,
              "action": "Isis, Lady of the Evening Barque (LGG4, 67, Edfu and Kom Ombo)",
              "tags": "lady barque isis evening"
          },
          {
              "id": 1554,
              "action": "Horus, Who Loves His Mother (Leitz 2002, 146, Edfu)",
              "tags": "mother loves horus"
          }
      ],
      [
          {
              "id": 1557,
              "action": "Neith (LGG3, 511, Dendera; this may be a duplicate or error of yesterday's entry)",
              "tags": "neith"
          },
          {
              "id": 1558,
              "action": "Nut (LGG3, 535, Dendera)",
              "tags": "nut"
          },
          {
              "id": 1559,
              "action": "Hathor of Holy Jubilation (LGG7, 671, Dendera, Edfu, and Kom Ombo)",
              "tags": "jubilation hathor holy"
          },
          {
              "id": 1560,
              "action": "Hathor, Lady of Fate (LGG4, 140, Edfu and Kom Ombo)",
              "tags": "lady hathor fate"
          },
          {
              "id": 1561,
              "action": "Horus, Who Carries His Mother (form of Harsiese) (LGG4, 671, Edfu)",
              "tags": "carries mother horus"
          }
      ],
      [
          {
              "id": 1566,
              "action": "Mut (LGG3, 251, Dendera)",
              "tags": "mut"
          },
          {
              "id": 1567,
              "action": "She Who Loves Her People (epithet of the Eye of Ra) (LGG3, 349, Dendera and Edfu)",
              "tags": "loves people she"
          },
          {
              "id": 1568,
              "action": "Nut (LGG3, 535, Dendera; may be a duplicate of yesterday's entry)",
              "tags": "nut"
          },
          {
              "id": 1569,
              "action": "Sekhmet, Lady of the Tent (LGG4, 131, Edfu; variant Sekhmet, Lady of the Tent of Ra's Temple, LGG4, 132, Kom Ombo)",
              "tags": "lady sekhmet tent"
          },
          {
              "id": 1570,
              "action": "Isis Who Is Beautiful to Behold (LGG4, 228, Dendera and Kom Ombo)",
              "tags": "beautiful isis behold"
          },
          {
              "id": 1571,
              "action": "Sobek Who Enters the Place of Strength (LGG2, 233, Edfu)",
              "tags": "sobek place strength"
          }
      ],
      [
          {
              "id": 1574,
              "action": "Sobek, Lord of Neb-seh (unknown location) (LGG6, 259, Edfu; Leitz 2002, 140, Edfu; variant Sobek, Lord of Heb-Sed Festivals)",
              "tags": "sobek lord neb-seh"
          },
          {
              "id": 1575,
              "action": "Hathor, Lady of the Deserts (LGG4, 168, Edfu)",
              "tags": "deserts lady hathor"
          },
          {
              "id": 1576,
              "action": "Isis Who Gives What She Loves (variant Isis Who Gives to Those Whom She Loves, LGG4, 777, Dendera and Edfu)",
              "tags": "loves isis she what gives"
          },
          {
              "id": 1577,
              "action": "Onuris (LGG1, 378, Dendera)",
              "tags": "onuris"
          }
      ],
      [
          {
              "id": 1586,
              "action": "Nunet (the female Nun) (LGG3, 550, Edfu)",
              "tags": "nunet"
          },
          {
              "id": 1587,
              "action": "Isis, Lady of Athribis (LGG4, 150, Edfu)",
              "tags": "athribis lady isis"
          },
          {
              "id": 1588,
              "action": "Horus, Great of Magic (LGG2, 454; Leitz 2002, 147, Edfu; variant Heka, Great of Magic, Leitz 2002, 153, Esna)",
              "tags": "magic horus great"
          }
      ],
      [
          {
              "id": 1594,
              "action": "Sekhmet (LGG6, 557, Dendera)",
              "tags": "sekhmet"
          },
          {
              "id": 1595,
              "action": "Nunet (the female Nun), She Who Encompasses (with her arms) (LGG6, 570, Dendera and Edfu)",
              "tags": "encompasses nunet she"
          },
          {
              "id": 1596,
              "action": "Hathor, Lady of What Is Brought (LGG4, 119, Edfu)",
              "tags": "lady hathor brought what"
          },
          {
              "id": 1597,
              "action": "Qebshenuef, Whom His Father Made (LGG1, 443, Edfu)",
              "tags": "father made qebshenuef whom"
          },
          {
              "id": 1598,
              "action": "Hathor, Who Shines as the Golden One (LGG2, 330; Dümichen 1877, Plates 15 and 17, Dendera naos)",
              "tags": "as one golden hathor shines"
          }
      ],
      [
          {
              "id": 1601,
              "action": "Ra, Who Makes the Nun Healthy (LGG6, 380, Edfu)",
              "tags": "healthy makes ra nun"
          },
          {
              "id": 1602,
              "action": "Hathor-Isqeret (? epithet unclear) (LGG1, 557, Edfu)",
              "tags": "hathor-isqeret"
          },
          {
              "id": 1603,
              "action": "Amun-Ra, the Unique One (LGG2, 280, Dendera)",
              "tags": "one unique amun-ra"
          },
          {
              "id": 1604,
              "action": "Sobek in Kom Ombo (Leitz 2002, 154, Edfu)",
              "tags": "sobek ombo kom"
          }
      ],
      [
          {
              "id": 1612,
              "action": "Hathor, Whose Ka Is in Her Heart (LGG7, 234, Dendera and Edfu)",
              "tags": "hathor whose ka heart"
          },
          {
              "id": 1613,
              "action": "Hathor, Lady of Refay (unknown location) (LGG4, 87, Edfu)",
              "tags": "refay lady hathor"
          },
          {
              "id": 1614,
              "action": "Ra (LGG4, 612, Edfu)",
              "tags": "ra"
          },
          {
              "id": 1615,
              "action": "Wadjet (LGG2, 270, Dendera)",
              "tags": "wadjet"
          }
      ],
      [
          {
              "id": 1621,
              "action": "Lady of Reckoning (epithet of the Eye of Ra) (LGG4, 14, Dendera; variant Lady of Offering-foods, LGG4, 148)",
              "tags": "lady reckoning"
          },
          {
              "id": 1622,
              "action": "Hathor, Mistress of the Ipep-Plants (LGG4, 14, Edfu)",
              "tags": "mistress hathor ipep-plants"
          },
          {
              "id": 1623,
              "action": "Amun-Ra Iakhu (epithet reading unclear) (LGG1, 109, Edfu)",
              "tags": "iakhu amun-ra"
          },
          {
              "id": 1624,
              "action": "Onuris (LGG1, 378, Dendera)",
              "tags": "onuris"
          }
      ],
      [
          {
              "id": 1629,
              "action": "Lady of Fate against Him (i.e., Apophis) (epithet of the Eye of Ra) (LGG4, 140, Edfu)",
              "tags": "lady against him fate"
          },
          {
              "id": 1630,
              "action": "Iah (LGG1, 147, Dendera)",
              "tags": "iah"
          },
          {
              "id": 1631,
              "action": "Hathor of the Green Fields (LGG2, 265, Dendera and Edfu)",
              "tags": "fields green hathor"
          },
          {
              "id": 1632,
              "action": "Horus-of-Both-Eyes in the Menset (i.e., the temples of Shu and Tefnut in Heliopolis) (Leitz 2002, 151, Edfu)",
              "tags": "horus-of-both-eyes menset"
          }
      ],
      [
          {
              "id": 1634,
              "action": "The Lady of Nehnu (unknown location) (epithet of the Eye of Ra) (LGG4, 81, Edfu)",
              "tags": "lady nehnu"
          },
          {
              "id": 1635,
              "action": "Hathor, Lady of Light (LGG4, 135, Dendera and Edfu)",
              "tags": "lady hathor light"
          },
          {
              "id": 1636,
              "action": "Amun-Ra (LGG1, 321, Dendera; one instance says Amun-Ra Lord of the Thrones of the Two Lands)",
              "tags": "amun-ra"
          },
          {
              "id": 1637,
              "action": "Horus, Shining in the Cavern (LGG2, 802, Edfu)",
              "tags": "cavern horus shining"
          }
      ],
      [
          {
              "id": 1639,
              "action": "Montu (LGG3, 319, Dendera)",
              "tags": "montu"
          },
          {
              "id": 1640,
              "action": "Sobek, Lord of Ir-merty (unknown location) (LGG6, 259; Leitz 2002, 140, Edfu; variant Sobek, Lord of Creating/Creation)",
              "tags": "sobek ir-merty lord"
          },
          {
              "id": 1641,
              "action": "Mistress of the Opet Temple (epithet of the Eye of Ra) (LGG4, 14, Edfu)",
              "tags": "temple mistress opet"
          },
          {
              "id": 1642,
              "action": "Wadjet, the Akhet-Eye (LGG1, 46, Dendera and Edfu)",
              "tags": "akhet-eye wadjet"
          }
      ],
      [
          {
              "id": 1648,
              "action": "Horus in Letopolis (LGG4, 278; Leitz 2002, 151, Edfu)",
              "tags": "horus letopolis"
          },
          {
              "id": 1649,
              "action": "Hathor, Who Pervades the Asiatics (reference to Levantine peoples, LGG5, 760, Dendera and Edfu)",
              "tags": "pervades hathor asiatics"
          },
          {
              "id": 1650,
              "action": "Neith (LGG3, 511, Dendera; some entries read \"Neith and Wadjet\")",
              "tags": "neith"
          },
          {
              "id": 1651,
              "action": "Wadjet (LGG3, 511; LGG2, 270, Dendera; some entries read \"Neith and Wadjet\")",
              "tags": "wadjet"
          }
      ],
      [
          {
              "id": 1654,
              "action": "Horus-Foremost-of-Eyes (LGG5, 262; Leitz 2002, 147, Edfu)",
              "tags": "horus-foremost-of-eyes"
          },
          {
              "id": 1655,
              "action": "Khonsu (LGG5, 762, Dendera)",
              "tags": "khonsu"
          },
          {
              "id": 1656,
              "action": "Khonsu-in-Thebes (LGG4, 764, Dendera)",
              "tags": "khonsu-in-thebes"
          },
          {
              "id": 1657,
              "action": "Nekhbet, Wide of Stride (LGG3, 184, Dendera and Edfu)",
              "tags": "nekhbet stride wide"
          }
      ],
      [
          {
              "id": 1660,
              "action": "No Silence within Her (epithet of the Eye of Ra) (LGG3, 507, Dendera and Edfu)",
              "tags": "within no silence"
          },
          {
              "id": 1661,
              "action": "Duamutef (LGG7, 516, Dendera)",
              "tags": "duamutef"
          },
          {
              "id": 1662,
              "action": "Anubis (LGG1, 391, Dendera)",
              "tags": "anubis"
          }
      ],
      [
          {
              "id": 1667,
              "action": "Haroeris (LGG5, 249, Edfu)",
              "tags": "haroeris"
          },
          {
              "id": 1668,
              "action": "Menqbet (the palace, personified as a goddess) (LGG3, 318, Dendera and Edfu)",
              "tags": "menqbet"
          },
          {
              "id": 1669,
              "action": "Onuris (LGG1, 378, Dendera)",
              "tags": "onuris"
          }
      ],
      [
          {
              "id": 1674,
              "action": "Sokar (LGG6, 664; one variant says Osiris, LGG2, 530; both references from Dendera)",
              "tags": "sokar"
          },
          {
              "id": 1675,
              "action": "Isis, Lady of Peret-season (alternate reading Lady of Emergence) (LGG4, 57, Dendera and Edfu)",
              "tags": "lady isis peret-season"
          },
          {
              "id": 1676,
              "action": "Hathor, Lady of Aphroditopolis (LGG4, 137, Edfu)",
              "tags": "lady hathor aphroditopolis"
          }
      ],
      [
          {
              "id": 1683,
              "action": "Hathor, Lady of the Night (variant Hathor-Who-Is-Above) (LGG4, 43, Dendera and Edfu)",
              "tags": "night lady hathor"
          },
          {
              "id": 1684,
              "action": "Hedjhotep, Son of Isis (LGG5, 602; Leitz 2002, 147, Edfu)",
              "tags": "isis hedjhotep son"
          },
          {
              "id": 1685,
              "action": "Osiris (LGG2, 530, Dendera)",
              "tags": "osiris"
          }
      ],
      [
          {
              "id": 1691,
              "action": "Seed-of-the-Effective-Ones (epithet of the Eye of Ra) (LGG3, 97, Dendera and Edfu)",
              "tags": "seed-of-the-effective-ones"
          },
          {
              "id": 1692,
              "action": "Hathor, Lady of Sehenu(?) (unknown location) (LGG4, 131, Edfu)",
              "tags": "lady hathor sehenu"
          },
          {
              "id": 1693,
              "action": "Great of Fear, the son of Horus (LGG2, 30, Edfu)",
              "tags": "horus great fear son"
          }
      ],
      [
          {
              "id": 1696,
              "action": "Hatmehyt, Lady of Mendes (LGG4, 93, Edfu)",
              "tags": "lady hatmehyt mendes"
          },
          {
              "id": 1697,
              "action": "Hathor-Mut, Lady of the Two Lands (LGG4, 157, Dendera and Edfu)",
              "tags": "lady two lands hathor-mut"
          }
      ],
      [
          {
              "id": 1701,
              "action": "Harsaphes (LGG5, 381, Dendera)",
              "tags": "harsaphes"
          },
          {
              "id": 1702,
              "action": "She-Who-Is-Over-the-East (epithet of the Eye of Ra) (LGG5, 411, Dendera)",
              "tags": "she-who-is-over-the-east"
          },
          {
              "id": 1703,
              "action": "Wadjet, Lady of Iakhmet (12th UE nome) (LGG4, 8, Edfu)",
              "tags": "lady iakhmet wadjet"
          },
          {
              "id": 1704,
              "action": "Osiris (LGG2, 530, Edfu)",
              "tags": "osiris"
          }
      ],
      [
          {
              "id": 1708,
              "action": "Geb (LGG7, 304, Edfu)",
              "tags": "geb"
          },
          {
              "id": 1709,
              "action": "Tefnut (LGG7, 406, Dendera)",
              "tags": "tefnut"
          },
          {
              "id": 1710,
              "action": "Hathor, Lady of Cusae (LGG4, 146, Edfu)",
              "tags": "lady hathor cusae"
          },
          {
              "id": 1711,
              "action": "She-Who-Is-in-the-Palace (epithet of the Eye of Ra) (LGG1, 290, Dendera and Edfu)",
              "tags": "she-who-is-in-the-palace"
          }
      ],
      [
          {
              "id": 1713,
              "action": "Hathor, Great of Love (variant Hathor, What She Loves, Is Great) (TFC Esna; Esna VI, 55, 8; LGG2, 443, Dendera and Edfu)",
              "tags": "hathor love great"
          },
          {
              "id": 1714,
              "action": "Sobek, Lord of Kom Ombo (variant Lord of Lords or Lord of the Basket-lands) (LGG6, 259, Edfu)",
              "tags": "sobek ombo kom lord"
          },
          {
              "id": 1715,
              "action": "Hathor, Lady of Neferusy (16th UE nome) (LGG4, 75, Edfu)",
              "tags": "lady hathor neferusy"
          },
          {
              "id": 1716,
              "action": "Wadjet (LGG2, 270, Dendera)",
              "tags": "wadjet"
          }
      ],
      [
          {
              "id": 1723,
              "action": "Hathor, Lady of Iaga (LGG4, 8, Edfu)",
              "tags": "lady hathor iaga"
          },
          {
              "id": 1724,
              "action": "Isis, Lady of What Will Be (LGG4, 142, Dendera and Edfu)",
              "tags": "will be what lady isis"
          },
          {
              "id": 1725,
              "action": "Osiris (LGG2, 530, Edfu)",
              "tags": "osiris"
          }
      ],
      [
          {
              "id": 1727,
              "action": "Wadjet, Foremost of Thousands (LGG5, 923, Dendera and Edfu )",
              "tags": "thousands foremost wadjet"
          },
          {
              "id": 1728,
              "action": "Atum (LGG7, 412, Dendera)",
              "tags": "atum"
          },
          {
              "id": 1729,
              "action": "Sobek, Son of Isis, with Pacified Limbs (Leitz 2002, 144, Edfu)",
              "tags": "sobek with son pacified limbs isis"
          }
      ],
      [
          {
              "id": 1733,
              "action": "Hathor in Ra's Pasture (LGG5, 85, Edfu)",
              "tags": "hathor ra pasture"
          },
          {
              "id": 1734,
              "action": "Hathor (LGG5, 76, Dendera)",
              "tags": "hathor"
          },
          {
              "id": 1735,
              "action": "Haroeris, Pacified in the Pastures (LGG5, 580; Leitz 2002, 147, Edfu)",
              "tags": "pacified pastures haroeris"
          },
          {
              "id": 1736,
              "action": "Wadjet, Lady of Fire (LGG4, 41, Edfu)",
              "tags": "lady wadjet fire"
          },
          {
              "id": 1737,
              "action": "Renenutet (LGG4, 686, Dendera and Edfu)",
              "tags": "renenutet"
          }
      ],
      [
          {
              "id": 1742,
              "action": "Foremost of Her Head/Front (epithet of the Eye of Ra) (LGG5, 933, Dendera and Edfu)",
              "tags": "head foremost front"
          },
          {
              "id": 1743,
              "action": "Sekhmet (LGG6, 557, Dendera)",
              "tags": "sekhmet"
          },
          {
              "id": 1744,
              "action": "Hathor, Lady of Vision (LGG4, 59, Dendera)",
              "tags": "lady hathor vision"
          }
      ],
      [
          {
              "id": 1747,
              "action": "Sekhmet, Foremost of Plagues (LGG5, 923, Dendera and Edfu)",
              "tags": "foremost sekhmet plagues"
          },
          {
              "id": 1748,
              "action": "Hathor, Lady of Prosperity (LGG4, 44, Edfu)",
              "tags": "prosperity lady hathor"
          },
          {
              "id": 1749,
              "action": "Isis (LGG1, 62, Dendera)",
              "tags": "isis"
          },
          {
              "id": 1750,
              "action": "Osiris, He Who Makes His Own Name (LGG1, 471, Edfu)",
              "tags": "name osiris makes he own"
          }
      ],
      [
          {
              "id": 1755,
              "action": "Chronokrater:",
              "tags": "chronokrater"
          }
      ],
      [
          {
              "id": 1758,
              "action": "Thoth, Lord of Hermopolis Magna, Lord of Hieroglyphs (LGG3, 716, Dendera)",
              "tags": "lord magna hermopolis thoth hieroglyphs"
          },
          {
              "id": 1759,
              "action": "Hathor, Lady of the Dendera Nome (LGG4, 23, Edfu)",
              "tags": "nome lady hathor dendera"
          },
          {
              "id": 1760,
              "action": "Sobek, Who Reckoned the Bright One (i.e., Eye goddess) (LGG1, 222, Edfu)",
              "tags": "sobek one reckoned bright"
          },
          {
              "id": 1761,
              "action": "Wadjet (LGG2, 270, Dendera and Edfu)",
              "tags": "wadjet"
          },
          {
              "id": 1762,
              "action": "Bat, Lady of Heaven (LGG2, 735, Dendera; variant Hathor-Bat, Lady of Heaven)",
              "tags": "bat lady heaven"
          }
      ],
      [
          {
              "id": 1765,
              "action": "Hathor, Whose Ka Is in Her Heart (LGG7, 234, Dendera and Edfu)",
              "tags": "hathor whose ka heart"
          },
          {
              "id": 1766,
              "action": "Mercury (the planet, sacred to Horus) (LGG6, 266, Edfu)",
              "tags": "mercury"
          },
          {
              "id": 1767,
              "action": "Mut, Lady of Power (LGG4, 44, Edfu; variant Amunet, Lady of Power)",
              "tags": "power lady mut"
          }
      ],
      [
          {
              "id": 1770,
              "action": "Sekhmet (LGG6, 557, Dendera)",
              "tags": "sekhmet"
          },
          {
              "id": 1771,
              "action": "The Lady of Horus' Arrows (epithet of the Eye of Ra) (LGG4, 138, Dendera and Edfu)",
              "tags": "horus-arrows lady"
          },
          {
              "id": 1772,
              "action": "Hathor, Mistress of All (lit., Lady to the Limit) (LGG4, 170, Edfu)",
              "tags": "mistress hathor all"
          },
          {
              "id": 1773,
              "action": "Harsiese, Beautiful-in-Strength (LGG2, 119, Edfu; variant reading Beautiful-in-Strength, son of Isis)",
              "tags": "beautiful-in-strength harsiese"
          }
      ],
      [
          {
              "id": 1777,
              "action": "Neith (LGG3, 511, Dendera)",
              "tags": "neith"
          },
          {
              "id": 1778,
              "action": "Sepa (here described as a form of Osiris) (LGG6, 269, Edfu)",
              "tags": "sepa"
          },
          {
              "id": 1779,
              "action": "Sekhmet, Lady of the Great Marshes (LGG4, 139, Dendera and Edfu)",
              "tags": "lady sekhmet great marshes"
          },
          {
              "id": 1780,
              "action": "Isis-Hathor, Lady of Geheset (18th UE nome) (LGG4, 152, Edfu)",
              "tags": "lady geheset isis-hathor"
          }
      ],
      [
          {
              "id": 1782,
              "action": "Nut, Lady of the Sycamore (LGG3, 573, Dendera)",
              "tags": "lady nut sycamore"
          },
          {
              "id": 1783,
              "action": "Wadjet, Lady of Buto (LGG4, 15, Edfu)",
              "tags": "buto lady wadjet"
          },
          {
              "id": 1784,
              "action": "Hathor, Lady of the Sycamore(-quarter) (location near Memphis) (LGG4, 80, Dendera)",
              "tags": "lady hathor sycamore"
          },
          {
              "id": 1785,
              "action": "Sekhmet, She Who Burns Them (LGG4, 356, Dendera and Edfu)",
              "tags": "burns sekhmet them she"
          },
          {
              "id": 1786,
              "action": "Min, Lord of Sais (Leitz 2002, 151 and 154, Edfu)",
              "tags": "lord min sais"
          }
      ],
      [
          {
              "id": 1790,
              "action": "Horus (LGG5, 231, Edfu; noted for two days: II Peret 18-19, Leitz 2002, 154, Edfu)",
              "tags": "horus"
          },
          {
              "id": 1791,
              "action": "Isis, Who Seeks the Two Lords (LGG5, 467, Dendera)",
              "tags": "lords seeks isis two"
          },
          {
              "id": 1792,
              "action": "Geb (LGG7, 304, Dendera)",
              "tags": "geb"
          },
          {
              "id": 1793,
              "action": "Hathor, Lady of the Food Offerings (LGG4, 169, Edfu)",
              "tags": "food lady hathor"
          },
          {
              "id": 1794,
              "action": "Nehmet-Awai (LGG4, 284, Dendera)",
              "tags": "nehmet-awai"
          }
      ],
      [
          {
              "id": 1798,
              "action": "Horus (LGG5, 231, Edfu; noted for two days: II Peret 18-19, Leitz 2002, 154, Edfu)",
              "tags": "horus"
          },
          {
              "id": 1799,
              "action": "Hathor, Who Sees Her Beauty (LGG3, 205, Dendera; variants Hathor, Lady of Perfection and Hathor, Lady of True Perfection, LGG4, 74, Edfu)",
              "tags": "hathor beauty sees"
          },
          {
              "id": 1800,
              "action": "Hathor, Lady of Praise (LGG4, 125, Kom Ombo and Edfu)",
              "tags": "lady hathor praise"
          },
          {
              "id": 1801,
              "action": "Wadjet (LGG2, 270, Dendera)",
              "tags": "wadjet"
          }
      ],
      [
          {
              "id": 1804,
              "action": "Horus of Both Eyes (LGG5, 260, Edfu; variant adds Lord of Thebes, Leitz 2002, 151, Edfu)",
              "tags": "eyes horus both"
          },
          {
              "id": 1805,
              "action": "Sekhmet-Menhyt (LGG3, 371, Dendera and Edfu)",
              "tags": "sekhmet-menhyt"
          },
          {
              "id": 1806,
              "action": "Hathor, Who Creates Her Own Greatness (LGG6, 160, Dendera and Edfu)",
              "tags": "hathor greatness own creates"
          },
          {
              "id": 1807,
              "action": "Hathor, Lady of Walking [About] (LGG4, 58, Edfu)",
              "tags": "lady hathor walking"
          },
          {
              "id": 1808,
              "action": "Isis, Lady of Offerings (LGG4, 111, Dendera)",
              "tags": "lady isis"
          }
      ],
      [
          {
              "id": 1812,
              "action": "Nekhbet, Lady of Fa'ag (3rd UE nome) (LGG4, 59, Edfu)",
              "tags": "nekhbet lady fa-ag"
          },
          {
              "id": 1813,
              "action": "Nemty of the 12th UE Nome (LGG4, 244; Leitz 2002, 147 and 154, Edfu)",
              "tags": "th ue nemty nome"
          },
          {
              "id": 1814,
              "action": "Osiris (LGG2, 530, Dendera)",
              "tags": "osiris"
          }
      ],
      [
          {
              "id": 1824,
              "action": "Horus of Both Eyes (LGG5, 260; noted for three days, II Peret 22-24)",
              "tags": "eyes horus both"
          },
          {
              "id": 1825,
              "action": "She-Who-Is-Filled-with-Ma'at (epithet of the Eye of Ra) (LGG3, 369, Dendera and Edfu)",
              "tags": "she-who-is-filled-with-ma-at"
          },
          {
              "id": 1826,
              "action": "Sokar (LGG6, 664, Dendera)",
              "tags": "sokar"
          },
          {
              "id": 1827,
              "action": "The Lady of Nehenu (unknown location) (epithet of the Eye of Ra) (LGG4, 81, Edfu)",
              "tags": "lady nehenu"
          }
      ],
      [
          {
              "id": 1835,
              "action": "Horus of Both Eyes (LGG5, 260; noted for three days, II Peret 22-24)",
              "tags": "eyes horus both"
          },
          {
              "id": 1836,
              "action": "Hathor, Lady of Swiftness (LGG4, 115, Edfu and Kom Ombo)",
              "tags": "lady hathor swiftness"
          },
          {
              "id": 1837,
              "action": "Tefnut, Lady of Faience (LGG4, 165, Edfu)",
              "tags": "faience lady tefnut"
          },
          {
              "id": 1838,
              "action": "Nefertem (LGG4, 222, Dendera)",
              "tags": "nefertem"
          }
      ],
      [
          {
              "id": 1845,
              "action": "Horus of Both Eyes (LGG5, 260; noted for three days, II Peret 22-24)",
              "tags": "eyes horus both"
          },
          {
              "id": 1846,
              "action": "Nut (LGG3, 535, Dendera and Edfu)",
              "tags": "nut"
          },
          {
              "id": 1847,
              "action": "Lady of A'ay (unknown location) (form of the Eye of Ra) (LGG4, 26, Edfu)",
              "tags": "lady a-ay"
          }
      ],
      [
          {
              "id": 1855,
              "action": "Atum (LGG7, 412, Dendera)",
              "tags": "atum"
          },
          {
              "id": 1856,
              "action": "Horus (epithet damaged) (LGG7, 693, Edfu)",
              "tags": "horus"
          },
          {
              "id": 1857,
              "action": "Lady of the Father of the Fathers (epithet of the Eye of Ra) (LGG4, 24, Edfu)",
              "tags": "fathers lady father"
          },
          {
              "id": 1858,
              "action": "Neith, Lady of the Bow (LGG4, 143, Dendera and Edfu)",
              "tags": "neith lady bow"
          }
      ],
      [
          {
              "id": 1865,
              "action": "Horus Behdety (LGG5, 254, Dendera; also written Horus Behdety, Great God, Lord of Heaven, Lord of Mesen and Horus Behdety, Great God, Lord of Heaven, Lord of the Southern Behdet)",
              "tags": "behdety horus"
          },
          {
              "id": 1866,
              "action": "The Unifier, Protectress of the Divine Falcon (epithet of the Eye of Ra) (LGG6, 316, Dendera)",
              "tags": "falcon protectress unifier divine"
          },
          {
              "id": 1867,
              "action": "Lady of the Throat (epithet of the Eye of Ra) (LGG4, 110, Edfu)",
              "tags": "lady throat"
          },
          {
              "id": 1868,
              "action": "Osiris-in-Busiris (LGG2, 569; Leitz 2002, 147 and 151, Edfu)",
              "tags": "osiris-in-busiris"
          }
      ],
      [
          {
              "id": 1875,
              "action": "Osiris (epithet lost) (LGG7, 193, Edfu)",
              "tags": "osiris"
          },
          {
              "id": 1876,
              "action": "Hathor, Lady of Terror (LGG4, 130, Edfu)",
              "tags": "lady hathor terror"
          }
      ],
      [
          {
              "id": 1883,
              "action": "Mut-with-Swift-Arrows (LGG5, 632, Dendera and Edfu)",
              "tags": "mut-with-swift-arrows"
          },
          {
              "id": 1884,
              "action": "Sobek, Lord of Buto (LGG6, 259, Edfu; variant Sobek, Lord of the Eastern Mountain, Leitz 2002, 140)",
              "tags": "sobek buto lord"
          },
          {
              "id": 1885,
              "action": "Sekhmet, Lady of the Executioners of (location lost) (LGG4, 116, Edfu)",
              "tags": "executioners lady sekhmet"
          },
          {
              "id": 1886,
              "action": "Hathor, Lady of the Son of Ra (LGG4, 124, Dendera)",
              "tags": "lady hathor ra son"
          },
          {
              "id": 1887,
              "action": "Osiris (LGG2, 530, Dendera)",
              "tags": "osiris"
          }
      ],
      [
          {
              "id": 1894,
              "action": "Sobek, Lord of Tell Tebilla (LGG6, 259; Leitz 2002, 152, Edfu)",
              "tags": "sobek tebilla lord tell"
          },
          {
              "id": 1895,
              "action": "Sekhmet (LGG6, 557, Dendera; altered to Nofret, \"The Beautiful One\" in Dendera Mammisi; see Chassinat 1934, 60, plate 98 and LGG4, 225)",
              "tags": "sekhmet"
          },
          {
              "id": 1896,
              "action": "Hathor, Lady of Desire (LGG4, 2, Edfu)",
              "tags": "lady hathor desire"
          },
          {
              "id": 1897,
              "action": "Sekhmet, Lady of Trembling (LGG4, 138, Dendera and Edfu)",
              "tags": "lady sekhmet trembling"
          }
      ],
      [
          {
              "id": 1902,
              "action": "Horus the Lion, Lord of Takhet (LGG4, 207, Edfu)",
              "tags": "lord lion horus takhet"
          },
          {
              "id": 1903,
              "action": "Nut-Sekhmet (LGG3, 535, Dendera; some instances read Nut-Sekhmet-Who-Births-the-Gods, LGG6, 557)",
              "tags": "nut-sekhmet"
          },
          {
              "id": 1904,
              "action": "Hathor, Lady of White Calcite (LGG4, 18, Dendera and Edfu)",
              "tags": "lady hathor white calcite"
          },
          {
              "id": 1905,
              "action": "Hathor, Lady of Rejoicing (LGG4, 92, Edfu)",
              "tags": "rejoicing lady hathor"
          }
      ],
      [
          {
              "id": 1911,
              "action": "Ptah (LGG3, 169; Leitz 2002, 153-154, Edfu)",
              "tags": "ptah"
          },
          {
              "id": 1912,
              "action": "Amun-Ra, Lord of the Thrones of the Two Lands (LGG3, 672, Dendera Mammisi; variant Amun-Ra)",
              "tags": "lands thrones lord two amun-ra"
          },
          {
              "id": 1913,
              "action": "Hathor, Lady of Birds (LGG4, 3, Edfu)",
              "tags": "lady hathor birds"
          },
          {
              "id": 1914,
              "action": "The Lady of Heritage (epithet of the Eye of Ra) (LGG4, 10, Dendera, Dendera Mammisi, and Kom Ombo)",
              "tags": "lady heritage"
          },
          {
              "id": 1915,
              "action": "Amun-Ra (LGG1, 321, Dendera)",
              "tags": "amun-ra"
          }
      ],
      [
          {
              "id": 1927,
              "action": "Mistress of Rituals (epithet of the Eye of Ra) (LGG4, 19, Dendera Mammisi and Edfu)",
              "tags": "rituals mistress"
          },
          {
              "id": 1928,
              "action": "Nekhbet, Lady of Fa'ag (3rd UE nome) (LGG4, 19, Edfu)",
              "tags": "nekhbet lady fa-ag"
          },
          {
              "id": 1929,
              "action": "Ra-Horakhty (LGG4, 630, Dendera and Dendera Mammisi)",
              "tags": "ra-horakhty"
          },
          {
              "id": 1930,
              "action": "Ra, Who Cleaves the Acacia-Tree (LGG2, 356, Edfu)",
              "tags": "acacia-tree cleaves ra"
          }
      ],
      [
          {
              "id": 1932,
              "action": "Horus (LGG5, 231, Dendera)",
              "tags": "horus"
          },
          {
              "id": 1933,
              "action": "Neith (LGG3, 511, Dendera)",
              "tags": "neith"
          },
          {
              "id": 1934,
              "action": "Isis, Lady of the Palace (LGG4, 56, Edfu and Kom Ombo)",
              "tags": "lady isis palace"
          },
          {
              "id": 1935,
              "action": "Anubis, Overseer of the 13th UE Nome (Leitz 2002, 152, Edfu)",
              "tags": "overseer ue anubis nome th"
          },
          {
              "id": 1936,
              "action": "Most Beautiful of the Gods (epithet of the Eye of Ra) (LGG4, 229, Dendera, Dendera Mammisi, Edfu, and Kom Ombo)",
              "tags": "most beautiful"
          },
          {
              "id": 1937,
              "action": "NO FESTIVALS TODAY",
              "tags": "no festivals today"
          }
      ],
      [
          {
              "id": 1938,
              "action": "Hathor, Lady of Gentleness (LGG4, 127, Edfu and Kom Ombo)",
              "tags": "lady hathor gentleness"
          },
          {
              "id": 1939,
              "action": "Anubis Who Is in the Ut ( Imy-Ut ) (LGG1, 291, Dendera Mammisi)",
              "tags": "anubis ut"
          }
      ],
      [
          {
              "id": 1941,
              "action": "Hathor, Lady of Astonishment (LGG4, 151, Edfu and Kom Ombo)",
              "tags": "lady hathor astonishment"
          },
          {
              "id": 1942,
              "action": "Horus Great of Magic (LGG2, 454, Dendera Mammisi; variant in some locations Isis Great of Magic, LGG2, 493)",
              "tags": "magic horus great"
          },
          {
              "id": 1943,
              "action": "Kherty (Leitz 2002, 145, Edfu)",
              "tags": "kherty"
          }
      ],
      [
          {
              "id": 1948,
              "action": "Horus (LGG5, 231, Dendera)",
              "tags": "horus"
          },
          {
              "id": 1949,
              "action": "Sekhmet-Hathor, Who Is in the Center of the Heart (LGG5, 432, Dendera and Dendera Mammisi)",
              "tags": "heart center sekhmet-hathor"
          },
          {
              "id": 1950,
              "action": "Nut (LGG3, 535, Dendera)",
              "tags": "nut"
          },
          {
              "id": 1951,
              "action": "Horus, Foremost of [epithet damaged; likely Eyes] (LGG6, 48, Edfu)",
              "tags": "foremost horus"
          },
          {
              "id": 1952,
              "action": "Neith, Lady of the Hill (LGG4, 6, Edfu and Kom Ombo)",
              "tags": "neith hill lady"
          },
          {
              "id": 1953,
              "action": "Kherty (Leitz 2002, 145, Edfu)",
              "tags": "kherty"
          }
      ],
      [
          {
              "id": 1957,
              "action": "Sepa (here a form of Osiris) (LGG6, 269, Edfu)",
              "tags": "sepa"
          },
          {
              "id": 1958,
              "action": "Hathor, Lady of Byblos (LGG4, 150, Edfu and Kom Ombo)",
              "tags": "lady hathor byblos"
          },
          {
              "id": 1959,
              "action": "Anubis (LGG1, 391, Dendera Mammisi)",
              "tags": "anubis"
          }
      ],
      [
          {
              "id": 1962,
              "action": "Horus, Lord of Stomping in the Sky (variant Lord Who Stomps in the Sky) (LGG3, 663, Dendera)",
              "tags": "lord stomping horus sky"
          },
          {
              "id": 1963,
              "action": "The Lady of [Wen…] (location name damaged) (seated goddess in Hathor crown) (LGG4, 40, Edfu)",
              "tags": "lady"
          },
          {
              "id": 1964,
              "action": "Lady of the Hidden Land (epithet of the Eye of Ra) (LGG4, 154, Dendera, Edfu, and Kom Ombo)",
              "tags": "lady hidden land"
          },
          {
              "id": 1965,
              "action": "Ra, Who Carries His Offerings (LGG4, 671, Edfu)",
              "tags": "carries ra"
          }
      ],
      [
          {
              "id": 1968,
              "action": "Golden-Limbed One (LGG5, 31, Dendera; unknown epithet of a deity depicted as a lion-headed snake)",
              "tags": "one golden-limbed"
          },
          {
              "id": 1969,
              "action": "Henu (Sokar's shrine barque) (LGG5, 159; Leitz 2002, 148, Edfu)",
              "tags": "henu"
          },
          {
              "id": 1970,
              "action": "The Lady of Movement (epithet of the Eye of Ra) (LGG4, 64, Edfu and Kom Ombo)",
              "tags": "lady movement"
          },
          {
              "id": 1971,
              "action": "Nehebkau (LGG4, 274, Dendera)",
              "tags": "nehebkau"
          }
      ],
      [
          {
              "id": 1974,
              "action": "Horus-in-His-Heaven (LGG5, 257, Edfu)",
              "tags": "horus-in-his-heaven"
          },
          {
              "id": 1975,
              "action": "The Red Crown (LGG7, 466, Dendera, Dendera Mammisi, Edfu, and Kom Ombo)",
              "tags": "crown red"
          },
          {
              "id": 1976,
              "action": "Sothis (LGG6, 687, Edfu and Kom Ombo)",
              "tags": "sothis"
          },
          {
              "id": 1977,
              "action": "Iah (LGG1, 147, Dendera and Dendera Mammisi)",
              "tags": "iah"
          },
          {
              "id": 1978,
              "action": "Bast, Lady of Heaven (LGG2, 740, Dendera)",
              "tags": "lady heaven bast"
          }
      ],
      [
          {
              "id": 1983,
              "action": "Isis-Hathor Who Pacifies the Heart of the Lord of Running (i.e., Osiris-Apis) (LGG5, 586, Dendera, Dendera Mammisi, Edfu, and Kom Ombo)",
              "tags": "pacifies lord running isis-hathor heart"
          },
          {
              "id": 1984,
              "action": "Montu-Ra, Lord of the Place of Fighting (LGG3, 637, Dendera and Dendera Mammisi)",
              "tags": "lord place montu-ra fighting"
          },
          {
              "id": 1985,
              "action": "The Two Enjoyers (i.e., Horus and Seth) (Leitz 2002, 148, Edfu)",
              "tags": "two enjoyers"
          }
      ],
      [
          {
              "id": 1990,
              "action": "Sobek, Lord of the Temple (LGG6, 259; Leitz 2002, 141, Edfu)",
              "tags": "sobek temple lord"
          },
          {
              "id": 1991,
              "action": "Lady of the Flame (epithet of the Eye of Ra) (LGG4, 73, Edfu and Kom Ombo)",
              "tags": "lady flame"
          },
          {
              "id": 1992,
              "action": "Wadjet of Perfect Character (LGG4, 228, Dendera, Dendera Mammisi, and Kom Ombo)",
              "tags": "perfect character wadjet"
          },
          {
              "id": 1993,
              "action": "Anubis Who Is in the Ut ( Imy-Ut ) (LGG1, 371, Dendera and Dendera Mammisi)",
              "tags": "anubis ut"
          }
      ],
      [
          {
              "id": 1997,
              "action": "Horus, Lord of Stomping (variant Horus, Lord of Stomping in Heaven) (LGG3, 662, Dendera)",
              "tags": "lord stomping horus"
          },
          {
              "id": 1998,
              "action": "Sekhmet, Lady of Twin Lions (LGG4, 87, Edfu and Kom Ombo)",
              "tags": "lady sekhmet twin lions"
          },
          {
              "id": 1999,
              "action": "Sekhmet, Lady of Carnelian (LGG3, 108, Dendera, Edfu, and Kom Ombo)",
              "tags": "lady sekhmet carnelian"
          },
          {
              "id": 2000,
              "action": "Ra, Lord of All (lit., Lord to the Limit) (LGG4, 612, Edfu)",
              "tags": "lord all ra"
          }
      ],
      [
          {
              "id": 2005,
              "action": "Sobek, Lord of el-Harageh (Faiyum location) (LGG3, 755; Leitz 2002, 141 and 151; variant Sobek, Lord of Lights, Leitz 2002, 141, Edfu)",
              "tags": "sobek el-harageh lord"
          },
          {
              "id": 2006,
              "action": "Sekhmet (LGG6, 557, Dendera)",
              "tags": "sekhmet"
          },
          {
              "id": 2007,
              "action": "Satis, Lady of Radiance (LGG6, 700, Dendera, Dendera Mammisi, and Edfu)",
              "tags": "lady radiance satis"
          },
          {
              "id": 2008,
              "action": "Lady of Procrastination (epithet of the Eye of Ra) (LGG4, 22, Edfu and Kom Ombo)",
              "tags": "procrastination lady"
          },
          {
              "id": 2009,
              "action": "Hathor, Lady of Arrows (LGG4, 136; single variant Satis, Lady of Arrows, Kom Ombo)",
              "tags": "arrows lady hathor"
          },
          {
              "id": 2010,
              "action": "Anubis (LGG1, 391, Dendera Mammisi)",
              "tags": "anubis"
          }
      ],
      [
          {
              "id": 2015,
              "action": "Sobek Lord of [location lost] (LGG6, 259; Leitz 2002, 142, Edfu)",
              "tags": "sobek lord"
          },
          {
              "id": 2016,
              "action": "Bast, Lady of Running (LGG4, 105, Dendera, Dendera Mammisi, Edfu, and Kom Ombo)",
              "tags": "lady running bast"
          },
          {
              "id": 2017,
              "action": "Hathor, Lady of Heads (LGG4, 161, Edfu and Kom Ombo)",
              "tags": "lady hathor heads"
          },
          {
              "id": 2018,
              "action": "Onuris (LGG1, 378, Dendera and Dendera Mammisi)",
              "tags": "onuris"
          }
      ],
      [
          {
              "id": 2024,
              "action": "Sopdu, Lord of the East (form of Horus) (LGG6, 290, Dendera and Dendera Mammisi)",
              "tags": "lord sopdu east"
          },
          {
              "id": 2025,
              "action": "Hathor, Lady of All Broken Souls (or Lady of All Stolen Souls ( bau ) (LGG4, 45, Edfu and Kom Ombo)",
              "tags": "souls hathor all lady broken"
          },
          {
              "id": 2026,
              "action": "Menhyt, Lady of Mankind (lit., \"the ones of Atum\") (LGG4, 162, Dendera, Dendera Mammisi, Edfu, and Kom Ombo)",
              "tags": "lady mankind menhyt"
          },
          {
              "id": 2027,
              "action": "Banebdjedet (LGG2, 683; Leitz 2002, 152, Edfu)",
              "tags": "banebdjedet"
          }
      ],
      [
          {
              "id": 2029,
              "action": "Horus Who Is in His Papyrus Plants (epithet of Khonsu of Edfu) (LGG5, 375, Dendera Mammisi)",
              "tags": "plants horus papyrus"
          },
          {
              "id": 2030,
              "action": "Neith (LGG3, 511, Dendera)",
              "tags": "neith"
          },
          {
              "id": 2031,
              "action": "Sobek, Lord of Buto (LGG6, 259; Leitz 2002, 142 and 151, Edfu)",
              "tags": "sobek buto lord"
          },
          {
              "id": 2032,
              "action": "Neith, Lady of the Hill (LGG4, 6, Edfu and Kom Ombo)",
              "tags": "neith hill lady"
          },
          {
              "id": 2033,
              "action": "Hathor, Mistress of the Ipep-Plant (LGG4, 14, Edfu and Kom Ombo)",
              "tags": "mistress hathor ipep-plant"
          },
          {
              "id": 2034,
              "action": "Isis, Lady of the World (lit., \"all the sun shades\") (LGG4, 105, Dendera, Dendera Mammisi, Edfu, and Kom Ombo)",
              "tags": "lady isis world"
          }
      ],
      [
          {
              "id": 2038,
              "action": "Isis, Lady of the Papyrus-Scepter (LGG4, 38, Edfu)",
              "tags": "lady isis papyrus-scepter"
          },
          {
              "id": 2039,
              "action": "Nehebkau (LGG4, 274; Leitz 2002, 148, Edfu)",
              "tags": "nehebkau"
          },
          {
              "id": 2040,
              "action": "Isis (LGG1, 62, Dendera)",
              "tags": "isis"
          }
      ],
      [
          {
              "id": 2043,
              "action": "Montu (LGG3, 319, Dendera and Dendera Mammisi)",
              "tags": "montu"
          },
          {
              "id": 2044,
              "action": "Ra-Horakhty, Bull of Heliopolis (LGG7, 250; Leitz 2002, 148 and 152, Edfu)",
              "tags": "ra-horakhty heliopolis bull"
          },
          {
              "id": 2045,
              "action": "The Lady of Stars (epithet of the Eye of Ra) (LGG4, 126, Dendera and Dendera Mammisi)",
              "tags": "lady stars"
          }
      ],
      [
          {
              "id": 2048,
              "action": "Isis, She with a Healthy Heart (LGG6, 380-381, Dendera, Dendera Mammisi, and Kom Ombo)",
              "tags": "healthy with she heart isis"
          },
          {
              "id": 2049,
              "action": "Hathor, Lady of the Mummy-Bandages (LGG4, 126, Edfu and Kom Ombo)",
              "tags": "lady hathor mummy-bandages"
          },
          {
              "id": 2050,
              "action": "Anubis (LGG1, 391, Dendera and Dendera Mammisi)",
              "tags": "anubis"
          },
          {
              "id": 2051,
              "action": "Banebdjedet (LGG2, 683; Leitz 2002, 152, Edfu)",
              "tags": "banebdjedet"
          }
      ],
      [
          {
              "id": 2054,
              "action": "Khonsu-in-Thebes (LGG5, 764, Dendera and Dendera Mammisi)",
              "tags": "khonsu-in-thebes"
          },
          {
              "id": 2055,
              "action": "Lady of the Eggs (epithet of the Eye of Ra) (LGG4, 126, Edfu)",
              "tags": "eggs lady"
          },
          {
              "id": 2056,
              "action": "Onuris (LGG1, 378, Edfu)",
              "tags": "onuris"
          },
          {
              "id": 2057,
              "action": "Hathor, She of Many Hearts (LGG2, 224, Dendera, Dendera Mammisi, Edfu, and Kom Ombo)",
              "tags": "hearts hathor she many"
          }
      ],
      [
          {
              "id": 2059,
              "action": "Nut, Lady of Heaven (LGG3, 535, Dendera)",
              "tags": "lady heaven nut"
          },
          {
              "id": 2060,
              "action": "Menhyt, Lady of the Primordial Ones (LGG4, 51, Edfu)",
              "tags": "ones lady primordial menhyt"
          },
          {
              "id": 2061,
              "action": "Ra, Lord of Heaven (LGG4, 612, Dendera Mammisi)",
              "tags": "lord heaven ra"
          },
          {
              "id": 2062,
              "action": "Anubis of the Shredding Claws (LGG1, 398, Edfu)",
              "tags": "anubis shredding claws"
          },
          {
              "id": 2063,
              "action": "Isis the Great (LGG2, 52, Dendera, Dendera Mammisi, Edfu, and Kom Ombo)",
              "tags": "isis great"
          }
      ],
      [
          {
              "id": 2067,
              "action": "Harsiese (LGG5, 283, Dendera Mammisi)",
              "tags": "harsiese"
          },
          {
              "id": 2068,
              "action": "Neith (LGG3, 511, Dendera)",
              "tags": "neith"
          },
          {
              "id": 2069,
              "action": "Hathor the Wise (LGG6, 125, Dendera, Dendera Mammisi, Edfu, and Kom Ombo)",
              "tags": "hathor wise"
          },
          {
              "id": 2070,
              "action": "Anubis, Lord of Hermopolis (LGG1, 391; Leitz 2002, 151, Edfu)",
              "tags": "anubis hermopolis lord"
          }
      ],
      [
          {
              "id": 2073,
              "action": "Haroeris (LGG5, 249, Dendera)",
              "tags": "haroeris"
          },
          {
              "id": 2074,
              "action": "Sobek, Lord of the Bulls (LGG6, 259; Leitz 2002, 142, Edfu)",
              "tags": "sobek lord bulls"
          },
          {
              "id": 2075,
              "action": "Sekhmet, Eye of Ra (LGG6, 557, Dendera)",
              "tags": "sekhmet ra eye"
          },
          {
              "id": 2076,
              "action": "Hathor, Lady of Joy (LGG4, 94, Edfu and Kom Ombo)",
              "tags": "lady hathor joy"
          },
          {
              "id": 2077,
              "action": "Wadjet, Who Rejoices (LGG4, 726, Dendera, Dendera Mammisi, and Kom Ombo)",
              "tags": "wadjet rejoices"
          }
      ],
      [
          {
              "id": 2082,
              "action": "Hathor the Female Ruler, Lady of Heaven (LGG5, 536, Dendera)",
              "tags": "hathor lady heaven ruler female"
          },
          {
              "id": 2083,
              "action": "Horus the Male Ruler, Lord of Heaven (LGG5, 553, Dendera Mammisi)",
              "tags": "horus lord male heaven ruler"
          },
          {
              "id": 2084,
              "action": "Isis, Daughter of Geb (variant Isis, Ornament of Geb) (LGG6, 110, Dendera, Dendera Mammisi, and Edfu)",
              "tags": "isis daughter geb"
          },
          {
              "id": 2085,
              "action": "Hathor, Mistress of Aphroditopolis (LGG4, 5, Edfu)",
              "tags": "mistress hathor aphroditopolis"
          },
          {
              "id": 2086,
              "action": "Ptah-Sokar, Who Weeps in the Sky, Son of Geb (LGG4, 670, Edfu)",
              "tags": "ptah-sokar weeps son sky geb"
          },
          {
              "id": 2087,
              "action": "She in Whose Power the King Is (epithet of the Eye of Ra) (LGG1, 151, Dendera, Dendera Mammisi, and Edfu)",
              "tags": "power whose king she"
          }
      ],
      [
          {
              "id": 2092,
              "action": "Whose-Face-is-Malachite-Colored (epithet of the Eye of Ra) (LGG7, 125, Dendera, Dendera Mammisi, and Edfu)",
              "tags": "whose-face-is-malachite-colored"
          },
          {
              "id": 2093,
              "action": "Hathor, Lady of Heat (or Lady of Hot Winds) (LGG4, 154, Edfu)",
              "tags": "lady hathor heat"
          },
          {
              "id": 2094,
              "action": "Onuris (LGG1, 378, Dendera and Dendera Mammisi)",
              "tags": "onuris"
          }
      ],
      [
          {
              "id": 2097,
              "action": "Isis, Lady of Love (LGG4, 65, Dendera, Dendera Mammisi, Edfu, and Kom Ombo)",
              "tags": "lady love isis"
          },
          {
              "id": 2098,
              "action": "Hathor, Lady of Divine Power (LGG4, 133, Edfu)",
              "tags": "power lady hathor divine"
          },
          {
              "id": 2099,
              "action": "Iah (LGG1, 147, Dendera Mammisi)",
              "tags": "iah"
          },
          {
              "id": 2100,
              "action": "She Who Hears Jubilation (epithet of the Eye of Ra) (LGG1, 151, Dendera, Edfu, and Kom Ombo)",
              "tags": "jubilation hears she"
          },
          {
              "id": 2101,
              "action": "Tefnut-Sekhmet, Great in Millions (LGG2, 64, Dendera and Edfu)",
              "tags": "tefnut-sekhmet great millions"
          }
      ],
      [
          {
              "id": 2104,
              "action": "She in Whose Following Are Thousands (epithet of the Eye of Ra) (LGG5, 624, Dendera and Edfu)",
              "tags": "thousands whose she following"
          },
          {
              "id": 2105,
              "action": "Sopdu (here a form of Horus) (LGG6, 290, Edfu)",
              "tags": "sopdu"
          },
          {
              "id": 2106,
              "action": "Hathor, Lady of the Peace of the Two Gods (LGG4, 113, Edfu)",
              "tags": "lady hathor peace two"
          },
          {
              "id": 2107,
              "action": "Isis (LGG1, 67, Dendera)",
              "tags": "isis"
          },
          {
              "id": 2108,
              "action": "Iunmutef (\"Pillar of His Mother,\" an epithet of Harsiese) (LGG1, 197, Dendera Mammisi)",
              "tags": "iunmutef"
          }
      ],
      [
          {
              "id": 2111,
              "action": "She Who Binds Her Father (epithet of the Eye of Ra) (LGG7, 177, Dendera, Dendera Mammisi, and Edfu)",
              "tags": "binds father she"
          },
          {
              "id": 2112,
              "action": "Horus of Denem (unknown location) (LGG7, 550, Edfu)",
              "tags": "denem horus"
          },
          {
              "id": 2113,
              "action": "Amun-Ra, Great of Magic (LGG2, 454, Dendera Mammisi; variant in one location to Great of Magic as an epithet of the female Eye of Ra, LGG2, 493, Dendera Mammisi)",
              "tags": "magic great amun-ra"
          }
      ],
      [
          {
              "id": 2116,
              "action": "Horus Foremost-of-Eyes (LGG5, 849, Edfu; variant adds Lord of Athribis, Leitz 2002, 151, Edfu)Silent One (epithet of the Eye of Ra) (LGG7, 316, Dendera, Dendera Mammisi, and Edfu)",
              "tags": "one foremost-of-eyes horus silent"
          },
          {
              "id": 2117,
              "action": "Hathor, Lady of Rejoicing (LGG4, 92, Edfu)",
              "tags": "rejoicing lady hathor"
          },
          {
              "id": 2118,
              "action": "Amun-Ra, Ba in His Temple (LGG2, 680, Dendera Mammisi)",
              "tags": "temple ba amun-ra"
          }
      ],
      [
          {
              "id": 2122,
              "action": "She Who Circles the Desert (epithet of the Eye of Ra) (LGG3, 114, Dendera, Dendera Mammisi, and Edfu)",
              "tags": "circles desert she"
          },
          {
              "id": 2123,
              "action": "Horus, Lord of Mer-shas (unknown location near Dendera) (LGG3, 647, Dendera Mammisi)",
              "tags": "lord mer-shas horus"
          },
          {
              "id": 2124,
              "action": "Tefnut (LGG7, 406, Dendera)",
              "tags": "tefnut"
          },
          {
              "id": 2125,
              "action": "Lady of Seizing (variant Lady of Theft) (epithet of the Eye of Ra) (LGG4, 25, Edfu)",
              "tags": "seizing lady"
          },
          {
              "id": 2126,
              "action": "Ra (LGG4, 612, Edfu)",
              "tags": "ra"
          }
      ],
      [
          {
              "id": 2134,
              "action": "Horus (LGG5, 231, Dendera)",
              "tags": "horus"
          },
          {
              "id": 2135,
              "action": "Nut Who Births the Gods (LGG3, 535, Dendera)",
              "tags": "births nut"
          },
          {
              "id": 2136,
              "action": "Lady of Teeth (epithet of the Eye of Ra) (LGG4, 14, Edfu)",
              "tags": "teeth lady"
          },
          {
              "id": 2137,
              "action": "Wadjet the Bright (LGG2, 744, Dendera, Dendera Mammisi, and Edfu)",
              "tags": "wadjet bright"
          }
      ],
      [
          {
              "id": 2142,
              "action": "Haroeris, Son of Ra (LGG5, 249; Leitz 2002, 154, Edfu)",
              "tags": "haroeris ra son"
          },
          {
              "id": 2143,
              "action": "Mut, Lady of Heaven (LGG3, 251, Dendera)",
              "tags": "lady heaven mut"
          },
          {
              "id": 2144,
              "action": "Lady of Na'a (unknown UE location) (epithet of the Eye of Ra) (LGG4, 71, Edfu)",
              "tags": "lady na-a"
          },
          {
              "id": 2145,
              "action": "Hathor, Lady of Inundation (LGG4, 124, Dendera and Dendera Mammisi)",
              "tags": "lady hathor inundation"
          },
          {
              "id": 2146,
              "action": "Horus, Who Carries His Mother (LGG4, 671, Dendera Mammisi)",
              "tags": "carries mother horus"
          }
      ],
      [
          {
              "id": 2151,
              "action": "Horus (LGG5, 231, Dendera)",
              "tags": "horus"
          },
          {
              "id": 2152,
              "action": "Horus the Radiant (LGG3, 235, Edfu)",
              "tags": "radiant horus"
          },
          {
              "id": 2153,
              "action": "Isis, Lady of the Sanctuary (LGG4, 24, Edfu)",
              "tags": "sanctuary lady isis"
          },
          {
              "id": 2154,
              "action": "Hathor, Lady of Offerings (LGG4, 111, Dendera)",
              "tags": "lady hathor"
          },
          {
              "id": 2155,
              "action": "She-Who-Is-Greedy-for-Gold (epithet of the Eye of Ra) (LGG2, 80, Dendera and Edfu)",
              "tags": "she-who-is-greedy-for-gold"
          }
      ],
      [
          {
              "id": 2160,
              "action": "Horus (LGG5, 231, Dendera)",
              "tags": "horus"
          },
          {
              "id": 2161,
              "action": "Neith (LGG3, 511, Dendera)",
              "tags": "neith"
          },
          {
              "id": 2162,
              "action": "Amun-Ra, Lord of All (lit., Lord to the Limit) (LGG3, 795, Edfu)",
              "tags": "lord all amun-ra"
          },
          {
              "id": 2163,
              "action": "Storming One (epithet of the Eye of Ra) (LGG7, 293, Dendera, Dendera Mammisi, and Edfu)",
              "tags": "one storming"
          },
          {
              "id": 2164,
              "action": "Hathor, Mistress of Itnef (unknown location) (LGG4, 24, Edfu)",
              "tags": "mistress hathor itnef"
          }
      ],
      [
          {
              "id": 2167,
              "action": "Horus (LGG5, 231, Dendera)",
              "tags": "horus"
          },
          {
              "id": 2168,
              "action": "Harsaphes (LGG5, 381, Edfu)",
              "tags": "harsaphes"
          },
          {
              "id": 2169,
              "action": "She-from-Whose-Terror-There-Is-No-Fleeing (epithet of the Eye of Ra) (LGG3, 487, Dendera and Edfu)",
              "tags": "she-from-whose-terror-there-is-no-fleeing"
          },
          {
              "id": 2170,
              "action": "Isis, Lady of Athribis (LGG4, 150, Edfu)",
              "tags": "athribis lady isis"
          },
          {
              "id": 2171,
              "action": "Isis (LGG1, 62, Dendera)",
              "tags": "isis"
          }
      ],
      [
          {
              "id": 2174,
              "action": "Bast, Lady of Heaven (LGG5, 176, Dendera)",
              "tags": "lady heaven bast"
          },
          {
              "id": 2175,
              "action": "Hathor, Lady of Radiance (LGG4, 113, Edfu)",
              "tags": "lady hathor radiance"
          },
          {
              "id": 2176,
              "action": "She of the Strong Arm (epithet of the Eye of Ra) (LGG4, 316, Dendera, Dendera Mammisi, and Edfu)",
              "tags": "strong arm she"
          },
          {
              "id": 2177,
              "action": "Ra (LGG4, 612, Edfu)",
              "tags": "ra"
          },
          {
              "id": 2178,
              "action": "Horus, Soul ( ba ) of Ra (LGG2, 688, Dendera Mammisi)",
              "tags": "soul horus ra"
          }
      ],
      [
          {
              "id": 2181,
              "action": "Atum (LGG7, 412, Dendera and Dendera Mammisi)",
              "tags": "atum"
          },
          {
              "id": 2182,
              "action": "Hathor, Lady of the Moringa Tree (LGG4, 46, Edfu)",
              "tags": "moringa lady hathor tree"
          },
          {
              "id": 2183,
              "action": "Lady of the Heavenly Thrones (epithet of the Eye of Ra) (LGG4, 123, Dendera, Dendera Mammisi, and Edfu)",
              "tags": "lady heavenly thrones"
          },
          {
              "id": 2184,
              "action": "Ra in Herakleopolis Magna (LGG4, 627 and Leitz 2002, 151, Edfu)",
              "tags": "magna herakleopolis ra"
          }
      ],
      [
          {
              "id": 2187,
              "action": "Atum (LGG6, 412; Dendera Mammisi)",
              "tags": "atum"
          },
          {
              "id": 2188,
              "action": "Mistress of Extinguishing Fires (epithet of the Eye of Ra) (LGG4, 33, Edfu)",
              "tags": "mistress extinguishing fires"
          },
          {
              "id": 2189,
              "action": "Nefertem (LGG4, 222, Dendera)",
              "tags": "nefertem"
          },
          {
              "id": 2190,
              "action": "She Who Is Great through Her Power (epithet of the Eye of Ra) (LGG2, 485, Dendera, Dendera Mammisi, and Edfu)",
              "tags": "through great she power"
          },
          {
              "id": 2191,
              "action": "Amun-Ra, Ba in His Temple (LGG2, 680, Edfu)",
              "tags": "temple ba amun-ra"
          }
      ],
      [
          {
              "id": 2194,
              "action": "She-Who-Watches-on-the-Road (epithet of the Eye of Ra) (LGG6, 137, Dendera, Dendera Mammisi, and Edfu)",
              "tags": "she-who-watches-on-the-road"
          },
          {
              "id": 2195,
              "action": "Sobek Lord of Anasha (LGG6, 259 and Leitz 2002, 142 and 151, Edfu)",
              "tags": "sobek lord anasha"
          },
          {
              "id": 2196,
              "action": "Hathor, Lady of the Sycamore(-quarter) (location near Memphis) (LGG4, 80, Dendera and Dendera Mammisi)",
              "tags": "lady hathor sycamore"
          },
          {
              "id": 2197,
              "action": "Hathor, Lady of Sebty (unknown location) (LGG4, 126, Edfu)",
              "tags": "lady hathor sebty"
          },
          {
              "id": 2198,
              "action": "Appearance of Tasenetnofret, Hathor, and Min (TFC Kom Ombo Ptolemy VI; Day 1 of 2 for Min only)",
              "tags": "min hathor tasenetnofret"
          }
      ],
      [
          {
              "id": 2205,
              "action": "Min, Lord of Coptos (LGG3, 288, Dendera Mammisi)",
              "tags": "lord min coptos"
          },
          {
              "id": 2206,
              "action": "Sobek, Lord of the Temple (LGG6, 251; Leitz 2002, 141, Edfu)",
              "tags": "sobek temple lord"
          },
          {
              "id": 2207,
              "action": "Lady of Offerings (epithet of the Eye of Ra) (LGG4, 111, Dendera)",
              "tags": "lady"
          },
          {
              "id": 2208,
              "action": "Hathor, Lady of Distress (LGG4, 151, Edfu)",
              "tags": "distress lady hathor"
          }
      ],
      [
          {
              "id": 2212,
              "action": "She Who Crosses the 10th Upper Egyptian Nome (epithet of the Eye of Ra) (LGG5, 760, Dendera, Dendera Mammisi, and Edfu)",
              "tags": "crosses upper nome she th egyptian"
          },
          {
              "id": 2213,
              "action": "Horus-Shu, Chosen by the Udjat (LGG6, 689, Dendera)",
              "tags": "udjat horus-shu chosen"
          },
          {
              "id": 2214,
              "action": "Horus, Who Carries His Mother (LGG4, 671, Edfu)",
              "tags": "carries mother horus"
          },
          {
              "id": 2215,
              "action": "Onuris (LGG1, 378, Dendera)",
              "tags": "onuris"
          }
      ],
      [
          {
              "id": 2216,
              "action": "Sekhmet, Lady of the Great Ones (LGG4, 25, Dendera, Dendera Mammisi, and Edfu)",
              "tags": "ones lady sekhmet great"
          }
      ],
      [
          {
              "id": 2219,
              "action": "Chronokrater :",
              "tags": "chronokrater"
          },
          {
              "id": 2220,
              "action": "Horus (LGG5, 231, Dendera)",
              "tags": "horus"
          },
          {
              "id": 2221,
              "action": "Sekhmet-Mehyt (LGG3, 371, Dendera)",
              "tags": "sekhmet-mehyt"
          },
          {
              "id": 2222,
              "action": "Lady of Movement (epithet of the Eye of Ra) (LGG4, 64, Edfu)",
              "tags": "lady movement"
          },
          {
              "id": 2223,
              "action": "Hathor, Great of Heat (LGG2, 63, Esna)",
              "tags": "hathor great heat"
          }
      ],
      [
          {
              "id": 2226,
              "action": "Horus (LGG5, 231, Dendera)",
              "tags": "horus"
          },
          {
              "id": 2227,
              "action": "Sobek, Lord of [location lost] (LGG6, 259; Leitz (2002) 142-143, Edfu; multiple readings all beginning with Sha-)",
              "tags": "readings sobek lord all sha- with beginning edfu multiple"
          },
          {
              "id": 2228,
              "action": "Isis, Who Knows Her Mother (LGG4, 709, Dendera, Dendera Mammisi, and Edfu)",
              "tags": "knows mother isis"
          }
      ],
      [
          {
              "id": 2232,
              "action": "Set, Lion of Ra in Herakleopolis Magna (Edfu; possibly a form of Amun-Ra according to variants)",
              "tags": "herakleopolis magna set lion ra"
          },
          {
              "id": 2233,
              "action": "Lady of A'af (unknown location) (epithet of the Eye of Ra) (LGG4, 27, Edfu)",
              "tags": "lady a-af"
          },
          {
              "id": 2234,
              "action": "Nefertem (LGG4, 222, Dendera and Dendera Mammisi)",
              "tags": "nefertem"
          }
      ],
      [
          {
              "id": 2237,
              "action": "Horus of Lower Egypt (LGG1, 381; LGG5, 231, Edfu)",
              "tags": "egypt horus lower"
          },
          {
              "id": 2238,
              "action": "Isis, the North Wind (LGG5, 379, Dendera, Dendera Mammisi, and Edfu)",
              "tags": "north wind isis"
          },
          {
              "id": 2239,
              "action": "Lady of Linen Bandages (epithet of the Eye of Ra) (LGG4, 75, Edfu)",
              "tags": "lady bandages linen"
          },
          {
              "id": 2240,
              "action": "Ra-Atum, Greatest of Gods (or Eldest of Gods) (LGG2, 449, Dendera and Dendera Mammisi)",
              "tags": "greatest ra-atum"
          }
      ],
      [
          {
              "id": 2243,
              "action": "Horakhty (LGG5, 239, Dendera; variant Ra-Horakhty, LGG4, 630, Dendera Mammisi)",
              "tags": "horakhty"
          },
          {
              "id": 2244,
              "action": "She Whose Love Is Made Great (or She Who Loves Making Greatness) (epithet of the Eye of Ra) (LGG3, 350, Dendera, Dendera Mammisi, and Edfu)",
              "tags": "whose great love she made"
          },
          {
              "id": 2245,
              "action": "Onuris of Thinis (LGG1, 381; Leitz 2002, 148 and 151, Edfu)",
              "tags": "thinis onuris"
          }
      ],
      [
          {
              "id": 2248,
              "action": "Horus, Lord of Mesen (LGG1, 381; LGG5, 231, Dendera and Edfu; Leitz 2002, 152, Edfu)",
              "tags": "lord horus mesen"
          },
          {
              "id": 2249,
              "action": "Hathor, Lady of Gega (unknown location) (LGG4, 153, Edfu)",
              "tags": "gega lady hathor"
          },
          {
              "id": 2250,
              "action": "Hathor, Lady of the Winds (LGG4, 163-164, Dendera, Dendera Mammisi, and Edfu)",
              "tags": "winds lady hathor"
          },
          {
              "id": 2251,
              "action": "Ra, Great of Magic (LGG2, 454, Dendera Mammisi)",
              "tags": "magic great ra"
          }
      ],
      [
          {
              "id": 2254,
              "action": "Horus, Who Comes from the Delta (LGG3, 55, Dendera Mammisi)",
              "tags": "horus comes delta"
          },
          {
              "id": 2255,
              "action": "Min, Lord of Coptos (LGG3, 288; Leitz 2002, 151, Edfu)",
              "tags": "lord min coptos"
          },
          {
              "id": 2256,
              "action": "Shezemtet (LGG7, 124, Dendera)",
              "tags": "shezemtet"
          },
          {
              "id": 2257,
              "action": "The Lady of Generation (epithet of the Eye of Ra) (LGG4, 138, Dendera and Edfu)",
              "tags": "lady generation"
          },
          {
              "id": 2258,
              "action": "Sothis, Lady of Arrows (LGG4, 144, Edfu)",
              "tags": "arrows lady sothis"
          }
      ],
      [
          {
              "id": 2260,
              "action": "Hathor, Lady of the Sycamore(-quarter) (area near Memphis) (LGG4, 80)",
              "tags": "lady hathor sycamore"
          },
          {
              "id": 2261,
              "action": "Hathor, Lady of the Bull (variant Lady of Her Bull, LGG7, 245, Dendera and Edfu; LGG4, 149, Edfu)",
              "tags": "lady hathor bull"
          },
          {
              "id": 2262,
              "action": "Wadjet (LGG2, 270, Dendera)",
              "tags": "wadjet"
          },
          {
              "id": 2263,
              "action": "Banebdjedet (LGG2, 683, Dendera Mammisi)",
              "tags": "banebdjedet"
          },
          {
              "id": 2264,
              "action": "Montu, Lord of Thebes (Leitz 2002, 151, Edfu)",
              "tags": "lord montu thebes"
          }
      ],
      [
          {
              "id": 2267,
              "action": "The Great Nine ( Pesdjet ) (LGG3, 133, Dendera and Dendera Mammisi)",
              "tags": "great nine"
          },
          {
              "id": 2268,
              "action": "Sobek, Lord of Incense (LGG6, 259; Leitz 2002, 143, Edfu)",
              "tags": "sobek incense lord"
          },
          {
              "id": 2269,
              "action": "The Lady of Night (epithet of the Eye of Ra) (LGG4, 43, Edfu)",
              "tags": "night lady"
          },
          {
              "id": 2270,
              "action": "Protection-Is-Great-in-Her (epithet of the Eye of Ra) (LGG2, 458, Dendera, Dendera Mammisi, and Edfu)",
              "tags": "protection-is-great-in-her"
          }
      ],
      [
          {
              "id": 2272,
              "action": "She-Who-Walks-around-Her-House (epithet of the Eye of Ra) (LGG5, 760, Dendera, Dendera Mammisi, and Edfu)",
              "tags": "she-who-walks-around-her-"
          },
          {
              "id": 2273,
              "action": "Horus, Lord of Stomping (variant Horus, Lord of Heaven; LGG3, 662, Dendera; variant Lord of Stomping in Heaven, LGG3, 663, Dendera Mammisi)",
              "tags": "lord stomping horus"
          },
          {
              "id": 2274,
              "action": "Sobek, Lord of Anasha (LGG6, 259; Leitz 2002, 142-143 and 151, Edfu)",
              "tags": "sobek lord anasha"
          },
          {
              "id": 2275,
              "action": "Sekhmet, Lady of Letopolis (LGG4, 118, Edfu)",
              "tags": "lady sekhmet letopolis"
          }
      ],
      [
          {
              "id": 2278,
              "action": "Sobek, Lord of [location lost] (LGG6, 259; Leitz 2002, 143, Edfu)",
              "tags": "sobek lord"
          },
          {
              "id": 2279,
              "action": "Sepa-Osiris (LGG6, 269, Dendera Mammisi)",
              "tags": "sepa-osiris"
          },
          {
              "id": 2280,
              "action": "Mut, Lady of Xois (LGG4, 115, Dendera)",
              "tags": "xois lady mut"
          },
          {
              "id": 2281,
              "action": "She Who Brings Low with (Her) Two Horns (epithet of the Eye of Ra) (LGG2, 295, Dendera, Dendera Mammisi, and Kom Ombo)",
              "tags": "low brings horns two with she"
          },
          {
              "id": 2282,
              "action": "Osiris (LGG2, 530, Dendera)",
              "tags": "osiris"
          }
      ],
      [
          {
              "id": 2284,
              "action": "Horus (LGG5, 231, Edfu)",
              "tags": "horus"
          },
          {
              "id": 2285,
              "action": "She Whose Papyrus-Scepter Emerges (epithet of the Eye of Ra) (LGG3, 57, Dendera, Dendera Mammisi, and Edfu)",
              "tags": "papyrus-scepter whose she emerges"
          },
          {
              "id": 2286,
              "action": "Hathor, Lady of the Wing (LGG4, 169, Edfu)",
              "tags": "lady hathor wing"
          },
          {
              "id": 2287,
              "action": "Banebdjedet (LGG2, 683, Dendera and Dendera Mammisi)",
              "tags": "banebdjedet"
          }
      ],
      [
          {
              "id": 2289,
              "action": "She for Whom There Is No Darkness (epithet of the Eye of Ra) (LGG5, 507, Dendera Mammisi)",
              "tags": "no whom there she darkness"
          },
          {
              "id": 2290,
              "action": "Khnum (LGG6 26, Dendera Mammisi)",
              "tags": "khnum"
          },
          {
              "id": 2291,
              "action": "Lady of Sending Away (or Lady of Repulsing) (epithet of the Eye of Ra) (LGG4, 93, Edfu)",
              "tags": "sending lady away"
          },
          {
              "id": 2292,
              "action": "Horus, Who Is in the Great Sanctuary (LGG1, 247, Edfu)",
              "tags": "sanctuary horus great"
          }
      ],
      [
          {
              "id": 2295,
              "action": "Horus, Lord of the East (LGG3, 571, Dendera)",
              "tags": "lord east horus"
          },
          {
              "id": 2296,
              "action": "Isis, She Who Clothes Horus (LGG6, 715, Dendera, Dendera Mammisi, and Edfu)",
              "tags": "clothes horus isis she"
          },
          {
              "id": 2297,
              "action": "The Lady of Nawet (unknown location) (epithet of the Eye of Ra) (LGG4, 70, Edfu)",
              "tags": "nawet lady"
          },
          {
              "id": 2298,
              "action": "Hathor, Lady of Egypt (lit., Kemet , the Black Land) (LGG4, 150, Edfu)",
              "tags": "lady hathor egypt"
          }
      ],
      [
          {
              "id": 2302,
              "action": "Horus, Foremost of Eyes (LGG5, 849; Leitz 2002, 149 and 151, Edfu; variant adds Lord of Athribis)",
              "tags": "eyes foremost horus"
          },
          {
              "id": 2303,
              "action": "Sothis (LGG6, 292, Dendera, Dendera Mammisi, and Edfu)",
              "tags": "sothis"
          },
          {
              "id": 2304,
              "action": "Sekhmet (LGG6, 557, Dendera)",
              "tags": "sekhmet"
          },
          {
              "id": 2305,
              "action": "Amun (LGG1, 306; Sethe 1929a, 16)",
              "tags": "amun"
          }
      ],
      [
          {
              "id": 2310,
              "action": "Khepera (LGG5, 714, Dendera and Dendera Mammisi)",
              "tags": "khepera"
          },
          {
              "id": 2311,
              "action": "Horus Who Emerges from Darkness (LGG3, 59, Edfu)",
              "tags": "horus darkness emerges"
          },
          {
              "id": 2312,
              "action": "Hathor, Who Comes Today (LGG1, 131, Dendera, Dendera Mammisi, and Edfu)",
              "tags": "hathor comes today"
          }
      ],
      [
          {
              "id": 2315,
              "action": "Thoth, Lord of the Hieroglyphs (lit., lord of divine words) (LGG3, 654, Dendera and Dendera Mammisi; variant reads Thoth, Lord of the Gods)",
              "tags": "lord thoth hieroglyphs"
          },
          {
              "id": 2316,
              "action": "Hathor, Friend of Women (lit. who unites with women) (LGG6, 22, Dendera, Dendera Mammisi, and Edfu)",
              "tags": "friend hathor women"
          },
          {
              "id": 2317,
              "action": "Banebdjedet (LGG2, 683 and Leitz (2002) 152, Edfu)",
              "tags": "edfu banebdjedet"
          }
      ],
      [
          {
              "id": 2324,
              "action": "She Who Raises Up Her Father (epithet of the Eye of Ra) (LGG2, 177, Dendera, Dendera Mammisi, and Edfu)",
              "tags": "up father raises she"
          },
          {
              "id": 2325,
              "action": "Amun-Ra (LGG1, 321, Dendera and Dendera Mammisi)",
              "tags": "amun-ra"
          },
          {
              "id": 2326,
              "action": "Khonsu (Leitz 2002, 152, Edfu)",
              "tags": "khonsu"
          }
      ],
      [
          {
              "id": 2338,
              "action": "Hehet (LGG5, 472, Dendera and Dendera Mammisi)",
              "tags": "hehet"
          },
          {
              "id": 2339,
              "action": "Horus, Lord of Stomping (LGG3, 667, Dendera and Dendera Mammisi; variant Horus Lord of Heaven)",
              "tags": "lord stomping horus"
          },
          {
              "id": 2340,
              "action": "Hathor, Lady of the Firestarter (i.e., flint stone) (LGG4, 93, Edfu)",
              "tags": "firestarter lady hathor"
          },
          {
              "id": 2341,
              "action": "Osiris (LGG2, 530, Edfu)",
              "tags": "osiris"
          }
      ],
      [
          {
              "id": 2345,
              "action": "Nut (LGG3, 535, Dendera)",
              "tags": "nut"
          },
          {
              "id": 2346,
              "action": "Sepa of Dendera (form of Anubis) (LGG6, 270; variant Sepa of Heliopolis, Leitz 2002, 152, Edfu)",
              "tags": "dendera sepa"
          },
          {
              "id": 2347,
              "action": "Sekhmet, Lady of Ikhenet-hy (unknown location) (LGG4, 24, Edfu)",
              "tags": "lady sekhmet ikhenet-hy"
          },
          {
              "id": 2348,
              "action": "Neith, Lady of Sais (LGG4, 124, Dendera, Dendera Mammisi, and Edfu)",
              "tags": "neith lady sais"
          }
      ],
      [
          {
              "id": 2352,
              "action": "Ma'at (LGG3, 222, Dendera, Dendera Mammisi, and Edfu)",
              "tags": "ma-at"
          },
          {
              "id": 2353,
              "action": "Atum (LGG7, 412, Dendera Mammisi)",
              "tags": "atum"
          },
          {
              "id": 2354,
              "action": "Sobek in Kom Ombo (LGG6, 262; Leitz 2002, 143/150/154, Edfu)",
              "tags": "sobek ombo kom"
          },
          {
              "id": 2355,
              "action": "Hathor, Lady of Par (unknown location) (LGG4, 52, Edfu)",
              "tags": "lady hathor par"
          }
      ],
      [
          {
              "id": 2360,
              "action": "Mafdet (LGG3, 235, Dendera, Dendera Mammisi, and Edfu)",
              "tags": "mafdet"
          },
          {
              "id": 2361,
              "action": "Neith, Lady of Sais (LGG4, 124, Edfu)",
              "tags": "neith lady sais"
          },
          {
              "id": 2362,
              "action": "Hegar of the West (local form of Osiris, paired with Sobek and Khnum) (LGG4, 813, Edfu)",
              "tags": "hegar west"
          },
          {
              "id": 2363,
              "action": "Osiris (LGG2, 530, Dendera Mammisi)",
              "tags": "osiris"
          }
      ],
      [
          {
              "id": 2368,
              "action": "Min (LGG3, 288, Dendera Mammisi)",
              "tags": "min"
          },
          {
              "id": 2369,
              "action": "Khnum, Lord of Tanis (LGG6, 26, Edfu)",
              "tags": "lord tanis khnum"
          },
          {
              "id": 2370,
              "action": "The Speckled Falconess (epithet of Hathor) (LGG6, 148, Dendera, Dendera Mammisi, and Edfu; variation Hathor, Mistress of Lust, LGG4, 86, Dendera)",
              "tags": "speckled falconess"
          },
          {
              "id": 2371,
              "action": "Sekhmet (LGG6, 557, Dendera)",
              "tags": "sekhmet"
          }
      ],
      [
          {
              "id": 2378,
              "action": "Horus, Lord of the East (LGG3, 571, Dendera)",
              "tags": "lord east horus"
          },
          {
              "id": 2379,
              "action": "Sobek, Lord of [location lost] (LGG6, 259; Leitz 2002, 143, Edfu)",
              "tags": "sobek lord"
          },
          {
              "id": 2380,
              "action": "Isis, Mistress of the Twin Sanctuaries (LGG4, 24, Edfu)",
              "tags": "mistress isis sanctuaries twin"
          },
          {
              "id": 2381,
              "action": "She-Who-Desires-Hearts (epithet of the Eye of Ra) (LGG1, 207, Dendera, Dendera Mammisi, and Edfu)",
              "tags": "she-who-desires-hearts"
          }
      ],
      [
          {
              "id": 2384,
              "action": "Beloved of Min (epithet of the Eye of Ra) (LGG3, 348, Dendera, Edfu, and Dendera Mammisi)",
              "tags": "beloved min"
          },
          {
              "id": 2385,
              "action": "Nut (LGG3, 535, Dendera)",
              "tags": "nut"
          },
          {
              "id": 2386,
              "action": "Sekhmet, Lady of the Road/Way (LGG4, 36, Edfu)",
              "tags": "way lady sekhmet road"
          },
          {
              "id": 2387,
              "action": "Nefertem (LGG4, 222, Dendera Mammisi)",
              "tags": "nefertem"
          },
          {
              "id": 2388,
              "action": "Amun (LGG1, 306, Edfu)",
              "tags": "amun"
          }
      ],
      [
          {
              "id": 2391,
              "action": "The Flesh of Those-Who-Belong-to-the-Tribunals (epithet of the Eye of Ra) (LGG5, 32, Dendera)",
              "tags": "those-who-belong-to-the-tribunals flesh"
          },
          {
              "id": 2392,
              "action": "Ma'ahes (LGG3, 211, Dendera Mammisi)",
              "tags": "ma-ahes"
          },
          {
              "id": 2393,
              "action": "Sekhmet, Lady of Is-hat (unknown location) (LGG4, 21, Edfu and Kom Ombo)",
              "tags": "lady sekhmet is-hat"
          },
          {
              "id": 2394,
              "action": "Anubis (LGG1, 391; Leitz 2002, 145 and 152, Edfu; variant Anubis, Lord of Sepa, a location south of Heliopolis)",
              "tags": "anubis"
          }
      ],
      [
          {
              "id": 2396,
              "action": "Montu (LGG3, 319, Dendera Mammisi)",
              "tags": "montu"
          },
          {
              "id": 2397,
              "action": "Neith (LGG3, 511, Dendera)",
              "tags": "neith"
          },
          {
              "id": 2398,
              "action": "Lady-of-the-Watering-Place (epithet of the Eye of Ra) (LGG4, 105, Dendera, Dendera Mammisi, Edfu, and Kom Ombo)",
              "tags": "lady-of-the-watering-place"
          },
          {
              "id": 2399,
              "action": "Hathor, Lady of Speech (LGG4, 173, Edfu and Kom Ombo)",
              "tags": "lady hathor speech"
          }
      ],
      [
          {
              "id": 2403,
              "action": "Min (LGG3, 288; Leitz 2002, 155, Edfu)",
              "tags": "min"
          },
          {
              "id": 2404,
              "action": "Isis, Lady of Protection (LGG4, 124, Edfu and Kom Ombo)",
              "tags": "lady isis protection"
          },
          {
              "id": 2405,
              "action": "Lady of Procession (epithet of the Eye of Ra) (LGG4, 142, Dendera, Edfu, and Kom Ombo)",
              "tags": "lady"
          },
          {
              "id": 2406,
              "action": "Amun (LGG1, 306; variation Amun-Ra, Lord of the Thrones of the Two Lands, LGG1, 321, Dendera and Dendera Mammisi)",
              "tags": "amun"
          }
      ],
      [
          {
              "id": 2412,
              "action": "Montu (LGG3, 319, Dendera and Dendera Mammisi)",
              "tags": "montu"
          },
          {
              "id": 2413,
              "action": "Nunet (variant Niut, LGG3, 550, Dendera and Edfu)",
              "tags": "nunet"
          }
      ],
      [
          {
              "id": 2418,
              "action": "Hathor, Lady of Offerings (LGG4, 111, Dendera)",
              "tags": "lady hathor"
          },
          {
              "id": 2419,
              "action": "Isis (LGG1, 62, Edfu and Kom Ombo)",
              "tags": "isis"
          },
          {
              "id": 2420,
              "action": "Amun (variant Amun, Whose Beauty Is in the Entire Land, LGG1, 306, Dendera Mammisi)",
              "tags": "amun"
          }
      ],
      [
          {
              "id": 2424,
              "action": "Horakhty (LGG5, 239; variant Ra-Horakhty, LGG4, 630, Dendera and Dendera Mammisi)",
              "tags": "horakhty"
          },
          {
              "id": 2425,
              "action": "Whose Height Reaches Heaven (epithet of the Eye of Ra) (LGG7, 174, Dendera, Edfu, and Kom Ombo)",
              "tags": "height reaches heaven whose"
          },
          {
              "id": 2426,
              "action": "Isis, Lady of Finding-the-Heart (LGG4, 151, Edfu and Kom Ombo)",
              "tags": "finding-the-heart lady isis"
          },
          {
              "id": 2427,
              "action": "Osiris-Isdes in [location name lost] (LGG1, 561; Leitz 2002, 149, Edfu)",
              "tags": "osiris-isdes"
          }
      ],
      [
          {
              "id": 2431,
              "action": "Atum (or Temag?) (LGG7, 431, Dendera)",
              "tags": "atum"
          },
          {
              "id": 2432,
              "action": "Hathor, Lady of Hiddenness (LGG4, 138, Edfu and Kom Ombo)",
              "tags": "lady hathor hiddenness"
          },
          {
              "id": 2433,
              "action": "She to Whom Jubilation Belongs (epithet of the Eye of Ra) (LGG1, 151, Dendera, Dendera Mammisi, and Edfu)",
              "tags": "jubilation belongs she whom"
          },
          {
              "id": 2434,
              "action": "Osiris (LGG2, 530, Edfu)",
              "tags": "osiris"
          }
      ],
      [
          {
              "id": 2442,
              "action": "Min (LGG3, 288, Edfu)",
              "tags": "min"
          },
          {
              "id": 2443,
              "action": "She Whose Side Cannot Be Struck (epithet of the Eye of Ra) (LGG3, 496, Dendera, Edfu, and Kom Ombo)",
              "tags": "side whose be cannot struck she"
          },
          {
              "id": 2444,
              "action": "Hathor, Lady of Reptiles (LGG4, 173, Edfu and Kom Ombo)",
              "tags": "lady hathor reptiles"
          },
          {
              "id": 2445,
              "action": "Isis (LGG1, 62, Dendera)",
              "tags": "isis"
          }
      ],
      [
          {
              "id": 2449,
              "action": "Hathor, the Female Sovereign (LGG5, 536, Dendera, Edfu, and Kom Ombo)",
              "tags": "hathor sovereign female"
          },
          {
              "id": 2450,
              "action": "Hathor, Lady of the Heavens (LGG4, 151, Edfu and Kom Ombo)",
              "tags": "lady hathor heavens"
          },
          {
              "id": 2451,
              "action": "Isis, Greatest of the Great, Lady of Heaven (LGG2, 484, Dendera)",
              "tags": "greatest great lady heaven isis"
          }
      ],
      [
          {
              "id": 2454,
              "action": "She Who Made Herself Distant (epithet of the Eye of Ra) (LGG5, 460, Dendera)",
              "tags": "herself made she distant"
          },
          {
              "id": 2455,
              "action": "Thoth, Lord of Hermopolis, Lord of the Hieroglyphs (lit., divine words) (LGG3, 716, Dendera)",
              "tags": "lord thoth hermopolis hieroglyphs"
          },
          {
              "id": 2456,
              "action": "Mistress of Heritage/Ancestry (epithet of the Eye of Ra) (LGG4, 10, Edfu and Kom Ombo)",
              "tags": "ancestry mistress heritage"
          },
          {
              "id": 2457,
              "action": "Nefertem, Son of Atum (LGG4, 222, Edfu)",
              "tags": "atum nefertem son"
          }
      ],
      [
          {
              "id": 2460,
              "action": "Ma'ahes (LGG3, 211, Edfu)",
              "tags": "ma-ahes"
          },
          {
              "id": 2461,
              "action": "Hathor, Lady of Both Legs (lit., two legs) (LGG4, 90, Dendera, Edfu, and Kom Ombo)",
              "tags": "lady hathor legs both"
          },
          {
              "id": 2462,
              "action": "Nekhbet, Shining in Hierakonpolis Magna (LGG4, 301, Dendera)",
              "tags": "hierakonpolis nekhbet magna shining"
          }
      ],
      [
          {
              "id": 2467,
              "action": "Snake ( hereret ) of the Foreign Lands (epithet of the Eye of Ra) (LGG5, 464, Dendera, Edfu, and Kom Ombo; variant Snake, no mention of foreign lands, at Kom Ombo only)",
              "tags": "foreign lands snake"
          }
      ],
      [
          {
              "id": 2472,
              "action": "Isis the Heavenly Kite (LGG7, 631, Dendera, Edfu, and Kom Ombo)",
              "tags": "kite heavenly isis"
          },
          {
              "id": 2473,
              "action": "Hathor, Lady of Atfih (LGG4, 137, Edfu and Kom Ombo)",
              "tags": "lady hathor atfih"
          },
          {
              "id": 2474,
              "action": "Ra-Horakhty (LGG4, 630, Dendera)",
              "tags": "ra-horakhty"
          },
          {
              "id": 2475,
              "action": "Amun (LGG1, 306, Edfu)",
              "tags": "amun"
          }
      ],
      [
          {
              "id": 2478,
              "action": "Khnum, the Great Youth (LGG5, 95 and Leitz 2002, 149, Edfu)",
              "tags": "youth khnum great"
          },
          {
              "id": 2479,
              "action": "Nephthys (LGG4, 96, Dendera)",
              "tags": "nephthys"
          },
          {
              "id": 2480,
              "action": "Hathor, Lady of Offerings (LGG4, 111, Edfu and Kom Ombo)",
              "tags": "lady hathor"
          }
      ],
      [
          {
              "id": 2484,
              "action": "Nut (LGG3, 535, Dendera)",
              "tags": "nut"
          },
          {
              "id": 2485,
              "action": "Hathor, the Beautiful Daughter (LGG6, 102, Kom Ombo)",
              "tags": "hathor daughter beautiful"
          },
          {
              "id": 2486,
              "action": "Hathor, Lady of Drunkenness (LGG4, 162, Edfu)",
              "tags": "lady hathor drunkenness"
          },
          {
              "id": 2487,
              "action": "Hathor, Lady of Shares (i.e., pieces or objects) (LGG4, 166, Dendera, Edfu, and Kom Ombo)",
              "tags": "lady hathor shares"
          },
          {
              "id": 2488,
              "action": "Amun, Going Forth [words lost] (LGG1, 306, Edfu)",
              "tags": "going amun forth"
          }
      ],
      [
          {
              "id": 2491,
              "action": "Horus (LGG5, 231; variant Horus Lord of Busiris, Leitz 2002, 151, Edfu)",
              "tags": "horus"
          },
          {
              "id": 2492,
              "action": "Atum (LGG7, 412, Dendera)",
              "tags": "atum"
          },
          {
              "id": 2493,
              "action": "Hathor, Lady of Divine Might (LGG4, 133, Edfu and Kom Ombo)",
              "tags": "lady hathor might divine"
          },
          {
              "id": 2494,
              "action": "She Who Is in the Flood (epithet of the Eye of Ra) (LGG1, 289, Dendera, Edfu, and Kom Ombo)",
              "tags": "flood she"
          }
      ],
      [
          {
              "id": 2497,
              "action": "The Great Nine (LG3, 141, Dendera)",
              "tags": "great nine"
          },
          {
              "id": 2498,
              "action": "Horus-Sopdu, Lord of the East (LGG6, 290, Edfu)",
              "tags": "lord horus-sopdu east"
          },
          {
              "id": 2499,
              "action": "Seshat, Mistress of the Wall(s) (LGG4, 23, Edfu and Kom Ombo)",
              "tags": "wall mistress seshat"
          },
          {
              "id": 2500,
              "action": "Sekhmet, Who Rejects Evil (LGG2, 279, Dendera, Edfu, and Kom Ombo)",
              "tags": "evil sekhmet rejects"
          }
      ],
      [
          {
              "id": 2504,
              "action": "Isis, Who Unites with the Heart of Ra (LGG6, 19, Dendera, Edfu, and Kom Ombo)",
              "tags": "with unites heart isis ra"
          },
          {
              "id": 2505,
              "action": "The Lady of Nashi (unknown location; epithet of the Eye of Ra) (LGG4, 83, Edfu and Kom Ombo)",
              "tags": "lady nashi"
          },
          {
              "id": 2506,
              "action": "Anubis, Lord of the Sacred Land (LGG1, 391, Edfu)",
              "tags": "anubis sacred land lord"
          }
      ],
      [
          {
              "id": 2508,
              "action": "Horus, Lord of the East (LGG3, 571, Dendera)",
              "tags": "lord east horus"
          },
          {
              "id": 2509,
              "action": "Mut, Protector of the Land (LGG6, 122, Dendera, Edfu, and Kom Ombo)",
              "tags": "protector mut land"
          },
          {
              "id": 2510,
              "action": "Hathor, Lady of the Cavern Mouths (name of the Asyut necropolis) (LGG4, 87, Edfu and Kom Ombo)",
              "tags": "mouths lady hathor cavern"
          },
          {
              "id": 2511,
              "action": "Osiris of [location name lost] (LGG2, 536, Edfu)",
              "tags": "osiris"
          }
      ],
      [
          {
              "id": 2514,
              "action": "She Who Watches Over the Land (epithet of the Eye of Ra) (LGG4, 19, Edfu and Kom",
              "tags": "kom lgg over edfu she watches land"
          },
          {
              "id": 2515,
              "action": "Ombo)",
              "tags": "ombo"
          },
          {
              "id": 2516,
              "action": "Hathor the Golden One, Lady of Yamet (LGG4, 180, Dendera)",
              "tags": "yamet one golden lady hathor"
          },
          {
              "id": 2517,
              "action": "Hathor of the Pleasant Breeze/Wind (LGG4, 602, Dendera, Edfu, and Kom Ombo)",
              "tags": "hathor wind breeze pleasant"
          },
          {
              "id": 2518,
              "action": "Ra-Horakhty (LGG4, 630, Edfu)",
              "tags": "ra-horakhty"
          }
      ],
      [
          {
              "id": 2520,
              "action": "Djedjeh, Son of [Thoth] (spirit minion of Thoth as a solar baboon) (LGG 7, 650; Leitz 2002, 149, Edfu)",
              "tags": "djedjeh son"
          },
          {
              "id": 2521,
              "action": "Lady of Favor (epithet of the Eye of Ra) (LGG4, 81, Dendera, Edfu, and Kom Ombo)",
              "tags": "lady favor"
          },
          {
              "id": 2522,
              "action": "Isis, Lady of the Marshes (LGG4, 106, Edfu)",
              "tags": "lady isis marshes"
          },
          {
              "id": 2523,
              "action": "Sothis, Lady of Arrows (LGG4, 144, Kom Ombo)",
              "tags": "arrows lady sothis"
          },
          {
              "id": 2524,
              "action": "Isis, Lady of the Life of the Two Lands (LGG1, 62, Dendera)",
              "tags": "lands two lady life isis"
          }
      ],
      [
          {
              "id": 2525,
              "action": "Hathor, United with Her Mother (LGG7, 547, Dendera, Edfu, and Kom Ombo)",
              "tags": "mother hathor united with"
          },
          {
              "id": 2526,
              "action": "Hathor, Lady of Severity (LGG4, 167, Kom Ombo)",
              "tags": "lady hathor severity"
          },
          {
              "id": 2527,
              "action": "Horus Who Receives Offerings (LGG2, 628, Edfu)",
              "tags": "receives horus"
          }
      ],
      [
          {
              "id": 2531,
              "action": "Hathor, Lady of the Valley (LGG4, 17, Dendera and Edfu)",
              "tags": "lady hathor valley"
          },
          {
              "id": 2532,
              "action": "Neith, Lady of the Mothers (LGG4, 62, Edfu)",
              "tags": "neith lady mothers"
          },
          {
              "id": 2533,
              "action": "Amun (LGG1, 306; Leitz 2002, 152, Edfu)",
              "tags": "amun"
          }
      ],
      [
          {
              "id": 2540,
              "action": "Lady of Migratory Birds (epithet of the Eye of Ra) (LGG4, 90, Edfu)",
              "tags": "migratory lady birds"
          },
          {
              "id": 2541,
              "action": "Ra (LGG4, 612, Dendera)",
              "tags": "ra"
          },
          {
              "id": 2542,
              "action": "Osiris (LGG2, 530, Edfu)",
              "tags": "osiris"
          }
      ],
      [
          {
              "id": 2545,
              "action": "Beloved of the Two Lords (epithet of the Eye of Ra) (LGG3, 348, Dendera and Edfu)",
              "tags": "beloved lords two"
          },
          {
              "id": 2546,
              "action": "Atum, Lord of the Two Lands (LGG7, 412, Dendera)",
              "tags": "atum two lands lord"
          },
          {
              "id": 2547,
              "action": "Hathor, Lady of Judgment (LGG4, 44, Edfu)",
              "tags": "lady hathor judgment"
          }
      ],
      [
          {
              "id": 2550,
              "action": "Harsaphes (LGG5, 381, Dendera)",
              "tags": "harsaphes"
          },
          {
              "id": 2551,
              "action": "[Name lost], Lord of Sena (unknown location) (LGG3, 733, Edfu)",
              "tags": "lord sena"
          },
          {
              "id": 2552,
              "action": "Lady of Her Portion (epithet of the Eye of Ra) (LGG4, 87, Edfu and Dendera; variant Lady of Her Weakness, LGG4, 152, Edfu)",
              "tags": "portion lady"
          }
      ],
      [
          {
              "id": 2556,
              "action": "Neith (LGG3, 511, Dendera)",
              "tags": "neith"
          },
          {
              "id": 2557,
              "action": "Lady of the Great Waterway (epithet of the Eye of Ra) (LGG4, 39, Dendera and Edfu)",
              "tags": "lady great waterway"
          },
          {
              "id": 2558,
              "action": "Lady of Creation (lit., Lady of All Things) (epithet of the Eye of Ra) (LGG4, 72, Edfu)",
              "tags": "lady creation"
          },
          {
              "id": 2559,
              "action": "Osiris, Lord of [location lost] (LGG2, 530, Edfu)",
              "tags": "lord osiris"
          }
      ],
      [
          {
              "id": 2561,
              "action": "Nun the Great, Father of the Gods (LGG3, 548, Edfu)",
              "tags": "father great nun"
          },
          {
              "id": 2562,
              "action": "The Heavy One (epithet of Thoeris and/or Hedjet as a hippopotamus) (LGG7, 550, Dendera and Edfu)",
              "tags": "heavy one"
          },
          {
              "id": 2563,
              "action": "Satis (? name broken) (LGG6, 174, Dendera)",
              "tags": "satis"
          },
          {
              "id": 2564,
              "action": "Lady of Water(s) (epithet of the Eye of Ra) (LGG4, 62, Edfu)",
              "tags": "lady water"
          }
      ],
      [
          {
              "id": 2568,
              "action": "Horus, Lord of the East (LGG3, 571, Dendera)",
              "tags": "lord east horus"
          },
          {
              "id": 2569,
              "action": "Duamutef of Chemmis (LGG7, 518; Leitz, 2002, 151, Edfu)",
              "tags": "chemmis duamutef"
          },
          {
              "id": 2570,
              "action": "Serqet (LGG6, 438, Dendera)",
              "tags": "serqet"
          },
          {
              "id": 2571,
              "action": "Hathor, Lady of the Room (LGG4, 131, Edfu)",
              "tags": "lady hathor room"
          },
          {
              "id": 2572,
              "action": "She Who Belongs to the Heart (epithet of the Eye of Ra) (LGG1, 421, Dendera and Edfu)",
              "tags": "belongs heart she"
          }
      ],
      [
          {
              "id": 2576,
              "action": "Ptah, Lord of Heaven (LGG3, 169, Dendera)",
              "tags": "lord ptah heaven"
          },
          {
              "id": 2577,
              "action": "From Whose Ka There Is No Fleeing (epithet of the Eye of Ra) (LGG3, 487, Dendera and Edfu)",
              "tags": "no whose fleeing ka there from"
          },
          {
              "id": 2578,
              "action": "Osiris (as Sah, either the planet Jupiter or the constellation Orion) (LGG6, 154, Edfu)",
              "tags": "osiris"
          },
          {
              "id": 2579,
              "action": "Hathor, Lady of Water Plants ( Nebit ) (LGG4, 72, Edfu)",
              "tags": "lady hathor plants water"
          }
      ],
      [
          {
              "id": 2584,
              "action": "Osiris, Foremost of Westerners (LGG5, 784, Edfu)",
              "tags": "foremost osiris westerners"
          },
          {
              "id": 2585,
              "action": "Hathor, Noble One of Her Father (LGG7, 55, Dendera and Edfu)",
              "tags": "one hathor father noble"
          },
          {
              "id": 2586,
              "action": "Hathor, Lady of the Bulls/Steers (LGG4, 149, Edfu)",
              "tags": "lady hathor bulls steers"
          },
          {
              "id": 2587,
              "action": "Wadjet (LGG2, 270, Dendera)",
              "tags": "wadjet"
          }
      ],
      [
          {
              "id": 2591,
              "action": "Two-Fronds (Hapwy, a marsh spirit that defeats northern demons, called \"friend of Osiris\") (LGG5, 123; Leitz 2002, 149, Edfu)",
              "tags": "two-fronds"
          },
          {
              "id": 2592,
              "action": "She with Downcast Glance (epithet of the Eye of Ra as uraeus/cobra) (LGG6, 593, Dendera and Edfu)",
              "tags": "with glance she downcast"
          },
          {
              "id": 2593,
              "action": "Lady of the Chest (epithet of Bast and/or Menhyt) (LGG4, 92, Edfu)",
              "tags": "lady chest"
          }
      ],
      [
          {
              "id": 2597,
              "action": "Bast, Mistress of Heaven (LGG5, 176, Dendera and Edfu)",
              "tags": "mistress heaven bast"
          },
          {
              "id": 2598,
              "action": "Min (LGG3, 288, Dendera)",
              "tags": "min"
          },
          {
              "id": 2599,
              "action": "Nut (LGG3, 535, Dendera)",
              "tags": "nut"
          },
          {
              "id": 2600,
              "action": "Hathor, Lady of Nighttime (LGG 4, 43, Edfu)",
              "tags": "lady hathor nighttime"
          }
      ],
      [
          {
              "id": 2602,
              "action": "Nun and Nunet (LGG3, 520, Kom Ombo; variant The Great Eight Kau",
              "tags": "variant kom nunet lgg great ombo kau eight nun"
          },
          {
              "id": 2603,
              "action": "(male spirits) or The Great Eight Hemsut (female spirits)",
              "tags": "or great eight hemsut"
          },
          {
              "id": 2604,
              "action": "Atum, Lord of the Two Lands (LGG7, 418, Edfu)",
              "tags": "atum two lands lord"
          },
          {
              "id": 2605,
              "action": "Shezemtet-in-Festival (LGG7, 125, Dendera)",
              "tags": "shezemtet-in-"
          },
          {
              "id": 2606,
              "action": "Lady of Khau (unknown location) (epithet of Eye of Ra) (LGG4, 114, Edfu)",
              "tags": "lady khau"
          },
          {
              "id": 2607,
              "action": "Hathor, Lady of Shas (unknown location) (LGG4, 140, Edfu and Kom Ombo)",
              "tags": "lady hathor shas"
          },
          {
              "id": 2608,
              "action": "Isis (LGG1, 62, Dendera)",
              "tags": "isis"
          }
      ],
      [
          {
              "id": 2617,
              "action": "Heh and Hehet (LGG5, 468 and LGG5, 472, Dendera, Dendera Mammisi, and Edfu)",
              "tags": "hehet heh"
          },
          {
              "id": 2618,
              "action": "Horus, Lord of Ma'at (LGG3, 639, Kom Ombo; AF Kom Ombo 793; Gutbub 1995, 205)",
              "tags": "lord ma-at horus"
          },
          {
              "id": 2619,
              "action": "Sister of the Two Lords (epithet of the Eye of Horus) (LGG6, 374, Dendera and Edfu)",
              "tags": "lords two sister"
          },
          {
              "id": 2620,
              "action": "Hathor, Lady of Suffering (?) (LGG4, 94, Edfu)",
              "tags": "lady hathor suffering"
          }
      ],
      [
          {
              "id": 2623,
              "action": "Lady of Reckoning (epithet of the Eye of Ra) (LGG4, 14, Edfu)",
              "tags": "lady reckoning"
          },
          {
              "id": 2624,
              "action": "Onuris-of-the-Retinue (LGG1, 380, Edfu)",
              "tags": "onuris-of-the-retinue"
          },
          {
              "id": 2625,
              "action": "Wadjet, She Who Jubilates (LGG1, 539, Dendera)",
              "tags": "wadjet jubilates she"
          },
          {
              "id": 2626,
              "action": "Banebdjedet (LGG2, 683, Dendera)",
              "tags": "banebdjedet"
          }
      ],
      [
          {
              "id": 2630,
              "action": "Nun and Nunet (LGG3, 520, Edfu)",
              "tags": "nunet nun"
          },
          {
              "id": 2631,
              "action": "Menhyt, Lady of the Primordial Ones (LGG4, 51, Edfu)",
              "tags": "ones lady primordial menhyt"
          },
          {
              "id": 2632,
              "action": "Hathor, Lady of Two Flagpoles (LGG4, 128, Dendera and Edfu)",
              "tags": "lady hathor two flagpoles"
          },
          {
              "id": 2633,
              "action": "Osiris (LGG2, 530, Dendera)",
              "tags": "osiris"
          }
      ],
      [
          {
              "id": 2638,
              "action": "Hathor, Lady of Her Grief (LGG4, 3, Dendera and Edfu)",
              "tags": "lady hathor grief"
          },
          {
              "id": 2639,
              "action": "Mut, Lady of Isheru (LGG4, 22, Edfu)",
              "tags": "lady isheru mut"
          },
          {
              "id": 2640,
              "action": "Isis, Lady of Offerings (LGG4, 111, Dendera)",
              "tags": "lady isis"
          },
          {
              "id": 2641,
              "action": "Anubis (LGG1, 391, Edfu)",
              "tags": "anubis"
          }
      ],
      [
          {
              "id": 2647,
              "action": "The Lady of That Which Pervades the Gods (epithet of the Eye of Ra) (LGG4, 119, Dendera; LGG1, 389, Edfu)",
              "tags": "which lady that pervades"
          },
          {
              "id": 2648,
              "action": "Hathor, Lady of Ta-by (unknown location) (LGG4, 154, Edfu)",
              "tags": "ta-by lady hathor"
          },
          {
              "id": 2649,
              "action": "Ra-Horakhty (LGG4, 630, Dendera)",
              "tags": "ra-horakhty"
          },
          {
              "id": 2650,
              "action": "Amun and Amunet (LGG1, 306, Edfu)",
              "tags": "amunet amun"
          }
      ],
      [
          {
              "id": 2653,
              "action": "Joyful One (epithet of the Eye of Ra) (LGG7, 475, Dendera)",
              "tags": "joyful one"
          },
          {
              "id": 2654,
              "action": "Sekhmet, Lady of Ihu (unknown location) (LGG4, 21, Edfu)",
              "tags": "lady sekhmet ihu"
          },
          {
              "id": 2655,
              "action": "Amun and Amunet (LGG1, 306, Edfu)",
              "tags": "amunet amun"
          },
          {
              "id": 2656,
              "action": "She Who Brings the Sacred Lake (epithet of the Eye of Ra) (LGG1, 387, Dendera and Edfu)",
              "tags": "brings sacred she lake"
          }
      ],
      [
          {
              "id": 2659,
              "action": "Meretseger (LGG1, 387, Dendera; LGG3, 343, Edfu)",
              "tags": "meretseger"
          },
          {
              "id": 2660,
              "action": "Hathor, Lady of Every Utterance (Speech) (LGG4, 76, Edfu)",
              "tags": "lady hathor every utterance"
          },
          {
              "id": 2661,
              "action": "Horus, He Whose Love Is Great (LGG2, 444, Edfu)",
              "tags": "horus whose great he love"
          }
      ],
      [
          {
              "id": 2665,
              "action": "Thoth, Lord of Hermopolis (LGG7, 641 and Leitz (2002) 151, Edfu)",
              "tags": "lord edfu thoth hermopolis"
          },
          {
              "id": 2666,
              "action": "Hathor, Lady of the Stars (LGG4, 114, Dendera and Edfu)",
              "tags": "lady hathor stars"
          },
          {
              "id": 2667,
              "action": "Sekhmet, Lady of Raging (LGG4, 167, Edfu)",
              "tags": "raging lady sekhmet"
          },
          {
              "id": 2668,
              "action": "Astarte (LGG2, 212, Dendera)",
              "tags": "astarte"
          }
      ],
      [
          {
              "id": 2671,
              "action": "Harsiese (LGG5, 283, Dendera)",
              "tags": "harsiese"
          },
          {
              "id": 2672,
              "action": "Sothis (LGG6, 292; Leitz 2002, 153, Edfu)",
              "tags": "sothis"
          },
          {
              "id": 2673,
              "action": "Ra (LGG4, 612, Edfu)",
              "tags": "ra"
          },
          {
              "id": 2674,
              "action": "Hathor Quadrifons, Foremost of Cows (LGG1, 292, Dendera)",
              "tags": "cows hathor foremost quadrifons"
          },
          {
              "id": 2675,
              "action": "Hathor, She with Many Followers (LGG2, 228, Edfu; variant Hathor, Foremost of Cows)",
              "tags": "with many she followers hathor"
          }
      ],
      [
          {
              "id": 2678,
              "action": "Ptah, Beloved of the Gods (LGG3, 169, Edfu)",
              "tags": "beloved ptah"
          },
          {
              "id": 2679,
              "action": "Hathor, Lady of Astonishment (LGG4, 151, Edfu)",
              "tags": "lady hathor astonishment"
          },
          {
              "id": 2680,
              "action": "Astarte (LGG2, 212, Dendera)",
              "tags": "astarte"
          }
      ],
      [
          {
              "id": 2681,
              "action": "Amun-Ra, Lord of All (LGG3, 795, Edfu)",
              "tags": "lord all amun-ra"
          },
          {
              "id": 2682,
              "action": "Hathor, Lady of the Heat of the Land (LGG4, 154, Edfu)",
              "tags": "lady hathor heat land"
          },
          {
              "id": 2683,
              "action": "Hathor, Great of Love (LGG2, 59, Dendera)",
              "tags": "hathor love great"
          }
      ],
      [
          {
              "id": 2686,
              "action": "Foremost-of-Ptah's Temple-Library (a servant spirit) (LGG5, 808, Edfu)",
              "tags": "temple-library foremost-of-ptah"
          },
          {
              "id": 2687,
              "action": "Hathor the Primordial One (LGG7, 19, Dendera and Edfu)",
              "tags": "one hathor primordial"
          },
          {
              "id": 2688,
              "action": "Tefnut (LGG7, 406, Dendera)",
              "tags": "tefnut"
          },
          {
              "id": 2689,
              "action": "Hathor, Lady of Before-Her-Time (i.e., primordial time before creation) (LGG4, 90, Edfu)",
              "tags": "lady hathor before-her-time"
          }
      ],
      [
          {
              "id": 2691,
              "action": "Hathor, Lady of Oracular Sight (LGG4, 168, Edfu)",
              "tags": "lady hathor oracular sight"
          },
          {
              "id": 2692,
              "action": "Hathor, Greatest in the Heavens (LGG2, 486, Dendera)",
              "tags": "hathor greatest heavens"
          },
          {
              "id": 2693,
              "action": "Osiris (LGG2, 530, Edfu)",
              "tags": "osiris"
          }
      ],
      [
          {
              "id": 2695,
              "action": "Ptah (LGG3, 169, Edfu)",
              "tags": "ptah"
          },
          {
              "id": 2696,
              "action": "She Who Gives Birth to the Foremost of the Land (epithet of the Eye of Ra) (LGG3, 420, Dendera and Edfu)",
              "tags": "land birth she foremost gives"
          },
          {
              "id": 2697,
              "action": "Wenut (LGG2, 390, Edfu)",
              "tags": "wenut"
          }
      ],
      [
          {
              "id": 2701,
              "action": "Thoth, Lord of Hieroglyphs (lit., divine words) (LGG3, 654, Dendera)",
              "tags": "lord thoth hieroglyphs"
          },
          {
              "id": 2702,
              "action": "Hathor, Lady of Thousands (LGG4, 114, Edfu)",
              "tags": "lady hathor thousands"
          }
      ],
      [
          {
              "id": 2706,
              "action": "Osiris, Foremost of the Living [Ancestors] (LGG5, 754)",
              "tags": "foremost osiris living"
          },
          {
              "id": 2707,
              "action": "Ptah (LGG3, 169, Edfu)",
              "tags": "ptah"
          },
          {
              "id": 2708,
              "action": "Nut (LGG3, 535, Dendera)",
              "tags": "nut"
          },
          {
              "id": 2709,
              "action": "Hathor, Lady of Rejoicing (LGG4, 91, Edfu)",
              "tags": "rejoicing lady hathor"
          },
          {
              "id": 2710,
              "action": "Isis, the Female Falcon (LGG2, 774, Dendera and Edfu)",
              "tags": "falcon isis female"
          }
      ],
      [
          {
              "id": 2715,
              "action": "Serqet (LGG6, 438, Dendera)",
              "tags": "serqet"
          },
          {
              "id": 2716,
              "action": "Mut, Lady of Roaring (LGG4, 92, Edfu)",
              "tags": "lady mut roaring"
          },
          {
              "id": 2717,
              "action": "Nephthys, Savior of the Gods (LGG4, 587, Dendera, Edfu, and Esna; variant Neith, Savior of the Gods, El-Saghir and Valbelle, 1983, 166)",
              "tags": "savior nephthys"
          },
          {
              "id": 2718,
              "action": "Harsiese, Heir of Osiris (LGG1, 173, Edfu)",
              "tags": "heir osiris harsiese"
          }
      ],
      [
          {
              "id": 2721,
              "action": "Khnum (LGG6, 26, Dendera)",
              "tags": "khnum"
          },
          {
              "id": 2722,
              "action": "Hathor, Lady of the Unique/Sole Wind (LGG4, 164, Dendera and Edfu)",
              "tags": "sole unique wind hathor lady"
          }
      ],
      [
          {
              "id": 2726,
              "action": "Horus Khenty-khety (LGG5, 849; Leitz 2002, 152, Edfu)",
              "tags": "khenty-khety horus"
          },
          {
              "id": 2727,
              "action": "Hathor, Lady of Oracular Sight (LGG4, 168, Edfu)",
              "tags": "lady hathor oracular sight"
          },
          {
              "id": 2728,
              "action": "Effective-for-the-Two-Lands (epithet of the Eye of Ra) (LGG1, 33-34, Dendera and Edfu)",
              "tags": "effective-for-the-two-lands"
          }
      ],
      [
          {
              "id": 2732,
              "action": "She Who Follows Sepa (epithet of the Eye of Ra) (LGG7, 86, Dendera and Edfu)",
              "tags": "sepa she follows"
          },
          {
              "id": 2733,
              "action": "Horus, the Dawning Soul ( Ka ) of Ra (LGG7, 506; Leitz 2002, 145, Edfu)",
              "tags": "dawning soul horus ra"
          },
          {
              "id": 2734,
              "action": "Hathor, Lady of Astonishment (LGG4, 151, Edfu)",
              "tags": "lady hathor astonishment"
          }
      ],
      [
          {
              "id": 2736,
              "action": "Mafdet, Daughter of Geb (LGG3, 235, Edfu; variant Hathor, the Female Ruler, LGG1, 604, Dendera)",
              "tags": "mafdet geb daughter"
          },
          {
              "id": 2737,
              "action": "Sobek, Lord of Harageh (Faiyum location) (LGG3, 755, Edfu)",
              "tags": "sobek lord harageh"
          },
          {
              "id": 2738,
              "action": "Lady of the Place of Fighting (epithet of the Eye of Ra) (LGG4, 59, Edfu)",
              "tags": "place lady fighting"
          }
      ],
      [
          {
              "id": 2741,
              "action": "The Northerner (form of Isis as the north wind) (LGG3, 379, Dendera and Edfu)",
              "tags": "northerner"
          },
          {
              "id": 2742,
              "action": "Horus, Lord of Stomping, Lord of Heaven (LGG3, 662, Dendera)",
              "tags": "lord stomping horus heaven"
          },
          {
              "id": 2743,
              "action": "Nekhbet the Secret One (LGG7, 140, Edfu)",
              "tags": "nekhbet one secret"
          }
      ],
      [
          {
              "id": 2748,
              "action": "Neith, United with the Cavern (LGG6, 24, Dendera and Edfu)",
              "tags": "neith cavern united with"
          },
          {
              "id": 2749,
              "action": "Khnum (LGG6, 26, Dendera)",
              "tags": "khnum"
          },
          {
              "id": 2750,
              "action": "Sokar in the Tephet-Djat Sanctuary (LGG6, 675, Edfu)",
              "tags": "tephet-djat sanctuary sokar"
          },
          {
              "id": 2751,
              "action": "Hathor, Lady of Primordial Time (LGG4, 51, Edfu)",
              "tags": "lady hathor primordial time"
          }
      ],
      [
          {
              "id": 2752,
              "action": "Hathor, Lady of Splendor (LGG4, 36, Edfu)",
              "tags": "lady hathor splendor"
          },
          {
              "id": 2753,
              "action": "Osiris (LGG2, 530, Edfu)",
              "tags": "osiris"
          },
          {
              "id": 2754,
              "action": "Wosret (\"Powerful One,\" here an epithet of Nekhbet) (LGG2, 579, Dendera and Edfu)",
              "tags": "wosret"
          }
      ],
      [
          {
              "id": 2757,
              "action": "Hathor, Lady of Musicians (LGG4, 21, Edfu)",
              "tags": "lady hathor musicians"
          },
          {
              "id": 2758,
              "action": "Lady of Multitudes (epithet of the Eye of Ra) (LGG4, 34, Dendera)",
              "tags": "multitudes lady"
          },
          {
              "id": 2759,
              "action": "Anubis, Foremost of the Divine Booth (i.e., the embalming tent) (LGG1, 391, Edfu)",
              "tags": "anubis foremost booth divine"
          }
      ],
      [
          {
              "id": 2761,
              "action": "Horus, Lord of Stomping, Lord of Heaven (LGG3, 662, Dendera)",
              "tags": "lord stomping horus heaven"
          },
          {
              "id": 2762,
              "action": "Duwayit (\"Morning,\" also called \"Daughter of Nut\"; epithet of the Eye of Ra) (LGG7, 307, Dendera and Edfu)",
              "tags": "duwayit"
          },
          {
              "id": 2763,
              "action": "Hathor, Lady of Decay (LGG4, 144, Edfu)",
              "tags": "lady hathor decay"
          }
      ],
      [
          {
              "id": 2765,
              "action": "Mut (LGG3, 251, Dendera)",
              "tags": "mut"
          },
          {
              "id": 2766,
              "action": "Osiris-Wenut, Foremost of Westerners, Whose Forms (Faces) Are Hidden (LGG6, 305; Leitz 2002, 146, Edfu)",
              "tags": "whose westerners osiris-wenut forms foremost hidden"
          },
          {
              "id": 2767,
              "action": "Hathor, Lady of Shenat (possibly Shentayet?) (unknown location/unclear reading) (LGG6, 379, Edfu)",
              "tags": "lady hathor shenat"
          },
          {
              "id": 2768,
              "action": "Lady of the Sands (epithet of the Eye of Ra) (LGG4, 141, Edfu)",
              "tags": "lady sands"
          },
          {
              "id": 2769,
              "action": "Isis, Lady of What-Will-Be (LGG4, 142, Dendera)",
              "tags": "lady what-will-be isis"
          }
      ],
      [
          {
              "id": 2770,
              "action": "Horus (LGG5, 231, Edfu)",
              "tags": "horus"
          },
          {
              "id": 2771,
              "action": "From Whom No Distance Exists (epithet of the Eye of Ra) (LGG3, 497, Dendera and Edfu)",
              "tags": "exists no whom distance from"
          },
          {
              "id": 2772,
              "action": "Shezemtet (LGG7, 124, Dendera)",
              "tags": "shezemtet"
          },
          {
              "id": 2773,
              "action": "Hathor, Lady of the Primordial Time (LGG4, 51, Edfu)",
              "tags": "lady hathor primordial time"
          }
      ],
      [
          {
              "id": 2775,
              "action": "She Who Is Great Every Day (epithet of the Eye of Ra) (LGG3, 18, Dendera and Edfu)",
              "tags": "every great she"
          },
          {
              "id": 2776,
              "action": "Sobek, Lord of Ra-huwy (area near Alexandria) (LGG6, 259; Leitz 2002, 142-143 and 151, Edfu)",
              "tags": "sobek ra-huwy lord"
          },
          {
              "id": 2777,
              "action": "Hathor, Lady of the Great Throne (LGG4, 48, Edfu)",
              "tags": "throne lady hathor great"
          },
          {
              "id": 2778,
              "action": "Nefertem (LGG4, 222, Dendera)",
              "tags": "nefertem"
          }
      ],
      [
          {
              "id": 2781,
              "action": "Hathor, Lady of the (Cooking) Flame (LGG4, 127, Edfu)",
              "tags": "lady hathor flame"
          },
          {
              "id": 2782,
              "action": "Anubis, Lord of Yanet (unknown location) (LGG1, 391, Edfu)",
              "tags": "anubis yanet lord"
          },
          {
              "id": 2783,
              "action": "Wadjet (LGG2, 270, Dendera)",
              "tags": "wadjet"
          }
      ],
      [
          {
              "id": 2788,
              "action": "Sobek, Lord of Apollinopolis Parva (LGG6, 259; Leitz 2002, 143 and 151, Edfu)",
              "tags": "sobek parva apollinopolis lord"
          },
          {
              "id": 2789,
              "action": "Sekhmet (LGG6, 557, Dendera)",
              "tags": "sekhmet"
          },
          {
              "id": 2790,
              "action": "Hathor, Lady of the Great Throne (LGG4, 48, Edfu)",
              "tags": "throne lady hathor great"
          },
          {
              "id": 2791,
              "action": "Hathor, Lady of Eternity ( neheh ) (LGG4, 81, Dendera and Edfu)",
              "tags": "lady hathor eternity"
          }
      ],
      [
          {
              "id": 2797,
              "action": "Sekhmet-Menhyt (LGG3, 371, Dendera)",
              "tags": "sekhmet-menhyt"
          },
          {
              "id": 2798,
              "action": "Sobek, Lord of el-Harageh (Faiyum location) (LGG3, 755; Leitz 2002, 141 and 151, Edfu; variant Sobek, Lord of Strength, LGG6, 259, Edfu)",
              "tags": "sobek el-harageh lord"
          },
          {
              "id": 2799,
              "action": "The Lady of Awakening (epithet of the Eye of Ra) (LGG4, 89, Dendera and Edfu)",
              "tags": "lady awakening"
          },
          {
              "id": 2800,
              "action": "Great-of-Food-Offerings (epithet of the Eye of Ra) (LGG2, 86, Edfu)",
              "tags": "great-of-food-"
          }
      ],
      [
          {
              "id": 2803,
              "action": "Horus of the Dual Sun-Shades (LGG5, 450)",
              "tags": "horus dual sun-shades"
          },
          {
              "id": 2804,
              "action": "Nut (LGG3, 535, Dendera)",
              "tags": "nut"
          },
          {
              "id": 2805,
              "action": "Hathor, Who Gives [Breath] to His Ka (LGG7, 234, Edfu)",
              "tags": "hathor gives ka"
          }
      ],
      [
          {
              "id": 2809,
              "action": "She Who Shines in the Horizon (epithet of the Eye of Ra) (LGG2, 327, Dendera and Edfu)",
              "tags": "horizon shines she"
          },
          {
              "id": 2810,
              "action": "Babai (form of Set) (LGG2, 737; Leitz (2002) 150, Edfu)",
              "tags": "edfu babai"
          }
      ],
      [
          {
              "id": 2815,
              "action": "Ma'at (LGG3, 222, Dendera and Edfu)",
              "tags": "ma-at"
          },
          {
              "id": 2816,
              "action": "Dedun, Son of the Mistress of Heaven (Nubian god) (LGG7, 579; Leitz 2002, 150, Edfu)",
              "tags": "mistress heaven son dedun"
          },
          {
              "id": 2817,
              "action": "Hathor, Lady of Her Property (LGG4, 114, Edfu)",
              "tags": "lady hathor property"
          },
          {
              "id": 2818,
              "action": "Great One, Mistress of the Gods (epithet of the Eye of Ra) (LGG2, 478, Dendera)",
              "tags": "one mistress great"
          }
      ],
      [
          {
              "id": 2820,
              "action": "The Great Nine (LGG3, 141, Dendera)",
              "tags": "great nine"
          },
          {
              "id": 2821,
              "action": "Sekhmet, Lady of Neferu (unknown location) (LGG4, 75, Edfu)",
              "tags": "lady sekhmet neferu"
          },
          {
              "id": 2822,
              "action": "Nekhbet (LGG4, 301, Dendera and Edfu)",
              "tags": "nekhbet"
          }
      ],
      [
          {
              "id": 2824,
              "action": "Sobek, Lord of Tema(t) (unknown location) (LGG6, 259; Leitz 2002, 143, Edfu)",
              "tags": "sobek tema lord"
          },
          {
              "id": 2825,
              "action": "Isis the Clever (lit., sharp-faced) (LGG6, 288, Edfu)",
              "tags": "clever isis"
          },
          {
              "id": 2826,
              "action": "She Who Is Great in Offerings (epithet of the Eye of Ra) (LGG1, 295, Dendera and Edfu)",
              "tags": "great she"
          },
          {
              "id": 2827,
              "action": "Hathor the Great (LGG2, 478, Dendera)",
              "tags": "hathor great"
          }
      ],
      [
          {
              "id": 2832,
              "action": "The Great Daughter (epithet of the Eye of Ra) (LGG6, 103, Dendera and Edfu)",
              "tags": "great daughter"
          },
          {
              "id": 2833,
              "action": "Lady of the Claw (epithet of the Eye of Ra) (LGG4, 34, Edfu)",
              "tags": "lady claw"
          },
          {
              "id": 2834,
              "action": "Sekhmet (LGG6, 557, Dendera)",
              "tags": "sekhmet"
          }
      ],
      [
          {
              "id": 2840,
              "action": "Horus Khenty-khety (LGG5, 279)",
              "tags": "khenty-khety horus"
          },
          {
              "id": 2841,
              "action": "Khnum, Lord of the Lake City (LGG6, 26, Edfu)",
              "tags": "lord city khnum lake"
          },
          {
              "id": 2842,
              "action": "Hathor, Lady of Fate/Destiny (LGG4, 140, Edfu)",
              "tags": "lady hathor destiny fate"
          },
          {
              "id": 2843,
              "action": "The Udjat-Eye (LGG2, 646, Dendera and Edfu)",
              "tags": "udjat-eye"
          }
      ],
      [
          {
              "id": 2848,
              "action": "Horus, Lord of Stomping, Lord of Heaven (LGG3, 662, Dendera)",
              "tags": "lord stomping horus heaven"
          },
          {
              "id": 2849,
              "action": "Hathor, Lady of Watchfulness (LGG4, 37, Edfu)",
              "tags": "lady hathor watchfulness"
          },
          {
              "id": 2850,
              "action": "Anubis, Lord of the Sacred Land (LGG1, 391, Edfu)",
              "tags": "anubis sacred land lord"
          }
      ],
      [
          {
              "id": 2854,
              "action": "Hathor the Foremost Cobra (LGG5, 443, Dendera)",
              "tags": "hathor foremost cobra"
          },
          {
              "id": 2855,
              "action": "Horus Who Protects His Body (LGG5, 664, Edfu)",
              "tags": "horus protects body"
          },
          {
              "id": 2856,
              "action": "Hathor, Lady of Musicians (LGG4, 21, Edfu)",
              "tags": "lady hathor musicians"
          }
      ],
      [
          {
              "id": 2860,
              "action": "Neith (LGG3, 511, Dendera)",
              "tags": "neith"
          },
          {
              "id": 2861,
              "action": "Thoth, Born of [word lost] (LGG7, 641, Edfu)",
              "tags": "thoth born"
          },
          {
              "id": 2862,
              "action": "Hathor, Lady of Borders (LGG4, 159, Edfu)",
              "tags": "lady hathor borders"
          },
          {
              "id": 2863,
              "action": "Great-in-Followers (epithet of the Eye of Ra as the Ihet-cow) (LGG2, 228, Dendera and Edfu)",
              "tags": "great-in-followers"
          }
      ],
      [
          {
              "id": 2864,
              "action": "Wadjet Who Protects Horus (LGG3, 455, Dendera and Edfu)",
              "tags": "horus wadjet protects"
          },
          {
              "id": 2865,
              "action": "Nut (LGG3, 535, Dendera)",
              "tags": "nut"
          },
          {
              "id": 2866,
              "action": "She of Hidden Magic (epithet of the Eye of Ra) (LGG2, 107, Dendera and Edfu)",
              "tags": "magic hidden she"
          }
      ],
      [
          {
              "id": 2869,
              "action": "Hathor, Lady of Light (LGG4, 135, Dendera and Edfu)",
              "tags": "lady hathor light"
          },
          {
              "id": 2870,
              "action": "Iah (LGG1, 147, Dendera)",
              "tags": "iah"
          },
          {
              "id": 2871,
              "action": "Amun in [location lost] (LGG1, 306, Edfu)",
              "tags": "amun"
          }
      ],
      [
          {
              "id": 2874,
              "action": "Hapi (i.e., the Nile) (LGG5, 44, Dendera)",
              "tags": "hapi"
          },
          {
              "id": 2875,
              "action": "Hathor, Lady of Radiance (LGG4, 113, Edfu)",
              "tags": "lady hathor radiance"
          }
      ],
      [
          {
              "id": 2878,
              "action": "Thoth, Lord of Ma'at (LGG3, 639, Dendera)",
              "tags": "lord ma-at thoth"
          },
          {
              "id": 2879,
              "action": "Sokar (LGG6, 664, Edfu)",
              "tags": "sokar"
          },
          {
              "id": 2880,
              "action": "Nut, Who Provides Water (LGG4, 777, Dendera and Edfu)",
              "tags": "provides nut water"
          }
      ],
      [
          {
              "id": 2884,
              "action": "Hathor, Lady of the Waterway (LGG4, 153, Edfu)",
              "tags": "lady hathor waterway"
          },
          {
              "id": 2885,
              "action": "Onuris (LGG1, 378, Dendera)",
              "tags": "onuris"
          }
      ],
      [
          {
              "id": 2889,
              "action": "Sekhmet (LGG6, 557, Dendera)",
              "tags": "sekhmet"
          },
          {
              "id": 2890,
              "action": "Hathor, Lady of Damage (LGG4, 113, Edfu)",
              "tags": "lady hathor damage"
          }
      ],
      [
          {
              "id": 2894,
              "action": "Hathor the Furious One (LGG7, 554, Dendera and Edfu)",
              "tags": "furious one hathor"
          },
          {
              "id": 2895,
              "action": "Isis, Lady of the Great Ones (LGG4, 41, Edfu)",
              "tags": "ones lady isis great"
          },
          {
              "id": 2896,
              "action": "Horus, Lord of Love (LGG3, 648, Edfu)",
              "tags": "lord love horus"
          },
          {
              "id": 2897,
              "action": "Atumet (the female Atum) (LGG7, 422, Dendera)",
              "tags": "atumet"
          }
      ],
      [
          {
              "id": 2906,
              "action": "Serqet (LGG6, 438, Dendera)",
              "tags": "serqet"
          },
          {
              "id": 2907,
              "action": "Hathor, Mistress of the Processional Way (LGG4, 46, Edfu)",
              "tags": "mistress hathor way processional"
          },
          {
              "id": 2908,
              "action": "Hathor, She of the Great Flame (LGG2, 60, Dendera and Edfu)",
              "tags": "hathor great she flame"
          }
      ],
      [
          {
              "id": 2911,
              "action": "Horus, Whose Body Rests in Ma'at (LGG5, 583, Edfu)",
              "tags": "horus whose ma-at body rests"
          },
          {
              "id": 2912,
              "action": "Isis, Lady of Heaven (LGG4, 49, Dendera)",
              "tags": "lady heaven isis"
          },
          {
              "id": 2913,
              "action": "Hathor, Lady of the Face (LGG4, 107, Edfu; variant Hathor, Lady of the Earth, LGG4, 154, Edfu)",
              "tags": "lady hathor face"
          },
          {
              "id": 2914,
              "action": "Osiris (LGG2, 530, Dendera)",
              "tags": "osiris"
          }
      ],
      [
          {
              "id": 2916,
              "action": "Min, Lord of Many Things/Creations of [word lost] (LGG3, 586, Edfu; variant Khnum, Lord of Many Things/Creations of Esna)",
              "tags": "min lord many things creations"
          },
          {
              "id": 2917,
              "action": "Isis, Kite (bird) of Her Beloved (LGG7, 639, Dendera and Edfu)",
              "tags": "beloved kite isis"
          },
          {
              "id": 2918,
              "action": "Sokar (LGG6, 664, Dendera)",
              "tags": "sokar"
          },
          {
              "id": 2919,
              "action": "Lady of Ha... [place name broken off] (LGG4, 90, Edfu)",
              "tags": "lady ha..."
          }
      ],
      [
          {
              "id": 2922,
              "action": "Haroeris, Foremost of Eyes (LGG3, 395, Edfu)",
              "tags": "eyes foremost haroeris"
          },
          {
              "id": 2923,
              "action": "Nut (LGG3, 535, Dendera)",
              "tags": "nut"
          },
          {
              "id": 2924,
              "action": "Hathor, Lady of the End (lit., backside/buttocks) (LGG4, 57, Edfu)",
              "tags": "lady hathor end"
          },
          {
              "id": 2925,
              "action": "Lady of Dawn (epithet of the Eye of Ra) (LGG4, 113, Dendera and Edfu)",
              "tags": "lady dawn"
          }
      ],
      [
          {
              "id": 2928,
              "action": "Osiris, Greatly Shining One (LGG5, 601, Dendera)",
              "tags": "greatly one shining osiris"
          },
          {
              "id": 2929,
              "action": "Tefnut (LGG7, 406, Dendera)",
              "tags": "tefnut"
          },
          {
              "id": 2930,
              "action": "Hedj-wer (\"great (and) white\" or \"great of club,\" a protective spirit of Haroeris, Leitz 2002, 150, Edfu)",
              "tags": "white club or great leitz spirit hedj-wer edfu haroeris protective"
          },
          {
              "id": 2931,
              "action": "Hathor, Lady of Walking (lit., circling around) (LGG4, 58, Edfu)",
              "tags": "lady hathor walking"
          },
          {
              "id": 2932,
              "action": "She Who Unites with the Primordial Ones (epithet of the Eye of Ra) (LGG1, 136, Dendera and Edfu)",
              "tags": "ones with she unites primordial"
          }
      ],
      [
          {
              "id": 2935,
              "action": "The Cobra (epithet of the Eye of Ra) (LGG5, 102, Edfu)",
              "tags": "cobra"
          },
          {
              "id": 2936,
              "action": "Sekhmet (LGG6, 557, Dendera)",
              "tags": "sekhmet"
          },
          {
              "id": 2937,
              "action": "Hathor, Lady of the First Canal (LGG4, 106, Dendera and Edfu)",
              "tags": "lady hathor first canal"
          }
      ],
      [
          {
              "id": 2938,
              "action": "Hathor, Lady of the Firestarter (i.e., flint stone) (LGG4, 93, Edfu)",
              "tags": "firestarter lady hathor"
          },
          {
              "id": 2939,
              "action": "Ra (LGG4, 612, Edfu)",
              "tags": "ra"
          }
      ],
      [
          {
              "id": 2942,
              "action": "Khnum (LGG6, 26, Dendera)",
              "tags": "khnum"
          },
          {
              "id": 2943,
              "action": "Hathor, Mistress of the Horizon (LGG4, 5, Dendera)",
              "tags": "mistress hathor horizon"
          },
          {
              "id": 2944,
              "action": "Mut, Lady of the Two Lands (LGG4, 157, Edfu)",
              "tags": "lands lady two mut"
          }
      ],
      [
          {
              "id": 2947,
              "action": "Amun-Ra, Lord of All (lit., Lord to the Limit) (LGG3, 795, Edfu)",
              "tags": "lord all amun-ra"
          },
          {
              "id": 2948,
              "action": "Neith (LGG3, 511, Dendera)",
              "tags": "neith"
          },
          {
              "id": 2949,
              "action": "Hathor, Lady of the Two Arms (LGG4, 25, Edfu)",
              "tags": "arms lady hathor two"
          },
          {
              "id": 2950,
              "action": "Hathor, Lady of Opening-the-Face (LGG4, 40, Dendera and Edfu; wordplay that can also mean \"lady of mirrors\" or \"lady of the icon greeting ritual\")",
              "tags": "lady hathor opening-the-face"
          }
      ],
      [
          {
              "id": 2953,
              "action": "Khepera-Who-Created-Himself (LGG5, 714, Edfu)",
              "tags": "khepera-who-created-himself"
          },
          {
              "id": 2954,
              "action": "Horus, Lord of the East (LGG3, 571, Dendera)",
              "tags": "lord east horus"
          },
          {
              "id": 2955,
              "action": "The Eye of Sekhmet (LGG1, 436, Edfu; variant The Powerful Eye, LGG1, 528, Dendera)",
              "tags": "sekhmet eye"
          },
          {
              "id": 2956,
              "action": "Born in [?] the Sun-Disk (epithet of the Eye of Ra, name unclear in Edfu listing) (LGG1, 620, Edfu and Kom Ombo)",
              "tags": "born sun-disk"
          }
      ],
      [
          {
              "id": 2957,
              "action": "Amun-Ra, Lord of All (lit., Lord to the Limit) (LGG3, 795, Edfu)",
              "tags": "lord all amun-ra"
          }
      ],
      [
          {
              "id": 2960,
              "action": "Encircler (epithet of the Eye of Ra) (LGG7, 531, Dendera and Edfu)",
              "tags": "encircler"
          },
          {
              "id": 2961,
              "action": "Hathor, Hand of God (LGG7, 628, Edfu)",
              "tags": "hathor hand"
          },
          {
              "id": 2962,
              "action": "Nekhbet (LGG4, 301, Dendera)",
              "tags": "nekhbet"
          },
          {
              "id": 2963,
              "action": "Ra (LGG4, 612, Edfu)",
              "tags": "ra"
          }
      ],
      [
          {
              "id": 2966,
              "action": "Montu (LGG3, 319, Dendera)",
              "tags": "montu"
          },
          {
              "id": 2967,
              "action": "Atum (LGG7, 412, Edfu)",
              "tags": "atum"
          },
          {
              "id": 2968,
              "action": "Lady of Offerings (epithet of the Eye of Ra) (LGG4, 43, Dendera and Edfu)",
              "tags": "lady"
          }
      ],
      [
          {
              "id": 2971,
              "action": "Atum, Ruler of Heliopolis (LGG5, 495; Leitz 2002, 152, Edfu)",
              "tags": "atum heliopolis ruler"
          },
          {
              "id": 2972,
              "action": "Hathor's Sacred Barque (LGG2, 277, Edfu)",
              "tags": "hathor barque sacred"
          },
          {
              "id": 2973,
              "action": "Isis, Who Protects the Gods (LGG2, 593, Dendera and Edfu; variant Isis without epithets, LGG1, 62, Dendera)",
              "tags": "isis protects"
          },
          {
              "id": 2974,
              "action": "Feast of the Half Month",
              "tags": "half month"
          },
          {
              "id": 2975,
              "action": "Feast of Haroeris the Great Shining One (TFC Edfu; LGG5, Edfu)",
              "tags": "one shining great haroeris"
          },
          {
              "id": 2976,
              "action": "Appearance of Ra \"to propitiate the Nun\" (CC)",
              "tags": "to nun ra propitiate"
          }
      ],
      [
          {
              "id": 2984,
              "action": "Neith (LGG3, 511, Dendera)",
              "tags": "neith"
          },
          {
              "id": 2985,
              "action": "She Who Separates Souls ( bau ) (epithet of the Eye of Ra) (LGG2, 359, Dendera and Edfu)",
              "tags": "separates souls she"
          }
      ],
      [
          {
              "id": 2988,
              "action": "Ptah (LGG3, 169, Dendera)",
              "tags": "ptah"
          },
          {
              "id": 2989,
              "action": "Ma'at Who Loves Words (lit., things that are said) (LGG3, 351, Dendera and Edfu)",
              "tags": "words ma-at loves"
          },
          {
              "id": 2990,
              "action": "Hathor, Mistress of Mourning (LGG4, 10, Edfu)",
              "tags": "mistress hathor mourning"
          },
          {
              "id": 2991,
              "action": "Horus, the Fearsome [word lost] (LGG4, 254, Edfu)",
              "tags": "horus fearsome"
          }
      ],
      [
          {
              "id": 2994,
              "action": "In the Greco-Roman period, a holiday for the deification of the Old Kingdom vizier Imhotep as a semi-divine son of Ptah extended seven days. Imhotep (Greek Imouthes) was syncretized with the demigod Asklepios. IV Shomu 18",
              "tags": "period shomu greco-roman asklepios. semi-divine iv with son seven old holiday extended vizier deification demigod kingdom as imhotep syncretized in was ptah days."
          },
          {
              "id": 2995,
              "action": "She Who Sees (epithet of the Eye of Ra) (LGG3, 205, Dendera and Edfu)",
              "tags": "she sees"
          },
          {
              "id": 2996,
              "action": "Sokar (LGG6, 664, Dendera)",
              "tags": "sokar"
          },
          {
              "id": 2997,
              "action": "Lady of Isden (unknown location) (epithet of the Eye of Ra) (LGG4, 22, Edfu)",
              "tags": "lady isden"
          }
      ],
      [
          {
              "id": 3000,
              "action": "Horakhty (LGG5, 239, Dendera)",
              "tags": "horakhty"
          },
          {
              "id": 3001,
              "action": "Tasenetnofret-Tefnut, She Who Is Loved by Her Lord (LGG3, 348, Dendera and Edfu)",
              "tags": "lord tasenetnofret-tefnut loved she"
          },
          {
              "id": 3002,
              "action": "Shu (LGG7, 35, Edfu)",
              "tags": "shu"
          },
          {
              "id": 3003,
              "action": "Hathor, Lady of the Primordial Time (LGG4, 51, Edfu)",
              "tags": "lady hathor primordial time"
          }
      ],
      [
          {
              "id": 3008,
              "action": "She Who Beholds Suwen (\"the southerner\" (?) Meaning unclear) (epithet of the Eye of Ra) (LGG3, 206, Edfu)",
              "tags": "beholds she unclear meaning suwen"
          },
          {
              "id": 3009,
              "action": "Hathor, Mistress of Kom-el-Hisn (LGG4, 16, Dendera and Edfu)",
              "tags": "kom-el-hisn mistress hathor"
          },
          {
              "id": 3010,
              "action": "Nefertem (LGG4, 222, Edfu)",
              "tags": "nefertem"
          },
          {
              "id": 3011,
              "action": "Banebdjedet (LGG2, 683, Dendera)",
              "tags": "banebdjedet"
          }
      ],
      [
          {
              "id": 3017,
              "action": "Sekhmet, Friend of the Gods (LGG5, 756, Dendera and Edfu; variant Sekhmet, LGG6, 557, Dendera)",
              "tags": "friend sekhmet"
          },
          {
              "id": 3018,
              "action": "Atum-Khepera, Lord of the High Ones/Heights (LGG3, 757, Edfu)",
              "tags": "high ones lord atum-khepera heights"
          },
          {
              "id": 3019,
              "action": "Lady of Necessities (epithet of the Eye of Ra) (LGG4, 66, Edfu)",
              "tags": "necessities lady"
          }
      ],
      [
          {
              "id": 3024,
              "action": "Thoth the Scribe, Lord of Hieroglyphs (lit., divine words) (LGG6, 599, Dendera)",
              "tags": "lord thoth hieroglyphs scribe"
          },
          {
              "id": 3025,
              "action": "Hathor, Lady of Neham (unknown northwestern Delta location) (LGG4, 81, Edfu)",
              "tags": "lady hathor neham"
          },
          {
              "id": 3026,
              "action": "Isis, Who Is Beautiful to Behold (LGG4, 228, Dendera and Edfu)",
              "tags": "beautiful isis behold"
          }
      ],
      [
          {
              "id": 3030,
              "action": "Horus-Who-Creates-Marshlands (LGG7, 198, Edfu)",
              "tags": "horus-who-creates-marshlands"
          },
          {
              "id": 3031,
              "action": "Hathor, Lady of Offerings (LGG4, 111, Dendera)",
              "tags": "lady hathor"
          },
          {
              "id": 3032,
              "action": "Neith, Lady of Eternity ( djet ) (LGG4, 168, Dendera and Edfu)",
              "tags": "neith lady eternity"
          },
          {
              "id": 3033,
              "action": "Hathor, Beautiful-Faced (or \"perfect of face\") (LGG4, 230, Edfu)",
              "tags": "hathor beautiful-faced"
          }
      ],
      [
          {
              "id": 3036,
              "action": "Horus, Lord of Heaven, Great God (LGG3, 624, Dendera)",
              "tags": "lord horus heaven great"
          },
          {
              "id": 3037,
              "action": "Hathor, Lady of Beholding the Mysteries (or \"lady of what the mysterious ones see,\" LGG4, 60, Edfu and Kom Ombo)",
              "tags": "lady hathor mysteries beholding"
          }
      ],
      [
          {
              "id": 3041,
              "action": "Thoth, Lord of Hermopolis Magna (LGG3, 716, Dendera)",
              "tags": "lord thoth hermopolis magna"
          },
          {
              "id": 3042,
              "action": "Hathor, Lady of Perfection (LGG4, 74, Edfu and Kom Ombo)",
              "tags": "lady hathor perfection"
          },
          {
              "id": 3043,
              "action": "Ra in the Midst of His Eye (LGG4, 637, Edfu)",
              "tags": "midst eye ra"
          },
          {
              "id": 3044,
              "action": "Hathor, the Many-Faced (LGG2, 226, Dendera and Edfu)",
              "tags": "hathor many-faced"
          }
      ],
      [
          {
              "id": 3047,
              "action": "Neith (LGG3, 511, Dendera)",
              "tags": "neith"
          },
          {
              "id": 3048,
              "action": "Hathor, Lady of Her Going Forth (LGG4, 142, Edfu and Kom Ombo)",
              "tags": "going lady hathor forth"
          },
          {
              "id": 3049,
              "action": "Who Belongs to the Heart of Her Mother (epithet of the Eye of Ra) (LGG1, 421, Dendera and Edfu)",
              "tags": "mother belongs heart who"
          }
      ],
      [
          {
              "id": 3052,
              "action": "Who Loves the One Who Gives Water (epithet of the Eye of Ra) (LGG3, 349, Dendera and Edfu)",
              "tags": "loves one who gives water"
          },
          {
              "id": 3053,
              "action": "Hathor the Wise (LGG6, 125, Edfu)",
              "tags": "hathor wise"
          },
          {
              "id": 3054,
              "action": "Lady of Work(ing) (epithet of the Eye of Ra) (LGG4, 149, Dendera and Edfu)",
              "tags": "work lady"
          },
          {
              "id": 3055,
              "action": "Haroeris, Noble Falcon of Heaven (LGG2, 771, Edfu)",
              "tags": "falcon heaven haroeris noble"
          }
      ],
      [
          {
              "id": 3058,
              "action": "Horus, Lord of Stomping, Lord of Heaven (LGG3, 662, Dendera)",
              "tags": "lord stomping horus heaven"
          },
          {
              "id": 3059,
              "action": "Shu, Son of Atum (LGG7, 35, Edfu)",
              "tags": "atum son shu"
          },
          {
              "id": 3060,
              "action": "Heqat, Lady of the Flood (LGG4, 71, Edfu)",
              "tags": "flood lady heqat"
          }
      ],
      [
          {
              "id": 3063,
              "action": "Thoth (LGG7, 641, Edfu)",
              "tags": "thoth"
          },
          {
              "id": 3064,
              "action": "Hathor, Lady of Incense Smoke (LGG4, 149, Edfu)",
              "tags": "incense lady hathor smoke"
          },
          {
              "id": 3065,
              "action": "She of Perfect Work(ing) (epithet of the Eye of Ra, LGG4, 233, Dendera; variant Lady of Working)",
              "tags": "perfect work she"
          },
          {
              "id": 3066,
              "action": "Amun (LGG1, 306, Dendera)",
              "tags": "amun"
          }
      ],
      [
          {
              "id": 3071,
              "action": "Horakhty (LGG5, 239, Dendera)",
              "tags": "horakhty"
          },
          {
              "id": 3072,
              "action": "Hathor, Mistress of Farmland (LGG4, 3, Edfu)",
              "tags": "mistress hathor farmland"
          },
          {
              "id": 3073,
              "action": "Hathor, Lady of the High Ones (or Lady of the Heights) (LGG4, 145, Edfu and Kom Ombo)",
              "tags": "high lady hathor ones"
          },
          {
              "id": 3074,
              "action": "Ra (LGG4, 612, Edfu)",
              "tags": "ra"
          }
      ],
      [
          {
              "id": 3081,
              "action": "Hathor, Lady of Thousands (LGG4, 795, Edfu and Kom Ombo)",
              "tags": "lady hathor thousands"
          }
      ],
      [
          {
              "id": 3089,
              "action": "Heqat, Lady of the Flood (LGG4, 71, Edfu and Kom Ombo)",
              "tags": "flood lady heqat"
          }
      ],
      [
          {
              "id": 3097,
              "action": "Lady of the Day (i.e., time period) (epithet of the Eye of Ra) (LGG4, 106, Edfu and Kom Ombo)",
              "tags": "lady"
          }
      ],
      [
          {
              "id": 3106,
              "action": "Nephthys, Powerful of Heart (LGG4, 93, Edfu and Kom Ombo)",
              "tags": "heart powerful nephthys"
          }
      ],
      [
          {
              "id": 3112,
              "action": "Hathor, Lady of Splendor (LGG1, 47, Edfu and Kom Ombo)",
              "tags": "lady hathor splendor"
          }
      ],
      [
          {
              "id": 0,
              "action": "No Chronokrators",
              "tags": "none"
          }
      ]
  ]
  },
  property: function(m) {
    return m.planetary.day.start;
  },
  calculate: function(definitions, property) {
    var ed = egyptianDate(property);
    var doy = ed.day.ofyear + 1;
    return definitions.actions[doy];
  }
};

var module_kemet_chronokrators_alexandrian = {
  definitions: {
    name: "Chronokrators (Alexandrian)",
    description: "Daily time-lord or guardian neter or neteru to whom each day of the year is assigned according to the Alexandrian (Coptic) Civil Calendar. (from 'The Ancient Egyptian Daybook' by Tamara L. Siuda)",
    group: {
      id: "kemet",
      text: "Kemet",
      info: "true"
    },
    actions: module_kemet_chronokrators_pharaonic.definitions.actions
  },
  property: function(m) {
    return m.planetary.day.start;
  },
  calculate: function(definitions, property) {
    var date = new Date(property * 1000);
    var cd = new Intl.DateTimeFormat('en', { calendar:'coptic', dateStyle:"short"})
    var cdl = cd.format(date).split(",")[0].split("/");
    var doy = ((parseInt(cdl[0]) - 1) * 30) + parseInt(cdl[1]);
    return definitions.actions[doy];
  }
};

var module_kemet_festivals_pharaonic = {
  definitions: {
    name: "Festivals (Pharaonic)",
    description: "Daily feast days for neteru and other important ancient Kemetic festivals according to the Pharaonic Civil Calendar. (from 'The Ancient Egyptian Daybook' by Tamara L. Siuda)",
    group: {
      id: "kemet",
      text: "Kemet",
      info: "true"
    },
    actions: [
      [0],
      [
          {
              "id": 507,
              "action": "First Day of the First Month of Inundation (I Akhet 1)",
              "tags": "month first inundation"
          },
          {
              "id": 508,
              "action": "Wep Ronpet (New Year's Day) (AF Illahun Senwosret Year 25 inscription, Hepdjefa tomb at Asyut; TFC Edfu)",
              "tags": "ronpet wep"
          },
          {
              "id": 509,
              "action": "Tepy-Ronpet (\"First/Head/Front of the Year\") (AF Akhmenu Temple/Thutmose III; TFC Sahure Valley Temple; TFC Niuserre Temple)",
              "tags": "tepy-ronpet"
          },
          {
              "id": 510,
              "action": "Feast of the Dressing, Day 7 (final) (TFC Hathor calendar at Edfu)",
              "tags": "dressing"
          },
          {
              "id": 511,
              "action": "First Time, Day 7 of 11",
              "tags": "time first"
          },
          {
              "id": 512,
              "action": "Birthday of Ra-Horakhty (AF, LA, and CC: Daybook of Theban necropolis workers)",
              "tags": "birthday ra-horakhty"
          },
          {
              "id": 513,
              "action": "Feast of Khnum, Day 1 of 3 (AF, Elephantine Thutmose III)",
              "tags": "khnum"
          },
          {
              "id": 514,
              "action": "Feast of All Gods and Goddesses",
              "tags": "all gods goddesses"
          },
          {
              "id": 515,
              "action": "Day of the Rising of Isis-Sothis (LA; AF Abydos Ramses II; Medinet Habu)",
              "tags": "isis-sothis day rising"
          },
          {
              "id": 516,
              "action": "Festival of Amun, Day 1 of 3 (AF Elephantine Thutmose III)",
              "tags": "amun"
          },
          {
              "id": 517,
              "action": "Sed-Festival of Behdety (i.e., Haroeris of Edfu) (TFC Edfu)",
              "tags": "sed-behdety"
          },
          {
              "id": 518,
              "action": "Procession of Ra (TFC Edfu)",
              "tags": "ra"
          },
          {
              "id": 519,
              "action": "\"Feast of Ra at the Opening of the Year\" (TFC Hathor calendar at Edfu)",
              "tags": "opening year ra"
          },
          {
              "id": 520,
              "action": "Feast of Nehebkau (LA)",
              "tags": "nehebkau"
          },
          {
              "id": 521,
              "action": "Appeasement of Sekhmet/Litany of Sekhmet against the Seven Arrows of the Year (Cauville 2002, 38; Germond 1981, 6)",
              "tags": "litany arrows against sekhmet seven appeasement year"
          },
          {
              "id": 522,
              "action": "Confirmation of Royal Authority (pBrooklyn 47.218.50; Goyon 1972)",
              "tags": "authority confirmation royal"
          },
          {
              "id": 523,
              "action": "\"Festival of the Opening of the Year, for a double benefit. Festival of Nehebkau and Khnum and His Ennead. Shu finds the Eye of Horus within the hands of Set. He takes it from Him.\" (TFC Esna)",
              "tags": "opening benefit. ennead. horus him. nehebkau double takes eye shu finds it within he set. year khnum hands"
          }
      ],
      [
          {
              "id": 529,
              "action": "Day of Wetting the Head before the Gods",
              "tags": "wetting head gods day"
          },
          {
              "id": 530,
              "action": "First Time, Day 8 of 11",
              "tags": "time first"
          },
          {
              "id": 531,
              "action": "Feast of Khnum, Day 2 of 3 (TFC Elephantine Thutmose III)",
              "tags": "khnum"
          },
          {
              "id": 532,
              "action": "Festival of Amun, Day 2 of 3 (TFC Elephantine Thutmose III)",
              "tags": "amun"
          },
          {
              "id": 533,
              "action": "Procession of Ihy the Great Lotus (LGG1, 542; Leitz TW 429 and 544; Dendera IX; Grimm 1994, 22)",
              "tags": "lotus great ihy"
          },
          {
              "id": 534,
              "action": "Feast of Shu, son of Ra (LGG1, 380; Leitz TW 429)",
              "tags": "son ra shu"
          },
          {
              "id": 535,
              "action": "Feast of Onuris of Heliopolis (LGG1, 380; Leitz TW 429)",
              "tags": "heliopolis onuris"
          },
          {
              "id": 536,
              "action": "Feast of Maa'hes (LGG3, 211; Leitz TW 429)",
              "tags": "maa-hes"
          }
      ],
      [
          {
              "id": 542,
              "action": "Feast of the Pacification of Sekhmet-Hathor (CC and CC2)",
              "tags": "pacification sekhmet-hathor"
          },
          {
              "id": 543,
              "action": "First Time, Day 9 of 11",
              "tags": "time first"
          },
          {
              "id": 544,
              "action": "Feast of Khnum, Day 3 of 3 (TFC Elephantine Thutmose III)",
              "tags": "khnum"
          },
          {
              "id": 545,
              "action": "Feast of Amun, Day 3 of 3 (TFC Elephantine Thutmose III)",
              "tags": "amun"
          },
          {
              "id": 546,
              "action": "Feast of Ptah-the-Great, Son of Ra (sic) (CC; LGG3, 172; Leitz TW 430)",
              "tags": "son ra ptah-the-great"
          }
      ],
      [
          {
              "id": 553,
              "action": "Feast of Thoth (TFC Esna; Dynasty 21 according to LA2, 174)",
              "tags": "thoth"
          },
          {
              "id": 554,
              "action": "Feast of Hathor, Mistress of Byblos (CC)",
              "tags": "mistress hathor byblos"
          },
          {
              "id": 555,
              "action": "Feast of Nekhbet, the White One of Nekhen (CC; LGG4, 302, Leitz TW 451)",
              "tags": "nekhbet one nekhen white"
          },
          {
              "id": 556,
              "action": "Feast of Nut (CC)",
              "tags": "nut"
          },
          {
              "id": 557,
              "action": "First Time, Day 10 of 11",
              "tags": "time first"
          }
      ],
      [
          {
              "id": 564,
              "action": "Feast of Behdety (LGG5, 254; TFC Edfu; CC; CC2 notes possible Horus Shededty rather than Behdety)",
              "tags": "behdety"
          },
          {
              "id": 565,
              "action": "Feast of Haroeris in Sais (CC)",
              "tags": "haroeris sais"
          },
          {
              "id": 566,
              "action": "Feast of Hathor (CC)",
              "tags": "hathor"
          },
          {
              "id": 567,
              "action": "First Time, Day 11 (final)",
              "tags": "time first"
          }
      ],
      [
          {
              "id": 572,
              "action": "Sixth-Day Festival (AF; TFC Thutmose III \"Sixth Day Festival of the [first month of] Inundation\")",
              "tags": "sixth-day inundation"
          },
          {
              "id": 573,
              "action": "Feast of the Majesty of Mnevis (CC; CC2, name broken; LGG3, 329; Leitz TW 432)",
              "tags": "majesty mnevis"
          },
          {
              "id": 574,
              "action": "Feast of Anubis Who Is in the Ut, Day 1 of 2 (CC)",
              "tags": "anubis ut"
          },
          {
              "id": 575,
              "action": "Feast of Haroeris in Asyut (LGG5, 251; Leitz TW 431)",
              "tags": "asyut haroeris"
          }
      ],
      [
          {
              "id": 581,
              "action": "Day of Welcoming the Inundation (CC)",
              "tags": "inundation welcoming day"
          },
          {
              "id": 582,
              "action": "Feast of Sobek, Lord of Wadjty (CC; CC2 restores lost city name)",
              "tags": "sobek lord wadjty"
          },
          {
              "id": 583,
              "action": "Feast of Anubis Who Is in the Ut, Day 2 of 2 (CC)",
              "tags": "anubis ut"
          }
      ],
      [
          {
              "id": 589,
              "action": "Feast of 'Anty (LGG4, 630, Dendera; LGG4, 232, written \"Nemty\" and listed as Chronokrat; CC2; Leitz TW 433)",
              "tags": "-anty"
          }
      ],
      [
          {
              "id": 594,
              "action": "Pacifying the Hearts of Those in the Horizon in Front of Ra (CC)",
              "tags": "pacifying ra those horizon hearts front"
          },
          {
              "id": 595,
              "action": "Public Feast of Hathor (TFC Edfu)",
              "tags": "hathor public"
          },
          {
              "id": 596,
              "action": "Feast of Khnum, Lord of Senmet (unknown location) (CC)",
              "tags": "lord senmet khnum"
          },
          {
              "id": 597,
              "action": "Feast of Ra (CC2)",
              "tags": "ra"
          },
          {
              "id": 598,
              "action": "Feast of Sobek (CC)",
              "tags": "sobek"
          }
      ],
      [
          {
              "id": 607,
              "action": "Feast of Tefnut-Nebtu (TFC Esna, LGG7, 408; Esna II, 55; CC; CC2)",
              "tags": "tefnut-nebtu"
          },
          {
              "id": 608,
              "action": "Procession of Nephthys",
              "tags": "nephthys"
          },
          {
              "id": 609,
              "action": "Procession of Isis (TFC Esna)",
              "tags": "isis"
          },
          {
              "id": 610,
              "action": "Procession of Harsomtus the Great God, Lord of Khadi (TFC Edfu; LGG5, 584, Dendera)",
              "tags": "harsomtus khadi great lord"
          },
          {
              "id": 611,
              "action": "Procession of Hedjhotep (CC; Leitz TW 21; LGG5, 602)",
              "tags": "hedjhotep"
          },
          {
              "id": 612,
              "action": "Feast of Ha (god of the West) (CC; LGG5, 11; Leitz TW 434)",
              "tags": "ha"
          }
      ],
      [
          {
              "id": 617,
              "action": "Feast of the Bawy, the Lords of Offerings (CC; LGG2, 711; Leitz TW 435)",
              "tags": "bawy lords"
          },
          {
              "id": 618,
              "action": "Feast of Sobek of Shedty (CC; LGG6, 264; Leitz TW 435)",
              "tags": "sobek shedty"
          },
          {
              "id": 619,
              "action": "Feast of Ra (CC)",
              "tags": "ra"
          },
          {
              "id": 620,
              "action": "Procession of the Great Flame (Nesret) (epithet of the Eye of Ra) (CC)",
              "tags": "great flame"
          }
      ],
      [
          {
              "id": 625,
              "action": "Day of Opening the Two Lands (TFC Edfu)",
              "tags": "opening two lands day"
          },
          {
              "id": 626,
              "action": "Feast of Satis of Elephantine (LGG6, 701; Leitz TW 435; CC)",
              "tags": "satis elephantine"
          },
          {
              "id": 627,
              "action": "Feast of Nefertem, Lord of Offerings (LGG4, 211; Leitz TW 435; CC)",
              "tags": "lord nefertem"
          },
          {
              "id": 628,
              "action": "Procession of Isis in Pi-Sahure (TFC Esna)",
              "tags": "isis pi-sahure"
          }
      ],
      [
          {
              "id": 634,
              "action": "Jubilation of the Year's Beginning (TFC Edfu)",
              "tags": "beginning jubilation year"
          },
          {
              "id": 635,
              "action": "Feast of Nut (LGG3, 535; CC; CC2)",
              "tags": "nut"
          },
          {
              "id": 636,
              "action": "Feast of (Horus) Khentykhety, Lord of Leontopolis (CC)",
              "tags": "lord leontopolis khentykhety"
          },
          {
              "id": 637,
              "action": "Feast of Horus, Lord of Mendes (CC)",
              "tags": "lord horus mendes"
          },
          {
              "id": 638,
              "action": "Feast of the Nun (Hibis 21; LGG3, 545; CC)",
              "tags": "nun"
          }
      ],
      [
          {
              "id": 642,
              "action": "Feast of Tithoes, Child of Neith (TFC Esna; LA6, 602 notes as male, and \"chief of the spirits of Sekhmet and Bast\")",
              "tags": "neith child tithoes"
          },
          {
              "id": 643,
              "action": "Feast of Khonsu-Osiris (possibly \"Osiris-the Khons-bull\") (CC; LGG5, 761; Leitz TW 437)",
              "tags": "khonsu-osiris"
          },
          {
              "id": 644,
              "action": "Feast of Ptah the Noble Djed (CC; LGG7, 679; Leitz TW 437)",
              "tags": "ptah djed noble"
          },
          {
              "id": 645,
              "action": "Feast of the Meskhetiu constellation (CC2)",
              "tags": "constellation meskhetiu"
          }
      ],
      [
          {
              "id": 650,
              "action": "Feast of the Half-Month",
              "tags": "half-month"
          },
          {
              "id": 651,
              "action": "The Day of Unknown Rage in the Duat (CC)",
              "tags": "rage unknown duat"
          },
          {
              "id": 652,
              "action": "Feast of Sepa-Osiris Who Rules in Heliopolis (CC)",
              "tags": "heliopolis sepa-osiris rules"
          },
          {
              "id": 653,
              "action": "Feast of Khonsu (CC)",
              "tags": "khonsu"
          },
          {
              "id": 654,
              "action": "Offerings to Amun-Ra King of the Gods and to the Nile (Hapi) (AF, Gebel Silsila, Ramses II, Ramses III, and Merenptah Stelae)",
              "tags": "nile king amun-ra"
          }
      ],
      [
          {
              "id": 665,
              "action": "Feast of Sebaka (CC2; see above note on Sepa in Chronokrater list)",
              "tags": "sebaka"
          }
      ],
      [
          {
              "id": 671,
              "action": "Wag Festival Eve (Illahun; AF Asyut, Hapdjefa tomb MK; LA2, 174; TFC Medinet Habu Ramses II and Ramses III; AF TT50 Amun-Neferhotep tomb, dated to Horemheb)",
              "tags": "wag eve"
          },
          {
              "id": 672,
              "action": "Feast of Sobek-Ra (LGG6, 258; Leitz TW 439; LGG6, 262)",
              "tags": "sobek-ra"
          },
          {
              "id": 673,
              "action": "Day of Sailing to Abydos (AF TT299 Inherkau tomb, dated to Ramses IV)",
              "tags": "sailing abydos day"
          }
      ],
      [
          {
              "id": 678,
              "action": "Feast of the Gods of the Noble Chapel",
              "tags": "chapel noble"
          },
          {
              "id": 679,
              "action": "Wag Festival, Day 1 of 2 (TFC Ramses II, Illahun MK, AF Medinet Habu Ramses III; LA2, 174; LA6, 1135-1139; AF Asyut, Hapdjefa tomb MK; TFC Thutmose III)",
              "tags": "wag"
          },
          {
              "id": 680,
              "action": "Feast of Shu and Tefnut, Day 1 of 5 (TFC Edfu)",
              "tags": "tefnut shu"
          },
          {
              "id": 681,
              "action": "Day of Magnifying the Majesty of Horus (CC)",
              "tags": "majesty horus magnifying day"
          },
          {
              "id": 682,
              "action": "Feast of Osiris (CC)",
              "tags": "osiris"
          },
          {
              "id": 683,
              "action": "Drunkenness (Tekhy) Festival, Day 1 of 5 (LA2, 175)",
              "tags": "drunkenness"
          },
          {
              "id": 684,
              "action": "Wag Festival included wine offerings and drunkenness; the wearing of seshed-bands, night offerings to Wepwawet (Asyut, Senwosret I), illumination ceremonies with torches, visits to Abydos, the 'Sed Festival of Osiris' (BoD169), burning incense and libations, turning the divine boats to face Abydos, and prayers and celebrations overnight, to celebrate Osiris' being declared justified. The celebrations began Wag eve and went through Wag day. (LA6, 1135-1139)",
              "tags": "drunkenness ceremonies face divine incense wearing eve boats celebrate night ed visits with justified. included turning prayers abydos wine torches libations wag through overnight illumination wepwawet declared osiris-being seshed-bands burning celebrations osiris- went began day."
          },
          {
              "id": 685,
              "action": "Osiris is Lord of Wine during the Wag Festival. (LA6; PT820a)",
              "tags": "wag lord during osiris festival. wine"
          },
          {
              "id": 686,
              "action": "In Asyut, a man named Hapdjefi's tomb from the Middle Kingdom describes what he received during Wag Festival: cake, 500 kefen breads, 10 white breads for his ka statue on Wag eve, and bread and beer on Wag day, as well as glorifications and illuminations. Hapdjefi's ka statue was taken out of his tomb and carried to the temple of Wepwawet, to light a torch and give offerings on his behalf, and then it returned in a procession to his tomb chapel. (Posener-Kriéger 1986, 1135-36)",
              "tags": "torch out well it he eve hapdjefi tomb during behalf beer give received middle glorifications illuminations. wag kingdom white as what wagas named chapel. carried wepwawet kefen asyut in was statue man taken returned ka then breads cake describes temple bread light"
          },
          {
              "id": 687,
              "action": "Red and green cloth bands that were previously used in temple statuary rituals were gifted to tombs and the dead as part of the Wag Festival observance (Helck 1961, 264 and note 1; Schott ZAS 98 (1970), 47-48).",
              "tags": "used previously dead part tombs bands statuary green observance red wag as rituals cloth gifted were -. that temple"
          }
      ],
      [
          {
              "id": 695,
              "action": "Wag Festival, Day 2 of 2 (TFC Ramses II, Illahun MK, AF Medinet Habu Ramses III; LA2, 174; LA6, 1135-1139; AF Asyut, Hapdjefa tomb MK; TFC Thutmose III)",
              "tags": "wag"
          },
          {
              "id": 696,
              "action": "Feast of Shu and Tefnut, Day 2 of 5 (TFC Esna)",
              "tags": "tefnut shu"
          },
          {
              "id": 697,
              "action": "Feast of Thoth (LA6, 523; TFC Medinet Habu Ramses II and Ramses III; TFC Kom Ombo Ptolemy VI; TFC Esna; AF Medinet Habu Ramses III; LA2, 174 MK; Hermopolis, Roeder 1959 plate 6)",
              "tags": "thoth"
          },
          {
              "id": 698,
              "action": "Appearance of Horus (TFC Kom Ombo Ptolemy VI)",
              "tags": "horus"
          },
          {
              "id": 699,
              "action": "Festival of Drunkenness, Day 2 of 5 (LA, Edfu and Dendera)",
              "tags": "drunkenness"
          },
          {
              "id": 700,
              "action": "Feast of Hedjhotep-as-Thoth (LGG5, 602; Tebtunis 171)",
              "tags": "hedjhotep-as-thoth"
          },
          {
              "id": 701,
              "action": "Festival of Geb as a greyhound (LGG7, 502; Leitz in FS Westendorf 1994, 103-117; Tebtunis 171 and plate 20)",
              "tags": "geb as greyhound"
          },
          {
              "id": 702,
              "action": "This is the Thoth festival mentioned earlier as a major annual festival. In the Old Kingdom, it probably opened Wag Festival (LA6, 523). Victory wreaths called 'wreaths of the true-of-voice' were given to the dead as part of Thoth festival (Nelson 1934, 79); this wreath tradition started during the reign of Amasis (New Kingdom) and continued to the Late Period. The wreaths were made of grape, persea, olive, and acacia leaves and papyrus and lotus flowers (laurel was used in later times). They were first hung on the divine statues in the temples as an offering to the gods, then reverted from the temples, taken to the tomb chapels, and presented to the ancestors' statues as a sacred gift (Winter 1951, 33-36).",
              "tags": "probably grape papyrus major divine it earlier dead part olive offering mentioned tomb hung chapels wreath late this reign opened during temples gift continued tradition persea annual called reverted started old thoth statues wag kingdom as acacia victory were ancestors-statues festival. wreaths given sacred made lotus they true-of-voice-were . -wreaths taken presented amasis first an then leaves flowers period."
          }
      ],
      [
          {
              "id": 708,
              "action": "Feast of Shu and Tefnut, Day 3 of 5 (TFC Edfu)",
              "tags": "tefnut shu"
          },
          {
              "id": 709,
              "action": "Feast of the Purification of Ra (TFC Dendera)",
              "tags": "purification ra"
          },
          {
              "id": 710,
              "action": "Feast of the Drunkenness of Hathor-Sekhmet (LA2, 174; AF; TFC Dendera; Illahun MK)",
              "tags": "drunkenness hathor-sekhmet"
          },
          {
              "id": 711,
              "action": "Feast of Hathor (CC2)",
              "tags": "hathor"
          },
          {
              "id": 712,
              "action": "Feast of Drunkenness, Day 3 of 5 (LA Edfu and Dendera); \"Eating honey and figs on the feast of Tekhy\" (LA2, 174)",
              "tags": "drunkenness tekhy eating figs honey"
          },
          {
              "id": 713,
              "action": "At Edfu, the Drunkenness festival was celebrated from 18-20 Thoth and conflated with the Festival of Shu and Tefnut (\"the festival of Shu and Tefnut, the day on which the Udjat Eye is filled and the sister comes […] the menu-brew is offered to Hathor on this day\" (Alliot 1949, 221).",
              "tags": ". this drunkenness celebrated tefnut hathor with shu day edfu offered thoth conflated at menu-brew was"
          }
      ],
      [
          {
              "id": 719,
              "action": "Feast of Shu and Tefnut, Day 4 of 5 (TFC Edfu)",
              "tags": "tefnut shu"
          },
          {
              "id": 720,
              "action": "Feast of Osiris (TFC Ramses II; LGG2, 530; Leitz TW 440; CC2)",
              "tags": "osiris"
          },
          {
              "id": 721,
              "action": "Feast of Drunkenness, Day 4 of 5 (LA Edfu and Dendera)",
              "tags": "drunkenness"
          },
          {
              "id": 722,
              "action": "Feast of Hathor (LGG5, 76; Leitz TW 440)",
              "tags": "hathor"
          }
      ],
      [
          {
              "id": 729,
              "action": "Feast of Shu and Tefnut, Day 5 (final) (TFC Edfu)",
              "tags": "tefnut shu"
          },
          {
              "id": 730,
              "action": "Feast of Drunkenness, Day 5 (final) (LA Edfu and Dendera)",
              "tags": "drunkenness"
          },
          {
              "id": 731,
              "action": "Great Procession and Festival of Osiris (AF, TFC Akhmenu Thutmose III; TFC Medinet Habu Ramses II and Ramses III; Abydos MK; Illahun MK)",
              "tags": "great osiris"
          },
          {
              "id": 732,
              "action": "Procession of Anubis (LA6, 863)",
              "tags": "anubis"
          },
          {
              "id": 733,
              "action": "Feast of Anubis in Idi (Dendera location) (TFC Edfu)",
              "tags": "anubis idi"
          },
          {
              "id": 734,
              "action": "Feast/Procession of Wepwawet (CC; MK Abydos; LGG2, 343; Leitz TW 440; called peret-tepet or \"going out at the head\"/\"proceeding in front,\" in LA2, 929ff)",
              "tags": "wepwawet feast"
          },
          {
              "id": 735,
              "action": "Haker Festival (LA2, 929; Urk V, 124.5-12)",
              "tags": "haker"
          },
          {
              "id": 736,
              "action": "Haker Festival is also called \"the night of sleep\" or \"the sleep of Battling Horus\" in Abydos from the Middle Kingdom to Dynasty 18 in the New Kingdom. It included a feast of Osiris, a victory dance, and a procession of Wepwawet (LA2, 929).",
              "tags": "dance sleep it also horus included called abydos middle battling kingdom or victory osiris kingdom. wepwawet new haker . dynasty"
          }
      ],
      [
          {
              "id": 744,
              "action": "Feast of Anubis (CC2; LGG1, 391; Leitz TW 440)",
              "tags": "anubis"
          },
          {
              "id": 745,
              "action": "\"Day of offering\" (all other information has been lost; TFC Akhmenu, Thutmose III)",
              "tags": "offering day"
          }
      ],
      [
          {
              "id": 750,
              "action": "Feast of Osiris (TFC Ramses 2; CC2; Leitz TW 440)",
              "tags": "osiris"
          },
          {
              "id": 751,
              "action": "Procession of Sekhmet (LGG6, 558; Leitz TW 51)",
              "tags": "sekhmet"
          }
      ],
      [
          {
              "id": 759,
              "action": "Feast of the Eldest Daughter (epithet of Isis) (CC2)",
              "tags": "eldest daughter"
          },
          {
              "id": 760,
              "action": "Sekhmet Repels the Associates of Set (LGG6, 319; Leitz TW 51)",
              "tags": "sekhmet repels set associates"
          }
      ],
      [
          {
              "id": 767,
              "action": "Great Feast of Amun (TFC Akhmenu Thutmose III)",
              "tags": "amun great"
          },
          {
              "id": 768,
              "action": "\"Day of the Eve of Amun's Festivals in Karnak\" (LA, Urk IV 770, 3)",
              "tags": "karnak day amun eve festivals"
          },
          {
              "id": 769,
              "action": "Feast of Heka (CC2; Leitz TW 440)",
              "tags": "heka"
          },
          {
              "id": 770,
              "action": "Day of Harsiese's Fighting with Set (CC)",
              "tags": "with fighting day harsiese set"
          },
          {
              "id": 771,
              "action": "\"Feast of Amun and Offerings to Ptah-South-of-His-Wall\" (LA, AF, TFC Akhmenu Thutmose III)",
              "tags": "ptah-south-of-his-wall amun"
          }
      ],
      [
          {
              "id": 777,
              "action": "Feast of Nekhbet (CC2; LGG4, 301; Leitz TW 440)",
              "tags": "nekhbet"
          },
          {
              "id": 778,
              "action": "Peace between Horus and Set (CC; LGG2, 170; Leitz TW 58)",
              "tags": "between horus peace set"
          },
          {
              "id": 779,
              "action": "Feast of Amun (Urk IV 770; LA; TFC Akhmenu Thutmose III)",
              "tags": "amun"
          }
      ],
      [
          {
              "id": 786,
              "action": "Khonsu (LGG5, 762, Dendera Mammisi)",
              "tags": "khonsu"
          },
          {
              "id": 787,
              "action": "Khonsu-of-Thebes (LGG5, 764, Dendera and Dendera Mammisi)",
              "tags": "khonsu-of-thebes"
          },
          {
              "id": 788,
              "action": "Khonsu-in-Thebes-Neferhotep (LGG5, 765, Dendera)",
              "tags": "khonsu-in-thebes-neferhotep"
          },
          {
              "id": 789,
              "action": "Khendet (\"Weaver,\" maidservant of Neith) (LGG5, 944; Leitz TW 440)",
              "tags": "khendet"
          },
          {
              "id": 790,
              "action": "Hathor, Beloved of the Two Lords (LGG3, 348, Dendera and Dendera Mammisi)",
              "tags": "beloved lords hathor two"
          },
          {
              "id": 791,
              "action": "Hathor, Lady of the Festival (LGG4, 104, Edfu)",
              "tags": "hathor"
          },
          {
              "id": 792,
              "action": "Offerings to Amun, Mut, and Khonsu of Isheru (TFC Dendera, Edfu)",
              "tags": "amun mut khonsu isheru"
          }
      ],
      [
          {
              "id": 798,
              "action": "Feast of Khnum (CC2; Leitz TW 442)",
              "tags": "khnum"
          },
          {
              "id": 799,
              "action": "Appearance (Oracle) of Amunhotep I, Day 1 of 2 (AF oCairo 25275 from the Valley of the Kings; LA2, 184)",
              "tags": "amunhotep"
          }
      ],
      [
          {
              "id": 805,
              "action": "House of Ra, House of Osiris, House of Horus (Last Day of the Month)",
              "tags": "horus osiris ra"
          },
          {
              "id": 806,
              "action": "Feast of Osiris and His Great Nine (TFC Ramses II; CC2; LGG2, 530 and 542)",
              "tags": "nine great osiris"
          },
          {
              "id": 807,
              "action": "Offerings to Osiris \"whom the beetle attacks from the inside\" (pMMA 35.9.21 Late Period, LGG5, 64)",
              "tags": "beetle whom osiris attacks inside"
          },
          {
              "id": 808,
              "action": "Counting Up the Offerings to Harpocrates, Ruler of Thrones (pMMA 35.9.21, LV, 16; LGG5, 514)",
              "tags": "thrones harpocrates up counting ruler"
          },
          {
              "id": 809,
              "action": "Appearance (Oracle) of Amunhotep I, Day 2 of 2 (AF oCairo 25275 from the Valley of the Kings; LA2, 184)",
              "tags": "amunhotep"
          },
          {
              "id": 810,
              "action": "Libations for the Gods in their Chapels (LGG4, 382, Dendera; some sources read II Akhet 30 for this entry)",
              "tags": "libations their chapels"
          }
      ],
      [
          {
              "id": 816,
              "action": "First Day of the Month",
              "tags": "month first"
          },
          {
              "id": 817,
              "action": "Guarding the Eye of Horus/Jubilation of the Great Nine (TFC Kom Ombo; TFC Esna; CC)",
              "tags": "horus great eye jubilation nine guarding"
          },
          {
              "id": 818,
              "action": "Feast of Wadjet (CC2)",
              "tags": "wadjet"
          },
          {
              "id": 819,
              "action": "Feast of Heka (LGG5, 553, Esna; TFC Esna)",
              "tags": "heka"
          }
      ],
      [
          {
              "id": 824,
              "action": "Appearance of Horus of Kom Ombo, Day 1 of 2 (TFC Kom Ombo Ptolemy VI)",
              "tags": "ombo horus kom"
          },
          {
              "id": 825,
              "action": "Procession of Sobek \"to see his mother Neith,\" Day 1 of 2 (CC)",
              "tags": "neith sobek mother to see"
          },
          {
              "id": 826,
              "action": "Feast of Thoth, Day 1 of 2 (CC2)",
              "tags": "thoth"
          },
          {
              "id": 827,
              "action": "Feast of Renenutet (LA2 Philae; Junker-Winter, Philae II, 305, 15)",
              "tags": "renenutet"
          },
          {
              "id": 828,
              "action": "Birthday of Harsiese (LA2, 477, Philae only)",
              "tags": "birthday harsiese"
          }
      ],
      [
          {
              "id": 836,
              "action": "Procession of Sobek \"to see his mother Neith,\" Day 2 of 2 (CC)",
              "tags": "neith sobek mother to see"
          },
          {
              "id": 837,
              "action": "Festival of Thoth, Day 2 of 2 (CC; CC2; LGG5)",
              "tags": "thoth"
          },
          {
              "id": 838,
              "action": "Festival of Sobek of Kom Ombo (TFC Kom Ombo Ptolemy VI)",
              "tags": "sobek ombo kom"
          },
          {
              "id": 839,
              "action": "Festival of Min of Coptos, Lord of the Two Lands (TFC Kom Ombo Ptolemy VI)",
              "tags": "min lands lord two coptos"
          },
          {
              "id": 840,
              "action": "Appearance of Horus of Kom Ombo (TFC Kom Ombo Ptolemy VI)",
              "tags": "ombo horus kom"
          },
          {
              "id": 841,
              "action": "Feast of Horus, Foremost in Letopolis (LA3, 43, Edfu and Kom Ombo)",
              "tags": "foremost horus letopolis"
          },
          {
              "id": 842,
              "action": "Appearance of the Standard of Haroeris (TFC Kom Ombo Ptolemy VI)",
              "tags": "standard haroeris"
          },
          {
              "id": 843,
              "action": "Appearance of Tasenetnofret (TFC Kom Ombo Ptolemy VI)",
              "tags": "tasenetnofret"
          }
      ],
      [
          {
              "id": 849,
              "action": "Feast of Gembaues of Esna (TFC Esna; CC; CC2; LGG7)",
              "tags": "esna gembaues"
          },
          {
              "id": 850,
              "action": "Anubis Inspects the Embalming Tents ( w'abet ) (CC)",
              "tags": "anubis inspects tents embalming"
          },
          {
              "id": 851,
              "action": "\"Festival of Gembaues; it is thanks to his (i.e., Anubis') power that the Eye of Horus was found on the eastern mountain. The goddess of this day is Nebtu, who has dread of hunger and thirst. Making the procession of this goddess as well as […] in her presence; returning to her temple at nighttime.\" (TFC Esna)",
              "tags": "returning well it nebtu mountain. thanks eastern horus this dread making thirst. thisis has found as presence gembaues was power hunger eye that temple nighttime. goddess"
          }
      ],
      [
          {
              "id": 858,
              "action": "Appearance of Min (TFC P6 Kom Ombo)",
              "tags": "min"
          },
          {
              "id": 859,
              "action": "Procession of Hathor and Her Ennead (TFC Edfu)",
              "tags": "hathor ennead"
          },
          {
              "id": 860,
              "action": "Feast of Osiris and His Ennead (TFC Ramses II; CC2; LGG2, 530; Leitz TW 442, Dendera Mammisi)",
              "tags": "ennead osiris"
          },
          {
              "id": 861,
              "action": "Offering in the Presence of Hedjhotep and Montu (CC)",
              "tags": "presence offering montu hedjhotep"
          }
      ],
      [
          {
              "id": 865,
              "action": "Sixth-Day Festival",
              "tags": "sixth-day festival"
          },
          {
              "id": 866,
              "action": "Feast of Menhyt (TFC Esna)",
              "tags": "menhyt"
          },
          {
              "id": 867,
              "action": "Feast of Isis the Great, Lady of the Two Lands (TFC Esna; TFC Edfu)",
              "tags": "lands two great isis"
          },
          {
              "id": 868,
              "action": "Feast of Nekhbet (CC2; Leitz TW 442; LGG4, 301)",
              "tags": "nekhbet"
          }
      ],
      [
          {
              "id": 876,
              "action": "Appearance of Tasenetnofret and Hathor, Day 1 of 4 (TFC Kom Ombo Ptolemy VI)",
              "tags": "hathor tasenetnofret"
          },
          {
              "id": 877,
              "action": "Appearance of Min, Day 1 of 4 (TFC Kom Ombo Ptolemy VI)",
              "tags": "min"
          },
          {
              "id": 878,
              "action": "Feast of the Eye of Horus/The Red One (the Red Crown) (CC2; LGG1, 432; Leitz TW 306; LGG7, 574)",
              "tags": "one horus eye red"
          },
          {
              "id": 879,
              "action": "Festival of Sobek, Lord of Kom Ishqau (LGG3, 609; Leitz TW 432)",
              "tags": "sobek kom lord ishqau"
          }
      ],
      [
          {
              "id": 885,
              "action": "Procession of Hathor (TFC Edfu; LA2, 1036)",
              "tags": "hathor"
          }
      ],
      [
          {
              "id": 891,
              "action": "Navigation of the Barque of Horus of Behdet (TFC Edfu)",
              "tags": "barque horus navigation behdet"
          },
          {
              "id": 892,
              "action": "Navigation of the Barque of Haroeris (TFC Kom Ombo Ptolemy VI)",
              "tags": "barque navigation haroeris"
          },
          {
              "id": 893,
              "action": "Feast of Khnum (CC2)",
              "tags": "khnum"
          }
      ],
      [
          {
              "id": 900,
              "action": "Appearance of Bast of Ankhtawy (\"Life-of-Two-Lands,\" the Memphis necropolis) (CC)",
              "tags": "ankhtawy bast"
          },
          {
              "id": 901,
              "action": "Feast of Bennen-Atum (cosmic snake; CC2; LGG2, 802; Leitz TW 442)",
              "tags": "bennen-atum"
          }
      ],
      [
          {
              "id": 905,
              "action": "Feast of Duamutef (LGG7, 516; Leitz TW 443; CC2)",
              "tags": "duamutef"
          }
      ],
      [
          {
              "id": 910,
              "action": "Feast of Qebshenuef (CC2; LGG7, 181; Leitz TW 443)",
              "tags": "qebshenuef"
          }
      ],
      [
          {
              "id": 916,
              "action": "Feast of Imsety (CC2; LGG1, 368; Leitz TW 443)",
              "tags": "imsety"
          },
          {
              "id": 917,
              "action": "Feast of Bast of Bubastis (LA2, 629, Late Period)",
              "tags": "bubastis bast"
          }
      ],
      [
          {
              "id": 922,
              "action": "Feast of Hapy (CC2; Leitz TW 443)",
              "tags": "hapy"
          },
          {
              "id": 923,
              "action": "Procession of Khnum-Ra (TFC Esna)",
              "tags": "khnum-ra"
          },
          {
              "id": 924,
              "action": "Horus Receives the White Crown (CC)",
              "tags": "crown receives horus white"
          }
      ],
      [
          {
              "id": 931,
              "action": "Feast of Isis (CC2)",
              "tags": "isis"
          },
          {
              "id": 932,
              "action": "Appearance of Ra, \"at night, with His followers\" (CC)",
              "tags": "night with followers ra at"
          },
          {
              "id": 933,
              "action": "Procession of Tefnut, Daughter of Ra (LGG6, 107; Leitz TW 83)",
              "tags": "daughter ra tefnut"
          },
          {
              "id": 934,
              "action": "Feast of the Half-Month",
              "tags": "half-month"
          }
      ],
      [
          {
              "id": 941,
              "action": "Feast of Neith (TFC Esna)",
              "tags": "neith"
          },
          {
              "id": 942,
              "action": "Feast of Osiris and His Ennead (TFC Ramses II; CC)",
              "tags": "ennead osiris"
          },
          {
              "id": 943,
              "action": "Feast of the Eye of Horus (CC2)",
              "tags": "horus eye"
          }
      ],
      [
          {
              "id": 947,
              "action": "Feast of Khesa (\"the unanointed one,\" form of Osiris) (CC2)",
              "tags": "khesa"
          },
          {
              "id": 948,
              "action": "Feast of 17-23 Paenopet (II Akhet's Late Egyptian name), Day 1 of 7 (CC)",
              "tags": "paenopet"
          },
          {
              "id": 949,
              "action": "Feast of Clothing (also held on II Akhet 27, LA2, 175; Niuserre MK)",
              "tags": "clothing"
          },
          {
              "id": 950,
              "action": "The Festival of 17-23 Paenopet marks both the halfway point of the Inundation season, and the Autumnal Equinox, when the Wandering Goddess, Who began her trek southward at the Summer Solstice, has \"entered Nubia,\" and the sunlight of each day noticeably decreases in the northern hemisphere where Egypt is.",
              "tags": "point summer southward sunlight egypt inundation both decreases when nubia has wandering season where marks solstice equinox trek is. northern halfway eachnoticeably began autumnal entered paenopet hemisphere goddess"
          }
      ],
      [
          {
              "id": 956,
              "action": "Feast of Khnum and Anukis (TFC Elephantine Thutmose III; LA2, 182; AF; LA1, 334)",
              "tags": "khnum anukis"
          },
          {
              "id": 957,
              "action": "Feast of Meret of Hur-weret (CC2)",
              "tags": "hur-weret meret"
          },
          {
              "id": 958,
              "action": "Feast of 17-23 Paenopet, Day 2 of 7 (CC)",
              "tags": "paenopet"
          }
      ],
      [
          {
              "id": 963,
              "action": "Feast of Ptah, Lord of the Workshop (CC2; LGG3, 698; Leitz TW 443)",
              "tags": "lord ptah workshop"
          },
          {
              "id": 964,
              "action": "Nun Establishes the Djed (CC; LGG7, 48; Leitz TW 89)",
              "tags": "establishes djed nun"
          },
          {
              "id": 965,
              "action": "Processions of Hathor (until III Akhet 3) (TFC Edfu; LA2, 1036)",
              "tags": "hathor processions"
          },
          {
              "id": 966,
              "action": "Feast of 17-23 Paenopet, Day 3 of 7 (CC)",
              "tags": "paenopet"
          }
      ],
      [
          {
              "id": 973,
              "action": "Feast of Harsiese and Set (CC2)",
              "tags": "set harsiese"
          },
          {
              "id": 974,
              "action": "Feast of 17-23 Paenopet, Day 4 of 7 (CC)",
              "tags": "paenopet"
          }
      ],
      [
          {
              "id": 979,
              "action": "Procession of Meret (Neith-Meret) (LGG3, 156; Leitz TW 92)",
              "tags": "meret"
          },
          {
              "id": 980,
              "action": "Feast of 17-23 Paenopet, Day 5 of 7 (CC)",
              "tags": "paenopet"
          }
      ],
      [
          {
              "id": 984,
              "action": "Feast of 17-23 Paenopet, Day 6 of 7 (CC)",
              "tags": "paenopet"
          }
      ],
      [
          {
              "id": 990,
              "action": "Feast of 17-23 Paenopet, Day 7 (final) (CC)",
              "tags": "paenopet"
          }
      ],
      [
          {
              "id": 994,
              "action": "Offering-Presentations on the Lake of Anubis (eventually merged with the Festival of Gembaues and its procession of Setem priests; see festival notes from II Akhet 4, also given as Gembaues in some sources; LA, Middle Kingdom celebration)",
              "tags": "lake anubis offering-presentations"
          }
      ],
      [
          {
              "id": 1000,
              "action": "Feast of Ptah, Lord of Memphis, South of His Wall (TFC Esna; LA2, 175 Ramses II attribution)",
              "tags": "lord ptah south wall memphis"
          },
          {
              "id": 1001,
              "action": "Feast of Heka (TFC Esna; LGG5, 553)",
              "tags": "heka"
          }
      ],
      [
          {
              "id": 1006,
              "action": "Feast of Sokar (TFC Illahun MK)",
              "tags": "sokar"
          },
          {
              "id": 1007,
              "action": "\"Opening and Sealing the Palace Windows of Busiris\" (CC)",
              "tags": "opening busiris sealing palace windows"
          }
      ],
      [
          {
              "id": 1013,
              "action": "Feast of Montu of Medamud and Harendotes, Day 1 of 2 (TFC Dynasty 13 Theban court accounts; AF Dynasty 13 Theban court accounts; Scharff, ÄZ 57 (1922)",
              "tags": "harendotes montu medamud"
          },
          {
              "id": 1014,
              "action": "Feast of Clothing (also held on II Akhet 17; TFC Niuserre)",
              "tags": "clothing"
          }
      ],
      [
          {
              "id": 1019,
              "action": "Feast of Montu of Medamud and Harendotes, Day 2 of 2 (TFC Dynasty 13 Theban court accounts; AF Dynasty 13 Theban court accounts; Scharff, ÄZ 57 (1922)",
              "tags": "harendotes montu medamud"
          },
          {
              "id": 1020,
              "action": "Feast of Satis and Anukis (TFC Elephantine Thutmose III; LA, AF multiple days, lost; LA2, 182; LA1, 334)",
              "tags": "anukis satis"
          },
          {
              "id": 1021,
              "action": "Feast of Menhyt-Nebtu (TFC Esna)",
              "tags": "menhyt-nebtu"
          }
      ],
      [
          {
              "id": 0,
              "action": "No Festivals Today",
              "tags": "none"
          }
      ],
      [
          {
              "id": 1028,
              "action": "House of Ra, House of Osiris, House of Horus (Last Day of the Month)",
              "tags": "horus osiris ra"
          },
          {
              "id": 1029,
              "action": "Feast of Horus as the Winged Disk (TFC Edfu)",
              "tags": "winged horus as disk"
          },
          {
              "id": 1030,
              "action": "Procession of Harsomtus, Lord of Khadi, Day 1 of 3 (TFC Dendera)",
              "tags": "harsomtus khadi lord"
          },
          {
              "id": 1031,
              "action": "Feast of Horus the Great Scepter (LGG5, 599, Edfu)",
              "tags": "scepter horus great"
          },
          {
              "id": 1032,
              "action": "Libations for the Gods in Their Chapels (LGG4, 382, Dendera; some sources read I Akhet 30 for this entry)",
              "tags": "libations their chapels"
          }
      ],
      [
          {
              "id": 1037,
              "action": "First Day of the Month",
              "tags": "month first"
          },
          {
              "id": 1038,
              "action": "Appearance of Harsiese (to Day 30) (TFC Kom Ombo)Feast of Hathor-Nut and the Members of Heaven (to Day 30) (TFC Dendera small calendar; CC; LA Niuserre; Leitz TW 109)",
              "tags": "members hathor-nut heaven harsiese"
          },
          {
              "id": 1039,
              "action": "Feast of Sekhmet and the Standards of Khnum, Neith, and Nebtu (TFC Esna)",
              "tags": "neith nebtu sekhmet standards khnum"
          },
          {
              "id": 1040,
              "action": "Procession of Harsomtus, Lord of Khadi, Day 2 of 3 (TFC Dendera)",
              "tags": "harsomtus khadi lord"
          }
      ],
      [
          {
              "id": 1044,
              "action": "Procession of Harsomtus, Lord of Khadi, Day 3 of 3 (TFC Dendera)",
              "tags": "harsomtus khadi lord"
          },
          {
              "id": 1045,
              "action": "Return of Wadjet from Buto to the Gods of the Chapel (CC; LGG4, 549; Leitz TW 109)",
              "tags": "return buto wadjet chapel"
          },
          {
              "id": 1046,
              "action": "Return of Mut (AF, Piye Victory Stela)",
              "tags": "return mut"
          }
      ],
      [
          {
              "id": 1051,
              "action": "Festival of Wadjet (LGG2, 271)",
              "tags": "wadjet"
          }
      ],
      [
          {
              "id": 1057,
              "action": "Founding at Coptos (TFC Kom Ombo Ptolemy VI)",
              "tags": "founding coptos"
          }
      ],
      [
          {
              "id": 0,
              "action": "No Festivals Today",
              "tags": "none"
          }
      ],
      [
          {
              "id": 1068,
              "action": "Sixth-Day Festival",
              "tags": "sixth-day festival"
          },
          {
              "id": 1069,
              "action": "Encouraging the Gods of the Two Lands (CC)",
              "tags": "two lands encouraging"
          }
      ],
      [
          {
              "id": 1074,
              "action": "Birthday of Soknopaios (form of Sobek) (LA5, 1076)",
              "tags": "birthday soknopaios"
          }
      ],
      [
          {
              "id": 1079,
              "action": "Procession of Isis (CC)",
              "tags": "isis"
          }
      ],
      [
          {
              "id": 1084,
              "action": "Feast of Amun, Day 1 of 2 (TFC Elephantine Thutmose III; AF; Urk IV, 824)",
              "tags": "amun"
          }
      ],
      [
          {
              "id": 1088,
              "action": "Feast of Amun, Day 2 of 2 (TFC Elephantine Thutmose III; Urk IV, 824)",
              "tags": "amun"
          },
          {
              "id": 1089,
              "action": "Feast of Neith and Tithoes (LA6, 602; Esna V, 11)",
              "tags": "neith tithoes"
          }
      ],
      [
          {
              "id": 0,
              "action": "No Festivals Today",
              "tags": "none"
          }
      ],
      [
          {
              "id": 1097,
              "action": "Pacification of the Hearts of the Gods, Wherever They Are (CC)",
              "tags": "hearts pacification wherever they"
          }
      ],
      [
          {
              "id": 1103,
              "action": "\"Osiris Sails to Abydos\"/Neshmet Arrives in Abydos (TFC Ramses II; CC)",
              "tags": "osiris arrives abydos sails neshmet"
          }
      ],
      [
          {
              "id": 0,
              "action": "No Festivals Today",
              "tags": "none"
          }
      ],
      [
          {
              "id": 1116,
              "action": "Feast of the Half-Month",
              "tags": "half-month"
          }
      ],
      [
          {
              "id": 1120,
              "action": "Appearance of Thoth (CC; LGG2, 472; Leitz TW 124)",
              "tags": "thoth"
          }
      ],
      [
          {
              "id": 1124,
              "action": "Lamentations of Isis and Nephthys at Sais (CC; TFC Ramses II)",
              "tags": "sais isis lamentations nephthys"
          },
          {
              "id": 1125,
              "action": "Landing of the Greater and Lesser Enneads at Abydos (TFC Ramses II; CC; LGG2, 475; Leitz TW 126)",
              "tags": "landing enneads greater abydos lesser"
          }
      ],
      [
          {
              "id": 0,
              "action": "No Festivals Today",
              "tags": "none"
          }
      ],
      [
          {
              "id": 1133,
              "action": "Oracle Procession of Amunhotep I (LGG1, 333; oLouvre 694/2: KRI VII, 284, 5)",
              "tags": "amunhotep"
          },
          {
              "id": 1134,
              "action": "\"Feast of the Red Bandage (?)\" (TFC Esna)",
              "tags": "red bandage"
          }
      ],
      [
          {
              "id": 1137,
              "action": "Procession of Bast-Lady-of-Ankhtawy in front of Ra (CC; LGG2, 740; Leitz TW 134)",
              "tags": "ra bast-lady-of-ankhtawy front"
          },
          {
              "id": 1138,
              "action": "Feast of Hathor of the Heden-plants (TFC Illahun MK; LGG4, 93, Edfu)",
              "tags": "heden-plants hathor"
          }
      ],
      [
          {
              "id": 1142,
              "action": "Feast of Shu, Son of Ra (CC)",
              "tags": "son ra shu"
          },
          {
              "id": 1143,
              "action": "Day of Renenutet and Neith in the Evening-Barque (CC)",
              "tags": "neith renenutet evening-barque day"
          },
          {
              "id": 1144,
              "action": "Feast of Hathor of Dendera, Day 1 of 2 (LGG5, 76, Dendera)",
              "tags": "hathor dendera"
          }
      ],
      [
          {
              "id": 1147,
              "action": "Feast of Heka (TFC Esna; LGG5, 553, Esna)",
              "tags": "heka"
          },
          {
              "id": 1148,
              "action": "Feast of Hathor of Dendera, Day 2 of 2 (LGG5, 76, Dendera)",
              "tags": "hathor dendera"
          }
      ],
      [
          {
              "id": 1153,
              "action": "Feasts of Khonsu and Seshat (TFC Kom Ombo Ptolemy VI)",
              "tags": "feasts khonsu seshat"
          },
          {
              "id": 1154,
              "action": "Feast of Sekhet (field-spirits) (TFC)",
              "tags": "sekhet"
          },
          {
              "id": 1155,
              "action": "Procession of Nebtu and Khnum, Day 1 of 4 (TFC Esna; LGG4, 35)",
              "tags": "khnum nebtu"
          }
      ],
      [
          {
              "id": 1160,
              "action": "Procession of Isis and Nephthys in Jubilation (CC)",
              "tags": "jubilation isis nephthys"
          },
          {
              "id": 1161,
              "action": "Procession of Nebtu and Khnum, Day 2 of 4 (TFC Esna; LGG4, 35)",
              "tags": "khnum nebtu"
          },
          {
              "id": 1162,
              "action": "Horus Welcomes the Nile, Day 1 of 5 (Richter 2003, 34; Alliot 1949, 208, 278-279; Wilson 1997, 404)",
              "tags": "welcomes horus nile"
          },
          {
              "id": 1163,
              "action": "Feast of Hathor (LGG5, 76, Dendera)",
              "tags": "hathor"
          }
      ],
      [
          {
              "id": 1168,
              "action": "Procession of Nebtu and Khnum, Day 3 of 4 (TFC Esna; LGG4, 35)",
              "tags": "khnum nebtu"
          },
          {
              "id": 1169,
              "action": "Horus Welcomes the Nile, Day 2 of 5 (Richter 2003, 34; Alliot 1949, 208, 278-279; Wilson 1997, 404)",
              "tags": "welcomes horus nile"
          },
          {
              "id": 1170,
              "action": "\"Shu son of Ra […] Khnum, Lord of the Countryside\" (TFC Esna)",
              "tags": "lord son shu countryside khnum ra"
          }
      ],
      [
          {
              "id": 1175,
              "action": "Procession of Nebtu and Khnum, Day 4 (final) (TFC Esna; LGG4, 35)",
              "tags": "khnum nebtu"
          },
          {
              "id": 1176,
              "action": "Horus Welcomes the Nile, Day 3 of 5 (Richter 2003, 34; Alliot 1949, 208, 278-279; Wilson 1997, 404)",
              "tags": "welcomes horus nile"
          },
          {
              "id": 1177,
              "action": "Procession of Thoth to Judge in Ra's Presence (CC)",
              "tags": "judge thoth presence ra"
          }
      ],
      [
          {
              "id": 1181,
              "action": "Horus Welcomes the Nile, Day 4 of 5 (Richter 2003, 34; Alliot 1949, 208, 278-279; Wilson 1997, 404)",
              "tags": "welcomes horus nile"
          },
          {
              "id": 1182,
              "action": "Feast of Sokar",
              "tags": "sokar"
          },
          {
              "id": 1183,
              "action": "\"Horus and Set Are Judged by Thoth\" (CC; LGG3, 801; Leitz TW 143)",
              "tags": "thoth horus judged set"
          }
      ],
      [
          {
              "id": 1186,
              "action": "Horus Welcomes the Nile, Day 5 (final) (Richter 2003, 34; Alliot 1949, 208, 278-279; Wilson 1997 404; CC)",
              "tags": "welcomes horus nile"
          },
          {
              "id": 1187,
              "action": "Feast of Hathor (TFC Kom Ombo; LGG5, 76, Dendera)",
              "tags": "hathor"
          },
          {
              "id": 1188,
              "action": "Appearance of Horus and Hathor, Day 1 of 5 (TFC Kom Ombo)",
              "tags": "hathor horus"
          },
          {
              "id": 1189,
              "action": "Oracle of Amunhotep I, True of Voice (LA2, 184, New Kingdom)",
              "tags": "voice true amunhotep"
          },
          {
              "id": 1190,
              "action": "\"Festival of Hathor Who Lives in Kom Ombo. Causing the appearance of Horus and Hathor. Performing all the rites.\" (TFC Kom Ombo)",
              "tags": "kom horus all lives hathor. causing rites. performing ombo. hathor"
          }
      ],
      [
          {
              "id": 1195,
              "action": "Procession of Nebtu, Day 1 of 2 (TFC Esna; LGG4, 35; Esna II, 55.4)",
              "tags": "nebtu"
          },
          {
              "id": 1196,
              "action": "Procession of Horus of Behdet, Day 1 of 3 (TFC Edfu)",
              "tags": "behdet horus"
          },
          {
              "id": 1197,
              "action": "Procession of Hathor and Her Ennead, Day 1 of 3 (TFC Edfu; LA2, 1036)",
              "tags": "hathor ennead"
          },
          {
              "id": 1198,
              "action": "Procession of Wadjet, Nekhbet, and Sekhmet (CC)",
              "tags": "nekhbet sekhmet wadjet"
          },
          {
              "id": 1199,
              "action": "Appearance of Horus and Hathor, Day 2 of 5 (TFC Kom Ombo)",
              "tags": "hathor horus"
          }
      ],
      [
          {
              "id": 1203,
              "action": "House of Ra, House of Osiris, House of Horus (Last Day of the Month)",
              "tags": "horus osiris ra"
          },
          {
              "id": 1204,
              "action": "Procession of Nebtu, Day 2 (final) (TFC Esna; LGG4, 35; Esna II, 55.4)",
              "tags": "nebtu"
          },
          {
              "id": 1205,
              "action": "Procession of Horus of Behdet, Day 2 of 3 (TFC Edfu)",
              "tags": "behdet horus"
          },
          {
              "id": 1206,
              "action": "Procession of Hathor and her Ennead, Day 2 of 3 (TFC Edfu; LA2, 1036)",
              "tags": "hathor ennead"
          },
          {
              "id": 1207,
              "action": "Appearance of Horus and Hathor, Day 3 of 5 (TFC Kom Ombo)",
              "tags": "hathor horus"
          },
          {
              "id": 1208,
              "action": "Feast of Anukis (multiple days, but number of days is lost) (LA1, 334; LA2, 182; AF; Urk IV, 823; TFC Elephantine Thutmose III)",
              "tags": "anukis"
          },
          {
              "id": 1209,
              "action": "Appearance of Heka-the-Child (TFC Esna)",
              "tags": "heka-the-child"
          },
          {
              "id": 1210,
              "action": "Revealing/Opening the Breasts of the Women, Day 1 of 2 (TFC Edfu and TFC Dendera)",
              "tags": "opening breasts revealing women"
          }
      ],
      [
          {
              "id": 1216,
              "action": "First Day of the Month",
              "tags": "month first"
          },
          {
              "id": 1217,
              "action": "Procession of Horus of Behdet, Day 3 (final) (TFC Edfu)",
              "tags": "behdet horus"
          },
          {
              "id": 1218,
              "action": "Procession of Hathor and Her Ennead, Day 3 (final) (TFC Edfu; LA2, 1036)",
              "tags": "hathor ennead"
          },
          {
              "id": 1219,
              "action": "Appearance of Horus and Hathor, Day 4 of 5 (TFC Kom Ombo)",
              "tags": "hathor horus"
          },
          {
              "id": 1220,
              "action": "Appearance of Min, Lord of the Two Lands (TFC Kom Ombo Ptolemy VI)",
              "tags": "lord min two lands"
          },
          {
              "id": 1221,
              "action": "Festival Procession of Hathor (TFC Illahun; AF Kahun acrobat troupe Plate 25; LA1, 958; TFC Medinet Habu Ramses III)",
              "tags": "hathor"
          },
          {
              "id": 1222,
              "action": "Procession of Khnum-Ra, Day 1 of 6 (TFC Esna; LA4, 363-364)",
              "tags": "khnum-ra"
          },
          {
              "id": 1223,
              "action": "Revealing/Opening the Breasts of the Women, Day 2 (final) (TFC Edfu and TFC Dendera)",
              "tags": "opening breasts revealing women"
          },
          {
              "id": 1224,
              "action": "Purification of Nun (CC; Leitz TW 147)",
              "tags": "purification nun"
          },
          {
              "id": 1225,
              "action": "Festival of Tatenen the Great (LGG7, 348, Esna; Esna III, 346)",
              "tags": "great tatenen"
          },
          {
              "id": 1226,
              "action": "\"Festival of Hathor, offerings for Amun-Ra with his ennead and the portable image of Ramses III.\" (TFC Medinet Habu Ramses III)",
              "tags": "iii. ramses ennead with portable image hathor amun-ra"
          }
      ],
      [
          {
              "id": 1231,
              "action": "Appearance of Hathor and Horus, Day 5 (final) (TFC Kom Ombo)",
              "tags": "hathor horus"
          },
          {
              "id": 1232,
              "action": "Procession of Khnum-Ra, Day 2 of 6 (TFC Esna; LA4, 363-364)",
              "tags": "khnum-ra"
          }
      ],
      [
          {
              "id": 1237,
              "action": "Procession of Khnum-Ra, Day 3 of 6 (TFC Esna; LA4, 363-364)",
              "tags": "khnum-ra"
          }
      ],
      [
          {
              "id": 1241,
              "action": "Feast of Sokar (CC)",
              "tags": "sokar"
          },
          {
              "id": 1242,
              "action": "Procession of Khnum-Ra, Day 4 of 6 (TFC Esna; LA4, 363-364)",
              "tags": "khnum-ra"
          },
          {
              "id": 1243,
              "action": "Procession of Nebtu and Her Following (TFC Esna)",
              "tags": "following nebtu"
          }
      ],
      [
          {
              "id": 1247,
              "action": "Feast of the Winged Disk, Day 1 of 3 (TFC Edfu)",
              "tags": "winged disk"
          },
          {
              "id": 1248,
              "action": "Feast of the Soaring Falcon, Day 1 of 16 (TFC Edfu)",
              "tags": "soaring falcon"
          },
          {
              "id": 1249,
              "action": "Procession of Heka-the-Child (TFC Esna)",
              "tags": "heka-the-child"
          },
          {
              "id": 1250,
              "action": "Procession of Hathor, Foremost of Horns (CC)",
              "tags": "horns hathor foremost"
          },
          {
              "id": 1251,
              "action": "Procession of Khnum-Ra, Day 5 of 6 (TFC Esna; LA4, 363-364)",
              "tags": "khnum-ra"
          }
      ],
      [
          {
              "id": 1255,
              "action": "Sixth-Day Festival",
              "tags": "sixth-day festival"
          },
          {
              "id": 1256,
              "action": "Winged Disk, Day 2 of 3 (TFC Edfu)",
              "tags": "winged disk"
          },
          {
              "id": 1257,
              "action": "Soaring Falcon, Day 2 of 16 (TFC Edfu)",
              "tags": "soaring falcon"
          },
          {
              "id": 1258,
              "action": "Procession of Khnum-Ra, Day 6 (final) (TFC Esna; LA4, 363-364)",
              "tags": "khnum-ra"
          }
      ],
      [
          {
              "id": 1263,
              "action": "Winged Disk, Day 3 (final) (TFC Edfu)",
              "tags": "winged disk"
          },
          {
              "id": 1264,
              "action": "Soaring Falcon, Day 3 of 16 (TFC Edfu)",
              "tags": "soaring falcon"
          },
          {
              "id": 1265,
              "action": "Feast of Renenutet (LA, Late Period)",
              "tags": "renenutet"
          }
      ],
      [
          {
              "id": 1271,
              "action": "Soaring Falcon, Day 4 of 16 (TFC Edfu)",
              "tags": "soaring falcon"
          },
          {
              "id": 1272,
              "action": "Feast of the Marriage of Isis-Nepherses, Great Goddess of Heaven (Bricault 527; may have lasted nine days)",
              "tags": "isis-nepherses great heaven marriage goddess"
          }
      ],
      [
          {
              "id": 1276,
              "action": "Procession of Sokar (?) and Hathor (TFC Edfu)",
              "tags": "hathor sokar"
          },
          {
              "id": 1277,
              "action": "Soaring Falcon, Day 5 of 16 (TFC Edfu)",
              "tags": "soaring falcon"
          },
          {
              "id": 1278,
              "action": "Killing the Enemy of Set (CC; Leitz TW 157; LGG5, 638)",
              "tags": "killing enemy set"
          }
      ],
      [
          {
              "id": 1282,
              "action": "Soaring Falcon, Day 6 of 16 (TFC Edfu)",
              "tags": "soaring falcon"
          }
      ],
      [
          {
              "id": 1286,
              "action": "Feast of Osiris in the Neshmet Boat (TFC Ramses II; CC; AF Abydos)",
              "tags": "boat neshmet osiris"
          },
          {
              "id": 1287,
              "action": "Soaring Falcon, Day 7 of 16 (TFC Edfu)",
              "tags": "soaring falcon"
          },
          {
              "id": 1288,
              "action": "Feast of Khnum (TFC Esna)",
              "tags": "khnum"
          },
          {
              "id": 1289,
              "action": "Feast of Min (TFC Kom Ombo Ptolemy VI)",
              "tags": "min"
          }
      ],
      [
          {
              "id": 1293,
              "action": "Osiris Mysteries: Preparing the Corn-Mummies (LGG4, 539; Chassinat 1966, 205ff and note 119; Dendera X, 29; LA1, 959)",
              "tags": "preparing corn-mummies mysteries osiris"
          },
          {
              "id": 1294,
              "action": "Day of Transformations of the Bennu (CC; LGG2, 796; Leitz TW 161)",
              "tags": "transformations bennu day"
          },
          {
              "id": 1295,
              "action": "Soaring Falcon, Day 8 of 16 (TFC Edfu)",
              "tags": "soaring falcon"
          }
      ],
      [
          {
              "id": 1300,
              "action": "Soaring Falcon, Day 9 of 16 (TFC Edfu)",
              "tags": "soaring falcon"
          },
          {
              "id": 1301,
              "action": "Procession of Hathor as the White One (CC)",
              "tags": "one hathor white as"
          }
      ],
      [
          {
              "id": 1306,
              "action": "Osiris Mysteries: Forming the Earth (LA1, 959)",
              "tags": "earth mysteries osiris forming"
          },
          {
              "id": 1307,
              "action": "Procession of Hedjhotep and Tayet, Day 1 of 2 (CC; LGG5, 602; LGG7, 360; Leitz TW 165)",
              "tags": "hedjhotep tayet"
          },
          {
              "id": 1308,
              "action": "Soaring Falcon, Day 10 of 16 (TFC Edfu)",
              "tags": "soaring falcon"
          }
      ],
      [
          {
              "id": 1312,
              "action": "Osiris Mysteries: Preparing the Coffin and Unguents (LA1, 959)",
              "tags": "mysteries osiris preparing coffin unguents"
          },
          {
              "id": 1313,
              "action": "Festival of the Half Month",
              "tags": "half month"
          },
          {
              "id": 1314,
              "action": "Procession of Hedjhotep and Tayet, Day 2 (final) (CC; LGG5, 602; LGG7, 360; Leitz TW 165)",
              "tags": "hedjhotep tayet"
          },
          {
              "id": 1315,
              "action": "Feast of Sekhmet and Bast before Ra (CC)",
              "tags": "sekhmet bast ra"
          },
          {
              "id": 1316,
              "action": "Procession of Kenmet (LGG7, 290; Leitz TW 167)",
              "tags": "kenmet"
          },
          {
              "id": 1317,
              "action": "Soaring Falcon, Day 11 of 16 (TFC Edfu)",
              "tags": "soaring falcon"
          }
      ],
      [
          {
              "id": 1321,
              "action": "Osiris Mysteries: Opening of the House (LA1, 959)",
              "tags": "opening mysteries osiris"
          },
          {
              "id": 1322,
              "action": "Feast of Sekhmet and Bast of Isheru (LGG6, 558; Leitz TW 167; LGG2, 740; KRI IV, 353.11, Abydos)",
              "tags": "sekhmet bast isheru"
          },
          {
              "id": 1323,
              "action": "Soaring Falcon, Day 12 of 16 (TFC Edfu)",
              "tags": "soaring falcon"
          }
      ],
      [
          {
              "id": 1327,
              "action": "Soaring Falcon, Day 13 of 16 (TFC Edfu)",
              "tags": "soaring falcon"
          }
      ],
      [
          {
              "id": 1333,
              "action": "Osiris Mysteries: Opening Ceremonies (TFC Ramses II; AF TT50 Neferhotep; LA2, 176;",
              "tags": "opening ramses ceremonies tfc neferhotep mysteries osiris ii la"
          },
          {
              "id": 1334,
              "action": "LA6)",
              "tags": "la"
          },
          {
              "id": 1335,
              "action": "Osiris Mysteries: The Gods Appear in 34 Boats (LGG5, 119)",
              "tags": "boats mysteries osiris appear"
          },
          {
              "id": 1336,
              "action": "Soaring Falcon, Day 14 of 16 (TFC Edfu)",
              "tags": "soaring falcon"
          },
          {
              "id": 1337,
              "action": "Feast of Ptah-Sokar at the Holy Place (Djeseru), Day 1 of 9 (LGG3, 169)",
              "tags": "place ptah-sokar holy"
          }
      ],
      [
          {
              "id": 1341,
              "action": "Osiris Mysteries: Presenting the Corn-Mummy to Daylight, Day 1 of 5 (LGG1, 959) and Making Ointment (CC; LGG1, 959)",
              "tags": "presenting corn-mummy making mysteries osiris daylight ointment"
          },
          {
              "id": 1342,
              "action": "Feast of Ptah-Sokar at the Holy Place (Djeseru), Day 2 of 9 (LGG3, 169)",
              "tags": "place ptah-sokar holy"
          },
          {
              "id": 1343,
              "action": "Soaring Falcon, Day 15 of 16 (TFC Edfu)",
              "tags": "soaring falcon"
          }
      ],
      [
          {
              "id": 1348,
              "action": "Osiris Mysteries: Presenting the Corn-Mummy to Daylight, Day 2 of 5 (LGG1, 959); Finding the Udjat Eyes and Weaving the Burial Cloth",
              "tags": "weaving presenting burial finding udjat corn-mummy cloth mysteries osiris eyes daylight"
          },
          {
              "id": 1349,
              "action": "Feast of Ptah-Sokar at the Holy Place (Djeseru), Day 3 of 9 (LGG3, 169)",
              "tags": "place ptah-sokar holy"
          },
          {
              "id": 1350,
              "action": "Soaring Falcon, Day 16 (final): Feast of Closure and Procession of Horus of Behdet (TFC Edfu)",
              "tags": "horus falcon behdet soaring closure"
          },
          {
              "id": 1351,
              "action": "Purifying and Offering to Amun-Ra and His Ennead (TFC/AF Medinet Habu Ramses III)",
              "tags": "ennead purifying offering amun-ra"
          },
          {
              "id": 1352,
              "action": "Oracle of Amunhotep I, True of Voice (LA2, 184, New Kingdom)",
              "tags": "voice true amunhotep"
          }
      ],
      [
          {
              "id": 1356,
              "action": "Osiris Mysteries: Presenting the Corn-Mummy to Daylight, Day 3 of 5 (LGG1, 959); Removing the mummy and the divine bandages",
              "tags": "presenting corn-mummy mysteries osiris divine mummy daylight bandages removing"
          },
          {
              "id": 1357,
              "action": "Feast of Ptah-Sokar at the Holy Place (Djeseru), Day 4 of 9 (LGG3, 169)",
              "tags": "place ptah-sokar holy"
          },
          {
              "id": 1358,
              "action": "Feast of Sokar, Day 1 of 10 (TFC/AF Medinet Habu Ramses III)",
              "tags": "sokar"
          }
      ],
      [
          {
              "id": 1362,
              "action": "Osiris Mysteries: Procession of the 34 Boats (see IV Akhet 18 entry for specific names; LA1, 959)",
              "tags": "mysteries osiris boats"
          },
          {
              "id": 1363,
              "action": "Osiris Mysteries: Presenting the Corn-Mummy to Daylight, Day 4 of 5 (LGG1, 959)",
              "tags": "presenting corn-mummy mysteries osiris daylight"
          },
          {
              "id": 1364,
              "action": "Feast of Ptah-Sokar at the Holy Place (Djeseru), Day 5 of 9 (LGG3, 169)",
              "tags": "place ptah-sokar holy"
          },
          {
              "id": 1365,
              "action": "Feast of Sokar, Day 2 of 10 (TFC/AF Medinet Habu Ramses III)",
              "tags": "sokar"
          },
          {
              "id": 1366,
              "action": "Feast of Cutting the Earth (TFC Akhmenu Thutmose III; LA; AF Medinet Habu Ramses III; LA5, 1075)",
              "tags": "cutting earth"
          },
          {
              "id": 1367,
              "action": "Festival of Ptah-South-of-His-Wall, Lord of Memphis, at Thebes (AF Horemheb and/or Ay inscription, south wall, Karnak temple)",
              "tags": "lord memphis ptah-south-of-his-wall thebes"
          },
          {
              "id": 1368,
              "action": "Festival of the Two Female Kites, Day 1 (LGG7, 632; pBremner-Rhind 1, 1)",
              "tags": "kites two"
          }
      ],
      [
          {
              "id": 1374,
              "action": "Feast of Ptah-Sokar at the Holy Place (Djeseru), Day 6 of 9 (LGG3, 169)",
              "tags": "place ptah-sokar holy"
          },
          {
              "id": 1375,
              "action": "Feast of Sokar, Day 3 of 10 (TFC/AF Medinet Habu Ramses III; LA5, 1075)",
              "tags": "sokar"
          },
          {
              "id": 1376,
              "action": "Osiris Mysteries: Presenting the Corn-Mummy to Daylight, Day 5 (final_ and Preparations for Burial (LGG1, 959)",
              "tags": "presenting corn-mummy mysteries osiris daylight"
          }
      ],
      [
          {
              "id": 1380,
              "action": "Feast of Sokar-Osiris, Day 1 of 3 (Memphis)",
              "tags": "sokar-osiris"
          },
          {
              "id": 1381,
              "action": "Feast of Ptah-Sokar at the Holy Place (Djeseru), Day 7 of 9 (LGG3, 169)",
              "tags": "place ptah-sokar holy"
          },
          {
              "id": 1382,
              "action": "Feast of Sokar, Day 4 of 10 (TFC/AF Medinet Habu Ramses III; LA5, 1075)",
              "tags": "sokar"
          },
          {
              "id": 1383,
              "action": "Osiris Mysteries: Defense of Osiris from Set by Horus (Edfu); Night Procession (TFC Dendera); Burial/Wrapping the Corn Mummy (Dendera)",
              "tags": "horus burial defense night mysteries osiris mummy corn wrapping set"
          },
          {
              "id": 1384,
              "action": "Procession of Sokar and Hathor, Day 1 of 3 (TFC Dendera)",
              "tags": "hathor sokar"
          }
      ],
      [
          {
              "id": 1388,
              "action": "Feast of Sokar-Osiris, Day 2 of 3 (Memphis; LGG6, 665; Abusir Papyri 13, 1; Urk I, 121 and 124)",
              "tags": "sokar-osiris"
          },
          {
              "id": 1389,
              "action": "Feast of Ptah-Sokar at the Holy Place (Djeseru), Day 8 of 9 (LGG3, 169)",
              "tags": "place ptah-sokar holy"
          },
          {
              "id": 1390,
              "action": "Feast of Sokar, Day 5 of 10 (TFC/AF Medinet Habu Ramses III; LA5, 1075)",
              "tags": "sokar"
          },
          {
              "id": 1391,
              "action": "Osiris Mysteries: \"Night of Death\" (TFC/AF Medinet Habu Ramses III; LA5, 1065)",
              "tags": "night death mysteries osiris"
          },
          {
              "id": 1392,
              "action": "Day of Planting Onions for Sokar (AF TT2 tomb of Khabekhnet, New Kingdom; LA5, 1075; AF TT9 tomb of Amonmes, New Kingdom)",
              "tags": "planting onions sokar day"
          },
          {
              "id": 1393,
              "action": "Feast of Heqat (?) (LGG5, 490; Hibis 22, eastern wall)",
              "tags": "heqat"
          },
          {
              "id": 1394,
              "action": "Procession of Sokar and Hathor, Day 2 of 3 (TFC Dendera)",
              "tags": "hathor sokar"
          }
      ],
      [
          {
              "id": 1398,
              "action": "Festival of Sokar (TFC Illahun, MK)",
              "tags": "sokar"
          },
          {
              "id": 1399,
              "action": "Feast of Ptah-Sokar at the Holy Place (Djeseru), Day 9 (final) (LGG3, 169)",
              "tags": "place ptah-sokar holy"
          },
          {
              "id": 1400,
              "action": "Feast of Sokar, Day 6 of 10 (TFC/AF Medinet Habu Ramses III; LA5, 1075; LGG6, 655; Esna II, 55, 7; TFC Edfu)",
              "tags": "sokar"
          },
          {
              "id": 1401,
              "action": "Feast of Sokar-Osiris, Day 3 (final)",
              "tags": "sokar-osiris"
          },
          {
              "id": 1402,
              "action": "Osiris Mysteries: \"Mourning\" and \"Destroying the Ass and Serpent\" (TFC Edfu; LGG5, 244)",
              "tags": "mourning ass mysteries destroying osiris serpent"
          },
          {
              "id": 1403,
              "action": "Appearance of Min of Kom Ombo in Coptos, Day 1 of 5 (TFC Kom Ombo Ptolemy VI)",
              "tags": "min coptos kom ombo"
          },
          {
              "id": 1404,
              "action": "Feast of Sokar and Procession of Khnum (TFC Esna)",
              "tags": "khnum sokar"
          },
          {
              "id": 1405,
              "action": "Procession of Sokar and Hathor, Day 3 (final) (TFC Dendera)",
              "tags": "hathor sokar"
          },
          {
              "id": 1406,
              "action": "\"Festival of Sokar; offerings for Ptah-Sokar-Osiris and Nefertem-Protector-of-the-Two-Lands.\" The henu-barque of Sokar is preceded by five other barques: those of Hathor, Wadjet, Shezemtet, Bast, and Sekhmet. (TFC/AF Medinet Habu Ramses III; LA5, 1062 and 1074-1075)",
              "tags": "five shezemtet sekhmet. barques bast sokar henu-barque nefertem-protector-of-the-two-lands. those wadjet preceded other hathor ptah-sokar-osiris"
          }
      ],
      [
          {
              "id": 1411,
              "action": "Feast of Sokar, Day 7 of 10: Anointing the Ennead (TFC/AF Medinet Habu Ramses III; LA5, 1075; LGG6, 655; Esna II, 55, 7; TFC Edfu)",
              "tags": "ennead anointing sokar"
          },
          {
              "id": 1412,
              "action": "Osiris Mysteries: \"Night Vigil\"",
              "tags": "night vigil mysteries osiris"
          },
          {
              "id": 1413,
              "action": "Appearance of Min of Kom Ombo in Coptos, Day 2 of 5 (TFC Kom Ombo Ptolemy VI)",
              "tags": "min coptos kom ombo"
          },
          {
              "id": 1414,
              "action": "Feast of Neith (TFC Esna)",
              "tags": "neith"
          }
      ],
      [
          {
              "id": 1419,
              "action": "Feast of Sokar, Day 8 of 10: Drawing Forth/Setting Up the Benben (TFC/AF Medinet Habu Ramses III; LA5, 1075; LGG6, 655; LA2, 176)",
              "tags": "drawing benben up setting sokar forth"
          },
          {
              "id": 1420,
              "action": "Mysteries of Osiris: \"Feast of Offerings upon the Altar\" (TFC Edfu)",
              "tags": "osiris mysteries altar upon"
          },
          {
              "id": 1421,
              "action": "Appearance of Min of Kom Ombo in Coptos, Day 3 of 5 (TFC Kom Ombo Ptolemy VI)",
              "tags": "min coptos kom ombo"
          },
          {
              "id": 1422,
              "action": "Procession of Hatmehyt (CC; Leitz TW 187; LGG5, 644)",
              "tags": "hatmehyt"
          }
      ],
      [
          {
              "id": 1427,
              "action": "Feast of Sokar, Day 9 of 10: title lost (TFC/AF Medinet Habu Ramses III; LA5, 1075; LGG6, 655; Esna II, 55, 7; TFC Edfu)",
              "tags": "title lost sokar"
          },
          {
              "id": 1428,
              "action": "Feast of Hathor and Her Great Nine, Day 1 of 2 (TFC Edfu; LGG4, 275, Edfu; LA2, 1036)",
              "tags": "hathor great nine"
          },
          {
              "id": 1429,
              "action": "Mysteries of Osiris: \"Feast of Food on the Altar\"",
              "tags": "osiris food mysteries altar"
          },
          {
              "id": 1430,
              "action": "Appearance of Min of Kom Ombo in Coptos, Day 4 of 5 (TFC Kom Ombo Ptolemy VI)",
              "tags": "min coptos kom ombo"
          },
          {
              "id": 1431,
              "action": "Feast of Neith",
              "tags": "neith"
          }
      ],
      [
          {
              "id": 1437,
              "action": "Feast of Sokar, Day 10 (final): title lost (TFC/AF Medinet Habu Ramses III; LA5, 1075; LGG6, 655; Esna II, 55, 7; TFC Edfu; LA2 description includes \"going around the walls\")",
              "tags": "title lost sokar"
          },
          {
              "id": 1438,
              "action": "Mysteries of Osiris: \"Raising the Djed\" (\"three statues of the year were wrapped, along with the djed pillar,\" LA1, 959; TFC Esna and Edfu)",
              "tags": "osiris djed raising mysteries"
          },
          {
              "id": 1439,
              "action": "House of Ra, House of Osiris, House of Horus (Last Day of the Month)",
              "tags": "horus osiris ra"
          },
          {
              "id": 1440,
              "action": "Appearance of Min of Kom Ombo in Coptos, Day 5 (final) (TFC Kom Ombo Ptolemy VI)",
              "tags": "min coptos kom ombo"
          },
          {
              "id": 1441,
              "action": "Procession of Hathor and Her Great Nine, Day 2 (final) (TFC Edfu)",
              "tags": "hathor great nine"
          },
          {
              "id": 1442,
              "action": "Feast of Khnum (TFC/AF Elephantine Thutmose III; Urk IV, 823; LA2, 182. Known to be multiple days, but actual number is lost.)",
              "tags": "khnum"
          },
          {
              "id": 1443,
              "action": "Appearance of Horus and Hathor, Day 1 of 5 (TFC Kom Ombo)",
              "tags": "hathor horus"
          },
          {
              "id": 1444,
              "action": "Procession of Horus of Behdet (TFC Edfu)",
              "tags": "behdet horus"
          },
          {
              "id": 1445,
              "action": "Oracle of Amunhotep I (LA2, 184; AF BM5625 Ramesside ostracon)",
              "tags": "amunhotep"
          },
          {
              "id": 1446,
              "action": "Eve of I Peret I or New Moon of I Shomu 1: \"Feast of the Heavens\" (New Kingdom Min festival, described in LA4, 142-143)",
              "tags": "or shomu eve heavens new peret moon"
          }
      ],
      [
          {
              "id": 1448,
              "action": "First Day of the Month",
              "tags": "month first"
          },
          {
              "id": 1449,
              "action": "Feast of Coronation, Day 1 of 4 (KSG 3, 3; Spalinger 1990, 289-294 and note 36; Bleeker, 109; von Beckerath 1991, 32 and note 12)",
              "tags": "coronation"
          },
          {
              "id": 1450,
              "action": "Nehebkau Festival, Day 1 of 2 (LA; TFC Karnak Thutmose III; AF Medinet Habu Ramses III; LGG4, 275; Fs Winter 47; AF Kahun acrobatic troupe inscription; AF TT50 tomb of Neferhotep, dated to Horemheb)",
              "tags": "nehebkau"
          },
          {
              "id": 1451,
              "action": "Appearance of Horus and Hathor, Day 2 of 5 (TFC Kom Ombo)",
              "tags": "hathor horus"
          },
          {
              "id": 1452,
              "action": "Feast of Tefnut (TFC Esna)",
              "tags": "tefnut"
          },
          {
              "id": 1453,
              "action": "Procession of Menhyt, Nebtu, and Heka (TFC Esna)",
              "tags": "nebtu heka menhyt"
          },
          {
              "id": 1454,
              "action": "Feast of Hathor \"to Thebes to cool Her ka\" (LGG5, 76, Dendera, Kom Ombo, and Edfu; TFC Illahun \"Periplus of Hathor, Lady of Ahnas\")",
              "tags": "cool to ka thebes hathor"
          },
          {
              "id": 1455,
              "action": "Oracle of Amunhotep I, True of Voice (LA2, 184)",
              "tags": "voice true amunhotep"
          }
      ],
      [
          {
              "id": 1462,
              "action": "Nehebkau Festival, Day 2 (final) (AF TT341 tomb of Nakhtamun, dated to Ramses II)",
              "tags": "nehebkau"
          },
          {
              "id": 1463,
              "action": "Coronation, Day 2 of 4 (KSG 3, 3; Spalinger 1990, 289-294 and note 36; Bleeker, 109; von Beckerath 1991, 32 and note 12)",
              "tags": "coronation"
          },
          {
              "id": 1464,
              "action": "Appearance of Horus and Hathor, Day 3 of 5 (TFC Kom Ombo)",
              "tags": "hathor horus"
          },
          {
              "id": 1465,
              "action": "Feast of Montu (TFC Dendera)",
              "tags": "montu"
          },
          {
              "id": 1466,
              "action": "Festival of Wadjet (LGG2, 271)",
              "tags": "wadjet"
          }
      ],
      [
          {
              "id": 1472,
              "action": "Coronation, Day 3 of 4 (KSG 3, 3; Spalinger 1990, 289-294 and note 36; Bleeker, 109; von Beckerath 1991, 32 and note 12)",
              "tags": "coronation"
          },
          {
              "id": 1473,
              "action": "Appearance of Horus and Hathor, Day 4 of 5 (TFC Kom Ombo)",
              "tags": "hathor horus"
          },
          {
              "id": 1474,
              "action": "Appearance of Harsiese",
              "tags": "harsiese"
          },
          {
              "id": 1475,
              "action": "Appearance of Sobek",
              "tags": "sobek"
          },
          {
              "id": 1476,
              "action": "Feast of the Drunkenness of the Eye of Ra (TFC Edfu; LA2, Edfu)",
              "tags": "ra drunkenness eye"
          },
          {
              "id": 1477,
              "action": "Appearance of Horus, Chief of the Great Throne; Min, Lord of the Two Lands; and Sobek, Lord of Kom Ombo (TFC Kom Ombo Ptolemy VI)",
              "tags": "min horus lands kom lord sobek two great throne ombo chief"
          }
      ],
      [
          {
              "id": 1483,
              "action": "Coronation, Day 4 (final) KSG 3, 3; Spalinger 1990, 289-294 and note 36; Bleeker, 109; von Beckerath 1991, 32 and note 12)",
              "tags": "bleeker beckerath note von coronation ksg spalinger"
          },
          {
              "id": 1484,
              "action": "Appearance of Horus and Hathor, Day 5 (final) (TFC Kom Ombo)",
              "tags": "hathor horus"
          },
          {
              "id": 1485,
              "action": "Procession of Horus of the Beautiful Upper Egyptian Barley (Horus Shema-Nefer) (TFC Esna)",
              "tags": "beautiful horus upper barley egyptian"
          }
      ],
      [
          {
              "id": 1492,
              "action": "Feast of Horus and Hathor, Lady of Dendera (TFC Edfu)",
              "tags": "hathor horus dendera"
          },
          {
              "id": 1493,
              "action": "\"Sekhmet Places the Flame before the Great Ones\" (CC; TFC Edfu)",
              "tags": "ones great sekhmet places flame"
          }
      ],
      [
          {
              "id": 1498,
              "action": "Sixth-Day Festival",
              "tags": "sixth-day festival"
          },
          {
              "id": 1499,
              "action": "\"Food offerings for He Who Dwells in Weret\" (Khenty-irety) (CC)",
              "tags": "food dwells weret he"
          },
          {
              "id": 1500,
              "action": "Feast of Amun(-Ra) (AF Medinet Habu Ramses III; TFC Medinet Habu)",
              "tags": "amun"
          },
          {
              "id": 1501,
              "action": "Appearances of Tasenetnofret, Hathor, and Min (TFC Kom Ombo Ptolemy VI)",
              "tags": "appearances min hathor tasenetnofret"
          },
          {
              "id": 1502,
              "action": "\"Day of the Festival of Amun, decreed by the King of Upper and Lower Egypt, Userma'atre Meryamun (Ramses III), when the leaf of the ished-tree was carved with the name of the King of Upper and Lower Egypt, Userma'atre Meryamun in the Mansion of Ptah; offerings for Amun-Ra with his ennead.\" (AF Medinet Habu; TFC Ramses III Medinet Habu)",
              "tags": "name decreed userma-atre egypt king mansion when with lower leaf ennead. meryamun carved upper amun was ptah day ished-tree amun-ra"
          }
      ],
      [
          {
              "id": 1508,
              "action": "Feast of Renenutet (LA2, Dendera; TFC Edfu)",
              "tags": "renenutet"
          }
      ],
      [
          {
              "id": 0,
              "action": "No Festivals Today",
              "tags": "none"
          }
      ],
      [
          {
              "id": 1520,
              "action": "Feast of Hathor, Lady of Dendera (TFC Edfu)",
              "tags": "hathor dendera"
          },
          {
              "id": 1521,
              "action": "Procession of Khnum \"to visit his ancient father, Atum\" (LA5, 281, Esna)",
              "tags": "visit to atum khnum father ancient"
          }
      ],
      [
          {
              "id": 1528,
              "action": "Oracle of Amunhotep I, True of Voice (LA2, 184, New Kingdom)",
              "tags": "voice true amunhotep"
          }
      ],
      [
          {
              "id": 0,
              "action": "No Festivals Today",
              "tags": "none"
          }
      ],
      [
          {
              "id": 1539,
              "action": "\"Answering Every Speech of Sekhmet\" (CC)",
              "tags": "every speech sekhmet answering"
          }
      ],
      [
          {
              "id": 1548,
              "action": "\"Feast of Prolonging Lifetime, and Making Ma'at Beneficent in the Temple\" (CC)",
              "tags": "prolonging ma-at making lifetime temple beneficent"
          },
          {
              "id": 1549,
              "action": "Feast of Bast (LA2, 178; LA1, 629, Late Period at Bubastis)",
              "tags": "bast"
          }
      ],
      [
          {
              "id": 1555,
              "action": "Lamentations of Isis and Nephthys in Busiris (CC)",
              "tags": "isis lamentations busiris nephthys"
          }
      ],
      [
          {
              "id": 1562,
              "action": "Festival of the Half Month",
              "tags": "half month"
          },
          {
              "id": 1563,
              "action": "Feast of Hathor, Lady of Dendera (TFC Edfu)",
              "tags": "hathor dendera"
          },
          {
              "id": 1564,
              "action": "Appearance of Nun (CC)",
              "tags": "nun"
          },
          {
              "id": 1565,
              "action": "\"Feast of the Heavens\" for Min (LA3, New Kingdom)",
              "tags": "min heavens"
          }
      ],
      [
          {
              "id": 1572,
              "action": "Appearance of Horus-Shu (CC)",
              "tags": "horus-shu"
          }
      ],
      [
          {
              "id": 1578,
              "action": "Sobek, Lord of Neb-seh (unknown location) (LGG6, 259, Edfu; Leitz 2002, 140, Edfu; variant Sobek, Lord of Heb-Sed Festivals)",
              "tags": "sobek lord neb-seh"
          },
          {
              "id": 1579,
              "action": "Hathor, Lady of the Deserts (LGG4, 168, Edfu)",
              "tags": "deserts hathor"
          },
          {
              "id": 1580,
              "action": "Isis Who Gives What She Loves (variant Isis Who Gives to Those Whom She Loves, LGG4, 777, Dendera and Edfu)",
              "tags": "loves isis she what gives"
          },
          {
              "id": 1581,
              "action": "Onuris (LGG1, 378, Dendera)",
              "tags": "onuris"
          },
          {
              "id": 1582,
              "action": "Procession of Nun (CC)",
              "tags": "nun"
          },
          {
              "id": 1583,
              "action": "Feast of Meshenet for the Followers of Horus (TFC Edfu)",
              "tags": "followers horus meshenet"
          },
          {
              "id": 1584,
              "action": "Navigation of Menhyt (LGG3, 306; Esna II, 55, 8; TFC Esna)",
              "tags": "navigation menhyt"
          }
      ],
      [
          {
              "id": 1589,
              "action": "Procession of the Gods to Abydos (TFC Ramses II; CC)",
              "tags": "abydos"
          },
          {
              "id": 1590,
              "action": "Feast of Neith and Heka of Isheru (sacred lake of Mut's temple at Karnak), Day 1 of 4 (TFC Esna, Sais, and Karnak; LGG5, 553, Esna)",
              "tags": "neith heka isheru"
          },
          {
              "id": 1591,
              "action": "Holiday in Rosetjau (TFC Ramses II; CC)",
              "tags": "holiday rosetjau"
          },
          {
              "id": 1592,
              "action": "\"Very Great Festivals\" (Old Kingdom reference from LA)",
              "tags": "very great festivals"
          }
      ],
      [
          {
              "id": 1599,
              "action": "Feast of Neith and Heka of Isheru, Day 2 of 4 (TFC Esna, Sais, and Karnak; LGG5, 553, Esna)",
              "tags": "neith heka isheru"
          },
          {
              "id": 1600,
              "action": "Procession of Nebtu (TFC Esna)Navigation of Hathor of Dendera (from I Peret 19 to I Peret 21 and from I Peret 28 to 2 Peret 4; also called \"She (the Wandering Eye) is Led Back\") (LA2, 1035; TFC Dendera; TFC Edfu; CC)",
              "tags": "dendera nebtu led back hathor navigation"
          }
      ],
      [
          {
              "id": 1605,
              "action": "Navigation of Hathor of Dendera (from I Peret 19 to I Peret 21; from I Peret 28 to 2 Peret 4; related to the Intues (\"She is Led Back\" Festival/solstice/return of the Eye) (LA2, 1035; TFC Dendera; TFC Edfu; CC)",
              "tags": "hathor navigation dendera"
          },
          {
              "id": 1606,
              "action": "Feast of Neith and Heka of Isheru, Day 3 of 4 (TFC Esna, Sais, and Karnak; LGG5, 553, Esna)",
              "tags": "neith heka isheru"
          },
          {
              "id": 1607,
              "action": "Procession of Bast (CC; Leitz TW 214)",
              "tags": "bast"
          },
          {
              "id": 1608,
              "action": "Festival of Wadjet (LGG2, 271; LA6, 908; AF 94: T3 stela, Mut temple of Karnak)",
              "tags": "wadjet"
          },
          {
              "id": 1609,
              "action": "Festival of Haroeris at Edfu (LA2, 1001)",
              "tags": "edfu haroeris"
          },
          {
              "id": 1610,
              "action": "Feast of Renenutet at Amun's Temple (LGG4, 657; Stela Bordeaux KRI VII, 204)",
              "tags": "temple renenutet amun"
          }
      ],
      [
          {
              "id": 1616,
              "action": "Navigation of Hathor of Dendera (from I Peret 19 to I Peret 21; and from I Peret 28 to 2 Peret 4; related to the Intues (\"She is Led (Back)\"/solstice/return of the Eye) (LA2, 1035; TFC Dendera; TFC Edfu; CC)",
              "tags": "dendera return eye solstice hathor navigation"
          },
          {
              "id": 1617,
              "action": "Bast Guards the Two Lands (CC)",
              "tags": "two lands bast guards"
          },
          {
              "id": 1618,
              "action": "Feast of Shu (TFC Edfu)",
              "tags": "shu"
          },
          {
              "id": 1619,
              "action": "Feast of Neith and Heka of Isheru, Day 4 (final) (TFC Esna, Sais, and Karnak; LGG5, 553, Esna)",
              "tags": "neith heka isheru"
          }
      ],
      [
          {
              "id": 1625,
              "action": "Feast of Heryt (\"the ones above,\" the two goddesses of the royal crowns) (LGG4, 809; AF Medinet Habu; TFC Medinet Habu; AF TT2 tomb of Khabekhnet; KRI III, 805; Hari 1985, 172 and plate 37)",
              "tags": "heryt"
          },
          {
              "id": 1626,
              "action": "Festival of Wadjet (LGG2, 271)",
              "tags": "wadjet"
          },
          {
              "id": 1627,
              "action": "\"Festival of the crown-snakes\" (AF TT50 tomb of Neferhotep, dated to reign of Horemheb)",
              "tags": "crown-snakes"
          }
      ],
      [
          {
              "id": 0,
              "action": "No Festivals Today",
              "tags": "none"
          }
      ],
      [
          {
              "id": 0,
              "action": "No Festivals Today",
              "tags": "none"
          }
      ],
      [
          {
              "id": 1643,
              "action": "Establishing the Celestial Cow (or Great Milking-Cow) (LGG5, 483; Leitz TW 219)",
              "tags": "celestial cow establishing"
          },
          {
              "id": 1644,
              "action": "Descent of the Dove (epithet of Isis) (TFC Edfu)",
              "tags": "descent dove"
          },
          {
              "id": 1645,
              "action": "Feast of Thanksgiving Offerings, Day 1 of 3 (or 4) (TFC Edfu; LGG4, 484; Edfu V, 400 and in Edfu source, to Day 27; other sources to Day 28)",
              "tags": "thanksgiving"
          },
          {
              "id": 1646,
              "action": "Feasts of Horus of Behdet and Hathor, Lady of Dendera (TFC Edfu)",
              "tags": "feasts horus dendera behdet hathor"
          }
      ],
      [
          {
              "id": 1652,
              "action": "Feast of Thanksgiving Offerings, Day 2 of 3 (or 4) (TFC Edfu; LGG4, 484; Edfu V, 400 and in Edfu source to Day 27; other sources to Day 28)",
              "tags": "thanksgiving"
          }
      ],
      [
          {
              "id": 1658,
              "action": "Feast of Thanksgiving Offerings, Day 3 (final, or Day 3 of 4) (TFC Edfu; LGG4, 484; Edfu V, 400 and in Edfu source, to Day 27; other sources to Day 28)",
              "tags": "thanksgiving"
          },
          {
              "id": 1659,
              "action": "Feast of Sokar",
              "tags": "sokar"
          }
      ],
      [
          {
              "id": 1663,
              "action": "Navigation of Khnum-Ra, Day 1 of 4 (TFC Esna)",
              "tags": "navigation khnum-ra"
          },
          {
              "id": 1664,
              "action": "Appearance and Oaths of Thoth",
              "tags": "thoth oaths"
          },
          {
              "id": 1665,
              "action": "Procession of Hathor (to II Peret 4) (LA2, 177; related to \"She Is Led Back\"/solstice/return of the Wandering Eye)",
              "tags": "hathor"
          },
          {
              "id": 1666,
              "action": "Feast of Thanksgiving Offerings, Day 4 (final, if 4 days) (TFC Edfu; LGG4, 484; Edfu V, 400 and in Edfu source, to Day 27; other sources to Day 28)",
              "tags": "thanksgiving"
          }
      ],
      [
          {
              "id": 1670,
              "action": "Navigation of Khnum-Ra, Day 2 of 4 (TFC Esna)",
              "tags": "navigation khnum-ra"
          },
          {
              "id": 1671,
              "action": "Day of Erecting the Willow (TFC Medinet Habu Ramses III)",
              "tags": "erecting day willow"
          },
          {
              "id": 1672,
              "action": "Thoth Sends Bast and Sekhmet to Protect the Two Lands (CC; LA1, 629; AF stela in the Mut Temple, Karnak, Thutmose IV)",
              "tags": "sends lands two bast sekhmet thoth protect"
          }
      ],
      [
          {
              "id": 1677,
              "action": "House of Ra, House of Osiris, House of Horus (Last Day of the Month)",
              "tags": "horus osiris ra"
          },
          {
              "id": 1678,
              "action": "Navigation of Khnum-Ra, Day 3 of 4 (TFC Esna)",
              "tags": "navigation khnum-ra"
          },
          {
              "id": 1679,
              "action": "Feast of Hathor, Mistress of Agny (TFC Esna)",
              "tags": "mistress hathor agny"
          },
          {
              "id": 1680,
              "action": "Procession of Shezmetet (LA5, 588; AF stela in the Mut temple at Karnak, Thutmose IV)",
              "tags": "shezmetet"
          },
          {
              "id": 1681,
              "action": "Boat Procession of Mut, Lady of Isheru (AF pTurin 68; Gardiner, 1930; AF 43 ship's log; all Ramesside)",
              "tags": "mut boat isheru"
          }
      ],
      [
          {
              "id": 1686,
              "action": "First Day of the Month",
              "tags": "month first"
          },
          {
              "id": 1687,
              "action": "Ptah Lifts Ra's Heaven, Day 1 of 2 (CC; LGG3, 169; Leitz TW 228)",
              "tags": "ptah heaven lifts ra"
          },
          {
              "id": 1688,
              "action": "Boat Procession of Anubis (TFC/AF Medinet Habu Ramses III; LA)",
              "tags": "anubis boat"
          },
          {
              "id": 1689,
              "action": "Navigation of Khnum-Ra, Day 4 (final) (TFC Esna)",
              "tags": "navigation khnum-ra"
          },
          {
              "id": 1690,
              "action": "Appearance of Horus (TFC Kom Ombo Ptolemy VI)",
              "tags": "horus"
          }
      ],
      [
          {
              "id": 1694,
              "action": "Ptah Lifts Ra's Heaven, Day 2 (final) (CC; LGG3, 169; Leitz TW 228)",
              "tags": "ptah heaven lifts ra"
          }
      ],
      [
          {
              "id": 1698,
              "action": "Procession of Set and His Followers (CC)",
              "tags": "followers set"
          },
          {
              "id": 1699,
              "action": "Navigation of Ma'at (CC)",
              "tags": "ma-at navigation"
          }
      ],
      [
          {
              "id": 1705,
              "action": "Festivals: Heb Wer (\"Great Festival\") (LA2, 177; TFC Edfu; CC; Niuserre inscriptions, Old Kingdom)",
              "tags": "heb wer festivals"
          },
          {
              "id": 1706,
              "action": "Final Day of \"She Is Led (Back)\" Festival (solstice festival of the Wandering Eye) at Dendera (TFC Dendera; LA2, 1036)",
              "tags": "led she dendera final"
          }
      ],
      [
          {
              "id": 0,
              "action": "No Festivals Today",
              "tags": "none"
          }
      ],
      [
          {
              "id": 1717,
              "action": "Sixth-Day Festival",
              "tags": "sixth-day festival"
          },
          {
              "id": 1718,
              "action": "Raising the Djed Pillar for Osiris (TFC Ramses II; CC)",
              "tags": "pillar djed raising osiris"
          },
          {
              "id": 1719,
              "action": "Feast of Shu (TFC Esna)",
              "tags": "shu"
          },
          {
              "id": 1720,
              "action": "Feast of Sekhmet (TFC Esna)",
              "tags": "sekhmet"
          },
          {
              "id": 1721,
              "action": "Feast of Menhyt (TFC Esna; LGG3, 306; Esna II, 55, 8)",
              "tags": "menhyt"
          }
      ],
      [
          {
              "id": 1726,
              "action": "Invoking and Offering to the Ancestors (CC; LA6, 155)",
              "tags": "ancestors invoking offering"
          }
      ],
      [
          {
              "id": 1730,
              "action": "Feast and Procession of Neith (TFC Esna)",
              "tags": "neith feast"
          },
          {
              "id": 1731,
              "action": "Holiday in Letopolis (CC)",
              "tags": "holiday letopolis"
          }
      ],
      [
          {
              "id": 1738,
              "action": "Amun Lifts the Sky, Day 1 of 2 (AF/TFC Medinet Habu Ramses III)",
              "tags": "sky amun lifts"
          },
          {
              "id": 1739,
              "action": "Great Burning ( Rekeh-Wer ) (or Willow Festival of Horus), Day 1 of 5 (LA2, 178, Esna; TFC Kom Ombo; LA2, 177, Edfu; TFC Edfu; CC; Leitz TW 234; LGG4, 499)",
              "tags": "burning great"
          },
          {
              "id": 1740,
              "action": "Festival of Wadjet (LGG2, 271)",
              "tags": "wadjet"
          }
      ],
      [
          {
              "id": 1745,
              "action": "Great Burning ( Rekeh-Wer ) (or Willow Festival of Horus), Day 2 of 5: Udjat Procession \"for singing\"; \"Raising of Ma'at\" (TFC Kom Ombo; LA2, 178, Esna; LA2, 177, Edfu; TFC Edfu; LGG3, 329; Leitz TW 235)",
              "tags": "for burning udjat ma-at great singing raising"
          },
          {
              "id": 1746,
              "action": "Amun Lifts the Sky, Day 2 (final) (AF/TFC Medinet Habu Ramses III)",
              "tags": "sky amun lifts"
          }
      ],
      [
          {
              "id": 1751,
              "action": "Great Burning ( Rekeh-Wer ) (or Willow Festival of Horus), Day 3 of 5 (TFC Kom Ombo; LA2, 178, Esna; LA2, 177, Edfu; TFC Edfu; LGG3, 329; Leitz TW 235)",
              "tags": "burning great"
          },
          {
              "id": 1752,
              "action": "Feast of Neith and Procession of Sobek (CC, Sais)",
              "tags": "neith sobek"
          },
          {
              "id": 1753,
              "action": "Feast of Imhotep (LA2, 184)",
              "tags": "imhotep"
          },
          {
              "id": 1754,
              "action": "Procession of Hathor to Pakhet (LA2, 1036)",
              "tags": "hathor pakhet"
          }
      ],
      [
          {
              "id": 1756,
              "action": "Great Burning ( Rekeh-Wer ) (or Willow Festival of Horus), Day 4 of 5 (TFC Kom Ombo; LA2, 178, Esna; LA2, 177, Edfu; TFC Edfu; LGG3, 329; Leitz TW 235)",
              "tags": "burning great"
          }
      ],
      [
          {
              "id": 1763,
              "action": "Great Burning ( Rekeh-Wer ) (or Willow Festival of Horus), Day 5 (final) (TFC Kom Ombo; LA2, 178, Esna; LA2, 177, Edfu; TFC Edfu; LGG3, 329; Leitz TW 235)",
              "tags": "burning great"
          },
          {
              "id": 1764,
              "action": "Procession of Sekhmet and Her Executioners (CC; LGG5, 636; Leitz TW 238)",
              "tags": "executioners sekhmet"
          }
      ],
      [
          {
              "id": 1768,
              "action": "\"Set Kills Apophis\" or \"The Day Set Kills the Rebel\" (CC)",
              "tags": "kills rebel apophis or theset set"
          }
      ],
      [
          {
              "id": 1774,
              "action": "Procession for an unknown god (name lost) to the shrine of Haroeris Khenty-Irety (CC; Leitz TW 340; LGG3, 395)",
              "tags": "unknown an haroeris khenty-irety shrine"
          },
          {
              "id": 1775,
              "action": "Festival of the Half Month",
              "tags": "half month"
          },
          {
              "id": 1776,
              "action": "Renewing the Year (TFC Edfu)",
              "tags": "renewing year"
          }
      ],
      [
          {
              "id": 1781,
              "action": "Isis Is Awakened by Ra's Majesty (CC; LGG5, 269; Leitz TW 241)",
              "tags": "majesty ra isis awakened"
          }
      ],
      [
          {
              "id": 1787,
              "action": "Feast of Neith and Min of Sais (TFC Esna; LGG3, 288-289, Edfu; Esna II, 55, 9)",
              "tags": "neith min sais"
          },
          {
              "id": 1788,
              "action": "Defending the Akhet-Eye, Day 1 of 2 (LGG5, 628; Leitz TW 243)",
              "tags": "defending akhet-eye"
          }
      ],
      [
          {
              "id": 1795,
              "action": "Defending the Akhet-Eye, Day 2 (final) (CC; LGG5, 628; Leitz TW 243)",
              "tags": "defending akhet-eye"
          },
          {
              "id": 1796,
              "action": "Feast of Bast in Bubastis (LA2, 178; LA1, 629; Edfu G31)",
              "tags": "bubastis bast"
          }
      ],
      [
          {
              "id": 1802,
              "action": "Offerings to Haroeris (TFC Kom Ombo Ptolemy VI)",
              "tags": "haroeris"
          }
      ],
      [
          {
              "id": 1809,
              "action": "Procession of Hathor \"the female majesty of heaven\" (CC)",
              "tags": "majesty hathor heaven"
          },
          {
              "id": 1810,
              "action": "Birthday of Amun's Priesthood and Rites for Sekhmet, Day 1 of 5 (AF Karnak Thoeris statue)",
              "tags": "birthday priesthood amun sekhmet rites"
          }
      ],
      [
          {
              "id": 1815,
              "action": "Feast of Horus-Shu, Day 1 of 2 (TFC Edfu; CC; Leitz TW 258)",
              "tags": "horus-shu"
          },
          {
              "id": 1816,
              "action": "Feast of Amun, Day 1 of 11 (AF Hatshepsut Red Chapel; LA Medinet Habu Ramses III)",
              "tags": "amun"
          },
          {
              "id": 1817,
              "action": "Feast of Ptah, Day 1 of 11 (LGG4, 264, Edfu)",
              "tags": "ptah"
          },
          {
              "id": 1818,
              "action": "Feast of Victory (Mekhir Festival), Day 1 of 5 (TFC Esna; TFC Edfu; TFC Kom Ombo Ptolemy VI; TFC Dendera; CC; Leitz TW 259)",
              "tags": "victory"
          },
          {
              "id": 1819,
              "action": "Birthday of Amun's Priesthood and Rites for Sekhmet, Day 2 of 5 (AF Karnak Thoeris statue)",
              "tags": "birthday priesthood amun sekhmet rites"
          },
          {
              "id": 1820,
              "action": "Procession of Heka-the-Child (TFC Esna)",
              "tags": "heka-the-child"
          },
          {
              "id": 1821,
              "action": "Procession of Hathor (TFC Edfu; TFC Dendera)",
              "tags": "hathor"
          },
          {
              "id": 1822,
              "action": "Navigation of Hathor to Pakhet (or \"Planting the Herbs of the God\" or \"the Day of Myrrh and Incense\"), Day 1 of 5 (TFC Dendera; Grimm 1994, 395)",
              "tags": "hathor navigation pakhet"
          }
      ],
      [
          {
              "id": 1828,
              "action": "Horus-Shu, Day 2 (final) (TFC Edfu; CC; Leitz TW 258)",
              "tags": "horus-shu"
          },
          {
              "id": 1829,
              "action": "Amun, Day 2 of 11 (AF Hatshepsut Red Chapel; LA Medinet Habu Ramses III)",
              "tags": "amun"
          },
          {
              "id": 1830,
              "action": "Ptah, Day 2 of 11 (LGG4, 264, Edfu)",
              "tags": "ptah"
          },
          {
              "id": 1831,
              "action": "Victory, Day 2 of 5 (TFC Esna; TFC Edfu; TFC Kom Ombo Ptolemy VI; TFC Dendera; CC; Leitz TW 259)",
              "tags": "victory"
          },
          {
              "id": 1832,
              "action": "Birthday of Amun's Priesthood and Rites for Sekhmet, Day 3 of 5 (AF Karnak Thoeris statue)",
              "tags": "birthday priesthood amun sekhmet rites"
          },
          {
              "id": 1833,
              "action": "Navigation of Hathor to Pakhet (or \"Planting the Herbs of the God\" or \"the Day of Myrrh and Incense\"), Day 2 of 5 (TFC Dendera; Grimm 1994, 395)",
              "tags": "hathor navigation pakhet"
          }
      ],
      [
          {
              "id": 1839,
              "action": "Amun, Day 3 of 11 (AF Hatshepsut Red Chapel; LA Medinet Habu Ramses III)",
              "tags": "amun"
          },
          {
              "id": 1840,
              "action": "Ptah, Day 3 of 11 (LGG4, 264, Edfu)",
              "tags": "ptah"
          },
          {
              "id": 1841,
              "action": "Victory, Day 3 of 5 (TFC Esna; TFC Edfu; TFC Kom Ombo Ptolemy VI; TFC Dendera; CC; Leitz TW 259)",
              "tags": "victory"
          },
          {
              "id": 1842,
              "action": "Birthday of Amun's Priesthood and Rites for Sekhmet, Day 4 of 5 (AF Karnak Thoeris statue)",
              "tags": "birthday priesthood amun sekhmet rites"
          },
          {
              "id": 1843,
              "action": "Navigation of Hathor to Pakhet (or \"Planting the Herbs of the God\" or \"the Day of Myrrh and Incense\"), Day 3 of 5 (TFC Dendera; Grimm 1994, 395)",
              "tags": "hathor navigation pakhet"
          }
      ],
      [
          {
              "id": 1848,
              "action": "Amun, Day 4 of 11 (AF Hatshepsut Red Chapel; LA Medinet Habu Ramses III)",
              "tags": "amun"
          },
          {
              "id": 1849,
              "action": "Ptah, Day 4 of 11 (LGG3, 169, Dendera; LGG4, 264, Edfu)",
              "tags": "ptah"
          },
          {
              "id": 1850,
              "action": "Victory, Day 4 of 5: The Gods Descend to the River (TFC Esna; TFC Edfu; TFC Kom Ombo Ptolemy VI; TFC Dendera; CC; Leitz TW 259)",
              "tags": "descend victory river"
          },
          {
              "id": 1851,
              "action": "Birthday of Amun's Priesthood and Rites for Sekhmet, Day 5 (final) (AF Karnak Thoeris statue)",
              "tags": "birthday priesthood amun sekhmet rites"
          },
          {
              "id": 1852,
              "action": "Navigation of Hathor to Pakhet (or \"Planting the Herbs of the God\" or \"the Day of Myrrh and Incense\"), Day 4 of 5 (TFC Dendera; Grimm 1994, 395)",
              "tags": "hathor navigation pakhet"
          },
          {
              "id": 1853,
              "action": "Feast of Ptah Who Protects the Winged Golden Disk, Day 1 of 7 (TFC Edfu)",
              "tags": "winged protects ptah golden disk"
          }
      ],
      [
          {
              "id": 1859,
              "action": "Amun, Day 5 of 11 (AF Hatshepsut Red Chapel; LA Medinet Habu Ramses III)",
              "tags": "amun"
          },
          {
              "id": 1860,
              "action": "Ptah, Day 5 of 11 (LGG4, 264, Edfu)",
              "tags": "ptah"
          },
          {
              "id": 1861,
              "action": "Victory, Day 5 (final) (TFC Esna; TFC Edfu; TFC Kom Ombo Ptolemy VI; TFC Dendera; CC; Leitz TW 259)",
              "tags": "victory"
          },
          {
              "id": 1862,
              "action": "Navigation of Hathor to Pakhet (or \"Planting the Herbs of the God\" or \"the Day of Myrrh and Incense\"), Day 5 (final) (TFC Dendera; Grimm 1994, 395)",
              "tags": "hathor navigation pakhet"
          },
          {
              "id": 1863,
              "action": "Feast of Ptah Who Protects the Winged Golden Disk, Day 2 of 7 (TFC Edfu)",
              "tags": "winged protects ptah golden disk"
          }
      ],
      [
          {
              "id": 1869,
              "action": "Amun, Day 6 of 11 (AF Hatshepsut Red Chapel; LA Medinet Habu Ramses III)",
              "tags": "amun"
          },
          {
              "id": 1870,
              "action": "Ptah, Day 6 of 11 (LGG4, 264, Edfu)",
              "tags": "ptah"
          },
          {
              "id": 1871,
              "action": "Feast of Ptah Who Protects the Winged Golden Disk, Day 3 of 7 (TFC Edfu)",
              "tags": "winged protects ptah golden disk"
          },
          {
              "id": 1872,
              "action": "Procession of Min of Coptos (CC)",
              "tags": "min coptos"
          },
          {
              "id": 1873,
              "action": "Festival of Wadjet (LGG2, 271; LGG7, 310)",
              "tags": "wadjet"
          }
      ],
      [
          {
              "id": 1877,
              "action": "Amun, Day 7 of 11 (AF Hatshepsut Red Chapel; LA Medinet Habu Ramses III)",
              "tags": "amun"
          },
          {
              "id": 1878,
              "action": "Ptah, Day 7 of 11 (LGG4, 264)",
              "tags": "ptah"
          },
          {
              "id": 1879,
              "action": "Feast of Ptah Who Protects the Winged Golden Disk, Day 4 of 7 (TFC Edfu)",
              "tags": "winged protects ptah golden disk"
          },
          {
              "id": 1880,
              "action": "Feast of Sokar in Rosetjau (CC)",
              "tags": "rosetjau sokar"
          },
          {
              "id": 1881,
              "action": "Feast of Sokar in Abydos (TFC Ramses II, reading unclear, may be read II Peret 28; CC)",
              "tags": "sokar abydos"
          },
          {
              "id": 1882,
              "action": "Feast of Hathor of Dendera (LGG5, 76, Dendera)",
              "tags": "hathor dendera"
          }
      ],
      [
          {
              "id": 1888,
              "action": "Amun, Day 8 of 11 (AF Hatshepsut Red Chapel; LA Medinet Habu Ramses III)",
              "tags": "amun"
          },
          {
              "id": 1889,
              "action": "Ptah, Day 8 of 11 (LGG4, 264)",
              "tags": "ptah"
          },
          {
              "id": 1890,
              "action": "Feast of Ptah Who Protects the Winged Golden Disk, Day 5 of 7 (TFC Edfu)",
              "tags": "winged protects ptah golden disk"
          },
          {
              "id": 1891,
              "action": "Feast of Sokar in Abydos (TFC Ramses II, reading unclear, may be read II Peret 27)",
              "tags": "sokar abydos"
          },
          {
              "id": 1892,
              "action": "Feast of Osiris-Onnophris and the ancestors (TFC Ramses II; TFC Edfu; CC)",
              "tags": "ancestors osiris-onnophris"
          }
      ],
      [
          {
              "id": 1898,
              "action": "Amun, Day 9 of 11 (AF Hatshepsut Red Chapel; LA Medinet Habu Ramses III)",
              "tags": "amun"
          },
          {
              "id": 1899,
              "action": "Ptah, Day 9 of 11 (LGG4, 264, Edfu)",
              "tags": "ptah"
          },
          {
              "id": 1900,
              "action": "Feast of Ptah Who Protects the Winged Golden Disk, Day 6 of 7 (TFC Edfu)",
              "tags": "winged protects ptah golden disk"
          }
      ],
      [
          {
              "id": 1906,
              "action": "House of Ra, House of Osiris, House of Horus (Last Day of the Month)",
              "tags": "horus osiris ra"
          },
          {
              "id": 1907,
              "action": "Amun, Day 10 of 11 (AF Hatshepsut Red Chapel; LA Medinet Habu Ramses III; Urk IV 836, line 3; AF Karnak Thutmose III)",
              "tags": "amun"
          },
          {
              "id": 1908,
              "action": "Ptah, Day 10 of 11 (LGG4, 264, Edfu)",
              "tags": "ptah"
          },
          {
              "id": 1909,
              "action": "Feast of Ptah Who Protects the Winged Golden Disk, Day 7 (final) (TFC Edfu)",
              "tags": "winged protects ptah golden disk"
          }
      ],
      [
          {
              "id": 1916,
              "action": "First Day of the Month",
              "tags": "month first"
          },
          {
              "id": 1917,
              "action": "Lesser Burning ( Rekeh-sheri or Rekeh-nedjes ) (LA, TFC Illahun)",
              "tags": "burning lesser"
          },
          {
              "id": 1918,
              "action": "Feast of Tawy (the Two Lands, i.e., Egypt) (LA2, 177-180)",
              "tags": "tawy"
          },
          {
              "id": 1919,
              "action": "Appearance of Haroeris (TFC Kom Ombo Ptolemy VI)",
              "tags": "haroeris"
          },
          {
              "id": 1920,
              "action": "Feast of Harsaphes (TFC Edfu)",
              "tags": "harsaphes"
          },
          {
              "id": 1921,
              "action": "Feast of Ptah at the Half Year (LA 2, 177-180; LA5, 281-282)",
              "tags": "ptah half year"
          },
          {
              "id": 1922,
              "action": "Offerings to the King and Nebtu (LA4, 363, Esna)",
              "tags": "king nebtu"
          },
          {
              "id": 1923,
              "action": "Amun, Day 11 (final) (AF Hatshepsut Red Chapel; LA Medinet Habu Ramses III)",
              "tags": "amun"
          },
          {
              "id": 1924,
              "action": "Ptah, Day 11 (final) (LGG4, 264, Edfu; AF daybook of the Theban necropolis workers)",
              "tags": "ptah"
          },
          {
              "id": 1925,
              "action": "\"Re-entry of Amun in His Festival of Lifting Up the Sky; 1 bull, 1 living ro-goose.\" (TFC/AF Medinet Habu Ramses III)",
              "tags": "bull living sky lifting amun ro-goose. up re-entry"
          }
      ],
      [
          {
              "id": 0,
              "action": "No Festivals Today",
              "tags": "none"
          }
      ],
      [
          {
              "id": 0,
              "action": "No Festivals Today",
              "tags": "none"
          }
      ],
      [
          {
              "id": 0,
              "action": "No Festivals Today",
              "tags": "none"
          }
      ],
      [
          {
              "id": 1944,
              "action": "Nighttime Procession of Neith (CC, Sais)",
              "tags": "neith nighttime"
          },
          {
              "id": 1945,
              "action": "Feast of Nebtu (TFC Esna; LGG4, 35; Esna II, 77, 10)",
              "tags": "nebtu"
          },
          {
              "id": 1946,
              "action": "Feast of Horus (epithet lost) (TFC Edfu)",
              "tags": "horus"
          }
      ],
      [
          {
              "id": 1954,
              "action": "Sixth-Day Festival",
              "tags": "sixth-day festival"
          },
          {
              "id": 1955,
              "action": "Jubilation of Osiris and Procession of Anubis \"with adorers\" (CC)",
              "tags": "adorers anubis osiris with jubilation"
          }
      ],
      [
          {
              "id": 1960,
              "action": "\"The Eye of Ra Called the Shemsu\" (CC)",
              "tags": "shemsu called ra eye"
          }
      ],
      [
          {
              "id": 1966,
              "action": "Khnum Makes Way for the Gods",
              "tags": "gods way khnum makes"
          }
      ],
      [
          {
              "id": 1972,
              "action": "Day of Judgment in Heliopolis (CC)",
              "tags": "heliopolis day judgment"
          },
          {
              "id": 1973,
              "action": "Appearance of Haroeris, Day 1 of 5 (TFC Kom Ombo Ptolemy VI)",
              "tags": "haroeris"
          }
      ],
      [
          {
              "id": 1979,
              "action": "Processions of Thoth and Nesret (CC; LGG4, 355; Leitz TW 277)",
              "tags": "thoth processions nesret"
          },
          {
              "id": 1980,
              "action": "Procession of Khnum-Ra, Day 1 of 3 (TFC Esna)",
              "tags": "khnum-ra"
          },
          {
              "id": 1981,
              "action": "Appearance of Haroeris, Day 2 of 5 (TFC Kom Ombo Ptolemy VI)",
              "tags": "haroeris"
          }
      ],
      [
          {
              "id": 1986,
              "action": "Procession of Khnum-Ra, Day 2 of 3 (TFC Esna)",
              "tags": "khnum-ra"
          },
          {
              "id": 1987,
              "action": "Appearance of Haroeris, Day 3 of 5 (TFC Kom Ombo Ptolemy VI)",
              "tags": "haroeris"
          },
          {
              "id": 1988,
              "action": "\"Festival of Khnum-Ra the good protector. Also, making the procession of Thoth in the middle of the house of the two little birds, at the same time, at evening. Union with the disk at sunset.\" (TFC Esna)",
              "tags": "birds making two khnum-ra protector. little same with good time also middle union sunset. evening. thoth disk"
          }
      ],
      [
          {
              "id": 1994,
              "action": "Appearance of Osiris as the Userhat Comes from Nun (LGG3, 66; CC; Leitz TW 280)",
              "tags": "userhat as comes osiris nun"
          },
          {
              "id": 1995,
              "action": "Procession of Khnum-Ra, Day 3 (final) (TFC Esna)",
              "tags": "khnum-ra"
          },
          {
              "id": 1996,
              "action": "Appearance of Haroeris, Day 4 of 5 (TFC Kom Ombo Ptolemy VI)",
              "tags": "haroeris"
          }
      ],
      [
          {
              "id": 2001,
              "action": "Appearance of Thoth with His Spirits (CC)",
              "tags": "thoth spirits with"
          },
          {
              "id": 2002,
              "action": "Appearance of Haroeris, Day 5 (final) (TFC Kom Ombo Ptolemy VI)",
              "tags": "haroeris"
          },
          {
              "id": 2003,
              "action": "Feast of Bast (LGG2, 740; Stela BM188 in Reymond 1981, 218, plate 7)",
              "tags": "bast"
          }
      ],
      [
          {
              "id": 2011,
              "action": "Day of Making Health and (Long) Life (CC)",
              "tags": "health life making day"
          },
          {
              "id": 2012,
              "action": "Procession of Khnum-Ra, Day 1 of 5 (TFC Esna)",
              "tags": "khnum-ra"
          },
          {
              "id": 2013,
              "action": "Procession of the Udjat-Eye from Letopolis (LGG2, 646; Leitz TW 282)",
              "tags": "udjat-eye letopolis"
          }
      ],
      [
          {
              "id": 2019,
              "action": "Feast of the Half-Month",
              "tags": "half-month"
          },
          {
              "id": 2020,
              "action": "Feast of Horus Behdety, Lord of Dendera (TFC Edfu)",
              "tags": "lord behdety horus dendera"
          },
          {
              "id": 2021,
              "action": "Procession of Khnum-Ra, Day 2 of 5 (TFC Esna)",
              "tags": "khnum-ra"
          },
          {
              "id": 2022,
              "action": "Feast of Amunhotep I, true-of-voice (LA2, 184, New Kingdom)",
              "tags": "true-of-voice amunhotep"
          }
      ],
      [
          {
              "id": 2028,
              "action": "Procession of Khnum-Ra, Day 3 of 5 (TFC Esna)",
              "tags": "khnum-ra"
          }
      ],
      [
          {
              "id": 2035,
              "action": "Appearance of Haroeris (TFC Kom Ombo Ptolemy VI)",
              "tags": "haroeris"
          },
          {
              "id": 2036,
              "action": "Procession of Khnum-Ra, Day 4 of 5 (TFC Esna)",
              "tags": "khnum-ra"
          }
      ],
      [
          {
              "id": 2041,
              "action": "Feast of Nut Who Counts Up Days (CC; Leitz TW 287; LGG1, 217)",
              "tags": "up days nut counts"
          },
          {
              "id": 2042,
              "action": "Procession of Khnum-Ra, Day 5 (final) (TFC Esna)",
              "tags": "khnum-ra"
          }
      ],
      [
          {
              "id": 2046,
              "action": "Birthday of Nut (CC; LA2, 477)",
              "tags": "birthday nut"
          }
      ],
      [
          {
              "id": 2052,
              "action": "Appearance of Haroeris (TFC P6 Kom Ombo)",
              "tags": "haroeris"
          }
      ],
      [
          {
              "id": 2058,
              "action": "Procession of Amunhotep I, true-of-voice, Lord of the Region (AF Cairo 24449 recto; LGG1, 333; oCG 25234 in KRI VII, 370, 11; LA2, 184)",
              "tags": "lord region true-of-voice amunhotep"
          }
      ],
      [
          {
              "id": 2064,
              "action": "Birthday of Apophis (CC; LA2, 477-478; LGG3, 478; Leitz TW 291; see pSallier for ritual to turn Apophis)",
              "tags": "birthday apophis"
          },
          {
              "id": 2065,
              "action": "You may be surprised that the birthday of Apophis, the Uncreated One who opposed and attempted to destroy Ra and all the gods on a daily basis, was noted in ancient Egypt. In fact, Apophis was not honored on this day. Rather, this was a day to remember to protect oneself against the evil and violence that Apophis represented. (Not coincidentally, this date is in the midpoint of the ancient Egyptian year, and the festival is also meant to reinforce rituals against the Uncreated One that were performed at every New Year's Festival.) Essentially, the ancients knew, as we do, that some things happen that are out of our control, and the best one can do about such \"random acts of Apophis\" is to live in ways that honor Ma'at and do not allow evil to gain a foothold in our lives. In antiquity, the resolve not to let Apophis win was symbolized in a ritual where a model snake was cursed and then set on fire, broken, buried, or tossed in a river. The curse, as opposed to a prayer, went like this:",
              "tags": "model cursed ways ancient remember violence do essentially rather antiquity gain curse win honor buried ancients surprised one knew prayer our things let ra apophis or egypt. not best you fire oneself was set broken tossed be control evil that protect attempted honored fact can happen represented. birthday this symbolized live as ma-at against ato may daily such opposed day. destroy lives. all out snake some allow noted basis resolve about where foothold ritual uncreated we river. acts went then random like"
          }
      ],
      [
          {
              "id": 2071,
              "action": "Feast of Horus in Athribis (CC)",
              "tags": "athribis horus"
          }
      ],
      [
          {
              "id": 2078,
              "action": "Appearance of Haroeris, Day 1 of 2 (TFC Kom Ombo Ptolemy VI)",
              "tags": "haroeris"
          },
          {
              "id": 2079,
              "action": "Appearance of Horus and Hathor of Edfu, Day 1 of 2 (TFC Edfu)",
              "tags": "edfu hathor horus"
          },
          {
              "id": 2080,
              "action": "Feast of Horus Behdety, Day 1 of 3 (TFC Edfu)",
              "tags": "behdety horus"
          }
      ],
      [
          {
              "id": 2088,
              "action": "Appearance of Haroeris, Day 2 (final) (TFC Kom Ombo Ptolemy VI)",
              "tags": "haroeris"
          },
          {
              "id": 2089,
              "action": "Appearance of Horus and Hathor of Edfu, Day 2 (final) (TFC Edfu)",
              "tags": "edfu hathor horus"
          },
          {
              "id": 2090,
              "action": "Feast of Horus Behdety, Day 2 of 3 (TFC Edfu)",
              "tags": "behdety horus"
          }
      ],
      [
          {
              "id": 2095,
              "action": "Feast of Horus Behdety, Day 3 (final) (TFC Edfu)",
              "tags": "behdety horus"
          }
      ],
      [
          {
              "id": 2102,
              "action": "Appearance of Haroeris (TFC Kom Ombo Ptolemy VI)",
              "tags": "haroeris"
          }
      ],
      [
          {
              "id": 2109,
              "action": "Feast of Osiris-Onnophris (TFC Ramses II; CC)",
              "tags": "osiris-onnophris"
          }
      ],
      [
          {
              "id": 2114,
              "action": "Festival of Amunhotep I, true-of-voice, Lord of the Region, Day 1 of 4 (LA2, 184; LGG1, 333; oCG 25234 in KRI VII, 370, 11)",
              "tags": "lord region true-of-voice amunhotep"
          }
      ],
      [
          {
              "id": 2119,
              "action": "House of Ra, House of Osiris, House of Horus (Last Day of the Month)",
              "tags": "horus osiris ra"
          },
          {
              "id": 2120,
              "action": "Festival of Amunhotep I, true-of-voice, Lord of the Region, Day 2 of 4 (LA2, 184; LGG1, 333; oCG 25234 in KRI VII, 370, 11)",
              "tags": "lord region true-of-voice amunhotep"
          }
      ],
      [
          {
              "id": 2127,
              "action": "First Day of the Month",
              "tags": "month first"
          },
          {
              "id": 2128,
              "action": "Feast of Ra and the Eye of Ra, Day 1 of 4 (TFC Edfu)",
              "tags": "eye ra"
          },
          {
              "id": 2129,
              "action": "Feast of Horus and the Eye of Horus (TFC Edfu) Rekeh-sheri (or",
              "tags": "or rekeh-sheri horus eye"
          },
          {
              "id": 2130,
              "action": "Rekeh-nedjes , \"Lesser Burning\") Festival (LA2, 177; TFC Illahun; Middle Kingdom/early New Kingdom only)",
              "tags": "burning lesser rekeh-nedjes"
          },
          {
              "id": 2131,
              "action": "Feast of Renenutet (AF Ostraca non cit 35, 14, see Cerny; LA2, 177 Middle Kingdom and Greco-Roman references)",
              "tags": "renenutet"
          },
          {
              "id": 2132,
              "action": "Festival of Amunhotep I, true-of-voice, Lord of the Region, Day 3 of 4 (LA2, 184; LGG1, 333; oCG 25234 in KRI VII, 370, 11)",
              "tags": "lord region true-of-voice amunhotep"
          }
      ],
      [
          {
              "id": 2138,
              "action": "Feast of Ra and the Eye of Ra, Day 2 of 4 (TFC Edfu, details lost)",
              "tags": "eye ra"
          },
          {
              "id": 2139,
              "action": "Procession of Geb \"to see Anubis\" (CC)",
              "tags": "to anubis geb see"
          },
          {
              "id": 2140,
              "action": "Feast of Amunhotep I, true-of-voice, Lord of the Region, Day 4 (final) (LA2, 184; LGG1, 333; oCG 25234 in KRI VII, 370, 11)",
              "tags": "lord region true-of-voice amunhotep"
          }
      ],
      [
          {
              "id": 2147,
              "action": "Ra and the Eye of Ra, Day 3 of 4 (TFC Edfu)",
              "tags": "eye ra"
          },
          {
              "id": 2148,
              "action": "Festival of Horus, Son of Ra (TFC Kom Ombo)",
              "tags": "horus ra son"
          },
          {
              "id": 2149,
              "action": "The Udjat-Eye of Haroeris Fights the Great Ones (CC; LGG7, 122; Leitz TW 303)",
              "tags": "ones fights great haroeris udjat-eye"
          },
          {
              "id": 2150,
              "action": "\"Festival of Horus, son of Ra (i.e., Haroeris); performing his rites.\" (TFC Kom Ombo)",
              "tags": "horus son rites. performing ra"
          }
      ],
      [
          {
              "id": 2156,
              "action": "Ra and the Eye of Ra, Day 4 (final) (TFC Edfu)",
              "tags": "eye ra"
          },
          {
              "id": 2157,
              "action": "Feast of Pakhet and Horus Lord of Life (TFC Edfu)",
              "tags": "lord horus life pakhet"
          },
          {
              "id": 2158,
              "action": "Great Festival of Bast/Day of Chewing Onions for Bast, Day 1 of 2 (LGG2, 740; KRI III, 803, 4; Hari 1985, plate 38.185; TFC/AF Medinet Habu Ramses III; Medinet Habu Calendar 1373; Medinet Habu III, plate 165, after Feucht 1985, 32; LA1, 629 Thebes; AF TT50 tomb of Neferhotep, dated to Horemheb; AF TT341 tomb of Nakhtamun, dated to Ramses II; AF TT2 tomb of Khabekhnet, 19th/20th Dynasty; LA2; Herodotus II, 60ff; LA7, 738)",
              "tags": "chewing onions great bast day"
          },
          {
              "id": 2159,
              "action": "Offerings to Amun-Ra and His Ennead (AF Medinet Habu Ramses III suggests this may go with the celebration of the Bast festival at Thebes)",
              "tags": "ennead amun-ra"
          }
      ],
      [
          {
              "id": 2165,
              "action": "Great Festival of Bast/Day of Chewing Onions for Bast/Boat Procession of Bast, Day 2 (LGG2, 740; KRI III, 803, 4; Hari, Neferhotep , plate 38.185; AF Medinet Habu Ramses III; Medinet Habu Calendar 1373; Medinet Habu III, plate 165, after Feucht, Nefersecheru 32; TFC Medinet Habu Ramses III; LA1, 629 Thebes; AF TT50 tomb of Neferhotep, dated to Horemheb; AF TT341 tomb of Nakhtamun, dated to Ramses II; AF TT2 tomb of Khabekhnet, 19th/20th Dynasty; LA2; Herodotus II, 60ff; LA7, 738)",
              "tags": "chewing onions great bast day boat"
          }
      ],
      [
          {
              "id": 2172,
              "action": "Sixth-Day Festival",
              "tags": "sixth-day festival"
          },
          {
              "id": 2173,
              "action": "Going Forth of the Bitter[ly Red] Star[s] (CC, LGG6, 243; Leitz TW 306)",
              "tags": "going star bitter forth"
          }
      ],
      [
          {
              "id": 2179,
              "action": "Procession of Min (CC)",
              "tags": "min"
          }
      ],
      [
          {
              "id": 2185,
              "action": "Feast of the Udjat, Day 1 of 2 (CC)",
              "tags": "udjat"
          }
      ],
      [
          {
              "id": 2192,
              "action": "Feast of the Udjat, Day 2 (final) (CC)",
              "tags": "udjat"
          }
      ],
      [
          {
              "id": 2199,
              "action": "She-Who-Watches-on-the-Road (epithet of the Eye of Ra) (LGG6, 137, Dendera, Dendera Mammisi, and Edfu)",
              "tags": "she-who-watches-on-the-road"
          },
          {
              "id": 2200,
              "action": "Sobek Lord of Anasha (LGG6, 259 and Leitz 2002, 142 and 151, Edfu)",
              "tags": "sobek lord anasha"
          },
          {
              "id": 2201,
              "action": "Hathor, Lady of the Sycamore(-quarter) (location near Memphis) (LGG4, 80, Dendera and Dendera Mammisi)",
              "tags": "hathor sycamore"
          },
          {
              "id": 2202,
              "action": "Hathor, Lady of Sebty (unknown location) (LGG4, 126, Edfu)",
              "tags": "hathor sebty"
          },
          {
              "id": 2203,
              "action": "Appearance of Tasenetnofret, Hathor, and Min (TFC Kom Ombo Ptolemy VI; Day 1 of 2 for Min only)",
              "tags": "min hathor tasenetnofret"
          }
      ],
      [
          {
              "id": 2209,
              "action": "Appearance of Min, Day 2 (final) (TFC Kom Ombo Ptolemy VI)",
              "tags": "min"
          },
          {
              "id": 2210,
              "action": "Procession of Neith and Heka (Divine Birth Mystery; can also be second day of the lunar month) (TFC Esna)",
              "tags": "neith heka"
          },
          {
              "id": 2211,
              "action": "Birth of Ra and the Son of Shu and Tefnut (Divine Birth Mystery; can also be second day of the lunar month) (LA2, 477, Philae)",
              "tags": "tefnut birth shu son ra"
          }
      ],
      [
          {
              "id": 0,
              "action": "No Festivals Today",
              "tags": "none"
          }
      ],
      [
          {
              "id": 2217,
              "action": "\"Conducting Osiris in His Ship to Abydos\" (CC)",
              "tags": "ship osiris conducting abydos"
          }
      ],
      [
          {
              "id": 2224,
              "action": "Going Forth to the Sky (TFC Illahun; may also be IV Peret 15)",
              "tags": "going sky forth"
          }
      ],
      [
          {
              "id": 2229,
              "action": "Festival of the Half-Month",
              "tags": "half-month"
          },
          {
              "id": 2230,
              "action": "Going Forth to the Sky (TFC Illahun; may also be IV Peret 14)",
              "tags": "going sky forth"
          }
      ],
      [
          {
              "id": 2235,
              "action": "Procession of Khepera (CC)",
              "tags": "khepera"
          }
      ],
      [
          {
              "id": 2241,
              "action": "Procession of Set, Son of Nut (CC)",
              "tags": "nut set son"
          }
      ],
      [
          {
              "id": 2246,
              "action": "Procession of Ra (CC)",
              "tags": "ra"
          }
      ],
      [
          {
              "id": 2252,
              "action": "Appearance and Festival of Ra in His Barque (CC)",
              "tags": "barque ra"
          }
      ],
      [
          {
              "id": 2259,
              "action": "Appearance of Sobek and Min, Lord of the Two Lands (TFC Kom Ombo Ptolemy VI)",
              "tags": "min lands sobek lord two"
          }
      ],
      [
          {
              "id": 2265,
              "action": "Feast of Montu (LGG3, 319, Edfu)",
              "tags": "montu"
          }
      ],
      [
          {
              "id": 2271,
              "action": "Killing the Children of Bedesh (CC; LGG3, 423; Leitz TW 321)",
              "tags": "bedesh children killing"
          }
      ],
      [
          {
              "id": 2276,
              "action": "Offerings to the Ancestors in Abydos (CC; TFC Ramses II)",
              "tags": "ancestors abydos"
          }
      ],
      [
          {
              "id": 0,
              "action": "No Festivals Today",
              "tags": "none"
          }
      ],
      [
          {
              "id": 2288,
              "action": "Feast of Set, Lord of the Oasis, Day 1 of 2 (JEA 19 Dakhleh stela; LGG6, 692; Oxford Stela see Spiegelberg, 1899, 14)",
              "tags": "lord oasis set"
          }
      ],
      [
          {
              "id": 2293,
              "action": "Feast of Set, Lord of the Oasis, Day 2 (final) (JEA 19 Dakhleh stela; LGG6, 692; Oxford Stela see Spiegelberg 1899, 14)",
              "tags": "lord oasis set"
          },
          {
              "id": 2294,
              "action": "Feast of Hathor of Dendera (LGG5, 76)",
              "tags": "hathor dendera"
          }
      ],
      [
          {
              "id": 2299,
              "action": "Feast of Renenutet (Measuring the Grain Festival) (LA2; AF TT48 tomb of Amunemhat; LA2; AF TT37; LA5, 232)",
              "tags": "renenutet"
          },
          {
              "id": 2300,
              "action": "Sekhmet Rages in the Land of the Tjemhu",
              "tags": "rages sekhmet land tjemhu"
          }
      ],
      [
          {
              "id": 2306,
              "action": "Feast of Horus of Hierakonpolis Magna (TFC Edfu; LGG5, 266)",
              "tags": "hierakonpolis horus magna"
          },
          {
              "id": 2307,
              "action": "Procession of Harsiese and Heka-the-Child (TFC Esna)",
              "tags": "heka-the-child harsiese"
          },
          {
              "id": 2308,
              "action": "Feast of Horus-Sepa, son of Sekhmet (TFC Edfu)",
              "tags": "horus-sepa sekhmet son"
          }
      ],
      [
          {
              "id": 2313,
              "action": "Adorations to Onnophris (CC)",
              "tags": "onnophris adorations"
          }
      ],
      [
          {
              "id": 2318,
              "action": "House of Ra, House of Osiris, House of Horus (Last Day of the Month)",
              "tags": "horus osiris ra"
          },
          {
              "id": 2319,
              "action": "Offering to Ptah-Sokar-Osiris, Atum, and All the Gods (CC)",
              "tags": "ptah-sokar-osiris atum all offering"
          },
          {
              "id": 2320,
              "action": "Procession of Nebtu (TFC Esna)",
              "tags": "nebtu"
          },
          {
              "id": 2321,
              "action": "Renenutet Festival of Mut (evening of IV Peret 30 through morning of I Shomu I; Sauneron, plate 9; Esna II, 77; LGG4, 687)",
              "tags": "renenutet mut"
          },
          {
              "id": 2322,
              "action": "Shomu contains fewer festivals than the other two seasons, but there are several large, important national festivals. Two of them are marked on successive new moons (in II and III Shomu respectively): the Beautiful Feast of the Valley and the Festival of the Beautiful Reunion. In the Valley festival, people gathered on the Nile's western bank at Thebes to visit the eastern bank necropolis and stay with their ancestors in the tombs, as the gods of Thebes — Amun-Ra, Mut, and Khonsu — also went to the necropolis to bless the dead. At the Beautiful Reunion, one entire city sailed to another in festival: the people of the city of Edfu and their god Horus journeyed downstream to the city of Dendera and their goddess Hathor, for a multi-week wedding celebration.",
              "tags": "western one their dead. there — shomu edfu goddess also wedding reunion. tombs necropolis eastern contains several horus them important reunion large valley with journeyed downstream multi-week thebes beautiful as fewer national marked entire sailed but festivals new gathered other stay bless mut khonsu bank another hathor celebration. visit dendera nile ancestors two people went than moons festivals. successive city amun-ra seasons"
          }
      ],
      [
          {
              "id": 2327,
              "action": "First Day of the Month",
              "tags": "month first"
          },
          {
              "id": 2328,
              "action": "Feast of the Hand of God (i.e., Hathor Iusaas , \"she is brought\") (LGG2, 311; LGG3, 270; Edfu V, 400 note 7; Dendera Naos LD IV, 69d; this festival runs to II Shomu 1)",
              "tags": "hand"
          },
          {
              "id": 2329,
              "action": "Appearance of Harsiese and His Followers, Day 1 of 8 (TFC Kom Ombo Ptolemy VI; CC)",
              "tags": "followers harsiese"
          },
          {
              "id": 2330,
              "action": "Feast of Harsomtus of Edfu (LA2)",
              "tags": "harsomtus edfu"
          },
          {
              "id": 2331,
              "action": "Feast of Renenutet (LA2, TFC; TT57; LGG4, 688 note 45; AF TT50 tomb of Neferhotep, dated to Horemheb; LA2 reference says at Thebes the Renenutet fest is in honor of Amun)",
              "tags": "renenutet"
          },
          {
              "id": 2332,
              "action": "Birthday of Renenutet at Esna (LA2, 477)",
              "tags": "birthday renenutet esna"
          },
          {
              "id": 2333,
              "action": "Birthday of Shu and Tefnut at Philae (LA2, 477)",
              "tags": "birthday philae tefnut shu"
          },
          {
              "id": 2334,
              "action": "Birth of Nepri (AF TT52 tomb of Khaemhet, dated to Amunhotep III; LA2, 477; LGG4, 203; AF tomb TT57; URK IV 1844; LA4, 454, Amenemhet III and IV with a note of five days of festival; LA3, 196 birth of Nepri-Osiris and Feast of His Mother Isis)",
              "tags": "birth nepri"
          },
          {
              "id": 2335,
              "action": "Appearance of Min, Tasenetnofret, and Hathor (TFC Kom Ombo Ptolemy VI)",
              "tags": "min hathor tasenetnofret"
          },
          {
              "id": 2336,
              "action": "Sunset Prayers and Feasts for All Gods",
              "tags": "feasts gods sunset all prayers"
          },
          {
              "id": 2337,
              "action": "Feast of Khnum, Nebtu, Heka, Thoth, and All the Gods (LA2; LGG4, 35; Esna II, 77, 11; LGG5, 553)",
              "tags": "all nebtu heka thoth khnum"
          }
      ],
      [
          {
              "id": 2342,
              "action": "Appearance of Harsiese and His Followers, Day 2 of 8 (TFC Kom Ombo Ptolemy VI; CC)",
              "tags": "followers harsiese"
          },
          {
              "id": 2343,
              "action": "Festival calendars at the Akhmenu temple in Karnak indicate a \"revealing the face\" on this day. This phrase is the name of a daily ritual and does not indicate a special festival, though it is explicitly mentioned in the calendars as occurring on this particular day (TFC Akhmenu Thutmose III).",
              "tags": "name karnak face though it indicate mentioned this does revealing akhmenu occurring special as ritual explicitly calendars not daily day. temple particular. phrase"
          }
      ],
      [
          {
              "id": 2349,
              "action": "Appearance of Harsiese and His Followers, Day 3 of 8 (TFC Kom Ombo Ptolemy VI; CC)",
              "tags": "followers harsiese"
          },
          {
              "id": 2350,
              "action": "Procession and Appearance of Heka (TFC Esna)",
              "tags": "heka"
          }
      ],
      [
          {
              "id": 2356,
              "action": "Appearance of Harsiese and His Followers, Day 4 of 8 (TFC Kom Ombo Ptolemy VI; CC)",
              "tags": "followers harsiese"
          },
          {
              "id": 2357,
              "action": "Feast of Anukis, Day 1 of 3 (boat navigation by water) (LA1, 334; Stela CG 34019 dated to Amunhotep II)",
              "tags": "anukis"
          },
          {
              "id": 2358,
              "action": "Feast of Horus of Edfu (LA2)",
              "tags": "edfu horus"
          }
      ],
      [
          {
              "id": 2364,
              "action": "Appearance of Harsiese and His Followers, Day 5 of 8 (TFC Kom Ombo Ptolemy VI; CC)",
              "tags": "followers harsiese"
          },
          {
              "id": 2365,
              "action": "Feast of Anukis, Day 2 of 3 (boat navigation by water) (LA1, 334; Stele CG 34019 dated to Amunhotep II)",
              "tags": "anukis"
          },
          {
              "id": 2366,
              "action": "Feast of Banebdjedet (LGG2, 684; Leitz TW 331; CC)",
              "tags": "banebdjedet"
          }
      ],
      [
          {
              "id": 2372,
              "action": "Appearance of Harsiese and His Followers, Day 6 of 8 (TFC Kom Ombo Ptolemy VI; CC)",
              "tags": "followers harsiese"
          },
          {
              "id": 2373,
              "action": "Feast of Anukis, Day 3 (final) (boat navigation by water) (LA1, 334; Stela CG 34019 dated to Amunhotep II)",
              "tags": "anukis"
          },
          {
              "id": 2374,
              "action": "Sixth-Day Festival",
              "tags": "sixth-day festival"
          },
          {
              "id": 2375,
              "action": "Appearance of Tasenetnofret and Min (TFC Kom Ombo Ptolemy VI)",
              "tags": "min tasenetnofret"
          },
          {
              "id": 2376,
              "action": "Procession of Heka (TFC Esna)",
              "tags": "heka"
          },
          {
              "id": 2377,
              "action": "\"The Great Ones and Their Followers Receive the Udjat\" (CC; LGG2, 462; Leitz TW 332)",
              "tags": "ones udjat their receive great followers"
          }
      ],
      [
          {
              "id": 2382,
              "action": "Appearance of Harsiese and His Followers, Day 7 of 8 (TFC Kom Ombo Ptolemy VI; CC)",
              "tags": "followers harsiese"
          }
      ],
      [
          {
              "id": 2389,
              "action": "Appearance of Harsiese and His Followers, Day 8 (final) (TFC Kom Ombo Ptolemy VI; CC)",
              "tags": "followers harsiese"
          }
      ],
      [
          {
              "id": 0,
              "action": "No Festivals Today",
              "tags": "none"
          }
      ],
      [
          {
              "id": 2400,
              "action": "Hathor Proceeds Upstream (CC)",
              "tags": "proceeds hathor upstream"
          },
          {
              "id": 2401,
              "action": "Clothing Anubis (TFC Medinet Habu Ramses III; AF Medinet Habu Calendar 1416)",
              "tags": "anubis clothing"
          }
      ],
      [
          {
              "id": 2407,
              "action": "Birthday of Shu and Tefnut, Day 1 of 10 (LA3, 217; TFC Edfu)",
              "tags": "birthday tefnut shu"
          },
          {
              "id": 2408,
              "action": "Procession of Hathor and Her Great Nine, Day 1 of 3 (TFC Dendera with related lunar festival; LGG4, 11, Edfu Mammisi: \"Hathor, Lady of Dendera, goes to Edfu with her child.\")",
              "tags": "hathor great nine"
          },
          {
              "id": 2409,
              "action": "Appearance of Horus (TFC Kom Ombo Ptolemy VI)",
              "tags": "horus"
          },
          {
              "id": 2410,
              "action": "Feast and Procession of Min to the Temple Steps (also I Shomu 15, see LA4, 142; LGG5, 656; Min is \"He who protects the moon\" in the New Kingdom festival entry in Medinet Habu IV, 197, 1; Leitz 2002, 154, Edfu)",
              "tags": "temple min steps feast"
          },
          {
              "id": 2411,
              "action": "Feast of the Divine Birth at Dendera, Day 1 of 5 (LA2, 1036)",
              "tags": "birth dendera divine"
          }
      ],
      [
          {
              "id": 2414,
              "action": "Birthday of Shu and Tefnut, Day 2 of 10 (LA3, 217; TFC Edfu)",
              "tags": "birthday tefnut shu"
          },
          {
              "id": 2415,
              "action": "Procession of Hathor and Her Great Nine, Day 2 of 3 (TFC Dendera with related lunar festival; LGG4, 11, Edfu Mammisi: \"Hathor, Lady of Dendera, goes to Edfu with her child.\")",
              "tags": "hathor great nine"
          },
          {
              "id": 2416,
              "action": "Feast of the Divine Birth at Dendera, Day 2 of 5 (LA2, 1036)",
              "tags": "birth dendera divine"
          }
      ],
      [
          {
              "id": 2421,
              "action": "Birthday of Shu and Tefnut, Day 3 of 10 (LA3, 217; TFC Edfu)",
              "tags": "birthday tefnut shu"
          },
          {
              "id": 2422,
              "action": "Procession of Hathor and Her Great Nine, Day 3 (final) (TFC Dendera with related lunar festival; LGG4, 11, Edfu Mammisi: \"Hathor, Lady of Feast of the Divine Birth at Dendera,\" Day 3 of 5; LA2, 1036)",
              "tags": "hathor great nine"
          }
      ],
      [
          {
              "id": 2428,
              "action": "Birthday of Shu and Tefnut, Day 4 of 10 (LA3, 217; TFC Edfu)",
              "tags": "birthday tefnut shu"
          },
          {
              "id": 2429,
              "action": "Feast of the Divine Birth at Dendera, Day 4 of 5 (LA2, 1036)",
              "tags": "birth dendera divine"
          },
          {
              "id": 2430,
              "action": "Crowning of Heka, Day 1 of 12 (TFC Esna)",
              "tags": "heka crowning"
          }
      ],
      [
          {
              "id": 2435,
              "action": "Birthday of Shu and Tefnut, Day 5 of 10 (LA3, 217; TFC Edfu)",
              "tags": "birthday tefnut shu"
          },
          {
              "id": 2436,
              "action": "Feast of the Divine Birth at Dendera, Day 5 (final) (LA2, 1036)",
              "tags": "birth dendera divine"
          },
          {
              "id": 2437,
              "action": "Crowning of Heka, Day 2 of 12 (TFC Esna)",
              "tags": "heka crowning"
          },
          {
              "id": 2438,
              "action": "Feast of the Half Month",
              "tags": "half month"
          },
          {
              "id": 2439,
              "action": "Birthday of Horus, Son of Hathor (LA2, 477, Edfu)",
              "tags": "birthday hathor horus son"
          },
          {
              "id": 2440,
              "action": "Appearance of Min-Amun (boat procession; TFC Kom Ombo Ptolemy VI)",
              "tags": "min-amun"
          }
      ],
      [
          {
              "id": 2446,
              "action": "Birthday of Shu and Tefnut, Day 6 of 10 (LA3, 217; TFC Edfu)",
              "tags": "birthday tefnut shu"
          },
          {
              "id": 2447,
              "action": "Crowning of Heka, Day 3 of 12 (TFC Esna)",
              "tags": "heka crowning"
          }
      ],
      [
          {
              "id": 2452,
              "action": "Birthday of Shu and Tefnut, Day 7 of 10 (LA3, 217; TFC Edfu)",
              "tags": "birthday tefnut shu"
          },
          {
              "id": 2453,
              "action": "Crowning of Heka, Day 4 of 12 (TFC Esna)",
              "tags": "heka crowning"
          }
      ],
      [
          {
              "id": 2458,
              "action": "Birthday of Shu and Tefnut, Day 8 of 10 (LA3, 217; TFC Edfu)",
              "tags": "birthday tefnut shu"
          },
          {
              "id": 2459,
              "action": "Crowning of Heka, Day 5 of 12 (TFC Esna)",
              "tags": "heka crowning"
          }
      ],
      [
          {
              "id": 2463,
              "action": "Birthday of Shu and Tefnut, Day 9 of 10 (LA3, 217; TFC Edfu)",
              "tags": "birthday tefnut shu"
          },
          {
              "id": 2464,
              "action": "Crowning of Heka, Day 6 of 12 (TFC Esna)",
              "tags": "heka crowning"
          },
          {
              "id": 2465,
              "action": "Counting of Thoth, \"Who Heard Ma'at\" (CC; LGG7, 642; Leitz TW 343)",
              "tags": "ma-at who heard thoth counting"
          },
          {
              "id": 2466,
              "action": "Appearance of Khonsu (TFC Edfu; Edfu V 124/12, 131/5; LGG5, 768)",
              "tags": "khonsu"
          }
      ],
      [
          {
              "id": 2468,
              "action": "Birthday of Shu and Tefnut, Day 10 (final) (LA3, 217; TFC Edfu)",
              "tags": "birthday tefnut shu"
          },
          {
              "id": 2469,
              "action": "Crowning of Heka, Day 7 of 12 (TFC Esna)",
              "tags": "heka crowning"
          },
          {
              "id": 2470,
              "action": "Ma'at Judges before the Gods",
              "tags": "ma-at gods judges"
          }
      ],
      [
          {
              "id": 2476,
              "action": "Crowning of Heka, Day 8 of 12 (TFC Esna)",
              "tags": "heka crowning"
          }
      ],
      [
          {
              "id": 2481,
              "action": "Procession of Sobek-Hapi (LGG6, 263; LGG4, 687)",
              "tags": "sobek-hapi"
          },
          {
              "id": 2482,
              "action": "Crowning of Heka, Day 9 of 12 (TFC Esna)",
              "tags": "heka crowning"
          }
      ],
      [
          {
              "id": 2489,
              "action": "Crowning of Heka, Day 10 of 12 (TFC Esna)",
              "tags": "heka crowning"
          }
      ],
      [
          {
              "id": 2495,
              "action": "Crowning of Heka, Day 11 of 12 (TFC Esna)",
              "tags": "heka crowning"
          }
      ],
      [
          {
              "id": 2501,
              "action": "Crowning of Heka, Day 12 (final) (TFC Esna)",
              "tags": "heka crowning"
          },
          {
              "id": 2502,
              "action": "Festival of Horus Behdety (TFC Edfu)",
              "tags": "behdety horus"
          },
          {
              "id": 2503,
              "action": "Procession of Heka, Nebtu, and Khnum (TFC Esna)",
              "tags": "heka khnum nebtu"
          }
      ],
      [
          {
              "id": 0,
              "action": "No Festivals Today",
              "tags": "none"
          }
      ],
      [
          {
              "id": 2512,
              "action": "Feast of Amunhotep I, true-of-voice (LA2, 184, Ramesside Theban necropolis; feast and oracle)",
              "tags": "true-of-voice amunhotep"
          }
      ],
      [
          {
              "id": 0,
              "action": "No Festivals Today",
              "tags": "none"
          }
      ],
      [
          {
              "id": 0,
              "action": "No Festivals Today",
              "tags": "none"
          }
      ],
      [
          {
              "id": 2528,
              "action": "House of Ra, House of Osiris, House of Horus (Last Day of the Month)",
              "tags": "horus osiris ra"
          },
          {
              "id": 2529,
              "action": "Feast of Min (CC)",
              "tags": "min"
          }
      ],
      [
          {
              "id": 2534,
              "action": "First Day of the Month",
              "tags": "month first"
          },
          {
              "id": 2535,
              "action": "Appearance of Khnum, Neith, and Nebtu (TFC Esna)",
              "tags": "neith khnum nebtu"
          },
          {
              "id": 2536,
              "action": "Appearance of Nephthys (TFC Esna)",
              "tags": "nephthys"
          },
          {
              "id": 2537,
              "action": "Feast of Hathor (TFC Edfu; entire month of II Shomu)",
              "tags": "hathor"
          },
          {
              "id": 2538,
              "action": "Feast of Montu",
              "tags": "montu"
          },
          {
              "id": 2539,
              "action": "Oracle of Amunhotep I (AF BM5627 ostraca, end of Dynasty 18; LA2, 184)",
              "tags": "amunhotep"
          }
      ],
      [
          {
              "id": 2543,
              "action": "Festival of Ra's Crew (CC)",
              "tags": "crew ra"
          }
      ],
      [
          {
              "id": 2548,
              "action": "Holiday of the Month of Ra's Followers (lit., \"those who are in Ra's body\"; LGG1, 277; Leitz TW 353)",
              "tags": "holiday month followers ra"
          }
      ],
      [
          {
              "id": 2553,
              "action": "Geb and Nut Are Judged before the Gods (CC)",
              "tags": "judged geb nut"
          },
          {
              "id": 2554,
              "action": "Procession of Khnum, Neith, and Nebtu (TFC Esna)",
              "tags": "neith khnum nebtu"
          }
      ],
      [
          {
              "id": 0,
              "action": "No Festivals Today",
              "tags": "none"
          }
      ],
      [
          {
              "id": 2565,
              "action": "Sixth-Day Festival",
              "tags": "sixth-day festival"
          },
          {
              "id": 2566,
              "action": "Horus Inquires from Osiris-Onnophris (CC)",
              "tags": "horus inquires osiris-onnophris"
          }
      ],
      [
          {
              "id": 2573,
              "action": "Appearance of Khenty-Osiris",
              "tags": "khenty-osiris"
          },
          {
              "id": 2574,
              "action": "Day of the Executioners of Sekhmet (lit., going forth of the seven arrows/knife demons of Sekhmet) (CC; Leitz TW 356)",
              "tags": "executioners sekhmet day"
          }
      ],
      [
          {
              "id": 2580,
              "action": "Holiday of Ra and His Followers",
              "tags": "holiday followers ra"
          },
          {
              "id": 2581,
              "action": "Appearance of Harsiese, Day 1 of 2 (TFC Kom Ombo Ptolemy VI)",
              "tags": "harsiese"
          },
          {
              "id": 2582,
              "action": "Festival of Horus of Letopolis (LA3, 43, Edfu and Kom Ombo)",
              "tags": "horus letopolis"
          }
      ],
      [
          {
              "id": 2588,
              "action": "Appearance of Harsiese, Day 2 (final) (TFC Kom Ombo Ptolemy VI)",
              "tags": "harsiese"
          },
          {
              "id": 2589,
              "action": "Procession of Ra \"to see Shu\" (CC; TFC Esna)",
              "tags": "to see ra shu"
          }
      ],
      [
          {
              "id": 2594,
              "action": "Appearance of Amun (TFC Kom Ombo Ptolemy VI)",
              "tags": "amun"
          },
          {
              "id": 2595,
              "action": "Procession of Heka (TFC Esna)",
              "tags": "heka"
          }
      ],
      [
          {
              "id": 0,
              "action": "No Festivals Today",
              "tags": "none"
          }
      ],
      [
          {
              "id": 2609,
              "action": "Nun and Nunet (LGG3, 520, Kom Ombo; variant The Great Eight Kau",
              "tags": "variant kom nunet lgg great ombo kau eight nun"
          },
          {
              "id": 2610,
              "action": "(male spirits) or The Great Eight Hemsut (female spirits)",
              "tags": "great eight hemsut"
          },
          {
              "id": 2611,
              "action": "Atum, Lord of the Two Lands (LGG7, 418, Edfu)",
              "tags": "atum two lands lord"
          },
          {
              "id": 2612,
              "action": "Shezemtet-in-Festival (LGG7, 125, Dendera)",
              "tags": "shezemtet-in"
          },
          {
              "id": 2613,
              "action": "Lady of Khau (unknown location) (epithet of Eye of Ra) (LGG4, 114, Edfu)",
              "tags": "khau"
          },
          {
              "id": 2614,
              "action": "Hathor, Lady of Shas (unknown location) (LGG4, 140, Edfu and Kom Ombo)",
              "tags": "hathor shas"
          },
          {
              "id": 2615,
              "action": "Isis (LGG1, 62, Dendera)",
              "tags": "isis"
          }
      ],
      [
          {
              "id": 2621,
              "action": "Feast of Wadjet and Her Followers (CC)",
              "tags": "followers wadjet"
          }
      ],
      [
          {
              "id": 2627,
              "action": "Feast of Hathor, Mistress of Agny (TFC Esna)",
              "tags": "mistress hathor agny"
          },
          {
              "id": 2628,
              "action": "Navigation of Nebtu, Day 1 of 2 (TFC Esna)",
              "tags": "navigation nebtu"
          },
          {
              "id": 2629,
              "action": "Procession and Oracle of Ahmose-Nefertari, Day 1 of 2 (LA1, 105-106; LA2, 183; AF Daybook of Theban Necropolis Workers)",
              "tags": "ahmose-nefertari"
          }
      ],
      [
          {
              "id": 2634,
              "action": "Feast of the Half Month",
              "tags": "half month"
          },
          {
              "id": 2635,
              "action": "Navigation of Nebtu, Day 2 (final) (TFC Esna)",
              "tags": "navigation nebtu"
          },
          {
              "id": 2636,
              "action": "Procession/Oracle of Ahmose-Nefertari, Day 2 (final) (LA1, 105-106; LA2, 183; AF Daybook of Theban Necropolis Workers)",
              "tags": "ahmose-nefertari"
          }
      ],
      [
          {
              "id": 2642,
              "action": "Appearance of Haroeris and Min (TFC Kom Ombo Ptolemy VI)",
              "tags": "min haroeris"
          },
          {
              "id": 2643,
              "action": "Feast of Menhyt (TFC Esna; LGG3, 306; Esna II, 77, 15)",
              "tags": "menhyt"
          },
          {
              "id": 2644,
              "action": "Feast of Bast (TFC Esna; Esna II, 77, 15; Esna V, 25; LA1, 629; LA2, 178; LGG2, 740)",
              "tags": "bast"
          },
          {
              "id": 2645,
              "action": "Purification of Sekhmet (TFC Esna; LGG6, 558; Esna II, 77, 15; LA5)",
              "tags": "purification sekhmet"
          }
      ],
      [
          {
              "id": 2651,
              "action": "Feast of Thoth (Middle Kingdom, related to I Akhet 19 feast, LA2, 174)",
              "tags": "thoth"
          }
      ],
      [
          {
              "id": 2657,
              "action": "Procession of Osiris (CC)",
              "tags": "osiris"
          }
      ],
      [
          {
              "id": 2662,
              "action": "Appearance of Harsiese (TFC Kom Ombo Ptolemy VI)",
              "tags": "harsiese"
          },
          {
              "id": 2663,
              "action": "The Ennead Sails on the Day of Judging of the Great Ones",
              "tags": "ones ennead great sails judging"
          }
      ],
      [
          {
              "id": 2669,
              "action": "Grasping-the-Crook Festival for Min and Procession of Hathor (LA2, 179, Old Kingdom)",
              "tags": "grasping-the-crook min hathor"
          }
      ],
      [
          {
              "id": 2676,
              "action": "Day of the Living Children of Nut (CC)",
              "tags": "children nut day living"
          },
          {
              "id": 2677,
              "action": "Greening-the-Fields Feast of Min and Hathor (LA 2, 179, Old Kingdom; TFC Esna, Greco-Roman Period)",
              "tags": "min hathor greening-the-fields"
          }
      ],
      [
          {
              "id": 0,
              "action": "No Festivals Today",
              "tags": "none"
          }
      ],
      [
          {
              "id": 2684,
              "action": "Thanksgiving Festival of Amun (TFC Thebes Ramses IV)",
              "tags": "amun thanksgiving"
          }
      ],
      [
          {
              "id": 0,
              "action": "No Festivals Today",
              "tags": "none"
          }
      ],
      [
          {
              "id": 2694,
              "action": "Procession of Hathor to the Southern House of Horus, Day 1 of 5 (LA2, 1036-1037, Dendera)",
              "tags": "hathor horus southern"
          }
      ],
      [
          {
              "id": 2698,
              "action": "Procession of Hathor to the Southern House of Horus, Day 2 of 5 (LA2, 1036-1037, Dendera; LGG5, 76)",
              "tags": "hathor horus southern"
          },
          {
              "id": 2699,
              "action": "Appearance of Neith \"with the weavers\" (TFC Esna; CC; LGG5, 944; Leitz TW 369)",
              "tags": "neith weavers with"
          }
      ],
      [
          {
              "id": 2703,
              "action": "Procession of Hathor to the Southern House of Horus, Day 3 of 5 (LA2, 1036-1037, Dendera; TFC Dendera)",
              "tags": "hathor horus southern"
          },
          {
              "id": 2704,
              "action": "Appearance of Haroeris, Haroeris' standard, and Min at Coptos (TFC Kom Ombo Ptolemy VI)",
              "tags": "haroeris-standard min coptos haroeris"
          }
      ],
      [
          {
              "id": 2711,
              "action": "Procession of Hathor to the Southern House of Horus, Day 4 of 5 (LA2, 1036-1037, Dendera)",
              "tags": "hathor horus southern"
          },
          {
              "id": 2712,
              "action": "Feast of Purification and Offerings in Busiris (CC; AF Taharqa chapel, Karnak)",
              "tags": "purification busiris"
          },
          {
              "id": 2713,
              "action": "Food-Offerings for the Ogdoad (LGG5, 742, Leclant 1961, 213)",
              "tags": "food- ogdoad"
          }
      ],
      [
          {
              "id": 2719,
              "action": "Procession of Hathor to the Southern House of Horus, Day 5 (final) (LA2, 1036-1037, Dendera)",
              "tags": "hathor horus southern"
          }
      ],
      [
          {
              "id": 2723,
              "action": "House of Ra, House of Osiris, House of Horus (Last Day of the Month)",
              "tags": "horus osiris ra"
          },
          {
              "id": 2724,
              "action": "Day of Pacifying Sekhmet (TFC Esna; LA5, 328; LGG6, 558; Esna II, 77, 15)",
              "tags": "sekhmet pacifying day"
          },
          {
              "id": 2725,
              "action": "Procession of Shu to Retrieve the Udjat: \"Thoth Calms Her\" (CC; Leitz TW 373; LGG2, 646)",
              "tags": "calms udjat retrieve shu thoth her"
          }
      ],
      [
          {
              "id": 2729,
              "action": "First Day of the Month",
              "tags": "month first"
          },
          {
              "id": 2730,
              "action": "Feast of Thoeris (CC; LGG1, 219; LA2)",
              "tags": "thoeris"
          },
          {
              "id": 2731,
              "action": "Birth of Ra and the Son of Shu and Tefnut (LA2, 477, Philae; also placed into the civil calendar at I Shomu 1)",
              "tags": "tefnut birth shu son ra"
          }
      ],
      [
          {
              "id": 0,
              "action": "No Festivals Today",
              "tags": "none"
          }
      ],
      [
          {
              "id": 2739,
              "action": "Day of the Anger of Hedjet (the White Crown, form of Nekhbet) (LGG5, 606; Leitz TW 376; CC)",
              "tags": "anger hedjet day"
          }
      ],
      [
          {
              "id": 2744,
              "action": "Feast of Khnum-Ra (TFC Esna)",
              "tags": "khnum-ra"
          },
          {
              "id": 2745,
              "action": "Birthday of Heka (TFC Esna)",
              "tags": "birthday heka"
          },
          {
              "id": 2746,
              "action": "Conception of Harsiese (TFC Edfu)",
              "tags": "conception harsiese"
          }
      ],
      [
          {
              "id": 0,
              "action": "No Festivals Today",
              "tags": "none"
          }
      ],
      [
          {
              "id": 2755,
              "action": "Sixth-Day Festival",
              "tags": "sixth-day festival"
          }
      ],
      [
          {
              "id": 0,
              "action": "No Festivals Today",
              "tags": "none"
          }
      ],
      [
          {
              "id": 0,
              "action": "No Festivals Today",
              "tags": "none"
          }
      ],
      [
          {
              "id": 0,
              "action": "No Festivals Today",
              "tags": "none"
          }
      ],
      [
          {
              "id": 0,
              "action": "No Festivals Today",
              "tags": "none"
          }
      ],
      [
          {
              "id": 2779,
              "action": "Anger of the Eye of Horus (Haroeris) (CC; LGG2, 472, Leitz TW 381)",
              "tags": "anger horus eye"
          },
          {
              "id": 2780,
              "action": "Appearance of Amunhotep I (oracle and procession) (LA2, 184; AF Daybook of the Theban necropolis workers; LGG1, 333; KRI VI, 695)",
              "tags": "amunhotep"
          }
      ],
      [
          {
              "id": 2784,
              "action": "Celebration of Isis' Marriage Contract (TFC Dendera)",
              "tags": "isis-marriage contract"
          },
          {
              "id": 2785,
              "action": "Birth of Ihy-Harsomtus (TFC Dendera)",
              "tags": "ihy-harsomtus birth"
          },
          {
              "id": 2786,
              "action": "Feast and Reception of Ra (CC; TFC Dendera)",
              "tags": "ra feast reception"
          }
      ],
      [
          {
              "id": 2792,
              "action": "Nighttime Feast of Neith (TFC Esna; LA2, 31)",
              "tags": "neith nighttime"
          },
          {
              "id": 2793,
              "action": "Navigation of Ra (TFC Esna; CC)",
              "tags": "navigation ra"
          },
          {
              "id": 2794,
              "action": "Feast of Bast of Memphis (Stela BM188; LA2, 178; LA1, 629)",
              "tags": "memphis bast"
          },
          {
              "id": 2795,
              "action": "Appearance of Amunhotep I (oracle and procession; LA2, 184; BM5637 ostraca in JEA 12)",
              "tags": "amunhotep"
          }
      ],
      [
          {
              "id": 2801,
              "action": "Feast of Chewing Cucumbers for Sekhmet (TFC Edfu)",
              "tags": "chewing sekhmet cucumbers"
          }
      ],
      [
          {
              "id": 2806,
              "action": "Feast of the Half Month",
              "tags": "half month"
          },
          {
              "id": 2807,
              "action": "Offerings for Amun-Ra and Hapi (AF Gebel Silsila stelae of Ramses II, Merenptah, and Ramses III)",
              "tags": "hapi amun-ra"
          }
      ],
      [
          {
              "id": 2811,
              "action": "Feast of Victory for Amun (TFC Medinet Habu Ramses III)",
              "tags": "victory amun"
          },
          {
              "id": 2812,
              "action": "Transmitting Ma'at to the Shrine by Ra (CC)",
              "tags": "ma-at shrine ra transmitting"
          },
          {
              "id": 2813,
              "action": "Birthday of Imhotep (LA2, 184; LGG6, 50)",
              "tags": "birthday imhotep"
          }
      ],
      [
          {
              "id": 0,
              "action": "No Festivals Today",
              "tags": "none"
          }
      ],
      [
          {
              "id": 2823,
              "action": "Secret Procession of Ma'at and Ra (CC; Leitz TW 386)",
              "tags": "ma-at secret ra"
          }
      ],
      [
          {
              "id": 2828,
              "action": "Appearance of Horus in Letopolis and Papremis (LA2, 182)",
              "tags": "papremis horus letopolis"
          },
          {
              "id": 2829,
              "action": "Appearance of Khnum (TFC Esna; LA2, 31 notes that Khnum is acting in the place/as a form of Shu in these rites)",
              "tags": "khnum"
          },
          {
              "id": 2830,
              "action": "Treading the Fishes, Day 1 of 5 (TFC Kom Ombo)",
              "tags": "treading fishes"
          }
      ],
      [
          {
              "id": 2835,
              "action": "Treading the Fishes, Day 2 of 5: Feast of Grasping the Crook (TFC Kom Ombo and Esna; LA5, 282)",
              "tags": "treading crook grasping fishes"
          },
          {
              "id": 2836,
              "action": "Appearance of Khnum-Ra, Day 1 of 2 (LA5, 283)",
              "tags": "khnum-ra"
          },
          {
              "id": 2837,
              "action": "Procession of the Oars (probably related to Reunion-festival navigations) (AF Cairo 25503 ostraca recto)",
              "tags": "oars"
          },
          {
              "id": 2838,
              "action": "Feast of the Souls ( Bau ) of Hierakonpolis (i.e., royal ancestors) (festival normally marked during the Beautiful Reunion; LGG2, 724; Stela Buto Thutmose III; Bedier in Fs Winter, 48)",
              "tags": "hierakonpolis souls"
          }
      ],
      [
          {
              "id": 2844,
              "action": "Treading the Fishes, Day 3 of 5 (TFC Kom Ombo)",
              "tags": "treading fishes"
          },
          {
              "id": 2845,
              "action": "Appearance of Khnum-Ra, Day 2 (final) (TFC Esna)",
              "tags": "khnum-ra"
          },
          {
              "id": 2846,
              "action": "Feast of Nebtu, Lady of the Aker-Region (TFC Esna; Esna II, 77, 17)",
              "tags": "aker-region nebtu"
          }
      ],
      [
          {
              "id": 2851,
              "action": "Treading the Fishes, Day 4 of 5 (TFC Kom Ombo)",
              "tags": "treading fishes"
          },
          {
              "id": 2852,
              "action": "Day of Sepa (form of Osiris) (CC)",
              "tags": "sepa day"
          }
      ],
      [
          {
              "id": 2857,
              "action": "Treading the Fishes, Day 5 (final) (TFC Kom Ombo)",
              "tags": "treading fishes"
          },
          {
              "id": 2858,
              "action": "Feast of Hathor of Dendera (LGG5, 76)",
              "tags": "hathor dendera"
          }
      ],
      [
          {
              "id": 0,
              "action": "No Festivals Today",
              "tags": "none"
          }
      ],
      [
          {
              "id": 2867,
              "action": "\"Day of […] of Amun-Ra\" (AF Cairo 25974 ostracon)",
              "tags": "amun-ra day"
          }
      ],
      [
          {
              "id": 2872,
              "action": "Birthday of Isis-Nepherses, Thrice-Great Goddess (Bricault 527; may have lasted 19 days in the Roman Period)",
              "tags": "isis-nepherses birthday goddess thrice-great"
          }
      ],
      [
          {
              "id": 2876,
              "action": "Heb-Sed (Sed Festival), Day 1 of 2: Procession of Hathor and Harsomtus (TFC Edfu; Edfu V, 358; LA2, 1037 notes that this procession repeats daily until IV Shomu 8 and this may be a reference to Reunion festival, occurring at the same time as Senwosret III's Heb Sed)",
              "tags": "harsomtus hathor heb-sed"
          }
      ],
      [
          {
              "id": 2881,
              "action": "Heb-Sed, Day 2 (final) (TFC Edfu; Edfu V, 358; LA2, 1037)",
              "tags": "heb-sed"
          },
          {
              "id": 2882,
              "action": "Appearance of Sothis (TFC Elephantine Thutmose III)",
              "tags": "sothis"
          }
      ],
      [
          {
              "id": 2886,
              "action": "Feast of Mut (CC)",
              "tags": "mut"
          },
          {
              "id": 2887,
              "action": "Feast of Amun-Ra, King of the Gods (AF Louvre Stela, dated to the 24th year of the High Priest of Amun Menkheperre)",
              "tags": "king amun-ra"
          }
      ],
      [
          {
              "id": 2891,
              "action": "House of Ra, House of Osiris, House of Horus (Last Day of the Month)",
              "tags": "horus osiris ra"
          },
          {
              "id": 2892,
              "action": "\"Burning the Widow's Flame\" (TFC Edfu; AF Thutmose III memorial at Ptah Temple in Karnak)",
              "tags": "burning widow flame"
          },
          {
              "id": 2893,
              "action": "Feast of Opet-Hemet, Day 1 of 2 (LA2, 179, Dendera)",
              "tags": "opet-hemet"
          }
      ],
      [
          {
              "id": 2898,
              "action": "First Day of the Month",
              "tags": "month first"
          },
          {
              "id": 2899,
              "action": "Appearance of Haroeris (river navigation, TFC Kom Ombo)",
              "tags": "haroeris"
          },
          {
              "id": 2900,
              "action": "Appearance of Horus' standard, Tasenetnofret, and Min (TFC Kom Ombo Ptolemy VI)",
              "tags": "tasenetnofret horus-standard min"
          },
          {
              "id": 2901,
              "action": "Feast of Hathor of Dendera (TFC Dendera Small Calendar)",
              "tags": "hathor dendera"
          },
          {
              "id": 2902,
              "action": "Feast of Onnophris (TFC Ramses II; CC)",
              "tags": "onnophris"
          },
          {
              "id": 2903,
              "action": "Feast of Khnum (TFC Esna)",
              "tags": "khnum"
          },
          {
              "id": 2904,
              "action": "Feast of Opet-Hemet, Day 2 (final) (LA2, 179, Dendera; TFC Edfu)",
              "tags": "opet-hemet"
          }
      ],
      [
          {
              "id": 2909,
              "action": "Isis Luminous ( Webenut ) (alternate title Procession of Isis, Mother of God) (TFC Edfu)",
              "tags": "luminous isis"
          }
      ],
      [
          {
              "id": 0,
              "action": "No Festivals Today",
              "tags": "none"
          }
      ],
      [
          {
              "id": 2920,
              "action": "Procession of Sopdu and His Followers (CC; LGG2, 719; Leitz TW 398)",
              "tags": "followers sopdu"
          },
          {
              "id": 2921,
              "action": "Feast of Heqat (LGG5, 490; Lefebvre 1924, plates 61.32 and 81.71)",
              "tags": "heqat"
          }
      ],
      [
          {
              "id": 2926,
              "action": "Appearance of Min (CC)",
              "tags": "min"
          }
      ],
      [
          {
              "id": 2933,
              "action": "Sixth-Day Festival",
              "tags": "sixth-day festival"
          }
      ],
      [
          {
              "id": 0,
              "action": "No Festivals Today",
              "tags": "none"
          }
      ],
      [
          {
              "id": 2940,
              "action": "Feast of Hathor of Dendera (LGG5, 76)",
              "tags": "hathor dendera"
          }
      ],
      [
          {
              "id": 2945,
              "action": "Feast of Imhotep (LA2, 184)",
              "tags": "imhotep"
          }
      ],
      [
          {
              "id": 2951,
              "action": "The Eye of Ra Enters the Horizon",
              "tags": "horizon ra eye"
          }
      ],
      [
          {
              "id": 0,
              "action": "No Festivals Today",
              "tags": "none"
          }
      ],
      [
          {
              "id": 2958,
              "action": "\"Jubilation in the Entire Land\" (CC)",
              "tags": "jubilation land entire"
          }
      ],
      [
          {
              "id": 2964,
              "action": "Defending Harsiese, Day 1 of 2 (CC)",
              "tags": "defending harsiese"
          }
      ],
      [
          {
              "id": 2969,
              "action": "Defending Harsiese, Day 2 (final) (CC)",
              "tags": "defending harsiese"
          }
      ],
      [
          {
              "id": 2977,
              "action": "Atum, Ruler of Heliopolis (LGG5, 495; Leitz 2002, 152, Edfu)",
              "tags": "atum heliopolis ruler"
          },
          {
              "id": 2978,
              "action": "Hathor's Sacred Barque (LGG2, 277, Edfu)",
              "tags": "hathor barque sacred"
          },
          {
              "id": 2979,
              "action": "Isis, Who Protects the Gods (LGG2, 593, Dendera and Edfu; variant Isis without epithets, LGG1, 62, Dendera)",
              "tags": "isis protects"
          },
          {
              "id": 2980,
              "action": "Feast of the Half Month",
              "tags": "half month"
          },
          {
              "id": 2981,
              "action": "Feast of Haroeris the Great Shining One (TFC Edfu; LGG5, Edfu)",
              "tags": "one shining great haroeris"
          },
          {
              "id": 2982,
              "action": "Appearance of Ra \"to propitiate the Nun\" (CC)",
              "tags": "to nun ra propitiate"
          }
      ],
      [
          {
              "id": 2986,
              "action": "Ritual Water for Those in the Next World (CC)",
              "tags": "next world ritual those water"
          }
      ],
      [
          {
              "id": 2992,
              "action": "Celebration of the Justification (apotheosis/deification) of Imhotep, Day 1 of 7 (LA2, 184)",
              "tags": "justification imhotep"
          }
      ],
      [
          {
              "id": 2998,
              "action": "Celebration of the Justification of Imhotep, Day 2 of 7 (LA2, 184)",
              "tags": "justification imhotep"
          }
      ],
      [
          {
              "id": 3004,
              "action": "The Eye of Horus Returns Complete (CC)",
              "tags": "complete returns horus eye"
          },
          {
              "id": 3005,
              "action": "Praise of Mut, Day 1 of 3 (TFC Edfu; LGG4, 473; Edfu V, 358)",
              "tags": "mut praise"
          },
          {
              "id": 3006,
              "action": "Celebration of the Justification of Imhotep, Day 3 of 7 (LA2, 184)",
              "tags": "justification imhotep"
          }
      ],
      [
          {
              "id": 3012,
              "action": "Feast of Menhuy (\"Slaughterer,\" an epithet of Amun) (TFC Esna)",
              "tags": "menhuy"
          },
          {
              "id": 3013,
              "action": "Cleaning and Renewing the Noble Ones (CC)",
              "tags": "renewing ones cleaning noble"
          },
          {
              "id": 3014,
              "action": "Praise of Mut, Day 2 of 3 (TFC Edfu; LGG4, 473; Edfu V, 358)",
              "tags": "mut praise"
          },
          {
              "id": 3015,
              "action": "Celebration of the Justification of Imhotep, Day 4 of 7 (LA2, 184)",
              "tags": "justification imhotep"
          }
      ],
      [
          {
              "id": 3020,
              "action": "Review of the Subjects of the Golden One, Horus-Min of Apollinopolis Parva (Abusir Papyri 14a2; LGG2, 527)",
              "tags": "review horus-min one apollinopolis subjects parva golden"
          },
          {
              "id": 3021,
              "action": "Praise of Mut, Day 3 (final) (TFC Edfu; LGG4, 473; Edfu V, 358)",
              "tags": "mut praise"
          },
          {
              "id": 3022,
              "action": "Celebration of the Justification of Imhotep, Day 5 of 7 (LA2, 184)",
              "tags": "justification imhotep"
          }
      ],
      [
          {
              "id": 3027,
              "action": "Feast of Anubis (CC)",
              "tags": "anubis"
          },
          {
              "id": 3028,
              "action": "Celebration of the Justification of Imhotep, Day 6 of 7 (LA2, 184)",
              "tags": "justification imhotep"
          }
      ],
      [
          {
              "id": 3034,
              "action": "Celebration of the Justification of Imhotep, Day 7 (final) (coincides with the anniversary of Imhotep's burial, LA2, 184)",
              "tags": "justification imhotep"
          }
      ],
      [
          {
              "id": 3038,
              "action": "\"Offerings in Ra's Presence\" (CC)",
              "tags": "presence ra"
          },
          {
              "id": 3039,
              "action": "Feast of Ptah, South of His Wall, Lord of Memphis (AF graffito from a Middle Kingdom pyramid at Saqqara, dated to 34th year of Ramses II)",
              "tags": "lord ptah south wall memphis"
          }
      ],
      [
          {
              "id": 3045,
              "action": "\"The Gods Are Established in Front of Ra's Crew\" (CC)",
              "tags": "crew ra established front"
          }
      ],
      [
          {
              "id": 3050,
              "action": "\"The Gods Sail\" (CC)",
              "tags": "sail"
          }
      ],
      [
          {
              "id": 3056,
              "action": "Procession of Hathor and Her Great Nine (TFC Dendera; LA2, 1037; LGG5, 76)",
              "tags": "hathor great nine"
          }
      ],
      [
          {
              "id": 3061,
              "action": "Feast of Min (CC)",
              "tags": "min"
          }
      ],
      [
          {
              "id": 3067,
              "action": "Holiday of the Temple of Ptah-Sokar (CC)",
              "tags": "holiday ptah-sokar temple"
          },
          {
              "id": 3068,
              "action": "Clepsydra Festival of Mut",
              "tags": "mut clepsydra"
          },
          {
              "id": 3069,
              "action": "Feast of Hathor of Dendera (LGG5, 76, Dendera and Edfu)",
              "tags": "hathor dendera"
          }
      ],
      [
          {
              "id": 3075,
              "action": "Feast of Lights for Khnum (Last Day of the Egyptian Year or a'areq Ronpet ) (TFC Esna; LA2, 179; Herodotus II, 62), including the ceremonies of the Evening Meal (AF TT50 tomb of Neferhotep dated to Horemheb; LA2, 19; AF TT9 tomb of Amonmes, 19th/20th",
              "tags": "including ceremonies neferhotep th af horemheb amonmes lights tomb meal dated khnum la evening"
          },
          {
              "id": 3076,
              "action": "Dynasty)",
              "tags": "dynasty"
          },
          {
              "id": 3077,
              "action": "House of Ra, House of Osiris, House of Horus (Last Day of the Month)",
              "tags": "horus osiris ra"
          },
          {
              "id": 3078,
              "action": "Feast of the Dressing, Day 1 of 7 (Grimm 1994, 416; TFC Edfu; TFC Kom Ombo Ptolemy VI)",
              "tags": "dressing"
          },
          {
              "id": 3079,
              "action": "Feast of the First Seat of the First Time, Day 1 of 11 (El-Sabban 2000, 172; TFC Edfu; TFC Kom Ombo Ptolemy VI)",
              "tags": "time seat first"
          }
      ],
      [
          {
              "id": 3082,
              "action": "BIRTHDAY OF OSIRIS (CC; pLeiden I; TFC Illahun; TFC Esna; TFC Edfu; LGG7, 275; Leitz TW 418)",
              "tags": "birthday osiris"
          },
          {
              "id": 3083,
              "action": "Feast of the Dressing, Day 2 of 7 (Grimm 1994, 416; LGG1, 196; TFC Edfu)",
              "tags": "dressing"
          },
          {
              "id": 3084,
              "action": "Feast of the First Seat of the First Time, Day 2 of 11 (El-Sabban 2000, 172)",
              "tags": "time seat first"
          },
          {
              "id": 3085,
              "action": "Appearance of Min (TFC Kom Ombo Ptolemy VI)",
              "tags": "min"
          }
      ],
      [
          {
              "id": 3090,
              "action": "BIRTHDAY OF HAROERIS (HORUS THE ELDER) (TFC Illahun; TFC Kom Ombo Ptolemy VI; TFC Esna; TFC Edfu; LGG6, 526; Leitz TW 420-422; LGG6, 85; LA3, 42; LGG5, 231; pLeiden I 346, column 2.9)",
              "tags": "birthday haroeris"
          },
          {
              "id": 3091,
              "action": "Feast of the Dressing, Day 3 of 7 (Grimm 1994, 416)",
              "tags": "dressing"
          },
          {
              "id": 3092,
              "action": "Feast of the First Seat of the First Time, Day 3 of 11 (El-Sabban 2000, 172)",
              "tags": "time seat first"
          },
          {
              "id": 3093,
              "action": "Appearance of Min (TFC Kom Ombo Ptolemy VI)",
              "tags": "min"
          },
          {
              "id": 3094,
              "action": "Feast of Heka-the-Child (TFC Esna)",
              "tags": "heka-the-child"
          },
          {
              "id": 3095,
              "action": "Procession of Hathor of Dendera (TFC Edfu)",
              "tags": "hathor dendera"
          }
      ],
      [
          {
              "id": 3098,
              "action": "BIRTHDAY OF SET (TFC Illahun; CC; AF pRhind; AF Daybook of the Theban necropolis workers; LGG3, 141; pLeiden I, 346 column 2, 12; Stricker 1948, 64; Bonnet 2000, 16; Leitz TW 421)",
              "tags": "birthday set"
          },
          {
              "id": 3099,
              "action": "Feast of the Dressing, Day 4 of 7 (Grimm 1994, 416)",
              "tags": "dressing"
          },
          {
              "id": 3100,
              "action": "Feast of the First Seat of the First Time, Day 4 of 11 (El-Sabban 2000, 172)",
              "tags": "time seat first"
          },
          {
              "id": 3101,
              "action": "Appearance of Min (TFC Kom Ombo Ptolemy VI)",
              "tags": "min"
          },
          {
              "id": 3102,
              "action": "Festival of Thoeris (LGG7, 331, El Qa'la; El-Qa'la II, 272)",
              "tags": "thoeris"
          }
      ],
      [
          {
              "id": 3107,
              "action": "BIRTHDAY OF ISIS (TFC Illahun; TFC Kom Ombo Ptolemy VI; TFC Esna; TFC Edfu; TFC Dendera; CC; LGG1, 13, 218 and 476; Leitz TW 422-423; LGG2, 835; LGG6, 105; LGG5, 708)",
              "tags": "birthday isis"
          },
          {
              "id": 3108,
              "action": "Feast of the Dressing, Day 5 of 7 (Grimm 1994, 416)",
              "tags": "dressing"
          },
          {
              "id": 3109,
              "action": "Feast of the First Seat of the First Time, Day 5 of 11 (El-Sabban 2000, 172)",
              "tags": "time seat first"
          },
          {
              "id": 3110,
              "action": "Appearance of Min (TFC Kom Ombo Ptolemy VI)",
              "tags": "min"
          }
      ],
      [
          {
              "id": 3113,
              "action": "BIRTHDAY OF NEPHTHYS (TFC Illahun; TFC Kom Ombo Ptolemy VI; TFC Esna; TFC Edfu; TFC Dendera; CC; LGG1, 586; Leitz TW 423; LGG6, 536)",
              "tags": "birthday nephthys"
          },
          {
              "id": 3114,
              "action": "Night of Ra (i.e., the eve of Ra's birthday, or New Year's Eve) (AF tomb of Hapdjefa, Asyut; LA2, 79)",
              "tags": "night ra"
          },
          {
              "id": 3115,
              "action": "Feast of the Dressing, Day 6 of 7 (Grimm 1994, 416)",
              "tags": "dressing"
          },
          {
              "id": 3116,
              "action": "Feast of the First Seat of the First Time, Day 6 of 11 (El-Sabban 2000, 172)",
              "tags": "time seat first"
          }
      ],
      [
        {
            "id": 0,
            "action": "No Festivals Today",
            "tags": "none"
        }
      ],
  ]
  },
  property: function(m) {
    return m.planetary.day.start;
  },
  calculate: function(definitions, property) {
    var ed = egyptianDate(property).day.ofyear + 1;
    return definitions.actions[ed];
  }
};

var module_kemet_festivals_alexandrian = {
  definitions: {
    name: "Festivals (Alexandrian)",
    description: "Daily feast days for neteru and other important ancient Kemetic festivals according to the Alexandrian (Coptic) Civil Calendar. (from 'The Ancient Egyptian Daybook' by Tamara L. Siuda)",
    group: {
      id: "kemet",
      text: "Kemet",
      info: "true"
    },
    actions: module_kemet_festivals_pharaonic.definitions.actions
  },
  property: function(m) {
    return m.planetary.day.start;
  },
  calculate: function(definitions, property) {
    var date = new Date(property * 1000);
    var cd = new Intl.DateTimeFormat('en', { calendar:'coptic', dateStyle:"short"})
    var cdl = cd.format(date).split(",")[0].split("/");
    var doy = ((parseInt(cdl[0]) - 1) * 30) + parseInt(cdl[1]);
    return definitions.actions[doy];
  }
};

var module_kemet_cc_pharaonic = {
  definitions: {
    name: "Propitious Days (Pharaonic)",
    description: "Daily almanac of lucky and unlucky days from the Cairo Calendar (pCairo 86637) according to the Pharaonic Civil Calendar date",
    hide: "filter",
    group: {
      id: "kemet",
      text: "Kemet",
      info: "true"
    },
    actions: [
      [0],
      [
          {
              "id": 524,
              "action": "\"Feast of Ra. Do not cross the river on this day.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 537,
              "action": "\"It is the Feast of Victory which Ra made for Shu, when he seized the Eye of Horus for him.\" (CC)",
              "tags": "",
              "hide": "filter"
          },
          {
              "id": 538,
              "action": "\"If you see anything today, it will be good. Day of the going out of the Ennead before Ra. Their hearts are pleased when they see his youthfulness, after they killed him who raised up against their master, and overthrew Apophis whoever he might be, literally in every place of his, the one who fell on his back amidst the flood.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 547,
              "action": "\"Do not do anything, eat remu-fish, or journey in day or in night.\" (CC)",
              "tags": "",
              "hide": "filter"
          },
          {
              "id": 548,
              "action": "\"Day of making a count(?) in the river by […] The gods of the Duat…\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 558,
              "action": "\"Starting work is a great abomination. Beware of making friendship to a second person. As to anyone whose heart suffers, he will not live.\" (CC)",
              "tags": "",
              "hide": "filter"
          },
          {
              "id": 559,
              "action": "\"Do not do anything on it (i.e., the feast of Hathor).\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 568,
              "action": "\"Do not do any work in the entire land today. As to anybody whose stomach suffers, he will not live.\" (CC)",
              "tags": "",
              "hide": "filter"
          },
          {
              "id": 569,
              "action": "\"If you see anything today, it will be good. The gods are peaceful in heaven and navigating the great barque.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 576,
              "action": "\"Do not eat the head of any goat, do not do any work on clothing or on grain today\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 584,
              "action": "\"Do not do any work in the entire land; do not eat the remainder of anything today.\" (CC)",
              "tags": "",
              "hide": "filter"
          },
          {
              "id": 585,
              "action": "\"Day of Welcoming the Inundation and offering to the gods. Anything you see today will be good.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 590,
              "action": "\"Feast of every god and goddess. Do not do any work in the entire land. Do not eat herbs, sugarcane, or mandrakes.\" (CC)",
              "tags": "",
              "hide": "filter"
          },
          {
              "id": 591,
              "action": "\"Do not go out at night; Ra goes forth […] Inundation. The one who navigates the Nun and anyone who is shipwrecked….\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 599,
              "action": "\"Do not eat abdu-fish; do not walk in darkness.\" (CC)",
              "tags": "",
              "hide": "filter"
          },
          {
              "id": 600,
              "action": "\"Anything you see today will be great.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 613,
              "action": "\"Do not eat honey or sugarcane today.\" (CC)",
              "tags": "",
              "hide": "filter"
          },
          {
              "id": 614,
              "action": "\"Day of going forth of Hedjhotep while all gods and goddesses are in festivity. Anyone born today will die an honored one in his old age.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 621,
              "action": "\"Do not do any work on this day. Do not eat fish having roe; or sun bread. Anyone born on this day will not live.\" (CC)",
              "tags": "",
              "hide": "filter"
          },
          {
              "id": 622,
              "action": "\"Kindle fire. Day of going forth of the Great Flame raging in the inaccessible shrine in […] who are in the following of His Majesty. Do not look at a bull or have sex today.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 629,
              "action": "\"Do not eat any meat.\" (CC)",
              "tags": "",
              "hide": "filter"
          },
          {
              "id": 630,
              "action": "\"Do not go out today. Spend the day until sunset [indoors]. It is the day of the crew (?) whom Ra separates from one another. As to anyone disobeying Ra, his house will fall down immediately.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 639,
              "action": "\"Do not eat mice.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 646,
              "action": "\"Do not eat siyu-fish. If you start an errand, it will be accomplished immediately.\" (CC)",
              "tags": "",
              "hide": "filter"
          },
          {
              "id": 647,
              "action": "\"Offering of great vegetables (?) in the southern heaven today. Offer to the god of your city.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 655,
              "action": "\"Feast of Sepa-Osiris who rules in Heliopolis. Do not eat rudj - or shena'a-fish. Do not start anything.\" (CC)",
              "tags": "",
              "hide": "filter"
          },
          {
              "id": 656,
              "action": "\"Do not proceed in a boat today. The Day of Unknown Rage in the Duat. Behold, the rowers are on the river. Do not [...] today.\" (CC)",
              "tags": "",
              "hide": "filter"
          },
          {
              "id": 657,
              "action": "\"Feast of Khonsu. It is favorable to do anything on it.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 688,
              "action": "\"Anything you see today will be good. Day of magnifying Horus' majesty, more than his brother, which they (i.e., the gods) did at the court.\" (CC)",
              "tags": "",
              "hide": "filter"
          },
          {
              "id": 689,
              "action": "\"As for anyone born today, he will not live.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 703,
              "action": "\"A happy day in heaven in front of Ra, may he live, prosper, and be healthy; the great Ennead is in great festivity. Burn incense on the fire for his followers in the evening barque, the day barque, and the gods. Day of receiving […] day of going forth…Babai…his…\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 714,
              "action": "\"Do not do any work. Day when the great ones are partial.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 723,
              "action": "\"Make a holiday today. Offer to the followers of Ra. Do not kill a bull, and do not let it pass before your face or even close to it; be cautious.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 737,
              "action": "\"Anything you do on the feast of Wepwawet will be good.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 752,
              "action": "\"The Majesty of this god (Ra) sails with a favorable wind, peacefully. Behold, He settles down, His heart especially glad. Then He appears in the Mesektet boat, and then rising in the Mandjet boat. Anyone born today will die an honored one in old age.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 761,
              "action": "\"Do not go out of your house on any road at night. Day of Sekhmet going to the eastern district, and the repelling of the associates of Set. As for any lion whom they approach, he will pass away immediately.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 793,
              "action": "\"The gods are happy when they see the children of Nut peaceful and content. Whatever you see today is good.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 800,
              "action": "\"Do not kindle fire in the house, burn ointment, or go out by night.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 811,
              "action": "\"Anything you see today is good.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 820,
              "action": "\"Jubilation. The great Ennead is in festivity today. It is the day of Establishing the Heritage of the Great One (i.e., Horus).\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 829,
              "action": "\"The proceeding of the Majesty of Sais of Lower Egypt to his mother Neith, to [let her] see that he was suffering from his buttocks.\" (CC)",
              "tags": "",
              "hide": "filter"
          },
          {
              "id": 830,
              "action": "\"Repetition of birth […] great festivity in heaven. Offer to all gods. It is important to hear what I say to you.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 852,
              "action": "\"Anyone born on this day will die of a skin rash. It is the day of the going forth of Anubis for the inspection of this w'abet for the protection of the body of the god (i.e., Osiris).\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 869,
              "action": "\"A happy day for Ra in heaven, and the gods are pacified in his presence. The Ennead is making glorification in front of the Lord of the Universe. Anyone born on this day will die in a state of drunkenness.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 880,
              "action": "\"Do not do anything today. The going of Ra […] to the countries which he created in order to kill the children of Bedesh (i.e., Apophis), and the return of Ra on this day […] his neck. Then he killed them before his ennead. Anyone born on this day will die in foreign lands.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 886,
              "action": "\"Anything you see today will be good.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 894,
              "action": "\"Jubilation in the heart of Ra […] His Ennead is in festivity; all enemies are overthrown on this day. Anyone born on this day will die at a good old age.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 906,
              "action": "\"Fixing the front piece at the prow of the barque on this day. Life and prosperity are before the august [… (i.e., Ra)] which is established behind him. Everything is good today.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 911,
              "action": "\"It is the day on which he who rebelled against his lord raised his head. His (Harsiese's) utterance has annihilated the speech of Set, son of Nut. He who conspired against his lord is beheaded.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 918,
              "action": "\"Satisfying the heart of the great gods with a feast, and saluting their lord who overthrew the enemies. They will exist no more.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 925,
              "action": "\"It is the day of receiving the white crown by the Majesty of Horus. His Ennead is in great festivity. Offer to your local gods, and pacify the spirits.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 935,
              "action": "\"Do not go out of your house in the evening. Going forth of the Majesty of Ra at nightfall with his followers. If any person sees them, he will pass away immediately.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 944,
              "action": "\"…feast of Osiris Onnophris. The gods who are in his retinue are in great festivity; the Ennead, their hearts being pleased. If you see anything on this day, it will be good.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 951,
              "action": "\"Smelling […] on this day by the great Ennead and the little Ennead, who come forth from the Nun. Offer up bread and beer. Burn incense to Ra, and an invocation offering to the spirits. It is important, so that your words may be heard by the gods of your town.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 959,
              "action": "\"Do not do anything on this day. It is the day of inspecting the w'abet, while he was making many transformations in the sight of all men […] he found […] being examined to care for the burial (lit., \"uniting with the earth\"), then he started crying, then he repeated it as he had seen; and then, they started weeping aloud. They placed their hands on their heads; the gods, males and females likewise.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 985,
              "action": "\"Do not bathe on this day. It is the day of cutting the tongue of the enemy of Sobek, son of Neith.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1008,
              "action": "\"Do not put the foundation of a house [down today]. Do not put a ship in a shipyard (i.e., begin building). Do not order any work. Do not do any work on this day at all.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1022,
              "action": "\"If you see anything today, it will be good.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1025,
              "action": "\"Anyone born on this day will die an honored one among his people.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1033,
              "action": "\"Last day […] by Nun, father of the gods; the land is in festivity on this day. House of Ra, House of Osiris, House of Horus.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1052,
              "action": "\"[…] by the good god (Osiris). If you see anything today, it will be good.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1063,
              "action": "\"Do not keep fire burning in the house today. Do not look at it. It is the day of blaming […] by the majesty of this god (Nun).\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1070,
              "action": "\"The encouragement (lit., uniting of the hearts) of the gods of the Two Lands today […] encouragement of […] the entire land.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1075,
              "action": "\"If you see anything today, it will be good.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1080,
              "action": "\"Isis goes forth, her heart being pleased today, the heritage being established upon her son Horus.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1093,
              "action": "\"If you see anything, it will be good.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1098,
              "action": "\"Pacification of the hearts of the gods, wherever they are, the Udjat-Eye being on Ra's head. Fixing […] for the gods. Raising those who are upon their seats.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1104,
              "action": "\"It is the day of cutting into pieces […] ferrymen on the river for not ferrying over the confederates of Set […] any […] against this Neshmet-boat of Osiris that is sailing upstream to Abydos, to the great town of Onnophris. Behold, he is transformed into a baby in the arms of his nurse, giving gold as a reward to 'Anty (LGG4, 243; Leitz TW 119) as a fare, saying, 'May you ferry me over to the West.' Then he received it from him […] because of announcing the divine limbs. Behold, the confederates were following him like a swarm of reptiles. Then they recognized these gods, while Set entered into the embalming booth […] to announce the god's limbs. Then they (i.e., Osiris' limbs) became fresh […] he came […] into small cattle (i.e., humans). Then these gods made a terrible massacre of the enemy of 'Anty to this day. One marveled at the small cattle in the West. One marveled at transforming the small cattle into flocks until this day.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1109,
              "action": "\"Do not do anything today. The heart of the gods is sad because of that which has been done by the enemy of 'Anty. Anyone born on this day will die of […]\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1126,
              "action": "\"Landing of the great ones, the upper and lower ones at Abydos; loud weeping and wailing by Isis and Nephthys, her sister, over Onnophris in Sais. It is heard in Abydos.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1129,
              "action": "\"It is the day of the strife by the children of Geb, Set and sister […] Do not approach any road for making a journey today.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1149,
              "action": "\"Raising Ma'at in order to see Ra, when she is summoned by the gods in Ra's presence. A uraeus was placed upon her, and another below her, being fixed at the front of the evening-barque.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1156,
              "action": "\"Nun drags […] by their hands out of the fire. Behold, the majesty of this god judges in that great place […] on the river. Anyone born on that day will not live.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1164,
              "action": "\"Isis goes forth, her heart being happy, and Nephthys being also in jubilation when they see Onnophris […] heart. He has given his throne to his son Horus, in front of Ra.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1171,
              "action": "\"If you see anything, it will be good to the heart of the gods.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1191,
              "action": "\"The gods are in jubilation and joy, when the will is made for Horus son of Osiris, to propitiate Onnophris in the necropolis. The land is in festivity, and the gods are pleased. If you see anything, it will be good.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1211,
              "action": "\"If you see anything, it will be good on this day. House of Ra, House of Osiris, House of Horus.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1233,
              "action": "\"Gods and goddesses are in festivity; the sky and the earth are in joy. If you see anything on this day, it will be good.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1244,
              "action": "\"Perform rituals in the temple of Sokar and your house today, with all provisions in the necropolis. They will be pleasant to the gods.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1259,
              "action": "\"Do not go out today […] when the barque of Ra is established in order to overthrow the enemies from one moment to another on this day.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1266,
              "action": "\"It is the day of […] wind […] death in […] he will turn into […] fish. Do not eat or taste mehyet-fish on this day.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1273,
              "action": "\"If you see anything today, it will be good.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1283,
              "action": "\"As for anyone born on this day, he will die in old age, while beer enters into his mouth, his eyes, and his face.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1302,
              "action": "\"Going forth of the White One, the Majesty of Heaven, her heart being pleased in Ra's presence. The great ennead is in festivity. Make a holiday in your house today.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1328,
              "action": "\"The people and the gods judge the crew's speech in Heliopolis, when Horus arrives in Kher-aha. Do not go out at noon today.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1338,
              "action": "\"It is the day of overthrowing the divine boat.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1344,
              "action": "\"Presenting offerings in the House of the Red Ones. Making ointment for Osiris before the hall of embalming. Do not eat bread and beer on this day. Drink grape juice until Ra sets.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1353,
              "action": "\"Do not go out on any road today. Do not anoint yourself with ointment. It is the day of looking in the direction of the Akhet-eye. Do not go out of your house at noon.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1369,
              "action": "\"If you see anything today, it will be good.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1377,
              "action": "\"Do not go out during the night […] in heaven […] They […] in order to destroy […] Harendotes. If you see any lion, you will die immediately.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1407,
              "action": "\"[…] Thoth establishes the nobles in advanced position in Letopolis.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1415,
              "action": "\"If you see anything today, it will be good. Do not go out at night.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1432,
              "action": "\"Do not eat or smell any mehyet-fish while throwing flame into water from what they offer, and do not take any mehyet-fish or any [other] fish in your hands.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1456,
              "action": "\"Double the offerings and present the gifts of Nehebkau to the gods in the presence of Ptah, in the shrines of the Nunet of the goddesses and gods, protectors of Ra and his own followers, and the […] of Ptah-Sokar and Sekhmet the Great, Nefertem, Horus of Hekenu, </span><span>Ma'ahes, Bast the Great Flame […] propitiating the Udjat eye. It will be good.\" (LGG3, 211; Leitz TW 193 CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1467,
              "action": "\"Offering before […] in nourishment. Make a festival in your house.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1478,
              "action": "\"Do not burn fire in Ra's presence.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1486,
              "action": "\"If you see anything it will be good. Anyone born on this day will die old among his people. He will spend a long lifetime, and he will be received by his father.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1494,
              "action": "\"It is the day of placing the flame in front of the great ones by Sekhmet who reigns in the Lower Egyptian sanctuary, when she was violent in her manifestations, because of her coming into it; [placing the flame] by Ma'at, Ptah, Thoth, Hu and Sia, the gods on this day […] of each day.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1503,
              "action": "\"Repeat the food offering for He Who Dwells in Weret, and revert the offerings of the noble Khenty-irety (here an epithet of Osiris), and offerings to the gods are doubled by everyone today.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1509,
              "action": "\"Do not have sex with any woman or any person who is in your house in front of the great flame (i.e., the sun) today.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1515,
              "action": "\"If you see anything today, it will be good.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1522,
              "action": "\"The gods are joyful with the offerings of Sekhmet on this day. Establish the paut-cake and repeat the offerings. It will be pleasant to the hearts of the gods and spirits.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1529,
              "action": "\"Do not burn any papyrus today. It is the day of the coming forth of the flame, together with Horus, from the marshes.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1534,
              "action": "\"Do not approach flame on this day…\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1540,
              "action": "\"If you see any dog today, do not … approach him on the day of answering every speech of Sekhmet.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1556,
              "action": "\"Weeping of Isis and Nephthys. It is the day when they mourned Osiris in Busiris, in remembrance of what he had seen. Do not listen to singing or chanting today.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1573,
              "action": "\"Going forth of Horus-Shu […] in order to count the crew of the evening barque.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1585,
              "action": "\"Do not wash yourself with water today. It is the day of the going forth of Nun to the place where the gods are. Those who are above and those who are below come into existence, the land still being in darkness.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1593,
              "action": "\"A holiday in Rosetjau today. The going forth of the gods to Abydos.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1611,
              "action": "\"Do not do anything today. It is the day of the procession of Bast who protects the Two Lands, who cares for him who comes in the darkness. Beware of passing on land until Ra sets.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1620,
              "action": "\"Guarding the Two Lands by Bast, and making vegetable offerings to the followers of Ra today.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1628,
              "action": "\"If you see anything today, it will be good.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1633,
              "action": "\"Anyone born on this day will die in great old age, and rich in every good thing.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1638,
              "action": "\"Everything has been placed behind him in the presence of the ennead on the occasion of being loyal to the executioners of Ra. Happiness is in heaven and on the earth today.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1647,
              "action": "\"Do not eat ( sic ) milk today. Establishing the great divine Cow in the presence of Ra's majesty. Drink and eat honey today.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1653,
              "action": "\"Do not go out today until Ra sets, when offerings are diminished in Busiris, while they are put on the earth towards heaven. They will be greatly blamed about it.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1673,
              "action": "\"Appearance in the sight of Hu. Thoth will send this command south to guide the Two Lands, by Bast, together with the sole mistress, Sekhmet the Great, the gods being happy. If you see anything today, it will be good.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1682,
              "action": "\"Crossing over in the presence of Nun from the temple of Hapi, the father of the gods and the ennead, while incense is in the fire according to their scrolls today. House of Ra, House of Osiris, House of Horus.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1695,
              "action": "\"The day of receiving Ra by the gods. The heart of the Two Lands is in festival.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1700,
              "action": "\"Do not go out of your house on any road today. It is the day of the going forth of Set with his followers to the eastern horizon, and the navigation of Ma'at to the place where the gods are.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1707,
              "action": "\"Place your heart toward your local gods, honor your spirits, exalt your crew during the day today.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1712,
              "action": "\"If you see anything today, it will be good.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1722,
              "action": "\"It is the day of putting up the Djed by the Majesty of Osiris. Then the gods were sad, with their faces downward, when they remembered this god's majesty. They spoke of those who went before.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1732,
              "action": "\"Make a holiday in Letopolis. The gods and goddesses are in festival today.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1741,
              "action": "\"The god (i.e., Haroeris) enters, as he will conduct his rationing, [with] all the gods of Kher-aha (i.e., a location near Memphis). If you see anything today, it will be good.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1757,
              "action": "\"If you see anything today, it will be good.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1769,
              "action": "\"Do not go out today at the beginning of dawn. It is the day of seeing the rebel, and killing him by Set, at the prow of the great barque.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1789,
              "action": "\"It is the day of keeping those things of the pure place (w'abet) of Osiris which have been placed in Anubis' hands.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1797,
              "action": "\"Procession of the seven executioners (lit., knife-demons) in Letopolis. Their fingers are searching for the Akhet-Eye in the towns of Iyet and Letopolis.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1803,
              "action": "\"Do not decide to go out during the daytime. It is the day of mourning the god (i.e., Osiris).\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1811,
              "action": "\"The procession of the female majesty of heaven [goes] southward to the road….\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1823,
              "action": "\"Birth of the cattle […] to the place where the pastures are, in the neighborhood of this foremost god (i.e., Horus).\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1834,
              "action": "\"If you see anything today, it will be good.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1844,
              "action": "\"If you see anything today, it will be good.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1854,
              "action": "\"Do not sail in a boat today. The gods are descending to the river. As to anyone who approaches it (i.e., the divine procession) on the river, he will not live.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1864,
              "action": "\"If you see anything today, it will be good.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1874,
              "action": "\"…going forth of Min from Coptos today. He is guided to it, bragging of his beauty. Isis saw that his face was beautiful.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1893,
              "action": "\"Onnophris is pleased and the spirits are joyful. The dead are also in festival.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1901,
              "action": "\"The beginning of fighting, the creation of rebellion, and making uproar among the children of Geb. Do not do anything today.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1910,
              "action": "\"Do not have loud words with anyone today. House of Ra, House of Osiris, House of Horus.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1926,
              "action": "\"It is the day of […] in heaven and on the earth and every day likewise. Feast of entering into heaven and the Two Riverbanks. Horus is jubilating.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1931,
              "action": "\"If you see anything today, it will be good.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1940,
              "action": "\"Announcement of fighting; Set calls out in Heliopolis, his voice being (heard) in heaven, [and] his voice being (heard) on the earth, in great fury.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1947,
              "action": "\"Neith goes forth from Sais, when they see her beauty in the night for four and a half hours. Do not go out during them.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1956,
              "action": "\"Jubilation of Osiris in Busiris; going forth of Anubis, his adorers following; he receives everyone in the hall. Make the ritual!\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1961,
              "action": "\"Do not go out of your house today until Ra sets. It is the day when the Eye of Ra called the Shemsu, and they reached him in the evening. Beware of it!\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1967,
              "action": "\"If you see anything today, it will be good. It is the day of making way for the gods by Khnum, who presides over the ones who remove themselves from his presence.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1982,
              "action": "\"It is the day of the coming of Thoth and Hu. They guided the very great flame (Nesret) into her house of the eternal desert, along the way which she found among them. As to anyone else who approaches her on this day, you ( sic ) will not be separated from her by violence.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 1989,
              "action": "\"As to the dead who go about in the necropolis today, they are going about in order to repel the anger of the enemy who is in that land.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2004,
              "action": "\"Thoth comes with his spirits today. Replacing […] in the seats of the goddesses. As to any ritual that is done, they will be good on this day.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2014,
              "action": "\"Do not go out of your house on any road today. It is the day of making health and a lifetime in Heliopolis.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2023,
              "action": "\"Rebellion in the shrine (?). Do not do any work today.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2037,
              "action": "\"Do not speak the name of Set today. As to the one who pronounces his name in ignorance, he will not stop fighting in his house, forever.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2047,
              "action": "\"Birth of Nut, renewed [… it is good to see] any dead [to]day. […] Bast […] majesty of the foreign land, Eye of Yam (the sea). Do not go out of your house. Do not see sunlight.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2053,
              "action": "\"Do not go out of your house on any road. Do not see sunlight.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2066,
              "action": "\"Birth of the mysterious one, by his limbs. Do not have the thought of pronouncing the name of the snake. It is the day of catching his children that were born to him in Dep.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2072,
              "action": "\"Feast of Horus in Athribis on this day of his years, in his very beautiful images.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2081,
              "action": "\"Do not go out of your house on any road today.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2091,
              "action": "\"Do not do anything today, because of the great cry that the gods of the sacred places made, having come today.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2096,
              "action": "\"He was sent into the cave, without the knowledge of the great ones […] to look for the way of traveling today.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2103,
              "action": "\"Do not do anything today.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2110,
              "action": "\"Feast of Osiris at Abydos. The majesty of Onnophris erected the willow tree.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2115,
              "action": "\"If you see anything today, it will be good.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2121,
              "action": "\"Last day [of the month]: feast in Busiris. The names of the doorways of the horizon come into existence. House of Ra, House of Osiris, House of Horus.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2133,
              "action": "\"Great feast in heaven. It is the day of smiting the enemy as rebels against their mistress today.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2141,
              "action": "\"The majesty of Geb proceeds to the throne of Busiris to see Anubis, who commands the council on what is required today.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2166,
              "action": "\"The majesty of Horus is well, when the red one sees his form. As for anybody who approaches [Horus] on it, anger will start on it [today].\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2180,
              "action": "\"Going forth of Min into the tent, may he live, prosper, and be healthy, in festivity. The gods are in jubilation. Pay attention to the incense on the fire. Smell the sweet myrrh.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2186,
              "action": "\"The ennead is in adoration when they see this Eye of Haroeris (the Udjat) in place. All its parts are reckoned for its owner.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2193,
              "action": "\"Do not go out on it during the darkness, when Ra goes (down) in it […] its name […] It is the day of introducing the great ones before Ra to the wholeness of the Udjat-Eye. If you see anything today, it will be good.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2204,
              "action": "\"Do not go out of your house on any road today.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2218,
              "action": "\" […do not go out? on] any wind on this day. It is the day of conducting Osiris [in] his ship to Abydos.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2225,
              "action": "\"The crew circle around the gods today to look for the minions of Set. Do not be arrogant (lit., big-hearted) today.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2231,
              "action": "\"A great happy day in the eastern horizon of the sky, when the instructions were given to the followers of the gods in their temples, in the presence of the great ones of both horizons.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2236,
              "action": "\"The going forth of Khepera, who hears the words of his followers there. Every town is rejoicing.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2242,
              "action": "\"Going forth of Set, son of Nut, to disturb the great ones who hold him back in his town of Su (an unknown town in the Herakleopolite nome). Then these gods recognized him, and they repelled his followers. None of them remained.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2247,
              "action": "\"Do not approach when the majesty of Ra goes forth. Do not wash yourself with water today.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2253,
              "action": "\"The majesty of Ra goes forth in his barque […] heaven. Feast [and …] in Heliopolis. If you see anything today, it will be good.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2266,
              "action": "\"Do not go out today, on any road.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2277,
              "action": "\"It is the day of offerings [in] Abydos; food offerings […] invocation offerings to the ancestors.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2283,
              "action": "\"Do not mention Set's name in a loud voice today. It is the day of the rebellion he made against Onnophris. As to anyone who mentions his name in forgetting (i.e., forgetting one is not supposed to name him), fighting will happen in his house forever.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2301,
              "action": "\"Do not go out of your house until Ra sets, because the majesty of Sekhmet is angry in the land of the Tjemhu (i.e., a tribe in Libya). Behold, she went around, walking and standing…\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2309,
              "action": "\"If you see anything today, it will be good.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2314,
              "action": "\"The gods are satisfied [when] they give adoration to Onnophris, with incense on the fire, and your local gods [are given] myrrh […] [It is] pleasant today.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2323,
              "action": "\"Offer to Ptah-Sokar-Osiris, [and] Atum, Lord of the Two Lands [and] of Heliopolis, [and] to all the gods […] today. House of Ra, House of Osiris, House of Horus.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2344,
              "action": "\"Do not sail(?) in any wind today.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2351,
              "action": "\"If you see anything today, it will be good.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2359,
              "action": "\"Do not go out of your house on any road today. It is the day of […] year.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2367,
              "action": "\"Feast of Banebdjedet on this day. […] As to anyone who goes out of his house today, disease will abandon him until he dies.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2383,
              "action": "\"The crew follows Horus in the foreign lands, and examines its list […] therein, when he smote him who rebelled against his master. Every land is in joy, and their hearts are glad….\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2390,
              "action": "\"If you see anything today, it will be good.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2395,
              "action": "\"If you see anything today, it will be good. […] the ennead […]\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2402,
              "action": "\"Proceeding of the white one of heaven, upstream, to observe at the front, among those who rebelled against their master in the Delta.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2417,
              "action": "\"Do not […] he goes forth. His body […]\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2423,
              "action": "\"Do not […] until […]\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2441,
              "action": "\"Anyone born today will die […] Do not go out of your house until Ra sets in the horizon [today].\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2448,
              "action": "\"If you see anything today, it will be good. The ennead is in joy and the crew of Ra is in festival.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2471,
              "action": "\"Ma'at judges before the gods, who became angry in the island of the sanctuary of Letopolis. The Majesty of Horus changed it.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2477,
              "action": "\"Vomiting [up] the things that come back from the boat, so that no follower of Ra remains: that is, his followers attending him.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2483,
              "action": "\"Anyone born today will die in old age.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2490,
              "action": "\"If you see anything today, it will be good.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2496,
              "action": "\"[Do not listen to the?] words of the rebels today…\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2507,
              "action": "\"If you see anything today, it will be good.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2513,
              "action": "\"[Appearance of] Ba[bi] in front of Ra…\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2519,
              "action": "\"…great […] him today…If you see anything today, it will be good.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2530,
              "action": "\"Feast of [Min, the gods being?] happy […] House of Ra, House of Osiris, House of Horus.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2544,
              "action": "\"O heart of the gods, listen well, listen well... […] The crew of Ra is in festivity.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2549,
              "action": "\"The month of those who are in Ra's body. A day is established in heaven and on the earth as a festival.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2555,
              "action": "\"Do not shout at anyone today, which is the day that which Geb and Nut have done was judged in the presence of (lit., upon the hands of) the gods.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2560,
              "action": "\"If you see anything today, it will be good.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2567,
              "action": "\"Horus proceeds to repel what was done against his father, and to inquire from the followers of his father Onnophris today.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2575,
              "action": "\"Do not go out of your house during walking time [… until the setting of] Ra in the horizon. It is the day of Sekhmet's executioners […] counting by names […]\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2583,
              "action": "\"Make a holiday for Ra and his followers, [and] a good day today.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2590,
              "action": "\"Make incense of different kinds of sweet herbs, for his (i.e., Ra's) followers while pleasing him today.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2596,
              "action": "\"Anyone born on this day will be noble.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2601,
              "action": "\"Do not sail in a boat on the river. It is the day of the followers of Ra catching birds and fish. Anyone who sails on the river will not live.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2616,
              "action": "\"If you see anything today, it will be good.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2622,
              "action": "\"Feast of Wadjet in Buto. Her followers are also in festival, when singing and chanting take place, on the day of offering incense and all kinds of sweet herbs.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2637,
              "action": "\"Do not judge yourself […] today. It is the day of fighting […] their rebellion.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2646,
              "action": "\"Anyone born today will die great, as a magistrate among all people.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2652,
              "action": "\"Do not go out on it. Do not do anything, or any work, today.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2658,
              "action": "\"Do not eat the meat of any lion [today]. It is the day of the going forth of the Foremost One of the gods' house (i.e., Osiris). He goes around to the noble mountain (i.e., the necropolis). All who smell death or skin rash [today] will not recover.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2664,
              "action": "\"The Ennead sails. They are numerous […] in the entire land. If any lion is seen, he will die at once. Today is the day of judging the great ones.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2670,
              "action": "\"Many die when they (i.e., the gods) come with a contrary wind. Do not go out with any wind today.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2685,
              "action": "\"The crew (i.e., of Ra) rest when they see the enemy of their master.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2690,
              "action": "\"If you see anything today, it will be good.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2700,
              "action": "\"The going forth of Neith. She walks in the flood today with the weavers, in order to look for Sobek's things. If any lion sees them, he will die immediately.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2705,
              "action": "\"The cutting of heads and the tying of throats (or binding to the oars), and the occurrence of flight (i.e., fleeing) among the gods today.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2714,
              "action": "\"Purifying things and offerings in Busiris. The gods spend the day in festivity. Act in accordance with that which happens today.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2720,
              "action": "\"If you see anything today, it will be good.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2735,
              "action": "\"Every god and every goddess spends the day in festivity and in great astonishment in the temple [of Djosret].\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2740,
              "action": "\"Anger of the divine majesty. Do not do anything today.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2747,
              "action": "\"If you see anything today, it will be good.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2756,
              "action": "\"Do not fight or make uproar in your house, while every temple of the goddess (i.e., Hathor) is in this manner.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2760,
              "action": "\"Sailing of the gods after the majesty of this goddess (i.e., Hathor, a reference to the Beautiful Reunion going on at the time of the Cairo Calendar's creation). As for […] in it, [there is the lighting of] a flame which takes place in front of everyone today.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2764,
              "action": "\"Do not beat anyone; do not strike anyone. It is the day of the massacre of the followers of the majesty of the goddess (i.e., Hathor).\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2774,
              "action": "\"Creating enmity according to the event. The gods who are in the shrine, their hearts are sad.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2787,
              "action": "\"Holiday. It is the reception of Ra. His followers are in festival and everyone is in festival.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2796,
              "action": "\"The majesty of this god (i.e., Ra) proceeds, sailing westward to see the beauty of Onnophris today.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2802,
              "action": "\"Do not burn [anything] today, in your house, with anything, in the manner of burning flame with any of its glow, on that day of the anger of that Eye of Haroeris.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2808,
              "action": "\"If you see anything today, it will be good. Horus hears your words in the presence of every god and every goddess today. You will see every good thing in your house.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2814,
              "action": "\"It is the day of transmitting Ma'at to the shrine by the majesty of Ra in Heliopolis. These gods knew that she was much blamed for it.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2819,
              "action": "\"The escape of the fugitive Eye […] and the gods were deprived of Ra, who had come to hand the rebels to him […] in their path.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2831,
              "action": "\"Do not repeat greetings today, nor do any work today. Breaking of […] into the water today.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2839,
              "action": "\"Do not go out of your house on any road today.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2847,
              "action": "\"If you see anything today, it will be good.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2853,
              "action": "\"Do not look at [or] itch (lit., dig) any skin rash, or any fevers today. It is the day of Sepa in Tura, coming from Heliopolis.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2859,
              "action": "\"Anyone born on this day will not live. It is the day of fighting and reproaching with Onnophris.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2868,
              "action": "\"Do not go out at noon; the great enemy is in the temple of Sekhmet.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2873,
              "action": "\"If you see anything today, it will be good.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2877,
              "action": "\"Do not go out of your house today. It is the day of sailing on the river, and of overthrowing the enclosure walls.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2883,
              "action": "\"Creating misery, and bringing terror into being, in conformity with the custom of what is in the year.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2888,
              "action": "\"The feast of Mut in Isheru today. It is the day of feeding the gods and her followers.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2905,
              "action": "\"Sending food offerings to those who are in heaven. Every god and every goddess spend today in the feast of Onnophris.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2910,
              "action": "\"Ma'at and all gods perform the rites, like the one who is in heaven.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2915,
              "action": "\"Proceeding of the majesty of this goddess (i.e., Hathor) to the Heliopolis of Ra. A feast was made on this day. Do not go out to do anything.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2927,
              "action": "\"The house of Min is in festival, Min being at Akhmim. If you see anything today, it will be good.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2934,
              "action": "\"Offering to the rejuvenated one (i.e., Onnophris) in Rosetjau and hiding the mysteries of the conspirators on this day. Do not do anything today.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2941,
              "action": "\"If you see anything today, it will be good.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2946,
              "action": "\"Anyone born today will receive noble honors.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2952,
              "action": "\"It is the repulsion of the crew that was in the Delta. It is the day of the Eye of Ra entering his horizon, when he sees his beauty.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2959,
              "action": "\"Jubilation throughout the entire land today. The heart ( sic ) of those who are in the shrine is happy.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2965,
              "action": "\"A holiday because of defending the son of Osiris [from joining in the combat in the] back of the law court, by Set.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2970,
              "action": "\"Establishing her (i.e., Ma'at's) seat and her hall […] in the divine court on the Zep Tepi today.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2983,
              "action": "\"Do not do anything. Do not go out on any road today. [It is the] going forth of Ra to propitiate the Nun […] in his cavern, in front of his followers and the ennead of the night-barque today.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2987,
              "action": "\"[G]ive water to those in the mysterious world [and the] ennead of the West. It is pleasant to your fathers and mothers in the necropolis.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2993,
              "action": "\"If you see anything today, it will be good.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 2999,
              "action": "\"Do not go out in the morning because of the crew who leads the rebels. If any lion goes out on the earth today, he will be blind, and they will say concerning him: 'he will not live.'\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 3007,
              "action": "\"Celebrate the feast of your god. Appease your spirit, for this Eye of Horus has returned complete; nothing is missing in it.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 3016,
              "action": "\"Do not kill an ankhyt-reptile today. It is the day of the cleansing and renewal of the noble ones. There is silence because of it upon the earth, in order to propitiate the Udjat Eye.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 3023,
              "action": "\"If you see anything today, it will be good.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 3029,
              "action": "\"The feast of Anubis, who is upon his mountain, today. The children of Geb and Nut spend the day in festival today, which is a holiday after the beautiful bathing of the gods (i.e., icon purifications).\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 3035,
              "action": "\"Do not taste bread or beer today, because the […] of that which was done before the one who rebelled against his master.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 3040,
              "action": "\"Make food offerings to the gods, in Ra's presence. Make a holiday in your house.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 3046,
              "action": "\"The god[s are…] established in front of Ra's crew, who is ( sic ) happy in the temple.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 3051,
              "action": "\"Do not go out today at noon. The gods […] sail with all winds […] takes place […] Do not go out of your house.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 3057,
              "action": "\"[…] earth. Do not do anything today.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 3062,
              "action": "\"Feast of Min. Day of […] [If you see anything] today, it will be good.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 3070,
              "action": "\"Holiday in the temple of Sokar, in the estate of Ptah, and those who are in this estate are healthy and in great festivity.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 3080,
              "action": "\"[…] Anything that comes forth from it on the estate of Ptah will be good. As for any offering, any ritual, or anyone on this day, it is good throughout the year. Sing and offer much.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 3086,
              "action": "\"The great ones are born. As for the great ones whose forms are not mysterious, beware of them! Their moment will not come […] they have proceeded […] his […] Birth of Osiris, Birth of Haroeris, Birth of Set, Birth of Isis, Birth of Nephthys. As for anyone who knows the names of the five epagomenal days, he does not hunger, he does not thirst; Bast does not overpower him. He will not enter into the great law court, he will not die through an enemy of the pharaoh, and he will not die through the pestilence of the year. But he will endure, every day, until death arrives, even as no illness will take him. As for him who knows them, Hu will be prosperous within him. His speech is important to listen to in Ra's presence. First day: the birth of Osiris. Words to be said: 'O Osiris, Bull in his cavern, whose name is hidden [from] the children of his mother. Hail to you, hail to you! […] I am your son, [Horus…], O father Osiris.' The name of this day [is] the pure one […] house […]\" (CC)",
              "tags": "",
              "hide": "filter"
          },
          {
              "id": 3087,
              "action": "\"The name of the days for protecting the limbs is 'the ape who is with him.'\" (CC)",
              "tags": "",
              "hide": "filter"
          },
          {
              "id": 3088,
              "action": "\"O Osiris, bull in his cavern, whose mother's name is hidden, [if] you are asked, I am your son Horus.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 3096,
              "action": "\"The Majesty of Horus, who fights the timid one in his pool.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 3103,
              "action": "\"Birth of Set. Words to be said on it: 'O Set, son of Nut, great of strength […] protection is at the hands of your holy power.'\" (CC)",
              "tags": "",
              "hide": "filter"
          },
          {
              "id": 3104,
              "action": "\"The name of the days for protecting the limbs is: 'Horus-Shu who is in his nest.'\" (CC)",
              "tags": "",
              "hide": "filter"
          },
          {
              "id": 3105,
              "action": "\"Birth of Set. Words to be said on it: 'O Set, son of Nut who is in front of the barque of millions of years, whose name is 'How is this land?', may you save me from any bad or evil thing, from any slaughter of this year.' The name of this day [is] Horus-the-falcon who sees the rower.\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 3111,
              "action": "\"O Isis, the goddess who guides […] the Akhet Eye, daughter of Nut, the mistress of Chemmis. Save me from any bad or evil thing. Save the son Horus on this day. The name of this day is 'making preparation.'\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 3117,
              "action": "\"The name of the days for protecting the limbs is 'The great heir…'\" (CC)",
              "tags": "",
              "hide": "filter"
          },
          {
              "id": 3118,
              "action": "\"O Nephthys, daughter of Nut, save me from any bad thing of this year, from any slaughter of this year, just as you have made my protection. Protect me again, in the name of this day 'child who is in the nest.'\" (CC)",
              "tags": "",
              "hide": "filter"
          }
      ],
      [
          {
              "id": 0,
              "action": "No entry for today",
              "tags": "",
              "hide": "filter"
          }
      ]
  ]
  },
  property: function(m) {
    return m.planetary.day.start;
  },
  calculate: function(definitions, property) {
    var ed = egyptianDate(property).day.ofyear + 1;
    return definitions.actions[ed];
  }
};

var module_kemet_cc_alexandrian = {
  definitions: {
    name: "Cairo Calendar (Alexandrian)",
    description: "Daily almanac of lucky and unlucky days from the Cairo Calendar (pCairo 86637) according to the Alexandrian (Coptic) Civil Calendar",
    hide: "filter",
    group: {
      id: "kemet",
      text: "Kemet",
      info: "true"
    },
    actions: module_kemet_cc_pharaonic.definitions.actions
  },
  property: function(m) {
    return m.planetary.day.start;
  },
  calculate: function(definitions, property) {
    var date = new Date(property * 1000);
    var cd = new Intl.DateTimeFormat('en', { calendar:'coptic', dateStyle:"short"})
    var cdl = cd.format(date).split(",")[0].split("/");
    var doy = ((parseInt(cdl[0]) - 1) * 30) + parseInt(cdl[1]);
    return definitions.actions[doy];
  }
};

var module_kemet_unlucky_pharaonic = {
  definitions: {
    name: "(Un)suitable (Pharaonic)",
    description: "The unlucky days of PGM VII.272ff according to the Pharaonic Civil Calendar",
    hide: "filter",
    group: {
      id: "kemet",
      text: "Kemet",
      info: "true"
    },
    actions: [
      [
          {
              "id": 399,
              "action": "unsuitable for magic operations (PGM VII.272ff)",
              "tags": "unsuitable"
          }
      ],
      [
          {
              "id": 400,
              "action": "suitable for magic operations (PGM VII.272ff)",
              "tags": "suitable"
          }
      ]
    ]
  },
  property: function(m) {
    return m.planetary.day.start;
  },
  calculate: function(definitions, property) {
    const unsuitable = [1, 4, 12, 13, 22, 32, 34, 40, 49, 50, 67, 68, 69, 77, 78, 83, 87, 95, 96, 103, 105, 106, 114, 115, 123, 124, 132, 144, 146, 151, 152, 160, 164, 169, 187, 188, 189, 215, 216, 224, 225, 230, 243, 244, 252, 253, 261, 266, 268, 271, 272, 280, 281, 285, 290, 307, 308, 309, 314, 318, 319, 322, 340, 344, 350, 353, 354, 355]
    var ed = egyptianDate(property).day.ofyear + 1;
    var boo = unsuitable.includes(ed) ?  0 : 1;
    return definitions.actions[boo];
  }
};

var module_kemet_unlucky_alexandrian = {
  definitions: {
    name: "(Un)suitable (Pharaonic)",
    description: "The unlucky days of PGM VII.272ff according to the Alexandrian (Coptic) Civil Calendar",
    hide: "filter",
    group: {
      id: "kemet",
      text: "Kemet",
      info: "true"
    },
    actions: module_kemet_unlucky_pharaonic.definitions.actions
  },
  property: function(m) {
    return m.planetary.day.start;
  },
  calculate: function(definitions, property) {
    const unsuitable = [1, 4, 12, 13, 22, 32, 34, 40, 49, 50, 67, 68, 69, 77, 78, 83, 87, 95, 96, 103, 105, 106, 114, 115, 123, 124, 132, 144, 146, 151, 152, 160, 164, 169, 187, 188, 189, 215, 216, 224, 225, 230, 243, 244, 252, 253, 261, 266, 268, 271, 272, 280, 281, 285, 290, 307, 308, 309, 314, 318, 319, 322, 340, 344, 350, 353, 354, 355];
    var date = new Date(property * 1000);
    var cd = new Intl.DateTimeFormat('en', { calendar:'coptic', dateStyle:"short"})
    var cdl = cd.format(date).split(",")[0].split("/");
    var doy = ((parseInt(cdl[0]) - 1) * 30) + parseInt(cdl[1]);
    var boo = unsuitable.includes(doy) ?  0 : 1;
    return definitions.actions[boo];
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
