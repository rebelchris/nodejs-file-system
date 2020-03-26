const fs = require('fs');

let rawdata = fs.readFileSync('people.json');
let people = JSON.parse(rawdata);

people.people.push({
    'firstname': 'Steve',
    'lastname': 'Jobs'
});

fs.writeFileSync('people.json', JSON.stringify(people));