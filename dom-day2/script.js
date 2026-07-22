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