import moment from "moment";

let days_since_start_of_month = moment().startOf("month").fromNow();
console.log(days_since_start_of_month);
