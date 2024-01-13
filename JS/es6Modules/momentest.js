import moment from "moment";

const body = document.querySelector("body");
console.log(body);
const h1 = document.createElement("h1");
let days_since_start_of_month = moment().startOf("month").fromNow();
h1.innerHTML = days_since_start_of_month;
body.appendChild(h1);
console.log(days_since_start_of_month);
