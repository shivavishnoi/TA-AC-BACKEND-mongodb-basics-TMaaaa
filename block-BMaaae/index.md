writeCode

Write code to:-

- create a database named `sports`. -- use sports
- list all databases present in local mongod server. -- show dbs
- create 3 collections named `cricket`, `football`, `TT` in sports databse.-- db.createCollection("cricket")
- add multiple players in those collections which should have fields like `name`, `age` and `email` and `bid_price`.--
  db.football.insertMany([{name: "sachin"}, {name: "varun"}])
- list all collections in sports database.
- rename `TT` collection to `tennis`. -- db.TT.renameCollection("tennis")
- create a capped collection called `khokho` which should have max 3 documents.
  Try inserting more than 3 and see what happens?-- overwrites existing documents
- check whether a collection is capped or not? db.khokho.isCapped()
- drop all documents from `football` collection.
- delete cricket collection completely.db.cricket.drop()
- delete sports database. db.dropDatabase()
- check which database you are connected to ? sports
- connect to test database use test
