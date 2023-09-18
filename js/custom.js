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
}

var userData = [
  {
    firstName: "Arijit",
    lastName: "Ghosal",
    age: 21,
    dob: "02-09-2002",
    address: "Berachampa , North 24 parganas",
  },
  {
    firstName: "Ram",
    lastName: "Das",
    age: 23,
    dob: "02-09-2000",
    address: "Berachampa , North 24 parganas",
  },
  {
    firstName: "Syam",
    lastName: "Mandal",
    age: 25,
    dob: "02-09-1998",
    address: "Berachampa , North 24 parganas",
  },
  {
    firstName: "Akash",
    lastName: "Dey",
    age: 20,
    dob: "02-09-2003",
    address: "Berachampa , North 24 parganas",
  },
  {
    firstName: "arpan",
    lastName: "Dey",
    age: 18,
    dob: "02-09-2003",
    address: "Berachampa , North 24 parganas",
  },
];
// `${}` 
// userData.splice(2, 1);
// var userData1 = userData;
// console.log(userData1 , 'userData');
const dataList = document.getElementById('list-items');

for (let i = 0; i <= userData.length - 1; i++) {
  const item = userData[i];
  const listItem = document.createElement("li");
  listItem.innerHTML = `<strong>${i + 1}</strong>`;
  const subList = document.createElement("ul");
  listItem.appendChild(subList); //  
  dataList.appendChild(listItem);
  const showDob = new Date().getFullYear() - userData[i].age;


  // if (showDob >= 2002 && showDob <= 2004  ) {
  //   console.log(showDob , "You are seleted") // && amp person
  // }else{
  //   console.log(showDob , "You are not disqualify")
  // }
  if (showDob >= 2002 && showDob <= 2003) {
    console.log(showDob, "you are eligable")
  }else{
    console.log(showDob, "you are not eligable")
  }

};

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const date = new Date().getDay();
console.log()
if(weekday[date]=="Sunday"){
console.log(weekday[date], "I am eating Chicken")
}else if(weekday[date]=="Monday"){
  console.log(weekday[date], "I am going to Office")
}else if(weekday[date]=="Tuesday" || weekday[date]=="Friday"){
  console.log(weekday[date], "I am eating veg")
}else if(weekday[date]=="Wednesday"){
  console.log(weekday[date], "I am eating non veg")
}else if(weekday[date]=="Thursday"){
  console.log(weekday[date], "I am going to date with a girl")
}else{
  console.log(weekday[date], "I am going to Temple")
}