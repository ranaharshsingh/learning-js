// to learn :-
                            // getelementbyid getelementbyclass queryselectorall
// dom manipulation
// html se element select krna 
// text badalna
// html badalna 
// css badalna
// attribute
// event listeners

let li = document.querySelectorAll("li");
li.forEach(function(val){
    console.log(val.textContent);
});

let lis=document.querySelectorAll( "ul li:nth-Children(2n)");

lis.forEach(function(ele){
    ele.classList.add("class-high");
})

                                  // ----------------*---------------- -addeventlisteners
                    
let sel = document.queryselector("select");
let device = document.queryselector("device");

sel.addeventlistner("change",function(dets){
    device.textContent=`${dets.target.value} device selected`;
});


                                // ----------------*---------------- keydown

let h1= document.queryselector("h1");

window.addeventlistner("keydown",function(dets){  // the button pressed will be printed;
    h1.textContent=dets.key;
});
                // including space

let h1= document.queryselector("h1");

window.addeventlistner("keydown",function(dets){
    if(dets.key === " "){
        h1.textContent="spc";
    }else{
        h1.textContent=dets.key;
    }
});