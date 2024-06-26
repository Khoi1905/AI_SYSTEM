const movieCategory = {
  popular: "popular",
  top_rated: "top_rated",
  upcoming: "upcoming",
};

const movieGenreIds = {
  Action: 28,
  Adventure: 12,
  Animation: 16,
  Comedy: 35,
  Crime: 80,
  Documentary: 99,
  Drama: 18,
  Family: 10751,
  Fantasy: 14,
  History: 36,
  Horror: 27,
  Music: 10402,
  Mystery: 9648,
  Romance: 10749,
  "Science Fiction": 878,
  "TV Movie": 10770,
  Thriller: 53,
  War: 10752,
  Western: 37,
};

const movieLanguageTags = {
  Abkhazian: 'ab',  
  Afar: 'aa',       
  Afrikaans: 'af',  
  Akan: 'ak',       
  Albanian: 'sq',   
  Amharic: 'am',    
  Arabic: 'ar',     
  Aragonese: 'an',  
  Armenian: 'hy',   
  Assamese: 'as',   
  Avaric: 'av',     
  Avestan: 'ae',    
  Aymara: 'ay',     
  Azerbaijani: 'az',
  Bambara: 'bm',    
  Bashkir: 'ba',    
  Basque: 'eu',
  Belarusian: 'be',
  Bengali: 'bn',
  Bislama: 'bi',
  Bosnian: 'bs',
  Breton: 'br',
  Bulgarian: 'bg',
  Burmese: 'my',
  Cantonese: 'cn',
  Catalan: 'ca',
  Chamorro: 'ch',
  Chechen: 'ce',
  'Chichewa; Nyanja': 'ny',
  Chuvash: 'cv',
  Cornish: 'kw',
  Corsican: 'co',
  Cree: 'cr',
  Croatian: 'hr',
  Czech: 'cs',
  Danish: 'da',
  Divehi: 'dv',
  Dutch: 'nl',
  Dzongkha: 'dz',
  English: 'en',
  Esperanto: 'eo',
  Estonian: 'et',
  Ewe: 'ee',
  Faroese: 'fo',
  Fijian: 'fj',
  Finnish: 'fi',
  French: 'fr',
  Frisian: 'fy',
  Fulah: 'ff',
  Gaelic: 'gd',
  Galician: 'gl',
  Ganda: 'lg',
  Georgian: 'ka',
  German: 'de',
  Greek: 'el',
  Guarani: 'gn',
  Gujarati: 'gu',
  'Haitian; Haitian Creole': 'ht',
  Hausa: 'ha',
  Hebrew: 'he',
  Herero: 'hz',
  Hindi: 'hi',
  'Hiri Motu': 'ho',
  Hungarian: 'hu',
  Icelandic: 'is',
  Ido: 'io',
  Igbo: 'ig',
  Indonesian: 'id',
  Interlingua: 'ia',
  Interlingue: 'ie',
  Inuktitut: 'iu',
  Inupiaq: 'ik',
  Irish: 'ga',
  Italian: 'it',
  Japanese: 'ja',
  Javanese: 'jv',
  Kalaallisut: 'kl',
  Kannada: 'kn',
  Kanuri: 'kr',
  Kashmiri: 'ks',
  Kazakh: 'kk',
  Khmer: 'km',
  Kikuyu: 'ki',
  Kinyarwanda: 'rw',
  Kirghiz: 'ky',
  Komi: 'kv',
  Kongo: 'kg',
  Korean: 'ko',
  Kuanyama: 'kj',
  Kurdish: 'ku',
  Lao: 'lo',
  Latin: 'la',
  Latvian: 'lv',
  Letzeburgesch: 'lb',
  Limburgish: 'li',
  Lingala: 'ln',
  Lithuanian: 'lt',
  'Luba-Katanga': 'lu',
  Macedonian: 'mk',
  Malagasy: 'mg',
  Malay: 'ms',
  Malayalam: 'ml',
  Maltese: 'mt',
  Mandarin: 'zh',
  Manx: 'gv',
  Maori: 'mi',
  Marathi: 'mr',
  Marshall: 'mh',
  Moldavian: 'mo',
  Mongolian: 'mn',
  Nauru: 'na',
  Navajo: 'nv',
  Ndebele: 'nr',
  Ndonga: 'ng',
  Nepali: 'ne',
  'No Language': 'xx',
  'Northern Sami': 'se',
  Norwegian: 'no',
  'Norwegian Bokmål': 'nb',
  'Norwegian Nynorsk': 'nn',
  Occitan: 'oc',
  Ojibwa: 'oj',
  Oriya: 'or',
  Oromo: 'om',
  'Ossetian; Ossetic': 'os',
  Pali: 'pi',
  Persian: 'fa',
  Polish: 'pl',
  Portuguese: 'pt',
  Punjabi: 'pa',
  Pushto: 'ps',
  Quechua: 'qu',
  'Raeto-Romance': 'rm',
  Romanian: 'ro',
  Rundi: 'rn',
  Russian: 'ru',
  Samoan: 'sm',
  Sango: 'sg',
  Sanskrit: 'sa',
  Sardinian: 'sc',
  Serbian: 'sr',
  'Serbo-Croatian': 'sh',
  Shona: 'sn',
  Sindhi: 'sd',
  Sinhalese: 'si',
  Slavic: 'cu',
  Slovak: 'sk',
  Slovenian: 'sl',
  Somali: 'so',
  Sotho: 'st',
  Spanish: 'es',
  Sundanese: 'su',
  Swahili: 'sw',
  Swati: 'ss',
  Swedish: 'sv',
  Tagalog: 'tl',
  Tahitian: 'ty',
  Tajik: 'tg',
  Tamil: 'ta',
  Tatar: 'tt',
  Telugu: 'te',
  Thai: 'th',
  Tibetan: 'bo',
  Tigrinya: 'ti',
  Tonga: 'to',
  Tsonga: 'ts',
  Tswana: 'tn',
  Turkish: 'tr',
  Turkmen: 'tk',
  Twi: 'tw',
  Uighur: 'ug',
  Ukrainian: 'uk',
  Urdu: 'ur',
  Uzbek: 'uz',
  Venda: 've',
  Vietnamese: 'vi',
  'Volapük': 'vo',
  Walloon: 'wa',
  Welsh: 'cy',
  Wolof: 'wo',
  Xhosa: 'xh',
  Yi: 'ii',
  Yiddish: 'yi',
  Yoruba: 'yo',
  Zhuang: 'za',
  Zulu: 'zu'
};

const discoverSortOptions = {
  "Popularity Descending": "popularity.desc",
    "Popularity Ascending": "popularity.asc",
    "Rating Descending": "vote_average.desc",
    "Rating Ascending": "vote_average.asc",
    "Release Year Descending": "primary_release_date.desc",
    "Release Year Ascending": "primary_release_date.desc",
    "Title (A-Z)": "title.desc",
    "Title (Z-A)": "title.asc"
}

const backdropPath = (imgEndpoint) =>
  `https://image.tmdb.org/t/p/original${imgEndpoint}`;

const posterPath = (imgEndpoint) =>
  `https://image.tmdb.org/t/p/w500${imgEndpoint}`;

const youtubePath = (videoId) =>
  `https://www.youtube.com/embed/${videoId}?controls=0`;

const tmdbConfigs = {
  movieCategory,
  movieGenreIds,
  movieLanguageTags,
  backdropPath,
  posterPath,
  youtubePath,
  discoverSortOptions
};

export default tmdbConfigs;