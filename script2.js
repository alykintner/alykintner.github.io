var guestbookInfo = JSON.parse(sessionStorage.getItem('guestbook'));

var guestName = guestbookInfo.name;
var guestMessage = guestbookInfo.message;
var guestNameElement = document.getElementById('guestname').innerHTML = "Thank you " + guestName + " for your submission.";
var guestMessageElement = document.getElementById('guest-message').innerHTML = "The following message has been received: " + guestMessage;
