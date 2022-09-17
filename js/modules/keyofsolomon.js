/**
* @preserve Copyright (c) 2018-2022 NN Solex, www.sublunar.space
* License MIT: http://www.opensource.org/licenses/MIT
*/

//Defines Calendar Objects and Methods
var module_kos_pday = {

  definitions: {
    name: "Planetary Day",
    group: {
      id: "kos",
      text: "Key of Solomon",
      info: "true"
    },
    actions: [
    [
      {
        "id": "92",
        "action": "profit",
        "tags": "business"
      },
      {
        "id": "215",
        "action": "increase of one's property",
        "tags": "success business"
      },
      {
        "id": "116",
        "action": "success",
        "tags": "success"
      },
      {
        "id": "202",
        "action": "luck",
        "tags": "success"
      },
      {
        "id": "203",
        "action": "for gain",
        "tags": "success"
      },
      {
        "id": "246",
        "action": "gain favor of kings and authorities",
        "tags": "authority"
      },
      {
        "id": "269",
        "action": "contracting friendships",
        "tags": "friendship"
      },
      {
        "id": "278",
        "action": "preparing any operations whatsoever of love, of kindness, and of invisibility",
        "tags": "love friendship magic"
      },
      {
        "id": "280",
        "action": "good for all extraordinary, uncommon, and unknown operations",
        "tags": "anything magic"
      }
    ],
    [
      {
        "id": "274",
        "action": "embassies; voyages; envoys; messages; navigation; reconciliation; love; and the acquisition of merchandise by water",
        "tags": "love authority friendship business water"
      },
      {
        "id": "275",
        "action": "communicating and speaking with spirits",
        "tags": "magic"
      },
      {
        "id": "281",
        "action": "recover stolen property",
        "tags": "treasure"
      },
      {
        "id": "265",
        "action": "have familiar spirits visit in sleep",
        "tags": "magic dreams"
      },
      {
        "id": "282",
        "action": "preparing anything relaed to water",
        "tags": "water"
      },
      {
        "id": "300",
        "action": "works of necromancy",
        "tags": "dead magic"
      }
    ],
    [
      {
        "id": "125",
        "action": "war and victory",
        "tags": "war"
      },
      {
        "id": "126",
        "action": "winning over an opponent",
        "tags": "war"
      },
      {
        "id": "222",
        "action": "destroying one's enemies and opponents",
        "tags": "war"
      },
      {
        "id": "230",
        "action": "destruction",
        "tags": "war"
      },
      {
        "id": "257",
        "action": "scatter your enemies",
        "tags": "war"
      },
      {
        "id": "267",
        "action": "to bring destruction and to give death, and to sow hatred and discord.",
        "tags": "harm war"
      },
      {
        "id": "275",
        "action": "communicating and speaking with spirits",
        "tags": "magic"
      },
      {
        "id": "277",
        "action": "summoning souls from Hades, especially of those slain in battle",
        "tags": "magic war"
      }
    ],
    [
      {
        "id": "272",
        "action": "eloquence and intelligence; promptitude in business; science and divination; wonders; apparitions; and answers regarding the future",
        "tags": "business magic divination science"
      },
      {
        "id": "273",
        "action": "thefts; writings; deceit; and merchandise",
        "tags": "harm business"
      },
      {
        "id": "276",
        "action": "recovering thefts by the means of spirits",
        "tags": "magic treasure"
      },
      {
        "id": "279",
        "action": "undertaking experiments relating to games, raillery, jests, sports, and the like",
        "tags": "luck gambling games"
      }
    ],
    [
      {
        "id": "268",
        "action": "obtain honours, acquire riches",
        "tags": "treasure business"
      },
      {
        "id": "269",
        "action": "contracting friendships",
        "tags": "friendship"
      },
      {
        "id": "270",
        "action": "preserving health",
        "tags": "healing"
      },
      {
        "id": "271",
        "action": "arriving at all you can desire",
        "tags": "anything"
      },
      {
        "id": "278",
        "action": "preparing any operations whatsoever of love, of kindness, and of invisibility",
        "tags": "love friendship magic"
      },
      {
        "id": "280",
        "action": "good for all extraordinary, uncommon, and unknown operations",
        "tags": "anything magic"
      }
    ],
    [
      {
        "id": "269",
        "action": "contracting friendships",
        "tags": "friendship"
      },
      {
        "id": "63",
        "action": "love",
        "tags": "love"
      },
      {
        "id": "186",
        "action": "travelling",
        "tags": "travelling journey"
      },
      {
        "id": "278",
        "action": "preparing any operations whatsoever of love, of kindness, and of invisibility",
        "tags": "love friendship magic"
      },
      {
        "id": "280",
        "action": "good for all extraordinary, uncommon, and unknown operations",
        "tags": "anything magic"
      },
      {
        "id": "283",
        "action": "preparing lots, poisons, powders for madness and the like",
        "tags": "protection animals"
      }
    ],
    [
      {
        "id": "263",
        "action": "summon the souls from Hades who died a natural death",
        "tags": "magic"
      },
      {
        "id": "264",
        "action": "bring good or bad fortune to buildings",
        "tags": "protection harm building"
      },
      {
        "id": "265",
        "action": "have familiar spirits visit in sleep",
        "tags": "magic dreams"
      },
      {
        "id": "266",
        "action": "cause good or ill in business, possessions, goods, seeds, fruits, and similar things, in order to acquire learning",
        "tags": "harm business food agriculture education"
      },
      {
        "id": "267",
        "action": "to bring destruction and to give death, and to sow hatred and discord.",
        "tags": "harm war"
      },
      {
        "id": "275",
        "action": "communicating and speaking with spirits",
        "tags": "magic"
      }
    ]
  ]
  },
  property: function(m) {
    return m.planetary.day.no;
  },
  calculate: function(definitions, property) {
    return definitions.actions[property];
  }
};

//Defines Calendar Objects and Methods
var module_kos_phour = {

  definitions: {
    name: "Planetary Hour",
    group: {
      id: "kos",
      text: "Key of Solomon",
      info: "true"
    },
    actions: module_kos_pday.definitions.actions
  },
  property: function(m) {
    return m.planetary;
  },
  calculate: function(definitions, property) {
    var hourruler = SL.Astro.Logy.planet.order[((property.hour.no+1+(property.day.no*24) - 1) % 7 ) + 1];
    return definitions.actions[hourruler-1];
  }
};

//Defines Calendar Objects and Methods
var module_kos_astro = {

  definitions: {
    name: "Astrological Timing",
    group: {
      id: "kos",
      text: "Key of Solomon",
      info: "true"
    },
    actions: [
    [
      {
        "id" : "301",
        "action" : "Invocation of Spirits, the Works of Necromancy, and the recovery of stolen property",
        "tags" : "magic dead treasure"
      }
    ],
    [
      {
        "id" : "302",
        "action" : "love, grace, and invisibility",
        "tags" : "love good magic"
      }
    ],
    [
      {
        "id" : "303",
        "action" : "hatred, discord, and destruction",
        "tags" : "harm war"
      }
    ],
    [
      {
        "id" : "304",
        "action" : "experiments of a peculiar nature, which cannot be classed under any certain head",
        "tags" : "magic anything"
      }
    ],
    [
      {
        "id" : "305",
        "action" : "commence nothing while the Moon is in conjunction with the Sun",
        "tags" : "nothing"
      }
    ],
    [
      {
        "id" : "306",
        "action" : "especially auspicious to converse with spirits",
        "tags" : "magic"
      }
    ]
  ]
  },
  property: function(m) {
    return m;
  },
  calculate: function(definitions, property) {
    var array = [];
    var hourruler = SL.Astro.Logy.planet.order[((property.planetary.hour.no+1+(property.planetary.day.no*24) - 1) % 7 ) + 1];
    var chaldean = ["void", "moon", "mercury", "venus", "sun", "mars", "jupiter", "saturn"];
    var sunsign = SL.Astro.Logy.getZodiac(property.ephemeris.sun.deg).sign;
    var moonsign = SL.Astro.Logy.getZodiac(property.ephemeris.moon.deg).sign;
    // Mars + Saturn conjunct Moon
    var combo = [[1,5],[1,7],[1,4]];
    var orb = 13.0;
    combo.forEach(function(c, idx) {
      var diff = eval("property.ephemeris."+chaldean[c[0]]+".deg") - eval("property.ephemeris."+chaldean[c[1]]+".deg");
      var angle = Math.min( Math.abs(diff), 360-Math.abs(diff) );
      if ( ( angle <= orb || Math.abs(angle -  90) <= orb || Math.abs(angle - 180) <= orb ) ) {
        if ( chaldean[c[1]] == "mars") {
          module_kos_pday.definitions.actions[2].forEach( function(c) {
            array.push(c);
          });
        }
        if ( chaldean[c[1]] == "saturn") {
          module_kos_pday.definitions.actions[6].forEach( function(c) {
            array.push(c);
          });
        }
      }

      // Moon combust
      var orb = 15.0;
      if ( angle <= orb && chaldean[c[1]] == "sun" ) {
        array.push(definitions.actions[4][0]);
      }

    });

    // Moon in Earth sign
    if ( moonsign == 2 || moonsign == 6 || moonsign == 10 )
      array.push(definitions.actions[0][0]);

    // Moon in fiery sign
    if ( moonsign == 1 || moonsign == 5 || moonsign == 9 )
      array.push(definitions.actions[1][0]);

    // Moon in watery sign
    if ( moonsign == 4 || moonsign == 8 || moonsign == 12 )
      array.push(definitions.actions[2][0]);

    // Moon in airy sign
    if ( moonsign == 3 || moonsign == 7 || moonsign == 11 )
      array.push(definitions.actions[3][0]);

    // Moon and Sun in airy sign
    if ( ( moonsign == 3 || moonsign == 7 || moonsign == 11 ) && ( sunsign == 3 || sunsign == 7 || sunsign == 11) && property.planetary.day.no == 3 && hourruler == 4 ) {
      array.push(definitions.actions[5][0]);
    }
    return array;
  }
};
