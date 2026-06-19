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

document.getElementById("msg").innerHTML=
"Welcome "+data.name+
" ("+data.branch+")";

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
