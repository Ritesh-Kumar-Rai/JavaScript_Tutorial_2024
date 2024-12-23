// As we know that we can access object propeties by (.),(?.) or []
// But sometimes it get awkward to use obj.key many times actually when your object & key name is longer
// to solve this problem we use Destructuring in Object. Let's learn how to destructure an object

const api_data = {
    id : 90,
    timeStamp : new Date().toLocaleString(),
    users : {
        user1 : "lorem1",
        user2 : "lorem2",
        user3 : "lorem3",
        user4 : "lorem4"
    },
    country_domain : "India"
};

// To destructure
const {country_domain : dom, id,timeStamp : time} = api_data;

// console.log(country_domain,id,timeStamp);
console.log(dom,id,);
console.log(time);

// In case of nested object
const {user1 : u} = api_data.users;

console.log(u);

// In react we also destructure data instead of general way props.value

const navbar = ({user}) =>{

    // general way, instead of props.user we destructure like {user}
    return `<ul> 
                <li>User : ${user}</li>
            </ul>`;
}

// navbar(user = "RKR");


const user = [
    {
        name : "Ritesh Kumar Rai",
        origin : "India"
    },
    {
        name : "lorem",
        origin : "pc"
    }
];

// In case of array of object
const {name} = user[0];
console.log(name);


// Why we are spending our most of time in understanding array or objects?
// is Because, in our development career we mostly work on JSON which is object or arrays

// general api looks like :
/*

    {
        {},
        {},
        {},
        ...
    }

*/
// or sometimes we got array of objects

/*

    [
        {},
        {},
        {},
        ...
    ]

*/