const staffMembers = [
    { 
        "_id" :0, 
        "name" : "David", 
        "surname" : "Smith", 
        "slug": "david-smith",
        "category" : "operations",
        "title": "Head of Development",
        "reportsTo": "bruce-davids"
    },
    { 
        "_id" :1, 
        "name" : "John", 
        "surname" : "Jones", 
        "slug": "john-jones",
        "category" : "operations",
        "title": "Head of Marketing",
        "reportsTo": "bruce-davids"
    },
    { 
        "_id" :2, 
        "name" : "Jane", 
        "surname" : "Sampson", 
        "slug": "jane-sampson",
        "category" : "operations",
        "title": "Head of Content",
        "reportsTo": "bruce-davids"
    },
    { 
        "_id" :3, 
        "name" : "Nick", 
        "surname" : "Thompson", 
        "slug": "nick-thompson",
        "category" : "operations",
        "title": "Head of Design",
        "reportsTo": "terry-cats"
    },
    { 
        "_id" :4, 
        "name" : "Nick", 
        "surname" : "Jenson", 
        "slug": "nick-jenson",
        "category" : "interns",
        "title": "Intern designer",
        "reportsTo": "nick-thompson" 
    },
    { 
        "_id" :5, 
        "name" : "Simon", 
        "surname" : "Says",
        "slug": "simon-says", 
        "category" : "operations",
        "title": "Head of Strategy",
        "reportsTo": "bruce-davids" 
    },
    { 
        "_id" :6, 
        "name" : "Terry", 
        "surname" : "Cats", 
        "slug": "terry-cats",
        "category" : "c-suite",
        "title": "Chief Creative Officer",
        "reportsTo": "" 
    },
    { 
        "_id" :7, 
        "name" : "Bruce", 
        "surname" : "Davids", 
        "slug": "bruce-davids",
        "category" : "c-suite",
        "title": "Chief Strategy Officer",
        "reportsTo": "" 
    },
    { 
        "_id" :8, 
        "name" : "Bill", 
        "surname" : "Bass", 
        "slug": "bill-bass",
        "category" : "c-suite",
        "title": "Chief Executive Officer",
        "reportsTo": "" 
    }
]

const categories = [
    { 
        "_id" :0, 
        "name" : "Executive", 
        "parent" : "", 
        "slug" : "c-suite" 
    },
    { 
        "_id" :1, 
        "name" : "Operations", 
        "parent" : "c-suite", 
        "slug" : "operations" 
    },
    { 
        "_id" :2, 
        "name" : "Interns", 
        "parent" : "operations", 
        "slug" : "interns" 
    },
];

/* Review the instructions to complete this assessment
console.info('Your application must have the following output:\n');
console.info('* Terry Cats - Chief Creative Officer: Executive\n\t* Nick Thompson - Head of Design: Operations\n\t\t * Nick Jenson - Intern designer: Interns\n* Bruce Davids - Chief Strategy Officer: Executive\n\t* David Smith - Head of Development: Operations\n\t* John Jones - Head of Marketing: Operations\n\t* Jane Sampson - Head of Content: Operations\n\t* Simon Says - Head of Strategy: Operations\n* Bill Bass - Chief Executive Officer: Executive');
*/

function unflatten(arr) {
  var tree = []

  var grouped = arr.reduce(function(agg, item) {
    agg[item.slug] = item;
    agg[item.slug].children = []
    return agg;
  }, {})

  Object.keys(grouped).forEach(function(key) {
    var value = grouped[key];
    if (value.reportsTo && grouped[value.reportsTo]) {
      grouped[value.reportsTo].children.push(value);
    } else {
      tree.push(value);
    }
  })

  return tree;
}

function print_list(list, ul) {
  for (var i = 0; i < list.length; i++) {
    var li = document.createElement('li');
    li.innerHTML = list[i].name + " " + list[i].surname + " - " + list[i].title;
    // adding category
    li.innerHTML += ": " + categories.find(item => item.slug == list[i].category).name

    if (list[i].children.length > 0) {
      var sub_list = document.createElement('ul');
      li.appendChild(sub_list);
      print_list(list[i].children, sub_list);
    }
    ul.appendChild(li);
  }
}

var result = unflatten(staffMembers)
console.log(result);
print_list(result, document.getElementById('list'));