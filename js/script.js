// this function stores the information and opens to a new page upon submit
function submitGuestbook () {
    let name = document.getElementById('name').value;
    let message = document.getElementById('message').value;
    sessionStorage.setItem('guestbook', JSON.stringify( {name: name, message: message }));
    window.open("gbsubmission.html", "_self");
}

