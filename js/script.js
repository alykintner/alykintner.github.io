function submitGuestbook () {
    let name = document.getElementById('name').value;
    let address = document.getElementById('address').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    sessionStorage.setItem('guestbook', JSON.stringify( {name: name, address: address, email: email, message: message }));
    window.open("gbsubmission.html", "dummy");
}

