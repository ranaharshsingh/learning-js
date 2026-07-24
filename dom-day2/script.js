// creating our own customised button to open file;

let btn=document.querySelector("#btn");

 let inp=document.querySelector("#file-inp");

 btn.addEventListener("click",function(){
    file-inp.click();
 });

 file-inp.addEventListener("change",function(dets){
    //console.log(dets.target.files[0].name);
    const file = dets.target.files[0];
    if(file){
        btn.textContent=file.name;
    }
 });

  // ----------------*---------------- creating a profile card using input form;

  let form= document.querySelector("form");
  let input=document.querySelector("input");
  let main=document.querySelector("#main");

  form.addEventListener("submit", function(dets){
    dets.preventDefault();                // this will prevent page reload; 
  });

  let card=document.createElement("div");
  card.classList.add("card");

  let profile=document.querySelector("div");
  profile.classList.add("profile");

  let img=document.querySelector("img");
  img.setAttribute("src",inputs[0].value);

  let h3=document.querySelector("h3");
  h3.textContent=inputs[1].value;
  let h5=document.querySelector("h5");
   h5.textContent=inputs[2].value;
  let p=document.querySelector("p");
   p.textContent=inputs[3].value;


  profile.appendChild(img);
  card.appendChild(profile);

  card.appendChild(h3);
  card.appendChild(h5);
  card.appendChild(p);

  main.appendChild(card);

  inputs.forEach(function (inp) {
    if(inp.type !== "submit"){
        inp.value="";
    }
  });

   // ----------------*----------------email and password validation

// Email & Password Validation

let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

form.addEventListener("submit", function (dets) {
    dets.preventDefault();

    document.querySelector("#emailError").textContent = "";
    document.querySelector("#passwordError").textContent = "";
    document.querySelector("#resultMessage").textContent = "";

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]{2,3}$/;

    const passwordRegex =
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

    let emailAns = emailRegex.test(email.value);
    let passwordAns = passwordRegex.test(password.value);

    let isValid = true;

    if (!emailAns) {
        document.querySelector("#emailError").textContent =
            "Email incorrect";
        document.querySelector("#emailError").style.display = "initial";
        isValid = false;
    }

    if (!passwordAns) {
        document.querySelector("#passwordError").textContent =
            "Password must be at least 8 characters";
        document.querySelector("#passwordError").style.display = "initial";
        isValid = false;
    }

    if (isValid) {
        document.querySelector("#resultMessage").textContent =
            "Everything is correct";
    }
});
