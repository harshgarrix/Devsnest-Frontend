//QUESTION 1

console.log("\n");
var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
function print_keys(obj) {
    var key = Object.keys(obj);
    let st = ''
    for (item in key) {
        st = st + key[item] + ",";
    }
    var s = st.slice(0, -1);
    console.log(s);
}
print_keys(student);
console.log("\n");

//QUESTION 2

console.log("\n");
var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
console.log("BEFORE:\t",student);
delete student.rollno;
console.log("AFTER:\t", student);
console.log("\n");

//QUESTION 3

console.log("\n");
var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
function find_length(obj) {
    var arr = Object.keys(obj);
    console.log("Size of object is : ",arr.length);
}
find_length(student);
console.log("\n");

//QUESTION 4

console.log("\n");
var library = [{ author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];
function reading_status(obj) {
    for (item of obj) {
        if (item.readingStatus == true) {
            console.log(item.title, " written by ", item.author, " was read already.");
        }
        else {
            console.log(item.title, " written by ", item.author, " is yet to read.");
        }
    }
}
reading_status(library);
console.log("\n");

//QUESTION 5

console.log("\n");
const parent = {
    rad: 10,
    set radius(new_rad) {
        this.rad = new_rad;
    },
    ht: 20,
    set height(new_height) {
        this.ht = new_height;
    },
    Volume: function vol(){
        return Math.PI * this.rad * this.rad * this.ht;
    }
}
parent.radius = 5;
parent.height = 10;
console.log("Volume is : ", parent.Volume().toFixed(4));
console.log("\n");

//QUESTION 6

console.log("\n");
var library = [{ title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];
//function sort_by(obj, st, reverse = false) {
//    if (st == 'title') {
//        var title_keys = []
//        for (index of obj) {
//            title_keys.push(index.title);
//            return title_keys.sort();
//        }
//    }
//}
//library.sort(sort_by(library,'title'));
//var sortable = [];
//for (var index in library) {
//    sortable.push([library[index].title, library[index]]);
//}

//console.log(sortable.sort(function (a, b) {
//    return ;
//}))
var sort_by = function (field_name, reverse, initial) {

    var key = initial ?
        function (x) {
            return initial(x[field_name]);
        } :
        function (x) {
            return x[field_name];
        };

    reverse = !reverse ? 1 : -1;

    return function (x, y) {
        return x = key(x), y = key(y), reverse * ((x > y) - (y > x));
    };
};


var newobj = library.sort(sort_by('title', false));

console.log(newobj);
console.log("\n");

