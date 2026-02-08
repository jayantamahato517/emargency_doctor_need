function callEmergency() {
    alert("Calling emergency services...");
    window.location.href = "tel:112";
}

function contactDoctor() {
    alert("Connecting to available doctor...");
    window.location.href = "mailto:doctorhelp@example.com";
}

function findHospital() {
    alert("Redirecting to nearby hospitals...");
    window.open("https://www.google.com/maps/search/nearby+hospitals", "_blank");
}
