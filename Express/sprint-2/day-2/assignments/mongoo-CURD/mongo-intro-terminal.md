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

mongosh
show dbs
use member
db.member.CURD
db.collection.insertMany([{
"id": 1,
"full_name": "Ilyssa Pawelek",
"age": 23,
"gender": "Female",
"balance": 12083.74,
"native": "United Kingdom",
"relocate_to": "France",
"family_members": 3
}, {
"id": 2,
"full_name": "Niccolo Phethean",
"age": 22,
"gender": "Female",
"balance": 57087.13,
"native": "Japan",
"relocate_to": "Russia",
"family_members": 2
}, {
"id": 3,
"full_name": "Austin Abramson",
"age": 41,
"gender": "Male",
"balance": 22851.32,
"native": "Japan",
"relocate_to": "France",
"family_members": 1
}, {
"id": 4,
"full_name": "Jacqueline Dargan",
"age": 30,
"gender": "Male",
"balance": 96103.99,
"native": "United States",
"relocate_to": "Russia",
"family_members": 1
}, {
"id": 5,
"full_name": "Fredericka Twitchett",
"age": 28,
"gender": "Female",
"balance": 18461.35,
"native": "United States",
"relocate_to": "Russia",
"family_members": 3
}, {
"id": 6,
"full_name": "Dennie Mander",
"age": 54,
"gender": "Male",
"balance": 82066.1,
"native": "United States",
"relocate_to": "Russia",
"family_members": 3
}, {
"id": 7,
"full_name": "Obie Finders",
"age": 44,
"gender": "Male",
"balance": 45655.22,
"native": "United States",
"relocate_to": "Russia",
"family_members": 2
}, {
"id": 8,
"full_name": "Florrie Hulse",
"age": 30,
"gender": "Female",
"balance": 47600.35,
"native": "Norway",
"relocate_to": "Russia",
"family_members": 1
}, {
"id": 9,
"full_name": "Lissie Jorin",
"age": 28,
"gender": "Male",
"balance": 75572.3,
"native": "Japan",
"relocate_to": "France",
"family_members": 2
}, {
"id": 10,
"full_name": "Babbette Croci",
"age": 23,
"gender": "Female",
"balance": 25206.0,
"native": "United States",
"relocate_to": "France",
"family_members": 2
}, {
"id": 11,
"full_name": "Alden Hovenden",
"age": 27,
"gender": "Male",
"balance": 79110.83,
"native": "United States",
"relocate_to": "France",
"family_members": 1
}, {
"id": 12,
"full_name": "Cirillo Okenden",
"age": 39,
"gender": "Female",
"balance": 34743.63,
"native": "United States",
"relocate_to": "Russia",
"family_members": 3
}, {
"id": 13,
"full_name": "Deeanne Cheshire",
"age": 21,
"gender": "Male",
"balance": 86093.17,
"native": "United States",
"relocate_to": "Russia",
"family_members": 2
}, {
"id": 14,
"full_name": "Aguste Lorent",
"age": 30,
"gender": "Female",
"balance": 98010.85,
"native": "United States",
"relocate_to": "Russia",
"family_members": 2
}, {
"id": 15,
"full_name": "Hoyt Keedwell",
"age": 45,
"gender": "Female",
"balance": 43347.73,
"native": "Norway",
"relocate_to": "Russia",
"family_members": 2
}, {
"id": 16,
"full_name": "Thain Bimson",
"age": 20,
"gender": "Female",
"balance": 22834.8,
"native": "United States",
"relocate_to": "Russia",
"family_members": 2
}, {
"id": 17,
"full_name": "Vikki Tonna",
"age": 52,
"gender": "Female",
"balance": 72014.18,
"native": "United States",
"relocate_to": "Russia",
"family_members": 3
}, {
"id": 18,
"full_name": "Dominique Hearon",
"age": 54,
"gender": "Female",
"balance": 72510.59,
"native": "Japan",
"relocate_to": "Russia",
"family_members": 1
}, {
"id": 19,
"full_name": "Padraig Conre",
"age": 27,
"gender": "Female",
"balance": 84325.66,
"native": "United States",
"relocate_to": "Russia",
"family_members": 2
}, {
"id": 20,
"full_name": "Suki Stonall",
"age": 40,
"gender": "Female",
"balance": 38327.58,
"native": "United States",
"relocate_to": "France",
"family_members": 1
}, {
"id": 21,
"full_name": "Pall Entwhistle",
"age": 40,
"gender": "Male",
"balance": 89740.26,
"native": "United Kingdom",
"relocate_to": "Sweden",
"family_members": 1
}, {
"id": 22,
"full_name": "Charissa Beushaw",
"age": 48,
"gender": "Male",
"balance": 24081.51,
"native": "Japan",
"relocate_to": "Russia",
"family_members": 1
}, {
"id": 23,
"full_name": "Tabor Boswell",
"age": 40,
"gender": "Female",
"balance": 48080.74,
"native": "Japan",
"relocate_to": "Russia",
"family_members": 2
}, {
"id": 24,
"full_name": "Ethelyn Shenton",
"age": 52,
"gender": "Female",
"balance": 49906.58,
"native": "United States",
"relocate_to": "France",
"family_members": 1
}, {
"id": 25,
"full_name": "Sadye Brigg",
"age": 21,
"gender": "Female",
"balance": 14752.3,
"native": "United States",
"relocate_to": "Russia",
"family_members": 3
}, {
"id": 26,
"full_name": "Rustin Stilly",
"age": 37,
"gender": "Female",
"balance": 47012.53,
"native": "United States",
"relocate_to": "Sweden",
"family_members": 1
}, {
"id": 27,
"full_name": "Millard Corwood",
"age": 39,
"gender": "Male",
"balance": 46678.2,
"native": "Japan",
"relocate_to": "Russia",
"family_members": 3
}, {
"id": 28,
"full_name": "Flori McGeouch",
"age": 49,
"gender": "Female",
"balance": 35360.33,
"native": "United States",
"relocate_to": "France",
"family_members": 2
}, {
"id": 29,
"full_name": "Bentley Manshaw",
"age": 47,
"gender": "Male",
"balance": 50995.69,
"native": "United States",
"relocate_to": "France",
"family_members": 1
}, {
"id": 30,
"full_name": "Marshall Cormack",
"age": 31,
"gender": "Female",
"balance": 48533.2,
"native": "Japan",
"relocate_to": "Russia",
"family_members": 3
}]))
db.collection.find({gender:"Male"})
db.collection.find({id : {$mod : [2,0]}})
db.collection.find({native:"Japan"})
db.collection.find({gender:"Female", native: "India"})
db.collection.find({age: {$gt: 25}})
db.collection.find({age: {$lt: 50}, native: "United States"})
db.collection.countDocuments({relocate_to: 'France'})
db.collection.countDocuments({relocate_to: 'Russia', native: "United States"})
db.collection.find({relocate_to: 'Russia', native: "United States"}).sort({age:1})
db.collection.find({}).sort({age:-1, family_members: 1})
