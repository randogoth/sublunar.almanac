/**
* @preserve Copyright (c) 2018-2022 NN Solex, www.sublunar.space
* License MIT: http://www.opensource.org/licenses/MIT
*/

//Defines Calendar Objects and Methods
var module_decans_solar = {

  definitions: {
    name: "Solar Decade",
    description: "The Decade is the Sun's position in a third of a Zodiac sign, also known as Decan, derived from Egyptian astrology.",
    group: {
      id: "decans",
      text: "Decans",
      info: "true"
    },
    actions: [
       [0],
       [
          {
             "id":28,
             "action":"Sun in Aries 1: Chontare",
             "tags":"chontare senator aries1 aries"
          }
       ],
       [
          {
             "id":29,
             "action":"Sun in Aries 2: Chontachre",
             "tags":"chontachre senacher aries2 aries"
          }
       ],
       [
          {
             "id":30,
             "action":"Sun in Aries 3: Siket",
             "tags":"siket sentacher aries3 aries"
          }
       ],
       [
          {
             "id":31,
             "action":"Sun in Taurus 1: Chôou",
             "tags":"choou suo taurus1 taurus"
          }
       ],
       [
          {
             "id":32,
             "action":"Sun in Taurus 2: Erô",
             "tags":"ero aryo taurus2 taurus"
          }
       ],
       [
          {
             "id":33,
             "action":"Sun in Taurus 3: Hrombromare",
             "tags":"hrombromare romanae taurus3 taurus"
          }
       ],
       [
          {
             "id":34,
             "action":"Sun in Gemini 1: Thosolk",
             "tags":"thosolk thesogar gemini1 gemini"
          }
       ],
       [
          {
             "id":35,
             "action":"Sun in Gemini 2: Ouare",
             "tags":"ouare ver gemini2 gemini"
          }
       ],
       [
          {
             "id":36,
             "action":"Sun in Gemini 3: Phouori",
             "tags":"phouori tepis gemini3 gemini"
          }
       ],
       [
          {
             "id":1,
             "action":"Sun in Cancer 1: Sôthis",
             "tags":"sothis sothis cancer1 cancer"
          }
       ],
       [
          {
             "id":2,
             "action":"Sun in Cancer 2: Sit",
             "tags":"sit sith cancer2 cancer"
          }
       ],
       [
          {
             "id":3,
             "action":"Sun in Cancer 3: Chnoumis",
             "tags":"chnoumis thiumis cancer3 cancer"
          }
       ],
       [
          {
             "id":4,
             "action":"Sun in Leo 1: Charchnoumis",
             "tags":"charchnoumis craumonis leo1 leo"
          }
       ],
       [
          {
             "id":5,
             "action":"Sun in Leo 2: Êpê",
             "tags":"epe sic leo2 leo"
          }
       ],
       [
          {
             "id":6,
             "action":"Sun in Leo 3: Phoupê",
             "tags":"phoupe futile leo3 leo"
          }
       ],
       [
          {
             "id":7,
             "action":"Sun in Virgo 1: Tôm",
             "tags":"tom thumis virgo1 virgo"
          }
       ],
       [
          {
             "id":8,
             "action":"Sun in Virgo 2: Ouestebkôt",
             "tags":"ouestebkot tophicus virgo2 virgo"
          }
       ],
       [
          {
             "id":9,
             "action":"Sun in Virgo 3: Aphoso",
             "tags":"aphoso afut virgo3 virgo"
          }
       ],
       [
          {
             "id":10,
             "action":"Sun in Libra 1: Souchôe",
             "tags":"souchoe seuichut libra1 libra"
          }
       ],
       [
          {
             "id":11,
             "action":"Sun in Libra 2: Ptêchout",
             "tags":"ptechout sepisent libra2 libra"
          }
       ],
       [
          {
             "id":12,
             "action":"Sun in Libra 3: Chontare",
             "tags":"chontare senta libra3 libra"
          }
       ],
       [
          {
             "id":13,
             "action":"Sun in Scorpio 1: Stôchnêne",
             "tags":"stochnene sentacer scorpio1 scorpio"
          }
       ],
       [
          {
             "id":14,
             "action":"Sun in Scorpio 2: Sesme",
             "tags":"sesme tepsisen scorpio2 scorpio"
          }
       ],
       [
          {
             "id":15,
             "action":"Sun in Scorpio 3: Sisieme",
             "tags":"sisieme sentineu scorpio3 scorpio"
          }
       ],
       [
          {
             "id":16,
             "action":"Sun in Sagittarius 1: Hrêouô",
             "tags":"hreouo eregbuo sagittarius1 sagittarius"
          }
       ],
       [
          {
             "id":17,
             "action":"Sun in Sagittarius 2: Sesme",
             "tags":"sesme sagon sagittarius2 sagittarius"
          }
       ],
       [
          {
             "id":18,
             "action":"Sun in Sagittarius 3: Komme",
             "tags":"komme chenene sagittarius3 sagittarius"
          }
       ],
       [
          {
             "id":19,
             "action":"Sun in Capricorn 1: Smat",
             "tags":"smat themeso capricorn1 capricorn"
          }
       ],
       [
          {
             "id":20,
             "action":"Sun in Capricorn 2: Srô",
             "tags":"sro epiemu capricorn2 capricorn"
          }
       ],
       [
          {
             "id":21,
             "action":"Sun in Capricorn 3: Isrô",
             "tags":"isro omot capricorn3 capricorn"
          }
       ],
       [
          {
             "id":22,
             "action":"Sun in Aquarius 1: Ptiau",
             "tags":"ptiau oro aquarius1 aquarius"
          }
       ],
       [
          {
             "id":23,
             "action":"Sun in Aquarius 2: Aue",
             "tags":"aue cratero aquarius2 aquarius"
          }
       ],
       [
          {
             "id":24,
             "action":"Sun in Aquarius 3: Ptêbuou",
             "tags":"ptebuou tepis aquarius3 aquarius"
          }
       ],
       [
          {
             "id":25,
             "action":"Sun in Pisces 1: Biou",
             "tags":"biou acha pisces1 pisces"
          }
       ],
       [
          {
             "id":26,
             "action":"Sun in Pisces 2: Chontare",
             "tags":"chontare tepibui pisces2 pisces"
          }
       ],
       [
          {
             "id":27,
             "action":"Sun in Pisces 3: Ptibiou",
             "tags":"ptibiou uiu pisces3 pisces"
          }
       ]
    ]
  },
  property: function(m) {
    return SL.Astro.Logy.getZodiac(m.ephemeris.sun.deg).decan;
  },
  calculate: function(definitions, property) {
    return definitions.actions[property];
  }
};

//Defines Calendar Objects and Methods
var module_decans_rising = {

  definitions: {
    name: "Rising Decan",
    description: "The Decan (third of a Zodiac sign, derived from Egyptian astrology) that is rising.",
    group: {
      id: "decans",
      text: "Decans",
      info: "true"
    },
    actions: [
       [0],
       [
          {
             "id":28,
             "action":"Rising Aries 1: Chontare",
             "tags":"chontare senator aries1 aries"
          }
       ],
       [
          {
             "id":29,
             "action":"Rising Aries 2: Chontachre",
             "tags":"chontachre senacher aries2 aries"
          }
       ],
       [
          {
             "id":30,
             "action":"Rising Aries 3: Siket",
             "tags":"siket sentacher aries3 aries"
          }
       ],
       [
          {
             "id":31,
             "action":"Rising Taurus 1: Chôou",
             "tags":"choou suo taurus1 taurus"
          }
       ],
       [
          {
             "id":32,
             "action":"Rising Taurus 2: Erô",
             "tags":"ero aryo taurus2 taurus"
          }
       ],
       [
          {
             "id":33,
             "action":"Rising Taurus 3: Hrombromare",
             "tags":"hrombromare romanae taurus3 taurus"
          }
       ],
       [
          {
             "id":34,
             "action":"Rising Gemini 1: Thosolk",
             "tags":"thosolk thesogar gemini1 gemini"
          }
       ],
       [
          {
             "id":35,
             "action":"Rising Gemini 2: Ouare",
             "tags":"ouare ver gemini2 gemini"
          }
       ],
       [
          {
             "id":36,
             "action":"Rising Gemini 3: Phouori",
             "tags":"phouori tepis gemini3 gemini"
          }
       ],
       [
          {
             "id":1,
             "action":"Rising Cancer 1: Sôthis",
             "tags":"sothis sothis cancer1 cancer"
          }
       ],
       [
          {
             "id":2,
             "action":"Rising Cancer 2: Sit",
             "tags":"sit sith cancer2 cancer"
          }
       ],
       [
          {
             "id":3,
             "action":"Rising Cancer 3: Chnoumis",
             "tags":"chnoumis thiumis cancer3 cancer"
          }
       ],
       [
          {
             "id":4,
             "action":"Rising Leo 1: Charchnoumis",
             "tags":"charchnoumis craumonis leo1 leo"
          }
       ],
       [
          {
             "id":5,
             "action":"Rising Leo 2: Êpê",
             "tags":"epe sic leo2 leo"
          }
       ],
       [
          {
             "id":6,
             "action":"Rising Leo 3: Phoupê",
             "tags":"phoupe futile leo3 leo"
          }
       ],
       [
          {
             "id":7,
             "action":"Rising Virgo 1: Tôm",
             "tags":"tom thumis virgo1 virgo"
          }
       ],
       [
          {
             "id":8,
             "action":"Rising Virgo 2: Ouestebkôt",
             "tags":"ouestebkot tophicus virgo2 virgo"
          }
       ],
       [
          {
             "id":9,
             "action":"Rising Virgo 3: Aphoso",
             "tags":"aphoso afut virgo3 virgo"
          }
       ],
       [
          {
             "id":10,
             "action":"Rising Libra 1: Souchôe",
             "tags":"souchoe seuichut libra1 libra"
          }
       ],
       [
          {
             "id":11,
             "action":"Rising Libra 2: Ptêchout",
             "tags":"ptechout sepisent libra2 libra"
          }
       ],
       [
          {
             "id":12,
             "action":"Rising Libra 3: Chontare",
             "tags":"chontare senta libra3 libra"
          }
       ],
       [
          {
             "id":13,
             "action":"Rising Scorpio 1: Stôchnêne",
             "tags":"stochnene sentacer scorpio1 scorpio"
          }
       ],
       [
          {
             "id":14,
             "action":"Rising Scorpio 2: Sesme",
             "tags":"sesme tepsisen scorpio2 scorpio"
          }
       ],
       [
          {
             "id":15,
             "action":"Rising Scorpio 3: Sisieme",
             "tags":"sisieme sentineu scorpio3 scorpio"
          }
       ],
       [
          {
             "id":16,
             "action":"Rising Sagittarius 1: Hrêouô",
             "tags":"hreouo eregbuo sagittarius1 sagittarius"
          }
       ],
       [
          {
             "id":17,
             "action":"Rising Sagittarius 2: Sesme",
             "tags":"sesme sagon sagittarius2 sagittarius"
          }
       ],
       [
          {
             "id":18,
             "action":"Rising Sagittarius 3: Komme",
             "tags":"komme chenene sagittarius3 sagittarius"
          }
       ],
       [
          {
             "id":19,
             "action":"Rising Capricorn 1: Smat",
             "tags":"smat themeso capricorn1 capricorn"
          }
       ],
       [
          {
             "id":20,
             "action":"Rising Capricorn 2: Srô",
             "tags":"sro epiemu capricorn2 capricorn"
          }
       ],
       [
          {
             "id":21,
             "action":"Rising Capricorn 3: Isrô",
             "tags":"isro omot capricorn3 capricorn"
          }
       ],
       [
          {
             "id":22,
             "action":"Rising Aquarius 1: Ptiau",
             "tags":"ptiau oro aquarius1 aquarius"
          }
       ],
       [
          {
             "id":23,
             "action":"Rising Aquarius 2: Aue",
             "tags":"aue cratero aquarius2 aquarius"
          }
       ],
       [
          {
             "id":24,
             "action":"Rising Aquarius 3: Ptêbuou",
             "tags":"ptebuou tepis aquarius3 aquarius"
          }
       ],
       [
          {
             "id":25,
             "action":"Rising Pisces 1: Biou",
             "tags":"biou acha pisces1 pisces"
          }
       ],
       [
          {
             "id":26,
             "action":"Rising Pisces 2: Chontare",
             "tags":"chontare tepibui pisces2 pisces"
          }
       ],
       [
          {
             "id":27,
             "action":"Rising Pisces 3: Ptibiou",
             "tags":"ptibiou uiu pisces3 pisces"
          }
       ]
    ]
  },
  property: function(m) {
    return SL.Astro.Logy.getZodiac(m.ephemeris.asc.deg).decan;
  },
  calculate: function(definitions, property) {
    return definitions.actions[property];
  }
};

//Defines Calendar Objects and Methods
var module_decans_fulldegrees = {

  definitions: {
    name: "Full + Empty",
    description: "Full and empty degrees of the Decans, according to Firmicus Maternus 'Ancient Astrology', Book 4, XXII",
    group: {
      id: "decans",
      text: "Decans",
      info: "true"
    },
    actions: [
       [0],
       [
          {
             "id":28,
             "action":"Sun in Aries 1: full (Senator)",
             "tags":"full senator aries"
          }
       ],
       [
          {
             "id":29,
             "action":"Sun in Aries 2: full (Senacher)",
             "tags":"full senacher aries"
          }
       ],
       [
          {
             "id":30,
             "action":"Sun in Aries 3: full (Sentacher)",
             "tags":"full sentacher aries"
          }
       ],
       [
          {
             "id":31,
             "action":"Sun in Taurus 1: full (Suo)",
             "tags":"full suo taurus"
          }
       ],
       [
          {
             "id":32,
             "action":"Sun in Taurus 2: full (Aryo)",
             "tags":"full aryo taurus"
          }
       ],
       [
          {
             "id":33,
             "action":"Sun in Taurus 3: full (Romanae)",
             "tags":"full romanae taurus"
          }
       ],
       [
          {
             "id":34,
             "action":"Sun in Gemini 1: full (Thesogar)",
             "tags":"full thesogar gemini"
          }
       ],
       [
          {
             "id":35,
             "action":"Sun in Gemini 2: full (Ver)",
             "tags":"full ver gemini"
          }
       ],
       [
          {
             "id":36,
             "action":"Sun in Gemini 3: full (Tepis)",
             "tags":"full tepis gemini"
          }
       ],
       [
          {
             "id":1,
             "action":"Sun in Cancer 1: full (Sothis)",
             "tags":"sothis sothis cancer"
          }
       ],
       [
          {
             "id":2,
             "action":"Sun in Cancer 2: full (Sith)",
             "tags":"full sith cancer"
          }
       ],
       [
          {
             "id":3,
             "action":"Sun in Cancer 3: full (Thiumis)",
             "tags":"full thiumis cancer"
          }
       ],
       [
          {
             "id":4,
             "action":"Sun in Leo 1: full (Craumonis)",
             "tags":"full craumonis leo"
          }
       ],
       [
          {
             "id":5,
             "action":"Sun in Leo 2: full (Sic)",
             "tags":"full sic leo"
          }
       ],
       [
          {
             "id":6,
             "action":"Sun in Leo 3: full (Futile)",
             "tags":"full futile leo"
          }
       ],
       [
          {
             "id":7,
             "action":"Sun in Virgo 1: full (Thumis)",
             "tags":"full thumis virgo"
          }
       ],
       [
          {
             "id":8,
             "action":"Sun in Virgo 2: full (Tophicus)",
             "tags":"full tophicus virgo"
          }
       ],
       [
          {
             "id":9,
             "action":"Sun in Virgo 3: full (Afut)",
             "tags":"full afut virgo"
          }
       ],
       [
          {
             "id":10,
             "action":"Sun in Libra 1: full (Seuichut)",
             "tags":"full seuichut libra"
          }
       ],
       [
          {
             "id":11,
             "action":"Sun in Libra 2: full (Sepisent)",
             "tags":"full sepisent libra"
          }
       ],
       [
          {
             "id":12,
             "action":"Sun in Libra 3: full (Senta)",
             "tags":"full senta libra"
          }
       ],
       [
          {
             "id":13,
             "action":"Sun in Scorpio 1: full (Sentacer)",
             "tags":"full sentacer scorpio"
          }
       ],
       [
          {
             "id":14,
             "action":"Sun in Scorpio 2: full (Tepsisen)",
             "tags":"full tepsisen scorpio"
          }
       ],
       [
          {
             "id":15,
             "action":"Sun in Scorpio 3: full (Sentineu)",
             "tags":"full sentineu scorpio"
          }
       ],
       [
          {
             "id":16,
             "action":"Sun in Sagittarius 1: full (Eregbuo)",
             "tags":"full eregbuo sagittarius"
          }
       ],
       [
          {
             "id":17,
             "action":"Sun in Sagittarius 2: full (Sagon)",
             "tags":"full sagon sagittarius"
          }
       ],
       [
          {
             "id":18,
             "action":"Sun in Sagittarius 3: full (Chenene)",
             "tags":"full chenene sagittarius"
          }
       ],
       [
          {
             "id":19,
             "action":"Sun in Capricorn 1: full (Themeso)",
             "tags":"full themeso capricorn"
          }
       ],
       [
          {
             "id":20,
             "action":"Sun in Capricorn 2: full (Epiemu)",
             "tags":"full epiemu capricorn"
          }
       ],
       [
          {
             "id":21,
             "action":"Sun in Capricorn 3: full (Omot)",
             "tags":"full omot capricorn"
          }
       ],
       [
          {
             "id":22,
             "action":"Sun in Aquarius 1: full (Oro)",
             "tags":"full oro aquarius"
          }
       ],
       [
          {
             "id":23,
             "action":"Sun in Aquarius 2: full (Cratero)",
             "tags":"full cratero aquarius"
          }
       ],
       [
          {
             "id":24,
             "action":"Sun in Aquarius 3: full (Tepis)",
             "tags":"full tepis aquarius"
          }
       ],
       [
          {
             "id":25,
             "action":"Sun in Pisces 1: full (Acha)",
             "tags":"full acha pisces"
          }
       ],
       [
          {
             "id":26,
             "action":"Sun in Pisces 2: full (Tepibui)",
             "tags":"full tepibui pisces"
          }
       ],
       [
          {
             "id":27,
             "action":"Pisces 3: full (Uiu)",
             "tags":"full uiu pisces"
          }
       ],
       [
          {
             "id":37,
             "action":"Sun in Aries: empty",
             "tags":"empty aries"
          }
       ],
       [
          {
             "id":38,
             "action":"Sun in Taurus: empty",
             "tags":"empty taurus"
          }
       ],
       [
          {
             "id":39,
             "action":"Sun in Gemini: empty",
             "tags":"empty gemini"
          }
       ],
       [
          {
             "id":40,
             "action":"Sun in Cancer: empty",
             "tags":"empty cancer"
          }
       ],
       [
          {
             "id":41,
             "action":"Sun in Leo: empty",
             "tags":"empty leo"
          }
       ],
       [
          {
             "id":42,
             "action":"Sun in Virgo: empty",
             "tags":"empty virgo"
          }
       ],
       [
          {
             "id":43,
             "action":"Sun in Libra: empty",
             "tags":"empty libra"
          }
       ],
       [
          {
             "id":44,
             "action":"Sun in Scorpio: empty",
             "tags":"empty scorpio"
          }
       ],
       [
          {
             "id":45,
             "action":"Sun in Sagittarius: empty",
             "tags":"empty sagittarius"
          }
       ],
       [
          {
             "id":46,
             "action":"Sun in Capricorn: empty",
             "tags":"empty capricorn"
          }
       ],
       [
          {
             "id":47,
             "action":"Sun in Aquarius: empty",
             "tags":"empty aquarius"
          }
       ],
       [
          {
             "id":48,
             "action":"Sun in Pisces: empty",
             "tags":"empty pisces"
          }
       ]
    ]
  },
  property: function(m) {
    return m.ephemeris.sun.deg;
  },
  calculate: function(definitions, property) {
    return definitions.actions[getFullDegrees(property)];
  }
};

//Defines Calendar Objects and Methods
var module_decans_fulldegrees_rising = {

  definitions: {
    name: "Full + Empty Rising",
    description: "Full and empty rising degrees of the Decans, according to Firmicus Maternus 'Ancient Astrology', Book 4, XXII",
    group: {
      id: "decans",
      text: "Decans",
      info: "true"
    },
    actions: [
       [0],
       [
          {
             "id":28,
             "action":"Rising Aries 1: full (Senator)",
             "tags":"full senator aries"
          }
       ],
       [
          {
             "id":29,
             "action":"Rising Aries 2: full (Senacher)",
             "tags":"full senacher aries"
          }
       ],
       [
          {
             "id":30,
             "action":"Rising Aries 3: full (Sentacher)",
             "tags":"full sentacher aries"
          }
       ],
       [
          {
             "id":31,
             "action":"Rising Taurus 1: full (Suo)",
             "tags":"full suo taurus"
          }
       ],
       [
          {
             "id":32,
             "action":"Rising Taurus 2: full (Aryo)",
             "tags":"full aryo taurus"
          }
       ],
       [
          {
             "id":33,
             "action":"Rising Taurus 3: full (Romanae)",
             "tags":"full romanae taurus"
          }
       ],
       [
          {
             "id":34,
             "action":"Rising Gemini 1: full (Thesogar)",
             "tags":"full thesogar gemini"
          }
       ],
       [
          {
             "id":35,
             "action":"Rising Gemini 2: full (Ver)",
             "tags":"full ver gemini"
          }
       ],
       [
          {
             "id":36,
             "action":"Rising Gemini 3: full (Tepis)",
             "tags":"full tepis gemini"
          }
       ],
       [
          {
             "id":1,
             "action":"Rising Cancer 1: full (Sothis)",
             "tags":"sothis sothis cancer"
          }
       ],
       [
          {
             "id":2,
             "action":"Rising Cancer 2: full (Sith)",
             "tags":"full sith cancer"
          }
       ],
       [
          {
             "id":3,
             "action":"Rising Cancer 3: full (Thiumis)",
             "tags":"full thiumis cancer"
          }
       ],
       [
          {
             "id":4,
             "action":"Rising Leo 1: full (Craumonis)",
             "tags":"full craumonis leo"
          }
       ],
       [
          {
             "id":5,
             "action":"Rising Leo 2: full (Sic)",
             "tags":"full sic leo"
          }
       ],
       [
          {
             "id":6,
             "action":"Rising Leo 3: full (Futile)",
             "tags":"full futile leo"
          }
       ],
       [
          {
             "id":7,
             "action":"Rising Virgo 1: full (Thumis)",
             "tags":"full thumis virgo"
          }
       ],
       [
          {
             "id":8,
             "action":"Rising Virgo 2: full (Tophicus)",
             "tags":"full tophicus virgo"
          }
       ],
       [
          {
             "id":9,
             "action":"Rising Virgo 3: full (Afut)",
             "tags":"full afut virgo"
          }
       ],
       [
          {
             "id":10,
             "action":"Rising Libra 1: full (Seuichut)",
             "tags":"full seuichut libra"
          }
       ],
       [
          {
             "id":11,
             "action":"Rising Libra 2: full (Sepisent)",
             "tags":"full sepisent libra"
          }
       ],
       [
          {
             "id":12,
             "action":"Rising Libra 3: full (Senta)",
             "tags":"full senta libra"
          }
       ],
       [
          {
             "id":13,
             "action":"Rising Scorpio 1: full (Sentacer)",
             "tags":"full sentacer scorpio"
          }
       ],
       [
          {
             "id":14,
             "action":"Rising Scorpio 2: full (Tepsisen)",
             "tags":"full tepsisen scorpio"
          }
       ],
       [
          {
             "id":15,
             "action":"Rising Scorpio 3: full (Sentineu)",
             "tags":"full sentineu scorpio"
          }
       ],
       [
          {
             "id":16,
             "action":"Rising Sagittarius 1: full (Eregbuo)",
             "tags":"full eregbuo sagittarius"
          }
       ],
       [
          {
             "id":17,
             "action":"Rising Sagittarius 2: full (Sagon)",
             "tags":"full sagon sagittarius"
          }
       ],
       [
          {
             "id":18,
             "action":"Rising Sagittarius 3: full (Chenene)",
             "tags":"full chenene sagittarius"
          }
       ],
       [
          {
             "id":19,
             "action":"Rising Capricorn 1: full (Themeso)",
             "tags":"full themeso capricorn"
          }
       ],
       [
          {
             "id":20,
             "action":"Rising Capricorn 2: full (Epiemu)",
             "tags":"full epiemu capricorn"
          }
       ],
       [
          {
             "id":21,
             "action":"Rising Capricorn 3: full (Omot)",
             "tags":"full omot capricorn"
          }
       ],
       [
          {
             "id":22,
             "action":"Rising Aquarius 1: full (Oro)",
             "tags":"full oro aquarius"
          }
       ],
       [
          {
             "id":23,
             "action":"Rising Aquarius 2: full (Cratero)",
             "tags":"full cratero aquarius"
          }
       ],
       [
          {
             "id":24,
             "action":"Rising Aquarius 3: full (Tepis)",
             "tags":"full tepis aquarius"
          }
       ],
       [
          {
             "id":25,
             "action":"Rising Pisces 1: full (Acha)",
             "tags":"full acha pisces"
          }
       ],
       [
          {
             "id":26,
             "action":"Rising Pisces 2: full (Tepibui)",
             "tags":"full tepibui pisces"
          }
       ],
       [
          {
             "id":27,
             "action":"Rising Pisces 3: full (Uiu)",
             "tags":"full uiu pisces"
          }
       ],
       [
          {
             "id":37,
             "action":"Rising Aries: empty",
             "tags":"empty aries"
          }
       ],
       [
          {
             "id":38,
             "action":"Rising Taurus: empty",
             "tags":"empty taurus"
          }
       ],
       [
          {
             "id":39,
             "action":"Rising Gemini: empty",
             "tags":"empty gemini"
          }
       ],
       [
          {
             "id":40,
             "action":"Rising Cancer: empty",
             "tags":"empty cancer"
          }
       ],
       [
          {
             "id":41,
             "action":"Rising Leo: empty",
             "tags":"empty leo"
          }
       ],
       [
          {
             "id":42,
             "action":"Rising Virgo: empty",
             "tags":"empty virgo"
          }
       ],
       [
          {
             "id":43,
             "action":"Rising Libra: empty",
             "tags":"empty libra"
          }
       ],
       [
          {
             "id":44,
             "action":"Rising Scorpio: empty",
             "tags":"empty scorpio"
          }
       ],
       [
          {
             "id":45,
             "action":"Rising Sagittarius: empty",
             "tags":"empty sagittarius"
          }
       ],
       [
          {
             "id":46,
             "action":"Rising Capricorn: empty",
             "tags":"empty capricorn"
          }
       ],
       [
          {
             "id":47,
             "action":"Rising Aquarius: empty",
             "tags":"empty aquarius"
          }
       ],
       [
          {
             "id":48,
             "action":"Rising Pisces: empty",
             "tags":"empty pisces"
          }
       ]
    ]
  },
  property: function(m) {
    return m.ephemeris.asc.deg;
  },
  calculate: function(definitions, property) {
    return definitions.actions[getFullDegrees(property)];
  }
};

function getFullDegrees(input) {

  var property = SL.Astro.Logy.zodToDeg(SL.Astro.Logy.degToZod(input));

  // Aries
  if ( property <    3 )                   return 37;
  if ( property >=   3 && property <   8 ) return 1;
  if ( property >=   8 && property <  17 ) return 37;
  if ( property >=  17 && property <  21 ) return 2;
  if ( property >=  21 && property <  26 ) return 37;
  if ( property >=  26 && property <  30 ) return 3;

  // Taurus
  if ( property >=  30 && property <  33 ) return 38;
  if ( property >=  33 && property <  40 ) return 4;
  if ( property >=  40 && property <  42 ) return 38;
  if ( property >=  42 && property <  50 ) return 5;
  if ( property >=  50 && property <  55 ) return 38;
  if ( property >=  55 && property <  60 ) return 6;

  // Gemini
  if ( property >=  60 && property <  67 ) return 7;
  if ( property >=  67 && property <  69 ) return 39;
  if ( property >=  69 && property <  74 ) return 8;
  if ( property >=  74 && property <  77 ) return 39;
  if ( property >=  77 && property <  83 ) return 9;
  if ( property >=  83 && property <  90 ) return 39;

  // Cancer
  if ( property >=  90 && property <  97 ) return 40;
  if ( property >=  97 && property < 103 ) return 10;
  if ( property >= 103 && property < 105 ) return 40;
  if ( property >= 105 && property < 109 ) return 11;
  if ( property >= 109 && property < 111 ) return 40;
  if ( property >= 111 && property < 120 ) return 12;

  // Leo
  if ( property >= 120 && property < 127 ) return 13;
  if ( property >= 127 && property < 131 ) return 41;
  if ( property >= 131 && property < 134 ) return 14;
  if ( property >= 134 && property < 140 ) return 41;
  if ( property >= 140 && property < 150 ) return 15;

  // Virgo
  if ( property >= 150 && property < 155 ) return 42;
  if ( property >= 155 && property < 160 ) return 16;
  if ( property >= 160 && property < 162 ) return 42;
  if ( property >= 162 && property < 168 ) return 17;
  if ( property >= 168 && property < 174 ) return 42;
  if ( property >= 174 && property < 178 ) return 18;
  if ( property >= 178 && property < 180 ) return 42;

  // Libra
  if ( property >= 180 && property < 185 ) return 19;
  if ( property >= 185 && property < 191 ) return 43;
  if ( property >= 191 && property < 199 ) return 20;
  if ( property >= 199 && property < 202 ) return 43;
  if ( property >= 202 && property < 208 ) return 21;
  if ( property >= 208 && property < 210 ) return 43;

  // Scorpio
  if ( property >= 210 && property < 213 ) return 44;
  if ( property >= 213 && property < 218 ) return 22;
  if ( property >= 218 && property < 224 ) return 44;
  if ( property >= 224 && property < 230 ) return 23;
  if ( property >= 230 && property < 232 ) return 44;
  if ( property >= 232 && property < 237 ) return 24;
  if ( property >= 237 && property < 240 ) return 44;

  // Sagittarius
  if ( property >= 240 && property < 249 ) return 25;
  if ( property >= 249 && property < 252 ) return 45;
  if ( property >= 252 && property < 259 ) return 26;
  if ( property >= 259 && property < 263 ) return 45;
  if ( property >= 263 && property < 270 ) return 27;

  // Capricorn
  if ( property >= 270 && property < 277 ) return 46;
  if ( property >= 277 && property < 280 ) return 28;
  if ( property >= 280 && property < 285 ) return 46;
  if ( property >= 285 && property < 289 ) return 29;
  if ( property >= 289 && property < 294 ) return 46;
  if ( property >= 294 && property < 300 ) return 30;

  // Aquarius
  if ( property >= 300 && property < 304 ) return 47;
  if ( property >= 304 && property < 309 ) return 31;
  if ( property >= 309 && property < 313 ) return 47;
  if ( property >= 313 && property < 319 ) return 32;
  if ( property >= 319 && property < 322 ) return 47;
  if ( property >= 322 && property < 330 ) return 33;

  // Pisces
  if ( property >= 330 && property < 336 ) return 48;
  if ( property >= 336 && property < 342 ) return 34;
  if ( property >= 342 && property < 345 ) return 48;
  if ( property >= 345 && property < 350 ) return 35;
  if ( property >= 350 && property < 356 ) return 48;
  if ( property >= 356 && property < 358 ) return 36;
  if ( property >= 358 && property < 360 ) return 48;

}
