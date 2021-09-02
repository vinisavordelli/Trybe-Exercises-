document.querySelector("#header-container").style.backgroundColor = "green";
document.querySelector(".emergency-tasks").style.backgroundColor = "pink";
document.querySelector(".no-emergency-tasks").style.backgroundColor = "yellow";
let emergencyHeaders = document.querySelectorAll(".emergency-tasks h3")
for(let i=0; i< emergencyHeaders.length; i++){
    emergencyHeaders[i].style.backgroundColor ="purple";
}
let noEmergencyHeaders = document.querySelectorAll(".no-emergency-tasks h3")
for(let i=0; i< noEmergencyHeaders.length; i++){
    noEmergencyHeaders[i].style.backgroundColor ="black";
}