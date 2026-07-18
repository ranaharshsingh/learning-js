let obj={
    name:"harsh",
    age: 20,
    faculty: "bca",
};

let aa="name";
obj.aa;    // how objects aree accessed;
obj[aa];  //converts this string into values;

const user={
    name:"harsh",           //
    age: 20,
    address:{
        city:ranchi,
        pin:835201,
        location:{
            lat: 32.2,
            long: 77.3,
        },
    },
};

user.address.locations.long; // this is how accessed;
let {lat,long}=user.address.location;  //now lat and lang can directly be accessed; destructuring

for(let key in obj){
    console.log(key);
    // wrong way
    obj.key;
    obj[key];   //right way
}

let obj2=[...obj]; //spread mtd;

let obj3= Object.assign({price:infinity},obj);// this will add price property;

let obj3=JSON.parse(JSON.stringify(obj));  // nested object are made the we convert it ;no spread operator  deep clone hai ye

obj?.address?.location;  // if data didnt get 

//destructing the key "first-name" as a variable called firstName.

const user = {
    "first-name": "harsh",
};

let { "first-name": firstName}= user;

// use for-in loops to log all keys this objects;

const course = {
    title: "javascript",
    duration: "4 weeks",
};

for(let key in course){
    console.log(key);
}
// use objects.enteris to print all key-value pairs as : title: javascript
const course = {
    title:"javascript",
    duration:" 4 weeks",

};

Object.entries(course).foreach(function(val){
    console.log(val[0]+ ":"+ val[1]);
});