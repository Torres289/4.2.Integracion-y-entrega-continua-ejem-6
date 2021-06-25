const core = require('@actions/core');

function checkZero(data){
    if(data.length == 1){
      data = "0" + data;
    }
    return data.toString();
}

function getDate(offset){
    var today = new Date();

    var utc = today.getTime() + (today.getTimezoneOffset() * 60000);

    today = new Date(utc + (3600000*offset));

    var day = today.getDate() + "";
    var month = (today.getMonth() + 1) + "";
    var year = today.getFullYear() + "";
    var hour = today.getHours() + "";
    var minutes = today.getMinutes() + "";
    var seconds = today.getSeconds() + "";

    day = checkZero(day);
    month = checkZero(month);
    year = checkZero(year);
    hour = checkZero(hour);
    minutes = checkZero(minutes);
    seconds = checkZero(seconds);


    return year+month+day+"."+hour+minutes+seconds;
}

try {
  // READ INPUT
  const offset = core.getInput('offset');
  // WRITE OUTPUT
  core.setOutput("time", getDate(offset));
} catch (error) {
  core.setFailed(error.message);
}

