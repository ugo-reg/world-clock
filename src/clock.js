function updateNigeriaTime(){
  let nigeriaElement = document.querySelector("#countryOne");
  let nigeriaDateElement = nigeriaElement.querySelector(".date");
  let nigeriaTimeElement = nigeriaElement.querySelector(".time");
  let nigeriaTime = moment().tz("Africa/Lagos");
  nigeriaDateElement.innerHTML = moment().format("MMMM Do YYYY");
 nigeriaTimeElement.innerHTML = `${nigeriaTime.format("h:mm:s [<small>]A[</small>]")}`;
}
updateNigeriaTime();
setInterval(updateNigeriaTime,1000);


function updateIndiaTime() {
  let indiaElement = document.querySelector("#countryTwo");
  let indiaDateElement = indiaElement.querySelector(".date");
  let indiaTimeElement = indiaElement.querySelector(".time");
  let indiaTime = moment().tz("Asia/Kolkata");
  indiaDateElement.innerHTML = moment().format("MMMM Do YYYY");
  indiaTimeElement.innerHTML = `${indiaTime.format("h:mm:s [<small>]A[</small>]")}`;
}
updateIndiaTime();
setInterval(updateIndiaTime, 1000);


function updateCanadaTime() {
  let canadaElement = document.querySelector("#countryThree");
  let canadaDateElement = canadaElement.querySelector(".date");
  let canadaTimeElement = canadaElement.querySelector(".time");
  let canadaTime = moment().tz("America/Toronto");
  canadaDateElement.innerHTML = moment().format("MMMM Do YYYY");
  canadaTimeElement.innerHTML = `${canadaTime.format(
    "h:mm:s [<small>]A[</small>]"
  )}`;
}
updateCanadaTime();
setInterval(updateCanadaTime, 1000);