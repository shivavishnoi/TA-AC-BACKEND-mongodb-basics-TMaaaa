mongoimport --db mountains --collection users --file data.json --jsonArray

mongoimport --db mountains --collection users --file "C:\Users\Hare krishna\Desktop\generated.json" --jsonArray

mongoexport --db mountains --collection users --out "C:\Users\Hare krishna\Desktop\city.json" --jsonArray

mongoimport -d test -c students --type csv --file "C:\Users\Hare krishna\Desktop\data for mongo.csv" --headerline