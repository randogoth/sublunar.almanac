/**
* @preserve Copyright (c) 2018-2022 NN Solex, www.sublunar.space
* License MIT: http://www.opensource.org/licenses/MIT
*/

var module_lunarmansion = {

  /**
   * plugin module definitions
   */
  definitions: {
    name: "Mansion", // how it appears in the navbar menu and info modal
    group: {
      id: "lunar", // id of the group
      text: "Lunar" // label of the group's dropdown menu
    },
    actions: [ // array of actions and tags for the filters
      [0],
      [
        {
          "id": "1",
          "action": "1 Al-Sharatain / Alnath",
          "tags": "alsharatain alnath"
        },
        {
          "id": "46",
          "action": "going on a journey",
          "tags": "journey"
        },
        {
          "id": "231",
          "action": "taking medicine",
          "tags": "healing"
        },
        {
          "id": "232",
          "action": "making a servant flee",
          "tags": "harm"
        }
      ],
      [
        {
          "id": "2",
          "action": "2 Al-Butain / Albotain",
          "tags": "albutain albotain"
        },
        {
          "id": "233",
          "action": "dig streams, wells",
          "tags": "water"
        },
        {
          "id": "234",
          "action": "finding lost treasures",
          "tags": "treasure"
        },
        {
          "id": "235",
          "action": "have plenty of corn",
          "tags": "agriculture food business"
        },
        {
          "id": "236",
          "action": "strengthen prisons",
          "tags": "protection war building captivity"
        }
      ],
      [
        {
          "id": "3",
          "action": "3 Al-Thuraiya / Azoraya",
          "tags": "althuraiya azoraya"
        },
        {
          "id": "236",
          "action": "strengthen prisons",
          "tags": "protection war building captivity"
        }, {
          "id": "237",
          "action": "protect sailors at sea",
          "tags": "sailing protection"
        }, {
          "id": "87",
          "action": "practicing alchemy",
          "tags": "alchemy"
        }, {
          "id": "144",
          "action": "doing something that has to do with fires",
          "tags": "fire"
        }, {
          "id": "205",
          "action": "causing love in a couple",
          "tags": "love couple"
        }
      ], // 3
      [
        {
          "id": "4",
          "action": "4 Al-Dabaran / Aldebaran",
          "tags": "aldabaran aldebaran"
        },
        {
          "id": "238",
          "action": "make master shrink back from servant",
          "tags": "harm"
        }
      ], // 4
      [
        {
          "id": "5",
          "action": "5 Al-Haqa / Almices",
          "tags": "alhaqa almices"
        },
        {
          "id": "205",
          "action": "causing love in a couple",
          "tags": "love couple"
        }, {
          "id": "239",
          "action": "set boys to learn skills",
          "tags": "children education"
        }, {
          "id": "240",
          "action": "safeguarding travellers",
          "tags": "journey protection"
        }, {
          "id": "241",
          "action": "improve buildings",
          "tags": "building"
        }
      ], // 5
      [
        {
          "id": "6",
          "action": "6 Al-Hana / Athaya",
          "tags": "alhana athaya"
        },
        {
          "id": "242",
          "action": "bring friendship",
          "tags": "love friendship"
        }
      ], // 6
      [
        {
          "id": "7",
          "action": "7 Al-Dhira / Aldira",
          "tags": "aldira aldhira"
        },
        {
          "id": "237",
          "action": "protect sailors at sea",
          "tags": "sailing protection"
        }, {
          "id": "242",
          "action": "bring friendship",
          "tags": "love friendship"
        }, {
          "id": "243",
          "action": "increase trade and profit",
          "tags": "business"
        }, {
          "id": "244",
          "action": "increase crops",
          "tags": "food agriculture business"
        }, {
          "id": "245",
          "action": "expel flies",
          "tags": "protection animals"
        }, {
          "id": "246",
          "action": "gain favor of kings and authorities",
          "tags": "authority"
        }
      ], // 7
      [
        {
          "id": "8",
          "action": "8 Al-Nathrah / Annathra",
          "tags": "alnathrah annathra"
        },
        {
          "id": "46",
          "action": "going on a journey",
          "tags": "journey"
        },
        {
          "id": "236",
          "action": "strengthen prisons",
          "tags": "protection war building captivity"
        }, {
          "id": "242",
          "action": "bring friendship",
          "tags": "love friendship"
        }, {
          "id": "247",
          "action": "expel mice and bugs",
          "tags": "protection animals"
        }
      ], // 8
      [
        {
          "id": "9",
          "action": "9 Al-Tarf / Atarf",
          "tags": "altarf atarf"
        },
        {
          "id": "248",
          "action": "protect from another man's claims",
          "tags": "protection business"
        }
      ], // 9
      [
        {
          "id": "10",
          "action": "10 Al-Jabhah / Algebha",
          "tags": "aljabhah algebha"
        },
        {
          "id": "236",
          "action": "strengthen prisons",
          "tags": "protection war building captivity"
        }, {
          "id": "241",
          "action": "improve buildings",
          "tags": "building"
        }, {
          "id": "242",
          "action": "bring friendship",
          "tags": "love friendship"
        }, {
          "id": "249",
          "action": "cause love between a man and a woman",
          "tags": "love"
        }
      ], // 10
      [
        {
          "id": "11",
          "action": "11 Al-Zubrah / Azobra",
          "tags": "alzubrah azobra"
        },
        {
          "id": "241",
          "action": "improve buildings",
          "tags": "building"
        }, {
          "id": "243",
          "action": "increase trade and profit",
          "tags": "business"
        }, {
          "id": "250",
          "action": "release captives",
          "tags": "captivity"
        }, {
          "id": "251",
          "action": "travel safely in hot places",
          "tags": "journey protection"
        }, {
          "id": "252",
          "action": "increase wealth of allies",
          "tags": "business friendship"
        }
      ], // 11
      [
        {
          "id": "12",
          "action": "12 Al-Sarfah / Acarfa",
          "tags": "alsarfah acarfa"
        },
        {
          "id": "244",
          "action": "increase crops",
          "tags": "food agriculture business"
        }, {
          "id": "253",
          "action": "help allies, authorities, captives and servants",
          "tags": "aid friendship authorities captivity"
        }
      ], // 12
      [
        {
          "id": "13",
          "action": "13 Al-Awwah / Alahue",
          "tags": "alawwah / alahue"
        },
        {
          "id": "243",
          "action": "increase trade and profit",
          "tags": "business"
        }, {
          "id": "244",
          "action": "increase crops",
          "tags": "food agriculture business"
        }, {
          "id": "246",
          "action": "gain favor of kings and authorities",
          "tags": "authority"
        }, {
          "id": "250",
          "action": "release captives",
          "tags": "captivity"
        }, {
          "id": "251",
          "action": "travel safely in hot places",
          "tags": "journey protection"
        }
      ], // 13
      [
        {
          "id": "14",
          "action": "14 Al-Simak / Azimech",
          "tags": "alsimak azimech"
        },
        {
          "id": "237",
          "action": "protect sailors at sea",
          "tags": "sailing protection"
        }, {
          "id": "242",
          "action": "bring friendship",
          "tags": "love friendship"
        }, {
          "id": "249",
          "action": "cause love between a man and a woman",
          "tags": "love"
        }, {
          "id": "254",
          "action": "heal the sick by drugs, medicine",
          "tags": "healing"
        }, {
          "id": "255",
          "action": "destroy lust",
          "tags": "harm love"
        }, {
          "id": "256",
          "action": "improve luck of kings",
          "tags": "authority"
        }
      ], // 14
      [
        {
          "id": "15",
          "action": "15 Al-Ghafr / Algarfa",
          "tags": "alghafr algarfa"
        },
        {
          "id": "234",
          "action": "finding lost treasures",
          "tags": "treasure"
        }, {
          "id": "233",
          "action": "dig streams, wells",
          "tags": "water"
        }, {
          "id": "257",
          "action": "scatter your enemies",
          "tags": "war"
        }
      ], // 15
      [0, {
        "id": "16",
        "action": "16 Al-Zubana / Azubene",
        "tags": "alzubana azubene"
      }], // 16
      [
        {
          "id": "17",
          "action": "17 Al-Iklil / Alichil",
          "tags": "aliklil alichil"
        },
        {
          "id": "237",
          "action": "protect sailors at sea",
          "tags": "sailing protection"
        }, {
          "id": "205",
          "action": "causing love in a couple",
          "tags": "love couple"
        }, {
          "id": "241",
          "action": "improve buildings",
          "tags": "building"
        }, {
          "id": "242",
          "action": "bring friendship",
          "tags": "love friendship"
        }, {
          "id": "249",
          "action": "cause love between a man and a woman",
          "tags": "love"
        }
      ], // 17
      [
        {
          "id": "18",
          "action": "18 Al-Qalb / Alcalb",
          "tags": "alqalb alcalb"
        },
        {
          "id": "241",
          "action": "improve buildings",
          "tags": "building"
        }, {
          "id": "250",
          "action": "release captives",
          "tags": "captivity"
        }], // 18
      [
        {
          "id": "19",
          "action": "19 Al-Shaulah / Exaula",
          "tags": "alshaulah exaula"
        },
        {
          "id": "240",
          "action": "safeguarding travellers",
          "tags": "journey protection"
        }, {
          "id": "244",
          "action": "increase crops",
          "tags": "food agriculture business"
        }], // 19
      [
        {
          "id": "20",
          "action": "20 Al-Naaim / Nahaym",
          "tags": "alnaaim nahaym"
        },
        {
          "id": "236",
          "action": "strengthen prisons",
          "tags": "protection war building captivity"
        }, {
          "id": "240",
          "action": "safeguarding travellers",
          "tags": "journey protection"
        }, {
          "id": "241",
          "action": "improve buildings",
          "tags": "building"
        }, {
          "id": "259",
          "action": "tame vicious beasts",
          "tags": "animals"
        }, {
          "id": "260",
          "action": "people you want to come to you",
          "tags": "people"
        }, {
          "id": "261",
          "action": "for allying good men with each other",
          "tags": "friendship"
        }], // 20
      [
        {
          "id": "21",
          "action": "21 Al-Baldah / Elbelda",
          "tags": "albaldah elbelda"
        },
        {
          "id": "240",
          "action": "safeguarding travellers",
          "tags": "journey protection"
        }, {
          "id": "243",
          "action": "increase trade and profit",
          "tags": "business"
        }, {
          "id": "244",
          "action": "increase crops",
          "tags": "food agriculture business"
        }], // 21
      [
        {
          "id": "22",
          "action": "22 Sa'd al-Dhabih / Caadaldeba",
          "tags": "sadaldhabih caadaldeba"
        },
        {
          "id": "254",
          "action": "heal the sick by drugs, medicine",
          "tags": "healing"
        }, {
          "id": "261",
          "action": "for allying good men with each other",
          "tags": "friendship"
        }], // 22
      [
        {
          "id": "23",
          "action": "23 Sa'd Bula / Caaddebolach",
          "tags": "sadbula caaddebolach"
        },
        {
          "id": "242",
          "action": "bring friendship",
          "tags": "love friendship"
        }, {
          "id": "254",
          "action": "heal the sick by drugs, medicine",
          "tags": "healing"
        }, {
          "id": "261",
          "action": "for allying good men with each other",
          "tags": "friendship"
        }], // 23
      [
        {
          "id": "24",
          "action": "24 Sa'd al Suud / Caddacohot",
          "tags": "sadalsuud caddacohot"
        },
        {
          "id": "205",
          "action": "causing love in a couple",
          "tags": "love couple"
        }, {
          "id": "243",
          "action": "increase trade and profit",
          "tags": "business"
        }, {
          "id": "262",
          "action": "soldiers to report victory",
          "tags": "war"
        }], // 24
      [
        {
          "id": "25",
          "action": "25 Sa'd al-Akhbiyah / Caadalhacbia",
          "tags": "sadalakhbiyah caadalhacbia"
        },
        {
          "id": "241",
          "action": "improve buildings",
          "tags": "building"
        }], // 25
      [
        {
          "id": "26",
          "action": "26 Al-Fargh al-Awwal / Almiquedam",
          "tags": "alfarghalawwal almiquedam"
        },
        {
          "id": "236",
          "action": "strengthen prisons",
          "tags": "protection war building captivity"
        }, {
          "id": "240",
          "action": "safeguarding travellers",
          "tags": "journey protection"
        }, {
          "id": "241",
          "action": "improve buildings",
          "tags": "building"
        }, {
          "id": "242",
          "action": "bring friendship",
          "tags": "love friendship"
        }], // 26
      [
        {
          "id": "27",
          "action": "27 Al-Fargh al-Thani / Algarf almuehar",
          "tags": "alfarghalthani algarfalmuehar"
        },
        {
          "id": "243",
          "action": "increase trade and profit",
          "tags": "business"
        }, {
          "id": "254",
          "action": "heal the sick by drugs, medicine",
          "tags": "healing"
        }, {
          "id": "261",
          "action": "for allying good men with each other",
          "tags": "friendship"
        }], // 27
      [
        {
          "id": "28",
          "action": "28 Batn al-Hut / Arrexhe",
          "tags": "batnalhut arrexhe"
        },
        {
          "id": "236",
          "action": "strengthen prisons",
          "tags": "protection war building captivity"
        }, {
          "id": "205",
          "action": "causing love in a couple",
          "tags": "love couple"
        }, {
          "id": "240",
          "action": "safeguarding travellers",
          "tags": "journey protection"
        }, {
          "id": "243",
          "action": "increase trade and profit",
          "tags": "business"
        }, {
          "id": "244",
          "action": "increase crops",
          "tags": "food agriculture business"
        }], // 28
    ],
    mansion : {
      tropical : [
        "void",
        "12 Aries 51",
        "25 Aries 42",
        "8 Taurus 34",
        "21 Taurus 25",
        "4 Gemini 17",
        "17 Gemini 8",
        "0 Cancer 0",
        "12 Cancer 51",
        "25 Cancer 42",
        "8 Leo 34",
        "21 Leo 25",
        "4 Virgo 17",
        "17 Virgo 8",
        "0 Libra 0",
        "12 Libra 51",
        "25 Libra 42",
        "8 Scorpio 34",
        "21 Scorpio 25",
        "4 Sagittarius 17",
        "17 Sagittarius 8",
        "0 Capricorn 0",
        "12 Capricorn 51",
        "25 Capricorn 42",
        "8 Aquarius 34",
        "21 Aquarius 25",
        "4 Pisces 17",
        "17 Pisces 8",
        "360 Aries 0"
      ],
      constellational : [
        "void",
        "3 Taurus 0",
        "18 Taurus 0",
        "29 Taurus 0",
        "10 Gemini 0",
        "24 Gemini 0",
        "9 Cancer 0",
        "20 Cancer 0",
        "7 Leo 0",
        "18 Leo 0",
        "28 Leo 0",
        "12 Virgo 0",
        "22 Virgo 0",
        "27 Virgo 0",
        "24 Libra 0",
        "4 Scorpio 0",
        "15 Scorpio 0",
        "3 Sagittarius 0",
        "10 Sagittarius 0",
        "24 Sagittarius 0",
        "13 Capricorn 0",
        "16 Capricorn 0",
        "4 Aquarius 0",
        "12 Aquarius 0",
        "23 Aquarius 0",
        "4 Pisces 0",
        "23 Pisces 0",
        "9 Aries 0",
        "0 Taurus 0",
      ]
    }
  },
  /**
   * property defines the main set of the astronomical data of the planetary hour used to calculate a filterable definition of operations and tags
   */
  property: function(m) {
    return m.ephemeris.moon.deg;
  },
  /**
   * calculate receives the definitions from above and the property from above and calculates a return array of objects with id, operation, and tags
   */
  calculate: function(definitions, property) {
    var mansions = definitions.mansion.tropical;
    var mansion = 1;
    while ( property > SL.Astro.Logy.zodToDeg(mansions[mansion], 0) ) mansion++;
    return definitions.actions[mansion];
  }
};
