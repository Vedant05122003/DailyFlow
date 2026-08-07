// Today's Date

const date = new Date();

document.getElementById("todayDate").innerHTML =
date.toDateString();

// Greeting

const hour = date.getHours();

let greet = "Good Evening";

if(hour<12){

greet="Good Morning ☀️";

}

else if(hour<17){

greet="Good Afternoon 🌤";

}

document.getElementById("greeting").innerHTML=greet;

// Chart

const ctx=document.getElementById("productivityChart");

new Chart(ctx,{

type:"line",

data:{

labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],

datasets:[{

label:"Productivity",

data:[72,84,65,90,78,96,88],

fill:true,

tension:.4

}]

},

options:{

responsive:true,

plugins:{

legend:{

display:false

}

}

}

});
