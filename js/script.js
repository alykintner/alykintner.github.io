function submitGuestbook () {
    let name = document.getElementById('name').value;
    let message = document.getElementById('message').value;
    sessionStorage.setItem('guestbook', JSON.stringify( {name: name, message: message }));
    window.open("gbsubmission.html", "_self");
}

