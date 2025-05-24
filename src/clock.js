function Time(){
  let nigeriaElement = document.querySelector("#countryOne");
  if(nigeriaElement){
  let nigeriaDateElement = nigeriaElement.querySelector(".date");
  let nigeriaTimeElement = nigeriaElement.querySelector(".time");
  let nigeriaTime = moment().tz("Africa/Lagos");
  nigeriaDateElement.innerHTML = moment().format("MMMM Do YYYY");
 nigeriaTimeElement.innerHTML = `${nigeriaTime.format("h:mm:s [<small>]A[</small>]")}`;
  }


  let indiaElement = document.querySelector("#countryTwo");
  if(indiaElement){
  let indiaDateElement = indiaElement.querySelector(".date");
  let indiaTimeElement = indiaElement.querySelector(".time");
  let indiaTime = moment().tz("Asia/Kolkata");
  indiaDateElement.innerHTML = moment().format("MMMM Do YYYY");
  indiaTimeElement.innerHTML = `${indiaTime.format("h:mm:s [<small>]A[</small>]")}`;
  }

  let canadaElement = document.querySelector("#countryThree");
  if(canadaElement){
  let canadaDateElement = canadaElement.querySelector(".date");
  let canadaTimeElement = canadaElement.querySelector(".time");
  let canadaTime = moment().tz("America/Toronto");
  canadaDateElement.innerHTML = moment().format("MMMM Do YYYY");
  canadaTimeElement.innerHTML = `${canadaTime.format(
    "h:mm:s [<small>]A[</small>]")}`;
}
}
Time();
setInterval(Time, 1000);

function updateSelect(event){
    let selectTimeZone=event.target.value;
    let selectName= selectTimeZone.replace("_"," ").split("/")[1];
    let selectTime=moment().tz(selectTimeZone);
   let citiesElement=document.querySelector("#cities");
   citiesElement.innerHTML=`
   <div class="city-2">
   <h2>${selectName}</h2>
   <div class="date-time">
<div class="date">${selectTime.format("MMMM Do YYYY")}</div>
<div class="time">${selectTime.format("h:mm:s [<small>]A[</small>]")}</div>
</div>
</div>
`
}


let citiesSelect=document.querySelector("#select");
citiesSelect.addEventListener("change",updateSelect)