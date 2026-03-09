// ===============================
// LOCAL STORAGE BAZA
// ===============================

let smjerovi = JSON.parse(localStorage.getItem("smjerovi")) || [];
let polaznici = JSON.parse(localStorage.getItem("polaznici")) || [];
let grupe = JSON.parse(localStorage.getItem("grupe")) || [];
let users = JSON.parse(localStorage.getItem("users")) || [];

// ===============================
// SPREMANJE PODATAKA
// ===============================

function save(){

localStorage.setItem("smjerovi",JSON.stringify(smjerovi));
localStorage.setItem("polaznici",JSON.stringify(polaznici));
localStorage.setItem("grupe",JSON.stringify(grupe));
localStorage.setItem("users",JSON.stringify(users));

}

// ===============================
// SPINNER
// ===============================

function showSpinner(){
document.getElementById("spinner").classList.remove("hidden");
}

function hideSpinner(){
document.getElementById("spinner").classList.add("hidden");
}


// ===============================
// HAMBURGER MENU
// ===============================

menuBtn.onclick=()=>{
menu.classList.toggle("hidden");
};


// ===============================
// NASLOVNA
// ===============================

function goHome(){

app.innerHTML=`

<div class="card trip">

<img src="images/pexels-photo-2044443.jpeg">

<h3>Greek Experience</h3>

<p>Enjoy the beauty of Santorini.</p>

<button onclick="bookTrip()">Book now</button>

</div>

<div class="card trip">

<img src="images/pexels-photo-1955134.jpeg">

<h3>Thai Experience</h3>

<p>Explore tropical Thailand.</p>

<button onclick="bookTrip()">Book now</button>

</div>

`;

}

// ===============================
// BOOKING
// ===============================

function bookTrip(){

alert("Booking successful!");

}

// ===============================
// REGISTER
// ===============================

function showRegister(){

app.innerHTML=`

<div class="card">

<h3>Register</h3>

<input id="email" placeholder="Email">

<input id="pass" type="password" placeholder="Password">

<button onclick="register()">Register</button>

</div>

`;

}

function register(){

let email=email.value;
let pass=pass.value;

if(!email || !pass){

alert("Registration failed");

return;

}

users.push({email,pass});

save();

alert("Registration successful");

goHome();

}


// ===============================
// LOGIN
// ===============================

function showLogin(){

app.innerHTML=`

<div class="card">

<h3>Sign in</h3>

<input id="email">
<input id="pass" type="password">

<button onclick="login()">Login</button>

</div>

`;

}

function login(){

let email=email.value;
let pass=pass.value;

let user=users.find(u=>u.email===email && u.pass===pass);

if(!user){

alert("Login failed");

return;

}

alert("Login successful");

goHome();

}


// ===============================
// CRUD SMJER
// ===============================

function showSmjerovi(){

app.innerHTML=`

<div class="card">

<h3>Novi smjer</h3>

<input id="naziv">

<button onclick="addSmjer()">Dodaj</button>

</div>

`;

smjerovi.forEach((s,i)=>{

app.innerHTML+=`

<div class="card">

${s.naziv}

<button onclick="deleteSmjer(${i})">Obriši</button>

</div>

`;

});

}

function addSmjer(){

let naziv=document.getElementById("naziv").value;

smjerovi.push({naziv});

save();

showSmjerovi();

}



// ===============================
// START APP
// ===============================

goHome();