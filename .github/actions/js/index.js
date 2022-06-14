import * as core from '@actions/core';

function checkZero(data) {
    if (data.length == 1) {
        data = "0" + data;
    }
    return data.toString();
}

function getDate(offset) {
    let today = new Date();

    let utc = today.getTime() + (today.getTimezoneOffset() * 60000);

    today = new Date(utc + (3600000 * offset));

    let day = today.getDate() + "";
    let month = (today.getMonth() + 1) + "";
    let year = today.getFullYear() + "";
    let hour = today.getHours() + "";
    let minutes = today.getMinutes() + "";
    let seconds = today.getSeconds() + "";

    day = checkZero(day);
    month = checkZero(month);
    year = checkZero(year);
    hour = checkZero(hour);
    minutes = checkZero(minutes);
    seconds = checkZero(seconds);


    return year + month + day + "." + hour + minutes + seconds;
}

try {
    // READ INPUT
    const offset = core.getInput('offset');
    // WRITE OUTPUT
    core.setOutput("time", getDate(offset));
} catch (error) {
    core.setFailed(error.message);
}