// Commands to run in mongo shell
let params = [
  {
    title: 'one',
    created: '18/10/2022',
    details: 'created by me',
    author: {
      name: 'shivaji',
      email: 'shivaji@gmail.com',
      age: 25,
    },
    tags: ['html', 'css'],
  },
  {
    title: 'two',
    created: '18/10/2022',
    details: 'created by shivam',
    author: {
      name: 'shivam',
      email: 'shivam@gmail.com',
      age: 25,
    },
    tags: ['html', 'css', 'JS'],
  },
  {
    title: 'three',
    created: '18/10/2022',
    details: 'created by Arun',
    author: {
      name: 'Arun',
      email: 'Arun@gmail.com',
      age: 25,
    },
    tags: ['html', 'css', 'node'],
  },
];

db.articles.find({ _id: ObjectId('634e748ad741d76919a61b54') });

db.articles.find({ title: 'one' });
db.articles.find({ 'author.name': 'Arun' });
db.articles.find({ tags: 'node' });
db.articles.update(
  { _id: ObjectId('634e748ad741d76919a61b54') },
  { $set: { title: 'four' } }
);
db.articles.remove({ 'author.name': 'Ravi' });
db.articles.update({ title: 'three' }, { $set: { 'author.name': 'Ravi' } });
db.employees.updateMany({}, { $rename: { details: 'description' } });

db.articles.update({ title: 'three' }, { $push: { tags: 'mongo' } });
db.articles.update({ title: 'three' }, { created: '19/10/1990' });
db.articles.update({ title: 'two' }, { 'author.age': 30 });
db.articles.remove({"_id" : ObjectId('634e7ceed741d76919a61b55'));
db.users.find({sports : {$all : ['cricket']}})
db.users.find({$and : [{sports : {$all : ['cricket']}}, {gender : "Male"}]})
db.users.find({sports: {$in : ["football", "cricket"]}})
db.users.find({name : {$regex : "ri"}})