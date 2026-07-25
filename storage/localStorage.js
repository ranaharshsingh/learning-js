// localstorage-> stores data inside your own browser which runs even after device locked; permanent data storage;5mb;

// how to store data;
// how to fetch data;
// remove data;
// update data;

localStorage.setItem("name","harsh");
let val = localStorage.getItem("name");

localStorage.removeItem("name");

localStorage.setItem("name","harshita") // setitem overwrite kr deta hai value ko; so updated;

localStorage.setItem("friends",JSON.stringify(["asivin","raj","harsh"])); // since only strings are allowed to pass so stringify kr ke ho jayega;

localStorage.getItem("friends");
JSON.parse();