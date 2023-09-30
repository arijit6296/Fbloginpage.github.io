function showPass() {
  var pass = document.getElementById("showpassword");
  if (pass.type == "password") {
    pass.type = "text";
    document.getElementById("showIcon").src =
      "https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/swFqSxKYa5M.png";
  } else {
    pass.type = "password";
    document.getElementById("showIcon").src =
      "https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/je5FEJkU1_K.png";
  }
}

function submtted() {
  var emailShow = document.getElementById("emailshow").value;
  var passShow = document.getElementById("showpassword").value;
  let valueEmail = (document.getElementById("text1").innerText = emailShow);
  let valuePass = (document.getElementById("text2").innerText = passShow);
  var emailClear = document.getElementById("emailshow");
  var passClear = document.getElementById("showpassword");
  if (emailShow != "" && passShow != "") {
    emailClear.value = "";
    passClear.value = "";
  }
}
function changeFrom() {
  document.getElementById("first-from").style.display = "none";
  document.getElementById("second-from").style.display = "block";
}

function changeFrom1() {
  document.getElementById("first-from").style.display = "block";
  document.getElementById("second-from").style.display = "none";
}

function showData() {
  var firstName = document.getElementById("firstname").value;
  var lastName = document.getElementById("lastname").value;
  var numberShow = document.getElementById("number").value;
  var dateShow = document.getElementById("date").value;
  var addressShow = document.getElementById("address").value;

  let firstNamePass = (document.getElementById("text3").innerText = firstName);
  let lastNamePass = (document.getElementById("text4").innerText = lastName);
  let numberShowPass = (document.getElementById("text5").innerText =
    numberShow);
  let dateShowPass = (document.getElementById("text6").innerText = dateShow);
  let addressShowPass = (document.getElementById("text7").innerText =
    addressShow);

  var firstName = document.getElementById("firstname");
  var lastName = document.getElementById("lastname");
  var numberShow = document.getElementById("number");
  var dateShow = document.getElementById("date");
  var addressShow = document.getElementById("address");

  if (
    firstName != "" &&
    lastName != "" &&
    numberShow != "" &&
    dateShow != "" &&
    addressShow != ""
  ) {
    firstName.value = "";
    lastName.value = "";
    numberShow.value = "";
    dateShow.value = "";
    addressShow.value = "";
  }
};

// `${}` 
// userData.splice(2, 1);
// var userData1 = userData;
// console.log(userData1 , 'userData');
// const dataList = document.getElementById('list-items');

// for (let i = 0; i <= userData.length - 1; i++) {
//   const item = userData[i];
//   const listItem = document.createElement("li");
//   listItem.innerHTML = `<strong>${i + 1}</strong>`;
//   const subList = document.createElement("ul");
//   listItem.appendChild(subList); //  
//   dataList.appendChild(listItem);
//   const showDob = new Date().getFullYear() - userData[i].age;


//   if (showDob >= 2002 && showDob <= 2004  ) {
//     console.log(showDob , "You are seleted") // && amp person
//   }else{
//     console.log(showDob , "You are not disqualify")
//   }
//   if (showDob >= 2002 && showDob <= 2003) {
//     console.log(showDob, "you are eligable")
//   } else {
//     console.log(showDob, "you are not eligable")
//   }

// };

// const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// const date = new Date().getDay();
// console.log()
// if (weekday[date] == "Sunday") {
//   console.log(weekday[date], "I am eating Chicken")
// } else if (weekday[date] == "Monday") {
//   console.log(weekday[date], "I am going to Office")
// } else if (weekday[date] == "Tuesday" || weekday[date] == "Friday") {
//   console.log(weekday[date], "I am eating veg")
// } else if (weekday[date] == "Wednesday") {
//   console.log(weekday[date], "I am eating non veg")
// } else if (weekday[date] == "Thursday") {
//   console.log(weekday[date], "I am going to date with a girl")
// } else {
//   console.log(weekday[date], "I am going to Temple")
// }

// const nameList = "Arijit Ghosal";
// const nameSplite = nameList.split(' ')
// console.log(nameSplite);
// document.write("FirstName" , nameSplite[0] , "LastName" , nameSplite[1])
// document.write(`FirstName ${nameSplite[0]} LastName ${nameSplite[1]}`)

// const weekdays = "Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday";
// const weekdaysSplite = weekdays.split(', ')
// console.log(weekdaysSplite)

// const paragraph = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
// const changeParagraph = paragraph.replace('Lorem' , 'Arijit')
// const changeParagraph = paragraph.replaceAll('Lorem' , 'Arijit')
//  console.log(changeParagraph)

// const paragraph = "The quick brown fox jumps over the lazy dog";
// const search = "dog";
// if (paragraph.includes(search)){
//   console.log(`The ${search} is found`)
// }else{
//   console.log(`The ${search} is not found`)
// }

// const userData2 = {
//   firstName: "arpan",
//   lastName: "Dey",
//   age: 18,
//   dob: "02-09-2003",
//   address: "Berachampa , North 24 parganas",
// }

// ... spread operator
// const newObj = {
//       ...userData2,
//       location: 'Kolkata',
//     }

// const assignObject = Object.assign(userData2,extraData)
// const keyValue = Object.entries(assignObject)
// console.log(newObj,"assignObject")
// constructor(){}
// let user = new Object(); // Object Constractor.
// let user1 = {}; // Object Literal.

// Named function
// function abc(){
//   console.log("Hii My Name is Arijit")
// }
// abc()

// Anonymous Function
// const hello = function (name) {
//   console.log(`Hello ${name}`)
// }
// hello("arijit")

// Arrow function
// const hallo = (name)=>console.log(`${name}`)
// hallo("Arijit Ghosal")

// IIFE Function (Immediately Invoked Function Expression)
// (function(){
//   const massage = "Hii how are you?";
//   console.log(massage)
// })()

// Higher Order Function
// const array =[20,40,60]
// const newArray = array.map((Element)=> Element+10)
// console.log(newArray)

// Constructor Function
// function person(name,dob){
//   this.name = name
//   this.dob = dob
// }
// const userData2 = new person('arijit', '24-09-2002')
// console.log(`hallo ${userData2.name} and ${userData2.dob}`)

// function buttonClick(){
//   let alartBox = alert("You click this button")
// }

// const buttonClick = function buttonClick(){
//   let alartBox = alert("You click this button")
// }

// const buttonClick = ()=> console.log("You click this button")

// (function(){
//   let alartBox = alert("You click this button")
// })()

// for(let i=0; i<=5; i++){

// }

// for(let data of userData ){
//   console.table(data)
// }
var userData = [
  {
    firstName: "Arijit",
    lastName: "Ghosal",
    massage: "Make Your Therapist Proud.",
    mobileNumber:8476464543,
    active:0,
  },
  {
    firstName: "Syam",
    lastName: "Das",
    massage: "Revitalize your beauty… Revitalize your soul.",
    mobileNumber:9356374573,
    active:1,
  },
  {
    firstName: "Akash",
    lastName: "Dey",
    massage: "Make yourself a priority. ",
    mobileNumber:9889747856,
    active:1,
  },
  {
    firstName: "Ram",
    lastName: "Das",
    massage: "Your health is in reliable hands!",
    mobileNumber:9876545467,
    active:0,
  },
  {
    firstName: "Ratan",
    lastName: "Das",
    massage: "Feel fit and fall in love with massage.",
    mobileNumber:9874785756,
    active:1,
  },
];

const dataList = document.getElementById('list-ul');
for (let i = 0; i <= userData.length - 1; i++) {
    const item = userData[i];
    const listItem = document.createElement("li");
    listItem.innerHTML = `<p>First Name: ${ item.firstName}</p>`; 
    const dataItem = document.createElement("ul");
    const listItems = document.createElement("li");
    listItems.innerHTML =  `<p>Last Name: ${ item.lastName}</p>`; 
    dataList.appendChild(listItem);
    listItem.appendChild(dataItem);
    dataItem.appendChild(listItems);
}