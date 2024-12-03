Database -
What ? - a dedicated s/w -> store/retrieving data
Why ? - - 1. Create/store data ---> in some file/db 2. Read  
 3. Update  
 4. Delete

        db.json ->
         // CRUD + more things

Types - SQL - Structured Query Language - Tabular form - rows and columns - NOSQL - NO - SQL

       - NoSQL -> MongoDB - data is BSON format
       -> easy to learn

1 database - Masai database

    collection_1
      {
          name : "Mobile",
          price : 10k
      }
      {
          name : "Laptop",
          price : 40k
      }
       {
          name : "Tablet",
          price : 15k,
          screen_size : 6
      }

collection_2
{
id : 1
name : "Arun",
course : "NEM-111"
}
{
id : 99,
name : "Shubham",
course : "NEM-111"
}

                    database
                         - collections
                            - document

see all databases - show dbs
use a particular database - use dbname
create a collection - db.createCollection("collection_name")
access a collection - db.collection_name.CRUD

// CRUD ->
db.collection_name.CRUD

         Read -> .find()
                 .find({key:value})
                 .findOne() - returns the first matching document
                 .findOne({key : value})
                           .pretty()

         Create -> .insertMany([{},{}]) - insert/create 1 or many documents - array of objects
                   .insertOne({})

         Update -> .updateOne({criteria/target},{ $set/$inc: {updatedvalues}}) - updates the first document which is matching the criteria
                   .updateMany({target},{$set/$inc: {updatedvalues}}) - updates all documents which match the criteria

                    //country : India

                    //atomic operators -
                              $set, - new key-value pair, modifying/updating a key-value pair
                              $inc, -

        Delete -> .deleteOne({target})
                  .deleteMany({target})

       To delete the collection -> db.COLLECTION_NAME.drop()
       To delete the whole dataBase (first use that dataBase then-)-> db.dropDatabase()
                  // - Mongo is installed and working -> mongosh
                  // - try out basic CRUD


                  // JSON -> BSON
                  // BSON -> JSON + binary

//CRUD -

decreasing a num - $inc and negative value; 
  db.users.updateMany({age : 31}, {$inc : {age : -5}})

indexing -
O(1) - when finding by ID
O(n) - traversing through all documents

// \_id is indexed by default in mongo -> O(1)
// name -> we can index the keys that we want to, read more on indexing from documentation

//.pretty()
//.limit(no) - limits the resulting documents to that number
//.skip(no) - skips that number of resulting documents

//page_no=3 per_page = 5

db.find().skip(10).limit(5)

formula for skip = (page_no - 1)\*per_page

//.sort({key : 1/-1}) = asc = 1, desc = -1

//ASCII -

//.collation

//logical operators

//AND -
//country India, city Pune - db.users.find({country : "India", city : "Pune", age : 25}).pretty()

// OR - {$or : [{},{},{}]}

//Comparision operators

> gt
> = gte
> < lt
> <= lte
> == eq
> != ne

//field or keys:

$exists
$unset - {$unset : {key_name : ""}}
$rename -

//accessing nested documents "key.key.key" : "value"

// 1 should we remember all these queries? - NO
// 2 documentation ->
// 3 cheatsheet ->

---

db.info.insertMany([
{
"id": 1,
"name": "Afghanistan",
"iso3": "AFG",
"iso2": "AF",
"numeric_code": "004",
"phone_code": "93",
"capital": "Kabul",
"currency": "AFN",
"currency_name": "Afghan afghani",
"currency_symbol": "؋",
"tld": ".af",
"native": "افغانستان",
"region": "Asia",
"subregion": "Southern Asia",
"timezones": [
{
"zoneName": "Asia\/Kabul",
"gmtOffset": 16200,
"gmtOffsetName": "UTC+04:30",
"abbreviation": "AFT",
"tzName": "Afghanistan Time"
}
],
"translations": {
"kr": "아프가니스탄",
"pt-BR": "Afeganistão",
"pt": "Afeganistão",
"nl": "Afghanistan",
"hr": "Afganistan",
"fa": "افغانستان",
"de": "Afghanistan",
"es": "Afganistán",
"fr": "Afghanistan",
"ja": "アフガニスタン",
"it": "Afghanistan",
"cn": "阿富汗",
"tr": "Afganistan"
},
"latitude": "33.00000000",
"longitude": "65.00000000",
"emoji": "🇦🇫",
"emojiU": "U+1F1E6 U+1F1EB"
},
{
"id": 2,
"name": "Aland Islands",
"iso3": "ALA",
"iso2": "AX",
"numeric_code": "248",
"phone_code": "+358-18",
"capital": "Mariehamn",
"currency": "EUR",
"currency_name": "Euro",
"currency_symbol": "€",
"tld": ".ax",
"native": "Åland",
"region": "Europe",
"subregion": "Northern Europe",
"timezones": [
{
"zoneName": "Europe\/Mariehamn",
"gmtOffset": 7200,
"gmtOffsetName": "UTC+02:00",
"abbreviation": "EET",
"tzName": "Eastern European Time"
}
],
"translations": {
"kr": "올란드 제도",
"pt-BR": "Ilhas de Aland",
"pt": "Ilhas de Aland",
"nl": "Ålandeilanden",
"hr": "Ålandski otoci",
"fa": "جزایر الند",
"de": "Åland",
"es": "Alandia",
"fr": "Åland",
"ja": "オーランド諸島",
"it": "Isole Aland",
"cn": "奥兰群岛",
"tr": "Åland Adalari"
},
"latitude": "60.11666700",
"longitude": "19.90000000",
"emoji": "🇦🇽",
"emojiU": "U+1F1E6 U+1F1FD"
},
{
"id": 3,
"name": "Albania",
"iso3": "ALB",
"iso2": "AL",
"numeric_code": "008",
"phone_code": "355",
"capital": "Tirana",
"currency": "ALL",
"currency_name": "Albanian lek",
"currency_symbol": "Lek",
"tld": ".al",
"native": "Shqipëria",
"region": "Europe",
"subregion": "Southern Europe",
"timezones": [
{
"zoneName": "Europe\/Tirane",
"gmtOffset": 3600,
"gmtOffsetName": "UTC+01:00",
"abbreviation": "CET",
"tzName": "Central European Time"
}
],
"translations": {
"kr": "알바니아",
"pt-BR": "Albânia",
"pt": "Albânia",
"nl": "Albanië",
"hr": "Albanija",
"fa": "آلبانی",
"de": "Albanien",
"es": "Albania",
"fr": "Albanie",
"ja": "アルバニア",
"it": "Albania",
"cn": "阿尔巴尼亚",
"tr": "Arnavutluk"
},
"latitude": "41.00000000",
"longitude": "20.00000000",
"emoji": "🇦🇱",
"emojiU": "U+1F1E6 U+1F1F1"
},
{
"id": 4,
"name": "Algeria",
"iso3": "DZA",
"iso2": "DZ",
"numeric_code": "012",
"phone_code": "213",
"capital": "Algiers",
"currency": "DZD",
"currency_name": "Algerian dinar",
"currency_symbol": "دج",
"tld": ".dz",
"native": "الجزائر",
"region": "Africa",
"subregion": "Northern Africa",
"timezones": [
{
"zoneName": "Africa\/Algiers",
"gmtOffset": 3600,
"gmtOffsetName": "UTC+01:00",
"abbreviation": "CET",
"tzName": "Central European Time"
}
],
"translations": {
"kr": "알제리",
"pt-BR": "Argélia",
"pt": "Argélia",
"nl": "Algerije",
"hr": "Alžir",
"fa": "الجزایر",
"de": "Algerien",
"es": "Argelia",
"fr": "Algérie",
"ja": "アルジェリア",
"it": "Algeria",
"cn": "阿尔及利亚",
"tr": "Cezayir"
},
"latitude": "28.00000000",
"longitude": "3.00000000",
"emoji": "🇩🇿",
"emojiU": "U+1F1E9 U+1F1FF"
},
{
"id": 5,
"name": "American Samoa",
"iso3": "ASM",
"iso2": "AS",
"numeric_code": "016",
"phone_code": "+1-684",
"capital": "Pago Pago",
"currency": "USD",
"currency_name": "US Dollar",
"currency_symbol": "$",
        "tld": ".as",
        "native": "American Samoa",
        "region": "Oceania",
        "subregion": "Polynesia",
        "timezones": [
            {
                "zoneName": "Pacific\/Pago_Pago",
                "gmtOffset": -39600,
                "gmtOffsetName": "UTC-11:00",
                "abbreviation": "SST",
                "tzName": "Samoa Standard Time"
            }
        ],
        "translations": {
            "kr": "아메리칸사모아",
            "pt-BR": "Samoa Americana",
            "pt": "Samoa Americana",
            "nl": "Amerikaans Samoa",
            "hr": "Američka Samoa",
            "fa": "ساموآی آمریکا",
            "de": "Amerikanisch-Samoa",
            "es": "Samoa Americana",
            "fr": "Samoa américaines",
            "ja": "アメリカ領サモア",
            "it": "Samoa Americane",
            "cn": "美属萨摩亚",
            "tr": "Amerikan Samoasi"
        },
        "latitude": "-14.33333333",
        "longitude": "-170.00000000",
        "emoji": "🇦🇸",
        "emojiU": "U+1F1E6 U+1F1F8"
    },
    {
        "id": 6,
        "name": "Andorra",
        "iso3": "AND",
        "iso2": "AD",
        "numeric_code": "020",
        "phone_code": "376",
        "capital": "Andorra la Vella",
        "currency": "EUR",
        "currency_name": "Euro",
        "currency_symbol": "€",
        "tld": ".ad",
        "native": "Andorra",
        "region": "Europe",
        "subregion": "Southern Europe",
        "timezones": [
            {
                "zoneName": "Europe\/Andorra",
                "gmtOffset": 3600,
                "gmtOffsetName": "UTC+01:00",
                "abbreviation": "CET",
                "tzName": "Central European Time"
            }
        ],
        "translations": {
            "kr": "안도라",
            "pt-BR": "Andorra",
            "pt": "Andorra",
            "nl": "Andorra",
            "hr": "Andora",
            "fa": "آندورا",
            "de": "Andorra",
            "es": "Andorra",
            "fr": "Andorre",
            "ja": "アンドラ",
            "it": "Andorra",
            "cn": "安道尔",
            "tr": "Andorra"
        },
        "latitude": "42.50000000",
        "longitude": "1.50000000",
        "emoji": "🇦🇩",
        "emojiU": "U+1F1E6 U+1F1E9"
    },
    {
        "id": 7,
        "name": "Angola",
        "iso3": "AGO",
        "iso2": "AO",
        "numeric_code": "024",
        "phone_code": "244",
        "capital": "Luanda",
        "currency": "AOA",
        "currency_name": "Angolan kwanza",
        "currency_symbol": "Kz",
        "tld": ".ao",
        "native": "Angola",
        "region": "Africa",
        "subregion": "Middle Africa",
        "timezones": [
            {
                "zoneName": "Africa\/Luanda",
                "gmtOffset": 3600,
                "gmtOffsetName": "UTC+01:00",
                "abbreviation": "WAT",
                "tzName": "West Africa Time"
            }
        ],
        "translations": {
            "kr": "앙골라",
            "pt-BR": "Angola",
            "pt": "Angola",
            "nl": "Angola",
            "hr": "Angola",
            "fa": "آنگولا",
            "de": "Angola",
            "es": "Angola",
            "fr": "Angola",
            "ja": "アンゴラ",
            "it": "Angola",
            "cn": "安哥拉",
            "tr": "Angola"
        },
        "latitude": "-12.50000000",
        "longitude": "18.50000000",
        "emoji": "🇦🇴",
        "emojiU": "U+1F1E6 U+1F1F4"
    },
    {
        "id": 8,
        "name": "Anguilla",
        "iso3": "AIA",
        "iso2": "AI",
        "numeric_code": "660",
        "phone_code": "+1-264",
        "capital": "The Valley",
        "currency": "XCD",
        "currency_name": "East Caribbean dollar",
        "currency_symbol": "$",
"tld": ".ai",
"native": "Anguilla",
"region": "Americas",
"subregion": "Caribbean",
"timezones": [
{
"zoneName": "America\/Anguilla",
"gmtOffset": -14400,
"gmtOffsetName": "UTC-04:00",
"abbreviation": "AST",
"tzName": "Atlantic Standard Time"
}
],
"translations": {
"kr": "앵귈라",
"pt-BR": "Anguila",
"pt": "Anguila",
"nl": "Anguilla",
"hr": "Angvila",
"fa": "آنگویلا",
"de": "Anguilla",
"es": "Anguilla",
"fr": "Anguilla",
"ja": "アンギラ",
"it": "Anguilla",
"cn": "安圭拉",
"tr": "Anguilla"
},
"latitude": "18.25000000",
"longitude": "-63.16666666",
"emoji": "🇦🇮",
"emojiU": "U+1F1E6 U+1F1EE"
},
{
"id": 9,
"name": "Antarctica",
"iso3": "ATA",
"iso2": "AQ",
"numeric_code": "010",
"phone_code": "672",
"capital": "",
"currency": "AAD",
"currency_name": "Antarctican dollar",
"currency_symbol": "$",
        "tld": ".aq",
        "native": "Antarctica",
        "region": "Polar",
        "subregion": "",
        "timezones": [
            {
                "zoneName": "Antarctica\/Casey",
                "gmtOffset": 39600,
                "gmtOffsetName": "UTC+11:00",
                "abbreviation": "AWST",
                "tzName": "Australian Western Standard Time"
            },
            {
                "zoneName": "Antarctica\/Davis",
                "gmtOffset": 25200,
                "gmtOffsetName": "UTC+07:00",
                "abbreviation": "DAVT",
                "tzName": "Davis Time"
            },
            {
                "zoneName": "Antarctica\/DumontDUrville",
                "gmtOffset": 36000,
                "gmtOffsetName": "UTC+10:00",
                "abbreviation": "DDUT",
                "tzName": "Dumont d'Urville Time"
            },
            {
                "zoneName": "Antarctica\/Mawson",
                "gmtOffset": 18000,
                "gmtOffsetName": "UTC+05:00",
                "abbreviation": "MAWT",
                "tzName": "Mawson Station Time"
            },
            {
                "zoneName": "Antarctica\/McMurdo",
                "gmtOffset": 46800,
                "gmtOffsetName": "UTC+13:00",
                "abbreviation": "NZDT",
                "tzName": "New Zealand Daylight Time"
            },
            {
                "zoneName": "Antarctica\/Palmer",
                "gmtOffset": -10800,
                "gmtOffsetName": "UTC-03:00",
                "abbreviation": "CLST",
                "tzName": "Chile Summer Time"
            },
            {
                "zoneName": "Antarctica\/Rothera",
                "gmtOffset": -10800,
                "gmtOffsetName": "UTC-03:00",
                "abbreviation": "ROTT",
                "tzName": "Rothera Research Station Time"
            },
            {
                "zoneName": "Antarctica\/Syowa",
                "gmtOffset": 10800,
                "gmtOffsetName": "UTC+03:00",
                "abbreviation": "SYOT",
                "tzName": "Showa Station Time"
            },
            {
                "zoneName": "Antarctica\/Troll",
                "gmtOffset": 0,
                "gmtOffsetName": "UTC±00",
                "abbreviation": "GMT",
                "tzName": "Greenwich Mean Time"
            },
            {
                "zoneName": "Antarctica\/Vostok",
                "gmtOffset": 21600,
                "gmtOffsetName": "UTC+06:00",
                "abbreviation": "VOST",
                "tzName": "Vostok Station Time"
            }
        ],
        "translations": {
            "kr": "남극",
            "pt-BR": "Antártida",
            "pt": "Antárctida",
            "nl": "Antarctica",
            "hr": "Antarktika",
            "fa": "جنوبگان",
            "de": "Antarktika",
            "es": "Antártida",
            "fr": "Antarctique",
            "ja": "南極大陸",
            "it": "Antartide",
            "cn": "南极洲",
            "tr": "Antartika"
        },
        "latitude": "-74.65000000",
        "longitude": "4.48000000",
        "emoji": "🇦🇶",
        "emojiU": "U+1F1E6 U+1F1F6"
    },
    {
        "id": 10,
        "name": "Antigua And Barbuda",
        "iso3": "ATG",
        "iso2": "AG",
        "numeric_code": "028",
        "phone_code": "+1-268",
        "capital": "St. John's",
        "currency": "XCD",
        "currency_name": "Eastern Caribbean dollar",
        "currency_symbol": "$",
"tld": ".ag",
"native": "Antigua and Barbuda",
"region": "Americas",
"subregion": "Caribbean",
"timezones": [
{
"zoneName": "America\/Antigua",
"gmtOffset": -14400,
"gmtOffsetName": "UTC-04:00",
"abbreviation": "AST",
"tzName": "Atlantic Standard Time"
}
],
"translations": {
"kr": "앤티가 바부다",
"pt-BR": "Antígua e Barbuda",
"pt": "Antígua e Barbuda",
"nl": "Antigua en Barbuda",
"hr": "Antigva i Barbuda",
"fa": "آنتیگوا و باربودا",
"de": "Antigua und Barbuda",
"es": "Antigua y Barbuda",
"fr": "Antigua-et-Barbuda",
"ja": "アンティグア・バーブーダ",
"it": "Antigua e Barbuda",
"cn": "安提瓜和巴布达",
"tr": "Antigua Ve Barbuda"
},
"latitude": "17.05000000",
"longitude": "-61.80000000",
"emoji": "🇦🇬",
"emojiU": "U+1F1E6 U+1F1EC"
}
])
