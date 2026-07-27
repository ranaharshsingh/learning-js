const boilwater=()=>{
    return new Promise((resolve)=>{
        setTimeout(() =>{
            console.log("putting water to boil");
            resolve("boiling water");
        }, 1000);
    });
}
const addPasta=(previousStepResult)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(previousStepResult){
                console.log("putting pasta");
                resolve("add pasta");
            }else{
                console.log("cancel putting");
                reject("cancel");
            }
        }, 2000);
    });
}        
const servefood=(lastresult)=>{
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            if(lastresult){
                console.log("all done");
               resolve("serve it");
            }else{
                reject("not done!");
            }
            
        }, 2000);
    })
}
boilwater()
.then(waterboiled=>{
    return addPasta(waterboiled);
})
.then(addedpasta=>{
    return servefood(addedpasta);
})
.then((msg)=>console.log(msg))
.catch((err)=>console.log(err))