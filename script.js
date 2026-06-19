function login(){

let htno=document.getElementById("htno").value;

let password=document.getElementById("password").value;

let url="https://script.google.com/macros/s/AKfycbxoISPwQeHi1fTJuAnSf8X1XbeOazrqzYGkGIoI0aBEF3hzVLgD0lS4szV6N8mCjL9P/exec?action=login&htno="
+encodeURIComponent(htno)
+"&password="
+encodeURIComponent(password);

fetch(url)

.then(response=>response.json())

.then(data=>{

if(data.status=="success"){

localStorage.setItem("name",data.name);

localStorage.setItem("branch",data.branch);

localStorage.setItem("year",data.year);

window.location="dashboard.html";

}
else{

document.getElementById("msg").innerHTML=
"Invalid Login";

}

})

.catch(error=>{

document.getElementById("msg").innerHTML=
"Connection Error";

});

}
