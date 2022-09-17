/**
* @preserve Copyright (c) 2018-2022 NN Solex, www.sublunar.space
* License MIT: http://www.opensource.org/licenses/MIT
*/

//Defines Calendar Objects and Methods
var module_planetary_hour_ruler = {

  definitions: {
    core: true,
    name: "Hour",
    group: {
      id : "planetary",
      text: "Planetary Time"
    },
    actions: [
      [0],
      [
        {
          "id": "4",
          "action": "Sun / Sol / Helios",
          "tags": "sun sol helios success promotion fame wealth prosperity music athleticism ego self power pride authority leadership creativity spontaneity health vitality"
        }
      ],
      [
        {
          "id": "7",
          "action": "Moon / Luna / Selene",
          "tags": "moon luna selene illusion glamour sleep peace beauty prophesy dreams magic emotions travel fertility insight wisdom tenderness unconscious habit rhythm memory mood nurture home melancholy"
        }
      ],
      [
        {
          "id": "3",
          "action": "Mars / Ares",
          "tags": "mars ares courage victory success strength conviction rebellion defense protection war sex confidence assertiveness aggression energy strength ambition impulsiveness malefic"
        }
      ],
      [
        {
          "id": "6",
          "action": "Mercury / Hermes",
          "tags": "mercury hermes communication art transportation change luck gambling fortune chance creativity travel prudent crafty rationality reasoning adaptability variability"
        }
      ],
      [
        {
          "id": "2",
          "action": "Jupiter / Zeus",
          "tags": "jupiter zeus abundance protection prosperity strength wealth healing charming hunting growth expansion prosperity fortune travel business education religion law freedom exploration gambling"
        }
      ],
      [
        {
          "id": "5",
          "action": "Venus / Aphrodite",
          "tags": "venus aphrodite love birth fertility romance gentleness pregnancy friendship passion sex amorousness harmony resilience beauty refinement solidarity affection equality comfort partnership art fashion"
        }
      ],
      [
        {
          "id": "1",
          "action": "Saturn / Kronos",
          "tags": "saturn kronos banishing protection wisdom spirituality cleansing magic death cursing industrious melancholy tranquility malefic focus precision nobility ethics civility goals career achievements dedication authority hierarchy stability virtues productiveness lessons destiny tradition structure balance karma justice limitations restrictions boundaries anxiety tests practicality reality time duty commitment responsibility endurance hardship planning foresight"
        }
      ]
    ]
  },
  property: function(m) {
    return m.planetary;
  },
  calculate: function(definitions, property) {
    return definitions.actions[SL.Astro.Logy.planet.order[((property.hour.no+1+(property.day.no*24) - 1) % 7 ) + 1]];
  }
};

var module_planetary_day_ruler = {

  definitions: {
    core: true,
    name: "Day",
    group: {
      id : "planetary",
      text: "Planetary Time"
    },
    actions: module_planetary_hour_ruler.definitions.actions
  },
  property: function(m) {
    return m.planetary.day.no;
  },
  calculate: function(definitions, property) {
    return definitions.actions[property+1];
  }
};
