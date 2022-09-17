/**
* @preserve Copyright (c) 2018-2022 NN Solex, www.sublunar.space
* License MIT: http://www.opensource.org/licenses/MIT
*/

//Defines Calendar Objects and Methods
var module_hygromanteia_hours = {

  definitions: {
    name: "Planetary Hour",
    group: {
      id: "hygromanteia",
      text: "Hygromanteia",
      info: "true"
    },
    actions: [
      [
        {
          "id": "8",
          "action": "Begin an address",
          "tags": "beginning"
        },
        {
          "id": "11",
          "action": "Begin praying",
          "tags": "beginning prayer"
        },
        {
          "id": "106",
          "action": "sending dreams",
          "tags": "dreams"
        },
        {
          "id": "19",
          "action": "casting spells",
          "tags": "spells"
        },
        {
          "id": "123",
          "action": "Useless hour",
          "tags": "avoid"
        },
        {
          "id": "49",
          "action": "harming someone",
          "tags": "harm"
        },
        {
          "id": "74",
          "action": "making retribution",
          "tags": "good"
        },
        {
          "id": "61",
          "action": "Joyous for everything",
          "tags": "anything"
        },
        {
          "id": "106",
          "action": "sending dreams",
          "tags": "dreams"
        },
        {
          "id": "119",
          "action": "teaching",
          "tags": "education"
        },
        {
          "id": "116",
          "action": "success",
          "tags": "success"
        },
        {
          "id": "6",
          "action": "Be careful",
          "tags": "careful"
        },
        {
          "id": "54",
          "action": "helping a friend",
          "tags": "aid"
        },
        {
          "id": "89",
          "action": "preventing an address",
          "tags": "harm"
        },
        {
          "id": "107",
          "action": "sending dreams to a king",
          "tags": "dreams authority"
        },
        {
          "id": "108",
          "action": "sending dreams to a lady",
          "tags": "dreams authority"
        },
        {
          "id": "35",
          "action": "Do nothing",
          "tags": "rest"
        },
        {
          "id": "128",
          "action": "working",
          "tags": "business"
        },
        {
          "id": "117",
          "action": "Take care to do nothing",
          "tags": "rest"
        },
        {
          "id": "67",
          "action": "Make a talisman the love of lords",
          "tags": "love"
        },
        {
          "id": "98",
          "action": "restraining somebody's activities",
          "tags": "harm"
        },
        {
          "id": "2",
          "action": "appearing before a king",
          "tags": "authority"
        },
        {
          "id": "3",
          "action": "appearing before a lady",
          "tags": "authority"
        },
        {
          "id": "94",
          "action": "Rest",
          "tags": "rest"
        }
      ],
      [
        {
          "id": "66",
          "action": "Make a talisman buying and selling",
          "tags": "business"
        },
        {
          "id": "112",
          "action": "sickness",
          "tags": "harm"
        },
        {
          "id": "83",
          "action": "opening a workshop",
          "tags": "business beginning"
        },
        {
          "id": "91",
          "action": "preventing working",
          "tags": "harm"
        },
        {
          "id": "12",
          "action": "Begin to sell",
          "tags": "beginning business"
        },
        {
          "id": "59",
          "action": "interceding to a dealing",
          "tags": "business"
        },
        {
          "id": "46",
          "action": "going on a journey",
          "tags": "journey"
        },
        {
          "id": "129",
          "action": "working at night",
          "tags": "business night"
        },
        {
          "id": "35",
          "action": "Do nothing",
          "tags": "rest"
        },
        {
          "id": "110",
          "action": "setting up a business",
          "tags": "business"
        },
        {
          "id": "90",
          "action": "preventing luck",
          "tags": "harm"
        },
        {
          "id": "110",
          "action": "setting up a business",
          "tags": "business"
        },
        {
          "id": "94",
          "action": "Rest",
          "tags": "rest"
        },
        {
          "id": "92",
          "action": "profit",
          "tags": "business"
        },
        {
          "id": "78",
          "action": "merchandise",
          "tags": "business"
        },
        {
          "id": "34",
          "action": "Do not work on anything",
          "tags": "rest work"
        },
        {
          "id": "55",
          "action": "hindering",
          "tags": "harm"
        },
        {
          "id": "35",
          "action": "Do nothing",
          "tags": "rest"
        },
        {
          "id": "114",
          "action": "Start plans",
          "tags": "beginning plans"
        },
        {
          "id": "34",
          "action": "Do not work on anything",
          "tags": "rest work"
        },
        {
          "id": "79",
          "action": "Move and stir affairs",
          "tags": "action"
        },
        {
          "id": "9",
          "action": "Begin plans early morning",
          "tags": "beginning"
        },
        {
          "id": "34",
          "action": "Do not work on anything",
          "tags": "rest work"
        },
        {
          "id": "82",
          "action": "Open your workshop",
          "tags": "business"
        }
      ],
      [
        {
          "id": "125",
          "action": "war and victory",
          "tags": "war"
        },
        {
          "id": "118",
          "action": "taking loot",
          "tags": "business harm"
        },
        {
          "id": "32",
          "action": "displaying your military skills",
          "tags": "war"
        },
        {
          "id": "45",
          "action": "Go to war",
          "tags": "war"
        },
        {
          "id": "64",
          "action": "To make a nocturnal battle",
          "tags": "war night"
        },
        {
          "id": "7",
          "action": "Be extremely careful",
          "tags": "careful"
        },
        {
          "id": "44",
          "action": "Give thanks",
          "tags": "good"
        },
        {
          "id": "5",
          "action": "asking aid your salvation",
          "tags": "aid"
        },
        {
          "id": "36",
          "action": "Do whatever you want",
          "tags": "anything"
        },
        {
          "id": "33",
          "action": "Do mighty deeds",
          "tags": "good"
        },
        {
          "id": "71",
          "action": "making excuses",
          "tags": "excuses"
        },
        {
          "id": "115",
          "action": "stirring your work",
          "tags": "business"
        },
        {
          "id": "6",
          "action": "Be careful",
          "tags": "careful"
        },
        {
          "id": "17",
          "action": "bringing someone into discredit",
          "tags": "harm"
        },
        {
          "id": "4",
          "action": "asking aid",
          "tags": "aid"
        },
        {
          "id": "123",
          "action": "Useless hour",
          "tags": "avoid"
        },
        {
          "id": "100",
          "action": "rising in honour",
          "tags": "honour"
        },
        {
          "id": "62",
          "action": "keeping concealed",
          "tags": "secrets"
        },
        {
          "id": "126",
          "action": "winning over an opponent",
          "tags": "war"
        },
        {
          "id": "76",
          "action": "marching against enemies",
          "tags": "war"
        },
        {
          "id": "62",
          "action": "keeping concealed",
          "tags": "secrets"
        },
        {
          "id": "88",
          "action": "Pray to God",
          "tags": "prayer"
        },
        {
          "id": "1",
          "action": "appearing at war",
          "tags": "war"
        },
        {
          "id": "38",
          "action": "Enviable hour",
          "tags": "anything"
        }
      ],
      [
        {
          "id": "60",
          "action": "invisibility and children",
          "tags": "invisibility children"
        },
        {
          "id": "95",
          "action": "resting and cheering",
          "tags": "rest"
        },
        {
          "id": "35",
          "action": "Do nothing",
          "tags": "rest"
        },
        {
          "id": "87",
          "action": "practicing alchemy",
          "tags": "alchemy"
        },
        {
          "id": "99",
          "action": "revealing secret things",
          "tags": "secrets"
        },
        {
          "id": "28",
          "action": "contemning (treat with disdain)",
          "tags": "harm"
        },
        {
          "id": "37",
          "action": "dominating a woman",
          "tags": "power"
        },
        {
          "id": "120",
          "action": "the decision of a tribunal",
          "tags": "justice"
        },
        {
          "id": "27",
          "action": "cohabiting with a woman",
          "tags": "sex"
        },
        {
          "id": "6",
          "action": "Be careful",
          "tags": "careful"
        },
        {
          "id": "13",
          "action": "Begin whatever journey you want",
          "tags": "beginning journey"
        },
        {
          "id": "35",
          "action": "Do nothing",
          "tags": "rest"
        },
        {
          "id": "10",
          "action": "Begin praising someone",
          "tags": "beginning"
        },
        {
          "id": "11",
          "action": "Begin praying",
          "tags": "beginning prayer"
        },
        {
          "id": "69",
          "action": "making a talisman concerning dreams",
          "tags": "dreams"
        },
        {
          "id": "18",
          "action": "casting binding spells",
          "tags": "binding"
        },
        {
          "id": "123",
          "action": "Useless hour",
          "tags": "avoid"
        },
        {
          "id": "49",
          "action": "harming someone",
          "tags": "harm"
        },
        {
          "id": "41",
          "action": "Useful everything and retribution",
          "tags": "anything"
        },
        {
          "id": "40",
          "action": "everything",
          "tags": "anything"
        },
        {
          "id": "106",
          "action": "sending dreams",
          "tags": "dreams"
        },
        {
          "id": "119",
          "action": "teaching",
          "tags": "education"
        },
        {
          "id": "56",
          "action": "Hour for success",
          "tags": "anything"
        },
        {
          "id": "123",
          "action": "Useless hour",
          "tags": "avoid"
        }
      ],
      [
        {
          "id": "53",
          "action": "healing men and animals",
          "tags": "healing"
        },
        {
          "id": "123",
          "action": "Useless hour",
          "tags": "avoid"
        },
        {
          "id": "2",
          "action": "appearing before a king",
          "tags": "authority"
        },
        {
          "id": "3",
          "action": "appearing before a lady",
          "tags": "authority"
        },
        {
          "id": "121",
          "action": "the learning of rhetoric",
          "tags": "education"
        },
        {
          "id": "93",
          "action": "reconciling with your enemy at noon",
          "tags": "good"
        },
        {
          "id": "6",
          "action": "Be careful",
          "tags": "careful"
        },
        {
          "id": "16",
          "action": "Blessed start",
          "tags": "beginning"
        },
        {
          "id": "20",
          "action": "Cause jealousy",
          "tags": "harm love"
        },
        {
          "id": "40",
          "action": "everything",
          "tags": "anything"
        },
        {
          "id": "127",
          "action": "women",
          "tags": "women"
        },
        {
          "id": "29",
          "action": "craftiness",
          "tags": "craft"
        },
        {
          "id": "116",
          "action": "success",
          "tags": "success"
        },
        {
          "id": "123",
          "action": "Useless hour",
          "tags": "avoid"
        },
        {
          "id": "39",
          "action": "every kind of healing",
          "tags": "healing"
        },
        {
          "id": "58",
          "action": "hunting",
          "tags": "hunting"
        },
        {
          "id": "51",
          "action": "healing a king",
          "tags": "healing authority"
        },
        {
          "id": "52",
          "action": "healing a lady",
          "tags": "healing authority"
        },
        {
          "id": "36",
          "action": "Do whatever you want",
          "tags": "anything"
        },
        {
          "id": "80",
          "action": "nocturnal affairs",
          "tags": "action night"
        },
        {
          "id": "123",
          "action": "Useless hour",
          "tags": "avoid"
        },
        {
          "id": "36",
          "action": "Do whatever you want",
          "tags": "anything"
        },
        {
          "id": "36",
          "action": "Do whatever you want",
          "tags": "anything"
        },
        {
          "id": "120",
          "action": "the decision of a tribunal",
          "tags": "justice"
        }
      ],
      [
        {
          "id": "24",
          "action": "causing love",
          "tags": "love"
        },
        {
          "id": "77",
          "action": "matchmaking",
          "tags": "matchmaking"
        },
        {
          "id": "104",
          "action": "selling",
          "tags": "business"
        },
        {
          "id": "81",
          "action": "Obstacles of love",
          "tags": "love harm"
        },
        {
          "id": "30",
          "action": "decrees and conversations",
          "tags": "communication"
        },
        {
          "id": "23",
          "action": "causing jealousy in love",
          "tags": "harm love"
        },
        {
          "id": "48",
          "action": "Good hour, beneficial for love",
          "tags": "anything love"
        },
        {
          "id": "63",
          "action": "love",
          "tags": "love"
        },
        {
          "id": "101",
          "action": "secret messages",
          "tags": "secrets"
        },
        {
          "id": "40",
          "action": "everything",
          "tags": "anything"
        },
        {
          "id": "123",
          "action": "Useless hour",
          "tags": "avoid"
        },
        {
          "id": "70",
          "action": "making agreements",
          "tags": "agreements"
        },
        {
          "id": "77",
          "action": "matchmaking",
          "tags": "matchmaking"
        },
        {
          "id": "14",
          "action": "binding couples with spells",
          "tags": "binding couple spells"
        },
        {
          "id": "15",
          "action": "binding someone with love spells",
          "tags": "binding love spells"
        },
        {
          "id": "105",
          "action": "To send dreams of love",
          "tags": "dreams love"
        },
        {
          "id": "48",
          "action": "Good hour, beneficial for love",
          "tags": "anything love"
        },
        {
          "id": "109",
          "action": "sending messages/dreams of hatred",
          "tags": "dreams communication harm"
        },
        {
          "id": "86",
          "action": "plans",
          "tags": "plans"
        },
        {
          "id": "35",
          "action": "Do nothing",
          "tags": "rest"
        },
        {
          "id": "47",
          "action": "Good",
          "tags": "anything"
        },
        {
          "id": "63",
          "action": "love",
          "tags": "love"
        },
        {
          "id": "65",
          "action": "Make a start",
          "tags": "beginning"
        },
        {
          "id": "97",
          "action": "restraining love",
          "tags": "harm love"
        }
      ],
      [
        {
          "id": "75",
          "action": "Making talismans to harm enemies.",
          "tags": "harm"
        },
        {
          "id": "21",
          "action": "causing a shipwreck",
          "tags": "harm"
        },
        {
          "id": "111",
          "action": "setting up enchantments",
          "tags": "magic"
        },
        {
          "id": "73",
          "action": "making lords fight each other",
          "tags": "harm war authority"
        },
        {
          "id": "68",
          "action": "making a couple hate each other",
          "tags": "harm"
        },
        {
          "id": "42",
          "action": "Useful finding treasure",
          "tags": "treasures"
        },
        {
          "id": "113",
          "action": "speaking with demons",
          "tags": "magic"
        },
        {
          "id": "84",
          "action": "performing basin divination",
          "tags": "divination"
        },
        {
          "id": "85",
          "action": "performing skull divination",
          "tags": "divination"
        },
        {
          "id": "25",
          "action": "causing peoples to plunge into the sea",
          "tags": "harm"
        },
        {
          "id": "72",
          "action": "making litigants mad at each other",
          "tags": "harm"
        },
        {
          "id": "22",
          "action": "causing fear and enmity",
          "tags": "harm"
        },
        {
          "id": "31",
          "action": "Beneficial discovering secret things",
          "tags": "secrets"
        },
        {
          "id": "102",
          "action": "seeing people long dead",
          "tags": "magic"
        },
        {
          "id": "103",
          "action": "seeing visions by water divination",
          "tags": "divination"
        },
        {
          "id": "119",
          "action": "teaching",
          "tags": "education"
        },
        {
          "id": "124",
          "action": "Very malign hour",
          "tags": "careful avoid"
        },
        {
          "id": "123",
          "action": "Useless hour",
          "tags": "avoid"
        },
        {
          "id": "43",
          "action": "gaining money in dice",
          "tags": "gambling"
        },
        {
          "id": "96",
          "action": "restraining every good thing",
          "tags": "harm"
        },
        {
          "id": "57",
          "action": "Hour without virtue",
          "tags": "avoid"
        },
        {
          "id": "26",
          "action": "causing visions",
          "tags": "visions"
        },
        {
          "id": "92",
          "action": "profit",
          "tags": "business"
        },
        {
          "id": "50",
          "action": "hassle and enmity",
          "tags": "avoid"
        }
      ]
    ]
  },
  property: function(m) {
    return m.planetary;
  },
  calculate: function(definitions, property) {
    return [definitions.actions[property.day.no][property.hour.no]];
  }
};

var module_hygromanteia_lunarsign = {

  definitions: {
    name: "Lunar Sign",
    group: {
      id: "hygromanteia",
      text: "Hygromanteia",
      info: "true"
    },
    actions: [
      [
        "void"
      ],
      [
        {
          "id": "2",
          "action": "appearing before a king",
          "tags": "authority"
        },
        {
          "id": "58",
          "action": "hunting",
          "tags": "hunting"
        },
        {
          "id": "132",
          "action": "beginning a work",
          "tags": "beginning business"
        },
        {
          "id": "133",
          "action": "blood tests",
          "tags": "healing"
        },
        {
          "id": "173",
          "action": "riding",
          "tags": "journey"
        },
        {
          "id": "180",
          "action": "tailoring",
          "tags": "craft"
        },
        {
          "id": "185",
          "action": "transplanting",
          "tags": "planting"
        },
        {
          "id": "186",
          "action": "travelling",
          "tags": "travelling journey"
        },
        {
          "id": "188",
          "action": "wearing new clothes",
          "tags": "clothes"
        }
      ],
      [
        {
          "id": "130",
          "action": "appearing in front of lords",
          "tags": "authority"
        },
        {
          "id": "138",
          "action": "buying precious stones",
          "tags": "business"
        },
        {
          "id": "141",
          "action": "communicating",
          "tags": "communication"
        },
        {
          "id": "150",
          "action": "laying foundations",
          "tags": "beginning"
        },
        {
          "id": "154",
          "action": "making perfumes",
          "tags": "craft"
        },
        {
          "id": "155",
          "action": "marrying",
          "tags": "love"
        },
        {
          "id": "176",
          "action": "selling slaves",
          "tags": "business"
        },
        {
          "id": "184",
          "action": "trading",
          "tags": "business"
        }
      ],
      [
        {
          "id": "145",
          "action": "educating children",
          "tags": "education"
        },
        {
          "id": "167",
          "action": "negotiating",
          "tags": "communication"
        },
        {
          "id": "169",
          "action": "planting vineyards",
          "tags": "planting"
        },
        {
          "id": "172",
          "action": "reconciling",
          "tags": "good"
        },
        {
          "id": "191",
          "action": "writing letters, nominations and orders",
          "tags": "communication"
        }
      ],
      [
        {
          "id": "104",
          "action": "selling",
          "tags": "business"
        },
        {
          "id": "135",
          "action": "buying",
          "tags": "business"
        },
        {
          "id": "140",
          "action": "changing residence",
          "tags": "journey travelling"
        },
        {
          "id": "146",
          "action": "emigrating",
          "tags": "journey travelling"
        },
        {
          "id": "180",
          "action": "tailoring",
          "tags": "craft"
        },
        {
          "id": "183",
          "action": "taking purgatives",
          "tags": "healing"
        },
        {
          "id": "186",
          "action": "travelling",
          "tags": "travelling journey"
        },
        {
          "id": "188",
          "action": "wearing new clothes",
          "tags": "clothes"
        }
      ],
      [
        {
          "id": "2",
          "action": "appearing before a king",
          "tags": "authority"
        },
        {
          "id": "133",
          "action": "blood tests",
          "tags": "healing"
        },
        {
          "id": "144",
          "action": "doing something that has to do with fires",
          "tags": "fire"
        },
        {
          "id": "168",
          "action": "planting",
          "tags": "planting"
        },
        {
          "id": "178",
          "action": "starting a big business",
          "tags": "beginning business"
        },
        {
          "id": "182",
          "action": "taking high office",
          "tags": "good"
        }
      ],
      [
        {
          "id": "143",
          "action": "cultivating",
          "tags": "good"
        },
        {
          "id": "171",
          "action": "reading letters",
          "tags": "communication"
        },
        {
          "id": "184",
          "action": "trading",
          "tags": "business"
        },
        {
          "id": "191",
          "action": "writing letters, nominations and orders",
          "tags": "communication"
        }
      ],
      [
        {
          "id": "138",
          "action": "buying precious stones",
          "tags": "business"
        },
        {
          "id": "139",
          "action": "buying sheep",
          "tags": "business"
        },
        {
          "id": "155",
          "action": "marrying",
          "tags": "love"
        },
        {
          "id": "157",
          "action": "meeting eunuchs",
          "tags": "communication"
        },
        {
          "id": "162",
          "action": "meeting musicians",
          "tags": "communication music"
        },
        {
          "id": "165",
          "action": "meeting prostitutes",
          "tags": "communication sex"
        },
        {
          "id": "174",
          "action": "seeing one's relatives",
          "tags": "family"
        }
      ],
      [
        {
          "id": "131",
          "action": "beginning a trial",
          "tags": "beginning justice"
        },
        {
          "id": "148",
          "action": "fishing",
          "tags": "fishing"
        },
        {
          "id": "152",
          "action": "leading an army",
          "tags": "war"
        },
        {
          "id": "153",
          "action": "making gargles",
          "tags": "healing"
        },
        {
          "id": "166",
          "action": "navigating",
          "tags": "journey"
        },
        {
          "id": "181",
          "action": "taking emetics",
          "tags": "healing"
        },
        {
          "id": "183",
          "action": "taking purgatives",
          "tags": "healing"
        },
        {
          "id": "187",
          "action": "treating a patient",
          "tags": "healing"
        }
      ],
      [
        {
          "id": "142",
          "action": "consecrating temples",
          "tags": "magic prayer"
        },
        {
          "id": "147",
          "action": "engaging",
          "tags": "love"
        },
        {
          "id": "151",
          "action": "laying foundations of churches",
          "tags": "beginning prayer"
        },
        {
          "id": "155",
          "action": "marrying",
          "tags": "love"
        },
        {
          "id": "159",
          "action": "meeting matchmakers",
          "tags": "matchmaking"
        },
        {
          "id": "179",
          "action": "starting ecclesiastical operations",
          "tags": "beginning magic prayer"
        },
        {
          "id": "186",
          "action": "travelling",
          "tags": "travelling journey"
        }
      ],
      [
        {
          "id": "136",
          "action": "buying camels donkeys and goats",
          "tags": "business"
        },
        {
          "id": "156",
          "action": "meeting civilians",
          "tags": "communication"
        },
        {
          "id": "161",
          "action": "meeting monks",
          "tags": "communication"
        },
        {
          "id": "164",
          "action": "meeting philosophers",
          "tags": "communication"
        },
        {
          "id": "177",
          "action": "sending messengers",
          "tags": "communication"
        },
        {
          "id": "180",
          "action": "tailoring",
          "tags": "craft"
        },
        {
          "id": "188",
          "action": "wearing new clothes",
          "tags": "clothes"
        }
      ],
      [
        {
          "id": "134",
          "action": "building high edifices",
          "tags": "good"
        },
        {
          "id": "137",
          "action": "buying lands and farms and guarding them",
          "tags": "business"
        },
        {
          "id": "150",
          "action": "laying foundations",
          "tags": "beginning"
        },
        {
          "id": "170",
          "action": "playing cymbals",
          "tags": "music"
        },
        {
          "id": "189",
          "action": "working magic",
          "tags": "magic"
        }
      ],
      [
        {
          "id": "148",
          "action": "fishing",
          "tags": "fishing"
        },
        {
          "id": "158",
          "action": "meeting high church officials",
          "tags": "communication"
        },
        {
          "id": "160",
          "action": "meeting mediators",
          "tags": "communication"
        },
        {
          "id": "163",
          "action": "meeting Patriarchs",
          "tags": "communication"
        },
        {
          "id": "166",
          "action": "navigating",
          "tags": "journey"
        },
        {
          "id": "180",
          "action": "tailoring",
          "tags": "craft"
        },
        {
          "id": "183",
          "action": "taking purgatives",
          "tags": "healing"
        },
        {
          "id": "188",
          "action": "wearing new clothes",
          "tags": "clothes"
        },
        {
          "id": "190",
          "action": "writing contracts",
          "tags": "communication"
        }
      ]
    ]
  },
  property: function(m) {
    return m.ephemeris.moon.deg;
  },
  calculate: function(definitions, property, sidereal = 1) {
    var array = [];
    var lunarSign = SL.Astro.Logy.getZodiac(property);
    return definitions.actions[lunarSign.sign];
  }
};

var module_hygromanteia_lunarday = {

  definitions: {
    name: "Lunar Day",
    group: {
      id: "hygromanteia",
      text: "Hygromanteia",
      info: "true"
    },
    actions: [
      [0],
      [
        {
          "id": "199",
          "action": "winning in gambling",
          "tags": "gambling"
        },
        {
          "id": "200",
          "action": "winning in chess",
          "tags": "gambling"
        },
        {
          "id": "201",
          "action": "winning in games",
          "tags": "gambling"
        },
        {
          "id": "202",
          "action": "luck",
          "tags": "success"
        }
      ],
      [
        {
          "id": "200",
          "action": "winning in chess",
          "tags": "gambling"
        },
        {
          "id": "203",
          "action": "for gain",
          "tags": "success"
        }
      ],
      [
        {
          "id": "204",
          "action": "make a talisman for war",
          "tags": "war"
        }
      ],
      [
        {
          "id": "205",
          "action": "causing love in a couple",
          "tags": "love couple"
        }
      ],
      [
        {
          "id": "206",
          "action": "causing the love of kings and lords",
          "tags": "love authority"
        }
      ],
      [
        {
          "id": "207",
          "action": "beneficial judgements.",
          "tags": "justice"
        }
      ],
      [
        {
          "id": "208",
          "action": "divining with a vessel",
          "tags": "divination"
        }
      ],
      [
        {
          "id": "209",
          "action": "finding treasures in the earth",
          "tags": "treasures"
        }
      ],
      [
        {
          "id": "210",
          "action": "happiness within the family",
          "tags": "family"
        },
        {
          "id": "211",
          "action": "taking care of the house",
          "tags": "housework"
        }
      ],
      [
        {
          "id": "212",
          "action": "curing the epileptic",
          "tags": "healing"
        }
      ],
      [
        {
          "id": "213",
          "action": "making children obey their father",
          "tags": "family children"
        }
      ],
      [
        {
          "id": "214",
          "action": "making fathers love their children",
          "tags": "family children"
        }
      ],
      [
        {
          "id": "215",
          "action": "increase of one's property",
          "tags": "success business"
        }
      ],
      [
        {
          "id": "216",
          "action": "seeing the spirits and for subjugating them",
          "tags": "magic"
        }
      ],
      [
        {
          "id": "217",
          "action": "speaking with demons",
          "tags": "magic"
        }
      ],
      [
        {
          "id": "218",
          "action": "making a man to love his wife",
          "tags": "love"
        }
      ],
      [
        {
          "id": "219",
          "action": "restraining a boat from sailing",
          "tags": "harm journey"
        }
      ],
      [
        {
          "id": "220",
          "action": "For a woman to confess whatever she did",
          "tags": "women"
        }
      ],
      [
        {
          "id": "221",
          "action": "opening locks",
          "tags": "beginning opening"
        }
      ],
      [
        {
          "id": "222",
          "action": "destroying one's enemies and opponents",
          "tags": "war"
        }
      ],
      [
        {
          "id": "223",
          "action": "binding the evil tonue",
          "tags": "magic"
        }
      ],
      [
        {
          "id": "224",
          "action": "unbinding sorceries",
          "tags": "magic"
        }
      ],
      [
        {
          "id": "148",
          "action": "fishing",
          "tags": "fishing"
        }
      ],
      [
        {
          "id": "225",
          "action": "not being afraid of punishment",
          "tags": "justice"
        }
      ],
      [
        {
          "id": "226",
          "action": "binding or unbinding a couple",
          "tags": "couple love harm"
        }
      ],
      [
        {
          "id": "227",
          "action": "compelling enemies",
          "tags": "communication"
        },
        {
          "id": "228",
          "action": "compelling masters",
          "tags": "communication"
        }
      ],
      [
        {
          "id": "63",
          "action": "love",
          "tags": "love"
        },
        {
          "id": "229",
          "action": "bindings of love",
          "tags": "love"
        }
      ],
      [
        {
          "id": "63",
          "action": "love",
          "tags": "love"
        }
      ],
      [
        {
          "id": "230",
          "action": "destruction",
          "tags": "war"
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
