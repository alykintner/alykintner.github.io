// the below function hides the submission form and reveals a message confirming rsvp submission
function submitRSVP() {
    let container = document.getElementById("form-container");
    container.style = "display: none";
    let thankYouDiv = document.getElementById("thank-you-text");
    thankYouDiv.style = "display: block"
}