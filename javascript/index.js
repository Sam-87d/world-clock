function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss[<small>]A[</small>]"
  );

  let hobartElement = document.querySelector("#hobart");
  let hobartDateElement = hobartElement.querySelector(".date");
  let hobartTimeElement = hobartElement.querySelector(".time");
  let hobartTime = moment().tz("Australia/Hobart");

  hobartDateElement.innerHTML = hobartTime.format("MMMM Do YYYY");
  hobartTimeElement.innerHTML = hobartTime.format(
    "h:mm:ss[<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
